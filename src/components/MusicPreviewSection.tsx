'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Song {
  id: number;
  title: string;
  audio: string;
  cover: string;
}

const songs: Song[] = [
  {
    id: 1,
    title: 'All That is Lost Was Never Had',
    audio: '/audio/All That is Lost Was Never Had.mp3',
    cover: '/covers/cover1.jpg',
  },
  {
    id: 2,
    title: 'Brazilian Clubber',
    audio: '/audio/Brazilian Clubber.mp3',
    cover: '/covers/cover2.jpg',
  },
  {
    id: 3,
    title: 'Everything dies and reborn',
    audio: '/audio/Everything dies and reborn.mp3',
    cover: '/covers/cover3.jpg',
  },
  {
    id: 4,
    title: 'The highest frequency',
    audio: '/audio/The highest frequency.mp3',
    cover: '/covers/cover4.jpg',
  },
  {
    id: 5,
    title: 'The-beginning-of-the-dark-waves-critical',
    audio: '/audio/The-beginning-of-the-dark-waves-critical.mp3',
    cover: '/covers/cover5.jpg',
  },
];

const MusicPreviewSection = () => {
  const [rotation, setRotation] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      setRotation((prev) => prev + e.deltaY * 0.2);
    };
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  const handleCoverClick = (index: number) => {
    setCurrentIndex(index);
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current
        .play()
        .catch((err) => console.error('Erro ao tocar áudio:', err));
    }
  };

  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden flex items-center justify-center select-none">
      {/* Texto central */}
      <div className="absolute text-center text-white">
        <h2 className="text-2xl font-semibold mb-2">
          The future is built on Artificial Intelligence
        </h2>
        <p className="text-sm uppercase tracking-widest">Scroll to Explore</p>
      </div>

      {/* Círculo de capas */}
      <div
        className="relative w-[600px] h-[600px]"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateY(${rotation}deg)`,
          transition: 'transform 0.3s ease-out',
          perspective: '1000px',
        }}
      >
        {songs.map((song, index) => {
          const angle = (360 / songs.length) * index;
          const translateZ = 250;
          return (
            <div
              key={song.id}
              onClick={() => handleCoverClick(index)}
              className="absolute w-28 h-28 rounded overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-110 hover:shadow-xl"
              style={{
                transform: `
                  rotateY(${angle}deg)
                  translateZ(${translateZ}px)
                `,
              }}
            >
              <img
                src={song.cover}
                alt={song.title}
                className="w-full h-full object-cover rounded"
              />
            </div>
          );
        })}
      </div>

      {/* Player de áudio */}
      {currentIndex !== null && (
        <audio ref={audioRef} controls autoPlay className="absolute bottom-10">
          <source src={songs[currentIndex].audio} type="audio/mpeg" />
          Seu navegador não suporta áudio.
        </audio>
      )}
    </section>
  );
};

export default MusicPreviewSection;
