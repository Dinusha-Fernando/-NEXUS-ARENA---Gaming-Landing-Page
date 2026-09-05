'use client';

import React, { useState } from 'react';
import { sound } from '@/lib/audio';
import { TRANSMISSION_ARTICLES } from '@/lib/data';
import { TransmissionArticle } from '@/lib/types';
import { Radio, Calendar, Clock, ChevronRight, ArrowRight, X, FileText, CheckCircle2 } from 'lucide-react';

export default function NewsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedArticle, setSelectedArticle] = useState<TransmissionArticle | null>(null);

  const categories = ['ALL', 'PATCH NOTES', 'ESPORTS', 'DEV INTEL', 'COMMUNITY'];

  const filteredArticles = TRANSMISSION_ARTICLES.filter((item) =>
    activeCategory === 'ALL' ? true : item.category === activeCategory
  );

  const handleOpenArticle = (article: TransmissionArticle) => {
    sound.playClick();
    setSelectedArticle(article);
  };

  const handleCloseArticle = () => {
    sound.playClick();
    setSelectedArticle(null);
  };

  return (
    <section id="news" className="relative py-28 bg-[#050508] overflow-hidden">
      {/* Background cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0D0D16] border border-zinc-800 cyber-chamfer-small text-xs font-mono text-[#00E5FF] mb-3">
              <Radio className="w-3.5 h-3.5" />
              <span>OFFICIAL INTEL ARCHIVE</span>
            </div>
            <h2 className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              LATEST <br />
              <span className="bg-gradient-to-r from-[#00E5FF] via-white to-[#FF2D75] bg-clip-text text-transparent">
                TRANSMISSIONS
              </span>
            </h2>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sound.playClick();
                  setActiveCategory(cat);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`px-3.5 py-1.5 font-orbitron text-xs font-bold tracking-wider uppercase cyber-chamfer-small transition-all ${
                  activeCategory === cat
                    ? 'bg-[#00E5FF] text-black shadow-[0_0_15px_rgba(0,229,255,0.6)]'
                    : 'bg-[#0D0D16] text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Transmission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => handleOpenArticle(article)}
              onMouseEnter={() => sound.playHover()}
              className="p-6 bg-[#080811] border border-zinc-800 hover:border-zinc-600 rounded-xl cyber-chamfer transition-all duration-300 hover:bg-[#0D0D16] cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span
                    className="px-2.5 py-0.5 rounded font-bold text-[10px]"
                    style={{
                      backgroundColor: `${article.accent}15`,
                      color: article.accent,
                      border: `1px solid ${article.accent}40`,
                    }}
                  >
                    {article.tag}
                  </span>
                  <div className="flex items-center gap-3 text-zinc-500 text-[10px]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="font-orbitron font-black text-lg sm:text-xl text-white group-hover:text-[#00E5FF] transition-colors leading-snug mb-3">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-orbitron font-bold text-[#00E5FF]">
                <span className="group-hover:underline">READ TRANSMISSION INTEL</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
          <div className="relative w-full max-w-2xl bg-[#080811] border-2 border-[#00E5FF] cyber-chamfer p-6 sm:p-8 shadow-2xl space-y-5 animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button
              onClick={handleCloseArticle}
              className="absolute top-5 right-5 p-2 rounded border border-zinc-800 hover:border-white text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase"
                  style={{
                    backgroundColor: `${selectedArticle.accent}20`,
                    color: selectedArticle.accent,
                  }}
                >
                  {selectedArticle.category} // {selectedArticle.tag}
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  {selectedArticle.date}
                </span>
              </div>
              <h3 className="font-orbitron font-black text-2xl text-white">
                {selectedArticle.title}
              </h3>
            </div>

            {/* Full Content */}
            <div className="space-y-4 text-sm font-sans text-zinc-300 leading-relaxed max-h-96 overflow-y-auto pr-2">
              <p>{selectedArticle.summary}</p>
              {selectedArticle.fullContent && (
                <div className="p-4 rounded bg-[#0D0D16] border border-zinc-800 text-xs font-mono space-y-2 text-zinc-300">
                  <div className="text-[#00E5FF] font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>VERIFIED DECLASSIFIED PATCH LOG</span>
                  </div>
                  <p>{selectedArticle.fullContent}</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-zinc-800 flex justify-end">
              <button
                onClick={handleCloseArticle}
                className="px-6 py-2.5 bg-[#00E5FF] text-black font-orbitron font-bold text-xs uppercase cyber-chamfer-small hover:bg-[#00c8df] transition-all"
              >
                CLOSE TRANSMISSION
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
