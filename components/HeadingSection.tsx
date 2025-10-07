'use client';

import React, { useEffect, useRef } from 'react';

const Stars = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStars = () => {
      const starsContainer = starsRef.current;
      if (!starsContainer) return;

      // Clear existing stars
      starsContainer.innerHTML = '';

      // Create multiple stars
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 2 + 1;
        
        // Random animation duration
        const duration = Math.random() * 3 + 2;
        
        star.style.cssText = `
          position: absolute;
          left: ${x}%;
          top: ${y}%;
          width: ${size}px;
          height: ${size}px;
          background: white;
          border-radius: 50%;
          opacity: ${Math.random()};
          animation: twinkle ${duration}s infinite;
        `;
        
        starsContainer.appendChild(star);
      }
    };

    createStars();
  }, []);

  return (
    <div 
      ref={starsRef} 
      className="absolute inset-0 w-full h-full z-10"
      style={{
        background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0, 0, 0, 0.37) 100%)'
      }}
    />
  );
};

const HeadingSection = () => {
  // Add keyframes for the twinkle animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes twinkle {
        0% {
          opacity: 0.2;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0.2;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Stars Background */}
      <Stars />
      
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0a0a0a] opacity-90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d0ed01] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#eaff6b] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center min-h-[80vh]">
            {/* Main Content */}
            <div className="text-center relative">
              {/* Title */}
              <div className="relative z-10">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-white mb-4">
                  You're one decision away from clarity.
                </h1>
                <p className="text-lg text-gray-400">
                  Most founders stay stuck because they build blind. They skip diagnosis. They guess.
                </p>
              </div>

              {/* Central Diagram */}
              <div className="relative flex flex-col items-center justify-center min-h-[500px] -mt-8">
                {/* Four Text Boxes */}
                <div className="grid grid-cols-2 gap-8 w-full max-w-4xl relative z-20">
                  {/* Top Left Box */}
                  <div className="bg-[#111]/80 backdrop-blur-sm border border-[#d0ed01]/50 rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-2">Diagnose</h3>
                    <p className="text-gray-300 text-sm">See exactly where you stand</p>
                  </div>

                  {/* Top Right Box */}
                  <div className="bg-[#111]/80 backdrop-blur-sm border border-[#d0ed01]/50 rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-2">Execute</h3>
                    <p className="text-gray-300 text-sm">Know exactly how to move next</p>
                  </div>

                  {/* Bottom Left Box */}
                  <div className="bg-[#111]/80 backdrop-blur-sm border border-[#d0ed01]/50 rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-2">Blueprint</h3>
                    <p className="text-gray-300 text-sm">Get your personalized launch plan</p>
                  </div>

                  {/* Bottom Right Box */}
                  <div className="bg-[#111]/80 backdrop-blur-sm border border-[#d0ed01]/50 rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-2">Launch</h3>
                    <p className="text-gray-300 text-sm">Stop guessing, start winning</p>
                  </div>
                </div>

                {/* Central Glowing Element */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="relative">
                    {/* Outer Ring */}
                    <div className="w-32 h-32 rounded-full border-2 border-[#d0ed01]/30 animate-pulse"></div>
                    {/* Middle Ring */}
                    <div className="absolute inset-4 w-24 h-24 rounded-full border-2 border-[#d0ed01]/50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    {/* Inner Ring */}
                    <div className="absolute inset-8 w-16 h-16 rounded-full border-2 border-[#d0ed01]/70 animate-pulse" style={{animationDelay: '1s'}}></div>
                    {/* Center Core */}
                    <div className="absolute inset-12 w-8 h-8 rounded-full bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  </div>
                </div>

                {/* Connecting Lines */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Line to Top Left */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 500">
                    <path
                      d="M 400 400 Q 200 200 200 150"
                      stroke="url(#gradient1)"
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse"
                    />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#d0ed01" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#eaff6b" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Line to Top Right */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 500">
                    <path
                      d="M 400 400 Q 600 200 600 150"
                      stroke="url(#gradient2)"
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse"
                      style={{animationDelay: '0.3s'}}
                    />
                    <defs>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#d0ed01" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#eaff6b" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Line to Bottom Left */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 500">
                    <path
                      d="M 400 400 Q 200 300 200 350"
                      stroke="url(#gradient3)"
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse"
                      style={{animationDelay: '0.6s'}}
                    />
                    <defs>
                      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#d0ed01" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#eaff6b" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Line to Bottom Right */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 500">
                    <path
                      d="M 400 400 Q 600 300 600 350"
                      stroke="url(#gradient4)"
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse"
                      style={{animationDelay: '0.9s'}}
                    />
                    <defs>
                      <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#d0ed01" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#eaff6b" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-8 relative z-10">
                <button className="bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-black font-bold px-10 py-5 rounded-full text-lg hover:scale-105 transition-all duration-300">
                  Generate My Launch Blueprint
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadingSection;
