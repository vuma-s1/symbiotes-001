'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111]/80 backdrop-blur-md border-b border-[#6248ff]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text">
              Relume
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="#features" className="text-gray-300 hover:text-[#d0ed01] transition-colors">Features</Link>
              <Link href="#about" className="text-gray-300 hover:text-[#d0ed01] transition-colors">About</Link>
              <Link href="#services" className="text-gray-300 hover:text-[#d0ed01] transition-colors">Services</Link>
              <Link href="#pricing" className="text-gray-300 hover:text-[#d0ed01] transition-colors">Pricing</Link>
              <Link href="#contact" className="bg-[#d0ed01] text-black px-4 py-2 rounded-lg hover:bg-[#eaff6b] transition-colors">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111] border-b border-[#6248ff]/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#features" className="block px-3 py-2 text-gray-300 hover:text-[#d0ed01] transition-colors">Features</Link>
            <Link href="#about" className="block px-3 py-2 text-gray-300 hover:text-[#d0ed01] transition-colors">About</Link>
            <Link href="#services" className="block px-3 py-2 text-gray-300 hover:text-[#d0ed01] transition-colors">Services</Link>
            <Link href="#pricing" className="block px-3 py-2 text-gray-300 hover:text-[#d0ed01] transition-colors">Pricing</Link>
            <Link href="#contact" className="block px-3 py-2 bg-[#d0ed01] text-black rounded-lg hover:bg-[#eaff6b] transition-colors text-center mt-4">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;