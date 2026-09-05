'use client';

import React from 'react';
import { sound } from '@/lib/audio';
import { X, Cpu, Zap, Swords, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

interface ExploreGameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExploreGameModal({ isOpen, onClose }: ExploreGameModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#080811] border-2 border-[#00E5FF] cyber-chamfer p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-1.5 rounded border border-zinc-800 hover:border-white text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#00E5FF] mb-1">
            <Cpu className="w-4 h-4" />
            <span>NEXUS // CORE GAMEPLAY ARCHITECTURE DECLASSIFIED</span>
          </div>
          <h3 className="font-orbitron font-black text-2xl sm:text-3xl text-white">
            THE APEX ENGINE
          </h3>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-1">
            Built from the ground up on custom Netcode and Unreal Engine 5.5.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-[#0D0D16] border border-zinc-800 rounded">
            <div className="flex items-center gap-2 text-[#00E5FF] font-orbitron font-bold text-sm mb-2">
              <Zap className="w-4 h-4" />
              <span>HYPER-KINETIC LOCOMOTION</span>
            </div>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed">
              Slide-jumping, wall-kicking, and zero-G air-strafing. Momentum carries through combat maneuvers without awkward movement delays.
            </p>
          </div>

          <div className="p-4 bg-[#0D0D16] border border-zinc-800 rounded">
            <div className="flex items-center gap-2 text-[#7C3AED] font-orbitron font-bold text-sm mb-2">
              <Swords className="w-4 h-4" />
              <span>RECOIL DETERMINISM</span>
            </div>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed">
              Every weapon has a fixed spray pattern that can be learned and countered. No first-shot bloom RNG and no random critical hits.
            </p>
          </div>

          <div className="p-4 bg-[#0D0D16] border border-zinc-800 rounded">
            <div className="flex items-center gap-2 text-[#FF2D75] font-orbitron font-bold text-sm mb-2">
              <Shield className="w-4 h-4" />
              <span>AEGIS HARDWARE ANTI-CHEAT</span>
            </div>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed">
              Operates at kernel level with continuous machine-learning behavioral analysis to ensure unfair aim-assist scripts are banned before match start.
            </p>
          </div>

          <div className="p-4 bg-[#0D0D16] border border-zinc-800 rounded">
            <div className="flex items-center gap-2 text-emerald-400 font-orbitron font-bold text-sm mb-2">
              <Sparkles className="w-4 h-4" />
              <span>SUB-TICK 128HZ REPLICATION</span>
            </div>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed">
              The server validates the exact sub-millisecond instant you pulled the trigger, delivering authentic peer-to-peer accuracy worldwide.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-zinc-800 flex justify-between items-center">
          <span className="text-[10px] font-mono text-zinc-500">
            ENGINE_BUILD // 5.5.4-NX-PROD
          </span>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="px-6 py-2 bg-[#00E5FF] text-black font-orbitron font-bold text-xs uppercase cyber-chamfer-small"
          >
            DISMISS INTEL
          </button>
        </div>

      </div>
    </div>
  );
}
