'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, LogIn, UserPlus, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isWhatWeDoDropdownOpen, setIsWhatWeDoDropdownOpen] = useState(false);
  const pathname = usePathname();
  const isMainPage = pathname === '/';
  const isBlueprintPage = pathname.startsWith('/blueprint');
  const isServicesPage = pathname === '/services';
  const isWhatWeDoPage = pathname === '/what-we-do';
  const isLoginPage = pathname === '/login';
  const isSignupPage = pathname === '/signup';

  const handleLinkClick = (section: string) => {
    setIsOpen(false);
    setActiveSection(section);
  };

  // Set active section based on current page
  useEffect(() => {
    if (isServicesPage) {
      setActiveSection('services');
    } else if (isWhatWeDoPage) {
      setActiveSection('what-we-do');
    } else if (isLoginPage) {
      setActiveSection('login');
    } else if (isSignupPage) {
      setActiveSection('signup');
    } else if (isMainPage) {
      setActiveSection('home');
    }
  }, [pathname, isServicesPage, isWhatWeDoPage, isLoginPage, isSignupPage, isMainPage]);

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
      text: isActive ? 'text-brand-primary' : 'text-gray-300',
      background: isActive ? 'bg-brand-primary/10' : 'bg-transparent',
      border: 'border-transparent',
      hover: 'hover:text-brand-primary',
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
                {/* What We Do with Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setIsWhatWeDoDropdownOpen(true)}
                  onMouseLeave={() => setIsWhatWeDoDropdownOpen(false)}
                >
                  <button
                    onClick={() => {
                      setIsWhatWeDoDropdownOpen(!isWhatWeDoDropdownOpen);
                      handleLinkClick('what-we-do');
                    }}
                    className={`${getActiveStyles('what-we-do')?.text || ''} ${getActiveStyles('what-we-do')?.background || ''} ${getActiveStyles('what-we-do')?.border || ''} ${getActiveStyles('what-we-do')?.hover || ''} ${getActiveStyles('what-we-do')?.padding || ''} ${getActiveStyles('what-we-do')?.rounded || ''} ${getActiveStyles('what-we-do')?.transition || ''} ${getActiveStyles('what-we-do')?.font || ''} flex items-center gap-1`}
                  >
                    What We Do
                    {isWhatWeDoDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isWhatWeDoDropdownOpen && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-black/95 backdrop-blur-lg border border-[#d0ed01]/30 rounded-2xl shadow-2xl z-50 overflow-hidden">
                      <div className="p-8">
                        <div className="grid grid-cols-5 gap-6">
                          {/* Column 1 */}
                          <div>
                            <div className="space-y-3">
                              {[
                                'Aerospace',
                                'Automotive',
                                'Banking',
                                'Capital Markets',
                                'Chemicals',
                                'Communications'
                              ].map((item, index) => (
                                <Link
                                  key={index}
                                  href={item === 'Aerospace' ? '/what-we-do/aerospace' : 
                                        item === 'Automotive' ? '/what-we-do/automotive' : 
                                        item === 'Banking' ? '/what-we-do/banking' :
                                        item === 'Capital Markets' ? '/what-we-do/capital-markets' :
                                        item === 'Chemicals' ? '/what-we-do/chemicals' :
                                        item === 'Communications' ? '/what-we-do/communications' :
                                        item === 'Consumer' ? '/what-we-do/consumer' :
                                        item === 'Energy' ? '/what-we-do/energy' :
                                        item === 'Healthcare' ? '/what-we-do/healthcare' :
                                        item === 'High Tech' ? '/what-we-do/high-tech' :
                                        item === 'Industrial' ? '/what-we-do/industrial' :
                                        item === 'Insurance' ? '/what-we-do/insurance' :
                                        item === 'Life Sciences' ? '/what-we-do/life-sciences' :
                                        item === 'Natural Resources' ? '/what-we-do/natural-resources' :
                                        item === 'Public Sector' ? '/what-we-do/public-sector' :
                                        item === 'Private Equity' ? '/what-we-do/private-equity' :
                                        item === 'Retail' ? '/what-we-do/retail' :
                                        item === 'Software' ? '/what-we-do/software' :
                                        item === 'Travel' ? '/what-we-do/travel' :
                                        item === 'Utilities' ? '/what-we-do/utilities' :
                                        item === 'Education' ? '/what-we-do/education' :
                                        item === 'Legal' ? '/what-we-do/legal' :
                                        item === 'Climate' ? '/what-we-do/climate' :
                                        item === 'Agriculture' ? '/what-we-do/agriculture' :
                                        item === 'Real Estate' ? '/what-we-do/real-estate' :
                                        item === 'Media' ? '/what-we-do/media' :
                                        item === 'Fashion' ? '/what-we-do/fashion' :
                                        item === 'Impact' ? '/what-we-do/impact' :
                                        item === 'Logistics' ? '/what-we-do/logistics' :
                                        item === 'Security' ? '/what-we-do/security' :
                                        `/what-we-do/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="block text-gray-300 hover:text-brand-primary transition-colors duration-200 py-1 text-sm"
                                  onClick={() => setIsWhatWeDoDropdownOpen(false)}
                                >
                                  {item}
                                </Link>
                              ))}
                            </div>
                          </div>
                          
                          {/* Column 2 */}
                          <div>
                            <div className="space-y-3">
                              {[
                                'Consumer',
                                'Energy',
                                'Healthcare',
                                'High Tech',
                                'Industrial',
                                'Insurance'
                              ].map((item, index) => (
                                <Link
                                  key={index}
                                  href={item === 'Aerospace' ? '/what-we-do/aerospace' : 
                                        item === 'Automotive' ? '/what-we-do/automotive' : 
                                        item === 'Banking' ? '/what-we-do/banking' :
                                        item === 'Capital Markets' ? '/what-we-do/capital-markets' :
                                        item === 'Chemicals' ? '/what-we-do/chemicals' :
                                        item === 'Communications' ? '/what-we-do/communications' :
                                        item === 'Consumer' ? '/what-we-do/consumer' :
                                        item === 'Energy' ? '/what-we-do/energy' :
                                        item === 'Healthcare' ? '/what-we-do/healthcare' :
                                        item === 'High Tech' ? '/what-we-do/high-tech' :
                                        item === 'Industrial' ? '/what-we-do/industrial' :
                                        item === 'Insurance' ? '/what-we-do/insurance' :
                                        item === 'Life Sciences' ? '/what-we-do/life-sciences' :
                                        item === 'Natural Resources' ? '/what-we-do/natural-resources' :
                                        item === 'Public Sector' ? '/what-we-do/public-sector' :
                                        item === 'Private Equity' ? '/what-we-do/private-equity' :
                                        item === 'Retail' ? '/what-we-do/retail' :
                                        item === 'Software' ? '/what-we-do/software' :
                                        item === 'Travel' ? '/what-we-do/travel' :
                                        item === 'Utilities' ? '/what-we-do/utilities' :
                                        item === 'Education' ? '/what-we-do/education' :
                                        item === 'Legal' ? '/what-we-do/legal' :
                                        item === 'Climate' ? '/what-we-do/climate' :
                                        item === 'Agriculture' ? '/what-we-do/agriculture' :
                                        item === 'Real Estate' ? '/what-we-do/real-estate' :
                                        item === 'Media' ? '/what-we-do/media' :
                                        item === 'Fashion' ? '/what-we-do/fashion' :
                                        item === 'Impact' ? '/what-we-do/impact' :
                                        item === 'Logistics' ? '/what-we-do/logistics' :
                                        item === 'Security' ? '/what-we-do/security' :
                                        `/what-we-do/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="block text-gray-300 hover:text-brand-primary transition-colors duration-200 py-1 text-sm"
                                  onClick={() => setIsWhatWeDoDropdownOpen(false)}
                                >
                                  {item}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Column 3 */}
                          <div>
                            <div className="space-y-3">
                              {[
                                'Life Sciences',
                                'Natural Resources',
                                'Public Sector',
                                'Private Equity',
                                'Retail',
                                'Software'
                              ].map((item, index) => (
                                <Link
                                  key={index}
                                  href={item === 'Aerospace' ? '/what-we-do/aerospace' : 
                                        item === 'Automotive' ? '/what-we-do/automotive' : 
                                        item === 'Banking' ? '/what-we-do/banking' :
                                        item === 'Capital Markets' ? '/what-we-do/capital-markets' :
                                        item === 'Chemicals' ? '/what-we-do/chemicals' :
                                        item === 'Communications' ? '/what-we-do/communications' :
                                        item === 'Consumer' ? '/what-we-do/consumer' :
                                        item === 'Energy' ? '/what-we-do/energy' :
                                        item === 'Healthcare' ? '/what-we-do/healthcare' :
                                        item === 'High Tech' ? '/what-we-do/high-tech' :
                                        item === 'Industrial' ? '/what-we-do/industrial' :
                                        item === 'Insurance' ? '/what-we-do/insurance' :
                                        item === 'Life Sciences' ? '/what-we-do/life-sciences' :
                                        item === 'Natural Resources' ? '/what-we-do/natural-resources' :
                                        item === 'Public Sector' ? '/what-we-do/public-sector' :
                                        item === 'Private Equity' ? '/what-we-do/private-equity' :
                                        item === 'Retail' ? '/what-we-do/retail' :
                                        item === 'Software' ? '/what-we-do/software' :
                                        item === 'Travel' ? '/what-we-do/travel' :
                                        item === 'Utilities' ? '/what-we-do/utilities' :
                                        item === 'Education' ? '/what-we-do/education' :
                                        item === 'Legal' ? '/what-we-do/legal' :
                                        item === 'Climate' ? '/what-we-do/climate' :
                                        item === 'Agriculture' ? '/what-we-do/agriculture' :
                                        item === 'Real Estate' ? '/what-we-do/real-estate' :
                                        item === 'Media' ? '/what-we-do/media' :
                                        item === 'Fashion' ? '/what-we-do/fashion' :
                                        item === 'Impact' ? '/what-we-do/impact' :
                                        item === 'Logistics' ? '/what-we-do/logistics' :
                                        item === 'Security' ? '/what-we-do/security' :
                                        `/what-we-do/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="block text-gray-300 hover:text-brand-primary transition-colors duration-200 py-1 text-sm"
                                  onClick={() => setIsWhatWeDoDropdownOpen(false)}
                                >
                                  {item}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Column 4 */}
                          <div>
                            <div className="space-y-3">
                              {[
                                'Travel',
                                'Utilities',
                                'Education',
                                'Legal',
                                'Climate',
                                'Agriculture'
                              ].map((item, index) => (
                                <Link
                                  key={index}
                                  href={item === 'Aerospace' ? '/what-we-do/aerospace' : 
                                        item === 'Automotive' ? '/what-we-do/automotive' : 
                                        item === 'Banking' ? '/what-we-do/banking' :
                                        item === 'Capital Markets' ? '/what-we-do/capital-markets' :
                                        item === 'Chemicals' ? '/what-we-do/chemicals' :
                                        item === 'Communications' ? '/what-we-do/communications' :
                                        item === 'Consumer' ? '/what-we-do/consumer' :
                                        item === 'Energy' ? '/what-we-do/energy' :
                                        item === 'Healthcare' ? '/what-we-do/healthcare' :
                                        item === 'High Tech' ? '/what-we-do/high-tech' :
                                        item === 'Industrial' ? '/what-we-do/industrial' :
                                        item === 'Insurance' ? '/what-we-do/insurance' :
                                        item === 'Life Sciences' ? '/what-we-do/life-sciences' :
                                        item === 'Natural Resources' ? '/what-we-do/natural-resources' :
                                        item === 'Public Sector' ? '/what-we-do/public-sector' :
                                        item === 'Private Equity' ? '/what-we-do/private-equity' :
                                        item === 'Retail' ? '/what-we-do/retail' :
                                        item === 'Software' ? '/what-we-do/software' :
                                        item === 'Travel' ? '/what-we-do/travel' :
                                        item === 'Utilities' ? '/what-we-do/utilities' :
                                        item === 'Education' ? '/what-we-do/education' :
                                        item === 'Legal' ? '/what-we-do/legal' :
                                        item === 'Climate' ? '/what-we-do/climate' :
                                        item === 'Agriculture' ? '/what-we-do/agriculture' :
                                        item === 'Real Estate' ? '/what-we-do/real-estate' :
                                        item === 'Media' ? '/what-we-do/media' :
                                        item === 'Fashion' ? '/what-we-do/fashion' :
                                        item === 'Impact' ? '/what-we-do/impact' :
                                        item === 'Logistics' ? '/what-we-do/logistics' :
                                        item === 'Security' ? '/what-we-do/security' :
                                        `/what-we-do/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="block text-gray-300 hover:text-brand-primary transition-colors duration-200 py-1 text-sm"
                                  onClick={() => setIsWhatWeDoDropdownOpen(false)}
                                >
                                  {item}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Column 5 */}
                          <div>
                            <div className="space-y-3">
                              {[
                                'Real Estate',
                                'Media',
                                'Fashion',
                                'Impact',
                                'Logistics',
                                'Security'
                              ].map((item, index) => (
                                <Link
                                  key={index}
                                  href={item === 'Aerospace' ? '/what-we-do/aerospace' : 
                                        item === 'Automotive' ? '/what-we-do/automotive' : 
                                        item === 'Banking' ? '/what-we-do/banking' :
                                        item === 'Capital Markets' ? '/what-we-do/capital-markets' :
                                        item === 'Chemicals' ? '/what-we-do/chemicals' :
                                        item === 'Communications' ? '/what-we-do/communications' :
                                        item === 'Consumer' ? '/what-we-do/consumer' :
                                        item === 'Energy' ? '/what-we-do/energy' :
                                        item === 'Healthcare' ? '/what-we-do/healthcare' :
                                        item === 'High Tech' ? '/what-we-do/high-tech' :
                                        item === 'Industrial' ? '/what-we-do/industrial' :
                                        item === 'Insurance' ? '/what-we-do/insurance' :
                                        item === 'Life Sciences' ? '/what-we-do/life-sciences' :
                                        item === 'Natural Resources' ? '/what-we-do/natural-resources' :
                                        item === 'Public Sector' ? '/what-we-do/public-sector' :
                                        item === 'Private Equity' ? '/what-we-do/private-equity' :
                                        item === 'Retail' ? '/what-we-do/retail' :
                                        item === 'Software' ? '/what-we-do/software' :
                                        item === 'Travel' ? '/what-we-do/travel' :
                                        item === 'Utilities' ? '/what-we-do/utilities' :
                                        item === 'Education' ? '/what-we-do/education' :
                                        item === 'Legal' ? '/what-we-do/legal' :
                                        item === 'Climate' ? '/what-we-do/climate' :
                                        item === 'Agriculture' ? '/what-we-do/agriculture' :
                                        item === 'Real Estate' ? '/what-we-do/real-estate' :
                                        item === 'Media' ? '/what-we-do/media' :
                                        item === 'Fashion' ? '/what-we-do/fashion' :
                                        item === 'Impact' ? '/what-we-do/impact' :
                                        item === 'Logistics' ? '/what-we-do/logistics' :
                                        item === 'Security' ? '/what-we-do/security' :
                                        `/what-we-do/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="block text-gray-300 hover:text-brand-primary transition-colors duration-200 py-1 text-sm"
                                  onClick={() => setIsWhatWeDoDropdownOpen(false)}
                                >
                                  {item}
                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
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
            <div className="hidden md:flex items-center justify-center w-[200px] gap-4">
              <Link
                href="/login"
                className={`px-4 py-1.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeSection === 'login'
                    ? 'bg-brand-primary text-black'
                    : 'bg-transparent text-gray-300 border border-brand-primary/30 hover:bg-brand-primary hover:text-black hover:border-brand-primary'
                }`}
                onClick={() => handleLinkClick('login')}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className={`px-4 py-1.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeSection === 'signup'
                    ? 'bg-brand-primary text-black'
                    : 'bg-transparent text-gray-300 border border-brand-primary/30 hover:bg-brand-primary hover:text-black hover:border-brand-primary'
                }`}
                onClick={() => handleLinkClick('signup')}
              >
                Sign in
              </Link>
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
            <div className="space-y-2">
              <button
                onClick={() => {
                  setIsWhatWeDoDropdownOpen(!isWhatWeDoDropdownOpen);
                  handleLinkClick('what-we-do');
                }}
                className={`w-full flex items-center justify-between px-3 py-2 font-bold text-lg transition-colors rounded-lg ${getActiveStyles('what-we-do')?.text || ''} ${getActiveStyles('what-we-do')?.background || ''} ${getActiveStyles('what-we-do')?.border || ''} ${getActiveStyles('what-we-do')?.hover || ''}`}
              >
                What We Do
                {isWhatWeDoDropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {/* Mobile Dropdown */}
              {isWhatWeDoDropdownOpen && (
                <div className="ml-4 space-y-2 bg-gray-900/50 rounded-lg p-3">
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        'Aerospace', 'Automotive', 'Banking', 'Capital Markets', 'Chemicals', 'Communications',
                        'Consumer', 'Energy', 'Healthcare', 'High Tech', 'Industrial', 'Insurance',
                        'Life Sciences', 'Natural Resources', 'Public Sector', 'Private Equity', 'Retail', 'Software',
                        'Travel', 'Utilities', 'Education', 'Legal', 'Climate', 'Agriculture',
                        'Real Estate', 'Media', 'Fashion', 'Impact', 'Logistics', 'Security'
                      ].map((item, index) => (
            <Link 
                          key={index}
                          href={`/what-we-do/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block text-gray-400 hover:text-brand-primary transition-colors text-xs py-1"
                          onClick={() => {
                            setIsWhatWeDoDropdownOpen(false);
                            setIsOpen(false);
                          }}
                        >
                          {item}
            </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
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
            <div className="flex gap-2 px-3 py-2">
              <Link
                href="/login"
                className={`flex-1 text-center px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeSection === 'login'
                    ? 'bg-brand-primary text-black'
                    : 'bg-transparent text-gray-300 border border-brand-primary/30'
                }`}
                onClick={() => handleLinkClick('login')}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className={`flex-1 text-center px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeSection === 'signup'
                    ? 'bg-brand-primary text-black'
                    : 'bg-transparent text-gray-300 border border-brand-primary/30'
                }`}
                onClick={() => handleLinkClick('signup')}
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;