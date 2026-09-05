'use client';

import React, { useState } from 'react';
import { sound } from '@/lib/audio';
import { GAME_MODES } from '@/lib/data';
import { GameMode } from '@/lib/types';
import { Swords, Trophy, Flame, Users, Clock, Check, ChevronRight } from 'lucide-react';

interface GameModesProps {
  onSelectMode?: (mode: GameMode) => void;
}

export default function GameModes({ onSelectMode }: GameModesProps) {
  const [activeMode, setActiveMode] = useState<string>(GAME_MODES[0].id);

  const getModeIcon = (id: string) => {
    switch (id) {
      case 'ranked':
        return <Swords className="w-5 h-5" />;
      case 'tournament':
        return <Trophy className="w-5 h-5" />;
      case 'casual':
        return <Flame className="w-5 h-5" />;
      case 'coop':
        return <Users className="w-5 h-5" />;
      default:
        return <Swords className="w-5 h-5" />;
    }
  };

  return (
    <section id="modes" className="relative py-28 bg-[#080811] overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0D0D16] border border-zinc-800 cyber-chamfer-small text-xs font-mono text-[#7C3AED]">
            <Trophy className="w-3.5 h-3.5" />
            <span>ARENA DEPLOYMENT MODES</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            GAME <br />
            <span className="bg-gradient-to-r from-[#7C3AED] via-white to-[#00E5FF] bg-clip-text text-transparent">
              MODES
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400">
            From hyper-strict 5v5 ranked tactical extraction to 4-player cooperative raid incursions, choose your battlefield rules of engagement.
          </p>
        </div>

        {/* Large Expanding Cards (Horizontal Accordion) */}
        <div className="flex flex-col lg:flex-row gap-4 min-h-[500px]">
          {GAME_MODES.map((mode) => {
            const isActive = activeMode === mode.id;

            return (
              <div
                key={mode.id}
                onMouseEnter={() => {
                  sound.playHover();
                  setActiveMode(mode.id);
                }}
                onClick={() => {
                  sound.playClick();
                  setActiveMode(mode.id);
                }}
                className={`relative rounded-xl overflow-hidden border transition-all duration-500 cursor-pointer flex flex-col justify-between p-6 sm:p-8 ${
                  isActive
                    ? 'lg:flex-[2.5] bg-[#0D0D16] border-[#00E5FF] shadow-2xl shadow-cyan-950/30'
                    : 'lg:flex-1 bg-[#050508]/90 border-zinc-800 hover:border-zinc-700 hover:bg-[#080811]'
                }`}
              >
                {/* Real Asset Backdrop Image */}
                {mode.bgImage && (
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity duration-500 overflow-hidden pointer-events-none">
                    <img
                      src={mode.bgImage}
                      alt={mode.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080811] via-[#080811]/70 to-transparent" />
                  </div>
                )}

                {/* Background Dynamic Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${mode.gradient} opacity-40 transition-opacity duration-500`}
                />
                <div className="absolute inset-0 cyber-scanlines opacity-20 pointer-events-none" />

                {/* Top Section */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded bg-black/60 border border-zinc-800 text-[#00E5FF]">
                      {getModeIcon(mode.id)}
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] font-bold">
                      {mode.badge}
                    </span>
                  </div>

                  <h3 className="font-orbitron font-black text-2xl sm:text-3xl text-white tracking-wide">
                    {mode.title}
                  </h3>
                  <p className="font-orbitron text-xs sm:text-sm font-bold text-zinc-400 mt-1">
                    {mode.subtitle}
                  </p>
                </div>

                {/* Expanded Content (Details only shown or accentuated when active) */}
                <div
                  className={`relative z-10 transition-all duration-300 space-y-4 my-4 ${
                    isActive ? 'opacity-100 max-h-96' : 'lg:opacity-0 lg:max-h-0 overflow-hidden'
                  }`}
                >
                  <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {mode.description}
                  </p>

                  {/* Telemetry info */}
                  <div className="flex flex-wrap items-center gap-4 py-2 border-y border-zinc-800/80 text-xs font-mono text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#00E5FF]" />
                      <span>{mode.playerCount}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#7C3AED]" />
                      <span>{mode.roundTime}</span>
                    </div>
                  </div>

                  {/* Mode Features List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-rajdhani font-semibold text-zinc-300">
                    {mode.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer CTA */}
                <div className="relative z-10 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-500">
                    STATUS // QUEUE ACTIVE
                  </span>

                  <div className="flex items-center gap-1 text-xs font-orbitron font-bold text-[#00E5FF] group-hover:translate-x-1 transition-transform">
                    <span>ENTER QUEUE</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
