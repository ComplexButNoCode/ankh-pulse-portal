import React from 'react';

const PulseSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center cosmic-gradient py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void-900/50 to-transparent" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-ethereal text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight leading-[1.05] mb-6 text-foreground">
            NOSSA HISTÓRIA
          </h2>
          <p className="font-ethereal text-[1.25rem] md:text-[1.5rem] text-aurora-300 max-w-3xl mx-auto leading-relaxed font-medium">
            A ANKH nasceu da necessidade de conectar o que não pode ser desconectado: música, espírito e movimento.
          </p>
        </div>

        {/* História em grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="cosmic-blur rounded-3xl p-8">
            <h3 className="font-ethereal text-[1.5rem] md:text-[2rem] font-semibold mb-6 text-foreground">O QUE SOMOS</h3>
            <div className="space-y-4 text-aurora-200 leading-relaxed font-medium">
              <p>
                Somos uma casa de DJs e artistas, uma curadoria musical que transcende gêneros e fronteiras.
              </p>
              <p>
                Nossa missão é descobrir, desenvolver e promover talentos únicos que compartilham nossa visão de música como força transformadora.
              </p>
            </div>
          </div>

          <div className="cosmic-blur rounded-3xl p-8">
            <h3 className="font-ethereal text-[1.5rem] md:text-[2rem] font-semibold mb-6 text-foreground">NOSSOS CLUBS</h3>
            <div className="space-y-4 text-aurora-200 leading-relaxed font-medium">
              <p>
                Criamos experiências imersivas onde a música eletrônica encontra a espiritualidade, onde cada beat é uma oração e cada drop é uma revelação.
              </p>
              <p>
                Nossos eventos são rituais modernos, celebrações da vida através do som.
              </p>
            </div>
          </div>

          <div className="cosmic-blur rounded-3xl p-8">
            <h3 className="font-ethereal text-[1.5rem] md:text-[2rem] font-semibold mb-6 text-foreground">STREAMING</h3>
            <div className="space-y-4 text-aurora-200 leading-relaxed font-medium">
              <p>
                Nossa plataforma de streaming conecta almas ao redor do mundo, transmitindo frequências que elevam e inspiram 24/7.
              </p>
              <p>
                Cada sessão é uma jornada sonora cuidadosamente curada pelos nossos artistas residentes.
              </p>
            </div>
          </div>

          <div className="cosmic-blur rounded-3xl p-8">
            <h3 className="font-ethereal text-[1.5rem] md:text-[2rem] font-semibold mb-6 text-foreground">PRODUÇÃO</h3>
            <div className="space-y-4 text-aurora-200 leading-relaxed font-medium">
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
            <h3 className="font-ethereal text-[2.5rem] md:text-[3.5rem] font-bold mb-8 text-foreground">NOSSA FILOSOFIA</h3>
            <p className="font-ethereal text-[1.25rem] md:text-[1.5rem] text-aurora-200 leading-relaxed mb-6 font-medium">
              A ANKH é o símbolo da vida eterna, e assim é nossa música - infinita, cíclica, sempre renascendo em novas formas.
            </p>
            <p className="font-ethereal text-[1.25rem] md:text-[1.5rem] text-aurora-300 leading-relaxed font-medium">
              Somos mais que uma gravadora ou coletivo. Somos uma família, uma tribo, um movimento que pulsa em sintonia com o universo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PulseSection;
export default PulseSection;
