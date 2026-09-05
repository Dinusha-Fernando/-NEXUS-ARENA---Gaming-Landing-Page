'use client';

import React, { useState } from 'react';
import { sound } from '@/lib/audio';
import confetti from 'canvas-confetti';
import { X, Trophy, ShieldCheck, Check, Flame, Users } from 'lucide-react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const [squadName, setSquadName] = useState('');
  const [captainHandle, setCaptainHandle] = useState('');
  const [discordTag, setDiscordTag] = useState('');
  const [region, setRegion] = useState('NA');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playAffirmation();

    // Trigger celebratory cyber confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00E5FF', '#7C3AED', '#FF2D75'],
      });
    } catch {
      // ignore
    }

    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#080811] border-2 border-[#FF2D75] cyber-chamfer p-6 sm:p-8 shadow-2xl shadow-pink-950/40">
        
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

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.5)]">
              <Check className="w-8 h-8" />
            </div>

            <h3 className="font-orbitron font-black text-2xl text-white">
              SQUAD REGISTERED!
            </h3>
            <p className="font-sans text-xs sm:text-sm text-zinc-300 max-w-sm mx-auto">
              Welcome to the Season 04 Nexus Championship Qualifiers, <strong className="text-[#00E5FF]">{squadName}</strong>. A verification invite has been dispatched to your Discord frequency.
            </p>

            <button
              onClick={() => {
                sound.playClick();
                setIsSubmitted(false);
                onClose();
              }}
              className="mt-4 px-8 py-3 bg-[#00E5FF] text-black font-orbitron font-bold text-xs uppercase cyber-chamfer-small"
            >
              RETURN TO ARENA
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF2D75]">
              <Trophy className="w-4 h-4" />
              <span>SEASON 04 QUALIFIER ENLISTMENT</span>
            </div>

            <div className="space-y-1">
              <h3 className="font-orbitron font-black text-2xl text-white">
                REGISTER YOUR SQUAD
              </h3>
              <p className="font-sans text-xs text-zinc-400">
                Compete for the $50,000 USD prize pool. Must have 5 verified roster members and Aegis Kernel installed.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-[10px] font-mono uppercase text-zinc-400 mb-1">
                  SQUAD / TEAM NAME
                </label>
                <input
                  type="text"
                  required
                  value={squadName}
                  onChange={(e) => setSquadName(e.target.value)}
                  placeholder="e.g. SENTINEL PROTOCOL"
                  className="w-full bg-[#0D0D16] border border-zinc-800 focus:border-[#00E5FF] text-white text-xs font-mono px-3.5 py-2.5 rounded outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase text-zinc-400 mb-1">
                  CAPTAIN OPERATIVE HANDLE
                </label>
                <input
                  type="text"
                  required
                  value={captainHandle}
                  onChange={(e) => setCaptainHandle(e.target.value)}
                  placeholder="e.g. VORTEX#001"
                  className="w-full bg-[#0D0D16] border border-zinc-800 focus:border-[#00E5FF] text-white text-xs font-mono px-3.5 py-2.5 rounded outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-zinc-400 mb-1">
                    SERVER REGION
                  </label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full bg-[#0D0D16] border border-zinc-800 focus:border-[#00E5FF] text-white text-xs font-mono px-3.5 py-2.5 rounded outline-none"
                  >
                    <option value="NA">NORTH AMERICA (US-EAST)</option>
                    <option value="EU">EUROPE (EU-CENTRAL)</option>
                    <option value="APAC">ASIA-PACIFIC (TOKYO)</option>
                    <option value="LATAM">LATIN AMERICA (SÃO PAULO)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-zinc-400 mb-1">
                    DISCORD HANDLE
                  </label>
                  <input
                    type="text"
                    required
                    value={discordTag}
                    onChange={(e) => setDiscordTag(e.target.value)}
                    placeholder="handle#0000"
                    className="w-full bg-[#0D0D16] border border-zinc-800 focus:border-[#00E5FF] text-white text-xs font-mono px-3.5 py-2.5 rounded outline-none"
                  />
                </div>
              </div>

              <div className="p-3 bg-[#0D0D16] border border-zinc-800 rounded flex items-start gap-2.5 text-[11px] font-mono text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  All participants agree to active ring-0 anti-cheat scanning and fair-play tournament integrity guidelines.
                </span>
              </div>
            </div>

            <button
              type="submit"
              onMouseEnter={() => sound.playHover()}
              className="w-full py-3.5 bg-gradient-to-r from-[#FF2D75] via-[#7C3AED] to-[#00E5FF] text-white font-orbitron font-bold text-xs tracking-widest uppercase cyber-chamfer transition-all hover:shadow-[0_0_30px_rgba(255,45,117,0.7)] flex items-center justify-center gap-2"
            >
              <Flame className="w-4 h-4" />
              <span>SUBMIT ENLISTMENT APPLICATION</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
