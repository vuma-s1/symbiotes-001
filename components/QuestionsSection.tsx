import React from 'react';

const NeonSurveyMockup = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] py-24 bg-black">
      {/* Simple solid lime connecting line, longer and no glow */}
      <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '-65px', height: '160px', width: '2px', zIndex: 20, pointerEvents: 'none', background: '#d0ed01' }} />
      {/* Horizontal glowing lines from sides */}
      <div className="absolute left-0 bottom-24 h-1 w-1/3 bg-gradient-to-r from-[#d0ed01] to-transparent blur-sm opacity-80 z-0" />
      <div className="absolute right-0 bottom-24 h-1 w-1/3 bg-gradient-to-l from-[#d0ed01] to-transparent blur-sm opacity-80 z-0" />
      <div className="relative z-10 w-full max-w-md mx-auto rounded-2xl p-8 bg-black/60 border border-[#d0ed01]/60 shadow-[0_0_40px_10px_#d0ed01]" style={{boxShadow: '0 0 40px 4px #d0ed01, 0 0 0 2px #d0ed01 inset'}}>
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
    </section>
  );
};

export default NeonSurveyMockup;