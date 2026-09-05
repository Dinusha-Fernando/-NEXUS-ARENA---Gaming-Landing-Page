'use client';

import React, { useState, useEffect, useRef } from 'react';
import { sound } from '@/lib/audio';
import { LEADERBOARD_ENTRIES } from '@/lib/data';
import { LeaderboardEntry } from '@/lib/types';
import { Trophy, Search, ShieldCheck, Flame, ChevronRight, Award, Zap } from 'lucide-react';

export default function Leaderboard() {
  const [activeRegion, setActiveRegion] = useState<'GLOBAL' | 'NA' | 'EU' | 'APAC'>('GLOBAL');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [searchResult, setSearchResult] = useState<LeaderboardEntry | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const filteredEntries = LEADERBOARD_ENTRIES.filter((entry) => {
    const matchesRegion = activeRegion === 'GLOBAL' || entry.region === activeRegion;
    const matchesSearch =
      entry.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (entry.teamTag && entry.teamTag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRegion && matchesSearch;
  });

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    sound.playClick();

    // Look for exact match or mock generated profile
    const found = LEADERBOARD_ENTRIES.find((entry) =>
      entry.handle.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (found) {
      setSearchResult(found);
    } else {
      setSearchResult({
        rank: 142,
        handle: searchQuery.toUpperCase(),
        teamTag: 'SOLO',
        tier: 'MASTER',
        xp: '74,210 XP',
        rawXp: 74210,
        winRate: '62.4%',
        kdRatio: '2.14',
        mainCharacter: 'VORTEX',
        region: 'GLOBAL',
        isVerified: false,
      });
    }
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return 'bg-[#FF2D75] text-white border-[#FF2D75]';
    if (rank === 2) return 'bg-[#00E5FF] text-black border-[#00E5FF]';
    if (rank === 3) return 'bg-[#7C3AED] text-white border-[#7C3AED]';
    return 'bg-zinc-800 text-zinc-300 border-zinc-700';
  };

  return (
    <section
      id="leaderboard"
      ref={sectionRef}
      className="relative py-28 bg-[#080811] overflow-hidden"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0D0D16] border border-zinc-800 cyber-chamfer-small text-xs font-mono text-[#FF2D75] mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>SEASON 04 ELO LADDER</span>
            </div>
            <h2 className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              GLOBAL <br />
              <span className="bg-gradient-to-r from-[#FF2D75] via-white to-[#00E5FF] bg-clip-text text-transparent">
                RANKINGS
              </span>
            </h2>
            <p className="font-sans text-sm text-zinc-400 mt-2 max-w-xl">
              Real-time competitive standings for Season 04: Apex Division. 128-tick ranked matchmaking with verified anti-cheat integrity.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {(['GLOBAL', 'NA', 'EU', 'APAC'] as const).map((region) => (
              <button
                key={region}
                onClick={() => {
                  sound.playClick();
                  setActiveRegion(region);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`px-4 py-2 font-orbitron text-xs font-bold tracking-wider uppercase cyber-chamfer-small transition-all ${
                  activeRegion === region
                    ? 'bg-[#00E5FF] text-black shadow-[0_0_20px_rgba(0,229,255,0.6)]'
                    : 'bg-[#0D0D16] text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Search Operative Tag Bar */}
        <form onSubmit={handleSearchSubmit} className="mb-8">
          <div className="relative max-w-xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search operative tag (e.g. SHADOW, NIGHTFALL, or your handle)..."
              className="w-full bg-[#0D0D16] border border-zinc-800 hover:border-zinc-700 focus:border-[#00E5FF] text-white text-xs font-mono px-4 py-3.5 pl-11 rounded cyber-chamfer-small outline-none transition-all placeholder:text-zinc-600"
            />
            <Search className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-zinc-800 hover:bg-[#00E5FF] hover:text-black text-xs font-orbitron font-bold text-zinc-300 rounded transition-colors"
            >
              SEARCH
            </button>
          </div>
        </form>

        {/* Search Result Banner if any */}
        {searchResult && (
          <div className="mb-6 p-4 bg-[#0D0D16] border border-[#00E5FF] cyber-chamfer-small flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded bg-[#00E5FF] text-black font-orbitron font-black text-sm flex items-center justify-center">
                #{searchResult.rank}
              </span>
              <div>
                <span className="font-orbitron font-bold text-sm text-white">{searchResult.handle}</span>
                <span className="text-xs font-mono text-zinc-400 ml-2">[{searchResult.tier}]</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-[#00E5FF] font-bold">{searchResult.xp}</span>
              <span className="text-emerald-400">WIN: {searchResult.winRate}</span>
              <span className="text-zinc-400">K/D: {searchResult.kdRatio}</span>
            </div>
          </div>
        )}

        {/* Leaderboard Table */}
        <div className="bg-[#0D0D16]/90 border border-zinc-800 cyber-chamfer overflow-hidden shadow-2xl">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-2 p-4 border-b border-zinc-800 bg-[#080811] text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
            <div className="col-span-2 sm:col-span-1">RANK</div>
            <div className="col-span-6 sm:col-span-4">OPERATIVE / SQUAD</div>
            <div className="col-span-4 sm:col-span-2">TIER</div>
            <div className="hidden sm:block sm:col-span-3">XP PROGRESS</div>
            <div className="hidden sm:block sm:col-span-2 text-right">METRICS</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-zinc-800/60">
            {filteredEntries.map((entry) => {
              const maxXP = 100000;
              const xpPercent = Math.min((entry.rawXp / maxXP) * 100, 100);

              return (
                <div
                  key={entry.rank}
                  onMouseEnter={() => sound.playHover()}
                  className="grid grid-cols-12 gap-2 p-4 items-center hover:bg-[#121224] transition-colors group"
                >
                  {/* Rank */}
                  <div className="col-span-2 sm:col-span-1">
                    <span
                      className={`w-7 h-7 rounded border font-orbitron font-black text-xs flex items-center justify-center ${getRankBadge(
                        entry.rank
                      )}`}
                    >
                      #{entry.rank.toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Operative Handle & Pro Team */}
                  <div className="col-span-6 sm:col-span-4 flex items-center gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-orbitron font-bold text-sm text-white group-hover:text-[#00E5FF] transition-colors truncate">
                          {entry.handle}
                        </span>
                        {entry.isVerified && (
                          <span title="Verified Esports Operative" className="inline-flex items-center">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
                        {entry.teamTag && (
                          <span className="text-[#FF2D75] font-bold">[{entry.teamTag}]</span>
                        )}
                        <span>MAIN: {entry.mainCharacter}</span>
                      </div>
                    </div>
                  </div>

                  {/* Competitive Tier */}
                  <div className="col-span-4 sm:col-span-2">
                    <span
                      className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                        entry.tier === 'APEX GRANDMASTER'
                          ? 'bg-[#FF2D75]/20 text-[#FF2D75] border border-[#FF2D75]/40'
                          : entry.tier === 'GRANDMASTER'
                          ? 'bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/40'
                          : 'bg-zinc-800 text-zinc-300'
                      }`}
                    >
                      {entry.tier}
                    </span>
                  </div>

                  {/* Animated XP Progress Bar */}
                  <div className="hidden sm:block sm:col-span-3">
                    <div className="flex justify-between items-center text-[10px] font-mono mb-1">
                      <span className="text-zinc-400 font-bold">{entry.xp}</span>
                      <span className="text-zinc-600">/ 100K APEX</span>
                    </div>
                    <div className="h-1.5 bg-zinc-900 rounded overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#7C3AED] to-[#00E5FF] transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${xpPercent}%` : '0%',
                        }}
                      />
                    </div>
                  </div>

                  {/* Metrics: Win Rate & K/D */}
                  <div className="hidden sm:block sm:col-span-2 text-right font-mono text-xs">
                    <div className="text-emerald-400 font-bold">
                      {entry.winRate} <span className="text-[10px] text-zinc-500">WR</span>
                    </div>
                    <div className="text-zinc-400 text-[11px]">
                      {entry.kdRatio} <span className="text-[9px] text-zinc-600">K/D</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA to join the leaderboard */}
        <div className="mt-8 text-center">
          <a
            href="#cta"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-2 text-xs font-orbitron font-bold tracking-wider text-zinc-400 hover:text-[#00E5FF] transition-colors"
          >
            <span>JOIN THE COMPETITIVE LADDER IN SEASON 04</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
