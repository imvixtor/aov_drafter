/* ==========================================
   AOV DRAFTER - CORE LOGIC (app.js)
   ========================================== */

// --- 1. HERO MOCK DATA DATABASE (25 AoV Heroes) ---
const HERO_DATABASE = [
    {
        id: "florentino",
        name: "Florentino",
        main_role: "Top",
        tier: "S",
        attributes: { damage: 5, tankiness: 3, mobility: 4, teamfight: 3, split_push: 5 },
        tags: ["duelist", "high_difficulty", "mobility", "sustain"]
    },
    {
        id: "krixi",
        name: "Krixi",
        main_role: "Mid",
        tier: "A",
        attributes: { damage: 4, tankiness: 1, mobility: 2, teamfight: 5, split_push: 2 },
        tags: ["poke", "burst", "aoe"]
    },
    {
        id: "thane",
        name: "Thane",
        main_role: "SP",
        tier: "A",
        attributes: { damage: 2, tankiness: 5, mobility: 2, teamfight: 4, split_push: 1 },
        tags: ["hard_cc", "peel", "tank"]
    },
    {
        id: "hayate",
        name: "Hayate",
        main_role: "AD",
        tier: "S",
        attributes: { damage: 5, tankiness: 2, mobility: 5, teamfight: 3, split_push: 4 },
        tags: ["true_damage", "tank_shredder", "kiting"]
    },
    {
        id: "nakroth",
        name: "Nakroth",
        main_role: "Jungle",
        tier: "S",
        attributes: { damage: 4, tankiness: 2, mobility: 5, teamfight: 3, split_push: 5 },
        tags: ["mobility", "assassin", "split_push"]
    },
    {
        id: "aleister",
        name: "Aleister",
        main_role: "Mid",
        tier: "B",
        attributes: { damage: 3, tankiness: 2, mobility: 1, teamfight: 4, split_push: 1 },
        tags: ["hard_cc", "anti_assassin", "lockdown"]
    },
    {
        id: "maloch",
        name: "Maloch",
        main_role: "Top",
        tier: "A",
        attributes: { damage: 3, tankiness: 4, mobility: 2, teamfight: 5, split_push: 2 },
        tags: ["true_damage", "aoe", "initiate"]
    },
    {
        id: "tulen",
        name: "Tulen",
        main_role: "Mid",
        tier: "S",
        attributes: { damage: 5, tankiness: 2, mobility: 4, teamfight: 4, split_push: 3 },
        tags: ["burst", "mobility", "snowball"]
    },
    {
        id: "yorn",
        name: "Yorn",
        main_role: "AD",
        tier: "B",
        attributes: { damage: 5, tankiness: 1, mobility: 1, teamfight: 4, split_push: 2 },
        tags: ["dps", "late_game", "tank_shredder"]
    },
    {
        id: "gildur",
        name: "Gildur",
        main_role: "SP",
        tier: "B",
        attributes: { damage: 3, tankiness: 4, mobility: 2, teamfight: 4, split_push: 1 },
        tags: ["poke", "hard_cc", "mage_tank"]
    },
    {
        id: "helen",
        name: "Helen",
        main_role: "SP",
        tier: "A",
        attributes: { damage: 1, tankiness: 2, mobility: 2, teamfight: 5, split_push: 1 },
        tags: ["healing", "sustain", "buff"]
    },
    {
        id: "zuka",
        name: "Zuka",
        main_role: "Jungle",
        tier: "A",
        attributes: { damage: 5, tankiness: 2, mobility: 5, teamfight: 3, split_push: 4 },
        tags: ["burst", "mobility", "assassin"]
    },
    {
        id: "omen",
        name: "Omen",
        main_role: "Top",
        tier: "A",
        attributes: { damage: 3, tankiness: 4, mobility: 2, teamfight: 3, split_push: 5 },
        tags: ["split_push", "lockdown", "duelist"]
    },
    {
        id: "violet",
        name: "Violet",
        main_role: "AD",
        tier: "A",
        attributes: { damage: 4, tankiness: 1, mobility: 3, teamfight: 3, split_push: 3 },
        tags: ["poke", "burst", "mobility"]
    },
    {
        id: "kriknak",
        name: "Kriknak",
        main_role: "Jungle",
        tier: "B",
        attributes: { damage: 5, tankiness: 1, mobility: 4, teamfight: 2, split_push: 3 },
        tags: ["burst", "assassin", "fast_clear"]
    },
    {
        id: "lilliana",
        name: "Liliana",
        main_role: "Mid",
        tier: "S",
        attributes: { damage: 5, tankiness: 1, mobility: 5, teamfight: 4, split_push: 3 },
        tags: ["burst", "poke", "mobility"]
    },
    {
        id: "capheny",
        name: "Capheny",
        main_role: "AD",
        tier: "A",
        attributes: { damage: 5, tankiness: 1, mobility: 3, teamfight: 4, split_push: 2 },
        tags: ["dps", "lifesteal", "kiting"]
    },
    {
        id: "baldum",
        name: "Baldum",
        main_role: "SP",
        tier: "A",
        attributes: { damage: 2, tankiness: 5, mobility: 2, teamfight: 5, split_push: 1 },
        tags: ["hard_cc", "initiate", "tank"]
    },
    {
        id: "ryoma",
        name: "Ryoma",
        main_role: "Top",
        tier: "A",
        attributes: { damage: 4, tankiness: 3, mobility: 3, teamfight: 3, split_push: 4 },
        tags: ["poke", "burst", "early_game"]
    },
    {
        id: "aoi",
        name: "Aoi",
        main_role: "Jungle",
        tier: "S",
        attributes: { damage: 5, tankiness: 2, mobility: 5, teamfight: 3, split_push: 4 },
        tags: ["mobility", "assassin", "burst"]
    },
    {
        id: "qi",
        name: "Qi",
        main_role: "Top",
        tier: "A",
        attributes: { damage: 4, tankiness: 3, mobility: 3, teamfight: 4, split_push: 3 },
        tags: ["sustain", "hard_cc", "burst"]
    },
    {
        id: "elsu",
        name: "Elsu",
        main_role: "AD",
        tier: "S",
        attributes: { damage: 5, tankiness: 2, mobility: 2, teamfight: 3, split_push: 3 },
        tags: ["poke", "vision", "sniper"]
    },
    {
        id: "lorion",
        name: "Lorion",
        main_role: "Mid",
        tier: "A",
        attributes: { damage: 4, tankiness: 3, mobility: 3, teamfight: 5, split_push: 2 },
        tags: ["aoe", "hard_cc", "initiate"]
    },
    {
        id: "grakk",
        name: "Grakk",
        main_role: "SP",
        tier: "B",
        attributes: { damage: 2, tankiness: 4, mobility: 2, teamfight: 5, split_push: 1 },
        tags: ["hard_cc", "hook", "lockdown"]
    },
    {
        id: "yan",
        name: "Yan",
        main_role: "Jungle",
        tier: "S",
        attributes: { damage: 4, tankiness: 3, mobility: 4, teamfight: 4, split_push: 4 },
        tags: ["sustain", "late_game", "bruiser"]
    }
];

// --- 2. HARD COUNTERS DATABASE (counters_manual) ---
const COUNTERS_MANUAL = [
    { counter: "aleister", countered: "nakroth", reason: "Khống chế cứng (áp chế) chặn Nakroth bay nhảy" },
    { counter: "omen", countered: "florentino", reason: "Sát vực khóa Florentino, không cho nhặt hoa" },
    { counter: "hayate", countered: "thane", reason: "Sát thương chuẩn chí mạng bào tank cực mạnh" },
    { counter: "elsu", countered: "krixi", reason: "Cấu rỉa tầm siêu xa, Krixi kém cơ động khó né" },
    { counter: "grakk", countered: "elsu", reason: "Kéo bắt Elsu khi đang đứng ngắm bắn" },
    { counter: "zuka", countered: "violet", reason: "Sát thủ cơ động dồn sát thương dứt điểm AD" },
    { counter: "thane", countered: "zuka", reason: "Đẩy lùi ngắt combo chiêu thức lao vào của Zuka" },
    { counter: "tulen", countered: "yorn", reason: "Áp sát nhanh dồn sát thương lôi điểu dứt điểm Yorn" }
];

// --- 3. DRAFT SEQUENCE CONFIG (AoV Day Ranked Rules: Blue Team vs Red Team) ---
const TURN_SEQUENCE = [
    // --- Simultaneous Ban Phase (Sequential simulation in HUD) ---
    { type: "ban", team: "blue", slotIndex: 0, label: "Đội Xanh Cấm 1" },
    { type: "ban", team: "red", slotIndex: 0, label: "Đội Đỏ Cấm 1" },
    { type: "ban", team: "blue", slotIndex: 1, label: "Đội Xanh Cấm 2" },
    { type: "ban", team: "red", slotIndex: 1, label: "Đội Đỏ Cấm 2" },
    { type: "ban", team: "blue", slotIndex: 2, label: "Đội Xanh Cấm 3" },
    { type: "ban", team: "red", slotIndex: 2, label: "Đội Đỏ Cấm 3" },
    { type: "ban", team: "blue", slotIndex: 3, label: "Đội Xanh Cấm 4" },
    { type: "ban", team: "red", slotIndex: 3, label: "Đội Đỏ Cấm 4" },
    { type: "ban", team: "blue", slotIndex: 4, label: "Đội Xanh Cấm 5" },
    { type: "ban", team: "red", slotIndex: 4, label: "Đội Đỏ Cấm 5" },
    
    // --- Pick Phase (Staggered 1-2-2-2-2-1) ---
    { type: "pick", team: "blue", slotIndex: 0, label: "Đội Xanh Chọn 1" }, // Lượt 1: Xanh Pick 1
    { type: "pick", team: "red", slotIndex: 0, label: "Đội Đỏ Chọn 1" },  // Lượt 2: Đỏ Pick 1 & 2
    { type: "pick", team: "red", slotIndex: 1, label: "Đội Đỏ Chọn 2" },
    { type: "pick", team: "blue", slotIndex: 1, label: "Đội Xanh Chọn 2" }, // Lượt 3: Xanh Pick 2 & 3
    { type: "pick", team: "blue", slotIndex: 2, label: "Đội Xanh Chọn 3" },
    { type: "pick", team: "red", slotIndex: 2, label: "Đội Đỏ Chọn 3" },  // Lượt 4: Đỏ Pick 3 & 4
    { type: "pick", team: "red", slotIndex: 3, label: "Đội Đỏ Chọn 4" },
    { type: "pick", team: "blue", slotIndex: 3, label: "Đội Xanh Chọn 4" }, // Lượt 5: Xanh Pick 4 & 5
    { type: "pick", team: "blue", slotIndex: 4, label: "Đội Xanh Chọn 5" },
    { type: "pick", team: "red", slotIndex: 4, label: "Đội Đỏ Chọn 5" }   // Lượt 6: Đỏ Pick 5
];

