import React, { useEffect, useState } from 'react';
const IntroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden aurora-gradient animate-aurora">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-cosmos-400 rounded-full animate-float opacity-60" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${4 + Math.random() * 4}s`
      }} />)}
      </div>

      {/* Central content */}
      <div className="relative z-10 text-center px-6">
        {/* ANKH Logo */}
        <div className={`mb-12 transition-all duration-2000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <div className="relative">
            <div className="w-24 h-32 mx-auto liquid-morph animate-morph animate-pulse-glow">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-ankh font-black ethereal-text glow-text animate-breathe">
                  ⚶
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manifesto */}
        <div className={`transition-all duration-2000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-Pilowlava font font-cursive mb-6 ethereal-text glow-text">
            ANKH
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-ethereal font-light text-aurora-200 glow-text animate-breathe">
            Our vibration never stops.
          </p>
        </div>

        {/* Pulse indicator */}
        <div className={`mt-16 transition-all duration-2000 delay-2000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-2 h-2 bg-cosmos-400 rounded-full mx-auto animate-pulse-glow" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cosmos-400 rounded-full opacity-60">
          <div className="w-1 h-3 bg-cosmos-400 rounded-full mx-auto mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
};
export default IntroSection;