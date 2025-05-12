import React from 'react';

const tickItems = [
  'Copywriting',
  'Design',
  'Performance Marketing',
  'Sales',
  'Tech/Automation'
];

const FiveProcessSection = () => (
  <section className="py-20 bg-[#111] w-full">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#d0ed01] mb-4">
       Your Mission Support The Symbiotes Growth Crew.
      </h2>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
        {tickItems.map((name, idx) => (
          <div key={idx} className="relative flex flex-col items-center justify-center text-center min-h-[180px]">
            {/* Tick Mark with Circle */}
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 flex items-center justify-center" aria-hidden="true">
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
                <circle cx="48" cy="48" r="44" stroke="#d0ed01" strokeWidth="6" fill="rgba(208,237,1,0.08)" />
                <path d="M32 52L46 66L70 38" stroke="#d0ed01" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)" />
                <filter id="glow" x="-10" y="-10" width="120" height="120" filterUnits="userSpaceOnUse">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </svg>
            </span>
            <span className="relative z-10 text-2xl md:text-2xl font-bold text-white mt-2">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FiveProcessSection;