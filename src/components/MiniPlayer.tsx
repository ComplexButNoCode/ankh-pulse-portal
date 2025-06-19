import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const MiniPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [waveformData, setWaveformData] = useState<number[]>([]);
  const [trackName, setTrackName] = useState('');

  const audioSrc = '/audio/The-beginning-of-the-dark-waves-critical.mp3';

  useEffect(() => {
    const name = audioSrc.split('/').pop()?.replace(/\.[^/.]+$/, '') || '';
    const cleaned = name.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    setTrackName(cleaned);
  }, []);

  useEffect(() => {
    const generateWaveform = () => {
      const data = Array.from({ length: 12 }, () => Math.random() * 60 + 20);
      setWaveformData(data);
    };
    generateWaveform();
    const interval = setInterval(generateWaveform, 300);
    return () => clearInterval(interval);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3">
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />

      {/* Mini waveform and name */}
      <div className="cosmic-blur rounded-xl px-4 py-3 flex items-center space-x-3">
        <div className="flex items-end space-x-0.5 h-8">
          {waveformData.map((height, index) => (
            <div
              key={index}
              className="bg-gradient-to-t from-cosmos-600 to-cosmos-400 rounded-t-full w-1 animate-waveform"
              style={{
                height: `${height}%`,
                animationDelay: `${index * 0.1}s`,
              }}
            />
          ))}
        </div>
        <div className="flex flex-col ml-3">
          <span className="text-xs font-ethereal text-aurora-200">{trackName}</span>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-medium text-aurora-400">LIVE</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="cosmic-blur rounded-xl p-2 flex items-center space-x-1">
        <button onClick={togglePlay} className="p-2 hover:scale-110 transition-all duration-300">
          {isPlaying ? <Pause className="w-4 h-4 text-cosmos-300" /> : <Play className="w-4 h-4 text-cosmos-300" />}
        </button>
        <button onClick={toggleMute} className="p-2 hover:scale-110 transition-all duration-300">
          {isMuted ? <VolumeX className="w-4 h-4 text-cosmos-300" /> : <Volume2 className="w-4 h-4 text-cosmos-300" />}
        </button>
      </div>
    </div>
  );
};

export default MiniPlayer;