// --- 4. APP STATE STATE MACHINE ---
let state = {
    currentTurnIndex: 0,
    bansBlue: [null, null, null, null, null],
    bansRed: [null, null, null, null, null],
    picksBlue: [null, null, null, null, null],
    picksRed: [null, null, null, null, null],
    
    // Filter & Search
    searchQuery: "",
    selectedRoleFilter: "all",
    
    // History for Undo
    history: []
};

// --- 5. SVG AVATAR GENERATION UTILITY ---
function generateSvgAvatar(name, role, tier) {
    let gradientStart = '#3b82f6';
    let gradientEnd = '#1d4ed8';
    let accentColor = '#60a5fa';
    
    if (tier === 'S') {
        gradientStart = '#f59e0b';
        gradientEnd = '#b45309';
        accentColor = '#fcd34d';
    } else if (tier === 'A') {
        gradientStart = '#a855f7';
        gradientEnd = '#6b21a8';
        accentColor = '#d8b4fe';
    }
    
    let roleGlyph = '';
    if (role === 'Top') {
        roleGlyph = `<path d="M12 50l30-30 6 6-30 30z" fill="currentColor"/><path d="M42 20l4-4a2 2 0 0 1 3 0l3 3a2 2 0 0 1 0 3l-4 4z" fill="currentColor"/><circle cx="12" cy="50" r="4" fill="currentColor"/>`;
    } else if (role === 'Jungle') {
        roleGlyph = `<path d="M32 12l20 20-20 20-20-20z" stroke="currentColor" stroke-width="3" fill="none"/><circle cx="32" cy="32" r="6" fill="currentColor"/>`;
    } else if (role === 'Mid') {
        roleGlyph = `<circle cx="32" cy="32" r="10" stroke="currentColor" stroke-width="3" fill="none"/><path d="M32 10v10M32 44v10M10 32h10M44 32h10" stroke="currentColor" stroke-width="3"/>`;
    } else if (role === 'AD') {
        roleGlyph = `<path d="M16 16v32h32" stroke="currentColor" stroke-width="4" fill="none"/><path d="M16 48l24-24" stroke="currentColor" stroke-width="3"/><path d="M42 20l4 4-10 10" fill="currentColor"/>`;
    } else if (role === 'SP') {
        roleGlyph = `<path d="M32 12c-12 0-16 10-16 22 0 12 10 16 16 18 6-2 16-6 16-18 0-12-4-22-16-22z" stroke="currentColor" stroke-width="3" fill="none"/>`;
    }
    
    const initials = name.slice(0, 2).toUpperCase();
    
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="100%">
        <defs>
            <linearGradient id="grad-${name.replace(/\s+/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="${gradientStart}" />
                <stop offset="100%" stop-color="${gradientEnd}" />
            </linearGradient>
        </defs>
        <rect width="64" height="64" rx="10" fill="url(#grad-${name.replace(/\s+/g, '')})" />
        <rect x="2" y="2" width="60" height="60" rx="8" fill="none" stroke="${accentColor}" stroke-opacity="0.2" stroke-width="1" />
        <text x="32" y="36" font-family="'Outfit', sans-serif" font-size="19" font-weight="800" fill="#ffffff" fill-opacity="0.9" text-anchor="middle" dominant-baseline="middle">
            ${initials}
        </text>
        <g transform="scale(0.22) translate(76, 76)" color="#ffffff" stroke-linecap="round">
            ${roleGlyph}
        </g>
        <rect x="4" y="4" width="14" height="9" rx="2" fill="#0f172a" fill-opacity="0.6"/>
        <text x="11" y="10.5" font-family="'Outfit', sans-serif" font-size="7.5" font-weight="950" fill="${accentColor}" text-anchor="middle" dominant-baseline="middle">
            ${tier}
        </text>
    </svg>
    `;
    
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`;
}

