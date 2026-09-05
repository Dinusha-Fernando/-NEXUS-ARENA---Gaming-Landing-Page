import { Character, GameMode, MapSector, LeaderboardEntry, TournamentMatch, TransmissionArticle } from './types';

export const HERO_CHARACTERS: Character[] = [
  {
    id: 'vortex',
    name: 'KAIEN "VORTEX" REYES',
    callsign: 'VORTEX',
    role: 'ASSAULT',
    tagline: 'Singularity Manipulator & Frontline Breacher',
    quote: '"Gravity is just a suggestion. I dictate the downforce."',
    origin: 'Neo-Bogotá, Sector 04',
    difficulty: 3,
    accentColor: '#7C3AED', // Electric Violet
    secondaryColor: '#00E5FF',
    portrait: '/assets/vortex.jpg',
    stats: {
      damage: 94,
      defense: 65,
      speed: 88,
      utility: 78,
    },
    weapon: {
      name: 'VK-9 GRAV-CARBINE',
      type: 'Hyper-Kinetic Burst Rifle',
      fireRate: '850 RPM',
      damageRating: '42 / Crit 88',
    },
    abilities: [
      {
        name: 'EVENT HORIZON',
        type: 'ULTIMATE',
        description: 'Launches a collapsing micro-singularity that pulls enemy operatives through walls and detonations for 3.5s.',
        cooldown: '180s',
        icon: 'Atom',
      },
      {
        name: 'KINETIC SLIPSTREAM',
        type: 'TACTICAL',
        description: 'Dash forward in zero-G vector, becoming intangible to ballistic fire for 0.8s and instantly reloading kinetic magazines.',
        cooldown: '14s',
        icon: 'Zap',
      },
      {
        name: 'GRAVITON CRUSH',
        type: 'PASSIVE',
        description: 'Sliding creates a localized deceleration wave that slows enemy sprint speeds within a 6m radius.',
        icon: 'Activity',
      },
    ],
    loreSnippet: 'A former quantum orbital engineer exposed to zero-point collapse in the Jovian Rift. Vortex converts subatomic gravity wells into lethal kinetic weaponry.'
  },
  {
    id: 'nyx',
    name: 'SYLVIE "NYX" ROSTOVA',
    callsign: 'NYX',
    role: 'INFILTRATOR',
    tagline: 'Hardlight Mirage & Cloaked Operative',
    quote: '"You fired at my shadow. My blade is already in your spinal port."',
    origin: 'Kowloon Sub-Spire 09',
    difficulty: 4,
    accentColor: '#FF2D75', // Magenta
    secondaryColor: '#7C3AED',
    portrait: '/assets/nyx.jpg',
    stats: {
      damage: 89,
      defense: 48,
      speed: 98,
      utility: 82,
    },
    weapon: {
      name: 'SILENT VEIL SMG',
      type: 'Suppressed Plasma PDW',
      fireRate: '1,150 RPM',
      damageRating: '28 / Crit 56',
    },
    abilities: [
      {
        name: 'QUANTUM PHANTOM',
        type: 'ULTIMATE',
        description: 'Deploys 3 hyper-realistic holographic clones that mirror movements and fire simulated projectile tracers while Nyx enters true stealth.',
        cooldown: '160s',
        icon: 'Copy',
      },
      {
        name: 'PHASE BLINK',
        type: 'TACTICAL',
        description: 'Short-range teleport through solid hardlight barriers or walls up to 12 meters in cursor line-of-sight.',
        cooldown: '16s',
        icon: 'Move',
      },
      {
        name: 'OPTICAL CAMOUFLAGE',
        type: 'PASSIVE',
        description: 'Crouching stationary for 1.2s bends ambient photons, reducing radar visibility to zero.',
        icon: 'EyeOff',
      },
    ],
    loreSnippet: 'Trained by the syndicate black-ops division, Nyx utilizes bleeding-edge metamaterial cloaks to dismantle elite defense formations before an alert can trigger.'
  },
  {
    id: 'titan-09',
    name: 'GOLIATH-09 "TITAN"',
    callsign: 'TITAN-09',
    role: 'JUGGERNAUT',
    tagline: 'Autonomous Heavy Siege Exo-Platform',
    quote: '"Armor integrity: 100%. Your survival probability: 0.04%."',
    origin: 'Aegis Foundry, New Berlin',
    difficulty: 2,
    accentColor: '#00E5FF', // Cyber Cyan
    secondaryColor: '#FF2D75',
    portrait: '/assets/titan.svg',
    stats: {
      damage: 82,
      defense: 98,
      speed: 55,
      utility: 85,
    },
    weapon: {
      name: 'HYPER-CORE ROTARY CANNON',
      type: 'Overcharged Heavy Vulcan',
      fireRate: '950 RPM (Spin-up)',
      damageRating: '36 / Area AOE',
    },
    abilities: [
      {
        name: 'AEGIS BASTION',
        type: 'ULTIMATE',
        description: 'Anchors into terrain, deploying a 360° hardlight dome shield with 4,500 HP that supercharges teammate projectile velocity by 25%.',
        cooldown: '200s',
        icon: 'Shield',
      },
      {
        name: 'SEISMIC TECTONIC SLAM',
        type: 'TACTICAL',
        description: 'Leaps and hammers the battlefield with hydraulic thrusters, knocking airborne all hostiles in a 14m cone.',
        cooldown: '18s',
        icon: 'Flame',
      },
      {
        name: 'NANITE COMPOSITE PLATING',
        type: 'PASSIVE',
        description: 'Absorbs 15% of incoming explosive and headshot trauma, converting 5% into localized shield regeneration.',
        icon: 'ShieldCheck',
      },
    ],
    loreSnippet: 'A 9th-generation sentient chassis decommissioned from planetary line duty and retrofitted with experimental sovereign combat algorithms.'
  },
  {
    id: 'cipher',
    name: 'EZRA "CIPHER" LIN',
    callsign: 'CIPHER',
    role: 'TACTICIAN',
    tagline: 'Cyber-Warfare & Orbital EMP Architect',
    quote: '"I shut down your optic feed three seconds ago. You just haven\'t realized it yet."',
    origin: 'Taipei Megaplex Hub',
    difficulty: 5,
    accentColor: '#10B981', // Neon Emerald
    secondaryColor: '#00E5FF',
    portrait: '/assets/cipher.svg',
    stats: {
      damage: 72,
      defense: 60,
      speed: 76,
      utility: 99,
    },
    weapon: {
      name: 'NANO-NEEDLER DMR',
      type: 'Electromagnetic Marksman',
      fireRate: '340 RPM',
      damageRating: '68 / Shield Shred',
    },
    abilities: [
      {
        name: 'NEURAL BLACKOUT',
        type: 'ULTIMATE',
        description: 'Fires an orbital EMP satellite pulse disabling all enemy minimaps, HUD telemetry, and character abilities for 6 seconds.',
        cooldown: '190s',
        icon: 'Radio',
      },
      {
        name: 'SENTINEL DRONE SWARM',
        type: 'TACTICAL',
        description: 'Launches twin cloaked recon drones that track enemy thermals through smoke and deploy sonic shock tags.',
        cooldown: '22s',
        icon: 'Crosshair',
      },
      {
        name: 'SUB-NET BREACH',
        type: 'PASSIVE',
        description: 'Eliminating an enemy reveals the real-time position of their nearest squadmate for 4 seconds.',
        icon: 'Cpu',
      },
    ],
    loreSnippet: 'Black-hat prodigy turned battlefield conductor. Cipher controls information flow across the arena with terrifying mathematical precision.'
  },
  {
    id: 'valkyrie',
    name: 'FREJA "VALKYRIE" LIND',
    callsign: 'VALKYRIE',
    role: 'DUELIST',
    tagline: 'Supersonic Aerial Marksman',
    quote: '"From 300 meters above, everyone looks like target practice."',
    origin: 'New Oslo High-Orbit Spire',
    difficulty: 4,
    accentColor: '#F59E0B', // Solar Amber
    secondaryColor: '#FF2D75',
    portrait: '/assets/valkyrie.svg',
    stats: {
      damage: 96,
      defense: 52,
      speed: 94,
      utility: 70,
    },
    weapon: {
      name: 'VALKYR-01 RAIL-SNIPER',
      type: 'Coil-Accelerated Sniper Rifle',
      fireRate: '48 RPM',
      damageRating: '145 / One-Shot Headshot',
    },
    abilities: [
      {
        name: 'VALHALLA DIVE',
        type: 'ULTIMATE',
        description: 'Launches into atmospheric hover, firing 4 plasma-guided smart micro-missiles that seek tagged enemy targets.',
        cooldown: '175s',
        icon: 'Compass',
      },
      {
        name: 'ION THRUST BOOST',
        type: 'TACTICAL',
        description: 'Vertical or horizontal jet propulsion granting temporary 3-second aerodynamic hovering with zero weapon sway.',
        cooldown: '12s',
        icon: 'Wind',
      },
      {
        name: 'APEX PREDATOR',
        type: 'PASSIVE',
        description: 'Dealing headshot damage increases movement speed and aim-down-sight velocity by 30% for 3 seconds.',
        icon: 'Target',
      },
    ],
    loreSnippet: 'Ex-experimental aerobatics test pilot with cybernetic inner ear stabilization, Valkyrie commands the vertical dimension of every combat encounter.'
  }
];

