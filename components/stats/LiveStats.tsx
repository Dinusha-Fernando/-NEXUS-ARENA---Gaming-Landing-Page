'use client';

import React, { useState, useEffect, useRef } from 'react';
import { sound } from '@/lib/audio';
import { Users, Swords, Crosshair, Globe, ShieldCheck, Zap } from 'lucide-react';

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  subtext: string;
  icon: React.ReactNode;
  accent: string;
}

export default function LiveStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const stats: StatItem[] = [
    {
      target: 50,
      suffix: 'K+',
      label: 'ACTIVE PLAYERS',
      subtext: 'Synchronized worldwide in live lobbies',
      icon: <Users className="w-5 h-5" />,
      accent: '#00E5FF'
    },
    {
      target: 120,
      suffix: '+',
      label: 'BATTLES PER MIN',
      subtext: 'High-octane competitive matches hourly',
      icon: <Swords className="w-5 h-5" />,
      accent: '#7C3AED'
    },
    {
      target: 35,
      suffix: '',
      label: 'HERO COMBATANTS',
      subtext: 'Deep roster of specialized champions',
      icon: <Crosshair className="w-5 h-5" />,
      accent: '#FF2D75'
    },
    {
      target: 24,
      suffix: '',
      label: 'GLOBAL REGIONS',
      subtext: 'Zero-latency edge cluster servers',
      icon: <Globe className="w-5 h-5" />,
      accent: '#10B981'
    }
  ];

  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          sound.playAffirmation();
        }
      },
      { threshold: 0.25 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      const duration = 1400; // ms
      const steps = 30;
      const stepTime = duration / steps;
      const increment = stat.target / steps;

      let current = 0;
      return setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.floor(current);
          return updated;
        });
      }, stepTime);
    });

    return () => {
      intervals.forEach((id) => clearInterval(id));
    };
  }, [isVisible]);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative z-20 py-12 bg-[#080811] border-y border-zinc-800/80 overflow-hidden"
    >
      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              onMouseEnter={() => sound.playHover()}
              className="relative p-5 bg-[#0D0D16]/90 border border-zinc-800 cyber-chamfer-small transition-all duration-300 hover:border-zinc-700 hover:bg-[#121222] group"
            >
              {/* Top Accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: stat.accent }}
              />

              <div className="flex items-center justify-between mb-3">
                <div
                  className="p-2 rounded cyber-chamfer-small transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: `${stat.accent}15`,
                    color: stat.accent,
                    border: `1px solid ${stat.accent}40`,
                  }}
                >
                  {stat.icon}
                </div>
                <span className="text-[10px] font-mono text-zinc-500 flex items-center gap-1">
                  <Zap className="w-2.5 h-2.5 text-zinc-400" />
                  LIVE
                </span>
              </div>

              {/* Number Count Display */}
              <div className="flex items-baseline gap-1">
                <span className="font-orbitron font-black text-3xl sm:text-4xl text-white tracking-tight">
                  {counts[idx]}
                </span>
                <span
                  className="font-orbitron font-bold text-2xl"
                  style={{ color: stat.accent }}
                >
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <h4 className="mt-1 font-orbitron font-bold text-xs tracking-wider text-zinc-200 uppercase">
                {stat.label}
              </h4>

              {/* Description */}
              <p className="mt-1 font-rajdhani text-xs text-zinc-400">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Global Server Tick Guarantee Bar */}
        <div className="mt-6 pt-4 border-t border-zinc-800/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-zinc-400">
              128-TICK SUB-TICK ARCHITECTURE • ZERO SERVER DESYNC VERIFIED
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>PACKET LOSS: <strong className="text-emerald-400">0.00%</strong></span>
            <span>AVG MATCH QUEUE: <strong className="text-[#00E5FF]">11.4s</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
