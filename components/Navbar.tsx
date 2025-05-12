'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  const handleLinkClick = () => {
    setIsOpen(false);
  };

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
    <nav className={`${isMainPage ? 'fixed' : 'fixed'} top-0 left-0 -translate-x-0 w-full max-w-none z-30 ${isScrolled ? 'rounded-none bg-black' : 'top-6 rounded-2xl'} shadow-2xl backdrop-blur-lg transition-all duration-300`}>
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
              <Link href="https://launch.symbiotes.ai/" onClick={handleLinkClick} className="text-gray-300 font-bold text-lg  hover:text-[#d0ed01] transition-colors">Launch 0{'->'}1</Link>
              <Link href="#Incubator" onClick={handleLinkClick} className="text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Incubator</Link>
              <Link href="#community" onClick={handleLinkClick} className="text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Community</Link>
              <Link href="#contact" onClick={handleLinkClick} className="text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Contact us</Link>
            </div>
          </div>

          {/* Sign up / Login Button Right */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/login" 
              className="group relative px-6 py-2 rounded-full font-bold text-lg text-black bg-[#d0ed01] transition-all duration-300 hover:bg-[#d0ed01]/90 hover:backdrop-blur-sm hover:border hover:border-[#d0ed01]/20 hover:scale-105 active:scale-95 text-center flex items-center justify-center min-w-[120px]"
            >
              <span className="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">Login</span>
              <LogIn className="w-6 h-6 absolute transition-all duration-300 opacity-0 scale-50 -translate-y-4 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:z-10" />
            </Link>
            <Link 
              href="/signup" 
              className="group relative px-6 py-2 rounded-full font-bold text-lg text-black bg-[#d0ed01] transition-all duration-300 hover:bg-[#d0ed01]/90 hover:backdrop-blur-sm hover:border hover:border-[#d0ed01]/20 hover:scale-105 active:scale-95 text-center flex items-center justify-center min-w-[120px]"
            >
              <span className="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">Sign up</span>
              <UserPlus className="w-6 h-6 absolute transition-all duration-300 opacity-0 scale-50 -translate-y-4 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:z-10" />
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
            <Link href="https://launch.symbiotes.ai/" onClick={handleLinkClick} className="block px-3 py-2 text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Launch 0{'->'}1</Link>
            <Link href="#Incubator" onClick={handleLinkClick} className="block px-3 py-2 text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Incubator</Link>
            <Link href="#community" onClick={handleLinkClick} className="block px-3 py-2 text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Community</Link>
            <Link href="#contact" onClick={handleLinkClick} className="block px-3 py-2 text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Contact us</Link>
            <div className="flex flex-row justify-center gap-x-2 mt-4">
              <Link 
                href="/login" 
                onClick={handleLinkClick}
                className="group relative inline-flex px-4 py-2 rounded-lg font-bold text-base text-black bg-[#d0ed01] transition-all duration-300 hover:bg-[#d0ed01]/90 text-center items-center justify-center"
              >
                <span className="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">Login</span>
                <LogIn className="w-5 h-5 absolute transition-all duration-300 opacity-0 scale-50 -translate-y-4 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:z-10" />
              </Link>
              <Link 
                href="/signup" 
                onClick={handleLinkClick}
                className="group relative inline-flex px-4 py-2 rounded-lg font-bold text-base text-black bg-[#d0ed01] transition-all duration-300 hover:bg-[#d0ed01]/90 text-center items-center justify-center"
              >
                <span className="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">Sign up</span>
                <UserPlus className="w-5 h-5 absolute transition-all duration-300 opacity-0 scale-50 -translate-y-4 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:z-10" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;