import React from 'react';
import IntroSection from '../components/IntroSection';
import PulseSection from '../components/PulseSection';
import GridSection from '../components/GridSection';
import MusicPreviewSection from '../components/MusicPreviewSection';
import FrequencySection from '../components/FrequencySection';
import MiniPlayer from '../components/MiniPlayer';
import ManifestoSection from '../components/ManifestoSection';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Mini Player */}
      <MiniPlayer />

      {/* Main content: use um wrapper semântico para manter a hierarquia e o z-index adequados */}
      <main className="relative z-10">
        <IntroSection />
        <PulseSection />
        <ManifestoSection />
        <MusicPreviewSection />
        <GridSection />
        <FrequencySection />
      </main>

      {/* Lovable.dev inspired background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 lovable-gradient-animated" />
        {/* Mesh pattern overlay */}
        <div className="absolute inset-0 lovable-mesh" />
        {/* Subtle radial overlay for depth */}
        <div className="absolute inset-0 lovable-overlay" />
      </div>
    </div>
  );
};

export default Index;