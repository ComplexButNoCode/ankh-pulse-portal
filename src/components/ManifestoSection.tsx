import React, { useEffect, useState } from 'react';

const ManifestoSection = () => {
  // Exemplo de texto do manifesto; você pode ajustá-lo conforme necessário.
  const manifestoText = [
    "ANKH is not a brand.",
    "It's a current.",
    "Music, spirit, & movement in perfect harmony."
  ];

  // Usamos um estado para controlar a animação de fade-in dos textos ao montar o componente.
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
        style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}
      />

      {/* Overlay para suavizar a imagem e aumentar a legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70" />

      {/* Conteúdo centralizado */}
      <div className="relative z-10 text-center px-4">
        {manifestoText.map((line, index) => (
          <p
            key={index}
            className={`
              text-white font-bold tracking-widest mb-4
              ${index === 0 ? 'text-4xl md:text-6xl' : 'text-2xl md:text-4xl'}
              transition-opacity duration-1000 
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