import React, { useEffect, useState } from 'react';

const ManifestoSection = () => {
  // Textos do manifesto
  const manifestoText = [
    "ANKH is not a brand.",
    "It's a current.",
    "Music, spirit, & movement in perfect harmony."
  ];

  // Estado para disparar o efeito fade-in
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="manifesto-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/path/to/your/background.jpg)' }}
      />

      {/* Overlay para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-black opacity-60" />

      {/* Conteúdo central */}
      <div className="relative z-10 text-center px-4">
        {manifestoText.map((line, index) => (
          <p
            key={index}
            className={`
              text-white font-bold mb-4 transition-opacity duration-1000
              ${index === 0 ? 'text-4xl md:text-6xl' : 'text-2xl md:text-4xl'}
              ${animate ? 'opacity-100' : 'opacity-0'}
            `}
            style={{ transitionDelay: `${index * 300}ms` }}
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ManifestoSection;