export const GAME_MODES: GameMode[] = [
  {
    id: 'ranked',
    title: 'RANKED ARENA',
    subtitle: 'High-Stakes Tactical Extraction',
    badge: 'COMPETITIVE 5v5',
    description: 'The definitive esports battleground. 5v5 objective extraction, round economy, attack/defense rotations, and strict 128-tick server validation. Every round counts toward your global ELO ranking.',
    playerCount: '5 vs 5',
    roundTime: '2m 15s / Round',
    features: ['Strict ELO Matchmaking', 'Kernel Anti-Cheat Shield', 'Weapon Economy System', 'Rank Demotion Protection'],
    gradient: 'from-violet-900/60 via-indigo-950/40 to-black',
    bgImage: '/assets/map_nexus_city.svg'
  },
  {
    id: 'tournament',
    title: 'APEX CHAMPIONSHIP',
    subtitle: '32-Team Bracket Knockout',
    badge: 'ESPORTS TOUR',
    description: 'Bi-weekly seasonal tournaments where registered squads clash in double-elimination brackets. Featuring spectator observer client broadcast, cash prize pools, and exclusive verified badges.',
    playerCount: '32 Squads',
    roundTime: 'Best of 3 / 5',
    features: ['Official Cash Prize Pool', 'Live Stream Spectator API', 'Banned Hero Drafting', 'Custom Private Lobbies'],
    gradient: 'from-cyan-950/60 via-blue-950/40 to-black',
    bgImage: '/assets/championship_trophy.svg'
  },
  {
    id: 'casual',
    title: 'CASUAL STRIKE',
    subtitle: 'Hyper-Velocity Deathmatch',
    badge: 'INSTANT DROP-IN',
    description: 'Instant respawns, chaotic sandbox combat, and unconstrained hero stacking. Perfect for calibrating weapon aim, warming up squad reflexes, or trying newly unlocked prototype loadouts.',
    playerCount: '8 vs 8',
    roundTime: '10m Match',
    features: ['Instant 3s Respawn', 'Dynamic Loadout Swapping', 'No Rank Penalties', 'Double Weapon XP'],
    gradient: 'from-pink-950/60 via-purple-950/40 to-black',
    bgImage: '/assets/vortex.jpg'
  },
  {
    id: 'coop',
    title: 'CO-OP OVERDRIVE',
    subtitle: '4-Player Procedural Incursion',
    badge: 'PVE RAID INVASION',
    description: 'Form a strike team of 4 operatives and descend into rogue AI foundry complexes. Face procedurally mutated combat colossi, solve environmental hazard switches, and extract vaulted weapon skins.',
    playerCount: '4 Operatives',
    roundTime: '25m Incursion',
    features: ['Rogue-lite Tech Trees', 'Colossal World Bosses', 'Vaulted Weapon Blueprints', 'Endgame Gear Progression'],
    gradient: 'from-emerald-950/60 via-teal-950/40 to-black',
    bgImage: '/assets/map_void_station.svg'
  }
];

