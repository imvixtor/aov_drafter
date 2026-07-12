# -*- coding: utf-8 -*-
"""
AoV / Liên Quân Mobile Hero Crawler System
This script crawls the complete database of 126+ AoV heroes, fetches their official
square avatar icons directly from the Garena Vietnamese portal (lienquan.garena.vn),
resolves localized name translation mappings, and auto-patches app.js.
"""

import os
import json
import time
import requests
import unicodedata
from bs4 import BeautifulSoup

# --- CONFIGURATION & WIKI SETTINGS ---
WIKI_API_URL = "https://arenaofvalor.fandom.com/api.php"
GARENA_PORTAL_URL = "https://lienquan.garena.vn/hoc-vien/tuong-skin/"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7",
    "Referer": "https://lienquan.garena.vn/"
}

# Translate Fandom Wiki English IDs to Garena Vietnamese IDs
VIETNAMESE_MAP = {
    "brunhilda": "celica",      # Brunhilda -> Celica in VN
    "diaochan": "dieuthuyen",  # Diaochan -> Điêu Thuyền
    "lubu": "lubo",            # Lu Bu -> Lữ Bố
    "riktor": "richter",        # Riktor -> Richter
    "wukong": "ngokhong",      # Wukong -> Ngộ Không
    "zanis": "trieuvan"        # Zanis -> Triệu Vân
}

# Mapping MediaWiki Categories to our 5 lane roles
CATEGORY_TO_ROLE = {
    "Warriors": "Top",
    "Assassins": "Jungle",
    "Mages": "Mid",
    "Marksmen": "AD",
    "Tanks": "SP",
    "Supports": "SP"
}

# Override roles for specific heroes to match standard lane meta
ROLE_OVERRIED = {
    "nakroth": "Jungle",
    "zuka": "Jungle",
    "florentino": "Top",
    "omen": "Top",
    "maloch": "Top",
    "thane": "SP",
    "gildur": "SP",
    "helen": "SP",
    "grakk": "SP",
    "baldum": "SP",
    "kriknak": "Jungle",
    "aoi": "Jungle",
    "yan": "Jungle",
    "loren": "Mid",
    "lorion": "Mid",
    "liliana": "Mid",
    "krixi": "Mid",
    "aleister": "Mid",
    "tulen": "Mid",
    "yorn": "AD",
    "violet": "AD",
    "hayate": "AD",
    "capheny": "AD",
    "elsu": "AD"
}

def remove_accents(input_str):
    """Normalize unicode characters and filter out combining diacritics (accents)."""
    nfkd_form = unicodedata.normalize('NFKD', input_str)
    return u"".join([c for c in nfkd_form if not unicodedata.combining(c)])

def clean_id(name):
    """Converts a display name into a clean, unique lowercase alphanumeric ID."""
    cleaned = remove_accents(name.lower())
    cleaned = cleaned.replace('đ', 'd')
    cleaned = "".join([c for c in cleaned if c.isalnum()])
    return cleaned

def estimate_attributes(role, categories):
    """Generates balanced 1-5 ratings based on the lane role and wiki categories."""
    profile = { "damage": 3, "tankiness": 3, "mobility": 3, "teamfight": 3, "split_push": 3 }
    
    if role == "Top":
        profile = { "damage": 3, "tankiness": 4, "mobility": 2, "teamfight": 4, "split_push": 4 }
    elif role == "Jungle":
        profile = { "damage": 5, "tankiness": 2, "mobility": 5, "teamfight": 3, "split_push": 4 }
    elif role == "Mid":
        profile = { "damage": 4, "tankiness": 1, "mobility": 3, "teamfight": 5, "split_push": 2 }
    elif role == "AD":
        profile = { "damage": 5, "tankiness": 1, "mobility": 3, "teamfight": 4, "split_push": 3 }
    elif role == "SP":
        profile = { "damage": 1, "tankiness": 5, "mobility": 2, "teamfight": 5, "split_push": 1 }
        
    # Micro-adjust based on secondary categories
    if "Assassins" in categories:
        profile["mobility"] = max(profile["mobility"], 4)
        profile["damage"] = max(profile["damage"], 4)
    if "Tanks" in categories:
        profile["tankiness"] = max(profile["tankiness"], 4)
        profile["damage"] = min(profile["damage"], 3)
    if "Mages" in categories and role != "Mid":
        profile["teamfight"] = max(profile["teamfight"], 4)
        
    return profile