// --- 6. SCORING LOGIC ENGINE ---
function calculateSuggestions() {
    // 1. Identify which roles Blue Team (Đội Xanh) already picked
    const pickedIds = state.picksBlue.filter(id => id !== null);
    const pickedHeroes = pickedIds.map(id => HERO_DATABASE.find(h => h.id === id)).filter(Boolean);
    const pickedRoles = pickedHeroes.map(h => h.main_role);
    
    // Determine missing roles
    const allRoles = ["Top", "Mid", "Jungle", "AD", "SP"];
    let missingRoles = allRoles.filter(role => !pickedRoles.includes(role));
    
    // Gather all banned/picked heroes to lock out candidates
    const unavailableHeroes = new Set([
        ...state.bansBlue.filter(Boolean),
        ...state.bansRed.filter(Boolean),
        ...state.picksBlue.filter(Boolean),
        ...state.picksRed.filter(Boolean)
    ]);
    
    // Candidates base pool: not banned/picked
    let candidates = HERO_DATABASE.filter(h => !unavailableHeroes.has(h.id));
    
    // Filter candidates by missing roles, unless no available hero matches them (fallback)
    if (missingRoles.length > 0 && state.currentTurnIndex >= 10) { // Only force missing role suggestions in Pick phase
        let roleMatches = candidates.filter(h => missingRoles.includes(h.main_role));
        if (roleMatches.length > 0) {
            candidates = roleMatches;
        }
    }
    
    // Get Red Team picked details
    const redPickedIds = state.picksRed.filter(id => id !== null);
    const redPickedHeroes = redPickedIds.map(id => HERO_DATABASE.find(h => h.id === id)).filter(Boolean);
    
    // Calculate parameters for team comps
    const totalRedTankiness = redPickedHeroes.reduce((sum, h) => sum + h.attributes.tankiness, 0);
    const blueTeamfightAvailable = pickedHeroes.some(h => h.attributes.teamfight >= 4);
    
    // 2. Score each candidate
    const scoredCandidates = candidates.map(hero => {
        let baseScore = 30; // Default B
        if (hero.tier === 'S') baseScore = 50;
        else if (hero.tier === 'A') baseScore = 40;
        
        let score = baseScore;
        const reasons = [];
        
        // --- Class Counter (Khắc chế Hệ) ---
        if (redPickedHeroes.length > 0) {
            // Tank shredder vs Tanky enemy
            if (totalRedTankiness >= 7) {
                if (hero.tags.includes("tank_shredder")) {
                    score += 15;
                    reasons.push({ points: 15, text: "Khắc chế Đội hình Tank đỏ (có tag Diệt Tank)" });
                }
            }
            // Assassin / High Dmg vs Squishy enemy
            if (totalRedTankiness < 3) {
                if (hero.main_role === "Jungle" || hero.attributes.damage >= 4) {
                    score += 15;
                    reasons.push({ points: 15, text: "Săn mục tiêu Đội hình yếu máu đỏ (Sát thương lớn)" });
                }
            }
        }
        
        // --- Hard Counter (Khắc chế Cứng) ---
        redPickedHeroes.forEach(enemy => {
            const counterRule = COUNTERS_MANUAL.find(c => c.counter === hero.id && c.countered === enemy.id);
            if (counterRule) {
                score += 20;
                reasons.push({ points: 20, text: `Khắc chế cứng ${enemy.name} (${counterRule.reason})` });
            }
        });
        
        // --- Synergy (Hiệp lực) ---
        if (blueTeamfightAvailable && hero.attributes.teamfight >= 4) {
            score += 10;
            reasons.push({ points: 10, text: "Đồng đội giao tranh tổng mạnh (Hiệp lực TF ≥ 4)" });
        }
        
        return {
            hero,
            totalScore: score,
            baseScore,
            reasons
        };
    });
    
    // 3. Sort by totalScore desc
    scoredCandidates.sort((a, b) => b.totalScore - a.totalScore);
    
    return {
        topSuggestions: scoredCandidates.slice(0, 3),
        missingRoles: missingRoles
    };
}

// --- 7. RENDER USER INTERFACE ---
function renderUI() {
    const isBanPhase = state.currentTurnIndex < 10;
    const currentTurn = state.currentTurnIndex < 20 ? TURN_SEQUENCE[state.currentTurnIndex] : null;
    
    // --- 1. Active Status Bar ---
    const phaseBadge = document.getElementById("current-phase");
    const statusText = document.getElementById("status-text");
    
    if (state.currentTurnIndex >= 20) {
        phaseBadge.textContent = "HOÀN TẤT";
        phaseBadge.className = "phase-badge";
        statusText.textContent = "Cấm chọn hoàn thành! Bấm Reset để chơi lại.";
        document.getElementById("btn-undo").disabled = false;
        showCompletionOverlay();
    } else {
        document.getElementById("btn-undo").disabled = state.history.length === 0;
        
        if (isBanPhase) {
            phaseBadge.textContent = "GIAI ĐOẠN CẤM";
            phaseBadge.className = "phase-badge ban-phase";
        } else {
            phaseBadge.textContent = "GIAI ĐOẠN CHỌN";
            phaseBadge.className = "phase-badge pick-phase";
        }
        
        const activeTeamName = currentTurn.team === "blue" ? "ĐỘI XANH" : "ĐỘI ĐỎ";
        const actionType = currentTurn.type === "ban" ? "CẤM" : "CHỌN";
        statusText.textContent = `Lượt ${state.currentTurnIndex + 1}/20: [${activeTeamName}] đang ${actionType}...`;
    }
    
    // --- 2. Update Column Focus Styling ---
    const blueCol = document.getElementById("blue-column");
    const redCol = document.getElementById("red-column");
    
    blueCol.classList.remove("active-team-turn");
    redCol.classList.remove("active-team-turn");
    
    if (currentTurn) {
        if (currentTurn.team === "blue") {
            blueCol.classList.add("active-team-turn");
        } else {
            redCol.classList.add("active-team-turn");
        }
    }
    
    // --- 3. Render Ban Slots (Blue Left & Red Right) ---
    renderBanRow(state.bansBlue, "ban-slots-blue", "blue-ban-slot");
    renderBanRow(state.bansRed, "ban-slots-red", "red-ban-slot");
    
    // --- 4. Render Pick Slots (Blue Left & Red Right) ---
    renderPickCol(state.picksBlue, "pick-slots-blue", "blue-pick-slot", "blue");
    renderPickCol(state.picksRed, "pick-slots-red", "red-pick-slot", "red");
    
    // --- 5. Render Hero Grid ---
    renderHeroGrid();
    
    // --- 6. Render Recommendations & Stats ---
    renderRecommendationsAndStats();
}

