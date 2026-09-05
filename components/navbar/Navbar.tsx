'use client';

import React, { useState, useEffect } from 'react';
import { sound } from '@/lib/audio';
import { Shield, Volume2, VolumeX, Menu, X, Play } from 'lucide-react';

interface NavbarProps {
  onOpenRegister?: () => void;
}

export default function Navbar({ onOpenRegister }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [muted, setMuted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMuted(sound.isMuted());

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const isNowMuted = sound.toggleMute();
    setMuted(isNowMuted);
  };

  const navItems = [
    { label: 'GAME', href: '#intro' },
    { label: 'SHOWCASE', href: '#showcase' },
    { label: 'CHARACTERS', href: '#characters' },
    { label: 'MODES', href: '#modes' },
    { label: 'MAPS', href: '#maps' },
    { label: 'RANKINGS', href: '#leaderboard' },
    { label: 'TOURNAMENT', href: '#tournaments' },
    { label: 'NEWS', href: '#news' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#080811]/90 backdrop-blur-xl border-b border-zinc-800/80 shadow-2xl shadow-black/80'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 border border-[#00E5FF] cyber-chamfer-small overflow-hidden bg-black flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,229,255,0.9)] transition-all">
              <img
                src="/assets/nexus_logo.jpg"
                alt="NEXUS ARENA Logo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-orbitron font-black text-lg tracking-wider text-white group-hover:text-glow-cyan transition-all">
                NEXUS <span className="text-[#00E5FF]">//</span> ARENA
              </span>
              <span className="text-[9px] font-rajdhani font-semibold tracking-[0.25em] text-zinc-400 uppercase -mt-1">
                SEASON 04 • APEX
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="px-3 py-1.5 text-xs font-rajdhani font-bold tracking-widest text-zinc-300 hover:text-[#00E5FF] transition-colors relative group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#00E5FF] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              className="p-2 rounded border border-zinc-800 hover:border-[#00E5FF]/50 bg-[#080811]/60 text-zinc-400 hover:text-[#00E5FF] transition-all flex items-center gap-1.5 text-xs font-mono"
              title={muted ? 'Unmute tactical audio' : 'Mute tactical audio'}
            >
              {muted ? (
                <>
                  <VolumeX className="w-4 h-4 text-zinc-500" />
                  <span className="text-[10px] hidden md:inline">MUTED</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-[#00E5FF]" />
                  <span className="flex items-center gap-0.5 h-3">
                    <span className="w-0.5 h-2 bg-[#00E5FF] animate-pulse" />
                    <span className="w-0.5 h-3 bg-[#00E5FF] animate-pulse delay-75" />
                    <span className="w-0.5 h-1.5 bg-[#00E5FF] animate-pulse delay-150" />
                  </span>
                </>
              )}
            </button>

            {/* Live Server Indicator */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0D0D16] border border-zinc-800 text-[10px] font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>US-EAST // 14ms</span>
            </div>

            {/* Play Now CTA */}
            <a
              href="#cta"
              onMouseEnter={() => sound.playHover()}
              onClick={() => {
                sound.playClick();
                if (onOpenRegister) onOpenRegister();
              }}
              className="relative px-5 py-2 font-orbitron text-xs font-black tracking-widest uppercase bg-[#00E5FF] hover:bg-[#00c8df] text-black cyber-chamfer-small transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,229,255,0.7)] hover:scale-105 flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>PLAY NOW</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleSound}
              className="p-2 border border-zinc-800 bg-[#080811] text-zinc-400"
            >
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#00E5FF]" />}
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 border border-zinc-800 bg-[#080811] text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080811]/98 border-b border-zinc-800 px-6 py-5 backdrop-blur-2xl">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                }}
                className="py-2 text-sm font-rajdhani font-bold tracking-widest text-zinc-300 hover:text-[#00E5FF] border-b border-zinc-800/40"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#cta"
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full block text-center py-3 font-orbitron text-xs font-black tracking-widest bg-[#00E5FF] text-black cyber-chamfer-small"
              >
                PLAY NOW — FREE TO PLAY
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
