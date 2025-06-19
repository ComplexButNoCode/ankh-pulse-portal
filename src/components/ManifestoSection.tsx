
import React, { useEffect, useState } from 'react';

const ManifestoSection = () => {
  const [visibleParagraphs, setVisibleParagraphs] = useState<number[]>([]);

  const manifestoText = [
    "ANKH is not a brand.",
    "It's a current.",
    "A club.",
    "A cult.",
    "A culture.",
    "We connect what cannot be disconnected:",
    "music, spirit, and movement.",
    "In the void between beats,",
    "we find our frequency.",
    "In the silence between notes,",
    "we discover our voice.",
    "This is more than sound—",
    "this is consciousness.",
    "We are the pulse",
    "that never stops.",
    "We are ANKH."
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('manifesto-section');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      
      const paragraphsToShow = Math.floor(scrollProgress * manifestoText.length);
      setVisibleParagraphs(Array.from({ length: paragraphsToShow }, (_, i) => i));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [manifestoText.length]);

  return (
    <section id="manifesto-section" className="relative min-h-[200vh] aurora-gradient animate-aurora">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-void-900/30 to-void-900/60" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8 md:space-y-12">
            {manifestoText.map((text, index) => (
              <div
                key={index}
                className={`
                  transition-all duration-1000 transform
                  ${visibleParagraphs.includes(index) 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-10 scale-95'
                  }
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <p className={`
                  font-ankh font-black ethereal-text glow-text leading-tight
                  ${index < 5 ? 'text-4xl md:text-6xl lg:text-7xl' : 
                    index < 12 ? 'text-3xl md:text-5xl lg:text-6xl' : 
                    'text-5xl md:text-7xl lg:text-8xl'}
                  ${index === manifestoText.length - 1 ? 'animate-pulse-glow' : ''}
                `}>
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Floating ANKH symbols */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute text-6xl opacity-10 animate-float ethereal-text"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                  animationDelay: `${i * 2}s`,
                  animationDuration: `${8 + i * 2}s`
                }}
              >
                ⚶
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