// Render Ban Row Helpers
function renderBanRow(bansArray, containerId, slotClass) {
    const container = document.getElementById(containerId);
    const slots = container.querySelectorAll(`.${slotClass}`);
    
    slots.forEach((slot, idx) => {
        slot.innerHTML = "";
        slot.className = `ban-slot ${slotClass}`;
        
        // Highlight active ban slot
        const isCurrentActive = state.currentTurnIndex < 10 && 
                                TURN_SEQUENCE[state.currentTurnIndex].type === "ban" &&
                                TURN_SEQUENCE[state.currentTurnIndex].slotIndex === idx &&
                                ((TURN_SEQUENCE[state.currentTurnIndex].team === "blue" && slotClass.includes("blue")) ||
                                 (TURN_SEQUENCE[state.currentTurnIndex].team === "red" && slotClass.includes("red")));
        
        if (isCurrentActive) {
            slot.classList.add("active-slot-highlight");
        }
        
        const heroId = bansArray[idx];
        if (heroId) {
            slot.classList.add("filled");
            const hero = HERO_DATABASE.find(h => h.id === heroId);
            if (hero) {
                const img = document.createElement("img");
                img.src = generateSvgAvatar(hero.name, hero.main_role, hero.tier);
                img.alt = hero.name;
                slot.appendChild(img);
                
                const slash = document.createElement("div");
                slash.className = "ban-slot-overlay-slash";
                slot.appendChild(slash);
            }
        }
    });
}

// Render Pick Column Helpers
function renderPickCol(picksArray, containerId, slotClass, teamType) {
    const container = document.getElementById(containerId);
    const slots = container.querySelectorAll(`.${slotClass}`);
    
    slots.forEach((slot, idx) => {
        slot.innerHTML = "";
        slot.className = `pick-slot ${slotClass}`;
        
        // Highlight active pick slot
        const isCurrentActive = state.currentTurnIndex >= 10 && state.currentTurnIndex < 20 &&
                                TURN_SEQUENCE[state.currentTurnIndex].type === "pick" &&
                                TURN_SEQUENCE[state.currentTurnIndex].slotIndex === idx &&
                                ((TURN_SEQUENCE[state.currentTurnIndex].team === "blue" && teamType === "blue") ||
                                 (TURN_SEQUENCE[state.currentTurnIndex].team === "red" && teamType === "red"));
        
        if (isCurrentActive) {
            slot.classList.add("active-slot-highlight");
        }
        
        const heroId = picksArray[idx];
        if (heroId) {
            const hero = HERO_DATABASE.find(h => h.id === heroId);
            if (hero) {
                slot.classList.add("filled");
                
                // Avatar Card
                const avatarDiv = document.createElement("div");
                avatarDiv.className = "pick-card-img";
                const img = document.createElement("img");
                img.src = generateSvgAvatar(hero.name, hero.main_role, hero.tier);
                img.alt = hero.name;
                avatarDiv.appendChild(img);
                slot.appendChild(avatarDiv);
                
                // Info block
                const infoDiv = document.createElement("div");
                infoDiv.className = "pick-card-info";
                
                const nameHeader = document.createElement("h4");
                nameHeader.textContent = hero.name;
                infoDiv.appendChild(nameHeader);
                
                const metaDiv = document.createElement("div");
                metaDiv.className = "pick-card-meta";
                
                const roleBadge = document.createElement("span");
                roleBadge.className = "pick-card-role";
                roleBadge.textContent = translateRole(hero.main_role);
                metaDiv.appendChild(roleBadge);
                
                const tierBadge = document.createElement("span");
                tierBadge.className = `pick-card-tier tier-${hero.tier}`;
                tierBadge.textContent = `Tier ${hero.tier}`;
                metaDiv.appendChild(tierBadge);
                
                infoDiv.appendChild(metaDiv);
                slot.appendChild(infoDiv);
                
                // Mini Stats block
                const miniStatsDiv = document.createElement("div");
                miniStatsDiv.className = "pick-mini-stats";
                
                miniStatsDiv.appendChild(createMiniStatBar("Dmg", hero.attributes.damage, teamType));
                miniStatsDiv.appendChild(createMiniStatBar("Tank", hero.attributes.tankiness, teamType));
                miniStatsDiv.appendChild(createMiniStatBar("TF", hero.attributes.teamfight, teamType));
                
                slot.appendChild(miniStatsDiv);
            }
        } else {
            // Placeholder slot
            const placeholder = document.createElement("div");
            placeholder.className = "pick-placeholder-content";
            
            const num = idx + 1;
            placeholder.innerHTML = `Lượt Chọn ${num} <span>${isCurrentActive ? "Đang Chọn..." : "Trống"}</span>`;
            slot.appendChild(placeholder);
        }
    });
}

