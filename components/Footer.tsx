import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Get Contact */}
          <div className="flex flex-col items-start">
            <Image src="/images/logo.png" alt="Logo" width={180} height={60} className="mb-4" />
            <p className="text-white text-sm mb-6">Empowering AI-driven solutions for a smarter future.</p>
            <h4 className="text-xs tracking-widest text-white mb-2">GET CONTACT</h4>
            <div className="flex items-center text-white mb-2">
              <FaEnvelope className="mr-2" />
              <span className="font-semibold text-lg">your email address</span>
            </div>
            <div className="flex items-center text-white mb-1">
              <FaPhone className="mr-2" />
              <span>+99 88 55 666 000</span>
            </div>
            <div className="flex items-center text-white">
              <FaMapMarkerAlt className="mr-2" />
              <span>13 Road Mirpur Street, 600New York, USA</span>
            </div>
          </div>

          {/* Follow Me */}
          <div className="flex flex-col items-start">
            <h4 className="text-white font-semibold mb-4">Follow Me</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center group">
                  <FaFacebookF className="mr-2 text-[#1877F3]" />
                  <span className="text-white group-hover:text-[#d0ed01] transition-colors">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center group">
                  <FaXTwitter className="mr-2 text-[#1DA1F2]" />
                  <span className="text-white group-hover:text-[#d0ed01] transition-colors">X</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center group">
                  <FaInstagram className="mr-2 text-[#E4405F]" />
                  <span className="text-white group-hover:text-[#d0ed01] transition-colors">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center group">
                  <FaLinkedinIn className="mr-2 text-[#0A66C2]" />
                  <span className="text-white group-hover:text-[#d0ed01] transition-colors">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Top Links */}
          <div className="flex flex-col items-start">
            <h4 className="text-white font-semibold mb-4">Top Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">About Us</a></li>
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">Faq</a></li>
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">Terms of service</a></li>
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">We&#39;re Hiring</a></li>
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">News & Media</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div className="flex flex-col items-start">
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">Our Team</a></li>
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">Latest Portfolio</a></li>
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">Our Service</a></li>
              <li><a href="#" className="text-white hover:text-[#d0ed01] transition-colors">Pricing</a></li>
            </ul>
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