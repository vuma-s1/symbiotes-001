'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { 
  FaRocket, 
  FaChartLine, 
  FaRobot, 
  FaUsers, 
  FaChartBar, 
  FaSync,
  FaPlay,
  FaLightbulb,
  FaCogs,
  FaHandshake,
  FaEye,
  FaArrowUp
} from 'react-icons/fa';

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
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      
      @keyframes pulse-glow {
        0%, 100% {
          box-shadow: 0 0 20px rgba(208, 237, 1, 0.3);
        }
        50% {
          box-shadow: 0 0 40px rgba(208, 237, 1, 0.6);
        }
      }
      
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
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

const servicesData = [
  {
    id: 1,
    icon: FaRocket,
    title: 'Execution Pods',
    subtitle: 'Launch 0–1',
    description: 'Blueprints are useless without builders. Our in-house pods handle strategy, design, growth, and tech — mapped to your blueprint. You stay on vision. We handle the rest.',
    features: ['Strategy Development', 'Design & Branding', 'Growth Marketing', 'Tech Implementation'],
    gradient: 'from-[#d0ed01] to-[#eaff6b]',
    bgGradient: 'from-[#d0ed01]/10 to-[#eaff6b]/5',
    status: 'ACTIVE'
  },
  {
    id: 2,
    icon: FaChartLine,
    title: 'Sprint-Driven Incubator',
    subtitle: 'Speed is good. Signal is better.',
    description: 'The incubator puts you in traction sprints: onboard users, pressure-test offers, close sales. Momentum, measured.',
    features: ['User Onboarding', 'Offer Testing', 'Sales Closing', 'Momentum Tracking'],
    gradient: 'from-[#d0ed01] to-[#eaff6b]',
    bgGradient: 'from-[#d0ed01]/10 to-[#eaff6b]/5',
    status: 'ONLINE'
  },
  {
    id: 3,
    icon: FaUsers,
    title: 'EdTech-Powered Community',
    subtitle: 'A system is only as strong as its people.',
    description: 'Symbiotes trains operators who plug straight into your launch. No hiring lag. No onboarding lag. Just doers who already know how to move.',
    features: ['Trained Operators', 'Instant Deployment', 'No Onboarding Lag', 'Ready-to-Move Talent'],
    gradient: 'from-[#d0ed01] to-[#eaff6b]',
    bgGradient: 'from-[#d0ed01]/10 to-[#eaff6b]/5',
    status: 'READY'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      {/* Stars Background */}
      <Stars />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d0ed01]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6248ff]/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ff6b6b]/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full px-4 py-1 mb-4">
            <FaPlay className="text-brand-primary text-xs" />
            <span className="text-brand-primary text-xs font-semibold">Our Services</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text mb-4">
            A Blueprint Alone Isn't Enough. <span className="text-white">Execution Demands an Ecosystem</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Symbiotes powers your launch with three engines that work together to turn your blueprint into reality.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-[#111]/50 backdrop-blur-sm border border-[#333] rounded-2xl p-6 hover:border-[#d0ed01]/30 transition-all duration-500 overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Futuristic Grid Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(rgba(208,237,1,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(208,237,1,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                {/* Status Indicator */}
                <div className="absolute top-3 right-3">
                  <div className={`px-2 py-1 rounded-full text-xs font-mono font-bold ${
                    service.status === 'ACTIVE' ? 'bg-[#d0ed01] text-black' :
                    service.status === 'ONLINE' ? 'bg-[#d0ed01] text-black' :
                    'bg-[#d0ed01] text-black'
                  }`}>
                    {service.status}
                  </div>
                </div>

                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-black text-xl animate-float transition-all duration-500 relative`}>
                      <IconComponent />
                    </div>
                  </div>
                  
                  {/* Title & Subtitle */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#d0ed01] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${service.gradient} text-transparent bg-clip-text`}>
                      {service.subtitle}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300 transition-colors duration-300">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} animate-pulse`} style={{animationDelay: `${featureIndex * 0.2}s`}}></div>
                        <span className="text-xs font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button 
            onClick={() => window.location.href = '/services'}
            className="bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;