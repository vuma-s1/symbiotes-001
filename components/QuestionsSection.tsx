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

const QuestionsSection = () => {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-8 sm:py-16 bg-black overflow-x-hidden w-full px-4 sm:px-0">
        {/* AI Chat Section */}
        <div className="relative z-10 w-full max-w-xl mx-auto bg-white/5 rounded-2xl shadow-2xl border border-[#d0ed01]/30 p-4 sm:p-8 flex flex-col items-center backdrop-blur-md">
          <div className="flex justify-center mb-4">
            <img src="/images/icon.png" alt="Symbiotes Icon" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center">Symbiotes AI Chat</h2>
          <p className="text-base sm:text-lg text-gray-200 mb-4 sm:mb-6 text-center">Start writing to create with Symbiotes AI Chat.</p>
          <form className="w-full max-w-lg flex flex-col items-center gap-3">
            <div className="flex flex-col sm:flex-row w-full items-center gap-2 justify-center">
              <LimeCube className="w-8 h-8 sm:w-10 sm:h-10 min-w-[32px] sm:min-w-[40px] hidden sm:block" />
              <div className="flex flex-col sm:flex-row w-full items-center gap-2">
                <LimeCube className="w-8 h-8 sm:w-10 sm:h-10 min-w-[32px] sm:min-w-[40px] sm:hidden mb-2 sm:mb-0" />
                <input
                  type="text"
                  placeholder="Make a chromed triangle"
                  readOnly
                  className="w-full sm:flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-[#d0ed01] bg-black/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d0ed01] cursor-not-allowed opacity-80 text-sm sm:text-base mb-2 sm:mb-0"
                />
                <button
                  type="button"
                  className="w-full sm:w-auto flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-2 rounded-lg bg-gradient-to-r from-[#d0ed01] to-[#baff39] text-black font-semibold shadow hover:scale-105 transition-transform text-sm sm:text-base whitespace-nowrap min-w-[90px] sm:min-w-[100px]"
                >
                  <span>Generate</span>
                  <svg width="16" height="16" fill="none" viewBox="0 0 20 20" className="sm:w-5 sm:h-5"><path d="M10 2v16M2 10h16" stroke="#000" strokeWidth="2" strokeLinecap="round"/></svg>
                </button>
              </div>
              <LimeCube className="w-8 h-8 sm:w-10 sm:h-10 min-w-[32px] sm:min-w-[40px] hidden sm:block" />
            </div>
          </form>
          <p className="text-xs text-gray-400 mt-2 text-center">This form is a mockup and does not generate anything.</p>
          <div className="flex flex-wrap gap-2 mt-4 w-full justify-center">
            <button className="bg-gray-700/40 text-gray-400 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm cursor-not-allowed" disabled>Generate a Blue Print...</button>
            <button className="bg-gray-700/40 text-gray-400 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm cursor-not-allowed" disabled>Make Ideas Into Reality...</button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2 w-full justify-center">
            <button className="bg-gray-700/40 text-gray-400 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm cursor-not-allowed" disabled>Positioning...</button>
            <button className="bg-gray-700/40 text-gray-400 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm cursor-not-allowed" disabled>Create a bright image...</button>
          </div>
        </div>

        {/* Vertical glassmorphic line */}
        <div
          className="flex justify-center px-4 sm:px-6"
          style={{ marginTop: '2px', marginBottom: '2px' }}
        >
          <div
            style={{
              width: '6px',
              height: '100px',
              borderRadius: '8px',
              background: 'rgba(176,255,39,0.18)',
              border: '1px solid rgba(208,237,1,0.25)',
              boxShadow: '0 0 16px 2px rgba(208,237,1,0.18)',
              backdropFilter: 'blur(12px) saturate(180%)',
              WebkitBackdropFilter: 'blur(12px) saturate(180%)',
            }}
          ></div>
        </div>

        {/* Tell us about yourself section */}
        <div className="relative z-10 w-full max-w-md mx-auto  rounded-2xl p-4 sm:p-8"
          style={{
            background: 'rgba(176, 255, 39, 0.13)',
            border: '1.5px solid rgba(208,237,1,0.35)',
            boxShadow: '0 0 32px 0 rgba(208,237,1,0.18), 0 1.5px 16px 0 rgba(255,255,255,0.10) inset, 0 0 0 1.5px rgba(255,255,255,0.10) inset',
            backdropFilter: 'blur(32px) saturate(180%)',
            WebkitBackdropFilter: 'blur(32px) saturate(180%)',
          }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Tell us about yourself</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-white text-sm mb-2">What best describes you?</label>
              <div className="rounded-lg bg-black/40 border border-[#d0ed01] px-4 py-3 text-white flex items-center cursor-not-allowed opacity-80 select-none">Select response</div>
            </div>
            <div>
              <label className="block text-white text-sm mb-2">How many people work at your company?</label>
              <div className="rounded-lg bg-black/40 border border-[#d0ed01] px-4 py-3 text-white flex items-center cursor-not-allowed opacity-80 select-none">Select response</div>
            </div>
            <div>
              <label className="block text-white text-sm mb-2">What platforms are you using with Relume:</label>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {['Figma', 'React', 'Other', 'Webflow', 'Wordpress'].map((platform) => (
                  <label key={platform} className="flex items-center gap-2 text-white cursor-not-allowed opacity-80 select-none">
                    <span className="w-5 h-5 rounded border border-[#d0ed01] bg-black/40 flex items-center justify-center">
                      <span className="block w-3 h-3 rounded bg-transparent" />
                    </span>
                    {platform}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-white text-sm mb-2">How did you hear about us?</label>
              <div className="rounded-lg bg-black/40 border border-[#d0ed01] px-4 py-3 text-white flex items-center cursor-not-allowed opacity-80 select-none">Select response</div>
            </div>
            <button type="button" className="w-full mt-2 rounded-lg bg-gradient-to-r from-[#d0ed01] to-[#baff39] text-black font-semibold py-3 text-lg shadow-lg cursor-not-allowed opacity-90 select-none">Get started</button>
          </form>
        </div>

        {/* Vertical glassmorphic line */}
        <div
          className="flex justify-center px-4 sm:px-6"
          style={{ marginTop: '2px', marginBottom: '2px' }}
        >
          <div
            style={{
              width: '6px',
              height: '100px',
              borderRadius: '8px',
              background: 'rgba(176,255,39,0.18)',
              border: '1px solid rgba(208,237,1,0.25)',
              boxShadow: '0 0 16px 2px rgba(208,237,1,0.18)',
              backdropFilter: 'blur(12px) saturate(180%)',
              WebkitBackdropFilter: 'blur(12px) saturate(180%)',
            }}
          ></div>
        </div>

        {/* Final message */}
        <div className="w-full px-4 sm:px-6">
          <div
            className="w-full rounded-2xl p-4 sm:p-8 text-center"
            style={{
              background: 'rgba(176, 255, 39, 0.13)',
              border: '1.5px solid rgba(208,237,1,0.35)',
              boxShadow: '0 0 32px 0 rgba(208,237,1,0.18), 0 1.5px 16px 0 rgba(255,255,255,0.10) inset, 0 0 0 1.5px rgba(255,255,255,0.10) inset',
              backdropFilter: 'blur(32px) saturate(180%)',
              WebkitBackdropFilter: 'blur(32px) saturate(180%)',
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#d0ed01] via-white to-[#baff39] bg-clip-text text-transparent">
              Take control of your destiny. Launch smart, launch strong, and build the future you envision.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuestionsSection;