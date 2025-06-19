import React, { useEffect, useState, useRef } from 'react';

interface Song {
  id: number;
  title: string;
  audio: string;
  cover: string;
}

const songs: Song[] = [
  {
    id: 1,
    title: "All That is Lost Was Never Had",
    audio: "/audio/All That is Lost Was Never Had.mp3",
    cover: "/covers/cover1.jpg",
  },
  {
    id: 2,
    title: "Brazilian Clubber",
    audio: "/audio/Brazilian Clubber.mp3",
    cover: "/covers/cover2.jpg",
  },
  {
    id: 3,
    title: "Everything dies and reborn",
    audio: "/audio/Everything dies and reborn.mp3",
    cover: "/covers/cover3.jpg",
  },
  {
    id: 4,
    title: "The highest frequency",
    audio: "/audio/The highest frequency.mp3",
    cover: "/covers/cover4.jpg",
  },
  {
    id: 5,
    title: "The-beginning-of-the-dark-waves-critical",
    audio: "/audio/The-beginning-of-the-dark-waves-critical.mp3",
    cover: "/covers/cover5.jpg",
  },
];

const MusicPreviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Ao trocar de música, recarrega e tenta reproduzir automaticamente
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Erro ao tocar áudio:", err));
    }
  }, [currentIndex]);

  // Quando a prévia termina, muda para a próxima música
  const handleAudioEnd = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % songs.length);
  };

  // Permite ao usuário pausar ou retomar a prévia
  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error(err));
    }
  };

  return (
    <section className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Capa da música */}
        <div
          className="w-full h-56 bg-cover bg-center"
          style={{ backgroundImage: `url(${songs[currentIndex].cover})` }}
        ></div>

        {/* Informações da música e controle de áudio */}
        <div className="p-4 text-center">
          <h3 className="text-xl font-bold text-white">
            {songs[currentIndex].title}
          </h3>
          <div className="mt-4">
            <button
              onClick={togglePlayPause}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
            >
              {isPlaying ? "Pausar Prévia" : "Tocar Prévia"}
            </button>
          </div>
        </div>
      </div>

      {/* Elemento de áudio controlado */}
      <audio ref={audioRef} onEnded={handleAudioEnd}>
        <source src={songs[currentIndex].audio} type="audio/mpeg" />
        Seu navegador não suporta reprodução de áudio.
      </audio>
    </section>
  );
};

export default MusicPreviewSection;