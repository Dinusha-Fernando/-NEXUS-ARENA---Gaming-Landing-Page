export interface CharacterAbility {
  name: string;
  type: 'PASSIVE' | 'TACTICAL' | 'ULTIMATE';
  description: string;
  cooldown?: string;
  icon: string;
}

export interface Character {
  id: string;
  name: string;
  callsign: string;
  role: 'ASSAULT' | 'INFILTRATOR' | 'JUGGERNAUT' | 'TACTICIAN' | 'DUELIST';
  tagline: string;
  quote: string;
  origin: string;
  difficulty: number; // 1-5
  stats: {
    damage: number; // 0-100
    defense: number;
    speed: number;
    utility: number;
  };
  accentColor: string; // hex
  secondaryColor: string;
  portrait: string;
  abilities: CharacterAbility[];
  weapon: {
    name: string;
    type: string;
    fireRate: string;
    damageRating: string;
  };
  loreSnippet: string;
}

export interface GameMode {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  playerCount: string;
  roundTime: string;
  features: string[];
  gradient: string;
  bgImage: string;
}

export interface MapSector {
  id: string;
  name: string;
  code: string;
  location: string;
  hazardLevel: 'MODERATE' | 'SEVERE' | 'CRITICAL' | 'EXTREME';
  activePlayers: string;
  weather: string;
  difficulty: number;
  description: string;
  keyPoints: string[];
  coordinates: { x: number; y: number };
  accentColor: string;
}

export interface LeaderboardEntry {
  rank: number;
  handle: string;
  teamTag?: string;
  tier: 'APEX GRANDMASTER' | 'GRANDMASTER' | 'MASTER' | 'DIAMOND';
  xp: string;
  rawXp: number;
  winRate: string;
  kdRatio: string;
  mainCharacter: string;
  region: 'GLOBAL' | 'NA' | 'EU' | 'APAC';
  isVerified?: boolean;
}

export interface TournamentMatch {
  round: string;
  team1: { name: string; tag: string; score: number; logo: string; winner?: boolean };
  team2: { name: string; tag: string; score: number; logo: string; winner?: boolean };
  status: 'LIVE' | 'UPCOMING' | 'COMPLETED';
  time: string;
}

export interface TransmissionArticle {
  id: string;
  category: 'PATCH NOTES' | 'ESPORTS' | 'DEV INTEL' | 'COMMUNITY';
  tag: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  fullContent?: string;
  accent: string;
}
