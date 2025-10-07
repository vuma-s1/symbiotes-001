'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const pathname = usePathname();
  const isMainPage = pathname === '/';
  const isBlueprintPage = pathname.startsWith('/blueprint');
  const isServicesPage = pathname === '/services';
  const isLoginPage = pathname === '/login';
  const isSignupPage = pathname === '/signup';
  const [highlighted, setHighlighted] = useState<'login' | 'signup'>('login');

  const handleLinkClick = (section: string) => {
    setIsOpen(false);
    setActiveSection(section);
  };

  // Set active section based on current page
  useEffect(() => {
    if (isServicesPage) {
      setActiveSection('services');
    } else if (isLoginPage) {
      setActiveSection('login');
    } else if (isSignupPage) {
      setActiveSection('signup');
    } else if (isMainPage) {
      setActiveSection('home');
    }
  }, [pathname, isServicesPage, isLoginPage, isSignupPage, isMainPage]);

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

  // Helper function to get active styles
  const getActiveStyles = (section: string) => {
    const isActive = activeSection === section;
    return {
      text: isActive ? 'text-[#d0ed01]' : 'text-gray-300',
      background: isActive ? 'bg-[#d0ed01]/10' : 'bg-transparent',
      border: 'border-transparent',
      hover: isActive ? 'hover:text-[#d0ed01]' : 'hover:text-[#d0ed01]',
      padding: 'px-4 py-2',
      rounded: 'rounded-lg',
      transition: 'transition-all duration-300',
      font: 'font-bold text-lg'
    };
  };

  return (
    <nav className={`${isMainPage ? 'fixed' : 'fixed'} top-0 left-0 -translate-x-0 w-full max-w-none z-30 ${isScrolled ? 'rounded-none bg-black' : 'top-6 rounded-2xl'} shadow-2xl backdrop-blur-lg transition-all duration-300`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo Left */}
          <div className="flex-shrink-0 flex items-center justify-center h-full w-[200px]">
            <Link 
              href="/" 
              className="flex items-center justify-center h-full group"
              onClick={() => handleLinkClick('home')}
            >
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
              <div className="flex items-center space-x-8">
                <Link 
                  href="https://launch.symbiotes.ai/" 
                  onClick={() => handleLinkClick('launch')} 
                  className={`${getActiveStyles('launch').text} ${getActiveStyles('launch').background} ${getActiveStyles('launch').border} ${getActiveStyles('launch').hover} ${getActiveStyles('launch').padding} ${getActiveStyles('launch').rounded} ${getActiveStyles('launch').transition} ${getActiveStyles('launch').font}`}
                >
                  Launch 0{'->'}1
                </Link>
                <Link 
                  href="#Incubator" 
                  onClick={() => handleLinkClick('incubator')} 
                  className={`${getActiveStyles('incubator').text} ${getActiveStyles('incubator').background} ${getActiveStyles('incubator').border} ${getActiveStyles('incubator').hover} ${getActiveStyles('incubator').padding} ${getActiveStyles('incubator').rounded} ${getActiveStyles('incubator').transition} ${getActiveStyles('incubator').font}`}
                >
                  Incubator
                </Link>
                {/* cleaned up: removed leftover comment */}
                <Link 
                  href="/ar-tech" 
                  onClick={() => handleLinkClick('ar-tech')} 
                  className={`${getActiveStyles('ar-tech')?.text || ''} ${getActiveStyles('ar-tech')?.background || ''} ${getActiveStyles('ar-tech')?.border || ''} ${getActiveStyles('ar-tech')?.hover || ''} ${getActiveStyles('ar-tech')?.padding || ''} ${getActiveStyles('ar-tech')?.rounded || ''} ${getActiveStyles('ar-tech')?.transition || ''} ${getActiveStyles('ar-tech')?.font || ''}`}
                >
                  AR Tech
                </Link>
                <Link 
                  href="/services" 
                  onClick={() => handleLinkClick('services')} 
                  className={`${getActiveStyles('services').text} ${getActiveStyles('services').background} ${getActiveStyles('services').border} ${getActiveStyles('services').hover} ${getActiveStyles('services').padding} ${getActiveStyles('services').rounded} ${getActiveStyles('services').transition} ${getActiveStyles('services').font}`}
                >
                  Services
                </Link>
                <Link 
                  href="#contact" 
                  onClick={() => handleLinkClick('contact')} 
                  className={`${getActiveStyles('contact').text} ${getActiveStyles('contact').background} ${getActiveStyles('contact').border} ${getActiveStyles('contact').hover} ${getActiveStyles('contact').padding} ${getActiveStyles('contact').rounded} ${getActiveStyles('contact').transition} ${getActiveStyles('contact').font}`}
                >
                  Contact us
                </Link>
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
                  className={`relative flex-1 flex items-center justify-center font-bold text-lg z-10 transition-colors duration-300 rounded-full ${highlighted === 'login' || activeSection === 'login' ? 'text-white' : 'text-[#d0ed01]'} hover:text-white`}
                  onMouseEnter={() => setHighlighted('login')}
                  onFocus={() => setHighlighted('login')}
                  onClick={() => handleLinkClick('login')}
                  tabIndex={0}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className={`relative flex-1 flex items-center justify-center font-bold text-lg z-10 transition-colors duration-300 rounded-full ${highlighted === 'signup' || activeSection === 'signup' ? 'text-white' : 'text-[#d0ed01]'} hover:text-white`}
                  onMouseEnter={() => setHighlighted('signup')}
                  onFocus={() => setHighlighted('signup')}
                  onClick={() => handleLinkClick('signup')}
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
            <Link 
              href="https://launch.symbiotes.ai/" 
              onClick={() => handleLinkClick('launch')} 
              className={`block px-3 py-2 font-bold text-lg transition-colors rounded-lg ${getActiveStyles('launch').text} ${getActiveStyles('launch').background} ${getActiveStyles('launch').border} ${getActiveStyles('launch').hover}`}
            >
              Launch 0{'->'}1
            </Link>
            <Link 
              href="#Incubator" 
              onClick={() => handleLinkClick('incubator')} 
              className={`block px-3 py-2 font-bold text-lg transition-colors rounded-lg ${getActiveStyles('incubator').text} ${getActiveStyles('incubator').background} ${getActiveStyles('incubator').border} ${getActiveStyles('incubator').hover}`}
            >
              Incubator
            </Link>
            // ...existing code...
            <Link 
              href="/ar-tech" 
              onClick={() => handleLinkClick('ar-tech')} 
              className={`block px-3 py-2 font-bold text-lg transition-colors rounded-lg ${getActiveStyles('ar-tech')?.text || ''} ${getActiveStyles('ar-tech')?.background || ''} ${getActiveStyles('ar-tech')?.border || ''} ${getActiveStyles('ar-tech')?.hover || ''}`}
            >
              AR Tech
            </Link>
            <Link 
              href="/services" 
              onClick={() => handleLinkClick('services')} 
              className={`block px-3 py-2 font-bold text-lg transition-colors rounded-lg ${getActiveStyles('services').text} ${getActiveStyles('services').background} ${getActiveStyles('services').border} ${getActiveStyles('services').hover}`}
            >
              Services
            </Link>
            <Link 
              href="#contact" 
              onClick={() => handleLinkClick('contact')} 
              className={`block px-3 py-2 font-bold text-lg transition-colors rounded-lg ${getActiveStyles('contact').text} ${getActiveStyles('contact').background} ${getActiveStyles('contact').border} ${getActiveStyles('contact').hover}`}
            >
              Contact us
            </Link>
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
                className={`relative flex-1 flex items-center justify-center font-bold text-base z-10 transition-colors duration-300 rounded-full ${highlighted === 'login' || activeSection === 'login' ? 'text-white' : 'text-[#d0ed01]'} hover:text-white`}
                onMouseEnter={() => setHighlighted('login')}
                onFocus={() => setHighlighted('login')}
                onClick={() => handleLinkClick('login')}
                tabIndex={0}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className={`relative flex-1 flex items-center justify-center font-bold text-base z-10 transition-colors duration-300 rounded-full ${highlighted === 'signup' || activeSection === 'signup' ? 'text-white' : 'text-[#d0ed01]'} hover:text-white`}
                onMouseEnter={() => setHighlighted('signup')}
                onFocus={() => setHighlighted('signup')}
                onClick={() => handleLinkClick('signup')}
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