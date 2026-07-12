# -*- coding: utf-8 -*-
"""
AoV / Liên Quân Mobile - Consolidated Meta, Avatar & Detailed Counter-Pick Crawler
This script crawls the complete database of 129 AoV heroes:
1. Queries aov-builds.com/tuong/ to get the official Vietnamese roster, display names, and webp avatars.
2. Queries rovmeta.com to parse the Next.js stream payload for S+/S/A/B/C tiers, win/pick/ban rates, roles, and counter-pick references.
3. Concurrently queries aov-builds.com/khac-che/<slug>/ using 10 threads to extract lane-specific counters and their detailed reasons in Vietnamese.
4. Falls back to RovMeta counters with default messages for any missing/404 counter pages.
5. Auto-patches app.js with the updated HERO_DATABASE.
"""

import os
import json
import requests
import re
import time
import unicodedata
import concurrent.futures
from bs4 import BeautifulSoup

# --- CONFIGURATION & ENDPOINTS ---
AOV_BUILDS_URL = "https://aov-builds.com/tuong/"
ROVMETA_URL = "https://rovmeta.com"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7",
    "Referer": "https://aov-builds.com/"
}

# Translate aov-builds Vietnamese slug IDs to RovMeta English IDs
AOV_TO_ROVMETA = {
    "dieu-thuyen": "diaochan",
    "lu-bo": "lubu",
    "ngo-khong": "wukong",
    "trieu-van": "zanis",
    "richter": "riktor",
    "celica": "celica", # Brunhilda/Celica
    "stuart": "stuart",
    "kaine": "kaine",
    "helen": "helen",
    "payna": "payna",
    "the-joker": "thejoker",
    "azzenka": "azzenka"
}

# Map legacy/different English names found in counters to modern local IDs
UNMATCHED_REPLACEMENTS = {
    "payna": "helen",
    "mortos": "arthur",
    "batman": "kaine",
    "brunhilda": "celica",
    "thejoker": "stuart"
}

# Map RovMeta roles to drafting lane roles
ROVMETA_ROLE_TO_LANE = {
    "marksman": "AD",
    "mage": "Mid",
    "warrior": "Top",
    "assassin": "Jungle",
    "tank": "SP",
    "support": "SP"
}

# Overrides for meta roles where competitive lane differs from basic archetype
ROLE_OVERRIED = {
    "zuka": "Jungle",
    "yan": "Jungle",
    "zephys": "Jungle",
    "rourke": "Jungle",
    "errol": "Jungle"
}

def remove_accents(input_str):
    """Normalize unicode characters and filter out combining diacritics (accents)."""
    nfkd_form = unicodedata.normalize('NFKD', input_str)
    return u"".join([c for c in nfkd_form if not unicodedata.combining(c)])

def clean_id(name):
    """Converts a display name into a clean, unique lowercase alphanumeric ID."""
    cleaned = remove_accents(name.lower())
    cleaned = cleaned.replace('đ', 'd').replace('’', '').replace("'", "")
    cleaned = "".join([c for c in cleaned if c.isalnum()])
    return cleaned

def resolve_nextjs_pointer(ptr, data_root):
    """Resolves Next.js stream pointers like $6:props:data:tiers:S+:5:counters:0:hero"""
    if not isinstance(ptr, str) or "tiers" not in ptr:
        return None
        
    parts = ptr.split(":")
    try:
        start_idx = parts.index("tiers")
        path_parts = parts[start_idx + 1:] # Skip 'tiers' itself, since data_root is the 'tiers' dict
    except ValueError:
        return None
        
    current = data_root
    for part in path_parts:
        if isinstance(current, dict):
            current = current.get(part)
        elif isinstance(current, list):
            try:
                idx = int(part)
                current = current[idx]
            except ValueError:
                return None
        else:
            return None
            
    return current

def estimate_attributes(role):
    """Generates lane-accurate default ratings."""
    if role == "Top":
        return { "damage": 3, "tankiness": 4, "mobility": 2, "teamfight": 4, "split_push": 4 }
    elif role == "Jungle":
        return { "damage": 5, "tankiness": 2, "mobility": 5, "teamfight": 3, "split_push": 4 }
    elif role == "Mid":
        return { "damage": 4, "tankiness": 1, "mobility": 3, "teamfight": 5, "split_push": 2 }
    elif role == "AD":
        return { "damage": 5, "tankiness": 1, "mobility": 3, "teamfight": 4, "split_push": 3 }
    elif role == "SP":
        return { "damage": 1, "tankiness": 5, "mobility": 2, "teamfight": 5, "split_push": 1 }
    return { "damage": 3, "tankiness": 3, "mobility": 3, "teamfight": 3, "split_push": 3 }

