"use client";

import { useEffect, useRef } from 'react';
import Typography from './ui/Typography';

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

  return (
    <section id="about" className="py-8 bg-dark-surface relative overflow-hidden">
      {/* Stars Background */}
      <Stars />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Section Heading */}
          <Typography.H2 className="mb-12 bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text text-center">
            Fueling Your Ambition, Whether First Flight or Veteran
          </Typography.H2>
        
        {/* First Block: Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-12">
          <div className="text-content">
              <Typography.H3 className="mb-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">
                Turn Your Bold Vision into Reality, Confidently
              </Typography.H3>
              <Typography.P className="text-gray-400">
                We know the mix of excitement and fear. Symbiotes.ai provides the clarity, structure, and proven path to navigate the unknown, tackle PMF head-on, manage limited resources effectively, and drastically increase your chances of succeeding on your first attempt. Let&apos;s launch your dream.
              </Typography.P>
          </div>
          <div className="image-content relative">
            <div className="rounded-lg overflow-hidden max-w-sm h-48 md:h-56 mx-auto">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Team collaboration"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Second Block: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="image-content relative order-1 lg:order-none">
            <div className="rounded-lg overflow-hidden max-w-sm h-48 md:h-56 mx-auto">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                alt="Team collaboration"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
          <div className="text-content">
              <Typography.H3 className="mb-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">
                Launch Smarter, Scale Faster, Reclaim Your Edge
              </Typography.H3>
              <Typography.P className="text-gray-400">
                Leverage your experience, but eliminate the friction. Symbiotes.ai streamlines your process, optimizes resource allocation, helps you stay agile and in control, and provides a repeatable system for launching new ventures or products with greater speed and predictability. Amplify your impact.
              </Typography.P>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;