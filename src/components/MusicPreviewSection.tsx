'use client';

import React, { useEffect, useState, useRef } from 'react';

const songs = [
	{
		id: 1,
		title: 'Prévia da Música 1',
		cover: '/covers/song1.jpg',
		preview: '/audio/song1-preview.mp3',
	},
	{
		id: 2,
		title: 'Prévia da Música 2',
		cover: '/covers/song2.jpg',
		preview: '/audio/song2-preview.mp3',
	},
	{
		id: 3,
		title: 'Prévia da Música 3',
		cover: '/covers/song3.jpg',
		preview: '/audio/song3-preview.mp3',
	},
];

const MusicPreviewSection = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [cardVisible, setCardVisible] = useState(true);
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.load();
			audioRef.current
				.play()
				.then(() => setIsPlaying(true))
				.catch((err) => console.error('Erro ao tocar áudio:', err));
		}
	}, [currentIndex]);

	const handleAudioEnd = () => {
		setIsPlaying(false);
		setCardVisible(false);
		setTimeout(() => {
			setCurrentIndex((prev) => (prev + 1) % songs.length);
			setCardVisible(true);
		}, 500);
	};

	const togglePlayPause = () => {
		if (!audioRef.current) return;
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(false);
		} else {
			audioRef.current
				.play()
				.then(() => setIsPlaying(true))
				.catch(console.error);
		}
	};

	return (
		<section className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-center px-6 py-12">
			<h2 className="font-ethereal text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight leading-[1.05] mb-8 text-white">
				Prévia das Músicas
			</h2>
			<div className="relative w-full max-w-md">
				<div
					className={`bg-cover bg-center rounded-lg shadow-lg h-64 transition-opacity duration-500 ${
						cardVisible ? 'opacity-100' : 'opacity-0'
					}`}
					style={{ backgroundImage: `url(${songs[currentIndex].cover})` }}
				></div>
				<div className="absolute inset-0 flex flex-col items-center justify-center">
					<h3 className="font-ethereal text-[1.5rem] md:text-[2rem] font-semibold text-white mb-4">
						{songs[currentIndex].title}
					</h3>
					<button
						onClick={togglePlayPause}
						className="font-ethereal text-[1.1rem] text-link bg-white text-gray-800 font-semibold px-4 py-2 rounded shadow hover:bg-gray-200 transition"
					>
						{isPlaying ? 'Pausar Prévia' : 'Tocar Prévia'}
					</button>
				</div>
			</div>
			<audio ref={audioRef} onEnded={handleAudioEnd}>
				<source src={songs[currentIndex].preview} type="audio/mpeg" />
				Sua navegador não suporta áudio.
			</audio>
		</section>
	);
};

export default MusicPreviewSection;
