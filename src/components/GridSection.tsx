import React, { useState } from 'react';

const GridSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Mock data for the grid - in real implementation, this would come from social feeds/curation
  const gridItems = [
    { type: 'video', title: 'Moment #001', description: 'Transcendence at midnight' },
    { type: 'image', title: 'Reflection', description: 'User submission: @cosmicvibe' },
    { type: 'live', title: 'Live Now', description: 'Stream reaction' },
    { type: 'memory', title: 'Archive #247', description: 'The ritual continues' },
    { type: 'video', title: 'Moment #002', description: 'Frequency alignment' },
    { type: 'image', title: 'Vision', description: 'User submission: @voidwalker' },
    { type: 'audio', title: 'Sound #88', description: 'Ambient layer discovered' },
    { type: 'memory', title: 'Archive #248', description: 'Collective memory' },
    { type: 'live', title: 'Pulse', description: 'Real-time energy' }
  ];

  const getItemGradient = (type: string) => {
    const gradients = {
      video: 'from-cosmos-600/80 to-cosmos-800/80',
      image: 'from-aurora-600/80 to-aurora-800/80',
      live: 'from-red-600/80 to-red-800/80',
      memory: 'from-purple-600/80 to-purple-800/80',
      audio: 'from-teal-600/80 to-teal-800/80'
    };
    return gradients[type as keyof typeof gradients] || gradients.video;
  };

  return (
    <section className="relative py-20 cosmic-gradient">
      <div className="absolute inset-0 bg-gradient-to-b from-void-900/30 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-title mb-6 text-foreground">
            THE GRID
          </h2>
          <p className="text-body text-aurora-300 max-w-3xl mx-auto">
            A living mosaic of moments, memories, and manifestations. Each cell pulses with collective energy.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {gridItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`
                absolute inset-0 rounded-3xl transition-all duration-500
                ${hoveredIndex === index ? 'scale-105 rotate-1' : 'scale-100 rotate-0'}
                liquid-morph animate-morph
                bg-gradient-to-br ${getItemGradient(item.type)}
              `}>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className={`
                      w-3 h-3 rounded-full animate-pulse
                      ${item.type === 'live' ? 'bg-red-400' : 'bg-cosmos-400'}
                    `} />
                    {item.type === 'live' && (
                      <div className="text-caption text-red-300 animate-pulse">LIVE</div>
                    )}
                  </div>
                  <div className={`
                    transition-all duration-300
                    ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'}
                  `}>
                    <h3 className="text-subtitle mb-2">
                      {item.title}
                    </h3>
                    <p className="text-caption text-aurora-200">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Hover overlay */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cosmos-400/20 to-transparent animate-pulse" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Grid controls */}
        <div className="text-center mt-12">
          <div className="flex justify-center space-x-4">
            <button className="cosmic-blur rounded-full px-6 py-3 font-ethereal text-[1.1rem] text-aurora-200 hover:text-white transition-colors font-semibold">
              View All
            </button>
            <button className="cosmic-blur rounded-full px-6 py-3 font-ethereal text-aurora-200 hover:text-white transition-colors">
              Filter Live
            </button>
            <button className="cosmic-blur rounded-full px-6 py-3 font-ethereal text-aurora-200 hover:text-white transition-colors">
              Submit Memory
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSection;
    </section>
  );
};

export default GridSection;
export default GridSection;
