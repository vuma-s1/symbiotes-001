'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 -translate-x-0 w-full max-w-none z-30 ${isScrolled ? 'rounded-none bg-black' : 'top-6 rounded-2xl'} shadow-2xl backdrop-blur-lg transition-all duration-300`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo Left */}
          <div className="flex-shrink-0 flex items-center justify-center h-full">
            <Link href="/" className="flex items-center justify-center h-full group">
              <Image src="/images/logo.png" alt="Symbiotes Logo" width={160} height={160} priority className="object-contain drop-shadow-lg" />
            </Link>
          </div>

          {/* Centered Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-12">
              <Link href="https://launch.symbiotes.ai/" className="text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Launch01</Link>
              <Link href="#community" className="text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Community</Link>
              <Link href="#partners" className="text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Partners</Link>
              <Link href="#contact" className="text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Contact us</Link>
            </div>
          </div>

          {/* Sign up / Login Button Right */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/signup" 
              className="px-6 py-2 rounded-full font-bold text-lg text-black bg-gradient-to-r from-lime-300 via-lime-400 to-green-500 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_4px_#a6ff2f] active:scale-95 text-center"
            >
              Sign up / Login
            </Link>
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
            <Link href="#launch01" className="block px-3 py-2 text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Launch01</Link>
            <Link href="#community" className="block px-3 py-2 text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Community</Link>
            <Link href="#partners" className="block px-3 py-2 text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Partners</Link>
            <Link href="#contact" className="block px-3 py-2 text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Contact us</Link>
            <Link 
              href="/signup" 
              className="block px-3 py-2 rounded-full font-bold text-lg text-black bg-gradient-to-r from-lime-300 via-lime-400 to-green-500 shadow-lg mt-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_4px_#a6ff2f] active:scale-95 text-center"
            >
              Sign up / Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;