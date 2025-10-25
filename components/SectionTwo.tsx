'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const SectionTwo = () => {
  const rocketRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const firstContentRef = useRef<HTMLDivElement | null>(null);
  const secondContentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const section = sectionRef.current as unknown as HTMLElement | null;
      const rocket = rocketRef.current as HTMLDivElement | null;
      const firstContent = firstContentRef.current;
      const secondContent = secondContentRef.current;

      if (!section || !rocket || !firstContent || !secondContent) return;

      gsap.set(rocket, {
        xPercent: -50,
        yPercent: 0,
        y: 0,
        force3D: true,
        willChange: "transform",
        transformOrigin: "50% 50%",
      });

      const steps = 3; // 3 steps instead of 6
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=3000", // 3000px scroll distance for 3 steps
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          snap: {
            snapTo: (progress) => Math.round(progress * steps) / steps,
            duration: 0.25,
            ease: "power1.out",
          },
        },
      });

      // Generate 3 vertical positions from bottom (0) to top (-100vh) evenly spaced
      for (let i = 1; i <= steps; i++) {
        const yTo = `${-((100 / steps) * i)}vh`; // -33.33vh per step
        tl.to(rocket, { y: yTo, duration: 1 });
      }

      // Content transitions - First content hides completely, then second appears
      tl.to(
        firstContent,
        {
          opacity: 0,
          y: -100,
          duration: 0.5,
          ease: "power2.out",
        },
        0.2,
      );

      tl.fromTo(
        secondContent,
        {
          opacity: 0,
          y: 100,
        },
        {
      opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        0.7, // Start after first content is completely hidden
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden h-screen flex items-center justify-center py-6 px-4 sm:py-20 sm:px-8 bg-black"
    >
      {/* Track Image at Top Left - Outside container */}
      <div className="absolute top-2 left-4 z-20">
        <Image
          src="/images/track.png"
          alt="Track Image"
          width={350}
          height={350}
          className="w-[140px] sm:w-[170px] lg:w-[200px] h-auto object-contain"
        />
      </div>

      {/* Straight Track Line - From track.png to bottom */}
      <div 
        className="absolute z-10"
        style={{
          left: 'calc(16px + 80px)', // Track image left + half width + 10px right
          top: 'calc(8px + 100px)', // Track image bottom
          width: '2px',
          height: 'calc(100vh - 108px)', // Full height minus track image
          background: 'linear-gradient(to bottom, #d0ed01, #d0ed01)',
          boxShadow: '0 0 10px #d0ed01, 0 0 20px #d0ed01, 0 0 30px #d0ed01',
          borderRadius: '1px'
        }}
      />

      {/* Checkpoint Bubble - Center of track */}
      <div 
        className="absolute z-15"
        style={{
          left: 'calc(16px + 80px - 8px)', // Track center minus half bubble width
          top: 'calc(50vh - 8px)', // Center of screen minus half bubble height
          width: '16px',
          height: '16px',
          background: '#d0ed01',
          borderRadius: '50%',
          boxShadow: '0 0 15px #d0ed01, 0 0 30px #d0ed01, 0 0 45px #d0ed01'
        }}
      />

      {/* Rocket - Left side corner */}
      <div
        ref={rocketRef}
        className="absolute left-24 top-[50%] w-[180px] sm:w-[200px] md:w-[280px] lg:w-[320px] xl:w-[380px] z-20"
      >
        <img
          src="https://cdn.prod.website-files.com/680743e828b8ecbf8967ab43/68161c1f03b8cabc97b89c31_rocket.webp"
          alt="Rocket"
          className="w-full h-auto"
            />
          </div>

      {/* Content - Right side */}
      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-center min-h-screen">
        <div className="text-center">
          {/* First Content */}
          <div
            ref={firstContentRef}
            className="text-center z-10 max-w-full px-2 sm:px-4 flex flex-col items-center justify-center h-full gap-4 lg:gap-4"
          >
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

          {/* Second Content - Different content for second scroll */}
          <div
            ref={secondContentRef}
            className="text-center z-10 max-w-full px-2 sm:px-4 flex flex-col items-center justify-center h-full gap-4 lg:gap-4 absolute inset-0 flex items-center justify-center"
          >
            <div className="inline-block px-4 sm:px-5 py-2 text-sm text-white rounded-full mb-3 sm:mb-5 relative before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r before:from-[#d0ed01] before:to-[#eaff6b] before:-z-10 after:absolute after:inset-[2px] after:rounded-full after:bg-black max-w-full break-words">
              <span className="text-white font-bold relative z-10">
                 🚀 Launch with Confidence
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-white max-w-[800px] mx-auto leading-tight" style={{fontFamily: "'Neue Haas Display Bold', sans-serif"}}>
              Your Strategic Co-Pilot for Startup Success
            </h2>
            <p className="text-base sm:text-lg max-w-[600px] mx-auto text-gray-300 mb-6 leading-relaxed" style={{fontFamily: "'Neue Haas Display Light', sans-serif"}}>
              Transform your startup vision into reality with our AI-powered platform. Get strategic guidance, master Product Market Fit, and navigate critical early stages with confidence. Built to beat the odds and accelerate your success.
            </p>
            <Link href="/book-call" className="mx-auto block">
              <button className="bg-brand-primary text-black px-6 py-2 rounded-full font-bold text-base shadow-md mt-2 transition-all duration-200 hover:bg-white hover:scale-110 hover:shadow-[0_0_24px_4px_#d0ed01] focus:outline-none">
                Get Started Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;