'use client';

import React, { useState, useEffect, useRef } from 'react';
import { sound } from '@/lib/audio';
import { Play, Flame, Shield, Crosshair, ChevronDown, Activity, Sparkles } from 'lucide-react';

interface HeroProps {
  onWatchTrailer: () => void;
  onOpenRegister: () => void;
}

export default function Hero({ onWatchTrailer, onOpenRegister }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [onlineCount, setOnlineCount] = useState(50420);

  // Live online player count micro-fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount((prev) => prev + Math.floor(Math.random() * 7) - 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Mouse Parallax tracking
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  // High-performance canvas particle vortex
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes
    interface Particle {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      color: string;
      alpha: number;
    }

    const colors = ['#00E5FF', '#7C3AED', '#FF2D75'];
    const particles: Particle[] = Array.from({ length: 70 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7 - 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.6 + 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render connecting neural grid between close particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / 110) * 0.15;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#050508]"
    >
      {/* Interactive Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-75" />

      {/* Cyber Grid & Atmospheric Glows */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-[600px] h-[600px] rounded-full bg-[#00E5FF]/18 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#FF2D75]/10 blur-[150px] pointer-events-none" />

      {/* Sci-Fi HUD Corner Elements */}
      <div className="absolute top-28 left-6 sm:left-10 z-10 hidden md:block">
        <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
          <Crosshair className="w-3.5 h-3.5 text-[#00E5FF]" />
          <span>COORDINATES // 35.6895° N, 139.6917° E</span>
        </div>
      </div>
      <div className="absolute top-28 right-6 sm:right-10 z-10 hidden md:block">
        <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
          <Activity className="w-3.5 h-3.5 text-[#7C3AED]" />
          <span>SERVER TICK: 128.00 HZ • PING 11MS</span>
        </div>
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[75vh]">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Season Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#0D0D16]/90 border border-zinc-800 cyber-chamfer-small backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]" />
              </span>
              <span className="font-orbitron text-[11px] font-bold tracking-widest text-zinc-300">
                SEASON 04 <span className="text-[#00E5FF]">LIVE WORLDWIDE</span>
              </span>
              <span className="text-zinc-600">|</span>
              <span className="font-rajdhani text-xs font-semibold text-[#FF2D75] tracking-wider uppercase">
                $50,000 Major
              </span>
            </div>

            {/* Massive Display Heading */}
            <div className="space-y-1">
              <h2 className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-white uppercase leading-none">
                ENTER THE
              </h2>
              <h1 className="font-orbitron font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-none bg-gradient-to-r from-white via-[#00E5FF] to-[#7C3AED] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,229,255,0.4)]">
                NEXT LEVEL
              </h1>
            </div>

            {/* Tagline / Subtitle */}
            <div className="space-y-2 max-w-xl">
              <p className="font-orbitron text-lg sm:text-xl font-bold tracking-wider text-[#00E5FF]">
                COMPETE. EVOLVE. DOMINATE.
              </p>
              <p className="font-sans text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
                A next-generation tactical cyber-esports experience built for players who demand zero-compromise precision, 128-tick competitive integrity, and high-velocity kinetic combat.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#cta"
                onMouseEnter={() => sound.playHover()}
                onClick={() => {
                  sound.playClick();
                  onOpenRegister();
                }}
                className="w-full sm:w-auto px-8 py-4 font-orbitron text-sm font-black tracking-widest uppercase bg-[#00E5FF] hover:bg-[#00d0e6] text-black cyber-chamfer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(0,229,255,0.8)] flex items-center justify-center gap-3"
              >
                <Flame className="w-5 h-5 fill-current" />
                <span>PLAY NOW — FREE</span>
              </a>

              <button
                onClick={() => {
                  sound.playClick();
                  onWatchTrailer();
                }}
                onMouseEnter={() => sound.playHover()}
                className="w-full sm:w-auto px-7 py-4 font-orbitron text-sm font-bold tracking-widest uppercase border border-zinc-700 hover:border-[#7C3AED] bg-[#080811]/80 hover:bg-[#7C3AED]/20 text-white cyber-chamfer transition-all duration-300 flex items-center justify-center gap-3 group backdrop-blur-md"
              >
                <div className="w-6 h-6 rounded-full bg-[#7C3AED]/30 border border-[#7C3AED] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 text-[#00E5FF] fill-current translate-x-0.5" />
                </div>
                <span>WATCH TRAILER</span>
              </button>
            </div>

            {/* Live Online Ticker */}
            <div className="pt-4 flex items-center gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#080811] border border-zinc-800/80">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-bold text-white font-rajdhani text-sm">
                  {onlineCount.toLocaleString()}
                </span>
                <span className="text-[11px] text-zinc-500 uppercase">PLAYERS ONLINE</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-zinc-500 text-[11px]">
                <Shield className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>AEGIS KERNEL ACTIVE</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D-styled Cyber Operator Showcase */}
          <div
            className="lg:col-span-5 relative flex justify-center items-center"
            style={{
              transform: `perspective(1000px) rotateX(${-mousePos.y * 0.4}deg) rotateY(${mousePos.x * 0.4}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
          >
            {/* Background Circular HUD Hologram */}
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full border border-[#00E5FF]/20 animate-radar pointer-events-none" />
            <div className="absolute w-60 sm:w-80 h-60 sm:h-80 rounded-full border border-dashed border-[#7C3AED]/30 pointer-events-none" />
            <div className="absolute w-96 h-96 bg-gradient-to-tr from-[#7C3AED]/20 to-[#00E5FF]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Operator Card Mockup / Visual */}
            <div className="relative w-full max-w-sm sm:max-w-md bg-[#080811]/90 border border-zinc-700/60 cyber-chamfer p-5 shadow-2xl backdrop-blur-xl group hover:border-[#00E5FF]/80 transition-all duration-500">
              {/* Card Header Telemetry */}
              <div className="flex justify-between items-center border-b border-zinc-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-pulse" />
                  <span className="text-xs font-mono font-semibold text-zinc-300">OP_ID // VORTEX-01</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#00E5FF]">
                  COMBAT ACTIVE
                </span>
              </div>

              {/* Character Visual Showcase Graphic */}
              <div className="relative h-80 sm:h-96 w-full rounded overflow-hidden bg-black flex items-center justify-center border border-zinc-800">
                {/* Real Character Artwork */}
                <img
                  src="/assets/vortex.jpg"
                  alt="VORTEX Operative"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                {/* Cybernetic lighting vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080811] via-transparent to-black/40 pointer-events-none" />
                <div className="absolute inset-0 cyber-scanlines opacity-25 pointer-events-none" />
                
                {/* Floating Faction / Season Pill */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/70 border border-[#7C3AED]/60 text-[10px] font-mono text-[#00E5FF] backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-ping" />
                  <span>KAIEN // VORTEX</span>
                </div>

                <div className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full bg-[#FF2D75] border border-white/40 flex items-center justify-center text-[10px] font-mono font-black text-white shadow-lg">
                  S4
                </div>

                {/* Tactical HUD Overlays */}
                <div className="absolute bottom-3 left-4 right-4 z-20 flex justify-between items-center text-[11px] font-mono bg-[#050508]/80 px-3 py-2 border border-zinc-800 rounded">
                  <div>
                    <span className="text-zinc-500 block text-[9px]">SHIELD INTEGRITY</span>
                    <span className="text-emerald-400 font-bold">100% // 250 HP</span>
                  </div>
                  <div className="text-right">
                    <span className="text-zinc-500 block text-[9px]">WEAPON CORE</span>
                    <span className="text-[#00E5FF] font-bold">VK-9 GRAV-CARBINE</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Micro-actions */}
              <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs font-rajdhani">
                <a
                  href="#characters"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="text-zinc-400 hover:text-[#00E5FF] transition-colors flex items-center gap-1.5 font-bold"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>VIEW FULL HERO ROSTER (5)</span>
                </a>
                <span className="text-zinc-600 font-mono text-[10px]">T-MINUS 12D</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#stats"
        onMouseEnter={() => sound.playHover()}
        onClick={() => sound.playClick()}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-zinc-500 hover:text-[#00E5FF] transition-colors group"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-[#00E5FF] transition-colors">
          SCROLL TO EXPLORE
        </span>
        <div className="w-5 h-8 border border-zinc-700 rounded-full flex items-start justify-center p-1 group-hover:border-[#00E5FF] transition-colors">
          <ChevronDown className="w-3.5 h-3.5 text-[#00E5FF] animate-bounce" />
        </div>
      </a>
    </section>
  );
}
