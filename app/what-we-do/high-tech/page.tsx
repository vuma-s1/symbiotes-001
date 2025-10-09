'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Target, TrendingUp, Users } from 'lucide-react';

const HighTechPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link 
              href="/what-we-do" 
              className="inline-flex items-center text-[#d0ed01] hover:text-[#b5d101] transition-colors duration-200"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to What We Do
            </Link>
          </div>

          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#d0ed01] to-[#6248ff] bg-clip-text text-transparent">
              High Tech
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Accelerating Innovation with Intelligent Systems
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-8">
              Navigate the high-tech revolution. From AI and machine learning to cloud computing and emerging technologies, the industry is evolving at unprecedented speed.
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              The only way forward is to move from traditional development to intelligent systems — where data, innovation, and people work together seamlessly.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-[#d0ed01] text-black font-bold text-lg px-8 py-4 rounded-full hover:bg-[#b5d101] transition-all duration-300 transform hover:scale-105"
            >
              BOOK A CALL NOW
            </a>
          </div>

          <div className="text-center bg-gradient-to-r from-[#6248ff]/20 to-[#d0ed01]/20 p-12 rounded-2xl border border-[#d0ed01]/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your High Tech Operations
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              The High Tech industry doesn't need another upgrade — it needs intelligent transformation. Symbiotes helps build that future — connecting data, systems, and people into one intelligent ecosystem.
            </p>
            <p className="text-lg text-[#d0ed01] font-bold mb-8">
              Your next innovation deserves systems that can think. Let's build them together.
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

export default HighTechPage;
