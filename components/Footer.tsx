import Image from 'next/image';
import { FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description replaced with image and button */}
          <div className="flex flex-col items-start justify-center col-span-1 md:col-span-1 pl-8 md:pl-12 pt-0">
            <img src="/images/logo.png" alt="symbiotes.ai logo and tagline" className="mb-4 w-auto h-16 ml-[-24px]" />
            <div className="flex flex-col items-center mt-2 w-full">
              <h4 className="text-white font-semibold mb-4 text-xl">Get Started</h4>
              <button className="bg-[#d0ed01] text-black px-6 py-2 rounded-full font-bold text-base hover:bg-white transition-colors shadow-md">Book a Call</button>
            </div>
          </div>

          {/* Products */}
          <div className="flex flex-col items-start">
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">Features</a></li>
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">FAQs</a></li>
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Pages */}
          <div className="flex flex-col items-start">
            <h4 className="text-white font-semibold mb-4">Pages</h4>
            <ul className="space-y-2">
            <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">Blog</a></li>
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">Partners</a></li>
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">Events</a></li>
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* Links */}
          <div className="flex flex-col items-start">
            <h4 className="text-white font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">Launch 0-1</a></li>
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">Incubator</a></li>
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start">
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white text-sm mb-4">
              <li>help@Symbiotes.com</li>
              <li>sales@Symbiotes.com</li>
              <li>careers@Symbiotes.com</li>
            </ul>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="group"><FaInstagram className="text-white text-xl hover:text-[#d0ed01] transition-colors" /></a>
              <a href="#" className="group"><FaXTwitter className="text-white text-xl hover:text-[#d0ed01] transition-colors" /></a>
              <a href="#" className="group"><FaYoutube className="text-white text-xl hover:text-[#d0ed01] transition-colors" /></a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">Copyright © 2025 <a href="#" className="text-[#d0ed01] hover:underline">Symbiotes</a>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;