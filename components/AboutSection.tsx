"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    <div
      ref={starsRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{
        background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0, 0, 0, 0.37) 100%)'
      }}
    />
  );
};

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const firstBlockRef = useRef<HTMLDivElement>(null);
  const secondBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const firstBlock = firstBlockRef.current;
    const secondBlock = secondBlockRef.current;

    if (!firstBlock || !secondBlock) return;

    // First block animations
    // Text animation
    gsap.fromTo(
      firstBlock.querySelector('.text-content'),
      {
        y: 100,
        opacity: 0,
        rotation: -5,
      },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: firstBlock,
          start: "top bottom-=100",
          end: "center center",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      }
    );

    // Image animation
    gsap.fromTo(
      firstBlock.querySelector('.image-content'),
      {
        scale: 0.8,
        opacity: 0,
        rotation: 10,
      },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: firstBlock,
          start: "top bottom-=100",
          end: "center center",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      }
    );

    // Second block animations
    // Text animation
    gsap.fromTo(
      secondBlock.querySelector('.text-content'),
      {
        y: -100,
        opacity: 0,
        rotation: 5,
      },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: secondBlock,
          start: "top bottom-=100",
          end: "center center",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      }
    );

    // Image animation
    gsap.fromTo(
      secondBlock.querySelector('.image-content'),
      {
        scale: 0.8,
        opacity: 0,
        rotation: -10,
      },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: secondBlock,
          start: "top bottom-=100",
          end: "center center",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-16 bg-[#0a0a0a] relative overflow-hidden">
      {/* Stars Background */}
      <Stars />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text mb-12 text-center">
          Fueling Your Ambition, Whether First Flight or Veteran.
        </h2>
        <div ref={firstBlockRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 min-h-[70vh]">
          <div className="text-content will-change-transform">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text mb-6">
              Turn Your Bold Vision into Reality, Confidently.
            </h3>
            <p className="text-gray-400 mb-6">
              We know the mix of excitement and fear. Symbiotes.ai provides the clarity, structure, and proven path to navigate the unknown, tackle PMF head-on, manage limited resources effectively, and drastically increase your chances of succeeding on your first attempt. Let&apos;s launch your dream.
            </p>
          </div>
          <div className="image-content relative will-change-transform">
            <div className="rounded-xl overflow-hidden max-w-xs md:max-w-sm lg:max-w-md h-56 md:h-64 lg:h-72 mx-auto">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Team collaboration"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
        {/* Alternate block: image left, text right */}
        <div ref={secondBlockRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="image-content relative order-1 lg:order-none will-change-transform">
            <div className="rounded-xl overflow-hidden max-w-xs md:max-w-sm lg:max-w-md h-56 md:h-64 lg:h-72 mx-auto">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                alt="Team collaboration"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
          <div className="text-content will-change-transform">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text mb-6">
              Launch Smarter, Scale Faster, Reclaim Your Edge.
            </h3>
            <p className="text-gray-400 mb-6">
              Leverage your experience, but eliminate the friction. Symbiotes.ai streamlines your process, optimizes resource allocation, helps you stay agile and in control, and provides a repeatable system for launching new ventures or products with greater speed and predictability. Amplify your impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;