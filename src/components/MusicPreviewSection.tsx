'use client';

import React, { useEffect, useState } from 'react';

const HeroAnimatedText = () => {
  const words = ['The', 'future', 'is', 'built', 'on', 'Artificial', 'Intelligence.'];
  const [visibleWords, setVisibleWords] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleWords((prev) => (prev < words.length ? prev + 1 : prev));
    }, 300); // velocidade da animação palavra por palavra

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Texto principal com efeito de entrada por palavra */}
      <p className="text-3xl font-bold text-center leading-snug">
        {words.map((word, index) => (
          <span
            key={index}
            className={`inline-block transition-all duration-500 ${
              index < visibleWords ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            {word}&nbsp;
          </span>
        ))}
      </p>

      {/* Texto de Scroll - aparece após a animação */}
      {visibleWords === words.length && (
        <p className="mt-4 text-sm uppercase tracking-widest opacity-70 animate-fadeIn">
          Scroll to explore
        </p>
      )}
    </section>
  );
};

export default HeroAnimatedText;
