'use client';

import React from 'react';

const HeadingSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0a0a0a] opacity-90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d0ed01] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#eaff6b] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Column - Main Content */}
            <div className="space-y-8 lg:space-y-12">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text">
                    Symbiotes.ai
                  </span>
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">
                  Channel Your Passion,
                  <br />
                  Command Your Launch,
                  <br />
                  Beat the Odds.
                </h2>
              </div>

              {/* Decorative Line */}
              <div className="w-32 h-1 bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] rounded-full" />

              {/* Subheadline */}
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
                Don&apos;t let your vision become another statistic. Symbiotes.ai is engineered to be your strategic launch command, providing the structure and intelligence needed to navigate the crucial early stages successfully. We help you laser-focus on validating PMF, architecting a flawless launch sequence, and optimizing your precious resources. It&apos;s about transforming raw passion into a repeatable, controllable process designed to increase your probability of success significantly.
              </p>
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative">
              {/* Mobile Image */}
              <div className="lg:hidden relative w-full aspect-square mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d0ed01] to-[#eaff6b] rounded-2xl transform rotate-2" />
                <div className="absolute inset-0 bg-black rounded-2xl transform -rotate-2" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#d0ed01] to-[#eaff6b] rounded-2xl opacity-20" />
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400"
                  alt="Symbiotes.ai Platform" 
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Desktop Image */}
              <div className="hidden lg:block relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d0ed01] to-[#eaff6b] rounded-3xl transform rotate-3" />
                <div className="absolute inset-0 bg-black rounded-3xl transform -rotate-3" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#d0ed01] to-[#eaff6b] rounded-3xl opacity-20" />
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
                  alt="Symbiotes.ai Platform" 
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadingSection;
