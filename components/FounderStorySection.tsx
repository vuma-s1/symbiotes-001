'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Stars = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStars = () => {
      const starsContainer = starsRef.current;
      if (!starsContainer) return;

      starsContainer.innerHTML = '';

      for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 1.5 + 0.5;
        const duration = Math.random() * 4 + 3;
        
        star.style.cssText = `
          position: absolute;
          left: ${x}%;
          top: ${y}%;
          width: ${size}px;
          height: ${size}px;
          background: white;
          border-radius: 50%;
          opacity: ${Math.random() * 0.8 + 0.2};
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
        0%, 100% { opacity: 0.2; }
        50% { opacity: 1; }
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
        background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0, 0, 0, 0.3) 100%)'
      }}
    />
  );
};

const FounderStorySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;
    const text = textRef.current;

    if (!content || !image || !text) return;

    // Content animation
    gsap.fromTo(content, 
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top bottom-=100",
          end: "center center",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      }
    );

    // Image animation
    gsap.fromTo(image, 
      { scale: 0.8, opacity: 0, rotation: 5 },
      { 
        scale: 1, 
        opacity: 1, 
        rotation: 0, 
        duration: 1.5, 
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: section,
          start: "top bottom-=100",
          end: "center center",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      }
    );

    // Text animation
    gsap.fromTo(text, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
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
    <section ref={sectionRef} className="py-12 bg-black relative overflow-hidden">
      {/* Stars Background */}
      <Stars />

      {/* Futuristic Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(208,237,1,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(208,237,1,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d0ed01] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#eaff6b] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={contentRef} className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#d0ed01]/10 border border-[#d0ed01]/20 rounded-full px-3 py-1.5">
              <div className="w-1.5 h-1.5 bg-[#d0ed01] rounded-full animate-pulse"></div>
              <span className="text-[#d0ed01] text-xs font-mono font-bold">OUR STORY</span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text">
                Why We Built
              </span>
              <span className="text-white"> Symbiotes</span>
            </h2>
          </div>

           {/* Swarup Section - Text Left, Image Right */}
           <div ref={textRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             {/* Left Side - Content */}
             <div className="space-y-4">
               {/* Statistic */}
               <div className="text-[#d0ed01] font-bold text-sm tracking-wider">
                 100+ LAUNCHES STRUCTURED
               </div>

               {/* Main Quote */}
               <blockquote className="text-xl md:text-2xl font-bold text-white leading-tight">
                 We built Symbiotes because we kept seeing the same story on repeat:
               </blockquote>

               {/* Bullet Points */}
               <div className="space-y-3">
                 <div className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 bg-[#d0ed01] rounded-full mt-2 animate-pulse"></div>
                   <p className="text-gray-300 text-base leading-relaxed">
                     brilliant founders building the wrong thing,
                   </p>
                 </div>

                 <div className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 bg-[#d0ed01] rounded-full mt-2 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                   <p className="text-gray-300 text-base leading-relaxed">
                     launches stalling in chaos,
                   </p>
                 </div>

                 <div className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 bg-[#d0ed01] rounded-full mt-2 animate-pulse" style={{animationDelay: '1s'}}></div>
                   <p className="text-gray-300 text-base leading-relaxed">
                     growth attempted before fit.
                   </p>
                 </div>
               </div>

               {/* Solution Text */}
               <div className="bg-gradient-to-r from-[#d0ed01]/10 to-[#eaff6b]/5 border border-[#d0ed01]/20 rounded-xl p-4">
                 <p className="text-base text-gray-200 leading-relaxed">
                   <span className="text-[#d0ed01] font-semibold">We decided to fix that.</span> Symbiotes exists to give founders structure, clarity, and an ecosystem that ships.
                 </p>
               </div>

               {/* Attribution */}
               <div className="text-gray-400 text-sm">
                 <div className="font-semibold text-white">Swarup Rao</div>
                 <div>Co-Founder & CEO of Symbiotes</div>
               </div>

               {/* CTA */}
               <div>
                 <a href="#" className="text-[#d0ed01] underline hover:text-[#eaff6b] transition-colors duration-300 flex items-center gap-2 text-sm">
                   Why Swarup Built This →
                 </a>
               </div>
             </div>

             {/* Right Side - Image with Graphics */}
             <div ref={imageRef} className="relative">
               {/* Abstract Graphics */}
               <div className="absolute inset-0 pointer-events-none">
                 {/* Large blob */}
                 <div className="absolute top-4 right-8 w-24 h-24 bg-[#d0ed01]/20 rounded-full blur-xl"></div>
                 {/* Small circle */}
                 <div className="absolute top-16 left-4 w-4 h-4 bg-[#eaff6b] rounded-full animate-pulse"></div>
                 {/* Dashed lines */}
                 <div className="absolute top-8 left-12 w-12 h-px border-t-2 border-dashed border-[#d0ed01]/30"></div>
                 <div className="absolute bottom-16 right-4 w-8 h-px border-t-2 border-dashed border-[#eaff6b]/30"></div>
                 {/* Icon shapes */}
                 <div className="absolute bottom-8 left-8 w-6 h-6 border-2 border-[#d0ed01]/40 rounded-full"></div>
                 <div className="absolute top-24 right-16 w-3 h-3 bg-[#eaff6b]/60 rounded-full"></div>
               </div>

               {/* Profile Image */}
               <div className="relative z-10">
                 <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-[#d0ed01]/20 to-[#eaff6b]/10 border-2 border-[#d0ed01]/30 flex items-center justify-center overflow-hidden">
                   <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#d0ed01] to-[#eaff6b] flex items-center justify-center">
                     <span className="text-black font-bold text-3xl">S</span>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           {/* Anil Section - Image Left, Text Right */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             {/* Left Side - Image with Graphics */}
             <div className="relative order-2 lg:order-1">
               {/* Abstract Graphics */}
               <div className="absolute inset-0 pointer-events-none">
                 {/* Large blob */}
                 <div className="absolute top-4 left-8 w-24 h-24 bg-[#eaff6b]/20 rounded-full blur-xl"></div>
                 {/* Small circle */}
                 <div className="absolute top-16 right-4 w-4 h-4 bg-[#d0ed01] rounded-full animate-pulse"></div>
                 {/* Dashed lines */}
                 <div className="absolute top-8 right-12 w-12 h-px border-t-2 border-dashed border-[#eaff6b]/30"></div>
                 <div className="absolute bottom-16 left-4 w-8 h-px border-t-2 border-dashed border-[#d0ed01]/30"></div>
                 {/* Icon shapes */}
                 <div className="absolute bottom-8 right-8 w-6 h-6 border-2 border-[#eaff6b]/40 rounded-full"></div>
                 <div className="absolute top-24 left-16 w-3 h-3 bg-[#d0ed01]/60 rounded-full"></div>
               </div>

               {/* Profile Image */}
               <div className="relative z-10">
                 <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-[#eaff6b]/20 to-[#d0ed01]/10 border-2 border-[#eaff6b]/30 flex items-center justify-center overflow-hidden">
                   <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#eaff6b] to-[#d0ed01] flex items-center justify-center">
                     <span className="text-black font-bold text-3xl">A</span>
                   </div>
                 </div>
               </div>
             </div>

             {/* Right Side - Content */}
             <div className="space-y-4 order-1 lg:order-2">
               {/* Statistic */}
               <div className="text-[#eaff6b] font-bold text-sm tracking-wider">
                 MILLIONS RAISED BY FOUNDERS
               </div>

               {/* Main Quote */}
               <blockquote className="text-xl md:text-2xl font-bold text-white leading-tight">
                 We decided to fix that. Symbiotes exists to give founders structure, clarity, and an ecosystem that ships.
               </blockquote>

               {/* Supporting Text */}
               <div className="flex gap-3">
                 <div className="w-1 bg-[#eaff6b] rounded-full"></div>
                 <p className="text-gray-300 text-base leading-relaxed">
                   Switching from guesswork was surprisingly easy. Building in Symbiotes is a lot less stressful because it's designed to help founders do focused, structured work.
                 </p>
               </div>

               {/* Attribution */}
               <div className="text-gray-400 text-sm">
                 <div className="font-semibold text-white">Anil</div>
                 <div>Co-Founder & CTO of Symbiotes</div>
               </div>

               {/* CTA */}
               <div>
                 <a href="#" className="text-[#eaff6b] underline hover:text-[#d0ed01] transition-colors duration-300 flex items-center gap-2 text-sm">
                   Why Anil Built This →
                 </a>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStorySection;
