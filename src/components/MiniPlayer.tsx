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

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

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
    <div className="fixed bottom-4 right-4 z-50 flex items-center space-x-2">
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />

      <div className="backdrop-blur-sm bg-white/10 border border-white/10 px-3 py-2 rounded-lg flex items-center space-x-2">
        <div className="flex items-end space-x-[2px] h-6">
          {waveformData.map((height, index) => (
            <div
              key={index}
              className="bg-white rounded-full w-0.5 transition-all duration-75"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <span className="text-[10px] font-light text-white truncate max-w-[100px]">{trackName}</span>
      </div>

      <div className="backdrop-blur-sm bg-white/10 border border-white/10 px-2 py-1 rounded-lg flex items-center space-x-1">
        <button onClick={togglePlay} className="hover:scale-110 transition-all duration-300">
          {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
        </button>
        <button onClick={toggleMute} className="hover:scale-110 transition-all duration-300">
          {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
        </button>
      </div>
    </div>
  );
};

export default MiniPlayer;