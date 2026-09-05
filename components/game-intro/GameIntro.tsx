'use client';

import React, { useState } from 'react';
import { sound } from '@/lib/audio';
import { Compass, Sparkles, Shield, Cpu, ArrowRight, Radio } from 'lucide-react';

interface GameIntroProps {
  onExploreGame: () => void;
}

export default function GameIntro({ onExploreGame }: GameIntroProps) {
  const [activeTab, setActiveTab] = useState(0);

  const lorePillars = [
    {
      id: 'resonance',
      title: 'THE RESONANCE EVENT',
      tag: 'ORIGIN STORY',
      description:
        'In 2098, a localized space-time fracture shattered planetary energy grids. From the tectonic fractures emerged Hardlight and Grav-Matter—the fundamental resources governing modern combat technology.',
      highlight: '99.4% Quantum Coherence',
      icon: <Sparkles className="w-4 h-4 text-[#00E5FF]" />
    },
    {
      id: 'protocol',
      title: 'THE APEX PROTOCOL',
      tag: 'LEGAL BATTLEFIELD',
      description:
        'Instead of catastrophic global warfare, sovereign factions resolve territorial conflicts through regulated 5v5 tactical arenas overseen by the AI Sentinel Council.',
      highlight: 'Zero Civilian Casualties',
      icon: <Shield className="w-4 h-4 text-[#7C3AED]" />
    },
    {
      id: 'transcendence',
      title: 'CYBERNETIC TRANSCENDENCE',
      tag: 'HERO AUGMENTATION',
      description:
        'Champions are outfitted with sovereign neural exo-frames, granting hyper-velocity reflexes, localized gravity deflection, and instantaneous tactical synchronicity.',
      highlight: 'Sub-Millisecond Neural Latency',
      icon: <Cpu className="w-4 h-4 text-[#FF2D75]" />
    }
  ];

  return (
    <section id="intro" className="relative py-28 bg-[#050508] overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 -left-64 w-96 h-96 rounded-full bg-[#7C3AED]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[#00E5FF]/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Cinematic Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0D0D16] border border-zinc-800 cyber-chamfer-small text-xs font-mono text-[#00E5FF]">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>TRANSMISSION // DECLASSIFIED ARCHIVE</span>
            </div>

            <div className="space-y-3">
              <h2 className="font-orbitron font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase leading-tight">
                DISCOVER <br />
                <span className="bg-gradient-to-r from-[#00E5FF] via-white to-[#7C3AED] bg-clip-text text-transparent">
                  THE WORLD
                </span>
              </h2>
              <p className="font-orbitron text-lg font-bold text-[#00E5FF] tracking-wide">
                A competitive battlefield where every decision alters reality.
              </p>
            </div>

            <p className="font-sans text-zinc-400 text-sm sm:text-base leading-relaxed">
              Step into a high-stakes tactical arena forged in the ashes of the Great Resonance. Here, legendary operatives clash with weaponized kinetic gravity, hardlight holograms, and lethal precision in an esports ecosystem engineered for pure skill.
            </p>

            {/* Interactive Lore Tabs */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap gap-2 border-b border-zinc-800 pb-2">
                {lorePillars.map((item, idx) => (
                  <button
                    key={item.id}
                    onMouseEnter={() => sound.playHover()}
                    onClick={() => {
                      sound.playClick();
                      setActiveTab(idx);
                    }}
                    className={`px-3.5 py-1.5 font-orbitron text-xs font-bold tracking-wider uppercase transition-all cyber-chamfer-small flex items-center gap-2 ${
                      activeTab === idx
                        ? 'bg-[#00E5FF] text-black shadow-[0_0_15px_rgba(0,229,255,0.5)]'
                        : 'bg-[#0D0D16] text-zinc-400 hover:text-white border border-zinc-800'
                    }`}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </button>
                ))}
              </div>

              {/* Active Tab Card */}
              <div className="p-5 bg-[#080811] border border-zinc-800 cyber-chamfer-small relative overflow-hidden transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-[#7C3AED] uppercase font-bold tracking-widest">
                    {lorePillars[activeTab].tag}
                  </span>
                  <span className="text-xs font-mono text-[#00E5FF] px-2 py-0.5 rounded bg-[#00E5FF]/10 border border-[#00E5FF]/30">
                    {lorePillars[activeTab].highlight}
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {lorePillars[activeTab].description}
                </p>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={() => {
                  sound.playClick();
                  onExploreGame();
                }}
                onMouseEnter={() => sound.playHover()}
                className="group px-7 py-3.5 bg-gradient-to-r from-[#7C3AED] to-[#00E5FF] hover:from-[#6D28D9] hover:to-[#00c8df] text-black font-orbitron text-xs font-black tracking-widest uppercase cyber-chamfer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(124,58,237,0.7)] flex items-center gap-3"
              >
                <Compass className="w-4 h-4 text-black" />
                <span>EXPLORE THE GAME SYSTEM</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Holographic Tactical Artwork / Arena Simulation */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden border border-zinc-700 bg-[#080811] shadow-2xl group">
              {/* Scanline Overlay */}
              <div className="absolute inset-0 cyber-scanlines opacity-30 z-20 pointer-events-none" />

              {/* Visual Stage */}
              <div className="relative h-[420px] sm:h-[480px] w-full bg-black flex items-center justify-center p-6 overflow-hidden">
                {/* Real Tactical Map Asset Backdrop */}
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                  <img
                    src="/assets/map_nexus_city.svg"
                    alt="Nexus City Holographic Map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-black/50" />
                </div>

                {/* Cybernetic geometric circles */}
                <div className="absolute w-[360px] h-[360px] rounded-full border border-[#00E5FF]/20 animate-spin [animation-duration:30s] pointer-events-none" />
                <div className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-[#7C3AED]/30 animate-spin [animation-direction:reverse] [animation-duration:20s] pointer-events-none" />
                
                {/* Visual Content: Hologram Map Projection */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-4 max-w-sm">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#7C3AED]/40 via-[#00E5FF]/30 to-transparent border border-[#00E5FF] flex items-center justify-center shadow-[0_0_35px_rgba(0,229,255,0.4)]">
                    <Compass className="w-12 h-12 text-[#00E5FF] animate-pulse" />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#00E5FF] block mb-1">
                      TACTICAL MAP SIMULATION // SECTOR 01
                    </span>
                    <h3 className="font-orbitron font-black text-2xl text-white tracking-wider">
                      NEXUS BATTLESPHERE
                    </h3>
                    <p className="font-rajdhani text-xs text-zinc-400 mt-1">
                      Real-time terrain deformation • Dynamic zero-G breaches • Zero-recoil projectile physics
                    </p>
                  </div>

                  {/* Telemetry points */}
                  <div className="grid grid-cols-3 gap-2 w-full pt-2 text-center text-[10px] font-mono">
                    <div className="p-2 rounded bg-[#050508]/80 border border-zinc-800">
                      <span className="text-zinc-500 block">ARENA AREA</span>
                      <span className="text-white font-bold">2.4 KM²</span>
                    </div>
                    <div className="p-2 rounded bg-[#050508]/80 border border-zinc-800">
                      <span className="text-zinc-500 block">ELEVATION</span>
                      <span className="text-[#00E5FF] font-bold">8 TIERS</span>
                    </div>
                    <div className="p-2 rounded bg-[#050508]/80 border border-zinc-800">
                      <span className="text-zinc-500 block">WEATHER</span>
                      <span className="text-[#FF2D75] font-bold">ION STORM</span>
                    </div>
                  </div>
                </div>

                {/* HUD Corners */}
                <div className="absolute top-4 left-4 z-20 text-[10px] font-mono text-zinc-500">
                  SYSTEM_STATUS // RUNTIME_OPTIMAL
                </div>
                <div className="absolute bottom-4 right-4 z-20 text-[10px] font-mono text-zinc-500">
                  REFRESH // 240 FPS SYNC
                </div>
              </div>

              {/* Interactive Status Bar */}
              <div className="p-3 bg-[#0D0D16] border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
                  <span>TACTICAL SENSOR MESH ACTIVE</span>
                </span>
                <span className="text-zinc-600">NX-WORLD-V4</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
