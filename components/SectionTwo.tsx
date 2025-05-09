'use client';

import { useEffect, useRef, useState } from 'react';
import { Shuffle } from 'lucide-react';
import Image from 'next/image';

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
        cursorRef.current.style.left = (parseFloat(cursorRef.current.style.left || '0') + dx * 0.15) + 'px';
        cursorRef.current.style.top = (parseFloat(cursorRef.current.style.top || '0') + dy * 0.15) + 'px';
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

  const shuffleArray = (array: Element[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleShuffle = (e: React.MouseEvent) => {
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

  const handleMouseMove = (e: React.MouseEvent) => {
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
          cursorRef.current.style.left = e.clientX + 'px';
          cursorRef.current.style.top = e.clientY + 'px';
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
    <section className="relative overflow-hidden py-6 px-4 min-h-screen sm:py-20 sm:px-8 bg-black">
      {/* Blue Rectangle Background */}
      <div
        ref={blueRectRef}
        className={"absolute left-0 right-0 mx-auto top-4 sm:top-8 w-[92vw] sm:w-[97.5vw] h-[95vh] sm:h-[78vh] max-h-[46rem] border-[1.5px] border-[#6248ff] rounded-3xl overflow-visible cursor-none transition-all duration-300 backdrop-blur-md bg-black/30"}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute -bottom-[6px] -left-[6px] w-3 h-3 bg-[#6248ff] rounded" />
        <div className="absolute -bottom-[6px] -right-[6px] w-3 h-3 bg-[#6248ff] rounded" />
        
        {/* Shuffle Button */}
        <button
          onClick={handleShuffle}
          className="absolute left-[2%] -bottom-4 z-10 flex items-center gap-2 bg-[#ede7ff] text-[#6248ff] rounded-lg px-5 py-2 font-medium text-base shadow-lg hover:bg-[#6248ff] hover:text-white transition-colors duration-200"
        >
          <Shuffle className="w-5 h-5" />
          <span>Shuffle</span>
        </button>

        <div className="flex justify-between items-center gap-4 sm:gap-8 max-w-[1300px] mx-auto relative flex-col lg:flex-row h-full pt-8 sm:pt-0">
          {/* Left Images */}
          <div className="hero-left flex flex-row lg:flex-col gap-3 sm:gap-6 flex-1 items-center justify-center flex-wrap">
            <Image
              src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65af4a6a6baf2d1aa79d942d_Image%203%20(3).webp" 
              className={`hero-img w-[150px] sm:w-[180px] rounded-xl opacity-0 scale-95 transition-all duration-700 ease-in-out ${
                isHoveringRectangle ? 'scale-110' : ''
              } ${hoveredImage === 'left1' ? 'scale-150 z-10' : ''} ${
                isActive ? 'animate-pulse-subtle' : ''
              }`} 
              alt="Left Image 1"
              width={180}
              height={180}
              onMouseEnter={() => handleImageHover('left1')}
              onMouseLeave={handleImageLeave}
            />
            <Image 
              src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/66d6c3c1a04a8ab6b5868d6f_Image%2011.png" 
              className={`hero-img w-[150px] sm:w-[180px] rounded-xl opacity-0 scale-95 transition-all duration-700 ease-in-out ${
                isHoveringRectangle ? 'scale-110' : ''
              } ${hoveredImage === 'left2' ? 'scale-150 z-10' : ''} ${
                isActive ? 'animate-pulse-subtle' : ''
              }`} 
              alt="Left Image 2"
              width={180}
              height={180}
              onMouseEnter={() => handleImageHover('left2')}
              onMouseLeave={handleImageLeave}
            />
            <Image 
              src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/658e82332d3f45a22e364d75_Image%201.webp" 
              className={`hero-img w-[150px] sm:w-[180px] rounded-xl opacity-0 scale-95 transition-all duration-700 ease-in-out ${
                isHoveringRectangle ? 'scale-110' : ''
              } ${hoveredImage === 'left3' ? 'scale-150 z-10' : ''} ${
                isActive ? 'animate-pulse-subtle' : ''
              }`} 
              alt="Left Image 3"
              width={180}
              height={180}
              onMouseEnter={() => handleImageHover('left3')}
              onMouseLeave={handleImageLeave}
            />
          </div>

          {/* Center Content */}
          <div className="flex-2 text-center z-10 max-w-full px-4">
            <div className="inline-block px-4 sm:px-5 py-2 text-sm text-white rounded-full mb-5 relative before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r before:from-[#d0ed01] before:to-[#eaff6b] before:-z-10 after:absolute after:inset-[2px] after:rounded-full after:bg-black">
              <span className="text-white font-bold relative z-10">
                400k+
              </span>
              <span className="text-white relative z-10">{" "}Designers & Developers trust Relume</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-5 text-white">
              Websites designed & built faster with AI
            </h1>
            <p className="text-lg sm:text-xl max-w-[600px] mx-auto text-white">
              Use AI as your design ally, not a replacement. Instantly generate Sitemaps, Wireframes and Style Guides for marketing websites—all in minutes.
            </p>
          </div>

          {/* Right Images */}
          <div className="hero-right flex flex-row lg:flex-col gap-3 sm:gap-6 flex-1 items-center justify-center flex-wrap">
            <Image 
              src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/66d6c3c1d03db2b8ae8b2926_Image%207.png" 
              className={`hero-img w-[150px] sm:w-[180px] rounded-xl opacity-0 scale-95 transition-all duration-700 ease-in-out ${
                isHoveringRectangle ? 'scale-110' : ''
              } ${hoveredImage === 'right1' ? 'scale-150 z-10' : ''} ${
                isActive ? 'animate-pulse-subtle' : ''
              }`} 
              alt="Right Image 1"
              width={180}
              height={180}
              onMouseEnter={() => handleImageHover('right1')}
              onMouseLeave={handleImageLeave}
            />
            <Image 
              src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/658e839495208ba1f0d1329b_Image%204.webp" 
              className={`hero-img w-[150px] sm:w-[180px] rounded-xl opacity-0 scale-95 transition-all duration-700 ease-in-out lg:-ml-5 ${
                isHoveringRectangle ? 'scale-110' : ''
              } ${hoveredImage === 'right2' ? 'scale-150 z-10' : ''} ${
                isActive ? 'animate-pulse-subtle' : ''
              }`} 
              alt="Right Image 2"
              width={180}
              height={180}
              onMouseEnter={() => handleImageHover('right2')}
              onMouseLeave={handleImageLeave}
            />
            <Image 
              src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/658e823332cb3de9f06c7e10_Image%205.webp" 
              className={`hero-img w-[150px] sm:w-[180px] rounded-xl opacity-0 scale-95 transition-all duration-700 ease-in-out ${
                isHoveringRectangle ? 'scale-110' : ''
              } ${hoveredImage === 'right3' ? 'scale-150 z-10' : ''} ${
                isActive ? 'animate-pulse-subtle' : ''
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
        <span className="text-base font-semibold text-white px-3 py-1 ml-1 shadow-lg">
          Guest
        </span>
      </div>

      {/* Floating Cursors */}
      <img
        src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65949937d9baec1f85575645_cursor-jessica-yellow_3x.png"
        className="absolute w-[70px] pointer-events-none top-[60%] left-[10%] animate-float hidden lg:block"
        alt="Jessica Cursor"
      />
      <img
        src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/659499374a9e7199f028b4f0_cursor-blue-mario_3x.png"
        className="absolute w-[70px] pointer-events-none top-[50%] right-[10%] animate-float hidden lg:block"
        alt="Mario Cursor"
      />
    </section>
  );
};

export default SectionTwo;