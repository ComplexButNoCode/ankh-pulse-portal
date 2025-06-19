
import React, { useEffect, useRef, useState } from 'react';

const AmbientAudio = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Enable audio after user interaction
    const enableAudio = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        if (audioRef.current) {
          audioRef.current.play().catch(console.log);
        }
      }
    };

    document.addEventListener('click', enableAudio, { once: true });
    document.addEventListener('keydown', enableAudio, { once: true });
    
    return () => {
      document.removeEventListener('click', enableAudio);
      document.removeEventListener('keydown', enableAudio);
    };
  }, [hasInteracted]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* Audio element with ambient space sound */}
      <audio
        ref={audioRef}
        loop
        muted={isMuted}
        className="hidden"
        preload="auto"
      >
        {/* In a real implementation, you would host an ambient audio file */}
          <source src="/audio/The-beginning-of-the-dark-waves-critical.mp3" type="audio/mp3" />
      </audio>

      {/* Audio control */}
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 cosmic-blur rounded-full p-4 hover:scale-110 transition-all duration-300 group"
        aria-label={isMuted ? 'Unmute ambient audio' : 'Mute ambient audio'}
      >
        <div className={`w-6 h-6 ethereal-text text-xl ${isMuted ? 'opacity-50' : 'opacity-100'}`}>
          {isMuted ? '🔇' : '🎵'}
        </div>
      </button>

      {/* Audio permission notice */}
      {!hasInteracted && (
        <div className="fixed bottom-20 right-6 z-40 cosmic-blur rounded-2xl p-4 max-w-xs">
          <p className="text-sm font-ethereal text-aurora-200 mb-2">
            Click anywhere to enable ambient audio
          </p>
          <div className="w-2 h-2 bg-cosmos-400 rounded-full animate-pulse mx-auto" />
        </div>
      )}
    </>
  );
};

export default AmbientAudio;
