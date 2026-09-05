'use client';

import React, { useState } from 'react';
import Preloader from '@/components/preloader/Preloader';
import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/hero/Hero';
import LiveStats from '@/components/stats/LiveStats';
import GameIntro from '@/components/game-intro/GameIntro';
import GameplayShowcase from '@/components/gameplay/GameplayShowcase';
import FeaturesGrid from '@/components/features/FeaturesGrid';
import CharactersSection from '@/components/characters/CharactersSection';
import GameModes from '@/components/modes/GameModes';
import BattlefieldMap from '@/components/battlefield/BattlefieldMap';
import Leaderboard from '@/components/leaderboard/Leaderboard';
import TournamentSection from '@/components/tournament/TournamentSection';
import CommunitySection from '@/components/community/CommunitySection';
import NewsSection from '@/components/news/NewsSection';
import FinalCTA from '@/components/final-cta/FinalCTA';
import Footer from '@/components/footer/Footer';

// Modals
import TrailerModal from '@/components/modals/TrailerModal';
import RegisterModal from '@/components/modals/RegisterModal';
import ExploreGameModal from '@/components/modals/ExploreGameModal';

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [trailerModalOpen, setTrailerModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [exploreModalOpen, setExploreModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#050508] text-white relative selection:bg-[#00E5FF] selection:text-black">
      {/* 01. Intro / Preloader */}
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}

      {/* Global Navigation Bar */}
      <Navbar onOpenRegister={() => setRegisterModalOpen(true)} />

      {/* 02. Cinematic Hero */}
      <Hero
        onWatchTrailer={() => setTrailerModalOpen(true)}
        onOpenRegister={() => setRegisterModalOpen(true)}
      />

      {/* 03. Live Telemetry Stats */}
      <LiveStats />

      {/* 04. Game Introduction & Lore */}
      <GameIntro onExploreGame={() => setExploreModalOpen(true)} />

      {/* 05. Gameplay Showcase (Scales on scroll) */}
      <GameplayShowcase onWatchTrailer={() => setTrailerModalOpen(true)} />

      {/* 06. Features Bento Grid */}
      <FeaturesGrid />

      {/* 07. Characters / Choose Your Fighter */}
      <CharactersSection />

      {/* 08. Game Modes (Expanding Cards) */}
      <GameModes />

      {/* 09. Interactive World / Tactical Maps */}
      <BattlefieldMap />

      {/* 10. Competitive Leaderboard */}
      <Leaderboard />

      {/* 11. Tournaments & Events */}
      <TournamentSection onRegisterSquad={() => setRegisterModalOpen(true)} />

      {/* 12. Community Ecosystem */}
      <CommunitySection />

      {/* 13. News & Transmissions */}
      <NewsSection />

      {/* 14. Final Cinematic CTA */}
      <FinalCTA onOpenRegister={() => setRegisterModalOpen(true)} />

      {/* 15. Footer */}
      <Footer />

      {/* Modals */}
      <TrailerModal
        isOpen={trailerModalOpen}
        onClose={() => setTrailerModalOpen(false)}
      />
      <RegisterModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
      />
      <ExploreGameModal
        isOpen={exploreModalOpen}
        onClose={() => setExploreModalOpen(false)}
      />
    </main>
  );
}
