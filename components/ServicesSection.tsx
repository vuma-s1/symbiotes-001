'use client';

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const stepData = [
  {
    stat: '',
    headline: 'Nail Your Coordinates (Validate & Strategize)',
    title: 'Nail Your Coordinates',
    description: 'Ground your passion in data. We guide you through rigorously validating your core assumptions, defining your target customer with precision, leveraging AI to truly understand the market landscape, and confirming Product-Market Fit before you burn precious fuel. Build on solid ground.',
    extra: [
      // Add bullet points here if you want
    ],
    image: 'https://cdn-icons-png.flaticon.com/512/1925/1925081.png', // Data Analysis and Strategy icon
  },
  {
    stat: '',
    headline: 'Design Your Mission Architecture (Plan & Blueprint)',
    title: 'Design Your Mission Architecture',
    description: 'Translate validated strategy into an actionable flight plan. Receive your comprehensive Business Blueprint covering branding, positioning, online presence, content strategy, lead generation tactics tuned for frugal startups, and a detailed, de-risked launch sequence. Know your maneuvers.',
    extra: [
      // Add bullet points here if you want
    ],
    image: 'https://cdn-icons-png.flaticon.com/512/1925/1925083.png', // Business Planning and Architecture icon
  },
  {
    stat: '',
    headline: 'Execute with Precision (Launch & Iterate)',
    title: 'Execute with Precision',
    description: 'Take command! Your blueprint feeds the Symbiotes Launchpad (Mission Control), guiding daily actions, tracking vital signs (KPIs), coordinating your crew, automating workflows, and ensuring you stay on top of execution. Achieve lift-off, gather intel (feedback), and fuel your next growth stage.',
    extra: [
      // Add bullet points here if you want
    ],
    image: 'https://cdn-icons-png.flaticon.com/512/1925/1925085.png', // Execution and Launch icon
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stepsRefs = useRef<HTMLDivElement[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  // Initialize refs array
  useEffect(() => {
    if (stepsRefs.current.length !== stepData.length) {
      stepsRefs.current = Array(stepData.length).fill(null).map((_, i) => 
        stepsRefs.current[i] || null
      );
    }
  }, []);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // GSAP Animation Setup
  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container || isMobile) return;

    let scrollTriggers: gsap.core.Timeline[] = [];
    let ctx = gsap.context(() => {
      // Desktop: Pin the section and animate through steps
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 30%',
          end: '+=' + (stepData.length * 70) + '%',
          pin: true,
          pinSpacing: true,
          scrub: 1,
          markers: false,
          onUpdate: (self: any) => {
            const progress = self.progress;
            const stepIndex = Math.floor(progress * stepData.length);
            setCurrentStep(Math.min(stepIndex, stepData.length - 1));
          }
        }
      });

      // Create animations for each step
      stepData.forEach((_, index) => {
        const stepEl = stepsRefs.current[index];
        if (!stepEl) return;
        
        // For all steps except the first one, start by hiding them
        if (index > 0) {
          gsap.set(stepEl, { opacity: 0, y: 30 });
        } else {
          gsap.set(stepEl, { opacity: 1, y: 0 });
        }
        
        // For first step, show immediately
        if (index === 0) {
          timeline.to(stepEl, { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            ease: "power2.inOut"
          });
        }
        
        // All steps fade in
        if (index > 0) {
          timeline.to(stepEl, { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            ease: "power2.inOut"
          });
        }
        
        // All steps except the last one fade out
        if (index < stepData.length - 1) {
          timeline.to(stepEl, { 
            opacity: 0, 
            y: -30, 
            duration: 0.8,
            ease: "power2.inOut"
          }, "+=0.2");
        }
      });

      scrollTriggers.push(timeline);
    }, section);

    // Cleanup
    return () => {
      scrollTriggers.forEach(tl => {
        if (tl.scrollTrigger) {
          tl.scrollTrigger.kill(false);
        }
      });
      ctx.revert();
    };
  }, [isMobile]);

  return (
    <section id="services" className="py-10 md:py-20 bg-[#111] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12" ref={containerRef}>
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Comprehensive solutions for your design and development needs
          </p>
        </div>
        
        {/* Mobile View - Vertical Stack */}
        {isMobile ? (
          <div 
            ref={sectionRef}
            className="space-y-8 md:space-y-12"
          >
            {stepData.map((step, index) => (
              <div 
                key={index} 
                className={`transform transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-full bg-[#181818] rounded-2xl shadow-2xl p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold text-[#d0ed01] text-center mb-4">
                    {step.title}
                  </h3>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] object-cover rounded-2xl mb-6"
                  />
                  <div className="w-full">
                    <div className="flex flex-col items-center gap-2 mb-4">
                      <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text text-center">
                        {step.headline}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-200 mb-4 text-center">
                      {step.description}
                    </p>
                    {step.extra && step.extra.length > 0 && (
                      <ul className="list-none pl-0 space-y-2 mt-2">
                        {step.extra.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#d0ed01]">
                            <span className="mt-1 w-2 h-2 rounded-full bg-[#d0ed01] inline-block"></span>
                            <span className="text-gray-300">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Desktop View - Horizontal Layout with GSAP Scroll Animation
          <div 
            ref={sectionRef} 
            className="relative min-h-[500px]"
          >
            {stepData.map((step, index) => (
              <div
                key={index}
                ref={el => {
                  if (el) stepsRefs.current[index] = el;
                }}
                className="absolute top-0 left-0 w-full"
                style={{ opacity: index === 0 ? 1 : 0 }}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}>
                  {/* Image Section */}
                  <div className="w-full md:w-2/5 flex justify-center">
                    <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-2xl">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-contain p-4"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#d0ed01]/20 to-transparent rounded-2xl pointer-events-none"></div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="w-full md:w-3/5">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#d0ed01] mb-3">
                          {step.title}
                        </h3>
                        <h4 className="text-2xl text-[#eaff6b] mb-6">
                          {step.headline}
                        </h4>
                      </div>
                      <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                        {step.description}
                      </p>
                      {step.extra && step.extra.length > 0 && (
                        <ul className="space-y-3">
                          {step.extra.map((point, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-200">
                              <span className="mt-2 text-[#d0ed01] text-xl">•</span>
                              <span className="text-lg">{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;