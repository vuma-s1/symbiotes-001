'use client';
import React, { useRef, useEffect, useState } from 'react';

const avatars = [
  {
    src: 'https://randomuser.me/api/portraits/men/32.jpg',
    color: 'bg-orange-500',
    style: 'top-4 left-1/4',
    size: 'w-[110px] h-[110px]'
  },
  {
    src: 'https://randomuser.me/api/portraits/women/44.jpg',
    color: 'bg-yellow-400',
    style: 'top-1/3 left-[7%]',
    size: 'w-[60px] h-[60px]'
  },
  {
    src: 'https://randomuser.me/api/portraits/men/45.jpg',
    color: 'bg-blue-400',
    style: 'bottom-10 left-1/4',
    size: 'w-[140px] h-[140px]'
  },
  {
    src: 'https://randomuser.me/api/portraits/women/65.jpg',
    color: 'bg-green-400',
    style: 'top-4 right-1/4',
    size: 'w-[110px] h-[110px]'
  },
  {
    src: 'https://randomuser.me/api/portraits/men/66.jpg',
    color: 'bg-blue-600',
    style: 'top-1/3 right-[7%]',
    size: 'w-[60px] h-[60px]'
  },
  {
    src: 'https://randomuser.me/api/portraits/women/67.jpg',
    color: 'bg-purple-400',
    style: 'bottom-10 right-1/4',
    size: 'w-[110px] h-[110px]'
  },
];

type AvatarStyle = {
  opacity: number;
  transform?: string;
  transition: string;
};

const CommunitySection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const [avatarsVisible, setAvatarsVisible] = useState(false);
  const [avatarsAnimating, setAvatarsAnimating] = useState(false);
  const [logoCenter, setLogoCenter] = useState({ x: 0, y: 0 });

  // Get logo center position relative to section
  useEffect(() => {
    if (logoRef.current && sectionRef.current) {
      const logoRect = logoRef.current.getBoundingClientRect();
      const sectionRect = sectionRef.current.getBoundingClientRect();
      setLogoCenter({
        x: logoRect.left + logoRect.width / 2 - sectionRect.left,
        y: logoRect.top + logoRect.height / 2 - sectionRect.top,
      });
    }
  }, [avatarsVisible]);

  // Intersection Observer to trigger animation
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let timeout: NodeJS.Timeout | undefined;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAvatarsVisible(true);
          setAvatarsAnimating(false);
          timeout = setTimeout(() => {
            setAvatarsAnimating(true);
          }, 2000);
        } else {
          setAvatarsVisible(false);
          setAvatarsAnimating(false);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  // Avatar positions for animation
  const getAvatarStyle = (i: number, avatar: typeof avatars[0]): AvatarStyle => {
    if (!avatarsVisible) return { opacity: 0, transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1)' };
    if (!avatarsAnimating) return { opacity: 1, transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1)' };
    
    // Animate to logo center
    const avatarDiv = document.getElementById(`avatar-${i}`);
    if (avatarDiv && sectionRef.current) {
      const avatarRect = avatarDiv.getBoundingClientRect();
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const avatarCenter = {
        x: avatarRect.left + avatarRect.width / 2 - sectionRect.left,
        y: avatarRect.top + avatarRect.height / 2 - sectionRect.top,
      };
      const dx = logoCenter.x - avatarCenter.x;
      const dy = logoCenter.y - avatarCenter.y;
      return {
        transform: `translate(${dx}px, ${dy}px) scale(0.2)`,
        opacity: 0,
        transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1)',
      };
    }
    return { opacity: 0, transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1)' };
  };

  return (
    <section ref={sectionRef} className="relative py-24 overflow-visible min-h-screen flex items-center justify-center" style={{
      backgroundImage: 'url("/images/background.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'black', // fallback for slow loads
    }}>
      {/* Floating Avatars */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {avatars.map((avatar, i) => (
          <div
            key={i}
            id={`avatar-${i}`}
            className={`absolute ${avatar.style} z-10 flex items-center justify-center`}
            style={getAvatarStyle(i, avatar)}
          >
            <div className={`rounded-full ${avatar.color} ${avatar.size} flex items-center justify-center shadow-lg`}>
              <img
                src={avatar.src}
                alt="avatar"
                className="rounded-full object-cover w-full h-full border-4 border-white"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Center Content */}
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-20 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-14 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#d0ed01] to-[#b6e600]">
          The Symbiotes Growth Crew
        </h1>
        <p className="text-gray-400 text-lg mb-10 max-w-xl">
          Surround yourself with mission-ready talent. The Symbiotes Growth Crew comprises marketing, tech, design, and sales pros trained through intense, hands-on challenges mirroring real startup pressures.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <button className="bg-gradient-to-r from-[#d0ed01] to-[#b6e600] hover:from-[#b6e600] hover:to-[#d0ed01] text-black font-semibold px-8 py-3 rounded-full text-lg shadow transition-all duration-300 transform hover:scale-105">
            Start Tracking Your Time
          </button>
          <button className="flex items-center gap-2 font-semibold text-[#d0ed01] hover:underline text-lg transition-all duration-300">
            Check out the features
            <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
        <div className="flex justify-center mt-[300px]">
          <img ref={logoRef} src="/images/icon.png" alt="Logo" className="w-32 h-32 object-contain" style={{ background: 'transparent' }} />
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;