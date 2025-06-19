import React, { useEffect, useState } from 'react';
import AnkhSymbol3D from './AnkhSymbol3D';

const IntroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Exibe os elementos com um delay para a transição suave
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-900 text-center px-4">
      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white opacity-60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              // Caso queira animação, defina os keyframes "float" no CSS.
              animation: `float ${4 + Math.random() * 4}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Central Content: Symbol & Title */}
      <div
        className={`relative z-10 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <div className="mb-4 flex justify-center items-center">
          <AnkhSymbol3D />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
          ANKH
        </h1>
      </div>

      {/* Manifesto */}
      <div
        className={`relative z-10 mt-4 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-base md:text-lg text-gray-300">
          Our vibration never stops.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border border-white rounded-full opacity-50">
          <div className="w-1 h-3 bg-white rounded-full mx-auto mt-2" />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;