'use client';

import React, { useState } from 'react';
import { sound } from '@/lib/audio';
import { Shield, ChevronUp, Check, ArrowRight, Activity, Globe, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    sound.playAffirmation();
    setSubscribed(true);
    setEmail('');
  };

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030305] border-t border-zinc-800/80 pt-16 pb-12 overflow-hidden text-zinc-400">
      {/* Grid line overlay */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Operational Bar */}
        <div className="p-4 bg-[#080811] border border-zinc-800 rounded-lg cyber-chamfer-small flex flex-col md:flex-row items-center justify-between gap-4 mb-14 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-white font-bold tracking-wider">
              ALL 24 GLOBAL SERVERS OPERATIONAL
            </span>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <span className="text-emerald-400 hidden sm:inline">0% PACKET LOSS</span>
          </div>

          <div className="flex items-center gap-6 text-zinc-400">
            <span>AEGIS KERNEL: <strong className="text-white">v4.19.0-ACTIVE</strong></span>
            <span>TICK RATE: <strong className="text-[#00E5FF]">128 HZ</strong></span>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-[#00E5FF] cyber-chamfer-small overflow-hidden bg-black flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.7)]">
                <img
                  src="/assets/nexus_logo.jpg"
                  alt="NEXUS ARENA Emblem"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-orbitron font-black text-xl tracking-wider text-white">
                NEXUS <span className="text-[#00E5FF]">//</span> ARENA
              </span>
            </div>

            <p className="font-sans text-xs text-zinc-400 leading-relaxed max-w-sm">
              The next-generation tactical cyber-esports experience. Developed with zero compromise for competitive players worldwide.
            </p>

            {/* Newsletter Subscription */}
            <form onSubmit={handleSubscribe} className="space-y-2 max-w-sm pt-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">
                SUBSCRIBE TO TRANSMISSIONS
              </span>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter operative email..."
                  required
                  className="w-full bg-[#0D0D16] border border-zinc-800 text-white text-xs font-mono px-3.5 py-2.5 pr-10 rounded cyber-chamfer-small focus:border-[#00E5FF] outline-none transition-all placeholder:text-zinc-600"
                />
                <button
                  type="submit"
                  onMouseEnter={() => sound.playHover()}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 bg-[#00E5FF] hover:bg-[#00c8df] text-black rounded transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 mt-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>TRANSMISSION FREQUENCY REGISTERED.</span>
                </div>
              )}
            </form>
          </div>

          {/* Nav Col 1: Game */}
          <div className="space-y-3">
            <h4 className="font-orbitron font-bold text-xs tracking-wider text-white uppercase">
              GAME
            </h4>
            <ul className="space-y-2 text-xs font-rajdhani font-semibold">
              <li><a href="#intro" className="hover:text-[#00E5FF] transition-colors">Lore Archive</a></li>
              <li><a href="#characters" className="hover:text-[#00E5FF] transition-colors">Champion Roster</a></li>
              <li><a href="#modes" className="hover:text-[#00E5FF] transition-colors">Game Modes</a></li>
              <li><a href="#maps" className="hover:text-[#00E5FF] transition-colors">Battlefield Maps</a></li>
              <li><a href="#showcase" className="hover:text-[#00E5FF] transition-colors">Weapon Forge</a></li>
            </ul>
          </div>

          {/* Nav Col 2: Esports */}
          <div className="space-y-3">
            <h4 className="font-orbitron font-bold text-xs tracking-wider text-white uppercase">
              ESPORTS
            </h4>
            <ul className="space-y-2 text-xs font-rajdhani font-semibold">
              <li><a href="#tournaments" className="hover:text-[#00E5FF] transition-colors">Season 04 Major</a></li>
              <li><a href="#leaderboard" className="hover:text-[#00E5FF] transition-colors">Apex Leaderboard</a></li>
              <li><a href="#tournaments" className="hover:text-[#00E5FF] transition-colors">Tournament Rules</a></li>
              <li><a href="#news" className="hover:text-[#00E5FF] transition-colors">Anti-Cheat Protocol</a></li>
              <li><a href="#community" className="hover:text-[#00E5FF] transition-colors">Spectator API</a></li>
            </ul>
          </div>

          {/* Nav Col 3: Ratings & Legal */}
          <div className="space-y-3">
            <h4 className="font-orbitron font-bold text-xs tracking-wider text-white uppercase">
              RATINGS
            </h4>
            <div className="space-y-2 text-xs font-mono">
              <div className="p-2.5 bg-[#0D0D16] border border-zinc-800 rounded">
                <div className="text-white font-bold text-sm font-orbitron">ESRB TEEN (13+)</div>
                <div className="text-[10px] text-zinc-500">Violence, Blood, Simulated Gambling (Zero Real Currency)</div>
              </div>
              <div className="p-2.5 bg-[#0D0D16] border border-zinc-800 rounded">
                <div className="text-white font-bold text-sm font-orbitron">PEGI 16</div>
                <div className="text-[10px] text-zinc-500">Realistic Combat, In-Game Purchases</div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
          <div>
            © 2026 NEXUS ENTERTAINMENT & NEXUS STUDIOS. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-[#00E5FF] transition-colors border border-zinc-800 px-3 py-1.5 rounded cyber-chamfer-small bg-[#080811]"
          >
            <span>BACK TO TOP</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
