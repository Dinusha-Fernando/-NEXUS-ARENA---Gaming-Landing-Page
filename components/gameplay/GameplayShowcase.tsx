'use client';

import React, { useState, useEffect, useRef } from 'react';
import { sound } from '@/lib/audio';
import { Play, Eye, Video, Shield, Zap, Crosshair, Sparkles, ArrowRight } from 'lucide-react';

interface GameplayShowcaseProps {
  onWatchTrailer: () => void;
}

export default function GameplayShowcase({ onWatchTrailer }: GameplayShowcaseProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(0.88);
  const [activeCam, setActiveCam] = useState<'1st' | 'drone' | 'cinematic'>('1st');
  const [killFeed, setKillFeed] = useState([
    { killer: 'VORTEX', weapon: 'VK-9', victim: 'TITAN-09' },
    { killer: 'NYX', weapon: 'SILENT VEIL', victim: 'CIPHER' },
  ]);

  // Scroll scale effect from 0.85 to 1.0
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When the element enters the viewport, smoothly scale from 0.88 to 1.0
      const visibleRatio = Math.min(
        Math.max((windowHeight - rect.top) / (windowHeight + rect.height * 0.5), 0),
        1
      );
      const computedScale = 0.88 + visibleRatio * 0.12;
      setScale(Math.min(computedScale, 1.0));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Live Kill Feed Simulation
  useEffect(() => {
    const victims = ['ECLIPSE', 'SHADOW_01', 'KRONOS', 'VALENCE', 'OMEGA'];
    const weapons = ['VK-9 CARP', 'PHANTOM BLADE', 'ORBITAL EMP', 'RAIL-SNIPER'];

    const interval = setInterval(() => {
      const newFeed = {
        killer: ['VORTEX', 'NYX', 'VALKYRIE', 'TITAN-09'][Math.floor(Math.random() * 4)],
        weapon: weapons[Math.floor(Math.random() * weapons.length)],
        victim: victims[Math.floor(Math.random() * victims.length)],
      };
      setKillFeed((prev) => [newFeed, prev[0]]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="showcase"
      ref={containerRef}
      className="relative py-24 bg-[#050508] overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-r from-[#7C3AED]/15 via-[#00E5FF]/15 to-[#FF2D75]/15 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0D0D16] border border-zinc-800 cyber-chamfer-small text-xs font-mono text-[#00E5FF]">
            <Video className="w-3.5 h-3.5" />
            <span>UNREAL ENGINE 5.5 IN-GAME FOOTAGE</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            THE BATTLE <br />
            <span className="bg-gradient-to-r from-[#00E5FF] via-white to-[#FF2D75] bg-clip-text text-transparent">
              NEVER STOPS
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400">
            Witness high-octane 128-tick tactical combat. Every bullet vector is physics-calculated with zero randomness, zero lag compensation bias, and hyper-kinetic movement fluidity.
          </p>
        </div>

        {/* Perspective Control Tabs */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mb-6">
          <button
            onClick={() => {
              sound.playClick();
              setActiveCam('1st');
            }}
            onMouseEnter={() => sound.playHover()}
            className={`px-4 py-2 font-orbitron text-xs font-bold tracking-wider uppercase cyber-chamfer-small flex items-center gap-2 transition-all ${
              activeCam === '1st'
                ? 'bg-[#00E5FF] text-black shadow-[0_0_20px_rgba(0,229,255,0.6)]'
                : 'bg-[#0D0D16] text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            <Crosshair className="w-3.5 h-3.5" />
            <span>1ST PERSON ASSAULT</span>
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveCam('drone');
            }}
            onMouseEnter={() => sound.playHover()}
            className={`px-4 py-2 font-orbitron text-xs font-bold tracking-wider uppercase cyber-chamfer-small flex items-center gap-2 transition-all ${
              activeCam === 'drone'
                ? 'bg-[#7C3AED] text-white shadow-[0_0_20px_rgba(124,58,237,0.6)]'
                : 'bg-[#0D0D16] text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>TACTICAL DRONE ORBIT</span>
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveCam('cinematic');
            }}
            onMouseEnter={() => sound.playHover()}
            className={`px-4 py-2 font-orbitron text-xs font-bold tracking-wider uppercase cyber-chamfer-small flex items-center gap-2 transition-all ${
              activeCam === 'cinematic'
                ? 'bg-[#FF2D75] text-white shadow-[0_0_20px_rgba(255,45,117,0.6)]'
                : 'bg-[#0D0D16] text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>CINEMATIC CAM</span>
          </button>
        </div>

        {/* Large Scale-On-Scroll Cinematic Gameplay Container */}
        <div
          className="relative transition-transform duration-300 ease-out will-change-transform"
          style={{ transform: `scale(${scale})` }}
        >
          <div className="relative aspect-video w-full rounded-xl overflow-hidden border-2 border-zinc-700 bg-black shadow-2xl group">
            {/* Scanlines layer */}
            <div className="absolute inset-0 cyber-scanlines opacity-40 z-20 pointer-events-none" />

            {/* Dynamic Combat Simulation Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c1b] via-[#101026] to-[#040409] flex items-center justify-center overflow-hidden">
              {/* Sci-Fi Grid and Animated Lasers */}
              <div className="absolute inset-0 cyber-grid-cyan opacity-25" />
              <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent top-1/3 animate-pulse" />
              <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF2D75] to-transparent bottom-1/4 animate-pulse delay-100" />

              {/* Dynamic Camera Perspective Content */}
              {activeCam === '1st' && (
                <div className="relative z-10 flex flex-col items-center justify-center">
                  {/* Tactical Reticle */}
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <div className="absolute inset-0 border border-[#00E5FF]/40 rounded-full animate-ping" />
                    <div className="w-16 h-16 border-2 border-[#00E5FF] rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF2D75]" />
                    </div>
                    {/* Reticle brackets */}
                    <div className="absolute -left-3 w-3 h-0.5 bg-[#00E5FF]" />
                    <div className="absolute -right-3 w-3 h-0.5 bg-[#00E5FF]" />
                    <div className="absolute -top-3 w-0.5 h-3 bg-[#00E5FF]" />
                    <div className="absolute -bottom-3 w-0.5 h-3 bg-[#00E5FF]" />
                  </div>
                  <span className="mt-3 font-mono text-[11px] text-[#00E5FF] tracking-widest uppercase">
                    TARGET LOCKED // ENEMY SQUADRON IN SIGHT
                  </span>
                </div>
              )}

              {activeCam === 'drone' && (
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                  <div className="w-32 h-32 rounded-full border-2 border-dashed border-[#7C3AED] flex items-center justify-center animate-spin [animation-duration:12s]">
                    <div className="w-20 h-20 border border-[#00E5FF] rounded-full" />
                  </div>
                  <span className="mt-3 font-mono text-[11px] text-[#7C3AED] tracking-widest uppercase">
                    DRONE_SURVEILLANCE // ORBITING ALT 450M
                  </span>
                </div>
              )}

              {activeCam === 'cinematic' && (
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#FF2D75]/40 to-transparent border border-[#FF2D75] flex items-center justify-center shadow-[0_0_40px_rgba(255,45,117,0.5)]">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                  <span className="mt-3 font-mono text-[11px] text-[#FF2D75] tracking-widest uppercase">
                    SPECTATOR BROADCAST // 4K HDR 120 FPS
                  </span>
                </div>
              )}

              {/* HUD: Kill Feed (Top Right) */}
              <div className="absolute top-4 right-4 z-20 space-y-1.5 font-mono text-[10px] hidden sm:block">
                {killFeed.map((feed, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 px-2.5 py-1 bg-black/70 border border-zinc-800 rounded backdrop-blur-sm"
                  >
                    <span className="text-[#00E5FF] font-bold">{feed.killer}</span>
                    <span className="text-zinc-500">[{feed.weapon}]</span>
                    <span className="text-[#FF2D75] font-bold">{feed.victim}</span>
                  </div>
                ))}
              </div>

              {/* HUD: Player Health & Ultimate Charge (Bottom Left) */}
              <div className="absolute bottom-4 left-4 z-20 flex items-end gap-3 hidden sm:flex">
                <div className="bg-black/80 border border-zinc-800 p-2.5 rounded backdrop-blur-sm">
                  <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400 mb-1">
                    <span>SHIELD & HEALTH</span>
                    <span className="text-emerald-400 font-bold">100 / 100</span>
                  </div>
                  <div className="w-36 h-2 bg-zinc-900 rounded overflow-hidden flex">
                    <div className="w-3/5 h-full bg-[#00E5FF]" />
                    <div className="w-2/5 h-full bg-emerald-400" />
                  </div>
                </div>

                <div className="bg-black/80 border border-zinc-800 p-2.5 rounded backdrop-blur-sm">
                  <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400 mb-1">
                    <span>ULTIMATE: EVENT HORIZON</span>
                    <span className="text-[#FF2D75] font-bold">100% READY</span>
                  </div>
                  <div className="w-32 h-2 bg-zinc-900 rounded overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-[#7C3AED] to-[#FF2D75] animate-pulse" />
                  </div>
                </div>
              </div>

              {/* HUD: Ammo Counter (Bottom Right) */}
              <div className="absolute bottom-4 right-4 z-20 hidden sm:block">
                <div className="bg-black/80 border border-zinc-800 px-3 py-2 rounded backdrop-blur-sm font-mono text-right">
                  <span className="text-[9px] text-zinc-500 block">MAGAZINE</span>
                  <div className="text-lg font-orbitron font-black text-white">
                    <span className="text-[#00E5FF]">36</span> / 180
                  </div>
                </div>
              </div>

              {/* Central Big Play Button */}
              <div className="absolute inset-0 z-30 flex items-center justify-center">
                <button
                  onClick={() => {
                    sound.playClick();
                    onWatchTrailer();
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className="group/btn relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#00E5FF]/20 hover:bg-[#00E5FF]/30 border-2 border-[#00E5FF] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_40px_rgba(0,229,255,0.6)] backdrop-blur-md"
                  aria-label="Play full gameplay trailer"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#00E5FF] flex items-center justify-center group-hover/btn:scale-105 transition-transform">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-black fill-current translate-x-0.5" />
                  </div>
                  {/* Outer Ripple */}
                  <span className="absolute inset-0 rounded-full border border-[#00E5FF] animate-ping opacity-60 pointer-events-none" />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Trailer Link Action */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              sound.playClick();
              onWatchTrailer();
            }}
            onMouseEnter={() => sound.playHover()}
            className="inline-flex items-center gap-2 font-orbitron text-xs sm:text-sm font-bold tracking-widest uppercase text-zinc-300 hover:text-[#00E5FF] transition-colors group"
          >
            <span>WATCH THE 4K REVEAL TRAILER</span>
            <ArrowRight className="w-4 h-4 text-[#00E5FF] group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
