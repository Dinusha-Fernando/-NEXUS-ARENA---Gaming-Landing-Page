'use client';

import React, { useEffect, useState } from 'react';
import { sound } from '@/lib/audio';
import { X, Play, Pause, Volume2, VolumeX, Shield, Sparkles } from 'lucide-react';

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrailerModal({ isOpen, onClose }: TrailerModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    if (!isOpen) return;

    sound.playWarpSweep();
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 300);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden border-2 border-[#00E5FF] bg-black shadow-[0_0_60px_rgba(0,229,255,0.4)]">
        
        {/* Top Control Bar */}
        <div className="p-4 bg-[#080811] border-b border-zinc-800 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-[#00E5FF]">
            <Shield className="w-4 h-4" />
            <span className="font-orbitron font-bold">NEXUS // CINEMATIC REVEAL TRAILER (4K HDR)</span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1.5 rounded border border-zinc-700 hover:border-white text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Stage */}
        <div className="relative aspect-video w-full bg-gradient-to-br from-[#0c0c1b] via-[#101026] to-[#040409] flex items-center justify-center overflow-hidden">
          {/* Cyber Scanlines & Grids */}
          <div className="absolute inset-0 cyber-scanlines opacity-35 pointer-events-none" />
          <div className="absolute inset-0 cyber-grid-cyan opacity-20 pointer-events-none" />

          {/* Animated Trailer Cinematic Simulation */}
          <div className="relative z-10 text-center space-y-4 max-w-lg p-6">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-[#7C3AED]/40 via-[#00E5FF]/40 to-[#FF2D75]/40 border-2 border-[#00E5FF] flex items-center justify-center shadow-[0_0_40px_rgba(0,229,255,0.5)] animate-pulse">
              <Sparkles className="w-12 h-12 text-[#00E5FF]" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#FF2D75] uppercase tracking-widest block font-bold">
                GLOBAL PREMIERE BROADCAST
              </span>
              <h3 className="font-orbitron font-black text-2xl sm:text-3xl text-white tracking-wider">
                TRANSCEND THE BATTLEFIELD
              </h3>
              <p className="font-rajdhani text-xs sm:text-sm text-zinc-300">
                128-tick sub-tick synchronization • Physics kinetic momentum • Dynamic environmental breach
              </p>
            </div>
          </div>

          {/* Video Player Controls Bar Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center gap-4 z-20">
            <button
              onClick={() => {
                sound.playClick();
                setIsPlaying(!isPlaying);
              }}
              className="text-white hover:text-[#00E5FF] transition-colors"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
            </button>

            {/* Video Scrubber */}
            <div className="flex-1 h-1.5 bg-zinc-800 rounded overflow-hidden cursor-pointer">
              <div
                className="h-full bg-gradient-to-r from-[#7C3AED] via-[#00E5FF] to-[#FF2D75] transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="font-mono text-xs text-zinc-400">
              01:14 / 02:45
            </span>

            <button
              onClick={() => {
                sound.playClick();
                setIsAudioMuted(!isAudioMuted);
              }}
              className="text-white hover:text-[#00E5FF] transition-colors"
            >
              {isAudioMuted ? <VolumeX className="w-5 h-5 text-zinc-500" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
