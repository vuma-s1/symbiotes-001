'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollingDiscsProps {
  className?: string;
}

const ScrollingDiscs: React.FC<ScrollingDiscsProps> = ({ className }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const titles = [
    "Your Brand Blueprint",
    "Define Your Vision",
    "Craft Your Identity",
    "Launch Your Success"
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const sticky = stickyRef.current;
      if (!section || !sticky) return;
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const sectionRect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const sectionStart = window.scrollY + sectionRect.top;
      const stickyH = isMobile ? window.innerHeight * 0.65 : sticky.offsetHeight;
      const sectionEnd = sectionStart + sectionHeight - stickyH;
      if (scrollY < sectionStart) {
        setProgress(0);
        setCurrentTitleIndex(0);
        return;
      }
      if (scrollY > sectionEnd) {
        setProgress(1);
        setCurrentTitleIndex(titles.length - 1);
        return;
      }
      const localProgress = (scrollY - sectionStart) / (sectionEnd - sectionStart);
      setProgress(localProgress);
      const titleIndex = Math.min(
        Math.floor(localProgress * titles.length),
        titles.length - 1
      );
      setCurrentTitleIndex(titleIndex);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [titles.length, isMobile]);

  const getDiscStyle = (discIndex: number) => {
    const isActive = discIndex === currentTitleIndex;
    const baseOpacity = isActive ? 1 : 0.5;
    const scrollFactor = progress > 0 ? 1 : 0;
    const opacity = Math.min(1, baseOpacity + (scrollFactor * 0.2));
    return {
      opacity,
      filter: isActive ? 'none' : 'blur(2px)',
      transform: `translate(-50%, -50%)`,
      transition: 'all 0.5s ease-out',
      boxShadow: isActive ? 'inset 0 0 100px #d0ed01' : 'none'
    };
  };

  // Disc sizes
  const discSizes = isMobile
    ? [270, 220, 170, 120]
    : window.innerWidth >= 1024
      ? [500, 400, 280, 160]
      : [320, 260, 180, 100];

  return (
    <section
      ref={sectionRef}
      className={cn(
        'relative min-h-[80vh] md:min-h-[400vh] bg-black flex flex-col items-center justify-start',
        className
      )}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 z-10 w-full flex flex-col items-center justify-center"
        style={{ height: isMobile ? '65vh' : '100vh', background: 'black' }}
      >
        <div className={
            isMobile
              ? 'relative flex flex-col items-center justify-center mx-auto overflow-visible w-[min(90vw,65vh)] h-[min(90vw,65vh)]'
              : 'relative flex flex-col items-center justify-center mx-auto overflow-visible w-[400px] md:w-[600px] h-[320px] md:h-[480px]'
          }
        >
          {/* Concentric discs */}
          {discSizes.map((size, index) => {
            const discStyle = getDiscStyle(3 - index); // reverse for correct highlight
            return (
              <img
                key={index}
                src="https://cdn.prod.website-files.com/680743e828b8ecbf8967ab43/681643f220e197dfdc60494e_branding%20disk.png"
                loading="lazy"
                className={cn(`disk _${4 - index}`, 'mx-auto')}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  willChange: 'opacity, filter, transform, box-shadow',
                  ...discStyle,
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  zIndex: 1,
                  mixBlendMode: 'screen',
                  clipPath: 'circle(50% at 50% 50%)',
                  margin: '0 auto',
                  pointerEvents: 'none',
                }}
                alt=""
              />
            );
          })}
          {/* Center icon */}
          <img
            src="https://cdn.prod.website-files.com/680743e828b8ecbf8967ab43/68164b50df5d7b7aa7434c67_pdf.png"
            loading="lazy"
            className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            alt=""
          />
          {/* Title just below icon */}
          <div
            className="absolute left-1/2 z-30"
            style={{
              top: 'calc(50% + 32px)', // 32px below center for a 24-32px icon, adjust as needed
              transform: 'translateX(-50%)',
              margin: 0,
              padding: 0
            }}
          >
            <h1
              className="text-center text-lg md:text-2xl lg:text-4xl font-light leading-tight transition-all duration-300 whitespace-nowrap"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#fff',
                opacity: 1,
                transform: 'translateY(0)',
                transition: 'all 0.5s ease-out',
                textShadow: 'none',
                margin: 0
              }}
            >
              {titles[currentTitleIndex]}
            </h1>
          </div>
          {/* Gradient overlay */}
          <div
            className="pointer-events-none absolute left-0 right-0 bottom-0 h-1/2 z-20"
            style={{ background: 'linear-gradient(to top, #000 20%, rgba(0,0,0,0.98) 40%, rgba(0,0,0,0.95) 60%, rgba(0,0,0,0.9) 80%, transparent 100%)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default ScrollingDiscs;