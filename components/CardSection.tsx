'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';

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
      className="absolute inset-0 w-full h-full z-0"
      style={{
        background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0, 0, 0, 0.37) 100%)'
      }}
    />
  );
};

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

  const descriptions = [
    "See the truth before you build. Every successful launch starts long before the product does. This is where we help you see your audience clearly, understand their pain points, and uncover where the real demand lies. Once you know that, every decision becomes faster and sharper.",
    "Turn clarity into a message that moves. Even the best product can't survive poor messaging. Here, we help you sharpen how you talk about your offer so it instantly clicks with the right audience. Clear words create confident buyers, and clarity always converts better than complexity.",
    "Show up where it matters. Visibility isn't about showing up everywhere, it's about showing up where it counts. We help you create a rhythm that keeps your brand top-of-mind without draining your time or attention. Consistency builds trust, and trust drives growth.",
    "Warm your audience before you sell. The best launches don't start on launch day. They start when people are already waiting. We help you build anticipation, capture leads, and nurture them with purpose so your launch day feels like a reveal, not a gamble.",
    "Build less, validate more. You don't need perfection to grow, you need proof. We help you build only what matters, collect feedback early, and make data-backed improvements that save months of wasted effort. Progress is measured by learning, not by how much you build.",
    "Make your launch an experience, not an event. A great launch doesn't rely on luck. It's timed, planned, and orchestrated with precision. Together we build your timeline, your story, and your moment the kind of launch that captures attention and converts it into action.",
    "Once it works, make it unstoppable. Scaling only works when the foundation is solid. Once your offer has proven its fit, we help you amplify it through data-driven growth engines that compound over time. Growth becomes predictable when performance meets purpose."
  ];

  const subPoints = [
    [
      "Audience Mapping",
      "Problem Validation",
      "Competitor Differentiation",
      "Demand Research"
    ],
    [
      "Core Offer",
      "Key Hooks",
      "Brand Voice",
      "Value Proposition"
    ],
    [
      "Content Pillars",
      "Posting Rhythm",
      "Channel Focus",
      "Engagement Loops"
    ],
    [
      "Lead Magnet",
      "Waitlist Capture",
      "Email Nurture",
      "Pre-Launch Hype"
    ],
    [
      "Minimum Features",
      "User Feedback",
      "Live Demos",
      "Validation Metrics"
    ],
    [
      "Launch Timeline",
      "Influencer Boost",
      "Storytelling Sequence",
      "Scarcity Offers"
    ],
    [
      "Paid Ads",
      "Funnel Optimization",
      "Sales Systems",
      "Retention Strategy"
    ]
  ];

  // GSAP refs for sub-points
  const leftSubPointsRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const rightSubPointsRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

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

  useEffect(() => {
    // Create a timeline for better control
    const tl = gsap.timeline({
      defaults: {
        ease: "power2.out",
        duration: 0.6
      }
    });

    // Reset all sub-points to hidden with a staggered initial state
    leftSubPointsRefs.forEach((ref, index) => {
      if (ref.current) {
        gsap.set(ref.current, { 
          opacity: 0, 
          y: 30,
          x: -20,
          scale: 0.9,
          rotation: -3
        });
      }
    });
    rightSubPointsRefs.forEach((ref, index) => {
      if (ref.current) {
        gsap.set(ref.current, { 
          opacity: 0, 
          y: 30,
          x: 20,
          scale: 0.9,
          rotation: 3
        });
      }
    });

    // Create arrays of valid refs (filtering out nulls)
    const validLeftRefs = leftSubPointsRefs
      .map(ref => ref.current)
      .filter((el): el is HTMLDivElement => el !== null);
    
    const validRightRefs = rightSubPointsRefs
      .map(ref => ref.current)
      .filter((el): el is HTMLDivElement => el !== null);

    // Animate left sub-points with a staggered entrance
    if (validLeftRefs.length > 0) {
      tl.to(validLeftRefs, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotation: 0,
        stagger: {
          amount: 0.3,
          from: "start",
          ease: "power2.out"
        },
        clearProps: "all"
      });
    }

    // Animate right sub-points with a staggered entrance
    if (validRightRefs.length > 0) {
      tl.to(validRightRefs, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotation: 0,
        stagger: {
          amount: 0.3,
          from: "start",
          ease: "power2.out"
        },
        clearProps: "all"
      }, "-=0.2"); // Start slightly before the left side finishes
    }

    // Add a subtle hover animation for all sub-points
    const allRefs = [...validLeftRefs, ...validRightRefs];
    allRefs.forEach(ref => {
      gsap.to(ref, {
        y: -3,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    });

    // Cleanup function
    return () => {
      tl.kill();
      allRefs.forEach(ref => {
        gsap.killTweensOf(ref);
      });
    };
  }, [currentTitleIndex]);

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
       <section className={cn('w-full min-h-[5vh] flex items-center justify-center bg-black py-8 px-2 sm:px-6 relative', className)}>
         {/* Stars Background */}
         <Stars />
         <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center p-4 relative z-10">
           {/* Content center */}
           <div className="flex flex-col items-center justify-center text-center w-full">
             <h2 className="text-xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text w-full text-center mx-auto" style={{fontFamily: "'Neue Haas Display Bold', sans-serif"}}>
               Your Launch Blueprint Isn't Just a Plan. It's Your Launch Structure
             </h2>
             <p className="text-gray-300 text-base md:text-lg mb-2 max-w-2xl mx-auto text-center" style={{fontFamily: "'Neue Haas Display Medium', sans-serif"}}>
               Symbiotes maps 7 proven stages behind 100+ launches so you move faster, smarter, and with clarity.
             </p>
           </div>
         </div>
       </section>
      <section
        ref={sectionRef}
        className={cn(
          'relative min-h-[80vh] md:min-h-[400vh] bg-black flex flex-col items-center',
          className
        )}
      >
        {/* Sticky Discs Animation Section */}
        <div
          ref={stickyRef}
          className="sticky top-0 z-10 w-full flex flex-col items-center justify-center mb-20 md:mb-32 relative"
          style={{ height: isMobile ? '65vh' : '100vh', background: 'black' }}
        >
          {/* Stars Background */}
          <Stars />
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
            
            {/* Title and description */}
            <div
              className="absolute left-1/2 z-30 w-full flex flex-col items-center"
              style={{
                top: 'calc(50% + 70px)',
                transform: 'translateX(-50%)',
                margin: 0,
                padding: 0
              }}
            >
              <h1
                className="text-center text-lg md:text-3xl lg:text-5xl font-light leading-tight transition-all duration-300 whitespace-nowrap mb-8"
                style={{
                  fontFamily: "'Neue Haas Display Bold', sans-serif",
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
              
              {/* Description paragraph */}
              <p
                className="text-center text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed max-w-lg mx-auto px-6 transition-all duration-300 mb-10"
                style={{
                  fontFamily: "'Neue Haas Display Light', sans-serif",
                  opacity: 1,
                  transform: 'translateY(0)',
                  transition: 'all 0.5s ease-out',
                  textShadow: 'none',
                  margin: 0
                }}
              >
                {descriptions[currentTitleIndex]}
              </p>
            </div>

            {/* Sub-points on sides */}
            {/* Left side sub-points */}
            <div
              className="absolute z-30 flex flex-col items-end gap-16"
              style={{
                left: '-220px',
                top: '50%',
                transform: 'translateY(-50%)',
                minWidth: '120px',
                maxWidth: '180px'
              }}
            >
              {subPoints[currentTitleIndex].slice(0, 2).map((point, idx) => (
                <div
                  key={idx}
                  ref={leftSubPointsRefs[idx]}
                  className="flex items-center gap-2 text-sm md:text-lg lg:text-xl text-gray-300"
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 border border-[#d0ed01] rounded-sm flex items-center justify-center flex-shrink-0">
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
                  <span className="whitespace-normal text-right">{point}</span>
                </div>
              ))}
            </div>
            {/* Right side sub-points */}
            <div
              className="absolute z-30 flex flex-col items-start gap-16"
              style={{
                right: '-220px',
                top: '50%',
                transform: 'translateY(-50%)',
                minWidth: '120px',
                maxWidth: '180px'
              }}
            >
              {subPoints[currentTitleIndex].slice(2, 4).map((point, idx) => (
                <div
                  key={idx}
                  ref={rightSubPointsRefs[idx]}
                  className="flex items-center gap-2 text-sm md:text-lg lg:text-xl text-gray-300"
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 border border-[#d0ed01] rounded-sm flex items-center justify-center flex-shrink-0">
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
                  <span className="whitespace-normal text-left">{point}</span>
                </div>
              ))}
            </div>
            
            {/* Gradient overlay */}
            <div
              className="pointer-events-none absolute left-0 right-0 bottom-0 h-1/2 z-20"
              style={{ background: 'linear-gradient(to top, #000 20%, rgba(0,0,0,0.98) 40%, rgba(0,0,0,0.95) 60%, rgba(0,0,0,0.9) 80%, transparent 100%)' }}
            />
          </div>
        </div>
        
      </section>

      {/* Final content section after disc animation */}
      <section className="w-full bg-black px-4 sm:px-6 relative pb-12 md:pb-16">
        {/* Stars Background */}
        <Stars />
        <div className="max-w-4xl mx-auto text-center relative z-10 -mt-24 md:-mt-32">
          <h2 
            className="text-xl md:text-2xl lg:text-3xl text-[#d0ed01] leading-tight mb-4"
            style={{fontFamily: "'Neue Haas Display Bold', sans-serif"}}
          >
            Your custom Blueprint is built on this system.
          </h2>
          <p 
            className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-4"
            style={{fontFamily: "'Neue Haas Display Light', sans-serif"}}
          >
            Every quiz result, every workbook, and every recommendation inside Symbiotes connects directly to these seven stages. This framework isn't theory — it's the distilled pattern behind hundreds of real launches that actually worked.
          </p>
          <p 
            className="text-base md:text-lg lg:text-xl text-white leading-relaxed max-w-2xl mx-auto font-medium mb-2"
            style={{fontFamily: "'Neue Haas Display Medium', sans-serif"}}
          >
            When you move through these stages in order, momentum compounds.
            You stop guessing. You start growing
          </p>
        </div>
      </section>
    </>
  );
};

export default ScrollingDiscs;