'use client';
import React, { useRef, useState, useEffect } from 'react';

interface Avatar {
  src: string;
  color: string;
  style: string;
}

const avatars: Avatar[] = [
  { src: 'https://randomuser.me/api/portraits/men/32.jpg', color: 'bg-orange-500', style: 'top-8 left-16' },
  { src: 'https://randomuser.me/api/portraits/women/44.jpg', color: 'bg-yellow-400', style: 'top-1/3 left-4' },
  { src: 'https://randomuser.me/api/portraits/men/45.jpg', color: 'bg-blue-400', style: 'bottom-16 left-40' },
  { src: 'https://randomuser.me/api/portraits/women/65.jpg', color: 'bg-green-400', style: 'top-8 right-16' },
  { src: 'https://randomuser.me/api/portraits/men/66.jpg', color: 'bg-blue-600', style: 'top-1/2 right-8' },
  { src: 'https://randomuser.me/api/portraits/women/67.jpg', color: 'bg-purple-400', style: 'bottom-24 right-32' },
];

const ReferenceImageSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [collected, setCollected] = useState(false);

  // Trigger animation on scroll into view or hover
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.7 && rect.bottom > 0) {
        setCollected(true);
      } else {
        setCollected(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tick mark position (relative to section)
  // We'll use bottom center (50% horizontally, 90% vertically)
  const tickX = '50%';
  const tickY = '90%';

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f7f7f7] py-24 overflow-visible"
    >
      {/* Floating Avatars */}
      {avatars.map((avatar, i) => (
        <div
          key={i}
          className={`absolute ${avatar.style} rounded-full shadow-lg flex items-center justify-center z-10 transition-all duration-700 ease-in-out
            ${collected ? ' pointer-events-none' : ''}`}
          style={{
            width: i === 2 ? '110px' : '60px',
            height: i === 2 ? '110px' : '60px',
            left: collected ? '50%' : undefined,
            right: collected ? undefined : undefined,
            top: collected ? '90%' : undefined,
            bottom: undefined,
            transform: collected
              ? `translate(-50%, -50%) scale(0.3) rotate(${i * 30}deg)`
              : 'none',
            opacity: collected ? 0 : 1,
            transition: `all 0.9s cubic-bezier(.7,.2,.2,1) ${collected ? i * 0.13 : 0}s`,
          }}
        >
          <div className={`rounded-full ${avatar.color} w-full h-full flex items-center justify-center`}>
            <img
              src={avatar.src}
              alt="avatar"
              className="rounded-full object-cover w-full h-full border-4 border-white"
            />
          </div>
        </div>
      ))}
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-20">
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
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full text-lg shadow transition">
            Start Tracking Your Time
          </button>
          <button className="flex items-center gap-2 font-semibold text-black hover:underline text-lg">
            Check out the features
            <span className="inline-block">→</span>
          </button>
        </div>
        <div className="flex justify-center mt-8">
          <div className="bg-yellow-400 rounded-xl p-3 flex items-center justify-center">
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#FFD600"/><path d="M10 17l4 4 8-8" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferenceImageSection;