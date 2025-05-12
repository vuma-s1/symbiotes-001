import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <Image src="/images/logo.png" alt="Logo" width={180} height={60} className="mb-4" />
            <p className="text-white text-sm mb-6">Empowering AI-driven solutions for a smarter future.</p>
          </div>

          {/* Top Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-white font-semibold mb-4">Top Links</h4>
            <ul className="space-y-2 text-center">
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">Incubator</a></li>
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">Community</a></li>
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">Launch 0-1 </a></li>
            </ul>
          </div>

          {/* Book Call */}
          <div className="flex flex-col items-center">
            <h4 className="text-white font-semibold mb-4">Get Started</h4>
            <button className="bg-[#d0ed01] text-black px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors">
              Book a Call
            </button>
          </div>
        </div>
        {/* Social Icons */}
        <div className="mt-12 flex justify-start">
          <div className="flex space-x-6">
            <a href="#" className="group">
              <FaFacebookF className="text-[#1877F3] text-2xl hover:text-[#d0ed01] transition-colors" />
            </a>
            <a href="#" className="group">
              <FaXTwitter className="text-[#1DA1F2] text-2xl hover:text-[#d0ed01] transition-colors" />
            </a>
            <a href="#" className="group">
              <FaInstagram className="text-[#E4405F] text-2xl hover:text-[#d0ed01] transition-colors" />
            </a>
            <a href="#" className="group">
              <FaLinkedinIn className="text-[#0A66C2] text-2xl hover:text-[#d0ed01] transition-colors" />
            </a>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">Copyright © 2025 <a href="#" className="text-[#d0ed01] hover:underline">Symbiotes</a>. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/refund" className="text-white text-sm hover:text-[#d0ed01] transition-colors">Refund Policy</a>
            <a href="/privacy-policy" className="text-white text-sm hover:text-[#d0ed01] transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-white text-sm hover:text-[#d0ed01] transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;