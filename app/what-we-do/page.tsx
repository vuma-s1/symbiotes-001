'use client';

import React from 'react';
import Navbar from '@/components/Navbar';

const WhatWeDoPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#d0ed01] to-[#6248ff] bg-clip-text text-transparent">
              What We Do
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge AI solutions and innovative technology
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Service Card 1 */}
            <div className="bg-gradient-to-br from-[#d0ed01]/10 to-[#6248ff]/10 p-8 rounded-2xl border border-[#d0ed01]/20 hover:border-[#d0ed01]/50 transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-[#d0ed01]">AI Development</h3>
              <p className="text-gray-300">
                Custom AI solutions tailored to your business needs. From machine learning models to intelligent automation.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gradient-to-br from-[#6248ff]/10 to-[#d0ed01]/10 p-8 rounded-2xl border border-[#6248ff]/20 hover:border-[#6248ff]/50 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-[#6248ff]">Product Launch</h3>
              <p className="text-gray-300">
                We help you take your idea from 0 to 1. Strategic planning, development, and market launch support.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gradient-to-br from-[#d0ed01]/10 to-[#6248ff]/10 p-8 rounded-2xl border border-[#d0ed01]/20 hover:border-[#d0ed01]/50 transition-all duration-300">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-4 text-[#d0ed01]">Innovation Consulting</h3>
              <p className="text-gray-300">
                Expert guidance on leveraging emerging technologies to stay ahead of the competition.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-gradient-to-br from-[#6248ff]/10 to-[#d0ed01]/10 p-8 rounded-2xl border border-[#6248ff]/20 hover:border-[#6248ff]/50 transition-all duration-300">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-4 text-[#6248ff]">Technical Solutions</h3>
              <p className="text-gray-300">
                End-to-end technical implementation from architecture design to deployment and scaling.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="bg-gradient-to-br from-[#d0ed01]/10 to-[#6248ff]/10 p-8 rounded-2xl border border-[#d0ed01]/20 hover:border-[#d0ed01]/50 transition-all duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4 text-[#d0ed01]">Data Analytics</h3>
              <p className="text-gray-300">
                Transform your data into actionable insights with advanced analytics and visualization.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="bg-gradient-to-br from-[#6248ff]/10 to-[#d0ed01]/10 p-8 rounded-2xl border border-[#6248ff]/20 hover:border-[#6248ff]/50 transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-[#6248ff]">Strategy & Planning</h3>
              <p className="text-gray-300">
                Comprehensive business strategy development to align technology with your goals.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#6248ff]/20 to-[#d0ed01]/20 p-12 rounded-2xl border border-[#d0ed01]/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with innovative technology solutions.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-[#d0ed01] text-black font-bold text-lg px-8 py-4 rounded-full hover:bg-[#b5d101] transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WhatWeDoPage;

