'use client';

import React from 'react';
import { sound } from '@/lib/audio';
import { MessageSquare, Video, Tv, Users, ExternalLink, Sparkles, Radio } from 'lucide-react';

export default function CommunitySection() {
  const communityHubs = [
    {
      name: 'DISCORD SYNDICATE',
      count: '125K+',
      subtext: '4,218 online right now',
      role: 'LFG, Tournaments & Voice Comms',
      icon: <MessageSquare className="w-6 h-6" />,
      accent: '#5865F2',
      href: 'https://discord.com',
      badge: 'PRIMARY HUB',
    },
    {
      name: 'YOUTUBE ESPORTS',
      count: '80K+',
      subtext: '4K VODs, guides & patch breakdowns',
      role: 'Official Matches & Cinematic Reveals',
      icon: <Video className="w-6 h-6" />,
      accent: '#FF0000',
      href: 'https://youtube.com',
      badge: 'OFFICIAL BROADCAST',
    },
    {
      name: 'TWITCH ARENA',
      count: '60K+',
      subtext: 'Live drops enabled weekly',
      role: 'Pro POV Streams & Community Tournaments',
      icon: <Tv className="w-6 h-6" />,
      accent: '#9146FF',
      href: 'https://twitch.tv',
      badge: 'DROPS ENABLED',
    },
    {
      name: 'GLOBAL FORUM',
      count: '50K+',
      subtext: 'Dev feedback & meta discussions',
      role: 'Balance Polls & Gunsmith Theorycrafting',
      icon: <Users className="w-6 h-6" />,
      accent: '#00E5FF',
      href: '#',
      badge: 'DEV DISPATCH',
    },
  ];

  return (
    <section id="community" className="relative py-28 bg-[#080811] overflow-hidden">
      {/* Background cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#7C3AED]/10 via-[#00E5FF]/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0D0D16] border border-zinc-800 cyber-chamfer-small text-xs font-mono text-[#00E5FF]">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>CONNECT WITH THE SYNDICATE</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            JOIN THE <br />
            <span className="bg-gradient-to-r from-[#00E5FF] via-white to-[#7C3AED] bg-clip-text text-transparent">
              COMMUNITY
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400">
            Over 300,000 players worldwide talk tactics, trade gunsmith weapon builds, recruit ranked squads, and earn exclusive Twitch in-game drops.
          </p>
        </div>

        {/* 4 Community Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {communityHubs.map((hub) => (
            <a
              key={hub.name}
              href={hub.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="relative p-6 bg-[#0D0D16]/90 border border-zinc-800 cyber-chamfer transition-all duration-300 hover:border-zinc-700 hover:bg-[#121226] group block"
            >
              {/* Card top border accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: hub.accent }}
              />

              <div className="flex items-center justify-between mb-4">
                <div
                  className="p-3 rounded cyber-chamfer-small transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${hub.accent}15`,
                    color: hub.accent,
                    border: `1px solid ${hub.accent}40`,
                  }}
                >
                  {hub.icon}
                </div>
                <span
                  className="text-[9px] font-mono px-2 py-0.5 rounded font-bold uppercase"
                  style={{
                    backgroundColor: `${hub.accent}15`,
                    color: hub.accent,
                  }}
                >
                  {hub.badge}
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-orbitron font-black text-3xl text-white tracking-tight">
                  {hub.count}
                </span>
                <h3 className="font-orbitron font-bold text-xs tracking-wider text-zinc-200 uppercase">
                  {hub.name}
                </h3>
                <p className="font-mono text-[11px] text-zinc-400">
                  {hub.subtext}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span className="truncate">{hub.role}</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:text-white transition-colors shrink-0 ml-1" />
              </div>
            </a>
          ))}
        </div>

        {/* Large Primary Discord Join CTA Banner */}
        <div className="p-8 bg-gradient-to-r from-[#5865F2]/20 via-[#0D0D16] to-[#00E5FF]/20 border border-zinc-700 rounded-2xl cyber-chamfer flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#5865F2] flex items-center justify-center text-white shadow-[0_0_30px_rgba(88,101,242,0.7)] shrink-0">
              <MessageSquare className="w-7 h-7 fill-current" />
            </div>
            <div>
              <h4 className="font-orbitron font-black text-xl text-white">
                FIND YOUR SQUAD ON DISCORD
              </h4>
              <p className="font-sans text-xs sm:text-sm text-zinc-300">
                Get notified of scrim tournaments, balance hotfixes, and claim free cosmetic badges.
              </p>
            </div>
          </div>

          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="shrink-0 px-8 py-3.5 bg-[#5865F2] hover:bg-[#4752c4] text-white font-orbitron text-xs font-black tracking-widest uppercase cyber-chamfer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(88,101,242,0.8)] flex items-center gap-2"
          >
            <span>JOIN DISCORD (125K+)</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
