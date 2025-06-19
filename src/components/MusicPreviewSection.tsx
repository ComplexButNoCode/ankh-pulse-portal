
import React, { useEffect, useState, useRef } from 'react';

<<<<<<< HEAD
const HeroAnimatedText = () => {
  const words = ['The', 'future', 'is', 'built', 'on', 'Artificial', 'Intelligence.'];
  const [visibleWords, setVisibleWords] = useState<number>(0);
  const [showScrollText, setShowScrollText] = useState<boolean>(false);
=======
const songs = [
  {
    id: 1,
    title: "Prévia da Música 1",
    cover: "/covers/song1.jpg",       // Caminho para a capa da música 1
    preview: "/audio/song1-preview.mp3", // Caminho para a prévia da música 1
  },
  {
    id: 2,
    title: "Prévia da Música 2",
    cover: "/covers/song2.jpg",       
    preview: "/audio/song2-preview.mp3",
  },
  {
    id: 3,
    title: "Prévia da Música 3",
    cover: "/covers/song3.jpg",       
    preview: "/audio/song3-preview.mp3",
  },
];
>>>>>>> 8e4088a14d25c8ee5eccb87a87d569bcce45e6a5

const MusicPreviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardVisible, setCardVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
<<<<<<< HEAD
    let wordInterval: NodeJS.Timeout;
=======
    // Quando o índice muda, recarrega e toca a prévia automaticamente.
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Erro ao tocar áudio:", err));
    }
  }, [currentIndex]);
>>>>>>> 8e4088a14d25c8ee5eccb87a87d569bcce45e6a5

<<<<<<< HEAD
    // Animação palavra por palavra
    wordInterval = setInterval(() => {
      setVisibleWords((prev) => {
        if (prev < words.length) {
          return prev + 1;
        } else {
          clearInterval(wordInterval);
          // Exibe o texto de scroll após a última palavra
          setTimeout(() => setShowScrollText(true), 500);
          return prev;
        }
      });
    }, 200); // Velocidade entre cada palavra (ajuste aqui para ficar mais rápido ou mais lento)

    return () => clearInterval(wordInterval);
  }, []);
=======
  const handleAudioEnd = () => {
    // Ao finalizar o áudio, aplica fade-out e troca para a próxima música.
    setIsPlaying(false);
    setCardVisible(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % songs.length);
      setCardVisible(true);
    }, 500);
  };
>>>>>>> 8e4088a14d25c8ee5eccb87a87d569bcce45e6a5

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(console.error);
    }
  };

  return (
<<<<<<< HEAD
    <section className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Texto principal com entrada palavra por palavra */}
      <p className="text-3xl font-bold text-center leading-snug">
        {words.map((word, index) => (
          <span
            key={index}
            className={`inline-block transition-all duration-500 ease-out ${
              index < visibleWords
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
=======
    <section className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-center px-6 py-12">
      <h2 className="text-3xl text-white mb-8">Prévia das Músicas</h2>
      <div className="relative w-full max-w-md">
        <div
          className={`bg-cover bg-center rounded-lg shadow-lg h-64 transition-opacity duration-500 ${cardVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${songs[currentIndex].cover})` }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h3 className="text-xl text-white font-bold mb-4">{songs[currentIndex].title}</h3>
          <button
            onClick={togglePlayPause}
            className="bg-white text-gray-800 font-semibold px-4 py-2 rounded"
>>>>>>> 8e4088a14d25c8ee5eccb87a87d569bcce45e6a5
          >
<<<<<<< HEAD
            {word}&nbsp;
          </span>
        ))}
      </p>

      {/* Texto "Scroll to explore" com fade-in */}
      {showScrollText && (
        <p className="mt-4 text-sm uppercase tracking-widest text-gray-300 animate-fadeIn">
          Scroll to explore
        </p>
      )}
=======
            {isPlaying ? "Pausar Prévia" : "Tocar Prévia"}
          </button>
        </div>
      </div>
      <audio ref={audioRef} onEnded={handleAudioEnd}>
        <source src={songs[currentIndex].preview} type="audio/mpeg" />
        Seu navegador não suporta áudio.
      </audio>
>>>>>>> 8e4088a14d25c8ee5eccb87a87d569bcce45e6a5
    </section>
  );
};

export default MusicPreviewSection;