def crawl_hero_counters_from_aovbuilds(slug, meta_id_to_local_id):
    """Crawls and parses the detailed counter page from aov-builds.com/khac-che/<slug>/"""
    url = f"https://aov-builds.com/khac-che/{slug}/"
    try:
        response = requests.get(url, headers=HEADERS, timeout=8)
        if response.status_code != 200:
            return slug, None
            
        soup = BeautifulSoup(response.content, "html.parser")
        accordions = soup.find_all("div", class_="counter-box")
        
        parsed_counters = []
        seen_counter_ids = set()
        
        for box in accordions:
            content_div = box.find("div", class_="accordion__content")
            if not content_div:
                continue
                
            items = content_div.find_all("div", class_="nav__tab__content__item")
            for item in items:
                text_lines = [l.strip() for l in item.text.split("\n") if l.strip()]
                if not text_lines:
                    continue
                    
                hero_name = text_lines[0]
                reason = " ".join(text_lines[1:]) if len(text_lines) > 1 else ""
                reason = re.sub(r'\s+', ' ', reason).strip()
                
                # Resolve local ID
                c_meta_id = clean_id(hero_name)
                c_meta_id = UNMATCHED_REPLACEMENTS.get(c_meta_id, c_meta_id)
                
                c_local_id = meta_id_to_local_id.get(c_meta_id)
                if not c_local_id:
                    for cid in meta_id_to_local_id:
                        if cid in c_meta_id or c_meta_id in cid:
                            c_local_id = meta_id_to_local_id[cid]
                            break
                            
                if c_local_id and c_local_id not in seen_counter_ids:
                    seen_counter_ids.add(c_local_id)
                    parsed_counters.append({
                        "id": c_local_id,
                        "reason": reason
                    })
        return slug, parsed_counters
    except Exception:
        return slug, None

