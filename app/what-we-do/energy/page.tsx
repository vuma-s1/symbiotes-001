'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Target, TrendingUp, Users } from 'lucide-react';

const EnergyPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link 
              href="/what-we-do" 
              className="inline-flex items-center text-[#d0ed01] hover:text-[#b5d101] transition-colors duration-200"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to What We Do
            </Link>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#d0ed01] to-[#6248ff] bg-clip-text text-transparent">
              Energy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Powering the Future with Intelligent Energy Systems
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-8">
              Navigate the energy revolution. From renewable integration and smart grids to energy storage and carbon reduction, the industry is transforming rapidly.
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              The only way forward is to move from traditional energy to intelligent systems — where data, sustainability, and people work together seamlessly.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-[#d0ed01] text-black font-bold text-lg px-8 py-4 rounded-full hover:bg-[#b5d101] transition-all duration-300 transform hover:scale-105"
            >
              BOOK A CALL NOW
            </a>
          </div>

          {/* Industry by the Numbers */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#d0ed01]">
              Industry by the Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="text-center bg-gradient-to-br from-[#d0ed01]/10 to-transparent p-6 rounded-2xl border border-[#d0ed01]/20">
                <div className="text-4xl font-bold text-[#d0ed01] mb-2">91%</div>
                <p className="text-gray-300 text-sm">of energy companies are investing in renewables</p>
              </div>
              <div className="text-center bg-gradient-to-br from-[#6248ff]/10 to-transparent p-6 rounded-2xl border border-[#6248ff]/20">
                <div className="text-4xl font-bold text-[#6248ff] mb-2">78%</div>
                <p className="text-gray-300 text-sm">of utilities prioritize smart grid technologies</p>
              </div>
              <div className="text-center bg-gradient-to-br from-[#d0ed01]/10 to-transparent p-6 rounded-2xl border border-[#d0ed01]/20">
                <div className="text-4xl font-bold text-[#d0ed01] mb-2">73%</div>
                <p className="text-gray-300 text-sm">of companies struggle with grid integration</p>
              </div>
              <div className="text-center bg-gradient-to-br from-[#6248ff]/10 to-transparent p-6 rounded-2xl border border-[#6248ff]/20">
                <div className="text-4xl font-bold text-[#6248ff] mb-2">86%</div>
                <p className="text-gray-300 text-sm">of energy data remains unanalyzed for optimization</p>
              </div>
              <div className="text-center bg-gradient-to-br from-[#d0ed01]/10 to-transparent p-6 rounded-2xl border border-[#d0ed01]/20">
                <div className="text-4xl font-bold text-[#d0ed01] mb-2">67%</div>
                <p className="text-gray-300 text-sm">of operational costs are spent on infrastructure maintenance</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#d0ed01]">
              Why Choose Symbiotes for Energy?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#d0ed01] to-[#6248ff] rounded-full flex items-center justify-center mb-4">
                  <Target className="text-black" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#6248ff]">Energy Expertise</h3>
                <p className="text-gray-300">
                  Deep understanding of energy challenges, grid systems, and sustainability requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#6248ff] to-[#d0ed01] rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="text-black" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#6248ff]">Grid Innovation</h3>
                <p className="text-gray-300">
                  Latest smart grid, renewable energy, and energy storage technologies for sustainable power.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#d0ed01] to-[#6248ff] rounded-full flex items-center justify-center mb-4">
                  <Users className="text-black" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#6248ff]">Proven Results</h3>
                <p className="text-gray-300">
                  Track record of delivering measurable improvements in efficiency, sustainability, and grid reliability.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#6248ff]/20 to-[#d0ed01]/20 p-12 rounded-2xl border border-[#d0ed01]/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your Energy Operations
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              The Energy industry doesn't need another upgrade — it needs intelligent transformation. Symbiotes helps build that future — connecting data, sustainability, and people into one intelligent ecosystem.
            </p>
            <p className="text-lg text-[#d0ed01] font-bold mb-8">
              Your next kilowatt deserves systems that can think. Let's build them together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-block bg-[#d0ed01] text-black font-bold text-lg px-8 py-4 rounded-full hover:bg-[#b5d101] transition-all duration-300 transform hover:scale-105"
              >
                Book a Strategy Call
              </a>
              <a 
                href="/what-we-do" 
                className="inline-block border-2 border-[#6248ff] text-[#6248ff] font-bold text-lg px-8 py-4 rounded-full hover:bg-[#6248ff] hover:text-white transition-all duration-300"
              >
                View All Industries
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EnergyPage;