function createMiniStatBar(label, val, teamType) {
    const container = document.createElement("div");
    container.className = "mini-stat-bar";
    
    const labelSpan = document.createElement("span");
    labelSpan.textContent = `${label}: ${val}`;
    container.appendChild(labelSpan);
    
    const track = document.createElement("div");
    track.className = "mini-stat-track";
    
    const fill = document.createElement("div");
    fill.className = "mini-stat-fill";
    fill.style.width = `${(val / 5) * 100}%`;
    
    track.appendChild(fill);
    container.appendChild(track);
    return container;
}

function translateRole(role) {
    switch (role) {
        case "Top": return "Đường Top";
        case "Jungle": return "Rừng";
        case "Mid": return "Giữa";
        case "AD": return "Xạ Thủ";
        case "SP": return "Trợ Thủ";
        default: return role;
    }
}

// Render Hero Grid
function renderHeroGrid() {
    const grid = document.getElementById("hero-grid");
    grid.innerHTML = "";
    
    // Assemble all unavailable IDs (banned or picked)
    const unavailableHeroes = new Set([
        ...state.bansBlue.filter(Boolean),
        ...state.bansRed.filter(Boolean),
        ...state.picksBlue.filter(Boolean),
        ...state.picksRed.filter(Boolean)
    ]);
    
    // Sort database: unpicked first, then by name
    const sortedHeroes = [...HERO_DATABASE].sort((a, b) => {
        const aUn = unavailableHeroes.has(a.id) ? 1 : 0;
        const bUn = unavailableHeroes.has(b.id) ? 1 : 0;
        if (aUn !== bUn) return aUn - bUn;
        return a.name.localeCompare(b.name);
    });
    
    sortedHeroes.forEach(hero => {
        // Apply filters
        const matchesQuery = hero.name.toLowerCase().includes(state.searchQuery.toLowerCase());
        const matchesRole = state.selectedRoleFilter === "all" || hero.main_role === state.selectedRoleFilter;
        
        if (!matchesQuery || !matchesRole) return;
        
        const card = document.createElement("div");
        card.className = "hero-card";
        card.dataset.id = hero.id;
        
        const isUnavailable = unavailableHeroes.has(hero.id);
        if (isUnavailable) {
            card.classList.add("disabled");
        } else {
            card.addEventListener("click", () => handleHeroSelect(hero));
        }
        
        const avatarDiv = document.createElement("div");
        avatarDiv.className = "hero-card-img";
        const img = document.createElement("img");
        img.src = generateSvgAvatar(hero.name, hero.main_role, hero.tier);
        img.alt = hero.name;
        avatarDiv.appendChild(img);
        card.appendChild(avatarDiv);
        
        const nameHeader = document.createElement("h5");
        nameHeader.textContent = hero.name;
        card.appendChild(nameHeader);
        
        const tierBadge = document.createElement("span");
        tierBadge.className = `hero-card-badge tier-${hero.tier}`;
        tierBadge.textContent = hero.tier;
        card.appendChild(tierBadge);
        
        grid.appendChild(card);
    });
}

