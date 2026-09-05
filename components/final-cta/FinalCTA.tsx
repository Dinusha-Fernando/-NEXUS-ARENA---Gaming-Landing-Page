'use client';

import React, { useState } from 'react';
import { sound } from '@/lib/audio';
import { SYSTEM_REQUIREMENTS } from '@/lib/data';
import { 
  Flame, 
  Download, 
  Monitor, 
  Cpu, 
  HardDrive, 
  CheckCircle2, 
  ExternalLink,
  Shield,
  Layers
} from 'lucide-react';

interface FinalCTAProps {
  onOpenRegister: () => void;
}

export default function FinalCTA({ onOpenRegister }: FinalCTAProps) {
  const [specsMode, setSpecsMode] = useState<'recommended' | 'minimum'>('recommended');
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  const activeSpecs = SYSTEM_REQUIREMENTS[specsMode];

  const handleDownload = () => {
    sound.playClick();
    setDownloadTriggered(true);
    setTimeout(() => {
      setDownloadTriggered(false);
    }, 4000);
  };

  return (
    <section id="cta" className="relative py-32 bg-[#050508] overflow-hidden">
      {/* Massive Glowing Portal / Energy Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] rounded-full border-2 border-[#00E5FF]/20 animate-spin [animation-duration:50s] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full border border-dashed border-[#7C3AED]/30 animate-spin [animation-direction:reverse] [animation-duration:35s] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#7C3AED]/25 via-[#00E5FF]/20 to-[#FF2D75]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Mini Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#0D0D16] border border-zinc-800 cyber-chamfer-small text-xs font-mono text-[#00E5FF] mb-6">
          <Shield className="w-3.5 h-3.5" />
          <span>ZERO PURCHASE REQUIRED • FREE TO PLAY</span>
        </div>

        {/* Massive Headline */}
        <div className="space-y-2 mb-6">
          <h2 className="font-orbitron font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight">
            READY TO ENTER?
          </h2>
          <h3 className="font-orbitron font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-wider bg-gradient-to-r from-[#00E5FF] via-white to-[#7C3AED] bg-clip-text text-transparent">
            THE ARENA IS WAITING.
          </h3>
        </div>

        {/* Narrative Callout */}
        <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto mb-10">
          Download the official Nexus Launcher or connect via Steam. Drop into 128-tick tactical matches in under 60 seconds.
        </p>

        {/* Primary Action Button Cluster */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={handleDownload}
            onMouseEnter={() => sound.playHover()}
            className="px-10 py-5 font-orbitron text-sm sm:text-base font-black tracking-widest uppercase bg-[#00E5FF] hover:bg-[#00c8df] text-black cyber-chamfer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(0,229,255,0.85)] flex items-center gap-3"
          >
            <Download className="w-5 h-5 fill-current" />
            <span>{downloadTriggered ? 'CLIENT DOWNLOADING...' : 'DOWNLOAD CLIENT — FREE'}</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onOpenRegister();
            }}
            onMouseEnter={() => sound.playHover()}
            className="px-8 py-5 font-orbitron text-sm sm:text-base font-bold tracking-widest uppercase border border-zinc-700 hover:border-[#7C3AED] bg-[#080811]/90 hover:bg-[#7C3AED]/20 text-white cyber-chamfer transition-all duration-300 backdrop-blur-md flex items-center gap-2.5"
          >
            <Flame className="w-5 h-5 text-[#FF2D75]" />
            <span>REGISTER COMPETITIVE SQUAD</span>
          </button>
        </div>

        {/* Supported Platforms Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-500 mb-16">
          <span className="flex items-center gap-1.5 hover:text-white transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
            WINDOWS PC (DIRECTX 12)
          </span>
          <span className="flex items-center gap-1.5 hover:text-white transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
            STEAM DECK VERIFIED
          </span>
          <span className="flex items-center gap-1.5 hover:text-white transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2D75]" />
            PLAYSTATION 5 (120 FPS)
          </span>
          <span className="flex items-center gap-1.5 hover:text-white transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            XBOX SERIES X|S
          </span>
        </div>

        {/* System Requirements Matrix Module */}
        <div className="max-w-4xl mx-auto bg-[#080811]/90 border border-zinc-800 cyber-chamfer p-6 sm:p-8 text-left shadow-2xl backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-[#00E5FF]" />
                <h4 className="font-orbitron font-bold text-sm tracking-widest text-white uppercase">
                  SYSTEM HARDWARE BENCHMARK
                </h4>
              </div>
              <p className="font-mono text-[11px] text-zinc-500 mt-0.5">
                Engine: Unreal Engine 5.5 • DirectStorage 1.2 Enabled
              </p>
            </div>

            {/* Minimum vs Recommended Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  sound.playClick();
                  setSpecsMode('minimum');
                }}
                className={`px-3 py-1.5 text-xs font-orbitron font-bold rounded cyber-chamfer-small transition-all ${
                  specsMode === 'minimum'
                    ? 'bg-[#7C3AED] text-white'
                    : 'bg-[#0D0D16] text-zinc-400 border border-zinc-800 hover:text-white'
                }`}
              >
                MINIMUM (60 FPS)
              </button>
              <button
                onClick={() => {
                  sound.playClick();
                  setSpecsMode('recommended');
                }}
                className={`px-3 py-1.5 text-xs font-orbitron font-bold rounded cyber-chamfer-small transition-all ${
                  specsMode === 'recommended'
                    ? 'bg-[#00E5FF] text-black'
                    : 'bg-[#0D0D16] text-zinc-400 border border-zinc-800 hover:text-white'
                }`}
              >
                RECOMMENDED (144+ FPS)
              </button>
            </div>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-3 bg-[#0D0D16] border border-zinc-800/80 rounded">
              <span className="text-zinc-500 block text-[10px] uppercase">OPERATING SYSTEM</span>
              <span className="text-zinc-200 font-semibold">{activeSpecs.os}</span>
            </div>

            <div className="p-3 bg-[#0D0D16] border border-zinc-800/80 rounded">
              <span className="text-zinc-500 block text-[10px] uppercase">PROCESSOR (CPU)</span>
              <span className="text-zinc-200 font-semibold">{activeSpecs.cpu}</span>
            </div>

            <div className="p-3 bg-[#0D0D16] border border-zinc-800/80 rounded">
              <span className="text-zinc-500 block text-[10px] uppercase">GRAPHICS (GPU)</span>
              <span className="text-[#00E5FF] font-semibold">{activeSpecs.gpu}</span>
            </div>

            <div className="p-3 bg-[#0D0D16] border border-zinc-800/80 rounded">
              <span className="text-zinc-500 block text-[10px] uppercase">SYSTEM MEMORY</span>
              <span className="text-zinc-200 font-semibold">{activeSpecs.ram}</span>
            </div>

            <div className="p-3 bg-[#0D0D16] border border-zinc-800/80 rounded">
              <span className="text-zinc-500 block text-[10px] uppercase">NVME STORAGE</span>
              <span className="text-zinc-200 font-semibold">{activeSpecs.storage}</span>
            </div>

            <div className="p-3 bg-[#0D0D16] border border-zinc-800/80 rounded">
              <span className="text-zinc-500 block text-[10px] uppercase">GRAPHICS API</span>
              <span className="text-zinc-200 font-semibold">{activeSpecs.directX}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
