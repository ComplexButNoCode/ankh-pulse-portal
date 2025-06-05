
import React from 'react';
import IntroSection from '../components/IntroSection';
import PulseSection from '../components/PulseSection';
import GridSection from '../components/GridSection';
import ManifestoSection from '../components/ManifestoSection';
import FrequencySection from '../components/FrequencySection';
import AmbientAudio from '../components/AmbientAudio';

const Index = () => {
  return (
    <div className="min-h-screen bg-void-950 overflow-x-hidden">
      {/* Ambient audio component */}
      <AmbientAudio />
      
      {/* Main sections */}
      <IntroSection />
      <PulseSection />
      <GridSection />
      <ManifestoSection />
      <FrequencySection />
      
      {/* Cosmic background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-void-950 via-transparent to-void-950 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(91,115,255,0.1),transparent)] opacity-30" />
      </div>
    </div>
  );
};

export default Index;
