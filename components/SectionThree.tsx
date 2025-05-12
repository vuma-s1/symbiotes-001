import React from 'react';

const LimeCube = ({ className = '' }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="limeCube" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
        <stop stopColor="#d0ed01" />
        <stop offset="1" stopColor="#baff39" />
      </linearGradient>
    </defs>
    <g filter="url(#glow)">
      <polygon points="60,10 110,40 110,100 60,110 10,100 10,40" fill="url(#limeCube)" stroke="#d0ed01" strokeWidth="3" />
    </g>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#d0ed01" floodOpacity="0.5" />
    </filter>
  </svg>
);

const ReferenceImageSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[70vh] py-16 bg-black overflow-x-hidden w-full">
      <div className="relative z-10 w-full max-w-xl mx-auto bg-white/5 rounded-2xl shadow-2xl border border-[#d0ed01]/30 p-8 flex flex-col items-center backdrop-blur-md">
        <div className="flex justify-center mb-4">
          <img src="/images/icon.jpg" alt="Symbiotes Icon" className="w-16 h-16 object-contain" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Symbiotes AI Chat</h2>
        <p className="text-lg text-gray-200 mb-6 text-center">Start writing to create with Symbiotes AI Chat.</p>
        <form className="w-full max-w-lg flex flex-col items-center gap-3">
          <div className="flex w-full items-center gap-2 justify-center">
            {/* Left LimeCube inside the box */}
            <LimeCube className="w-10 h-10 min-w-[40px]" />
            <input
              type="text"
              placeholder="Make a chromed triangle"
              readOnly
              className="flex-1 px-4 py-3 rounded-lg border border-[#d0ed01] bg-black/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d0ed01] cursor-not-allowed opacity-80"
            />
            <button
              type="button"
              className="ml-2 flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-[#d0ed01] to-[#baff39] text-black font-semibold shadow hover:scale-105 transition-transform"
            >
              <span>Generate</span>
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 2v16M2 10h16" stroke="#000" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
            {/* Right LimeCube inside the box */}
            <LimeCube className="w-10 h-10 min-w-[40px]" />
          </div>
        </form>
        <p className="text-xs text-gray-400 mt-2 text-center">This form is a mockup and does not generate anything.</p>
        <div className="flex gap-2 mt-4 w-full justify-center">
          <button className="bg-gray-700/40 text-gray-400 px-3 py-1 rounded-md text-sm cursor-not-allowed" disabled>Generate a Blue Print...</button>
          <button className="bg-gray-700/40 text-gray-400 px-3 py-1 rounded-md text-sm cursor-not-allowed" disabled>Make Ideas Into Reality...</button>
        </div>
        <div className="flex gap-2 mt-2 w-full justify-center">
          <button className="bg-gray-700/40 text-gray-400 px-3 py-1 rounded-md text-sm cursor-not-allowed" disabled>Positioning...</button>
          <button className="bg-gray-700/40 text-gray-400 px-3 py-1 rounded-md text-sm cursor-not-allowed" disabled>Create a bright image...</button>
        </div>
      </div>
    </section>
  );
};

export default ReferenceImageSection;