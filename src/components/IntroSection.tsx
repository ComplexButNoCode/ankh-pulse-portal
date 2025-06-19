import React, { useEffect, useState } from 'react';
import AnkhSymbol3D from './AnkhSymbol3D';

const IntroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Exibe os elementos com um delay para a transição suave
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900 px-6 text-center">
      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[1.5px] h-[1.5px] bg-white rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              animationIterationCount: 'infinite',
              animationName: 'float', // Certifique-se de definir essa keyframes no CSS
            }}
          />
        ))}
      </div>

      {/* Central Content: Symbol & Title */}
      <div
        className={`transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="flex justify-center items-center mb-6">
          <AnkhSymbol3D />
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-Pilowlava tracking-wider leading-tight text-white drop-shadow-lg">
          ANKH
        </h1>
      </div>

      {/* Manifesto */}
      <div
        className={`transition-all duration-1000 delay-300 mt-4 max-w-md md:max-w-lg ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-sm md:text-base font-light text-white opacity-90 leading-relaxed">
          Our vibration never stops.
        </p>
      </div>

      {/* Pulse Indicator */}
      <div
        className={`mt-8 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-2 h-2 bg-white rounded-full mx-auto animate-pulse" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full opacity-50">
          <div className="w-1 h-3 bg-white rounded-full mx-auto mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;