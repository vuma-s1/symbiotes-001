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
  const [discSizes, setDiscSizes] = useState([500, 440, 380, 320, 260, 200, 140]);

  const titles = [
    "Pre-Positioning",
    "Positioning",
    "Omnipresence",
    "Lead Generation",
    "MVP Building",
    "Launch Strategy",
    "Growth & Performance"
  ];

  const subPoints = [
    [
      "Audience Mapping",
      "Problem Validation",
      "Competitor Differentiation",
      "Demand Research"
    ],
    [
      "Demographic Analysis",
      "Psychographic Profiling",
      "Behavioral Patterns",
      "Audience Segmentation"
    ],
    [
      "Problem Identification",
      "Solution Validation",
      "Market Need Analysis",
      "User Pain Points"
    ],
    [
      "Competitive Analysis",
      "Unique Value Proposition",
      "Market Positioning",
      "Brand Differentiation"
    ],
    [
      "Market Demand Analysis",
      "Trend Research",
      "Growth Potential",
      "Market Size Assessment"
    ],
    [
      "Customer Experience",
      "Social Media Strategy",
      "Brand Advocacy",
      "Loyalty Programs"
    ],
    [
      "Analytics & Insights",
      "Brand Perception",
      "ROI Measurement",
      "Growth Strategy"
    ]
  ];

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      
      // Update disc sizes based on window width
      if (isMobileView) {
        setDiscSizes([270, 240, 210, 180, 150, 120, 90]);
      } else if (window.innerWidth >= 1024) {
        setDiscSizes([500, 440, 380, 320, 260, 200, 140]);
      } else {
        setDiscSizes([350, 310, 270, 230, 190, 150, 110]);
      }
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
      const sectionRect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const sectionStart = window.scrollY + sectionRect.top;
      const stickyH = isMobile ? window.innerHeight * 0.65 : sticky.offsetHeight;
      const sectionEnd = sectionStart + sectionHeight - stickyH;
      
      // Add delay for desktop
      const scrollDelay = isMobile ? 0 : window.innerHeight * 0.2; // 20% of viewport height delay for desktop
      const adjustedSectionStart = sectionStart + scrollDelay;
      
      if (scrollY < adjustedSectionStart) {
        setProgress(0);
        setCurrentTitleIndex(0);
        return;
      }
      
      if (scrollY > sectionEnd) {
        setProgress(1);
        setCurrentTitleIndex(titles.length - 1);
        return;
      }
      
      // Add a scroll speed factor for mobile
      const scrollSpeedFactor = isMobile ? 0.5 : 1;
      const localProgress = ((scrollY - adjustedSectionStart) / (sectionEnd - adjustedSectionStart)) * scrollSpeedFactor;
      setProgress(Math.min(localProgress, 1));
      
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
      transform: 'translate(-50%, -50%)',
      transition: 'all 0.5s ease-out',
      boxShadow: isActive ? 'inset 0 0 200px#d0ed01' : 'none'
    };
  };

  return (
    <>
      <section className={cn('w-full min-h-[60vh] flex items-center justify-center bg-black py-16 px-2 sm:px-6', className)}>
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-center rounded-[2.5rem] bg-black shadow-2xl p-4 sm:p-8 md:p-16 border border-[#222] relative">
          {/* Illustration/graphic left side */}
          <div className="flex-1 flex items-center justify-center mb-8 md:mb-0 md:mr-12">
            <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] flex items-center justify-center bg-[#111] rounded-3xl">
              <img
                src="/images/image.png"
                alt="Integration Illustration"
                className="w-64 h-64 md:w-96 md:h-96 object-contain mx-auto"
              />
            </div>
          </div>
          {/* Content right side */}
          <div className="flex-1 flex flex-col items-start justify-center text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text">Your Launch Doesn't Need Guesswork — It Needs a Proven Structure</h2>
            <ul className="text-gray-300 text-base md:text-lg mb-8 max-w-lg space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#d0ed01]">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#d0ed01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span>Most founders don't fail because they lack effort — they fail because they lack a real system.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#d0ed01]">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#d0ed01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span>Without structure, launches waste time, energy, and momentum.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#d0ed01]">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#d0ed01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span>Symbiotes solves this by mapping 7 proven stages used in over 100 successful launches — so you move faster, smarter, and with confidence.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#d0ed01]">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#d0ed01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-[#d0ed01] font-semibold">Skip a step, and you're stuck fixing what could've been avoided.</span>
              </li>
            </ul>
            <button className="bg-[#d0ed01] text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#b6e600] hover:text-black transition-all text-lg">Get started</button>
          </div>
        </div>
      </section>
      <section
        ref={sectionRef}
        className={cn(
          'relative min-h-[80vh] md:min-h-[700vh] bg-black flex flex-col items-center',
          className
        )}
      >
        {/* Sticky Discs Animation Section */}
        <div
          ref={stickyRef}
          className="sticky top-0 z-10 w-full flex flex-col items-center justify-center mb-20 md:mb-32"
          style={{ height: isMobile ? '65vh' : '100vh', background: 'black' }}
        >
          {/* Discs Section */}
          <div className={cn(
            "relative flex flex-col items-center justify-center mx-auto",
            isMobile
              ? "w-[min(90vw,65vh)] h-[min(90vw,65vh)]"
              : "w-[500px] md:w-[700px] h-[500px] md:h-[560px]"
          )}>
            {/* Concentric discs */}
            {discSizes.map((size, index) => {
              const discStyle = getDiscStyle(6 - index);
              return (
                <img
                  key={index}
                  src="https://cdn.prod.website-files.com/680743e828b8ecbf8967ab43/681643f220e197dfdc60494e_branding%20disk.png"
                  loading="lazy"
                  className={cn(`disk_${7 - index}`, 'mx-auto')}
                  style={{
                    width: size + 'px',
                    height: size + 'px',
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
                    border: '2px solid #000000',
                    boxSizing: 'border-box',
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
            
            {/* Title and subpoints */}
            <div
              className="absolute left-1/2 z-30"
              style={{
                top: 'calc(50% + 50px)',
                transform: 'translateX(-50%)',
                margin: 0,
                padding: 0
              }}
            >
              <h1
                className="text-center text-lg md:text-3xl lg:text-5xl font-light leading-tight transition-all duration-300 whitespace-nowrap"
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
              <div className="mt-6 flex flex-col items-start gap-2">
                {subPoints[currentTitleIndex].map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-sm md:text-lg lg:text-xl text-gray-300 transition-all duration-300"
                    style={{
                      opacity: 0.8,
                      transform: 'translateY(0)',
                      transition: 'all 0.5s ease-out',
                      maxWidth: '100%'
                    }}
                  >
                    <div className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 border border-[#d0ed01] rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                          fill="#d0ed01"
                        />
                      </svg>
                    </div>
                    <span className="whitespace-normal">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gradient overlay */}
            <div
              className="pointer-events-none absolute left-0 right-0 bottom-0 h-1/2 z-20"
              style={{ background: 'linear-gradient(to top, #000 20%, rgba(0,0,0,0.98) 40%, rgba(0,0,0,0.95) 60%, rgba(0,0,0,0.9) 80%, transparent 100%)' }}
            />
          </div>
        </div>
        
        {/* Bottom spacer for padding */}
        <div className="h-20 md:h-32"></div>
      </section>
    </>
  );
};

export default ScrollingDiscs;