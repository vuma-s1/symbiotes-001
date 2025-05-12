'use client';

import React from 'react';

const HeadingSection = () => {
  return (
    <section className="py-20 bg-black w-full">
      <div className="w-full px-8 flex flex-col items-center">
        {/* Headline Box */}
        <div
          className="w-full rounded-3xl p-8 md:p-14 mb-6 flex flex-col items-center justify-center relative"
          style={{
            background: 'linear-gradient(#000, #000) padding-box, linear-gradient(90deg, #d0ed01, #eaff6b) border-box',
            border: '4px solid transparent',
            boxShadow: '0 0 60px 0 #d0ed0122',
          }}
        >
          <h1 className="w-full text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-2 bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text">
            Symbiotes.ai: Channel Your Passion, Command Your Launch, Beat the Odds.
          </h1>
        </div>
        {/* Down Arrow */}
        <div className="flex justify-center w-full mb-6">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 14V42" stroke="#d0ed01" strokeWidth="4" strokeLinecap="round"/>
            <path d="M16 34L28 46L40 34" stroke="#d0ed01" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {/* Subheadline */}
        <p className="w-full text-center text-gray-300 text-lg md:text-xl px-2">
          Don't let your vision become another statistic. Symbiotes.ai is engineered to be your strategic launch command, providing the structure and intelligence needed to navigate the crucial early stages successfully. We help you laser-focus on validating PMF, architecting a flawless launch sequence, and optimizing your precious resources. It's about transforming raw passion into a repeatable, controllable process designed to increase your probability of success significantly.
        </p>
      </div>
    </section>
  );
};

export default HeadingSection;
