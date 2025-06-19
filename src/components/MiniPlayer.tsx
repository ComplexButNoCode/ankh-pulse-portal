
import React, { useEffect, useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

const MiniPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [waveformData, setWaveformData] = useState<number[]>([]);

  useEffect(() => {
    // Generate mini waveform data
    const generateWaveform = () => {
      const data = Array.from({ length: 12 }, () => Math.random() * 60 + 20);
      setWaveformData(data);
    };

    generateWaveform();
    const interval = setInterval(generateWaveform, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3">
      {/* Mini waveform */}
      <div className="cosmic-blur rounded-xl px-4 py-3 flex items-center space-x-2">
        <div className="flex items-end space-x-0.5 h-8">
          {waveformData.map((height, index) => (
            <div
              key={index}
              className="bg-gradient-to-t from-cosmos-600 to-cosmos-400 rounded-t-full w-1 animate-waveform"
              style={{
                height: `${height}%`,
                animationDelay: `${index * 0.1}s`
              }}
            />
          ))}
        </div>
        
        {/* Live indicator */}
        <div className="flex items-center space-x-2 ml-3">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-aurora-200 font-ethereal text-xs font-medium">LIVE</span>
        </div>
      </div>

      {/* Player controls */}
      <div className="cosmic-blur rounded-xl p-2 flex items-center space-x-1">
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 hover:scale-110 transition-all duration-300"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-cosmos-300" />
          ) : (
            <Play className="w-4 h-4 text-cosmos-300" />
          )}
        </button>
        
        <button className="p-2 hover:scale-110 transition-all duration-300">
          <Volume2 className="w-4 h-4 text-cosmos-300" />
        </button>
      </div>
    </div>
  );
};

export default MiniPlayer;