def main():
    print("[+] KHỞI ĐỘNG TIẾN TRÌNH CÀO DỮ LIỆU ĐỒNG BỘ ĐỘC QUYỀN (AOV-BUILDS & ROVMETA)...")
    
    # ====================================================
    # --- PHASE 1: CRAWL AOV-BUILDS.COM FOR HERO LIST ---
    # ====================================================
    aov_heroes = []
    print(f"[+] 1. Gửi yêu cầu tải danh sách tướng từ: {AOV_BUILDS_URL}...")
    try:
        response = requests.get(AOV_BUILDS_URL, headers=HEADERS, timeout=15)
        if response.status_code == 200:
            soup = BeautifulSoup(response.content, "html.parser")
            links = soup.find_all("a")
            seen = set()
            
            for l in links:
                href = l.get("href", "")
                if href and href.startswith("https://aov-builds.com/tuong/") and len(href.split("/")) >= 5:
                    slug = href.split("/")[-2]
                    if slug == "tuong":
                        continue
                    img = l.find("img")
                    img_src = img.get("src", "") if img else ""
                    name = l.text.strip()
                    if slug not in seen and name:
                        seen.add(slug)
                        aov_heroes.append({
                            "name": name,
                            "slug": slug,
                            "avatar": img_src
                        })
            print(f"[+] Trích xuất thành công {len(aov_heroes)} tướng từ aov-builds.com.")
        else:
            print(f"[-] AOV-Builds trả về mã lỗi: {response.status_code}.")
            return
    except Exception as e:
        print(f"[-] Lỗi kết nối AOV-Builds: {e}")
        return

    # ====================================================
    # --- PHASE 2: CRAWL ROVMETA.COM FOR META STATS ---
    # ====================================================
    meta_heroes = {}
    tiers_data = {}
    print(f"[+] 2. Gửi yêu cầu tải trang chủ RovMeta: {ROVMETA_URL}...")
    try:
        meta_response = requests.get(ROVMETA_URL, headers=HEADERS, timeout=15)
        if meta_response.status_code == 200:
            html = meta_response.text
            chunks = re.findall(r'self\.__next_f\.push\(\[1,\s*"(.*?)"\]\)', html)
            
            # Reconstruct stream
            full_stream = ""
            for c in chunks:
                decoded_chunk = c.replace('\\"', '"').replace('\\\\', '\\')
                full_stream += decoded_chunk
                
            # Locate tiers JSON
            match = re.search(r'"tiers":\s*(\{[\s\S]*?\})', full_stream)
            if match:
                brace_count = 0
                json_chars = []
                for char in full_stream[match.start(1):]:
                    if char == '{':
                        brace_count += 1
                    elif char == '}':
                        brace_count -= 1
                    json_chars.append(char)
                    if brace_count == 0:
                        break
                
                cleaned_json = "".join(json_chars).replace('\\"', '"').replace('\\\\', '\\')
                tiers_data = json.loads(cleaned_json)
                
                # Flatten tiers
                for tier, heroes_list in tiers_data.items():
                    if not isinstance(heroes_list, list):
                        continue
                    for item in heroes_list:
                        if not isinstance(item, dict):
                            continue
                        
                        hero_info = item.get("hero", {})
                        if isinstance(hero_info, str):
                            resolved = resolve_nextjs_pointer(hero_info, tiers_data)
                            if resolved:
                                hero_info = resolved
                                
                        if not isinstance(hero_info, dict):
                            continue
                            
                        name_en = hero_info.get("name_en", "")
                        role = hero_info.get("role", "")
                        stats = item.get("stats", {})
                        if not isinstance(stats, dict):
                            stats = {}
                            
                        if name_en:
                            cid = clean_id(name_en)
                            meta_heroes[cid] = {
                                "name_en": name_en,
                                "role": role,
                                "tier": tier,
                                "win_rate": stats.get("win_rate", 50.0),
                                "pick_rate": stats.get("pick_rate", 5.0),
                                "ban_rate": stats.get("ban_rate", 1.0),
                                "raw_item": item
                            }
                print(f"[+] Trích xuất thành công {len(meta_heroes)} tướng từ RovMeta.")
            else:
                print("[-] Không tìm thấy khối dữ liệu 'tiers' trong stream của RovMeta.")
        else:
            print(f"[-] RovMeta trả về mã lỗi: {meta_response.status_code}.")
    except Exception as e:
        print(f"[-] Lỗi kết nối tới RovMeta: {e}")

    # ====================================================
    # --- PHASE 3: CONCURRENT COUNTERS CRAWL (AOVBUILDS) -
    # ====================================================
    # Build mapping from English clean IDs to local clean IDs
    meta_id_to_local_id = {}
    for h in aov_heroes:
        slug = h["slug"]
        local_id = clean_id(slug)
        mapped_meta_id = AOV_TO_ROVMETA.get(slug, clean_id(slug))
        
        meta_match_id = None
        if mapped_meta_id in meta_heroes:
            meta_match_id = mapped_meta_id
        else:
            for cid in meta_heroes:
                if cid in mapped_meta_id or mapped_meta_id in cid:
                    meta_match_id = cid
                    break
        if meta_match_id:
            meta_id_to_local_id[meta_match_id] = local_id

    print(f"[+] 3. Khởi chạy bộ cào khắc chế đồng thời từ AOV-Builds (10 luồng)...")
    aov_counters_db = {}
    start_time = time.time()
    
    # Spawn 10 threads to fetch all counter pages concurrently
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        future_to_slug = {
            executor.submit(crawl_hero_counters_from_aovbuilds, h["slug"], meta_id_to_local_id): h["slug"] 
            for h in aov_heroes
        }
        for future in concurrent.futures.as_completed(future_to_slug):
            slug = future_to_slug[future]
            try:
                slug, counters = future.result()
                if counters:
                    aov_counters_db[slug] = counters
            except Exception:
                pass
                
    end_time = time.time()
    print(f"[🎉] Hoàn tất thu thập khắc chế từ AOV-Builds trong {end_time - start_time:.2f} giây. Tìm thấy {len(aov_counters_db)}/{len(aov_heroes)} trang chi tiết.")

    # ====================================================
    # --- PHASE 4: MERGE DATA & UPDATE TARGET FILES ---
    # ====================================================
    print("[+] 4. Trộn và đồng bộ hóa cơ sở dữ liệu...")
    crawled_database = []
    meta_matches = 0
    ad_count = 0
    total_counters_linked = 0
    
    for h in aov_heroes:
        slug = h["slug"]
        name_vn = h["name"]
        avatar = h["avatar"]
        
        # Determine unique alphanumeric ID for local storage
        hero_id = clean_id(slug)
        
        # Translate local slug to RovMeta English ID
        mapped_meta_id = AOV_TO_ROVMETA.get(slug, clean_id(slug))
        meta_match = meta_heroes.get(mapped_meta_id)
        
        # Fuzzy matching fallback
        if not meta_match:
            for cid in meta_heroes:
                if cid in mapped_meta_id or mapped_meta_id in cid:
                    meta_match = meta_heroes[cid]
                    break
        
        # Default stats if missing
        win_rate = 50.0
        pick_rate = 5.0
        ban_rate = 1.0
        tier = "A"
        raw_role = "warrior"
        
        if meta_match:
            win_rate = meta_match["win_rate"]
            pick_rate = meta_match["pick_rate"]
            ban_rate = meta_match["ban_rate"]
            tier = meta_match["tier"]
            raw_role = meta_match["role"]
            meta_matches += 1

        # Mapped counters container
        merged_counters = []
        
        # Priority 1: AOV-Builds detailed counters (if exists)
        if slug in aov_counters_db and aov_counters_db[slug]:
            merged_counters = aov_counters_db[slug]
        else:
            # Priority 2: Fallback to RovMeta generic counters
            raw_item = meta_match.get("raw_item", {}) if meta_match else {}
            raw_counters = raw_item.get("counters", []) if isinstance(raw_item, dict) else []
            for c in raw_counters:
                if isinstance(c, str):
                    resolved_c = resolve_nextjs_pointer(c, tiers_data)
                    if resolved_c:
                        c = resolved_c
                if isinstance(c, dict):
                    chero = c.get("hero", {})
                    if isinstance(chero, str):
                        resolved_chero = resolve_nextjs_pointer(chero, tiers_data)
                        if resolved_chero:
                            chero = resolved_chero
                    if isinstance(chero, dict):
                        cname = chero.get("name_en", "")
                        if cname:
                            c_meta_id = clean_id(cname)
                            c_meta_id = UNMATCHED_REPLACEMENTS.get(c_meta_id, c_meta_id)
                            c_local_id = meta_id_to_local_id.get(c_meta_id)
                            if not c_local_id:
                                for cid in meta_id_to_local_id:
                                    if cid in c_meta_id or c_meta_id in cid:
                                        c_local_id = meta_id_to_local_id[cid]
                                        break
                            if c_local_id:
                                # Generate a generic explanation
                                c_vn_name = next((h_vn["name"] for h_vn in aov_heroes if clean_id(h_vn["slug"]) == c_local_id), cname)
                                merged_counters.append({
                                    "id": c_local_id,
                                    "reason": f"{c_vn_name} có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế {name_vn} theo dữ liệu meta."
                                })

        total_counters_linked += len(merged_counters)
            
        # Map RovMeta archetype roles to lane roles
        main_role = ROVMETA_ROLE_TO_LANE.get(raw_role, "Top")
        
        # Apply lane overrides
        if slug in ROLE_OVERRIED:
            main_role = ROLE_OVERRIED[slug]
            
        if main_role == "AD":
            ad_count += 1
            
        attributes = estimate_attributes(main_role)
        
        crawled_database.append({
            "id": hero_id,
            "name": name_vn,
            "main_role": main_role,
            "tier": tier,
            "avatar": avatar,
            "win_rate": win_rate,
            "pick_rate": pick_rate,
            "ban_rate": ban_rate,
            "attributes": attributes,
            "counters": merged_counters,
            "tags": [main_role.lower(), "crawled"]
        })
        
    print(f"[+] Trộn xong! Tổng cộng: {len(crawled_database)} tướng. Khớp chỉ số RovMeta: {meta_matches}/{len(aov_heroes)}.")
    print(f"[+] Tổng số mối liên kết khắc chế chi tiết đã nhập: {total_counters_linked}")
    print(f"[+] Số lượng tướng AD (Xạ Thủ): {ad_count}")
    
    # Write json output
    output_file = "crawled_heroes.json"
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(crawled_database, f, ensure_ascii=False, indent=4)
        
    # Update app.js HERO_DATABASE
    app_js_path = "app.js"
    if os.path.exists(app_js_path):
        print("[+] Tìm thấy file app.js. Đang tự động cập nhật cơ sở dữ liệu...")
        try:
            with open(app_js_path, "r", encoding="utf-8") as f:
                js_content = f.read()
            
            pattern = r"const HERO_DATABASE = \[\s*[\s\S]*?\];"
            replacement = f"const HERO_DATABASE = {json.dumps(crawled_database, ensure_ascii=False, indent=4)};"
            
            new_js_content, count = re.subn(pattern, replacement, js_content)
            if count > 0:
                with open(app_js_path, "w", encoding="utf-8") as f:
                    f.write(new_js_content)
                print(f"[🎉] Đã tự động cập nhật {len(crawled_database)} tướng vào file app.js!")
            else:
                print("[-] Không tìm thấy khối HERO_DATABASE trong app.js để cập nhật tự động.")
        except Exception as e:
            print(f"[-] Không thể tự động ghi đè app.js: {e}")
            
    print("\n" + "="*60)
    print(f"[🎉] HỆ THỐNG CẬP NHẬT CƠ SỞ DỮ LIỆU ĐỒNG BỘ ĐÃ HOÀN TẤT THÀNH CÔNG!")
    print(f"[+] Tổng số tướng đã lưu trữ: {len(crawled_database)}")
    print(f"[+] File lưu: {os.path.abspath(output_file)}")
    print("="*60)

if __name__ == "__main__":
    main()
