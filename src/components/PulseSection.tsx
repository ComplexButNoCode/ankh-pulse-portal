
import React from 'react';

const PulseSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center cosmic-gradient py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void-900/50 to-transparent" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-ankh font-black ethereal-text glow-text mb-6">
            NOSSA HISTÓRIA
          </h2>
          <p className="text-xl md:text-2xl font-ethereal text-aurora-300 max-w-3xl mx-auto leading-relaxed">
            A ANKH nasceu da necessidade de conectar o que não pode ser desconectado: música, espírito e movimento.
          </p>
        </div>

        {/* História em grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="cosmic-blur rounded-3xl p-8">
            <h3 className="text-3xl font-ankh font-bold ethereal-text mb-6">O QUE SOMOS</h3>
            <div className="space-y-4 text-aurora-200 font-ethereal leading-relaxed">
              <p>
                Somos uma casa de DJs e artistas, uma curadoria musical que transcende gêneros e fronteiras.
              </p>
              <p>
                Nossa missão é descobrir, desenvolver e promover talentos únicos que compartilham nossa visão de música como força transformadora.
              </p>
            </div>
          </div>

          <div className="cosmic-blur rounded-3xl p-8">
            <h3 className="text-3xl font-ankh font-bold ethereal-text mb-6">NOSSOS CLUBS</h3>
            <div className="space-y-4 text-aurora-200 font-ethereal leading-relaxed">
              <p>
                Criamos experiências imersivas onde a música eletrônica encontra a espiritualidade, onde cada beat é uma oração e cada drop é uma revelação.
              </p>
              <p>
                Nossos eventos são rituais modernos, celebrações da vida através do som.
              </p>
            </div>
          </div>

          <div className="cosmic-blur rounded-3xl p-8">
            <h3 className="text-3xl font-ankh font-bold ethereal-text mb-6">STREAMING</h3>
            <div className="space-y-4 text-aurora-200 font-ethereal leading-relaxed">
              <p>
                Nossa plataforma de streaming conecta almas ao redor do mundo, transmitindo frequências que elevam e inspiram 24/7.
              </p>
              <p>
                Cada sessão é uma jornada sonora cuidadosamente curada pelos nossos artistas residentes.
              </p>
            </div>
          </div>

          <div className="cosmic-blur rounded-3xl p-8">
            <h3 className="text-3xl font-ankh font-bold ethereal-text mb-6">PRODUÇÃO</h3>
            <div className="space-y-4 text-aurora-200 font-ethereal leading-relaxed">
              <p>
                Como produtores, criamos soundscapes que transportam o ouvinte para dimensões inexploradas da consciência.
              </p>
              <p>
                Cada track é uma manifestação de nossa filosofia: música como portal para o transcendente.
              </p>
            </div>
          </div>
        </div>

        {/* Filosofia central */}
        <div className="text-center">
          <div className="cosmic-blur rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="text-6xl mb-6 ethereal-text">⚶</div>
            <h3 className="text-4xl font-ankh font-bold ethereal-text mb-8">NOSSA FILOSOFIA</h3>
            <p className="text-xl font-ethereal text-aurora-200 leading-relaxed mb-6">
              A ANKH é o símbolo da vida eterna, e assim é nossa música - infinita, cíclica, sempre renascendo em novas formas.
            </p>
            <p className="text-lg font-ethereal text-aurora-300 leading-relaxed">
              Somos mais que uma gravadora ou coletivo. Somos uma família, uma tribo, um movimento que pulsa em sintonia com o universo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PulseSection;