export const MAP_SECTORS: MapSector[] = [
  {
    id: 'nexus-city',
    name: 'NEXUS METROPLEX',
    code: 'SECTOR // 01-ALPHA',
    location: 'Central Spire, Neo-Shinjuku',
    hazardLevel: 'CRITICAL',
    activePlayers: '14,820',
    weather: 'Acid Rain / Cyber Fog',
    difficulty: 4,
    description: 'A neon-drenched vertical canyon of corporate mega-skyscrapers. Multi-tier skybridges, holographic transit hubs, and subterranean maglev tunnels offer relentless three-dimensional flanking routes.',
    keyPoints: ['Skybridge A Overlook', 'Transit Terminal C', 'Sub-Level Server Core', 'Helipad Alpha'],
    coordinates: { x: 48, y: 52 },
    accentColor: '#00E5FF'
  },
  {
    id: 'north-sector',
    name: 'CRYOMESH GLACIER',
    code: 'SECTOR // 02-BOREAL',
    location: 'Arctic Ridge, Svalbard Trench',
    hazardLevel: 'SEVERE',
    activePlayers: '8,410',
    weather: 'Sub-Zero Blizzard / Low Visibility',
    difficulty: 3,
    description: 'A sub-surface cryogenics laboratory carved into living glacier ice. High-speed zip-lines span frozen crevices, while thermal vent zones provide tactical steam concealment.',
    keyPoints: ['Cryo Core Chamber', 'Thermal Geyser B', 'Observation Dome', 'Ice-Breaker Crane'],
    coordinates: { x: 30, y: 22 },
    accentColor: '#7C3AED'
  },
  {
    id: 'void-station',
    name: 'VOID STATION KRONOS',
    code: 'SECTOR // 03-ORBIT',
    location: 'Low Lunar Lagrange Point L2',
    hazardLevel: 'EXTREME',
    activePlayers: '11,290',
    weather: 'Hard Vacuum / Solar Radiation',
    difficulty: 5,
    description: 'A derelict orbital defense platform. Certain airlock corridors breach periodically, transitioning players into microgravity outer-hull firefights with silent zero-G physics.',
    keyPoints: ['Zero-G Ring Airlock', 'Primary Reactor Spindle', 'Solar Array Catwalk', 'Command Bridge'],
    coordinates: { x: 74, y: 35 },
    accentColor: '#FF2D75'
  },
  {
    id: 'red-zone',
    name: 'IGNIS RIFT BASIN',
    code: 'SECTOR // 04-VOLCANIC',
    location: 'Caldera Rift, Pacific Trench',
    hazardLevel: 'EXTREME',
    activePlayers: '9,640',
    weather: 'Ash Cloud / Pyroclastic Surge',
    difficulty: 5,
    description: 'An active geothermal mining refinery built over subterranean molten basalt. Dynamic bridges descend into lava pools every 90 seconds, forcing teams to rotate with clinical timing.',
    keyPoints: ['Smelting Crucible', 'Basalt Extraction Rig', 'Coolant Tower 4', 'Ventilation Shaft 09'],
    coordinates: { x: 62, y: 78 },
    accentColor: '#F59E0B'
  }
];

