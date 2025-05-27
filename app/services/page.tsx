import React from 'react';

const ServicesPage = () => (
  <main className="min-h-screen bg-black text-white relative overflow-hidden">
    {/* Hero Section with Background Image */}
    <section
      className="relative flex flex-col items-center justify-center min-h-screen px-4"
      style={{
        backgroundImage: "url('/images/services_background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 flex flex-col items-center w-full" style={{marginTop: '6vh'}}>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-center mb-8 leading-tight" style={{color: '#FFFFFF'}}>
          Where <span
            className="bg-gradient-to-r from-[#d0ed01] to-white bg-clip-text text-transparent"
          >Growth</span> Meets <span
            className="bg-gradient-to-r from-[#d0ed01] to-white bg-clip-text text-transparent"
          >Connection</span>
        </h1>
        <p className="text-lg md:text-2xl text-center mb-2 whitespace-nowrap w-full" style={{color: '#FFFFFF'}}>
          Every business has untapped potential. We don't just find it—we amplify it.
        </p>
        <p className="text-base md:text-lg text-center mb-10 whitespace-nowrap w-full" style={{color: '#FFFFFFcc'}}>
          Symbiotes brings marketing brilliance and technical expertise together to help your brand evolve.
        </p>
        {/* Custom Button with Neon Gradient Background */}
        <button
          className="relative flex items-center justify-center px-12 py-4 mb-16 rounded-full font-bold text-white text-xl shadow-lg"
          style={{
            background: 'linear-gradient(90deg, #212b01 0%, #d0ed01 50%, #212b01 100%)',
            boxShadow: '0 4px 24px 0 rgba(208,237,1,0.25)',
            border: 'none',
          }}
        >
          Let&apos;s Build Your Tomorrow
        </button>
      </div>
      {/* Logos Row - position at bottom of dome */}
      <div className="flex flex-wrap justify-center items-center gap-12 w-full max-w-4xl absolute left-1/2 -translate-x-1/2" style={{bottom: '6vh', marginTop: '0', position: 'absolute'}}>
        <img src="/logos/launch.png" alt="launch logo" className="h-12 object-contain" />
        <img src="/logos/brand2.png" alt="brand2 logo" className="h-12 object-contain" />
        <img src="/logos/sinus.png" alt="sinus logo" className="h-12 object-contain" />
        <img src="/logos/brand4.png" alt="brand4 logo" className="h-12 object-contain" />
        <img src="/logos/bulbit.png" alt="bulbit logo" className="h-12 object-contain" />
      </div>
    </section>
    {/* Add more sections below as needed */}
  </main>
);

export default ServicesPage;
