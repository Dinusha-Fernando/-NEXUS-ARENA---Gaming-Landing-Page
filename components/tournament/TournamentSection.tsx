'use client';

import React, { useState, useEffect } from 'react';
import { sound } from '@/lib/audio';
import { TOURNAMENT_MATCHES } from '@/lib/data';
import { Trophy, Calendar, Users, DollarSign, Clock, ArrowRight, ShieldCheck, Flame } from 'lucide-react';

interface TournamentSectionProps {
  onRegisterSquad: () => void;
}

export default function TournamentSection({ onRegisterSquad }: TournamentSectionProps) {
  // Live ticking countdown timer: Days : Hours : Minutes : Seconds
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 4,
    minutes: 36,
    seconds: 21,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="tournaments" className="relative py-28 bg-[#050508] overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-[#FF2D75]/15 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#00E5FF]/15 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Tournament Banner Card */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-zinc-700 bg-gradient-to-br from-[#0D0D16] via-[#111124] to-[#050508] p-8 sm:p-12 shadow-2xl">
          {/* Scanlines layer */}
          <div className="absolute inset-0 cyber-scanlines opacity-25 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left: Tournament Details & Live Countdown */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#050508] border border-[#FF2D75] cyber-chamfer-small text-xs font-mono text-[#FF2D75]">
                <Flame className="w-3.5 h-3.5 animate-pulse" />
                <span>OFFICIAL ESPORTS MAJOR // TOKYO GRAND FINALS</span>
              </div>

              <div>
                <span className="font-orbitron font-extrabold text-sm tracking-widest text-[#00E5FF] uppercase block mb-1">
                  SEASON 04
                </span>
                <h2 className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-none">
                  NEXUS <br />
                  <span className="bg-gradient-to-r from-[#00E5FF] via-white to-[#FF2D75] bg-clip-text text-transparent">
                    CHAMPIONSHIP
                  </span>
                </h2>
              </div>

              {/* Tournament Key Metrics */}
              <div className="grid grid-cols-3 gap-3 py-2 text-center">
                <div className="p-3 bg-[#080811]/90 border border-zinc-800 rounded cyber-chamfer-small">
                  <div className="flex items-center justify-center gap-1 text-[10px] font-mono text-zinc-400 mb-1">
                    <DollarSign className="w-3.5 h-3.5 text-[#00E5FF]" />
                    <span>PRIZE POOL</span>
                  </div>
                  <div className="font-orbitron font-black text-xl sm:text-2xl text-[#00E5FF]">
                    $50,000
                  </div>
                </div>

                <div className="p-3 bg-[#080811]/90 border border-zinc-800 rounded cyber-chamfer-small">
                  <div className="flex items-center justify-center gap-1 text-[10px] font-mono text-zinc-400 mb-1">
                    <Users className="w-3.5 h-3.5 text-[#7C3AED]" />
                    <span>SQUADS</span>
                  </div>
                  <div className="font-orbitron font-black text-xl sm:text-2xl text-white">
                    32 TEAMS
                  </div>
                </div>

                <div className="p-3 bg-[#080811]/90 border border-zinc-800 rounded cyber-chamfer-small">
                  <div className="flex items-center justify-center gap-1 text-[10px] font-mono text-zinc-400 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[#FF2D75]" />
                    <span>DATES</span>
                  </div>
                  <div className="font-orbitron font-bold text-xs sm:text-sm text-zinc-200 mt-1">
                    OCT 24 — NOV 12
                  </div>
                </div>
              </div>

              {/* Live Countdown Timer Block */}
              <div className="p-5 bg-black/60 border border-zinc-800 rounded-xl cyber-chamfer-small space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#00E5FF]" />
                    <span>QUALIFIER REGISTRATION CLOSES IN:</span>
                  </span>
                  <span className="text-emerald-400 font-bold">SLOTS REMAINING: 4 / 32</span>
                </div>

                {/* Countdown Numbers Grid */}
                <div className="grid grid-cols-4 gap-2 text-center pt-2">
                  <div className="p-2.5 bg-[#0D0D16] border border-zinc-800 rounded">
                    <span className="font-orbitron font-black text-2xl sm:text-3xl text-white block">
                      {timeLeft.days.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase">DAYS</span>
                  </div>
                  <div className="p-2.5 bg-[#0D0D16] border border-zinc-800 rounded">
                    <span className="font-orbitron font-black text-2xl sm:text-3xl text-white block">
                      {timeLeft.hours.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase">HOURS</span>
                  </div>
                  <div className="p-2.5 bg-[#0D0D16] border border-zinc-800 rounded">
                    <span className="font-orbitron font-black text-2xl sm:text-3xl text-[#00E5FF] block">
                      {timeLeft.minutes.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase">MINUTES</span>
                  </div>
                  <div className="p-2.5 bg-[#0D0D16] border border-zinc-800 rounded">
                    <span className="font-orbitron font-black text-2xl sm:text-3xl text-[#FF2D75] block animate-pulse">
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase">SECONDS</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    sound.playClick();
                    onRegisterSquad();
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className="px-8 py-4 font-orbitron text-xs sm:text-sm font-black tracking-widest uppercase bg-gradient-to-r from-[#FF2D75] via-[#7C3AED] to-[#00E5FF] text-white hover:opacity-95 cyber-chamfer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(255,45,117,0.7)] flex items-center gap-3"
                >
                  <Trophy className="w-4 h-4" />
                  <span>REGISTER SQUAD NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified Anti-Cheat Required</span>
                </div>
              </div>

            </div>

            {/* Right: Live Interactive Bracket / Match Telemetry Preview */}
            <div className="lg:col-span-5 space-y-4">
              {/* Official Trophy Asset Banner */}
              <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-[#080811] p-3.5 flex items-center gap-4 cyber-chamfer-small">
                <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden border border-[#FF2D75]/60 bg-black shadow-[0_0_25px_rgba(255,45,117,0.5)] flex items-center justify-center">
                  <img
                    src="/assets/championship_trophy.svg"
                    alt="Championship Trophy"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#00E5FF] font-bold uppercase tracking-wider block">OFFICIAL MAJOR TROPHY</span>
                  <h4 className="font-orbitron font-bold text-sm text-white">THE APEX CHALICE</h4>
                  <p className="text-[11px] font-rajdhani text-zinc-400">Forged from hardlight crystals and sovereign nanite composites</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="font-orbitron text-xs font-bold tracking-wider text-zinc-300 uppercase">
                  BRACKET SPOTLIGHT
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>LIVE MATCHES</span>
                </span>
              </div>

              {/* Match Cards */}
              <div className="space-y-2.5">
                {TOURNAMENT_MATCHES.map((match, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => sound.playHover()}
                    className="p-3.5 bg-[#080811]/90 border border-zinc-800/80 rounded-lg cyber-chamfer-small hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mb-2">
                      <span>{match.round}</span>
                      <span className={match.status === 'LIVE' ? 'text-[#FF2D75] font-bold' : 'text-zinc-400'}>
                        {match.time}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-orbitron">
                        <div className="flex items-center gap-2">
                          <span>{match.team1.logo}</span>
                          <span className={match.team1.winner ? 'text-white font-bold' : 'text-zinc-300'}>
                            {match.team1.name}
                          </span>
                        </div>
                        <span className="font-mono font-bold text-sm text-[#00E5FF]">
                          {match.team1.score}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs font-orbitron">
                        <div className="flex items-center gap-2">
                          <span>{match.team2.logo}</span>
                          <span className={match.team2.winner ? 'text-white font-bold' : 'text-zinc-300'}>
                            {match.team2.name}
                          </span>
                        </div>
                        <span className="font-mono font-bold text-sm text-[#00E5FF]">
                          {match.team2.score}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center pt-2">
                <span className="text-[10px] font-mono text-zinc-500">
                  OFFICIAL BROADCAST ON TWITCH.TV/NEXUSARENA & YOUTUBE
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
