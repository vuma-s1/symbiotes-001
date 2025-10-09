'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const PublicSectorPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link href="/what-we-do" className="inline-flex items-center text-[#d0ed01] hover:text-[#b5d101] transition-colors duration-200">
              <ArrowLeft size={20} className="mr-2" />
              Back to What We Do
            </Link>
          </div>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#d0ed01] to-[#6248ff] bg-clip-text text-transparent">
              Public Sector
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transforming Public Sector with Intelligent Government Systems
            </p>
            <a href="#contact" className="inline-block bg-[#d0ed01] text-black font-bold text-lg px-8 py-4 rounded-full hover:bg-[#b5d101] transition-all duration-300 transform hover:scale-105">
              BOOK A CALL NOW
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PublicSectorPage;
