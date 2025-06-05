
import React from 'react';
import IntroSection from '../components/IntroSection';
import PulseSection from '../components/PulseSection';
import GridSection from '../components/GridSection';
import ManifestoSection from '../components/ManifestoSection';
import FrequencySection from '../components/FrequencySection';
import AmbientAudio from '../components/AmbientAudio';

const Index = () => {
  return (
    <div className="min-h-screen bg-void-950 overflow-x-hidden relative">
      {/* Ambient audio component */}
      <AmbientAudio />
      
      {/* Main sections */}
      <IntroSection />
      <PulseSection />
      <GridSection />
      <ManifestoSection />
      <FrequencySection />
      
      {/* Dynamic cosmic background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Base gradient layer */}
        <div className="absolute inset-0 aurora-gradient animate-aurora-flow" />
        
        {/* Secondary flowing gradient */}
        <div className="absolute inset-0 aurora-gradient-alt opacity-60" />
        
        {/* Fluid moving gradients */}
        <div className="absolute inset-0 fluid-gradient opacity-40" />
        
        {/* Final blend overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-void-950/20 via-transparent to-void-950/40" />
      </div>
    </div>
  );
};

export default Index;