// Render Recommendations & Stats Panel
function renderRecommendationsAndStats() {
    const recList = document.getElementById("recommendation-list");
    recList.innerHTML = "";
    
    const missingRolesText = document.getElementById("missing-roles-text");
    
    // Get recommendations for Blue Team
    const { topSuggestions, missingRoles } = calculateSuggestions();
    
    // Format missing roles text
    if (state.currentTurnIndex < 10) {
        missingRolesText.textContent = "Giai đoạn Cấm (Gợi ý chưa mở)";
    } else if (state.picksBlue.filter(Boolean).length === 5) {
        missingRolesText.textContent = "Đội hình hoàn tất!";
    } else {
        missingRolesText.textContent = "Vị trí thiếu: " + missingRoles.map(translateRole).join(", ");
    }
    
    // Display recommendations only if in Pick Phase and Blue Team isn't full
    const isPickPhase = state.currentTurnIndex >= 10 && state.currentTurnIndex < 20;
    const isBluePickTurn = isPickPhase && TURN_SEQUENCE[state.currentTurnIndex].team === "blue";
    const teamFull = state.picksBlue.filter(Boolean).length === 5;
    
    if (!isPickPhase || teamFull) {
        const emptyState = document.createElement("div");
        emptyState.className = "rec-empty-state";
        if (teamFull) {
            emptyState.innerHTML = `<i class="fa-solid fa-circle-check"></i>Đội hình Đội Xanh đã chọn đầy đủ 5 vị trí.`;
        } else {
            emptyState.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i>Gợi ý sẽ tự động tính toán khi bước vào lượt Chọn (Pick) của Đội Xanh.`;
        }
        recList.appendChild(emptyState);
    } else {
        if (topSuggestions.length === 0) {
            const emptyState = document.createElement("div");
            emptyState.className = "rec-empty-state";
            emptyState.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>Không tìm thấy tướng phù hợp còn trống trong bể tướng.`;
            recList.appendChild(emptyState);
        } else {
            topSuggestions.forEach(({ hero, totalScore, baseScore, reasons }) => {
                const card = document.createElement("div");
                card.className = "rec-card";
                
                const scoreBadge = document.createElement("div");
                scoreBadge.className = "rec-card-score";
                scoreBadge.textContent = `${totalScore}đ`;
                card.appendChild(scoreBadge);
                
                const heroInfo = document.createElement("div");
                heroInfo.className = "rec-card-hero-info";
                
                const avatar = document.createElement("div");
                avatar.className = "rec-card-avatar";
                const img = document.createElement("img");
                img.src = generateSvgAvatar(hero.name, hero.main_role, hero.tier);
                img.alt = hero.name;
                avatar.appendChild(img);
                heroInfo.appendChild(avatar);
                
                const details = document.createElement("div");
                details.className = "rec-hero-details";
                const title = document.createElement("h4");
                title.textContent = hero.name;
                details.appendChild(title);
                
                const subtitle = document.createElement("span");
                subtitle.textContent = `${translateRole(hero.main_role)} • Gốc: ${baseScore}đ`;
                details.appendChild(subtitle);
                
                heroInfo.appendChild(details);
                card.appendChild(heroInfo);
                
                // Reasons breakdown
                const reasonDiv = document.createElement("div");
                reasonDiv.className = "rec-card-reason";
                
                if (reasons.length === 0) {
                    reasonDiv.textContent = "Không có điểm cộng thêm đặc biệt. Đề xuất dựa trên Tier gốc.";
                } else {
                    const ul = document.createElement("ul");
                    reasons.forEach(r => {
                        const li = document.createElement("li");
                        li.textContent = `+${r.points}đ: ${r.text}`;
                        ul.appendChild(li);
                    });
                    reasonDiv.appendChild(ul);
                }
                card.appendChild(reasonDiv);
                
                // Select button
                const selectBtn = document.createElement("button");
                selectBtn.className = "btn-rec-select";
                selectBtn.innerHTML = `<i class="fa-solid fa-plus"></i> Chọn`;
                // Disable quick select if it is red team pick turn
                if (!isBluePickTurn) {
                    selectBtn.disabled = true;
                    selectBtn.style.opacity = 0.5;
                    selectBtn.style.cursor = "not-allowed";
                } else {
                    selectBtn.addEventListener("click", () => handleHeroSelect(hero));
                }
                card.appendChild(selectBtn);
                
                recList.appendChild(card);
            });
        }
    }
    
    // --- 7. Calculate and Render Compositions Stats ---
    renderCompositionStats();
}

// Composition calculations
function renderCompositionStats() {
    const bluePickedIds = state.picksBlue.filter(Boolean);
    const redPickedIds = state.picksRed.filter(Boolean);
    
    const bluePicked = bluePickedIds.map(id => HERO_DATABASE.find(h => h.id === id)).filter(Boolean);
    const redPicked = redPickedIds.map(id => HERO_DATABASE.find(h => h.id === id)).filter(Boolean);
    
    // 1. Overall Team Scores
    let blueScore = 0;
    let redScore = 0;
    let bluePct = 0;
    let redPct = 0;
    
    // Average ratings
    let blueDmgAvg = 0, blueTankAvg = 0, blueTfAvg = 0;
    let redDmgAvg = 0, redTankAvg = 0, redTfAvg = 0;
    
    if (bluePicked.length > 0) {
        blueDmgAvg = bluePicked.reduce((s, h) => s + h.attributes.damage, 0) / bluePicked.length;
        blueTankAvg = bluePicked.reduce((s, h) => s + h.attributes.tankiness, 0) / bluePicked.length;
        blueTfAvg = bluePicked.reduce((s, h) => s + h.attributes.teamfight, 0) / bluePicked.length;
        
        blueScore = (blueDmgAvg + blueTankAvg + blueTfAvg) / 3;
        bluePct = (blueScore / 5) * 100;
    }
    
    if (redPicked.length > 0) {
        redDmgAvg = redPicked.reduce((s, h) => s + h.attributes.damage, 0) / redPicked.length;
        redTankAvg = redPicked.reduce((s, h) => s + h.attributes.tankiness, 0) / redPicked.length;
        redTfAvg = redPicked.reduce((s, h) => s + h.attributes.teamfight, 0) / redPicked.length;
        
        redScore = (redDmgAvg + redTankAvg + redTfAvg) / 3;
        redPct = (redScore / 5) * 100;
    }
    
    // Update HTML texts & bars (Blue Left, Red Right)
    document.getElementById("blue-score-text").textContent = `${blueScore.toFixed(1)}/5.0 (${Math.round(bluePct)}%)`;
    document.getElementById("blue-progress-bar").style.width = `${bluePct}%`;
    
    document.getElementById("red-score-text").textContent = `${redScore.toFixed(1)}/5.0 (${Math.round(redPct)}%)`;
    document.getElementById("red-progress-bar").style.width = `${redPct}%`;
    
    // Update Sub stats bars (Left for blue, Right for red)
    document.getElementById("sub-bar-dmg-blue").style.width = `${(blueDmgAvg / 5) * 100}%`;
    document.getElementById("sub-bar-dmg-red").style.width = `${(redDmgAvg / 5) * 100}%`;
    
    document.getElementById("sub-bar-tank-blue").style.width = `${(blueTankAvg / 5) * 100}%`;
    document.getElementById("sub-bar-tank-red").style.width = `${(redTankAvg / 5) * 100}%`;
    
    document.getElementById("sub-bar-tf-blue").style.width = `${(blueTfAvg / 5) * 100}%`;
    document.getElementById("sub-bar-tf-red").style.width = `${(redTfAvg / 5) * 100}%`;
}

