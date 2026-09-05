'use client';

import React, { useState } from 'react';
import { sound } from '@/lib/audio';
import { HERO_CHARACTERS } from '@/lib/data';
import { Character } from '@/lib/types';
import { 
  Shield, 
  Crosshair, 
  Zap, 
  Activity, 
  Volume2, 
  Sparkles, 
  Award, 
  Flame,
  ChevronRight,
  Target
} from 'lucide-react';

export default function CharactersSection() {
  const [selectedHero, setSelectedHero] = useState<Character>(HERO_CHARACTERS[0]);
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);

  const handleSelectHero = (hero: Character) => {
    sound.playCharacterLock();
    setSelectedHero(hero);
    setIsPlayingVoice(false);
  };

  const handlePlayVoice = () => {
    sound.playRadioBip();
    setIsPlayingVoice(true);
    setTimeout(() => {
      setIsPlayingVoice(false);
    }, 2800);
  };

  return (
    <section id="characters" className="relative py-28 bg-[#050508] overflow-hidden">
      {/* Background Dynamic Atmospheric Lighting based on selected hero's accent color */}
      <div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full blur-[160px] opacity-25 pointer-events-none transition-all duration-700"
        style={{ backgroundColor: selectedHero.accentColor }}
      />
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0D0D16] border border-zinc-800 cyber-chamfer-small text-xs font-mono text-[#00E5FF] mb-3">
              <Crosshair className="w-3.5 h-3.5" />
              <span>OPERATIVE ROSTER // APEX PROTOCOL</span>
            </div>
            <h2 className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              CHOOSE YOUR <br />
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00E5FF] to-[#7C3AED]"
              >
                FIGHTER
              </span>
            </h2>
          </div>

          {/* Quick Roster Count */}
          <div className="text-right font-mono text-xs text-zinc-500">
            <span className="text-white font-bold font-orbitron text-lg">{HERO_CHARACTERS.length}</span>
            <span> ACTIVE COMBATANTS</span>
          </div>
        </div>

        {/* Character Selector Horizontal Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {HERO_CHARACTERS.map((hero) => {
            const isSelected = selectedHero.id === hero.id;

            return (
              <button
                key={hero.id}
                onClick={() => handleSelectHero(hero)}
                onMouseEnter={() => sound.playHover()}
                className={`p-3.5 text-left border cyber-chamfer transition-all duration-300 relative group overflow-hidden ${
                  isSelected
                    ? 'bg-[#0D0D16] border-zinc-400 shadow-xl'
                    : 'bg-[#080811]/90 border-zinc-800/80 hover:border-zinc-700 hover:bg-[#0D0D16]'
                }`}
                style={{
                  borderColor: isSelected ? hero.accentColor : undefined,
                  boxShadow: isSelected ? `0 0 25px -5px ${hero.accentColor}50` : undefined,
                }}
              >
                {/* Active Indicator bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 ${
                    isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                  }`}
                  style={{ backgroundColor: hero.accentColor }}
                />

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-700 group-hover:border-[#00E5FF] shrink-0 bg-black">
                    <img
                      src={hero.portrait}
                      alt={hero.callsign}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">
                        {hero.role}
                      </span>
                      <div
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: isSelected ? hero.accentColor : '#27272a' }}
                      />
                    </div>

                    <div className="font-orbitron font-black text-sm text-white tracking-wide group-hover:text-glow-cyan transition-all truncate">
                      {hero.callsign}
                    </div>

                    <div className="text-[10px] font-rajdhani text-zinc-400 truncate">
                      {hero.weapon.name}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Character Deep-Dive Card Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Character Visual Stage & Weapon Telemetry */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 min-h-[500px] sm:min-h-[560px] rounded-xl overflow-hidden border-2 bg-gradient-to-b from-[#0D0D16] via-[#101024] to-[#050508] p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-500"
              style={{ borderColor: `${selectedHero.accentColor}80` }}
            >
              {/* Scanlines layer */}
              <div className="absolute inset-0 cyber-scanlines opacity-25 pointer-events-none" />

              {/* Background Geometric Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-zinc-800 pointer-events-none" />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-dashed opacity-40 pointer-events-none animate-spin [animation-duration:25s]"
                style={{ borderColor: selectedHero.accentColor }}
              />

              {/* Top Card Telemetry Header */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="px-2.5 py-1 text-[10px] font-mono uppercase font-bold rounded"
                    style={{
                      backgroundColor: `${selectedHero.accentColor}25`,
                      color: selectedHero.accentColor,
                      border: `1px solid ${selectedHero.accentColor}50`,
                    }}
                  >
                    {selectedHero.role}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    DIFF: {'★'.repeat(selectedHero.difficulty)}{'☆'.repeat(5 - selectedHero.difficulty)}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-zinc-500 block">ORIGIN SECTOR</span>
                  <span className="text-xs font-mono text-zinc-300 font-bold">{selectedHero.origin}</span>
                </div>
              </div>

              {/* Central Character Hero Display Artwork */}
              <div className="relative z-10 flex flex-col items-center justify-center my-4 text-center">
                <div
                  className="relative w-56 sm:w-64 h-72 sm:h-80 rounded-xl overflow-hidden border-2 shadow-2xl transition-transform duration-500 hover:scale-105 bg-black"
                  style={{
                    borderColor: selectedHero.accentColor,
                    boxShadow: `0 0 40px -5px ${selectedHero.accentColor}50`,
                  }}
                >
                  <img
                    src={selectedHero.portrait}
                    alt={selectedHero.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>

                <h3 className="mt-4 font-orbitron font-black text-2xl sm:text-3xl text-white tracking-wider">
                  {selectedHero.name}
                </h3>
                <p className="font-rajdhani text-xs sm:text-sm text-zinc-300 mt-0.5 max-w-sm">
                  {selectedHero.tagline}
                </p>
              </div>

              {/* Bottom Quote & Voice Radio Trigger */}
              <div className="relative z-10 p-3.5 bg-black/60 border border-zinc-800 rounded cyber-chamfer-small flex items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] font-mono text-zinc-500 block">COMMS INTERCEPT //</span>
                  <p className="font-mono text-xs text-zinc-300 italic truncate">
                    {selectedHero.quote}
                  </p>
                </div>

                <button
                  onClick={handlePlayVoice}
                  onMouseEnter={() => sound.playHover()}
                  className="shrink-0 px-3 py-1.5 rounded border border-zinc-700 hover:border-[#00E5FF] bg-[#0D0D16] text-xs font-mono text-zinc-300 hover:text-[#00E5FF] transition-all flex items-center gap-1.5"
                  title="Play radio intercept"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{isPlayingVoice ? 'PLAYING...' : 'VOICE'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Tactical Stats, Abilities & Weapon Spec */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Tactical Stat Meters */}
            <div className="p-6 bg-[#080811] border border-zinc-800 cyber-chamfer">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-5">
                <h4 className="font-orbitron font-bold text-xs tracking-widest text-zinc-300 uppercase flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#00E5FF]" />
                  <span>COMBAT ATTRIBUTES</span>
                </h4>
                <span className="text-[10px] font-mono text-zinc-500">SCALE: 0 - 100</span>
              </div>

              <div className="space-y-4">
                {/* Damage */}
                <div>
                  <div className="flex justify-between items-center text-xs font-rajdhani font-bold mb-1">
                    <span className="text-zinc-300 uppercase">DAMAGE OUTPUT</span>
                    <span className="text-white font-mono">{selectedHero.stats.damage}%</span>
                  </div>
                  <div className="h-2 bg-zinc-900 border border-zinc-800 cyber-chamfer-small p-0.5 overflow-hidden">
                    <div
                      className="h-full transition-all duration-500 ease-out"
                      style={{
                        width: `${selectedHero.stats.damage}%`,
                        backgroundColor: '#FF2D75',
                        boxShadow: '0 0 10px rgba(255,45,117,0.7)',
                      }}
                    />
                  </div>
                </div>

                {/* Defense */}
                <div>
                  <div className="flex justify-between items-center text-xs font-rajdhani font-bold mb-1">
                    <span className="text-zinc-300 uppercase">SHIELD INTEGRITY / DEFENSE</span>
                    <span className="text-white font-mono">{selectedHero.stats.defense}%</span>
                  </div>
                  <div className="h-2 bg-zinc-900 border border-zinc-800 cyber-chamfer-small p-0.5 overflow-hidden">
                    <div
                      className="h-full transition-all duration-500 ease-out"
                      style={{
                        width: `${selectedHero.stats.defense}%`,
                        backgroundColor: '#00E5FF',
                        boxShadow: '0 0 10px rgba(0,229,255,0.7)',
                      }}
                    />
                  </div>
                </div>

                {/* Speed */}
                <div>
                  <div className="flex justify-between items-center text-xs font-rajdhani font-bold mb-1">
                    <span className="text-zinc-300 uppercase">MOBILITY & SPRINT VELOCITY</span>
                    <span className="text-white font-mono">{selectedHero.stats.speed}%</span>
                  </div>
                  <div className="h-2 bg-zinc-900 border border-zinc-800 cyber-chamfer-small p-0.5 overflow-hidden">
                    <div
                      className="h-full transition-all duration-500 ease-out"
                      style={{
                        width: `${selectedHero.stats.speed}%`,
                        backgroundColor: '#7C3AED',
                        boxShadow: '0 0 10px rgba(124,58,237,0.7)',
                      }}
                    />
                  </div>
                </div>

                {/* Utility */}
                <div>
                  <div className="flex justify-between items-center text-xs font-rajdhani font-bold mb-1">
                    <span className="text-zinc-300 uppercase">TACTICAL UTILITY & HACKING</span>
                    <span className="text-white font-mono">{selectedHero.stats.utility}%</span>
                  </div>
                  <div className="h-2 bg-zinc-900 border border-zinc-800 cyber-chamfer-small p-0.5 overflow-hidden">
                    <div
                      className="h-full transition-all duration-500 ease-out"
                      style={{
                        width: `${selectedHero.stats.utility}%`,
                        backgroundColor: '#10B981',
                        boxShadow: '0 0 10px rgba(16,185,129,0.7)',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Unique Abilities Breakdown */}
            <div className="p-6 bg-[#080811] border border-zinc-800 cyber-chamfer space-y-4">
              <h4 className="font-orbitron font-bold text-xs tracking-widest text-zinc-300 uppercase flex items-center gap-2 border-b border-zinc-800/80 pb-3">
                <Zap className="w-4 h-4 text-[#7C3AED]" />
                <span>SIGNATURE ABILITIES</span>
              </h4>

              <div className="space-y-3">
                {selectedHero.abilities.map((ability) => (
                  <div
                    key={ability.name}
                    onMouseEnter={() => sound.playHover()}
                    className="p-3 rounded bg-[#0D0D16] border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[9px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                            ability.type === 'ULTIMATE'
                              ? 'bg-[#FF2D75]/20 text-[#FF2D75] border border-[#FF2D75]/40'
                              : ability.type === 'TACTICAL'
                              ? 'bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/40'
                              : 'bg-zinc-800 text-zinc-400'
                          }`}
                        >
                          {ability.type}
                        </span>
                        <span className="font-orbitron font-bold text-xs text-white">
                          {ability.name}
                        </span>
                      </div>
                      {ability.cooldown && (
                        <span className="text-[10px] font-mono text-zinc-500">
                          CD: {ability.cooldown}
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                      {ability.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Weapon Profile & Lock-in Button */}
            <div className="p-4 bg-[#0D0D16] border border-zinc-800 cyber-chamfer flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[9px] font-mono text-zinc-500 uppercase block">PRIMARY WEAPON LOADOUT</span>
                <span className="font-orbitron font-bold text-sm text-white">{selectedHero.weapon.name}</span>
                <span className="text-xs font-mono text-zinc-400 ml-2">[{selectedHero.weapon.fireRate}]</span>
              </div>

              <a
                href="#cta"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="w-full sm:w-auto px-6 py-2.5 font-orbitron text-xs font-black tracking-widest uppercase bg-white text-black hover:bg-[#00E5FF] hover:text-black cyber-chamfer-small transition-all flex items-center justify-center gap-2"
              >
                <span>LOCK IN {selectedHero.callsign}</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
