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
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Scroll control
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      setRotation((prev) => prev + e.deltaY * 0.2);
    };
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  // Mouse drag control
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setStartX(e.clientX);
    setRotation((prev) => prev + deltaX * 0.5);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

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
    <section
      className="relative min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Texto central */}
      <div className="absolute text-center text-white">
        <h2 className="text-2xl font-semibold mb-2">
          The future is built on Artificial Intelligence
        </h2>
        <p className="text-sm tracking-wide">Scroll or Drag to Explore</p>
      </div>

      {/* Círculo de capas */}
      <div
        className="relative w-[500px] h-[500px]"
        onMouseDown={handleMouseDown}
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotate(${rotation}deg)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease-out',
        }}
      >
        {songs.map((song, index) => {
          const angle = (360 / songs.length) * index;
          const radius = 180;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={song.id}
              onClick={() => handleCoverClick(index)}
              className="absolute w-24 h-24 rounded overflow-hidden shadow-md border-2 border-white cursor-pointer transition-transform duration-300 hover:scale-110 hover:shadow-xl"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <img
                src={song.cover}
                alt={song.title}
                className="w-full h-full object-cover"
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
