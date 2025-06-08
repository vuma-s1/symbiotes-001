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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[80vh]">
            {/* Left Column - Main Content */}
            <div className="space-y-8 lg:space-y-12 lg:mr-10">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text">
                    Symbiotes.ai
                  </span>
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">
                  Channel Your Passion,
                  <br />
                  Command Your Launch,
                  <br />
                  Beat the Odds.
                </h2>
              </div>

              {/* Decorative Line */}
              <div className="w-32 h-1 bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] rounded-full" />

              {/* Subheadline */}
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
                Don't let your vision become another statistic. Symbiotes.ai is your AI-powered launch system — giving you the clarity, structure, and execution plan to master PMF, streamline your launch, and dramatically improve your odds of success.
              </p>
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative lg:ml-10">
              {/* Mobile Image */}
              <div className="lg:hidden relative w-full aspect-square mb-8">
                <img 
                  src="/images/Heading.png"
                  alt="Symbiotes.ai Platform" 
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Desktop Image */}
              <div className="hidden lg:block relative w-full aspect-square">
                <img 
                  src="/images/Heading.png"
                  alt="Symbiotes.ai Platform" 
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadingSection;
