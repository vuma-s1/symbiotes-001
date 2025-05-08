'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

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

const HeroSection = () => {
  const rocketRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Initial rocket launch animation
    const initialAnimation = gsap.timeline();
    initialAnimation
      .fromTo(rocketRef.current, 
        { 
          y: 150,
          opacity: 0,
          scale: 0.5
        },
        { 
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: "power2.out"
        }
      );

    // Scroll animation with landing
    const rocketAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onLeave: () => {
          // Landing animation when scroll reaches bottom
          gsap.to(rocketRef.current, {
            y: 100,
            scale: 0.8,
            duration: 1,
            ease: "power2.inOut"
          });
        },
        onEnterBack: () => {
          // Reset position when scrolling back up
          gsap.to(rocketRef.current, {
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.inOut"
          });
        }
      }
    });

    rocketAnimation.to(rocketRef.current, {
      y: -200,
      scale: 1.2,
      duration: 2
    });

    return () => {
      initialAnimation.kill();
      rocketAnimation.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden h-screen flex items-center justify-center py-6 px-4 sm:py-20 sm:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src="https://cdn.prod.website-files.com/680743e828b8ecbf8967ab43/68161aa76bddfb2447bf7340_hero-bg.webp"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={100}
        />
      </div>

      {/* Stars Background */}
      <Stars />

      {/* Rocket Image */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[230px] sm:w-[250px] md:w-[350px] lg:w-[400px] xl:w-[500px] z-20">
        <Image
          ref={rocketRef}
          src="https://cdn.prod.website-files.com/680743e828b8ecbf8967ab43/68161c1f03b8cabc97b89c31_rocket.webp"
          alt="Rocket"
          width={500}
          height={500}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto mt-[55vh] sm:mt-[45vh]">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text">
            Launchpad for all your<br />startup ideas
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-[600px] mx-auto text-gray-300">
            Discover amazing features and possibilities with our innovative solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;