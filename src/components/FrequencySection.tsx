import React, { useState } from 'react';

const FrequencySection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const socialLinks = [
    { name: 'YouTube', icon: '📺', url: '#', color: 'from-red-500 to-red-700' },
    { name: 'Twitch', icon: '🎮', url: '#', color: 'from-purple-500 to-purple-700' },
    { name: 'Spotify', icon: '🎵', url: '#', color: 'from-green-500 to-green-700' },
    { name: 'Discord', icon: '💬', url: '#', color: 'from-blue-500 to-blue-700' },
    { name: 'Instagram', icon: '📸', url: '#', color: 'from-pink-500 to-pink-700' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center cosmic-gradient py-20">
      <div className="absolute inset-0 bg-gradient-to-t from-void-950 via-transparent to-void-950" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main CTA */}
        <div className="mb-16">
          <h2 className="text-title mb-8 text-foreground">
            JOIN THE FREQUENCY
          </h2>
          <p className="text-body text-aurora-300 max-w-2xl mx-auto mb-12 font-medium">
            Synchronize with the eternal pulse. Become part of the living broadcast.
          </p>

          {/* Central ANKH symbol */}
          <div
            className="relative mx-auto mb-16"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`
              w-32 h-40 mx-auto liquid-morph animate-morph transition-all duration-500 cursor-pointer
              ${isHovered ? 'scale-110 animate-pulse-glow' : 'scale-100'}
            `}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`
                  text-8xl font-ankh font-black ethereal-text glow-text animate-breathe
                  ${isHovered ? 'animate-pulse scale-110' : ''}
                `}>
                  ⚶
                </div>
              </div>
            </div>
            
            {/* Floating particles around ANKH */}
            {isHovered && (
              <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-cosmos-400 rounded-full animate-float opacity-80"
                    style={{
                      left: `${50 + 30 * Math.cos(i * Math.PI / 6)}%`,
                      top: `${50 + 30 * Math.sin(i * Math.PI / 6)}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Social links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              className="group relative block"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`
                cosmic-blur rounded-2xl p-6 transition-all duration-300 hover:scale-105
                bg-gradient-to-br ${link.color} opacity-80 hover:opacity-100
                group-hover:animate-pulse-glow
              `}>
                <div className="text-3xl mb-3 group-hover:animate-bounce">
                  {link.icon}
                </div>
                <div className="text-caption font-medium">
                  {link.name}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional CTAs */}
        <div className="space-y-6">
          <button className="w-full max-w-md mx-auto block cosmic-blur rounded-2xl px-8 py-4 text-title text-cosmos-300 hover:text-white transition-all duration-300 hover:scale-105 hover:animate-pulse-glow font-bold">
            STREAM NOW
          </button>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="cosmic-blur rounded-xl px-6 py-3 text-body text-aurora-200 hover:text-white transition-colors">
              Subscribe to Updates
            </button>
            <button className="cosmic-blur rounded-xl px-6 py-3 text-body text-aurora-200 hover:text-white transition-colors">
              Join Community
            </button>
            <button className="cosmic-blur rounded-xl px-6 py-3 text-body text-aurora-200 hover:text-white transition-colors">
              Submit Content
            </button>
          </div>
        </div>

        {/* Status indicator */}
        <div className="mt-12 flex items-center justify-center space-x-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="text-caption text-aurora-300">
            1,247 souls connected • Stream active 24/7
          </span>
        </div>
      </div>
    </section>
  );
};

export default FrequencySection;
