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
              <div className="relative z-10 mb-8">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-white mb-4">
                  You're one decision away from complete clarity.
                </h1>
                <p className="text-lg text-gray-400 mb-4">
                  Most founders aren't missing motivation, they're missing a map.
                </p>
                <p className="text-base text-gray-300 max-w-3xl mx-auto mb-6">
                  This is the moment that shows you exactly where you stand and the smartest way to move forward — fast, focused, and without second-guessing.
                </p>
                <p className="text-lg text-white font-semibold">
                  Symbiotes builds your personalized Launch Blueprint in two simple steps.
                </p>
              </div>

              {/* Step 1 and Step 2 */}
              <div className="relative z-10 max-w-4xl mx-auto mb-12 space-y-8">
                {/* Step 1 */}
                <div className="bg-[#111]/80 backdrop-blur-sm border border-[#d0ed01]/50 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-[#d0ed01] mb-4">Step 1</h2>
                  <p className="text-gray-300 text-base mb-2">
                    Answer a few smart questions about your idea, audience, and current traction.
                  </p>
                  <p className="text-gray-400 text-sm">
                    We'll pinpoint your exact stage and uncover what's holding your launch back.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-[#111]/80 backdrop-blur-sm border border-[#d0ed01]/50 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-[#d0ed01] mb-4">Step 2</h2>
                  <p className="text-gray-300 text-base mb-2">
                    Get your custom Blueprint and Workbook instantly.
                  </p>
                  <p className="text-gray-400 text-sm">
                    See your next moves laid out with the same seven-stage framework behind over a hundred real launches.
                  </p>
                </div>
              </div>

              {/* Four Simple Cards */}
              <div className="relative z-10 max-w-4xl mx-auto mb-12">
                <div className="grid grid-cols-2 gap-6">
                  {/* Diagnose */}
                  <div className="bg-[#111]/80 backdrop-blur-sm border border-[#d0ed01]/50 rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-2">Diagnose</h3>
                    <p className="text-gray-300 text-sm">See exactly where you stand</p>
                  </div>

                  {/* Execute */}
                  <div className="bg-[#111]/80 backdrop-blur-sm border border-[#d0ed01]/50 rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-2">Execute</h3>
                    <p className="text-gray-300 text-sm">Know exactly how to move next</p>
                  </div>

                  {/* Blueprint */}
                  <div className="bg-[#111]/80 backdrop-blur-sm border border-[#d0ed01]/50 rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-2">Blueprint</h3>
                    <p className="text-gray-300 text-sm">Get your personalized launch plan</p>
                  </div>

                  {/* Launch */}
                  <div className="bg-[#111]/80 backdrop-blur-sm border border-[#d0ed01]/50 rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-2">Launch</h3>
                    <p className="text-gray-300 text-sm">Stop guessing, start winning</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-8 relative z-10">
                <button className="bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-black font-bold px-10 py-5 rounded-full text-lg hover:scale-105 transition-all duration-300">
                  Generate My Launch Blueprint + Workbook
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
