'use client';

import { useEffect, useRef, useState } from 'react';
import { Shuffle } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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

const SectionTwo = () => {
  // Add keyframes for the pulse animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse-subtle {
        0% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(208, 237, 1, 0.4);
        }
        50% {
          transform: scale(1.05);
          box-shadow: 0 0 20px 10px rgba(208, 237, 1, 0.2);
        }
        100% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(208, 237, 1, 0.4);
        }
      }
      .animate-pulse-subtle {
        animation: pulse-subtle 2s ease-in-out infinite;
      }

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

  const blueRectRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [isHoveringRectangle, setIsHoveringRectangle] = useState(false);

  useEffect(() => {
    const images = document.querySelectorAll('.hero-img');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'scale-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    images.forEach((img) => observer.observe(img));

    let animationFrameId: number;
    const updateCursorPosition = () => {
      if (cursorRef.current) {
        const dx = cursorPosition.x - parseFloat(cursorRef.current.style.left || '0');
        const dy = cursorPosition.y - parseFloat(cursorRef.current.style.top || '0');
        
        cursorRef.current.style.left = `${parseFloat(cursorRef.current.style.left || '0') + dx * 0.15}px`;
        cursorRef.current.style.top = `${parseFloat(cursorRef.current.style.top || '0') + dy * 0.15}px`;
        
        if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
          animationFrameId = requestAnimationFrame(updateCursorPosition);
        }
      }
    };

    if (isActive) {
      animationFrameId = requestAnimationFrame(updateCursorPosition);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [cursorPosition, isActive]);

  useEffect(() => {
    // GSAP animations for floating images
    const leftImages = document.querySelectorAll('.hero-left .hero-img');
    const rightImages = document.querySelectorAll('.hero-right .hero-img');

    // Create floating animations for left images
    leftImages.forEach((img, index) => {
      gsap.to(img, {
        y: `${(index + 1) * 15}px`,
        x: `${(index + 1) * 10}px`,
        duration: 2 + index,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
        paused: true // Start paused
      });
    });

    // Create floating animations for right images
    rightImages.forEach((img, index) => {
      gsap.to(img, {
        y: `${-(index + 1) * 15}px`,
        x: `${-(index + 1) * 10}px`,
        duration: 2 + index,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
        paused: true // Start paused
      });
    });

    // Function to play all animations
    const playAllAnimations = () => {
      leftImages.forEach((img) => {
        gsap.getTweensOf(img).forEach(tween => tween.play());
      });
      rightImages.forEach((img) => {
        gsap.getTweensOf(img).forEach(tween => tween.play());
      });
    };

    // Function to pause all animations
    const pauseAllAnimations = () => {
      leftImages.forEach((img) => {
        gsap.getTweensOf(img).forEach(tween => tween.pause());
      });
      rightImages.forEach((img) => {
        gsap.getTweensOf(img).forEach(tween => tween.pause());
      });
    };

    // Play animations when cursor enters the section
    if (isActive) {
      playAllAnimations();
    } else {
      pauseAllAnimations();
    }

    // Cleanup function
    return () => {
      gsap.killTweensOf(leftImages);
      gsap.killTweensOf(rightImages);
    };
  }, [isActive]);

  useEffect(() => {
    // Animate images in sequence on section enter
    const allImages = document.querySelectorAll('.hero-img');
    gsap.set(allImages, { opacity: 0, scale: 0.8 });
    gsap.to(allImages, {
      opacity: 1,
      scale: 1,
      duration: 0.7,
      stagger: 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: blueRectRef.current,
        start: 'top 70%',
        once: true,
      },
    });
  }, []);

  const shuffleArray = (array: Element[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleShuffle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const leftContainer = document.querySelector('.hero-left');
    const rightContainer = document.querySelector('.hero-right');

    if (leftContainer && rightContainer) {
      const leftImages = Array.from(leftContainer.querySelectorAll('.hero-img'));
      const rightImages = Array.from(rightContainer.querySelectorAll('.hero-img'));

      shuffleArray(leftImages).forEach((img) => leftContainer.appendChild(img));
      shuffleArray(rightImages).forEach((img) => rightContainer.appendChild(img));
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = blueRectRef.current?.getBoundingClientRect();
    if (rect) {
      const isInsideRect = 
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (isInsideRect) {
        setCursorPosition({ x: e.clientX, y: e.clientY });
        if (cursorRef.current) {
          cursorRef.current.style.display = 'flex';
          cursorRef.current.style.left = `${e.clientX}px`;
          cursorRef.current.style.top = `${e.clientY}px`;
        }
        setIsActive(true);
        setIsHoveringRectangle(true);
      } else {
        if (cursorRef.current) {
          cursorRef.current.style.display = 'none';
        }
        setIsActive(false);
        setIsHoveringRectangle(false);
        setHoveredImage(null);
      }
    }
  };

  const handleMouseLeave = () => {
    if (cursorRef.current) {
      cursorRef.current.style.display = 'none';
    }
    setIsActive(false);
    setIsHoveringRectangle(false);
    setHoveredImage(null);
  };

  const handleImageHover = (imageId: string) => {
    if (isActive) {
      setHoveredImage(imageId);
    }
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen w-full bg-black overflow-x-hidden py-6 sm:py-0 px-4 sm:px-0">
      {/* Stars Background */}
      <Stars />
      
      {/* Blue Rectangle Background */}
      <div
        ref={blueRectRef}
        className="relative sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:w-full h-auto sm:h-[90vh] border-[1.5px] border-[#d0ed01] rounded-3xl overflow-hidden cursor-none transition-all duration-300 backdrop-blur-md bg-black/30 flex flex-col justify-center items-center py-8 sm:py-0 max-w-[1600px] mx-auto"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute -bottom-[6px] -left-[6px] w-3 h-3 bg-[#d0ed01] rounded" />
        <div className="absolute -bottom-[6px] -right-[6px] w-3 h-3 bg-[#d0ed01] rounded" />

        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-8 max-w-[1300px] w-full flex-1 mx-auto relative py-4 sm:py-8 px-2 sm:px-4 overflow-visible pb-8 sm:pb-12">
          {/* Left Images (Top on mobile) */}
          <div className="hero-left flex flex-row lg:flex-col gap-2 sm:gap-6 flex-1 items-center justify-center flex-wrap lg:w-1/4 mb-4 lg:mb-0">
            <Image
              src="/images/icon1.png"
              className={`hero-img w-[100px] sm:w-[150px] lg:w-[180px] rounded-xl opacity-100 scale-100 transition-all duration-700 ease-in-out ml-20 lg:ml-32 ${
                hoveredImage === 'left1' ? 'scale-150 z-10' : ''
              }`}
              alt="Left Image 1"
              width={180}
              height={180}
              onMouseEnter={() => handleImageHover('left1')}
              onMouseLeave={handleImageLeave}
            />
            <Image 
              src="/images/icon5.png" 
              className={`hero-img w-[100px] sm:w-[150px] lg:w-[180px] rounded-xl opacity-100 scale-100 transition-all duration-700 ease-in-out -ml-8 lg:-ml-12 ${
                hoveredImage === 'left2' ? 'scale-150 z-10' : ''
              }`} 
              alt="Left Image 2"
              width={180}
              height={180}
              onMouseEnter={() => handleImageHover('left2')}
              onMouseLeave={handleImageLeave}
            />
            <Image 
              src="/images/icon3.png" 
              className={`hero-img w-[100px] sm:w-[150px] lg:w-[180px] rounded-xl opacity-100 scale-100 transition-all duration-700 ease-in-out ml-8 lg:ml-12 ${
                hoveredImage === 'left3' ? 'scale-150 z-10' : ''
              }`} 
              alt="Left Image 3"
              width={180}
              height={180}
              onMouseEnter={() => handleImageHover('left3')}
              onMouseLeave={handleImageLeave}
            />
          </div>

          {/* Center Content */}
          <div className="flex-2 text-center z-10 max-w-full px-2 sm:px-4 lg:w-2/4 flex flex-col items-center justify-center h-full gap-4 lg:gap-4">
            <div className="inline-block px-4 sm:px-5 py-2 text-sm text-white rounded-full mb-3 sm:mb-5 relative before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r before:from-[#d0ed01] before:to-[#eaff6b] before:-z-10 after:absolute after:inset-[2px] after:rounded-full after:bg-black max-w-full break-words">
              <span className="text-white font-bold relative z-10">
                 100+
              </span>
              <span className="text-white relative z-10">{" "}Business owners, Startups, and Trust</span>
            </div>
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-white max-w-[800px] mx-auto leading-tight" style={{fontFamily: "'Neue Haas Display Bold', sans-serif"}}>
        Ignite Your Startup Launch: Conquer the 0-to-1 Journey & Get It Right the First Time
      </h1>
            <p className="text-base sm:text-lg max-w-[600px] mx-auto text-gray-300 mb-6 leading-relaxed" style={{fontFamily: "'Neue Haas Display Light', sans-serif"}}>
            You have the passion, the vision. But 99% of ventures stall. Symbiotes.ai is your strategic co-pilot, transforming that fire into a focused launch. Get your AI-powered flight plan, master Product Market Fit, and navigate the critical early stages with a system built to beat the odds.
            </p>
            <Link href="/book-call" className="mx-auto block">
              <button className="bg-brand-primary text-black px-6 py-2 rounded-full font-bold text-base shadow-md mt-2 transition-all duration-200 hover:bg-white hover:scale-110 hover:shadow-[0_0_24px_4px_#d0ed01] focus:outline-none">
                Book a Call
              </button>
            </Link>
          </div>

          {/* Right Images (Bottom on mobile) */}
          <div className="hero-right flex flex-row lg:flex-col gap-2 sm:gap-6 flex-1 items-center justify-center flex-wrap lg:w-1/4 mt-4 lg:mt-0">
            <Image 
              src="/images/icon2.png" 
              className={`hero-img w-[100px] sm:w-[150px] lg:w-[180px] rounded-xl opacity-100 scale-100 transition-all duration-700 ease-in-out mr-32 lg:mr-48 ${
                hoveredImage === 'right1' ? 'scale-150 z-10' : ''
              }`} 
              alt="Right Image 1"
              width={180}
              height={180}
              onMouseEnter={() => handleImageHover('right1')}
              onMouseLeave={handleImageLeave}
            />
            <Image 
              src="/images/icon4.png" 
              className={`hero-img w-[100px] sm:w-[150px] lg:w-[180px] rounded-xl opacity-100 scale-100 transition-all duration-700 ease-in-out lg:-ml-5 ${
                hoveredImage === 'right2' ? 'scale-150 z-10' : ''
              }`} 
              alt="Right Image 2"
              width={180}
              height={180}
              onMouseEnter={() => handleImageHover('right2')}
              onMouseLeave={handleImageLeave}
            />
            <Image 
              src="/images/icon6.png" 
              className={`hero-img w-[100px] sm:w-[150px] lg:w-[180px] rounded-xl opacity-100 scale-100 transition-all duration-700 ease-in-out mr-32 lg:mr-48 ${
                hoveredImage === 'right3' ? 'scale-150 z-10' : ''
              }`} 
              alt="Right Image 3"
              width={180}
              height={180}
              onMouseEnter={() => handleImageHover('right3')}
              onMouseLeave={handleImageLeave}
            />
          </div>
        </div>
      </div>

      {/* Shuffle Button - outside blue rectangle, overlapping bottom left */}
      <div className="absolute z-20" style={{left: 'calc(4% + 0.5rem)', bottom: '2.5%'}}>
        <button
          onClick={handleShuffle}
          className="flex items-center gap-2 bg-[#d0ed01] text-black rounded-lg px-7 py-3 font-bold text-lg shadow-xl hover:bg-[#b6e600] transition-colors duration-200"
        >
          <Shuffle size={24} />
          <span>Shuffle</span>
        </button>
      </div>

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] hidden items-center gap-1 will-change-transform"
        style={{ 
          transition: 'transform 0.05s cubic-bezier(0.17, 0.67, 0.83, 0.67)',
          transform: 'translate(-50%, -50%)',
          left: '0px',
          top: '0px'
        }}
      >
        <span className="flex items-center justify-center w-5 h-5 transition-transform duration-200">
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
            <polygon points="2,2 30,16 18,18 16,30" fill="#d0ed01" stroke="#000" strokeWidth="2"/>
          </svg>
        </span>
      </div>
    </section>
  );
};

export default SectionTwo;