def main():
    print("[+] KHỞI ĐỘNG TIẾN TRÌNH CÀO DỮ LIỆU TƯỚNG & AVATAR CHUẨN...")
    
    # --- STEP 1: Crawl Garena Vietnamese Portal for official square avatar icons ---
    garena_avatars = {}
    print(f"[+] Gửi yêu cầu tải trang Garena: {GARENA_PORTAL_URL}...")
    try:
        response = requests.get(GARENA_PORTAL_URL, headers=HEADERS, timeout=15)
        if response.status_code == 200:
            soup = BeautifulSoup(response.content, "html.parser")
            hero_items = soup.select(".st-heroes__item")
            print(f"[+] Tải thành công! Tìm thấy {len(hero_items)} phần tử tướng trên Garena.")
            
            for item in hero_items:
                img_tag = item.select_one(".st-heroes__item--img img, img")
                if img_tag:
                    alt_name = img_tag.get("alt", "").strip()
                    src = img_tag.get("src", "").strip()
                    if alt_name and src:
                        cid = clean_id(alt_name)
                        garena_avatars[cid] = src
            print(f"[+] Đã trích xuất {len(garena_avatars)} ảnh đại diện dạng vuông từ Garena.")
        else:
            print(f"[-] Garena trả về mã lỗi: {response.status_code}. Không thể cào ảnh Garena trực tiếp.")
    except Exception as e:
        print(f"[-] Lỗi khi kết nối tới Garena: {e}")
        
    # --- STEP 2: Fetch list of all hero pages from Fandom API ---
    print(f"[+] Gửi yêu cầu lấy danh sách tướng từ Wiki API...")
    params = {
        "action": "query",
        "list": "categorymembers",
        "cmtitle": "Category:Heroes",
        "cmlimit": "500",
        "format": "json"
    }
    
    try:
        response = requests.get(WIKI_API_URL, params=params, headers=HEADERS, timeout=15)
        if response.status_code != 200:
            print(f"[-] Lỗi kết nối Wiki API. Mã phản hồi: {response.status_code}")
            return
            
        data = response.json()
        members = data.get("query", {}).get("categorymembers", [])
        hero_names = [m["title"] for m in members if m["ns"] == 0]
        print(f"[+] Tìm thấy {len(hero_names)} tướng từ danh sách gốc.")
        
        if not hero_names:
            print("[-] Không tìm thấy dữ liệu tướng nào.")
            return

        # --- STEP 3: Fetch categories and pageimages (wiki fallback) for heroes in batches of 50 ---
        print("[+] Đang tải thuộc tính phân loại và ảnh dự phòng theo lô 50 tướng...")
        wiki_data_store = {}
        
        for i in range(0, len(hero_names), 50):
            batch = hero_names[i:i+50]
            titles_str = "|".join(batch)
            
            cat_params = {
                "action": "query",
                "prop": "categories|pageimages",
                "titles": titles_str,
                "cllimit": "500",
                "pithumbsize": "120",
                "format": "json"
            }
            
            cat_response = requests.get(WIKI_API_URL, params=cat_params, headers=HEADERS, timeout=15)
            if cat_response.status_code == 200:
                cat_data = cat_response.json()
                pages = cat_data.get("query", {}).get("pages", {})
                
                for page_id, page_info in pages.items():
                    title = page_info.get("title", "")
                    cats = [c["title"].replace("Category:", "").strip() for c in page_info.get("categories", [])]
                    fallback_avatar = page_info.get("thumbnail", {}).get("source", "")
                    wiki_data_store[title] = {
                        "categories": cats,
                        "fallback_avatar": fallback_avatar
                    }
            
            time.sleep(0.5) # Avoid rate limiting
            
        # --- STEP 4: Map data and bind the official Garena square icon ---
        print("[+] Đang chuẩn hóa dữ liệu, dịch tên và khớp ảnh đại diện vuông...")
        crawled_database = []
        garena_matches = 0
        wiki_matches = 0
        
        for name in hero_names:
            wiki_info = wiki_data_store.get(name, {"categories": [], "fallback_avatar": ""})
            cats = wiki_info["categories"]
            fallback_avatar = wiki_info["fallback_avatar"]
            
            hero_id = clean_id(name)
            
            # Map English ID to Vietnamese name ID for Garena lookup
            mapped_id = VIETNAMESE_MAP.get(hero_id, hero_id)
            
            avatar_url = ""
            
            # Try to get the official Garena square avatar first
            if mapped_id in garena_avatars:
                avatar_url = garena_avatars[mapped_id]
                garena_matches += 1
            else:
                # Fuzzy matching in Garena extracted dictionary as fallback
                found_fuzzy = False
                for cid in garena_avatars:
                    if cid in mapped_id or mapped_id in cid:
                        avatar_url = garena_avatars[cid]
                        garena_matches += 1
                        found_fuzzy = True
                        break
                
                # If still not found, use Fandom Wiki pageimage as final fallback
                if not found_fuzzy:
                    avatar_url = fallback_avatar
                    wiki_matches += 1
            
            # Estimate lane role based on categories
            main_role = "Top" # Fallback
            for cat in cats:
                if cat in CATEGORY_TO_ROLE:
                    main_role = CATEGORY_TO_ROLE[cat]
                    break
            
            # Apply manual overrides for meta accuracy
            if hero_id in ROLE_OVERRIED:
                main_role = ROLE_OVERRIED[hero_id]
                
            attributes = estimate_attributes(main_role, cats)
            
            # Determine Tier
            tier = "A"
            if "Airi" in name or "Florentino" in name or "Hayate" in name or "Nakroth" in name or "Tulen" in name or "Elsu" in name or "Aoi" in name or "Yan" in name:
                tier = "S"
            elif "Aleister" in name or "Yorn" in name or "Gildur" in name or "Kriknak" in name:
                tier = "B"
                
            crawled_database.append({
                "id": hero_id,
                "name": name,
                "main_role": main_role,
                "tier": tier,
                "avatar": avatar_url,
                "attributes": attributes,
                "tags": [c.lower() for c in cats if c in CATEGORY_TO_ROLE] + ["crawled"]
            })
            
        print(f"[+] Lập bản đồ thành công: Khớp {garena_matches} ảnh vuông Garena chính thức, {wiki_matches} ảnh dự phòng Wiki.")
        
        # --- STEP 5: Write to crawled_heroes.json ---
        output_file = "crawled_heroes.json"
        with open(output_file, "w", encoding="utf-8") as f:
            json.dump(crawled_database, f, ensure_ascii=False, indent=4)
            
        # --- STEP 6: Auto-patch app.js HERO_DATABASE ---
        app_js_path = "app.js"
        if os.path.exists(app_js_path):
            print("[+] Tìm thấy file app.js. Đang tự động cập nhật cơ sở dữ liệu...")
            try:
                with open(app_js_path, "r", encoding="utf-8") as f:
                    js_content = f.read()
                
                import re
                pattern = r"const HERO_DATABASE = \[\s*[\s\S]*?\];"
                replacement = f"const HERO_DATABASE = {json.dumps(crawled_database, ensure_ascii=False, indent=4)};"
                
                new_js_content, count = re.subn(pattern, replacement, js_content)
                if count > 0:
                    with open(app_js_path, "w", encoding="utf-8") as f:
                        f.write(new_js_content)
                    print(f"[🎉] Đã tự động cập nhật {len(crawled_database)} tướng với ảnh vuông chuẩn vào file app.js!")
                else:
                    print("[-] Không tìm thấy khối HERO_DATABASE trong app.js để cập nhật tự động.")
            except Exception as e:
                print(f"[-] Không thể tự động ghi đè app.js: {e}")
                
        print("\n" + "="*60)
        print(f"[🎉] TIẾN TRÌNH HOÀN TẤT THÀNH CÔNG!")
        print(f"[+] Tổng số tướng đã lưu trữ: {len(crawled_database)}")
        print(f"[+] File database JSON: {os.path.abspath(output_file)}")
        print("="*60)
        
    except Exception as e:
        print(f"[-] Đã xảy ra lỗi hệ thống: {e}")

if __name__ == "__main__":
    main()
