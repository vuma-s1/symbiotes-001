'use client';
import React, { useRef, useState, useEffect } from 'react';

interface Avatar {
  src: string;
  color: string;
  style: string;
  transform: string;
}

const avatars: Avatar[] = [
  { 
    src: 'https://randomuser.me/api/portraits/men/32.jpg', 
    color: 'bg-orange-500', 
    style: 'top-[10%] left-[15%]',
    transform: 'translate3d(-35vw, -60vh, 0px) scale3d(0.8, 0.8, 1)'
  },
  { 
    src: 'https://randomuser.me/api/portraits/women/44.jpg', 
    color: 'bg-yellow-400', 
    style: 'top-[35%] left-[5%]',
    transform: 'translate3d(-42vw, -32vh, 0px) scale3d(0.4, 0.4, 1)'
  },
  { 
    src: 'https://randomuser.me/api/portraits/men/45.jpg', 
    color: 'bg-blue-400', 
    style: 'bottom-[15%] left-[35%]',
    transform: 'translate3d(-29vw, -9vh, 0px) scale3d(1.1, 1.1, 1)'
  },
  { 
    src: 'https://randomuser.me/api/portraits/women/65.jpg', 
    color: 'bg-green-400', 
    style: 'top-[10%] right-[15%]',
    transform: 'translate3d(32vw, -21vh, 0px) scale3d(0.7, 0.7, 1)'
  },
  { 
    src: 'https://randomuser.me/api/portraits/men/66.jpg', 
    color: 'bg-blue-600', 
    style: 'top-[40%] right-[8%]',
    transform: 'translate3d(36vw, -42vh, 0px) scale3d(0.5, 0.5, 1)'
  },
  { 
    src: 'https://randomuser.me/api/portraits/women/67.jpg', 
    color: 'bg-purple-400', 
    style: 'bottom-[20%] right-[30%]',
    transform: 'translate3d(37vw, -60vh, 0px) scale3d(0.7, 0.7, 1)'
  },
];

const CommunitySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how far the section has scrolled into view
      const startTrigger = viewportHeight * 0.8; // Start animation when section is 80% in view
      const endTrigger = -rect.height * 0.2; // End animation when section is 20% out of view
      
      const progress = Math.min(
        1,
        Math.max(
          0,
          (startTrigger - rect.top) / (startTrigger - endTrigger)
        )
      );
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f7f7f7] py-24 overflow-visible min-h-screen flex items-center justify-center"
    >
      {/* Floating Avatars Container */}
      <div className="absolute inset-0 overflow-hidden">
        {avatars.map((avatar, i) => (
          <div
            key={i}
            className="absolute rounded-full shadow-lg flex items-center justify-center z-10 transition-all duration-700 ease-out will-change-transform"
            style={{
              width: i === 2 ? '110px' : '80px',
              height: i === 2 ? '110px' : '80px',
              opacity: scrollProgress,
              transform: scrollProgress > 0 
                ? avatar.transform 
                : 'translate3d(0, 0, 0) scale3d(0, 0, 1)',
              transformStyle: 'preserve-3d',
              transitionDelay: `${i * 0.15}s`,
              transition: `all 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.15}s`,
            }}
          >
            <div className={`rounded-full ${avatar.color} w-full h-full flex items-center justify-center p-1`}>
              <img
                src={avatar.src}
                alt="avatar"
                className="rounded-full object-cover w-full h-full border-4 border-white"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-20 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6 leading-tight">
          Time Management<br />
          <span className="relative inline-block">
            with <span className="relative z-10">Style</span>
            <svg className="absolute left-0 right-0 mx-auto -bottom-2 w-full h-4 z-0" viewBox="0 0 220 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 10C60 20 160 0 215 10" stroke="#FFD600" strokeWidth="6" strokeLinecap="round"/>
            </svg>
          </span>
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit tincidunt vivamus felis elementum eget enim elementum nisl.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full text-lg shadow transition-all duration-300 transform hover:scale-105">
            Start Tracking Your Time
          </button>
          <button className="flex items-center gap-2 font-semibold text-black hover:underline text-lg transition-all duration-300">
            Check out the features
            <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
        <div className="flex justify-center mt-8">
          <div className="bg-yellow-400 rounded-xl p-3 flex items-center justify-center">
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
              <rect width="32" height="32" rx="6" fill="#FFD600"/>
              <path d="M10 17l4 4 8-8" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;