export const LEADERBOARD_ENTRIES: LeaderboardEntry[] = [
  {
    rank: 1,
    handle: 'SHADOW_REIGN',
    teamTag: 'SENTINELS',
    tier: 'APEX GRANDMASTER',
    xp: '98,420 XP',
    rawXp: 98420,
    winRate: '78.4%',
    kdRatio: '3.42',
    mainCharacter: 'VORTEX',
    region: 'GLOBAL',
    isVerified: true
  },
  {
    rank: 2,
    handle: 'NIGHTFALL_EXE',
    teamTag: 'FNATIC',
    tier: 'APEX GRANDMASTER',
    xp: '97,830 XP',
    rawXp: 97830,
    winRate: '76.1%',
    kdRatio: '3.18',
    mainCharacter: 'NYX',
    region: 'EU',
    isVerified: true
  },
  {
    rank: 3,
    handle: 'CYBERFOX_X',
    teamTag: 'CLOUD9',
    tier: 'APEX GRANDMASTER',
    xp: '96,240 XP',
    rawXp: 96240,
    winRate: '74.9%',
    kdRatio: '2.95',
    mainCharacter: 'CIPHER',
    region: 'NA',
    isVerified: true
  },
  {
    rank: 4,
    handle: 'VALKYRIE_RAVEN',
    teamTag: 'T1',
    tier: 'GRANDMASTER',
    xp: '95,920 XP',
    rawXp: 95920,
    winRate: '73.2%',
    kdRatio: '2.84',
    mainCharacter: 'VALKYRIE',
    region: 'APAC',
    isVerified: true
  },
  {
    rank: 5,
    handle: 'PROJECT_ZERO',
    teamTag: 'FAZE',
    tier: 'GRANDMASTER',
    xp: '94,110 XP',
    rawXp: 94110,
    winRate: '71.8%',
    kdRatio: '2.76',
    mainCharacter: 'TITAN-09',
    region: 'NA',
    isVerified: true
  },
  {
    rank: 6,
    handle: 'ECLIPSE_OPS',
    teamTag: 'G2',
    tier: 'GRANDMASTER',
    xp: '93,480 XP',
    rawXp: 93480,
    winRate: '70.5%',
    kdRatio: '2.62',
    mainCharacter: 'VORTEX',
    region: 'EU',
    isVerified: true
  },
  {
    rank: 7,
    handle: 'HYPER_VALENCE',
    teamTag: 'GEN.G',
    tier: 'MASTER',
    xp: '91,850 XP',
    rawXp: 91850,
    winRate: '68.9%',
    kdRatio: '2.48',
    mainCharacter: 'CIPHER',
    region: 'APAC',
    isVerified: false
  },
  {
    rank: 8,
    handle: 'KRONOS_PRIME',
    teamTag: 'NAVI',
    tier: 'MASTER',
    xp: '90,420 XP',
    rawXp: 90420,
    winRate: '67.4%',
    kdRatio: '2.39',
    mainCharacter: 'NYX',
    region: 'EU',
    isVerified: false
  }
];

export const TOURNAMENT_MATCHES: TournamentMatch[] = [
  {
    round: 'QUARTERFINAL 01',
    team1: { name: 'SENTINELS APEX', tag: 'SEN', score: 2, logo: '🛡️', winner: true },
    team2: { name: 'CYBER FORCE NA', tag: 'CFN', score: 1, logo: '⚡' },
    status: 'COMPLETED',
    time: 'FINISHED'
  },
  {
    round: 'QUARTERFINAL 02',
    team1: { name: 'FNATIC SYNAPSE', tag: 'FNC', score: 2, logo: '🔥', winner: true },
    team2: { name: 'TITAN ESPORTS', tag: 'TTN', score: 0, logo: '🎯' },
    status: 'COMPLETED',
    time: 'FINISHED'
  },
  {
    round: 'SEMIFINAL 01',
    team1: { name: 'SENTINELS APEX', tag: 'SEN', score: 1, logo: '🛡️' },
    team2: { name: 'FNATIC SYNAPSE', tag: 'FNC', score: 1, logo: '🔥' },
    status: 'LIVE',
    time: 'MAP 3 // DECIDER'
  },
  {
    round: 'GRAND FINALS',
    team1: { name: 'TBD CHAMPION', tag: 'TBD', score: 0, logo: '👑' },
    team2: { name: 'TBD CONTENDER', tag: 'TBD', score: 0, logo: '⚔️' },
    status: 'UPCOMING',
    time: 'OCT 28 // 20:00 UTC'
  }
];

