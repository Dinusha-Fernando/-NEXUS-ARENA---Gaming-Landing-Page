'use client';

import React, { useState, useEffect } from 'react';
import { sound } from '@/lib/audio';
import { Terminal, Shield, Zap, ChevronRight } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const logs = [
      'NEXUS_OS // V4.19-RT QUANTUM KERNEL DETECTED',
      'AEGIS ANTI-CHEAT PROTOCOL: 0-RING HARDWARE LOCKED',
      'SYNCHRONIZING 24 REGIONAL NODES... 128 TICK-RATE LOCKED',
      'COMPILING HIGH-ENERGY PARTICLE SHADERS & COLLIDERS...',
      'CONNECTING SPECTATOR & ESPORTS TOURNAMENT MESH...',
      'TRANSMISSION READY. OPERATIVE ACCESS GRANTED.'
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next >= 100) {
          clearInterval(interval);
          setIsReady(true);
          sound.playWarpSweep();
          return 100;
        }
        
        // Push logs at certain thresholds
        const logIndex = Math.min(Math.floor((next / 100) * logs.length), logs.length - 1);
        setTerminalLogs((current) => {
          if (!current.includes(logs[logIndex])) {
            sound.playHover();
            return [...current, logs[logIndex]];
          }
          return current;
        });

        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    sound.playClick();
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  const handleSkip = () => {
    sound.playClick();
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050508] text-white transition-all duration-700 select-none ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      
      {/* Ambient Gradient Glows */}
      <div className="absolute w-96 h-96 rounded-full bg-[#7C3AED]/15 blur-3xl pointer-events-none" />
      <div className="absolute w-72 h-72 rounded-full bg-[#00E5FF]/10 blur-2xl pointer-events-none" />

      {/* Top Bar Skip */}
      <div className="absolute top-6 right-8 z-10">
        <button
          onClick={handleSkip}
          className="text-xs uppercase tracking-widest text-zinc-500 hover:text-[#00E5FF] transition-colors flex items-center gap-1.5 px-3 py-1.5 border border-zinc-800 hover:border-[#00E5FF]/50 cyber-chamfer-small bg-[#080811]/80 backdrop-blur-sm"
        >
          <span>Skip Boot Sequence</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Center Console Container */}
      <div className="relative w-full max-w-xl px-6 flex flex-col items-center">
        {/* Brand Crest */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 border border-[#00E5FF] cyber-chamfer overflow-hidden bg-black flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.7)]">
            <img
              src="/assets/nexus_logo.jpg"
              alt="NEXUS ARENA Emblem"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="font-orbitron font-extrabold tracking-widest text-xl text-white">
              NEXUS <span className="text-[#00E5FF]">//</span> ARENA
            </h1>
            <p className="text-[10px] tracking-[0.25em] text-zinc-400 uppercase font-rajdhani font-medium">
              Quantum Competitive Engine
            </p>
          </div>
        </div>

        {/* Terminal Window */}
        <div className="w-full bg-[#080811]/90 border border-zinc-800 cyber-chamfer p-4 mb-6 relative overflow-hidden backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 mb-3">
            <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono">
              <Terminal className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>KERNEL_INIT_LOG</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[10px] font-mono text-emerald-400">ONLINE</span>
            </div>
          </div>

          {/* Terminal Outputs */}
          <div className="space-y-1.5 h-28 overflow-hidden font-mono text-[11px] text-zinc-400">
            {terminalLogs.slice(-4).map((log, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-[#7C3AED]">&gt;</span>
                <span className={idx === terminalLogs.slice(-4).length - 1 ? 'text-[#00E5FF]' : 'text-zinc-400'}>
                  {log}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Display */}
        <div className="w-full space-y-2 mb-6">
          <div className="flex justify-between items-center text-xs font-rajdhani font-semibold tracking-wider">
            <span className="text-zinc-400 uppercase">Initialization State</span>
            <span className="text-[#00E5FF] font-orbitron">{progress}%</span>
          </div>

          {/* Progress Bar Container */}
          <div className="w-full h-2 bg-[#0D0D16] border border-zinc-800 cyber-chamfer-small p-0.5 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#7C3AED] via-[#00E5FF] to-[#FF2D75] transition-all duration-150 ease-out shadow-[0_0_12px_rgba(0,229,255,0.7)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* CTA Enter Button when ready */}
        <div className="h-14 flex items-center justify-center">
          {isReady ? (
            <button
              onClick={handleEnter}
              className="group relative px-8 py-3 font-orbitron text-sm font-bold tracking-widest uppercase bg-gradient-to-r from-[#7C3AED] to-[#00E5FF] text-black cyber-chamfer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,229,255,0.7)] flex items-center gap-3 animate-pulse"
            >
              <Zap className="w-4 h-4 text-black fill-current" />
              <span>ENTER THE ARENA</span>
              <ChevronRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <div className="flex items-center gap-2 text-zinc-500 font-rajdhani text-xs tracking-widest uppercase">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-ping" />
              <span>SYNCHRONIZING TACTICAL MESH...</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer system details */}
      <div className="absolute bottom-6 text-center text-[10px] font-mono text-zinc-600 tracking-wider">
        SYS_ID // NX-ARENA-2026 • 128-TICK DEDICATED HOST
      </div>
    </div>
  );
}
