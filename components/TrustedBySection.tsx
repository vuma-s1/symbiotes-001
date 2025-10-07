'use client';

import React from 'react';
import Typography from './ui/Typography';
import { FaRocket, FaGlobe, FaDollarSign } from 'react-icons/fa';

const TrustedBySection = () => {
  return (
    <section className="py-8 bg-black relative overflow-hidden">
      {/* Background Gradient Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d0ed01]/3 via-transparent to-[#eaff6b]/3"></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(208,237,1,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(208,237,1,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Typography.H2 className="text-white mb-6">Trusted by founders, backed by results.</Typography.H2>
        </div>

        {/* Marquee Logo Scrolling */}
        <div className="relative overflow-hidden mb-10">
          <div className="flex animate-marquee">
            <div className="flex items-center gap-12 whitespace-nowrap">
              <div className="text-gray-400 text-sm font-semibold opacity-60">LOGO</div>
              <div className="text-gray-400 text-sm font-semibold opacity-60">LOGO</div>
              <div className="text-gray-400 text-sm font-semibold opacity-60">LOGO</div>
              <div className="text-gray-400 text-sm font-semibold opacity-60">LOGO</div>
              <div className="text-gray-400 text-sm font-semibold opacity-60">LOGO</div>
              <div className="text-gray-400 text-sm font-semibold opacity-60">LOGO</div>
              <div className="text-gray-400 text-sm font-semibold opacity-60">LOGO</div>
              <div className="text-gray-400 text-sm font-semibold opacity-60">LOGO</div>
            </div>
            <div className="flex items-center gap-12 whitespace-nowrap ml-12">
              <div className="text-gray-400 text-sm font-semibold opacity-60">LOGO</div>
              <div className="text-gray-400 text-sm font-semibold opacity-60">LOGO</div>
              <div className="text-gray-400 text-sm font-semibold opacity-60">LOGO</div>
              <div className="text-gray-400 text-sm font-semibold opacity-60">LOGO</div>
              <div className="text-gray-400 text-sm font-semibold opacity-60">LOGO</div>
              <div className="text-gray-400 text-sm font-semibold opacity-60">LOGO</div>
              <div className="text-gray-400 text-sm font-semibold opacity-60">LOGO</div>
              <div className="text-gray-400 text-sm font-semibold opacity-60">LOGO</div>
            </div>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="bg-gradient-to-r from-[#111] to-[#222] border border-[#d0ed01]/20 rounded-xl p-4 mb-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center relative py-2">
              <div className="text-2xl md:text-3xl font-bold text-white mb-0.5">100+</div>
              <div className="text-gray-400 text-xs">launches structured</div>
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-8 bg-[#d0ed01]/30"></div>
            </div>

            <div className="text-center relative py-2">
              <div className="text-2xl md:text-3xl font-bold text-white mb-0.5">Millions</div>
              <div className="text-gray-400 text-xs">raised by Symbiotes founders</div>
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-8 bg-[#d0ed01]/30"></div>
            </div>

            <div className="text-center py-2">
              <div className="text-2xl md:text-3xl font-bold text-white mb-0.5">40+</div>
              <div className="text-gray-400 text-xs">nations</div>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedBySection;