export const TRANSMISSION_ARTICLES: TransmissionArticle[] = [
  {
    id: 'patch-4-2',
    category: 'PATCH NOTES',
    tag: 'UPDATE 4.2',
    title: 'KINETIC WEAPON REWORK & VOID STATION GRAVITY FIXES',
    date: 'OCTOBER 24, 2026',
    readTime: '4 MIN READ',
    summary: 'Adjustments to recoil velocity on VK-9 Carbine, sub-orbital atmospheric vacuum optimizations, and tick-rate enhancements across all 24 regional servers.',
    fullContent: 'Full balance changes include: 1) VK-9 recoil curve normalized during slide transitions. 2) Void Station outer airlock depressurization timer increased from 3.0s to 4.5s with warning klaxons. 3) Titan-09 Aegis Bastion HP adjusted to 4,200 with 10% faster deployment spin. 4) Global tick stability packet loss reduced by 99.8%.',
    accent: '#00E5FF'
  },
  {
    id: 'championship-finals',
    category: 'ESPORTS',
    tag: 'SEASON 04',
    title: 'WORLD CHAMPIONSHIP FINALS LIVE AT MAKUHARI MESSE',
    date: 'OCTOBER 20, 2026',
    readTime: '3 MIN READ',
    summary: 'The top 32 global squads prepare for the $50,000 showdown. Ticket registration, drops calendar, and live 4K 120FPS broadcast details revealed.',
    fullContent: 'Nexus Championship Season 04 culminates in Tokyo with live crowds and custom arena staging. Broadcast available in 12 languages on Twitch, YouTube, and in-game tactical spectator client.',
    accent: '#FF2D75'
  },
  {
    id: 'anti-cheat-v3',
    category: 'DEV INTEL',
    tag: 'SYSTEM PROTOCOL',
    title: 'AEGIS KERNEL V3: MACHINE LEARNING BEHAVIOR DETECTOR',
    date: 'OCTOBER 16, 2026',
    readTime: '6 MIN READ',
    summary: 'Deep dive into our zero-latency anti-cheat infrastructure and hardware telemetry verification eliminating aim-assist scripts and DMA devices.',
    fullContent: 'Aegis Kernel V3 introduces continuous micro-mouse trajectory analysis to detect non-human aim micro-corrections within 3 rounds of ranked play, resulting in instant hardware hash bans.',
    accent: '#7C3AED'
  },
  {
    id: 'season-04-battlepass',
    category: 'COMMUNITY',
    tag: 'FORGE REWARDS',
    title: 'VAULTED CYBER-KATANA & REACTIVE CHROMAS UNLOCKED',
    date: 'OCTOBER 12, 2026',
    readTime: '3 MIN READ',
    summary: 'Explore the 100 tiers of Season 04: Cyber Syndicate. Unlock reactive weapon skins that pulse to elimination streaks and custom finisher animations.',
    fullContent: 'Featuring the legendary "Singularity Edge" melee weapon with custom gravity sound effects, 5 operative outfits, 1,200 Nexus Credits, and exclusive tournament spectator titles.',
    accent: '#F59E0B'
  }
];

export const SYSTEM_REQUIREMENTS = {
  minimum: {
    os: 'Windows 10 / 11 64-bit (Latest build)',
    cpu: 'Intel Core i5-8400 or AMD Ryzen 5 2600X',
    gpu: 'NVIDIA GeForce GTX 1060 (6GB) or AMD Radeon RX 580',
    ram: '16 GB Dual-Channel High-Speed DDR4',
    storage: '65 GB Ultra-Fast NVMe SSD',
    directX: 'Version 12 (Feature Level 12_1)',
    network: 'Broadband Internet connection (Low Latency recommended)'
  },
  recommended: {
    os: 'Windows 11 64-bit (DirectStorage Optimized)',
    cpu: 'Intel Core i7-13700K or AMD Ryzen 7 7800X3D',
    gpu: 'NVIDIA GeForce RTX 4070 Ti / RTX 3080 or AMD Radeon RX 7900 XT',
    ram: '32 GB DDR5 6000MHz',
    storage: '65 GB PCIe 4.0 NVMe SSD (M.2)',
    directX: 'Version 12 Ultimate (Ray Tracing + DLSS 3.5 / FSR 3)',
    network: 'Fiber Optic Gigabit with Sub-15ms regional routing'
  }
};
