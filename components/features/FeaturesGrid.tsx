'use client';

import React, { useState } from 'react';
import { sound } from '@/lib/audio';
import { Swords, Globe, Trophy, Users, Gift, ShieldAlert, Cpu, ChevronRight, Zap } from 'lucide-react';

interface FeatureCard {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  stats: string;
  icon: React.ReactNode;
  accent: string;
  gradient: string;
  isWide?: boolean;
}

export default function FeaturesGrid() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const features: FeatureCard[] = [
    {
      id: 'combat',
      title: 'KINETIC COMBAT',
      category: 'TACTICAL GUNPLAY',
      tagline: 'Zero-RNG Recoil & High-Velocity Physics',
      description:
        'Every weapon features deterministic spray patterns and sub-millimeter bullet trajectories. Slide, wall-dash, and execute vertical breaches with seamless responsiveness.',
      stats: '128-Tick Deterministic Physics',
      icon: <Swords className="w-6 h-6" />,
      accent: '#00E5FF',
      gradient: 'from-[#00E5FF]/20 via-transparent to-transparent',
    },
    {
      id: 'global',
      title: 'GLOBAL MESH',
      category: 'INFRASTRUCTURE',
      tagline: '24 Edge Nodes Worldwide Under 15ms',
      description:
        'Custom multi-cloud direct peering routes eliminate routing hops. Enjoy ultra-stable matchmaking whether you are dueling in Tokyo, Frankfurt, or Los Angeles.',
      stats: 'Sub-15ms Latency Guaranteed',
      icon: <Globe className="w-6 h-6" />,
      accent: '#7C3AED',
      gradient: 'from-[#7C3AED]/20 via-transparent to-transparent',
    },
    {
      id: 'ranked',
      title: 'TIERED RANKED',
      category: 'COMPETITIVE LADDER',
      tagline: 'Strict ELO & Apex Grandmaster Tier',
      description:
        'Climb through 7 distinct competitive divisions from Initiate to Apex Grandmaster. Protected by hardware-level Aegis Kernel anti-cheat verification.',
      stats: 'Aegis Kernel Anti-Cheat Protected',
      icon: <Trophy className="w-6 h-6" />,
      accent: '#FF2D75',
      gradient: 'from-[#FF2D75]/20 via-transparent to-transparent',
    },
    {
      id: 'squads',
      title: 'TACTICAL SQUADS',
      category: 'TEAM SYNERGIES',
      tagline: 'Combo Ultimate Strikes & Spatial Comms',
      description:
        'Form syndicates of 5 operatives. Synchronize team abilities to detonate devastating elemental combos and communicate with built-in 3D positional spatial audio.',
      stats: 'Full 3D HRTF Spatial Voice',
      icon: <Users className="w-6 h-6" />,
      accent: '#10B981',
      gradient: 'from-[#10B981]/20 via-transparent to-transparent',
    },
    {
      id: 'rewards',
      title: 'THE WEAPON FORGE & SEASON PASS',
      category: 'PROGRESSION & REWARDS',
      tagline: 'Unlock the Impossible • Zero Pay-to-Win',
      description:
        'Forge mythic kinetic weapon skins, reactive holographic finish effects, and tournament player banners through gameplay achievement alone. Every cosmetic item is earnable, tradeable, and completely vanity-only.',
      stats: '100+ Earnable Tiers & Vaulted Artifacts',
      icon: <Gift className="w-7 h-7" />,
      accent: '#F59E0B',
      gradient: 'from-[#F59E0B]/20 via-amber-950/10 to-transparent',
      isWide: true,
    },
  ];

  return (
    <section id="features" className="relative py-28 bg-[#080811] overflow-hidden">
      {/* Subtle Grid backdrop */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#0D0D16] border border-zinc-800 cyber-chamfer-small text-xs font-mono text-[#00E5FF]">
            <Cpu className="w-3.5 h-3.5" />
            <span>ENGINEERED FOR SUPREMACY</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            BUILT FOR <br />
            <span className="bg-gradient-to-r from-[#00E5FF] via-white to-[#7C3AED] bg-clip-text text-transparent">
              COMPETITION
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400">
            No RNG bloom, no predatory pay-to-win mechanics. Just pure reflex calibration, tactical decision making, and uncompromising esports infrastructure.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((card) => {
            const isHovered = hoveredCard === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => {
                  sound.playHover();
                  setHoveredCard(card.id);
                }}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative p-6 sm:p-8 bg-[#0D0D16]/90 border cyber-chamfer transition-all duration-400 overflow-hidden group ${
                  card.isWide ? 'md:col-span-2' : ''
                } ${
                  isHovered
                    ? 'border-zinc-500 shadow-2xl scale-[1.01]'
                    : 'border-zinc-800 hover:border-zinc-700'
                }`}
                style={{
                  borderColor: isHovered ? card.accent : undefined,
                  boxShadow: isHovered ? `0 0 35px -5px ${card.accent}35` : undefined,
                }}
              >
                {/* Background Dynamic Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} transition-opacity duration-500 pointer-events-none ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Scanlines overlay on hover */}
                <div className="absolute inset-0 cyber-scanlines opacity-10 pointer-events-none" />

                {/* Top Metatags & Icon */}
                <div className="relative z-10 flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="p-3 rounded cyber-chamfer-small transition-transform duration-300 group-hover:scale-110 flex items-center justify-center"
                      style={{
                        backgroundColor: `${card.accent}15`,
                        color: card.accent,
                        border: `1px solid ${card.accent}50`,
                      }}
                    >
                      {card.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">
                        {card.category}
                      </span>
                      <h3 className="font-orbitron font-black text-xl sm:text-2xl text-white tracking-wide">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  <span
                    className="text-[10px] font-mono px-2.5 py-1 rounded bg-black/60 border border-zinc-800"
                    style={{ color: card.accent }}
                  >
                    SYSTEM // V4
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-3">
                  <p className="font-orbitron text-xs sm:text-sm font-bold text-zinc-200">
                    {card.tagline}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Highlight Metric */}
                <div className="relative z-10 mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Zap className="w-3.5 h-3.5" style={{ color: card.accent }} />
                    <span className="text-zinc-300 font-semibold">{card.stats}</span>
                  </div>
                  <div
                    className="flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase transition-transform group-hover:translate-x-1"
                    style={{ color: card.accent }}
                  >
                    <span>INTEL</span>
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
