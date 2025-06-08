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
  const isBlueprintPage = pathname.startsWith('/blueprint');
  const [highlighted, setHighlighted] = useState<'login' | 'signup'>('login');

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
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo Left */}
          <div className="flex-shrink-0 flex items-center justify-center h-full w-[200px]">
            <Link href="/" className="flex items-center justify-center h-full group">
              <Image 
                src="/images/logo1.png" 
                alt="Symbiotes Logo" 
                width={120} 
                height={120} 
                priority 
                className="object-contain drop-shadow-lg h-16 w-auto" 
              />
            </Link>
          </div>

          {/* Centered Menu - hidden on blueprint page */}
          {!isBlueprintPage && (
            <div className="hidden md:flex flex-1 justify-center items-center">
              <div className="flex items-center space-x-12">
                <Link href="https://launch.symbiotes.ai/" onClick={handleLinkClick} className="text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Launch 0{'->'}1</Link>
                <Link href="#Incubator" onClick={handleLinkClick} className="text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Incubator</Link>
                <Link href="#community" onClick={handleLinkClick} className="text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Community</Link>
                <Link href="/services" onClick={handleLinkClick} className="text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Services</Link>
                <Link href="#contact" onClick={handleLinkClick} className="text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Contact us</Link>
              </div>
            </div>
          )}

          {/* Login/Signup - hidden on blueprint page */}
          {!isBlueprintPage && (
            <div className="hidden md:flex items-center justify-center w-[200px] relative">
              <div className="relative flex w-[260px] h-[52px] overflow-visible rounded-full pl-2">
                <div
                  className="absolute top-0 left-0 h-full w-1/2 animated-highlight z-0 rounded-full"
                  style={{
                    transform: highlighted === 'login' ? 'translateX(0%)' : 'translateX(100%)',
                    transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
                  }}
                >
                  <img src='/images/icc18.png' alt='' className='absolute left-[55%] top-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 object-cover' />
                </div>
                <Link
                  href="/login"
                  className={`relative flex-1 flex items-center justify-center font-bold text-lg z-10 transition-colors duration-300 rounded-full ${highlighted === 'login' ? 'text-white' : 'text-[#d0ed01]'} hover:text-white`}
                  onMouseEnter={() => setHighlighted('login')}
                  onFocus={() => setHighlighted('login')}
                  tabIndex={0}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className={`relative flex-1 flex items-center justify-center font-bold text-lg z-10 transition-colors duration-300 rounded-full ${highlighted === 'signup' ? 'text-white' : 'text-[#d0ed01]'} hover:text-white`}
                  onMouseEnter={() => setHighlighted('signup')}
                  onFocus={() => setHighlighted('signup')}
                  tabIndex={0}
                >
                  Sign up
                </Link>
              </div>
            </div>
          )}

          {/* Mobile menu button - hidden on blueprint page */}
          {!isBlueprintPage && (
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu - hidden on blueprint page */}
      {!isBlueprintPage && isOpen && (
        <div className="md:hidden bg-[#111] border-b border-[#6248ff]/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="https://launch.symbiotes.ai/" onClick={handleLinkClick} className="block px-3 py-2 text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Launch 0{'->'}1</Link>
            <Link href="#Incubator" onClick={handleLinkClick} className="block px-3 py-2 text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Incubator</Link>
            <Link href="#community" onClick={handleLinkClick} className="block px-3 py-2 text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Community</Link>
            <Link href="/services" onClick={handleLinkClick} className="block px-3 py-2 text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Services</Link>
            <Link href="#contact" onClick={handleLinkClick} className="block px-3 py-2 text-gray-300 font-bold text-lg hover:text-[#d0ed01] transition-colors">Contact us</Link>
            <div className="relative flex w-[240px] h-[52px] bg-black rounded-full border-4 border-[#d0ed01] overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full w-1/2 animated-highlight bg-[#d0ed01] z-0 rounded-full"
                style={{
                  transform: highlighted === 'login' ? 'translateX(0%)' : 'translateX(100%)',
                  transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
                }}
              />
              <Link
                href="/login"
                className={`relative flex-1 flex items-center justify-center font-bold text-base z-10 transition-colors duration-300 rounded-full ${highlighted === 'login' ? 'text-white' : 'text-[#d0ed01]'} hover:text-white`}
                onMouseEnter={() => setHighlighted('login')}
                onFocus={() => setHighlighted('login')}
                tabIndex={0}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className={`relative flex-1 flex items-center justify-center font-bold text-base z-10 transition-colors duration-300 rounded-full ${highlighted === 'signup' ? 'text-white' : 'text-[#d0ed01]'} hover:text-white`}
                onMouseEnter={() => setHighlighted('signup')}
                onFocus={() => setHighlighted('signup')}
                tabIndex={0}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;