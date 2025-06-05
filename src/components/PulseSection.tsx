
import React, { useEffect, useState } from 'react';

const PulseSection = () => {
  const [waveformData, setWaveformData] = useState<number[]>([]);

  useEffect(() => {
    // Generate random waveform data (in real implementation, this would connect to audio stream)
    const generateWaveform = () => {
      const data = Array.from({ length: 50 }, () => Math.random() * 100);
      setWaveformData(data);
    };

    generateWaveform();
    const interval = setInterval(generateWaveform, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center cosmic-gradient py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void-900/50 to-transparent" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-ankh font-black ethereal-text glow-text mb-6">
            THE PULSE
          </h2>
          <p className="text-xl md:text-2xl font-ethereal text-aurora-300 max-w-3xl mx-auto leading-relaxed">
            Feel the eternal rhythm. This is our collective heartbeat, streaming across dimensions.
          </p>
        </div>

        {/* Live stream status */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-3 cosmic-blur rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <span className="text-aurora-200 font-ethereal font-medium">LIVE NOW</span>
          </div>
        </div>

        {/* Waveform visualization */}
        <div className="relative h-64 cosmic-blur rounded-3xl p-8 mb-8 animate-breathe">
          <div className="flex items-end justify-center h-full space-x-1">
            {waveformData.map((height, index) => (
              <div
                key={index}
                className="bg-gradient-to-t from-cosmos-600 to-cosmos-400 rounded-t-full animate-waveform"
                style={{
                  height: `${height}%`,
                  width: '8px',
                  animationDelay: `${index * 0.1}s`
                }}
              />
            ))}
          </div>
          
          {/* Overlay effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cosmos-500/20 to-transparent animate-aurora rounded-3xl" />
        </div>

        {/* Stream controls */}
        <div className="flex justify-center space-x-6">
          <button className="cosmic-blur rounded-full p-4 hover:scale-110 transition-all duration-300 group">
            <div className="w-8 h-8 ethereal-text text-2xl group-hover:animate-pulse">▶</div>
          </button>
          <button className="cosmic-blur rounded-full p-4 hover:scale-110 transition-all duration-300 group">
            <div className="w-8 h-8 ethereal-text text-2xl group-hover:animate-pulse">⏸</div>
          </button>
          <button className="cosmic-blur rounded-full p-4 hover:scale-110 transition-all duration-300 group">
            <div className="w-8 h-8 ethereal-text text-2xl group-hover:animate-pulse">🔊</div>
          </button>
        </div>

        {/* Now playing info */}
        <div className="text-center mt-8">
          <div className="cosmic-blur rounded-2xl p-6 max-w-md mx-auto">
            <p className="text-aurora-200 font-ethereal text-sm mb-2">NOW STREAMING</p>
            <p className="text-cosmos-300 font-ankh text-lg font-bold">Cosmic Frequencies Vol. 1</p>
            <p className="text-aurora-400 font-ethereal text-sm mt-1">Mixed by The Collective</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PulseSection;
