
import React from 'react';
import IntroSection from '../components/IntroSection';
import PulseSection from '../components/PulseSection';
import GridSection from '../components/GridSection';
import ManifestoSection from '../components/ManifestoSection';
import FrequencySection from '../components/FrequencySection';
import AmbientAudio from '../components/AmbientAudio';
import MiniPlayer from '../components/MiniPlayer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Ambient audio component */}
      <AmbientAudio />
      
      {/* Mini Player */}
      <MiniPlayer />
      
      {/* Main sections */}
      <IntroSection />
      <PulseSection />
      <GridSection />
      <ManifestoSection />
      <FrequencySection />
      
      {/* Lovable.dev inspired background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Base gradient identical to Lovable.dev */}
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
