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

const tickItems = [
  {
    name: 'Copywriting',
    description: 'Compelling content that converts',
    icon: '✍️'
  },
  {
    name: 'Design',
    description: 'Visual excellence that engages',
    icon: '🎨'
  },
  {
    name: 'Performance Marketing',
    description: 'Data-driven growth strategies',
    icon: '📈'
  },
  {
    name: 'Sales',
    description: 'Revenue acceleration',
    icon: '💰'
  },
  {
    name: 'Tech/Automation',
    description: 'Efficient scaling solutions',
    icon: '⚡'
  }
];

const FiveProcessSection = () => {
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
    <section className="relative py-20 bg-black w-full overflow-hidden">
      {/* Stars Background */}
      <Stars />
      
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0a0a0a] opacity-90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d0ed01] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#eaff6b] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#d0ed01] mb-6">
          Your Growth Support System
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Five powerful services working together to accelerate your growth
        </p>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            {tickItems.map((item, idx) => (
              <div 
                key={idx} 
                className="relative group"
              >
                {/* Vertical Connection Line */}
                <div className="absolute left-1/2 -top-8 h-8 w-0.5 bg-[#d0ed01] opacity-20 hidden md:block" />
                
                <div className="relative flex flex-col items-center">
                  {/* Circle with Icon and Tick Mark */}
                  <div className="w-24 h-24 rounded-full bg-black border-2 border-[#d0ed01] flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 relative overflow-hidden group-hover:border-[#d0ed01] group-hover:shadow-[0_0_20px_rgba(208,237,1,0.3)]">
                    <span className="text-3xl z-10 group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    
                    {/* Tick Mark SVG */}
                    <svg 
                      className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="50" cy="50" r="48" stroke="#d0ed01" strokeWidth="3" fill="rgba(208,237,1,0.15)" />
                      <path 
                        d="M30 50L45 65L70 35" 
                        stroke="#d0ed01" 
                        strokeWidth="5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        filter="url(#glow)"
                      />
                      <defs>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="2" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-[#d0ed01] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                  
                  <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-[#d0ed01] transition-colors duration-300">{item.name}</h3>
                  <p className="text-gray-400 text-sm text-center group-hover:text-gray-300 transition-colors duration-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiveProcessSection;