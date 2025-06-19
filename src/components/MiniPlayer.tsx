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
    const audio = audioRef.current;
    if (!audio) return;

    const context = new AudioContext();
    const source = context.createMediaElementSource(audio);
    const analyser = context.createAnalyser();
    analyser.fftSize = 32;
    source.connect(analyser);
    analyser.connect(context.destination);

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    const update = () => {
      analyser.getByteFrequencyData(dataArray);
      const values = Array.from(dataArray).slice(0, 10).map(v => (v / 255) * 100);
      setWaveformData(values);
      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);

    return () => {
      source.disconnect();
      analyser.disconnect();
      context.close();
    };
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
    <div className="fixed bottom-4 right-4 z-50 flex items-center space-x-2 backdrop-blur-sm bg-white/10 border border-white/10 px-3 py-2 rounded-xl text-white">
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />

      <div
        className={`flex items-end space-x-[2px] transition-all duration-300 ${
          isPlaying ? 'h-6 opacity-100 scale-100' : 'h-0 opacity-0 scale-90'
        } overflow-hidden`}
      >
        {waveformData.map((h, i) => (
          <div
            key={i}
            className="bg-white w-0.5 rounded-full transition-all duration-75"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

      <div className="relative ml-3 max-w-[90px] group overflow-hidden">
        <span className="text-[10px] font-light truncate block transition-all duration-300 group-hover:max-w-[200px] group-hover:whitespace-normal group-hover:overflow-visible">
          {trackName}
        </span>
      </div>

      <div className="flex items-center space-x-2 ml-3">
        <button
          onClick={togglePlay}
          className="hover:scale-110 active:scale-95 hover:rotate-[5deg] transition-all duration-300"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        <button
          onClick={toggleMute}
          className="hover:scale-110 active:scale-95 hover:rotate-[-5deg] transition-all duration-300"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

        <div className="flex items-center space-x-1 pl-2 border-l border-white/20 ml-2">
          <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
          <span className="text-[10px] text-white tracking-widest font-medium">LIVE</span>
        </div>
      </div>
    </div>
  );
};

export default MiniPlayer;