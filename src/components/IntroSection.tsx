import React, { useEffect, useState } from 'react';
import AnkhSymbol3D from './AnkhSymbol3D';

const IntroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Exibe os elementos com um delay suave
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden aurora-gradient animate-aurora px-6 text-center">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cosmos-400 rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Central content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* ANKH Logo 3D */}
        <div
          className={`transition-all duration-1500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <div className="mb-4">
            <AnkhSymbol3D />
          </div>
        </div>

        {/* Título e Manifesto */}
        <div
          className={`transition-all duration-1500 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h1 className="text-display mb-2 text-foreground">
            ANKH
          </h1>
          <p className="text-title text-aurora-200 animate-breathe font-medium leading-tight">
            Our vibration never stops.
          </p>
        </div>
      </div>

      {/* Pulse indicator */}
      <div
        className={`absolute bottom-16 transition-all duration-1500 ease-out delay-600 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-2 h-2 bg-cosmos-400 rounded-full mx-auto animate-pulse-glow" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cosmos-400 rounded-full opacity-60">
          <div className="w-1 h-3 bg-cosmos-400 rounded-full mx-auto mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;