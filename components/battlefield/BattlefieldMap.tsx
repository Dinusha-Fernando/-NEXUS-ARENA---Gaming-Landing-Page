'use client';

import React, { useState } from 'react';
import { sound } from '@/lib/audio';
import { MAP_SECTORS } from '@/lib/data';
import { MapSector } from '@/lib/types';
import { Compass, Crosshair, Users, AlertTriangle, CloudSun, MapPin, ChevronRight, ShieldAlert } from 'lucide-react';

export default function BattlefieldMap() {
  const [selectedSector, setSelectedSector] = useState<MapSector>(MAP_SECTORS[0]);

  const handleSelect = (sector: MapSector) => {
    sound.playClick();
    setSelectedSector(sector);
  };

  return (
    <section id="maps" className="relative py-28 bg-[#050508] overflow-hidden">
      {/* Dynamic Background Glow */}
      <div
        className="absolute top-1/2 left-1/3 w-[600px] h-[600px] rounded-full blur-[160px] opacity-20 pointer-events-none transition-all duration-700"
        style={{ backgroundColor: selectedSector.accentColor }}
      />
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0D0D16] border border-zinc-800 cyber-chamfer-small text-xs font-mono text-[#00E5FF]">
            <Compass className="w-3.5 h-3.5" />
            <span>GLOBAL THEATER INTEL</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            EXPLORE THE <br />
            <span className="bg-gradient-to-r from-[#00E5FF] via-white to-[#FF2D75] bg-clip-text text-transparent">
              BATTLEFIELD
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400">
            Interactive holographic satellite scan. Click any sector node to inspect tactical layouts, environmental hazards, and active operative counts.
          </p>
        </div>

        {/* Tactical Map Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Holographic Radar Map Viewport */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border-2 border-zinc-700 bg-[#080811] shadow-2xl p-4 flex items-center justify-center">
              {/* Tactical Satellite Schematic Backdrop */}
              <div className="absolute inset-0 opacity-30 pointer-events-none transition-all duration-500">
                <img
                  src={selectedSector.id === 'void-station' ? '/assets/map_void_station.svg' : '/assets/map_nexus_city.svg'}
                  alt={selectedSector.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Scanlines & Grid */}
              <div className="absolute inset-0 cyber-scanlines opacity-30 pointer-events-none" />
              <div className="absolute inset-0 cyber-grid-cyan opacity-25 pointer-events-none" />

              {/* Rotating Radar Sweep Line */}
              <div className="absolute w-[500px] h-[500px] rounded-full border border-[#00E5FF]/20 animate-radar pointer-events-none" />
              <div className="absolute w-[350px] h-[350px] rounded-full border border-dashed border-zinc-800 pointer-events-none" />
              <div className="absolute w-[200px] h-[200px] rounded-full border border-zinc-800/80 pointer-events-none" />

              {/* Crosshair Grid Center lines */}
              <div className="absolute w-full h-[1px] bg-zinc-800/60 pointer-events-none" />
              <div className="absolute h-full w-[1px] bg-zinc-800/60 pointer-events-none" />

              {/* Clickable Map Nodes */}
              {MAP_SECTORS.map((sector) => {
                const isSelected = selectedSector.id === sector.id;

                return (
                  <button
                    key={sector.id}
                    onClick={() => handleSelect(sector)}
                    onMouseEnter={() => sound.playHover()}
                    className="absolute z-20 group -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                    style={{
                      left: `${sector.coordinates.x}%`,
                      top: `${sector.coordinates.y}%`,
                    }}
                  >
                    {/* Pulsing Target Halo */}
                    <div className="relative flex items-center justify-center">
                      <div
                        className={`w-10 h-10 rounded-full transition-all duration-300 flex items-center justify-center ${
                          isSelected
                            ? 'scale-125 border-2 shadow-[0_0_25px_rgba(0,229,255,0.8)]'
                            : 'border border-zinc-600 bg-black/80 hover:border-white'
                        }`}
                        style={{
                          borderColor: sector.accentColor,
                          backgroundColor: isSelected ? `${sector.accentColor}30` : 'rgba(0,0,0,0.7)',
                        }}
                      >
                        <MapPin
                          className={`w-4 h-4 transition-colors ${
                            isSelected ? 'text-white' : 'text-zinc-400 group-hover:text-white'
                          }`}
                        />
                      </div>

                      {/* Ping animation when selected */}
                      {isSelected && (
                        <span
                          className="absolute inset-0 rounded-full animate-ping pointer-events-none"
                          style={{ border: `1px solid ${sector.accentColor}` }}
                        />
                      )}

                      {/* Floating Sector Badge Label */}
                      <div
                        className={`absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider uppercase transition-all ${
                          isSelected
                            ? 'bg-black text-white border shadow-lg'
                            : 'bg-black/80 text-zinc-400 border border-zinc-800 opacity-80 group-hover:opacity-100'
                        }`}
                        style={{
                          borderColor: isSelected ? sector.accentColor : '#27272a',
                        }}
                      >
                        {sector.name}
                      </div>
                    </div>
                  </button>
                );
              })}

              {/* HUD Telemetry Coordinates */}
              <div className="absolute top-4 left-4 z-10 text-[10px] font-mono text-zinc-500">
                <span>ORBITAL_RECON // SAT-NX-9</span>
              </div>
              <div className="absolute bottom-4 right-4 z-10 text-[10px] font-mono text-zinc-500">
                <span>RADAR_SWEEP // ACTIVE</span>
              </div>
            </div>

            {/* Quick Sector Selector Buttons Below Map */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
              {MAP_SECTORS.map((sector) => (
                <button
                  key={sector.id}
                  onClick={() => handleSelect(sector)}
                  onMouseEnter={() => sound.playHover()}
                  className={`p-2.5 rounded text-left border cyber-chamfer-small transition-all ${
                    selectedSector.id === sector.id
                      ? 'bg-[#0D0D16] border-[#00E5FF] text-white shadow-md'
                      : 'bg-[#080811] border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  <div className="text-[9px] font-mono text-zinc-500 truncate">{sector.code}</div>
                  <div className="font-orbitron font-bold text-xs truncate mt-0.5">{sector.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Selected Sector Intel Briefing Card */}
          <div className="lg:col-span-5">
            <div
              className="p-6 sm:p-8 bg-[#0D0D16] border-2 cyber-chamfer shadow-2xl space-y-6 transition-all duration-300"
              style={{ borderColor: selectedSector.accentColor }}
            >
              {/* Header */}
              <div className="border-b border-zinc-800/80 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase"
                    style={{
                      backgroundColor: `${selectedSector.accentColor}20`,
                      color: selectedSector.accentColor,
                      border: `1px solid ${selectedSector.accentColor}50`,
                    }}
                  >
                    {selectedSector.code}
                  </span>
                  <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                    <Crosshair className="w-3.5 h-3.5 text-[#00E5FF]" />
                    {selectedSector.location}
                  </span>
                </div>

                <h3 className="font-orbitron font-black text-2xl sm:text-3xl text-white tracking-wide">
                  {selectedSector.name}
                </h3>
              </div>

              {/* Narrative description */}
              <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {selectedSector.description}
              </p>

              {/* Telemetry Stats Grid */}
              <div className="grid grid-cols-2 gap-3 py-2 text-xs font-mono">
                <div className="p-3 bg-[#080811] border border-zinc-800 rounded">
                  <div className="flex items-center gap-1.5 text-zinc-500 text-[10px] uppercase mb-1">
                    <Users className="w-3 h-3 text-[#00E5FF]" />
                    <span>ACTIVE COMBATANTS</span>
                  </div>
                  <span className="text-white font-bold font-orbitron text-sm">
                    {selectedSector.activePlayers}
                  </span>
                </div>

                <div className="p-3 bg-[#080811] border border-zinc-800 rounded">
                  <div className="flex items-center gap-1.5 text-zinc-500 text-[10px] uppercase mb-1">
                    <AlertTriangle className="w-3 h-3 text-[#FF2D75]" />
                    <span>HAZARD INDEX</span>
                  </div>
                  <span
                    className="font-bold font-orbitron text-sm"
                    style={{ color: selectedSector.accentColor }}
                  >
                    {selectedSector.hazardLevel}
                  </span>
                </div>

                <div className="p-3 bg-[#080811] border border-zinc-800 rounded">
                  <div className="flex items-center gap-1.5 text-zinc-500 text-[10px] uppercase mb-1">
                    <CloudSun className="w-3 h-3 text-[#7C3AED]" />
                    <span>WEATHER COND.</span>
                  </div>
                  <span className="text-zinc-200 font-bold text-[11px] truncate block">
                    {selectedSector.weather}
                  </span>
                </div>

                <div className="p-3 bg-[#080811] border border-zinc-800 rounded">
                  <div className="flex items-center gap-1.5 text-zinc-500 text-[10px] uppercase mb-1">
                    <ShieldAlert className="w-3 h-3 text-amber-400" />
                    <span>TACTICAL DIFFICULTY</span>
                  </div>
                  <span className="text-amber-400 font-bold font-mono text-xs">
                    {'★'.repeat(selectedSector.difficulty)}{'☆'.repeat(5 - selectedSector.difficulty)}
                  </span>
                </div>
              </div>

              {/* Strategic Chokepoints */}
              <div>
                <h4 className="font-orbitron font-bold text-xs tracking-widest text-zinc-400 uppercase mb-2">
                  KEY STRATEGIC OBJECTIVES
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedSector.keyPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="px-2.5 py-1.5 rounded bg-[#080811] border border-zinc-800/80 text-[11px] font-rajdhani font-semibold text-zinc-300 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: selectedSector.accentColor }} />
                      <span className="truncate">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href="#cta"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="w-full py-3 font-orbitron text-xs font-bold tracking-widest uppercase bg-white text-black hover:bg-[#00E5FF] hover:text-black cyber-chamfer-small transition-all flex items-center justify-center gap-2"
                >
                  <span>DEPLOY TO {selectedSector.name}</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
