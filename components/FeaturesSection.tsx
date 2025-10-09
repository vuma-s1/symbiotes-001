'use client';

import { FaRocket, FaLightbulb, FaTachometerAlt, FaCogs, FaUsers, FaChartLine } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

const Stars = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStars = () => {
      const starsContainer = starsRef.current;
      if (!starsContainer) return;

      // Clear existing stars
      starsContainer.innerHTML = '';

      // Create multiple stars
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 2 + 1;
        
        // Random animation duration
        const duration = Math.random() * 3 + 2;
        
        star.style.cssText = `
          position: absolute;
          left: ${x}%;
          top: ${y}%;
          width: ${size}px;
          height: ${size}px;
          background: white;
          border-radius: 50%;
          opacity: ${Math.random()};
          animation: twinkle ${duration}s infinite;
        `;
        
        starsContainer.appendChild(star);
      }
    };

    createStars();
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes twinkle {
        0% {
          opacity: 0.2;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0.2;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      ref={starsRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{
        background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0, 0, 0, 0.37) 100%)'
      }}
    />
  );
};

const features = [
  {
    num: '01',
    iconUrl: '/images/fi1.png',
    color: 'bg-purple-100 text-purple-700',
    hoverBg: 'hover:bg-[#d0ed01] hover:text-black',
    title: 'Dramatically Improve Launch Success Rate',
    hiddenContent: `Get a personalized roadmap based on 7+ years of proven methods, designed to navigate common early-stage failure points.\nFeature: Custom Mission Blueprints`,
  },
  {
    num: '02',
    iconUrl: '/images/fi2.png',
    color: 'bg-purple-100 text-purple-700',
    hoverBg: 'hover:bg-[#d0ed01] hover:text-black',
    title: 'Validate Ideas Faster, Save Resources',
    hiddenContent: `Leverage AI for rapid market analysis and PMF checks. Avoid costly wrong turns; invest your frugal resources wisely.\nFeature: AI-Powered Validation & Research`,
  },
  {
    num: '03',
    iconUrl: '/images/fi3.png',
    color: 'bg-purple-100 text-purple-700',
    hoverBg: 'hover:bg-[#d0ed01] hover:text-black',
    title: 'Stay in Command, Reduce Overwhelm.',
    hiddenContent: `Manage your entire launch from one central hub. Keep track of everything without feeling timeless or losing control.\nFeature: Mission Control Dashboard (The Launchpad)`,
  },
  {
    num: '04',
    iconUrl: '/images/fi4.png',
    color: 'bg-purple-100 text-purple-700',
    hoverBg: 'hover:bg-[#d0ed01] hover:text-black',
    title: 'Master Each Critical Stage.',
    hiddenContent: `Our framework ensures you systematically address validation, positioning, presence, leads, and launch – tackling the root causes of early failure.\nFeature: Guided Business Stages Framework`,
  },
  {
    num: '05',
    iconUrl: '/images/fi5.png',
    color: 'bg-purple-100 text-purple-700',
    hoverBg: 'hover:bg-[#d0ed01] hover:text-black',
    title: 'Execute Efficiently, Stay Accountable.',
    hiddenContent: `Automate routine tasks and reminders. Focus your energy on high-impact actions while the system keeps things moving.\nFeature: Automated Guidance & Workflow System`,
  },
  {
    num: '06',
    iconUrl: '/images/fi6.png',
    color: 'bg-purple-100 text-purple-700',
    hoverBg: 'hover:bg-[#d0ed01] hover:text-black',
    title: 'Amplify Your Capabilities.',
    hiddenContent: `Access vetted experts who understand the frugal, high-intensity startup environment.\nFeature: Symbiotes Growth Crew Network`,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Stars Background */}
      <Stars />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* New Launch Pad Section */}
        <div className="text-center mb-20">
          <h2 
            className="text-xl sm:text-2xl md:text-3xl font-bold text-[#d0ed01] mb-6 leading-tight"
            style={{fontFamily: "'Neue Haas Display Bold', sans-serif"}}
          >
            Once you've got your plan, you need a place to make it real.
          </h2>
          <h3 
            className="text-lg sm:text-xl md:text-2xl font-medium text-white mb-6 leading-tight"
            style={{fontFamily: "'Neue Haas Display Medium', sans-serif"}}
          >
            That's where the Symbiotes Launch Pad comes in.
          </h3>
          <p 
            className="text-base sm:text-lg text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            style={{fontFamily: "'Neue Haas Display Light', sans-serif"}}
          >
            It's your focused workspace built to help you track progress, stay aligned, and move faster than founders lost in chaos.
          </p>
          
          <div className="bg-gradient-to-r from-[#d0ed01]/10 to-[#6248ff]/10 p-8 rounded-2xl border border-[#d0ed01]/20 max-w-4xl mx-auto mb-8">
            <div className="space-y-4">
              <p 
                className="text-base sm:text-lg text-white"
                style={{fontFamily: "'Neue Haas Display Medium', sans-serif"}}
              >
                No more Notion graveyards.
              </p>
              <p 
                className="text-base sm:text-lg text-white"
                style={{fontFamily: "'Neue Haas Display Medium', sans-serif"}}
              >
                No more sticky-note walls.
              </p>
              <div className="pt-2">
                <p 
                  className="text-lg sm:text-xl text-[#d0ed01] font-bold"
                  style={{fontFamily: "'Neue Haas Display Bold', sans-serif"}}
                >
                  Just structured momentum, mapped directly to your Blueprint.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#d0ed01] text-black px-6 py-3 rounded-full inline-block">
            <h4 
              className="text-sm font-bold uppercase tracking-wider"
              style={{fontFamily: "'Neue Haas Display Bold', sans-serif"}}
            >
              PROJECT MANAGEMENT TOOL
            </h4>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text mb-4">
            Engineered to Maximize Success & Minimize Risk
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl bg-[#181818] text-white flex flex-col h-[340px] min-h-[220px] relative shadow-md transition-all duration-300 overflow-hidden cursor-pointer ${feature.hoverBg} hover:scale-105 hover:shadow-2xl`}
            >
              <span className={`absolute top-2 left-6 flex items-center justify-center w-14 h-14 rounded-full font-extrabold text-xl ${feature.color} transition-all duration-300 group-hover:opacity-0`}>
                {feature.num}
              </span>
              <span className="absolute top-2 left-6 flex items-center justify-center w-14 h-14 rounded-full font-extrabold text-xl opacity-0 transition-all duration-300 group-hover:opacity-100 text-white bg-transparent">
                <img
                  src={feature.iconUrl}
                  alt="icon"
                  className="w-20 h-20 object-cover rounded-full [filter:brightness(1.3)_contrast(1.5)] bg-transparent"
                />
              </span>
              <h3 className="text-lg font-bold text-white mb-2 mt-24 group-hover:mt-10 group-hover:text-black transition-all duration-300">{feature.title}</h3>
              {feature.hiddenContent && (
                <div className="opacity-0 max-h-0 translate-y-4 group-hover:opacity-100 group-hover:max-h-72 group-hover:translate-y-0 group-hover:mt-4 transition-all duration-500 ease-in-out text-white group-hover:text-black text-base whitespace-pre-line overflow-y-auto pr-2">
                  {feature.hiddenContent}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;