// --- 8. ACTION HANDLERS ---

function handleHeroSelect(hero) {
    if (state.currentTurnIndex >= 20) return;
    
    // Save to history snapshot
    state.history.push({
        currentTurnIndex: state.currentTurnIndex,
        bansBlue: [...state.bansBlue],
        bansRed: [...state.bansRed],
        picksBlue: [...state.picksBlue],
        picksRed: [...state.picksRed]
    });
    
    const turn = TURN_SEQUENCE[state.currentTurnIndex];
    
    if (turn.type === "ban") {
        if (turn.team === "blue") {
            state.bansBlue[turn.slotIndex] = hero.id;
        } else {
            state.bansRed[turn.slotIndex] = hero.id;
        }
    } else {
        if (turn.team === "blue") {
            state.picksBlue[turn.slotIndex] = hero.id;
        } else {
            state.picksRed[turn.slotIndex] = hero.id;
        }
    }
    
    // Clear search query after pick
    state.searchQuery = "";
    document.getElementById("search-input").value = "";
    document.getElementById("clear-search-btn").style.display = "none";
    
    // Advance State Turn
    state.currentTurnIndex++;
    
    renderUI();
}

function handleUndo() {
    if (state.history.length === 0) return;
    
    const prev = state.history.pop();
    
    state.currentTurnIndex = prev.currentTurnIndex;
    state.bansBlue = prev.bansBlue;
    state.bansRed = prev.bansRed;
    state.picksBlue = prev.picksBlue;
    state.picksRed = prev.picksRed;
    
    // Hide overlay if shown
    hideCompletionOverlay();
    
    renderUI();
}

function handleReset() {
    state.currentTurnIndex = 0;
    state.bansBlue = [null, null, null, null, null];
    state.bansRed = [null, null, null, null, null];
    state.picksBlue = [null, null, null, null, null];
    state.picksRed = [null, null, null, null, null];
    state.history = [];
    state.searchQuery = "";
    state.selectedRoleFilter = "all";
    
    document.getElementById("search-input").value = "";
    document.getElementById("clear-search-btn").style.display = "none";
    
    const filterTabs = document.querySelectorAll(".filter-tab");
    filterTabs.forEach(t => t.classList.remove("active"));
    document.getElementById("btn-filter-all").classList.add("active");
    
    // Hide overlays
    hideCompletionOverlay();
    
    renderUI();
}

// Overlay controllers
function showCompletionOverlay() {
    document.getElementById("completion-overlay").classList.remove("hidden");
}

function hideCompletionOverlay() {
    document.getElementById("completion-overlay").classList.add("hidden");
}

// --- 9. EVENT LISTENERS INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    // Search event
    const searchInput = document.getElementById("search-input");
    const clearBtn = document.getElementById("clear-search-btn");
    
    searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value.trim();
        if (state.searchQuery.length > 0) {
            clearBtn.style.display = "block";
        } else {
            clearBtn.style.display = "none";
        }
        renderHeroGrid();
    });
    
    clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        state.searchQuery = "";
        clearBtn.style.display = "none";
        renderHeroGrid();
    });
    
    // Role filter events
    const roleFiltersContainer = document.getElementById("role-filters");
    roleFiltersContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("filter-tab")) {
            const tabs = roleFiltersContainer.querySelectorAll(".filter-tab");
            tabs.forEach(t => t.classList.remove("active"));
            
            e.target.classList.add("active");
            state.selectedRoleFilter = e.target.dataset.role;
            renderHeroGrid();
        }
    });
    
    // Controls events
    document.getElementById("btn-undo").addEventListener("click", handleUndo);
    document.getElementById("btn-reset").addEventListener("click", handleReset);
    
    // Overlay events
    document.getElementById("btn-overlay-close").addEventListener("click", hideCompletionOverlay);
    document.getElementById("btn-overlay-reset").addEventListener("click", () => {
        handleReset();
        hideCompletionOverlay();
    });
    
    // Boot app
    renderUI();
});
