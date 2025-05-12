"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const firstBlockRef = useRef<HTMLDivElement>(null);
  const secondBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const firstBlock = firstBlockRef.current;
    const secondBlock = secondBlockRef.current;

    if (!firstBlock || !secondBlock) return;

    // First block animation
    gsap.fromTo(
      firstBlock.children,
      {
        x: (index) => (index === 0 ? -300 : 300),
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: firstBlock,
          start: "top bottom",
          end: "center center",
          scrub: 1.5,
          toggleActions: "play none none reverse"
        }
      }
    );

    // Second block animation
    gsap.fromTo(
      secondBlock.children,
      {
        x: (index) => (index === 0 ? 300 : -300),
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: secondBlock,
          start: "top bottom",
          end: "center center",
          scrub: 1.5,
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text mb-12 text-center">
          Fueling Your Ambition, Whether First Flight or Veteran.
        </h2>
        <div ref={firstBlockRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-28 min-h-[80vh]">
          <div className="will-change-transform">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text mb-6">
              Turn Your Bold Vision into Reality, Confidently.
            </h3>
            <p className="text-gray-400 mb-6">
              We know the mix of excitement and fear. Symbiotes.ai provides the clarity, structure, and proven path to navigate the unknown, tackle PMF head-on, manage limited resources effectively, and drastically increase your chances of succeeding on your first attempt. Let&apos;s launch your dream.
            </p>
          </div>
          <div className="relative will-change-transform">
            <div className="rounded-xl overflow-hidden max-w-xs md:max-w-sm lg:max-w-md h-56 md:h-64 lg:h-72 mx-auto">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                alt="Team collaboration"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
        {/* Alternate block: image left, text right */}
        <div ref={secondBlockRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="relative order-1 lg:order-none will-change-transform">
            <div className="rounded-xl overflow-hidden max-w-xs md:max-w-sm lg:max-w-md h-56 md:h-64 lg:h-72 mx-auto">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                alt="Team collaboration"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
          <div className="will-change-transform">
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