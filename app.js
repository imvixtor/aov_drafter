/* ==========================================
   AOV DRAFTER - CORE LOGIC (app.js)
   ========================================== */

// --- 1. HERO MOCK DATA DATABASE (25 AoV Heroes) ---
const HERO_DATABASE = [
    {
        "id": "airi",
        "name": "Airi",
        "main_role": "Top",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Airi-100x100.webp",
        "win_rate": 45.2,
        "pick_rate": 10.9,
        "ban_rate": 3.5,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "zephys"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "aleister",
        "name": "Aleister",
        "main_role": "Mid",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Aleister-100x100.webp",
        "win_rate": 49,
        "pick_rate": 6.8,
        "ban_rate": 8.2,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "nakroth"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "alice",
        "name": "Alice",
        "main_role": "SP",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Alice.webp",
        "win_rate": 48.5,
        "pick_rate": 2.9,
        "ban_rate": 1.9,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "ngokhong",
            "nakroth",
            "zill"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "allain",
        "name": "Allain",
        "main_role": "Top",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Allain-100x100.webp",
        "win_rate": 48.3,
        "pick_rate": 3.7,
        "ban_rate": 3.5,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "hayate",
            "elandorr",
            "fennik"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "amily",
        "name": "Amily",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Amily-100x100.webp",
        "win_rate": 49.8,
        "pick_rate": 8.6,
        "ban_rate": 4,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "zephys",
            "maloch"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "annette",
        "name": "Annette",
        "main_role": "SP",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Annette-100x100.webp",
        "win_rate": 57.9,
        "pick_rate": 13.3,
        "ban_rate": 6.3,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "baldum",
            "thane"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "aoi",
        "name": "Aoi",
        "main_role": "Jungle",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Aoi-100x100.webp",
        "win_rate": 51.1,
        "pick_rate": 8.9,
        "ban_rate": 22.7,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            "stuart"
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "arduin",
        "name": "Arduin",
        "main_role": "Top",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Arduin.webp",
        "win_rate": 46.6,
        "pick_rate": 1.5,
        "ban_rate": 1.2,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "krixi",
            "goverra",
            "dyadia",
            "thorne"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "arthur",
        "name": "Arthur",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Arthur-100x100.webp",
        "win_rate": 49.9,
        "pick_rate": 7.3,
        "ban_rate": 3.9,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "zephys",
            "maloch",
            "omen"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "arum",
        "name": "Arum",
        "main_role": "SP",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Arum.webp",
        "win_rate": 45.5,
        "pick_rate": 2,
        "ban_rate": 2.6,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "alice",
            "baldum",
            "thane"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "astrid",
        "name": "Astrid",
        "main_role": "Top",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Astrid.webp",
        "win_rate": 46.7,
        "pick_rate": 1.7,
        "ban_rate": 1.3,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "wisp",
            "zip",
            "hayate",
            "elsu"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "ata",
        "name": "Ata",
        "main_role": "Top",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Ata-100x100.webp",
        "win_rate": 47.2,
        "pick_rate": 3.6,
        "ban_rate": 2.3,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "maloch",
            "slimz"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "aya",
        "name": "Aya",
        "main_role": "SP",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Aya-100x100.webp",
        "win_rate": 53.3,
        "pick_rate": 10.5,
        "ban_rate": 9.4,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "ilumia",
            "yan",
            "slimz",
            "baldum"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "azzenka",
        "name": "Azzen'Ka",
        "main_role": "Mid",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/AzzenKa-100x100.webp",
        "win_rate": 48.2,
        "pick_rate": 3.4,
        "ban_rate": 1.8,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "zill",
            "murad",
            "nakroth"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "baldum",
        "name": "Baldum",
        "main_role": "SP",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Baldum-100x100.webp",
        "win_rate": 56.3,
        "pick_rate": 5.6,
        "ban_rate": 1.3,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "omen",
            "thane"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "bijan",
        "name": "Bijan",
        "main_role": "Top",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Bijan.webp",
        "win_rate": 53,
        "pick_rate": 15.4,
        "ban_rate": 10.5,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "omen"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "billow",
        "name": "Billow",
        "main_role": "Top",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2025/02/Billow-100x100.webp",
        "win_rate": 50,
        "pick_rate": 26.7,
        "ban_rate": 19.3,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "baldum",
            "richter",
            "iggy",
            "goverra"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "biron",
        "name": "Biron",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2025/02/Biron-100x100.webp",
        "win_rate": 39.6,
        "pick_rate": 16.8,
        "ban_rate": 4.5,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "valhein",
            "sinestrea",
            "kaine",
            "cresht"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "boltbaron",
        "name": "Bolt Baron",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2025/02/Bolt-Baron-100x100.webp",
        "win_rate": 51.6,
        "pick_rate": 5.3,
        "ban_rate": 4.8,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "errol",
            "cresht",
            "rouie",
            "darcy"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "bonnie",
        "name": "Bonnie",
        "main_role": "Mid",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Bonnie-100x100.webp",
        "win_rate": 54.7,
        "pick_rate": 15.6,
        "ban_rate": 24.2,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "kriknak",
            "nakroth"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "bright",
        "name": "Bright",
        "main_role": "AD",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Bright-100x100.webp",
        "win_rate": 50.3,
        "pick_rate": 9.9,
        "ban_rate": 7.1,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            "murad",
            "nakroth",
            "kriknak"
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "butterfly",
        "name": "Butterfly",
        "main_role": "Jungle",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Butterfly-100x100.webp",
        "win_rate": 52,
        "pick_rate": 15,
        "ban_rate": 16.8,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            "max"
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "capheny",
        "name": "Capheny",
        "main_role": "AD",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Capheny-100x100.webp",
        "win_rate": 42.9,
        "pick_rate": 22.1,
        "ban_rate": 8.1,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            "nakroth",
            "kriknak"
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "celica",
        "name": "Celica",
        "main_role": "AD",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Celica-100x100.webp",
        "win_rate": 51.2,
        "pick_rate": 8.6,
        "ban_rate": 6.8,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            "ngokhong",
            "roxie",
            "wisp",
            "qi"
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "charlotte",
        "name": "Charlotte",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Charlotte-100x100.webp",
        "win_rate": 50.1,
        "pick_rate": 7.5,
        "ban_rate": 8.7,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "biron",
            "hayate",
            "lorion",
            "aya"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "chaugnar",
        "name": "Chaugnar",
        "main_role": "SP",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Chaugnar-100x100.webp",
        "win_rate": 77.8,
        "pick_rate": 3.2,
        "ban_rate": 2,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "valhein",
            "telannas",
            "fennik"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "cresht",
        "name": "Cresht",
        "main_role": "SP",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Cresht-100x100.webp",
        "win_rate": 53.9,
        "pick_rate": 4.6,
        "ban_rate": 2.3,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "alice",
            "baldum",
            "thane"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "darcy",
        "name": "D'arcy",
        "main_role": "Mid",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Darcy-100x100.webp",
        "win_rate": 48.7,
        "pick_rate": 2.2,
        "ban_rate": 2,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "nakroth"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "dextra",
        "name": "Dextra",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Dextra-100x100.webp",
        "win_rate": 52.6,
        "pick_rate": 10.5,
        "ban_rate": 7.5,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "hayate"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "dieuthuyen",
        "name": "Điêu Thuyền",
        "main_role": "Mid",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Dieu-Thuyen-100x100.webp",
        "win_rate": 50.9,
        "pick_rate": 5.6,
        "ban_rate": 3.8,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "zill",
            "murad",
            "nakroth"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "dirak",
        "name": "Dirak",
        "main_role": "Mid",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Dirak-100x100.webp",
        "win_rate": 51,
        "pick_rate": 9.7,
        "ban_rate": 9.4,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "darcy"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "dolia",
        "name": "Dolia",
        "main_role": "SP",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Dolia-100x100.webp",
        "win_rate": 45.6,
        "pick_rate": 27.7,
        "ban_rate": 23.2,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "rourke",
            "cresht",
            "lumburr",
            "arthur"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "dyadia",
        "name": "Dyadia",
        "main_role": "Mid",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2026/02/Dyadia-100x100.webp",
        "win_rate": 47.4,
        "pick_rate": 2.1,
        "ban_rate": 4.4,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "zill",
            "roxie",
            "wonderwoman",
            "lauriel"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "edras",
        "name": "Edras",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2025/11/edrashead-2-100x100.jpg",
        "win_rate": 50,
        "pick_rate": 24.6,
        "ban_rate": 20.1,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "ignis",
            "preyta",
            "laville",
            "gildur"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "elandorr",
        "name": "Eland'orr",
        "main_role": "AD",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Elandorr-100x100.webp",
        "win_rate": 47.6,
        "pick_rate": 29.5,
        "ban_rate": 49.5,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            "murad",
            "nakroth",
            "kriknak"
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "elsu",
        "name": "Elsu",
        "main_role": "AD",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Elsu-100x100.webp",
        "win_rate": 35.3,
        "pick_rate": 11.9,
        "ban_rate": 5.3,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            "murad",
            "nakroth",
            "kriknak"
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "enzo",
        "name": "Enzo",
        "main_role": "Jungle",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Enzo-100x100.webp",
        "win_rate": 42.5,
        "pick_rate": 14,
        "ban_rate": 14.2,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            "arum",
            "kriknak",
            "murad"
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "erin",
        "name": "Erin",
        "main_role": "AD",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Erin-100x100.webp",
        "win_rate": 51.5,
        "pick_rate": 10.6,
        "ban_rate": 12.2,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            "max"
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "errol",
        "name": "Errol",
        "main_role": "Jungle",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Errol-100x100.webp",
        "win_rate": 33.3,
        "pick_rate": 2.1,
        "ban_rate": 0.3,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            "zephys",
            "lubo"
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "fennik",
        "name": "Fennik",
        "main_role": "AD",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Fennik-100x100.webp",
        "win_rate": 48.6,
        "pick_rate": 24.6,
        "ban_rate": 5.3,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            "murad",
            "nakroth",
            "kriknak"
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "florentino",
        "name": "Florentino",
        "main_role": "Top",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Florentino-100x100.webp",
        "win_rate": 50,
        "pick_rate": 12.6,
        "ban_rate": 38.3,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "rouie",
            "tachi",
            "charlotte",
            "ybneth"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "flowborn",
        "name": "Flowborn",
        "main_role": "AD",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2026/04/Flowborn-100x100.webp",
        "win_rate": 47.9,
        "pick_rate": 2.1,
        "ban_rate": 4.9,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            "qi",
            "zuka",
            "laville",
            "celica"
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "flowbornphep",
        "name": "Flowborn Phép",
        "main_role": "AD",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2026/05/flowborn-phep-100x100.webp",
        "win_rate": 47.9,
        "pick_rate": 2.1,
        "ban_rate": 4.9,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            "qi",
            "zuka",
            "laville",
            "celica"
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "gildur",
        "name": "Gildur",
        "main_role": "SP",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Gildur-100x100.webp",
        "win_rate": 33.3,
        "pick_rate": 4.2,
        "ban_rate": 1,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "astrid",
            "arthur",
            "dirak",
            "tamyn"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "goverra",
        "name": "Goverra",
        "main_role": "Mid",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2025/07/goverra-11-100x100.webp",
        "win_rate": 51,
        "pick_rate": 10.3,
        "ban_rate": 8.6,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "violet",
            "teemee",
            "erin",
            "edras"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "grakk",
        "name": "Grakk",
        "main_role": "SP",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Grakk.webp",
        "win_rate": 52.4,
        "pick_rate": 9.3,
        "ban_rate": 4.9,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "thane"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "hayate",
        "name": "Hayate",
        "main_role": "AD",
        "tier": "S+",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Hayate-100x100.webp",
        "win_rate": 53.1,
        "pick_rate": 34.4,
        "ban_rate": 22,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            "aya"
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "heino",
        "name": "Heino",
        "main_role": "Mid",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2025/05/heino-1-100x100.webp",
        "win_rate": 33.3,
        "pick_rate": 3.2,
        "ban_rate": 1.3,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "yorn",
            "maloch",
            "thane",
            "teeri"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "helen",
        "name": "Helen",
        "main_role": "SP",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Helen-100x100.webp",
        "win_rate": 50.9,
        "pick_rate": 9.1,
        "ban_rate": 8.1,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "nakroth"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "iggy",
        "name": "Iggy",
        "main_role": "Mid",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Iggy-e1724323882340-100x100.webp",
        "win_rate": 55.1,
        "pick_rate": 27.4,
        "ban_rate": 11.1,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "zuka",
            "nakroth"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "ignis",
        "name": "Ignis",
        "main_role": "Mid",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Ignis.webp",
        "win_rate": 46.5,
        "pick_rate": 15.1,
        "ban_rate": 0.7,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "celica",
            "teeri",
            "zuka",
            "taara"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "ilumia",
        "name": "Ilumia",
        "main_role": "Mid",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Ilumia-100x100.webp",
        "win_rate": 51.5,
        "pick_rate": 11,
        "ban_rate": 5.1,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "nakroth",
            "kriknak",
            "murad"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "ishar",
        "name": "Ishar",
        "main_role": "Mid",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Ishar-100x100.webp",
        "win_rate": 50,
        "pick_rate": 6.5,
        "ban_rate": 4.6,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "darcy",
            "dirak",
            "dieuthuyen"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "jinna",
        "name": "Jinna",
        "main_role": "Mid",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Jinna-100x100.webp",
        "win_rate": 50.8,
        "pick_rate": 7.3,
        "ban_rate": 4.8,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "aleister",
            "gildur",
            "ormarr"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "kahlii",
        "name": "Kahlii",
        "main_role": "Mid",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Kahlii.webp",
        "win_rate": 47,
        "pick_rate": 2.3,
        "ban_rate": 0.8,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "ilumia",
            "ormarr",
            "alice",
            "zill"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "kaine",
        "name": "Kaine",
        "main_role": "Jungle",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Kaine-100x100.webp",
        "win_rate": 47.4,
        "pick_rate": 6.3,
        "ban_rate": 2,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            "zill",
            "boltbaron",
            "zata",
            "quillen"
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "keera",
        "name": "Keera",
        "main_role": "Jungle",
        "tier": "S+",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Keera-100x100.webp",
        "win_rate": 37.5,
        "pick_rate": 19.6,
        "ban_rate": 15.8,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            "yena",
            "annette",
            "kaine",
            "ryoma"
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "kilgroth",
        "name": "Kil’Groth",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/KilGroth.webp",
        "win_rate": 51.3,
        "pick_rate": 9.3,
        "ban_rate": 7,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "zephys",
            "maloch"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "kriknak",
        "name": "Kriknak",
        "main_role": "Jungle",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Kriknak.webp",
        "win_rate": 50.2,
        "pick_rate": 7.5,
        "ban_rate": 3.6,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            "alice",
            "nakroth",
            "azzenka",
            "helen"
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "krixi",
        "name": "Krixi",
        "main_role": "Mid",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Krixi.webp",
        "win_rate": 51.2,
        "pick_rate": 16,
        "ban_rate": 19.2,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "butterfly",
            "zuka",
            "wonderwoman",
            "mina"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "krizzix",
        "name": "Krizzix",
        "main_role": "SP",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Krizzix.webp",
        "win_rate": 68.2,
        "pick_rate": 7.7,
        "ban_rate": 5.4,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "baldum",
            "thane"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "lauriel",
        "name": "Lauriel",
        "main_role": "Mid",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Lauriel-100x100.webp",
        "win_rate": 51.2,
        "pick_rate": 6.1,
        "ban_rate": 3.3,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "nakroth",
            "kriknak"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "laville",
        "name": "Laville",
        "main_role": "AD",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Laville-100x100.webp",
        "win_rate": 50.3,
        "pick_rate": 7.9,
        "ban_rate": 4.1,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            "nakroth",
            "kriknak"
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "liliana",
        "name": "Liliana",
        "main_role": "Mid",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Liliana.webp",
        "win_rate": 44.6,
        "pick_rate": 19.6,
        "ban_rate": 4.8,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "nakroth",
            "kriknak",
            "murad"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "lindis",
        "name": "Lindis",
        "main_role": "AD",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Lindis.webp",
        "win_rate": 49.1,
        "pick_rate": 2.9,
        "ban_rate": 4,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            "murad",
            "nakroth",
            "kriknak"
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "lorion",
        "name": "Lorion",
        "main_role": "Mid",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Lorion-100x100.webp",
        "win_rate": 55.4,
        "pick_rate": 26,
        "ban_rate": 18.7,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "nakroth",
            "omen"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "lubo",
        "name": "Lữ Bố",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Lu-Bo-100x100.webp",
        "win_rate": 50.5,
        "pick_rate": 7.7,
        "ban_rate": 5.7,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "zephys",
            "maloch",
            "omen"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "lumburr",
        "name": "Lumburr",
        "main_role": "SP",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Lumburr-100x100.webp",
        "win_rate": 52.8,
        "pick_rate": 10.6,
        "ban_rate": 8.2,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "thane"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "maloch",
        "name": "Maloch",
        "main_role": "Top",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Maloch-100x100.webp",
        "win_rate": 44.7,
        "pick_rate": 13.3,
        "ban_rate": 4.2,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "omen"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "marja",
        "name": "Marja",
        "main_role": "Mid",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Marja-100x100.webp",
        "win_rate": 57.1,
        "pick_rate": 36.8,
        "ban_rate": 39.5,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "maloch",
            "richter"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "max",
        "name": "Max",
        "main_role": "Top",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Max.webp",
        "win_rate": 47.6,
        "pick_rate": 1.4,
        "ban_rate": 0.7,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "charlotte",
            "superman",
            "ishar",
            "gildur"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "mganga",
        "name": "Mganga",
        "main_role": "Mid",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Mganga-100x100.webp",
        "win_rate": 44.2,
        "pick_rate": 18.2,
        "ban_rate": 12.4,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "zephys",
            "zill",
            "murad"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "mina",
        "name": "Mina",
        "main_role": "SP",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Mina.webp",
        "win_rate": 63,
        "pick_rate": 9.5,
        "ban_rate": 11.8,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "baldum",
            "thane"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "ming",
        "name": "Ming",
        "main_role": "SP",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Ming-100x100.webp",
        "win_rate": 52.5,
        "pick_rate": 11.2,
        "ban_rate": 5,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "erin",
            "lumburr",
            "kilgroth",
            "ryoma"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "moren",
        "name": "Moren",
        "main_role": "AD",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2026/01/moren-100x100.webp",
        "win_rate": 45.2,
        "pick_rate": 10.9,
        "ban_rate": 3.5,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            "murad",
            "nakroth",
            "kriknak"
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "murad",
        "name": "Murad",
        "main_role": "Jungle",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Murad.webp",
        "win_rate": 46.3,
        "pick_rate": 14.4,
        "ban_rate": 36.1,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            "zephys"
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "nakroth",
        "name": "Nakroth",
        "main_role": "Jungle",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Nakroth-100x100.webp",
        "win_rate": 50,
        "pick_rate": 8.4,
        "ban_rate": 1.6,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            "yorn",
            "fennik",
            "dextra",
            "ngokhong"
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "natalya",
        "name": "Natalya",
        "main_role": "Mid",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Natalya-100x100.webp",
        "win_rate": 37.5,
        "pick_rate": 5.6,
        "ban_rate": 0.9,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "zill",
            "murad",
            "nakroth"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "ngokhong",
        "name": "Ngộ Không",
        "main_role": "Jungle",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Ngo-Khong-100x100.webp",
        "win_rate": 48.8,
        "pick_rate": 2.2,
        "ban_rate": 4.3,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            "zephys",
            "baldum"
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "omega",
        "name": "Omega",
        "main_role": "SP",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Omega-100x100.webp",
        "win_rate": 44.5,
        "pick_rate": 3.5,
        "ban_rate": 1.6,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "baldum",
            "thane"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "omen",
        "name": "Omen",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Omen.webp",
        "win_rate": 65.5,
        "pick_rate": 10.2,
        "ban_rate": 12.5,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "jinna",
            "fennik",
            "yorn",
            "capheny"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "ormarr",
        "name": "Ormarr",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Ormarr-100x100.webp",
        "win_rate": 49.1,
        "pick_rate": 10.6,
        "ban_rate": 6.4,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "edras",
            "toro",
            "sephera",
            "tachi"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "paine",
        "name": "Paine",
        "main_role": "Jungle",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Paine-100x100.webp",
        "win_rate": 52.7,
        "pick_rate": 17.5,
        "ban_rate": 15.1,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            "nakroth"
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "preyta",
        "name": "Preyta",
        "main_role": "Mid",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Preyta.webp",
        "win_rate": 47.7,
        "pick_rate": 3.6,
        "ban_rate": 1.9,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "nakroth",
            "kriknak",
            "murad"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "qi",
        "name": "Qi",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Qi-100x100.webp",
        "win_rate": 37.5,
        "pick_rate": 28.1,
        "ban_rate": 19.3,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "nakroth",
            "kriknak",
            "quillen"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "quillen",
        "name": "Quillen",
        "main_role": "Jungle",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2026/01/Quillen.webp",
        "win_rate": 49.6,
        "pick_rate": 6.9,
        "ban_rate": 9.9,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            "ormarr",
            "yorn",
            "ata",
            "yan"
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "raz",
        "name": "Raz",
        "main_role": "Mid",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Raz.webp",
        "win_rate": 42.9,
        "pick_rate": 2.5,
        "ban_rate": 0,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "nakroth"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "richter",
        "name": "Richter",
        "main_role": "Top",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Richter-100x100.webp",
        "win_rate": 69.6,
        "pick_rate": 8.1,
        "ban_rate": 2.2,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "maloch"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "rouie",
        "name": "Rouie",
        "main_role": "SP",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Rouie-100x100.webp",
        "win_rate": 48.4,
        "pick_rate": 22.5,
        "ban_rate": 65.8,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "thane"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "rourke",
        "name": "Rourke",
        "main_role": "Jungle",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Rourke.webp",
        "win_rate": 48.5,
        "pick_rate": 7.4,
        "ban_rate": 2.1,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            "zephys",
            "maloch"
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "roxie",
        "name": "Roxie",
        "main_role": "Top",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Roxie-100x100.webp",
        "win_rate": 66.7,
        "pick_rate": 2.1,
        "ban_rate": 0.3,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "omen",
            "baldum"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "ryoma",
        "name": "Ryoma",
        "main_role": "Top",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Ryoma.webp",
        "win_rate": 46.7,
        "pick_rate": 15.8,
        "ban_rate": 4.1,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "skud",
            "allain",
            "ormarr",
            "tulen"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "sephera",
        "name": "Sephera",
        "main_role": "Mid",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Sephera-100x100.webp",
        "win_rate": 49,
        "pick_rate": 2.3,
        "ban_rate": 1.2,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "omen",
            "lubo",
            "rouie",
            "ming"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "sinestrea",
        "name": "Sinestrea",
        "main_role": "Jungle",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Sinestrea-100x100.webp",
        "win_rate": 56.6,
        "pick_rate": 18.6,
        "ban_rate": 74.5,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            "nakroth"
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "skud",
        "name": "Skud",
        "main_role": "Top",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Skud-100x100.webp",
        "win_rate": 52,
        "pick_rate": 17.5,
        "ban_rate": 12.4,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "zephys",
            "maloch",
            "omen"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "slimz",
        "name": "Slimz",
        "main_role": "AD",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Slimz.webp",
        "win_rate": 71.4,
        "pick_rate": 2.5,
        "ban_rate": 0,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            "nakroth",
            "kriknak"
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "stuart",
        "name": "Stuart",
        "main_role": "AD",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Stuart-100x100.webp",
        "win_rate": 50,
        "pick_rate": 27.4,
        "ban_rate": 10.7,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            "liliana",
            "zip",
            "yena",
            "paine"
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "superman",
        "name": "Superman",
        "main_role": "Top",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Superman.webp",
        "win_rate": 49,
        "pick_rate": 2,
        "ban_rate": 3.4,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "hayate",
            "telannas",
            "stuart"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "taara",
        "name": "Taara",
        "main_role": "SP",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Taara-100x100.webp",
        "win_rate": 59.7,
        "pick_rate": 21.8,
        "ban_rate": 1.9,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "alice",
            "baldum",
            "thane"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "tachi",
        "name": "Tachi",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Tachi-100x100.webp",
        "win_rate": 48.9,
        "pick_rate": 30.9,
        "ban_rate": 29.2,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "stuart",
            "nakroth",
            "lubo",
            "yorn"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "tamyn",
        "name": "Tamyn",
        "main_role": "Top",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2026/07/Tamyn-100x100.webp",
        "win_rate": 49.7,
        "pick_rate": 3.6,
        "ban_rate": 2.2,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "mina",
            "kaine",
            "dyadia",
            "arthur"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "teemee",
        "name": "TeeMee",
        "main_role": "SP",
        "tier": "S+",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/TeeMee.webp",
        "win_rate": 53.5,
        "pick_rate": 20.4,
        "ban_rate": 6.8,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "fennik",
            "biron",
            "volkath",
            "omen"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "teeri",
        "name": "Teeri",
        "main_role": "AD",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Teeri-100x100.webp",
        "win_rate": 51.7,
        "pick_rate": 7.7,
        "ban_rate": 3.7,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            "ming",
            "moren",
            "astrid",
            "ilumia"
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "telannas",
        "name": "Tel'Annas",
        "main_role": "AD",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/TelAnnas.webp",
        "win_rate": 40,
        "pick_rate": 3.5,
        "ban_rate": 0,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            "murad",
            "nakroth",
            "kriknak"
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "thane",
        "name": "Thane",
        "main_role": "SP",
        "tier": "S+",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Thane.webp",
        "win_rate": 41.9,
        "pick_rate": 10.9,
        "ban_rate": 0.8,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "omen"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "theflash",
        "name": "The Flash",
        "main_role": "Mid",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/The-Flash.webp",
        "win_rate": 47.5,
        "pick_rate": 5.8,
        "ban_rate": 1.1,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "aleister"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "thorne",
        "name": "Thorne",
        "main_role": "AD",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Thorne-100x100.webp",
        "win_rate": 46.2,
        "pick_rate": 3.2,
        "ban_rate": 2.4,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            "murad",
            "nakroth",
            "kriknak"
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "toro",
        "name": "Toro",
        "main_role": "SP",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Toro-100x100.webp",
        "win_rate": 48.2,
        "pick_rate": 39.3,
        "ban_rate": 25.3,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "baldum",
            "thane"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "trieuvan",
        "name": "Triệu Vân",
        "main_role": "Top",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Trieu-Van-100x100.webp",
        "win_rate": 44.9,
        "pick_rate": 1.3,
        "ban_rate": 1.6,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "bright",
            "richter",
            "hayate",
            "sinestrea"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "tulen",
        "name": "Tulen",
        "main_role": "Mid",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Tulen.webp",
        "win_rate": 54.4,
        "pick_rate": 16.9,
        "ban_rate": 22.2,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "ngokhong",
            "ormarr",
            "max",
            "butterfly"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "valhein",
        "name": "Valhein",
        "main_role": "AD",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Valhein-100x100.webp",
        "win_rate": 42,
        "pick_rate": 17.5,
        "ban_rate": 15.2,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            "murad",
            "nakroth",
            "kriknak"
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "veera",
        "name": "Veera",
        "main_role": "Mid",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Veera-100x100.webp",
        "win_rate": 48,
        "pick_rate": 2.3,
        "ban_rate": 2.9,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "zephys",
            "zill",
            "murad"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "veres",
        "name": "Veres",
        "main_role": "Top",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Veres-100x100.webp",
        "win_rate": 53.9,
        "pick_rate": 17.8,
        "ban_rate": 24.8,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "ilumia",
            "kriknak",
            "qi",
            "teemee"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "violet",
        "name": "Violet",
        "main_role": "AD",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Violet-100x100.webp",
        "win_rate": 69.6,
        "pick_rate": 8.1,
        "ban_rate": 5,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            "nakroth",
            "kriknak"
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "volkath",
        "name": "Volkath",
        "main_role": "Top",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Volkath.webp",
        "win_rate": 52.6,
        "pick_rate": 6.7,
        "ban_rate": 3.3,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "elandorr",
            "fennik"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "wiro",
        "name": "Wiro",
        "main_role": "SP",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Wiro.webp",
        "win_rate": 50,
        "pick_rate": 2.1,
        "ban_rate": 0,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "dirak",
            "erin",
            "krixi",
            "bijan"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "wisp",
        "name": "Wisp",
        "main_role": "AD",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Wisp.webp",
        "win_rate": 56.9,
        "pick_rate": 22.8,
        "ban_rate": 4,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            "murad",
            "nakroth",
            "kriknak"
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "wonderwoman",
        "name": "Wonder Woman",
        "main_role": "Top",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Wonder-Woman.webp",
        "win_rate": 52.1,
        "pick_rate": 10,
        "ban_rate": 9.2,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "preyta",
            "tachi",
            "lindis",
            "kaine"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "xeniel",
        "name": "Xeniel",
        "main_role": "SP",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Xeniel.webp",
        "win_rate": 51.4,
        "pick_rate": 8.3,
        "ban_rate": 7.6,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "omen"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "ybneth",
        "name": "Y’bneth",
        "main_role": "SP",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Ybneth-100x100.webp",
        "win_rate": 50,
        "pick_rate": 30.2,
        "ban_rate": 13.4,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "thane"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "yan",
        "name": "Yan",
        "main_role": "Jungle",
        "tier": "S+",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Yan-100x100.webp",
        "win_rate": 33.3,
        "pick_rate": 2.1,
        "ban_rate": 0,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            "volkath",
            "dirak",
            "liliana",
            "krixi"
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "yena",
        "name": "Yena",
        "main_role": "Top",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Yena-100x100.webp",
        "win_rate": 52.6,
        "pick_rate": 20,
        "ban_rate": 1.6,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            "richter",
            "omen",
            "astrid"
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "yorn",
        "name": "Yorn",
        "main_role": "AD",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Yorn-100x100.webp",
        "win_rate": 49.2,
        "pick_rate": 10.8,
        "ban_rate": 8.7,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            "murad",
            "nakroth",
            "kriknak"
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "yue",
        "name": "Yue",
        "main_role": "Mid",
        "tier": "S+",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Yue-100x100.webp",
        "win_rate": 54.1,
        "pick_rate": 13,
        "ban_rate": 8.6,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "arum",
            "charlotte",
            "erin",
            "flowbornphep"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "zata",
        "name": "Zata",
        "main_role": "Mid",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Zata-100x100.webp",
        "win_rate": 51.4,
        "pick_rate": 24.6,
        "ban_rate": 42.7,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            "dolia",
            "veera",
            "ryoma",
            "aleister"
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "zephys",
        "name": "Zephys",
        "main_role": "Jungle",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Zephys.webp",
        "win_rate": 49.2,
        "pick_rate": 21.4,
        "ban_rate": 11.3,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            "hayate"
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "zill",
        "name": "Zill",
        "main_role": "Jungle",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Zill.webp",
        "win_rate": 50.3,
        "pick_rate": 4.5,
        "ban_rate": 4.4,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            "nakroth",
            "kriknak",
            "murad"
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "zip",
        "name": "Zip",
        "main_role": "SP",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Zip-100x100.webp",
        "win_rate": 54.2,
        "pick_rate": 10.4,
        "ban_rate": 24.4,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            "thane"
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "zuka",
        "name": "Zuka",
        "main_role": "Jungle",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Zuka-100x100.webp",
        "win_rate": 68.2,
        "pick_rate": 7.7,
        "ban_rate": 0,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            "mina",
            "ata",
            "telannas",
            "ilumia"
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
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
    selectedRecRoleFilter: "all",
    
    // History for Undo
    history: []
};

// --- 5. SVG AVATAR GENERATION UTILITY ---
function generateSvgAvatar(name, role, tier) {
    let gradientStart = '#3b82f6';
    let gradientEnd = '#1d4ed8';
    let accentColor = '#60a5fa';
    
    if (tier === 'S+' || tier === 'S') {
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
function calculateSuggestions(teamType = "blue") {
    // 1. Identify which roles our team already picked
    const pickedIds = teamType === "blue" ? state.picksBlue.filter(id => id !== null) : state.picksRed.filter(id => id !== null);
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
    
    // Filter candidates by missing roles or specifically selected recommendations role filter
    if (state.selectedRecRoleFilter !== "all") {
        candidates = candidates.filter(h => h.main_role === state.selectedRecRoleFilter);
    } else if (missingRoles.length > 0 && state.currentTurnIndex >= 10) { // Only force missing role suggestions in Pick phase
        let roleMatches = candidates.filter(h => missingRoles.includes(h.main_role));
        if (roleMatches.length > 0) {
            candidates = roleMatches;
        }
    }
    
    // Get Enemy Team picked details
    const enemyPickedIds = teamType === "blue" ? state.picksRed.filter(id => id !== null) : state.picksBlue.filter(id => id !== null);
    const enemyPickedHeroes = enemyPickedIds.map(id => HERO_DATABASE.find(h => h.id === id)).filter(Boolean);
    
    // Calculate parameters for team comps
    const totalEnemyTankiness = enemyPickedHeroes.reduce((sum, h) => sum + h.attributes.tankiness, 0);
    const friendlyTeamfightAvailable = pickedHeroes.some(h => h.attributes.teamfight >= 4);
    
    const enemyHighMobility = enemyPickedHeroes.some(h => h.attributes.mobility >= 5);
    const enemyHighBurst = enemyPickedHeroes.some(h => h.attributes.damage >= 5 && h.main_role === "Mid");
    
    const tankShredders = ["hayate", "lauriel", "maloch"];
    
    // 2. Score each candidate
    const scoredCandidates = candidates.map(hero => {
        let baseScore = 30; // Default B / C
        if (hero.tier === 'S+') baseScore = 55;
        else if (hero.tier === 'S') baseScore = 50;
        else if (hero.tier === 'A') baseScore = 40;
        else if (hero.tier === 'B') baseScore = 30;
        else if (hero.tier === 'C') baseScore = 20;
        
        let score = baseScore;
        const reasons = [];
        
        // Win rate adjustment (above 50.5% gets a bonus, below 49.5% gets a penalty)
        let wrAdj = Math.round((hero.win_rate - 50.0) * 1.5);
        if (wrAdj !== 0) {
            score += wrAdj;
            reasons.push({ points: wrAdj, text: `Tỷ lệ thắng thực tế (${hero.win_rate.toFixed(1)}%)` });
        }
        
        // --- Class Counter (Khắc chế Hệ) ---
        if (enemyPickedHeroes.length > 0) {
            // Tank shredder vs Tanky enemy
            if (totalEnemyTankiness >= 7) {
                if (tankShredders.includes(hero.id)) {
                    score += 15;
                    reasons.push({ points: 15, text: "Khắc chế Đội hình chống chịu cao (Sát thương chuẩn/Bào Tank)" });
                }
            }
            // Assassin / High Dmg vs Squishy enemy
            if (totalEnemyTankiness < 3) {
                if (hero.main_role === "Jungle" || hero.attributes.damage >= 4) {
                    score += 15;
                    reasons.push({ points: 15, text: "Săn mục tiêu Đội hình yếu máu đối phương (Sát thương lớn)" });
                }
            }
        }
        
        // --- Hard Counter & Counter Database Check ---
        enemyPickedHeroes.forEach(enemy => {
            // 1. Manual check (has specific reason)
            const counterRule = COUNTERS_MANUAL.find(c => c.counter === hero.id && c.countered === enemy.id);
            if (counterRule) {
                score += 20;
                reasons.push({ points: 20, text: `Khắc chế cứng ${enemy.name} (${counterRule.reason})` });
            } 
            // 2. Crawled database check (if enemy lists our hero as a counter)
            else if (enemy.counters && enemy.counters.includes(hero.id)) {
                score += 20;
                reasons.push({ points: 20, text: `Khắc chế đối phương: ${hero.name} khắc chế ${enemy.name} (RovMeta)` });
            }
            
            // 3. Penalty if our hero is countered by enemy (if candidate lists enemy as a counter)
            if (hero.counters && hero.counters.includes(enemy.id)) {
                score -= 15;
                reasons.push({ points: -15, text: `Bị khắc chế: ${hero.name} ngại gặp ${enemy.name} (RovMeta)` });
            }
        });
        
        // --- Synergy (Hiệp lực) ---
        if (friendlyTeamfightAvailable && hero.attributes.teamfight >= 4) {
            score += 10;
            reasons.push({ points: 10, text: "Đồng đội giao tranh tổng mạnh (Hiệp lực TF ≥ 4)" });
        }
        
        // --- Composition Structural Balance (Bù đắp cơ cấu) ---
        const hasMid = pickedHeroes.some(h => h.main_role === "Mid");
        const hasAD = pickedHeroes.some(h => h.main_role === "AD");
        const hasFrontline = pickedHeroes.some(h => (h.main_role === "SP" || h.main_role === "Top") && h.attributes.tankiness >= 4);
        
        if (!hasMid && hero.main_role === "Mid") {
            score += 15;
            reasons.push({ points: 15, text: "Bổ sung nguồn Sát thương Phép chính cho đội (Pháp Sư)" });
        }
        if (!hasAD && hero.main_role === "AD") {
            score += 15;
            reasons.push({ points: 15, text: "Bổ sung nguồn Sát thương Vật lý chủ lực (Xạ Thủ)" });
        }
        if (!hasFrontline && hero.attributes.tankiness >= 4 && (hero.main_role === "SP" || hero.main_role === "Top")) {
            score += 15;
            reasons.push({ points: 15, text: "Bổ sung tướng Đỡ đòn / Tiên phong chống chịu gánh chịu sát thương" });
        }
        
        // --- Dynamic Counter-Drafting (Khắc chế động) ---
        if (enemyHighMobility && hero.attributes.teamfight >= 4 && (hero.main_role === "SP" || hero.main_role === "Mid")) {
            score += 15;
            reasons.push({ points: 15, text: "Khống chế/Giao tranh mạnh chống càn quét vs Tướng cơ động địch" });
        }
        if (enemyHighBurst && hero.main_role === "SP" && hero.attributes.tankiness >= 4) {
            score += 15;
            reasons.push({ points: 15, text: "Đỡ đòn bảo kê giảm sát thương từ nguồn sốc dame phép của địch" });
        }
        if (hero.ban_rate >= 15.0) {
            score += 10;
            reasons.push({ points: 10, text: "Tranh bài: Tướng Hot Meta cạnh tranh cao (Ban rate ≥ 15%)" });
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
        topSuggestions: scoredCandidates.slice(0, 6),
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
                img.src = hero.avatar || generateSvgAvatar(hero.name, hero.main_role, hero.tier);
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
                img.src = hero.avatar || generateSvgAvatar(hero.name, hero.main_role, hero.tier);
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
                
                const tierBadge = document.createElement("span");
                const sanitizedTier = hero.tier.replace('+', 'Plus');
                tierBadge.className = `pick-card-tier tier-${sanitizedTier}`;
                tierBadge.textContent = `Tier ${hero.tier}`;
                metaDiv.appendChild(tierBadge);
                
                const wrBadge = document.createElement("span");
                wrBadge.className = "pick-card-wr";
                wrBadge.textContent = `WR: ${hero.win_rate.toFixed(1)}%`;
                metaDiv.appendChild(wrBadge);
                
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
        img.src = hero.avatar || generateSvgAvatar(hero.name, hero.main_role, hero.tier);
        img.alt = hero.name;
        avatarDiv.appendChild(img);
        card.appendChild(avatarDiv);
        
        const nameHeader = document.createElement("h5");
        nameHeader.textContent = hero.name;
        card.appendChild(nameHeader);
        
        const statsSpan = document.createElement("span");
        statsSpan.className = "hero-card-stats";
        statsSpan.textContent = `WR: ${hero.win_rate.toFixed(1)}%`;
        card.appendChild(statsSpan);
        
        const tierBadge = document.createElement("span");
        const sanitizedTier = hero.tier.replace('+', 'Plus');
        tierBadge.className = `hero-card-badge tier-${sanitizedTier}`;
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
    const recTitle = document.getElementById("recommendation-title");
    
    const isPickPhase = state.currentTurnIndex >= 10 && state.currentTurnIndex < 20;
    const activeTeam = isPickPhase ? TURN_SEQUENCE[state.currentTurnIndex].team : "blue";
    
    // Update Title depending on active team
    if (activeTeam === "blue") {
        recTitle.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles magic-icon"></i> GỢI Ý TƯỚNG TỐI ƯU (ĐỘI XANH)`;
    } else {
        recTitle.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles magic-icon"></i> GỢI Ý TƯỚNG TỐI ƯU (ĐỘI ĐỎ)`;
    }
    
    // Update active class on recommendations filter tabs
    const recTabs = document.querySelectorAll("#rec-role-filters .rec-filter-tab");
    recTabs.forEach(tab => {
        if (tab.dataset.role === state.selectedRecRoleFilter) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });

    // Get recommendations for active team
    const { topSuggestions, missingRoles } = calculateSuggestions(activeTeam);
    
    const teamFull = activeTeam === "blue" ? state.picksBlue.filter(Boolean).length === 5 : state.picksRed.filter(Boolean).length === 5;
    
    // Format missing roles text
    if (state.currentTurnIndex < 10) {
        missingRolesText.textContent = "Giai đoạn Cấm (Gợi ý chưa mở)";
    } else if (teamFull) {
        missingRolesText.textContent = "Đội hình hoàn tất!";
    } else {
        missingRolesText.textContent = "Vị trí thiếu: " + missingRoles.map(translateRole).join(", ");
    }
    
    const isBluePickTurn = isPickPhase && TURN_SEQUENCE[state.currentTurnIndex].team === "blue";
    const isRedPickTurn = isPickPhase && TURN_SEQUENCE[state.currentTurnIndex].team === "red";
    
    if (!isPickPhase || teamFull) {
        const emptyState = document.createElement("div");
        emptyState.className = "rec-empty-state";
        if (teamFull) {
            emptyState.innerHTML = `<i class="fa-solid fa-circle-check"></i> Đội hình ${activeTeam === "blue" ? "Đội Xanh" : "Đội Đỏ"} đã chọn đầy đủ 5 vị trí.`;
        } else {
            emptyState.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> Gợi ý sẽ tự động tính toán khi bước vào lượt Chọn (Pick) của một trong hai đội.`;
        }
        recList.appendChild(emptyState);
    } else {
        if (topSuggestions.length === 0) {
            const emptyState = document.createElement("div");
            emptyState.className = "rec-empty-state";
            emptyState.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Không tìm thấy tướng phù hợp còn trống trong bể tướng.`;
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
                img.src = hero.avatar || generateSvgAvatar(hero.name, hero.main_role, hero.tier);
                img.alt = hero.name;
                avatar.appendChild(img);
                heroInfo.appendChild(avatar);
                
                const details = document.createElement("div");
                details.className = "rec-hero-details";
                const title = document.createElement("h4");
                title.textContent = hero.name;
                details.appendChild(title);
                
                const subtitle = document.createElement("span");
                subtitle.textContent = `${translateRole(hero.main_role)} • WR: ${hero.win_rate.toFixed(1)}% • Gốc: ${baseScore}đ`;
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
                // Disable quick select if it is not the active pick turn
                const canSelect = (activeTeam === "blue" && isBluePickTurn) || (activeTeam === "red" && isRedPickTurn);
                if (!canSelect) {
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
    state.selectedRecRoleFilter = "all";
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
    
    state.selectedRecRoleFilter = "all";
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
    state.selectedRecRoleFilter = "all";
    
    document.getElementById("search-input").value = "";
    document.getElementById("clear-search-btn").style.display = "none";
    
    const filterTabs = document.querySelectorAll(".filter-tab");
    filterTabs.forEach(t => t.classList.remove("active"));
    document.getElementById("btn-filter-all").classList.add("active");
    
    // Hide overlays
    hideCompletionOverlay();
    
    renderUI();
}

// --- Theme Management System ---
function initTheme() {
    const themeToggleGroup = document.getElementById("theme-toggle-group");
    if (!themeToggleGroup) return;

    // Listen to theme toggle buttons clicks
    themeToggleGroup.addEventListener("click", (e) => {
        const btn = e.target.closest(".theme-btn");
        if (!btn) return;
        const selectedTheme = btn.dataset.themeVal;
        setThemeSetting(selectedTheme);
    });

    // Listen to system prefers-color-scheme changes
    const systemMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    try {
        systemMediaQuery.addEventListener("change", (e) => {
            const currentSetting = localStorage.getItem("theme") || "system";
            if (currentSetting === "system") {
                applyThemeResolved("system");
            }
        });
    } catch (err) {
        // Fallback for older browsers
        systemMediaQuery.addListener((e) => {
            const currentSetting = localStorage.getItem("theme") || "system";
            if (currentSetting === "system") {
                applyThemeResolved("system");
            }
        });
    }

    // Initial toggle UI update
    const savedSetting = localStorage.getItem("theme") || "system";
    updateThemeToggleUI(savedSetting);
}

function setThemeSetting(themeSetting) {
    localStorage.setItem("theme", themeSetting);
    applyThemeResolved(themeSetting);
    updateThemeToggleUI(themeSetting);
}

function applyThemeResolved(themeSetting) {
    let isDark = false;
    if (themeSetting === "dark") {
        isDark = true;
    } else if (themeSetting === "light") {
        isDark = false;
    } else {
        // system
        isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme-setting", themeSetting);
}

function updateThemeToggleUI(themeSetting) {
    const themeButtons = document.querySelectorAll("#theme-toggle-group .theme-btn");
    themeButtons.forEach(btn => {
        if (btn.dataset.themeVal === themeSetting) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
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
    
    // Recommendations lane filter events
    const recFiltersContainer = document.getElementById("rec-role-filters");
    if (recFiltersContainer) {
        recFiltersContainer.addEventListener("click", (e) => {
            const tab = e.target.closest(".rec-filter-tab");
            if (tab) {
                state.selectedRecRoleFilter = tab.dataset.role;
                renderRecommendationsAndStats();
            }
        });
    }
    
    // Controls events
    document.getElementById("btn-undo").addEventListener("click", handleUndo);
    document.getElementById("btn-reset").addEventListener("click", handleReset);
    
    // Overlay events
    document.getElementById("btn-overlay-close").addEventListener("click", hideCompletionOverlay);
    document.getElementById("btn-overlay-reset").addEventListener("click", () => {
        handleReset();
        hideCompletionOverlay();
    });
    
    // Initialize Theme
    initTheme();
    
    // Boot app
    renderUI();
});
