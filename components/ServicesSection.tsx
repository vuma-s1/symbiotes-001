'use client';

import React, { useRef, useState, useEffect } from 'react';

const stepData = [
  {
    stat: '',
    headline: 'Nail Your Coordinates (Validate & Strategize)',
    title: 'Nail Your Coordinates',
    description: 'Ground your passion in data. We guide you through rigorously validating your core assumptions, defining your target customer with precision, leveraging AI to truly understand the market landscape, and confirming Product-Market Fit before you burn precious fuel. Build on solid ground.',
    extra: [
      // Add bullet points here if you want
    ],
    image: 'https://cdn-icons-png.flaticon.com/512/854/854878.png', // Target Lock/Data Analysis icon suggestion
  },
  {
    stat: '',
    headline: 'Design Your Mission Architecture (Plan & Blueprint)',
    title: 'Design Your Mission Architecture',
    description: 'Translate validated strategy into an actionable flight plan. Receive your comprehensive Business Blueprint covering branding, positioning, online presence, content strategy, lead generation tactics tuned for frugal startups, and a detailed, de-risked launch sequence. Know your maneuvers.',
    extra: [
      // Add bullet points here if you want
    ],
    image: 'https://cdn-icons-png.flaticon.com/512/3132/3132693.png', // Detailed Blueprint/Strategic Map icon suggestion
  },
  {
    stat: '',
    headline: 'Execute with Precision (Launch & Iterate)',
    title: 'Execute with Precision',
    description: 'Take command! Your blueprint feeds the Symbiotes Launch Pad (Mission Control), guiding daily actions, tracking vital signs (KPIs), coordinating your crew, automating workflows, and ensuring you stay on top of execution. Achieve lift-off, gather intel (feedback), and fuel your next growth stage.',
    extra: [
      // Add bullet points here if you want
    ],
    image: 'https://cdn-icons-png.flaticon.com/512/3211/3211390.png', // Rocket Launch/Control Panel icon suggestion
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const animationRef = useRef<number | null>(null);

  const stepHeight = 350; // px, matches image height for left, adjust for right as needed
  // For truly continuous scroll, duplicate the entire stepData array after itself
  const extendedStepData = [...stepData, ...stepData];
  const totalSteps = stepData.length;
  const totalHeight = stepHeight * totalSteps;

  // Smooth continuous scroll logic (forward only)
  useEffect(() => {
    let lastTimestamp: number | null = null;
    const scrollSpeed = 1.2; // px per frame, adjust for speed

    function animateScroll(timestamp: number) {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      let nextScrollY = scrollY + scrollSpeed;
      if (nextScrollY >= totalHeight) nextScrollY = 0;
      setScrollY(nextScrollY);
      animationRef.current = requestAnimationFrame(animateScroll);
    }
    animationRef.current = requestAnimationFrame(animateScroll);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      lastTimestamp = null;
    };
    // eslint-disable-next-line
  }, [scrollY, totalHeight]);

  // Sync currentStep with scrollY
  useEffect(() => {
    setCurrentStep(Math.floor(scrollY / stepHeight) % stepData.length);
    // eslint-disable-next-line
  }, [scrollY]);

  // Only update left side when right side content is fully in view
  const leftStep = Math.round(scrollY / stepHeight) % totalSteps;

  return (
    <section id="services" className="py-20 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions for your design and development needs
          </p>
        </div>
        <div ref={sectionRef} className="flex flex-row items-center min-h-[500px] w-full gap-x-16">
          {/* Left: Fixed Image & Headline, only updates when right side step changes */}
          <div className="flex-1 flex flex-col justify-center items-center h-full overflow-visible" style={{height: stepHeight}}>
            <div className="flex flex-col items-center justify-center w-full" style={{height: stepHeight}}>
              <h3 className="text-2xl md:text-3xl font-bold text-[#d0ed01] text-center mb-6">
                {stepData[leftStep].title}
              </h3>
                <img
                src={stepData[leftStep].image}
                alt={stepData[leftStep].title}
                className="w-[350px] h-[350px] object-cover rounded-2xl"
                />
              </div>
          </div>
          {/* Right: Smooth Sliding Content, seamless loop */}
          <div
            className="flex-1 flex flex-col justify-center items-start h-full pl-8 overflow-hidden"
            style={{height: stepHeight}}
          >
            <div
              className="transition-transform duration-700 ease-in-out w-full"
              style={{ transform: `translateY(-${scrollY}px)` }}
            >
              {extendedStepData.map((step, idx) => (
                <div key={idx} className="w-full flex items-center justify-center" style={{height: stepHeight}}>
                  <div className="w-full max-w-xl bg-[#181818] rounded-2xl shadow-2xl p-10 flex flex-col justify-center items-start transition-all duration-500">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl font-extrabold bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text">
                        {step.stat}
                      </span>
                      <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text">
                        {step.headline}
                      </span>
                    </div>
                    <p className="text-lg md:text-xl text-gray-200 mb-4">
                      {step.description}
                    </p>
                    {step.extra && step.extra.length > 0 && (
                      <ul className="list-none pl-0 space-y-2 mt-2">
                        {step.extra.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-base md:text-lg text-[#d0ed01]">
                            <span className="mt-1 w-2 h-2 rounded-full bg-[#d0ed01] inline-block"></span>
                            <span className="text-gray-300">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;