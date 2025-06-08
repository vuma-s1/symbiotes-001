'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { HiCheck, HiOutlineLightningBolt, HiOutlineCalendar, HiOutlineTag, HiOutlineColorSwatch } from 'react-icons/hi';

export default function BookCallPage() {
  const [isMounted, setIsMounted] = useState(false);
  const courseBannerUrl = "/images/bhai.jpg"; // Replace with your image URL

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-start justify-center min-h-screen bg-black p-4 text-white pt-12 md:pt-24">
      {/* Left: Content Section */}
      <div className="w-full md:w-2/3 max-w-2xl md:pr-8 flex flex-col justify-center mt-12 md:mt-20">
        {/* Title and Price Section */}
        <div className="text-left mb-8">
          <h2 className="font-bold text-3xl md:text-5xl leading-tight mb-4 text-white">
            BOOK YOUR <span className="uppercase">"Strategy Call"</span>
          </h2>
        </div>
        {/* Description Section */}
        <div className="text-left mb-16">
          <div className="flex items-start mb-2">
            <span className="text-red-400 text-3xl mr-3" style={{ color: '#d0ed01' }}>✔</span>
            <p className="text-lg md:text-xl text-white font-medium">
              Get a personalized 1-on-1 strategy call with our experts. We'll analyze your business, provide actionable insights, and create a custom roadmap for your success.
            </p>
          </div>
        </div>
        {/* Book Call Button */}
        <div className="flex justify-center md:justify-start mb-16">
          <button
            className="relative font-bold py-3 px-10 rounded-full text-lg shadow-lg transition-all duration-300 border-2 border-[#d0ed01] bg-gradient-to-r from-[#eaff6b] via-[#d0ed01] to-[#b6c800] text-black hover:from-[#fff] hover:to-[#d0ed01] hover:shadow-[0_0_24px_4px_#d0ed01]"
            style={{ boxShadow: '0 0 16px 2px #d0ed01, 0 2px 8px 0 #fff inset' }}
          >
            <span className="drop-shadow-[0_0_6px_#d0ed01] tracking-wide">Book Your Call Now</span>
          </button>
        </div>
        {/* What You'll Get Section */}
        <div className="bg-black rounded-xl shadow-lg p-8 mb-8 relative max-w-3xl mx-auto mt-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-left leading-tight">What You'll Get in Your Strategy Call</h2>
          <div className="flex flex-col gap-6">
            {/* Feature 1 */}
            <div className="flex items-start bg-black rounded-lg shadow p-6 mb-2 border border-gray-800">
              <div className="flex-shrink-0 mr-6 flex items-center justify-center w-12 h-12 rounded-full" style={{ background: 'rgba(208,237,1,0.18)', boxShadow: '0 4px 16px #d0ed01, 0 1.5px 0 #fff inset' }}>
                <HiOutlineLightningBolt size={32} style={{ color: '#d0ed01', filter: 'drop-shadow(0 2px 6px #d0ed01)' }} />
              </div>
              <div>
                <div className="font-bold text-xl text-white mb-1">Business Analysis & Strategy</div>
                <div className="text-gray-200">Deep dive into your current business model, identify growth opportunities, and create a strategic roadmap for success.</div>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-start bg-black rounded-lg shadow p-6 mb-2 border border-gray-800">
              <div className="flex-shrink-0 mr-6 flex items-center justify-center w-12 h-12 rounded-full" style={{ background: 'rgba(208,237,1,0.18)', boxShadow: '0 4px 16px #d0ed01, 0 1.5px 0 #fff inset' }}>
                <HiOutlineCalendar size={32} style={{ color: '#d0ed01', filter: 'drop-shadow(0 2px 6px #d0ed01)' }} />
              </div>
              <div>
                <div className="font-bold text-xl text-white mb-1">Custom Implementation Plan</div>
                <div className="text-gray-200">Get a detailed 90-day action plan with specific milestones, tasks, and timelines for implementation.</div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-start bg-black rounded-lg shadow p-6 mb-2 border border-gray-800">
              <div className="flex-shrink-0 mr-6 flex items-center justify-center w-12 h-12 rounded-full" style={{ background: 'rgba(208,237,1,0.18)', boxShadow: '0 4px 16px #d0ed01, 0 1.5px 0 #fff inset' }}>
                <HiOutlineTag size={32} style={{ color: '#d0ed01', filter: 'drop-shadow(0 2px 6px #d0ed01)' }} />
              </div>
              <div>
                <div className="font-bold text-xl text-white mb-1">Growth Strategy & Marketing</div>
                <div className="text-gray-200">Learn proven strategies for customer acquisition, retention, and scaling your business effectively.</div>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="flex items-start bg-black rounded-lg shadow p-6 mb-2 border border-gray-800">
              <div className="flex-shrink-0 mr-6 flex items-center justify-center w-12 h-12 rounded-full" style={{ background: 'rgba(208,237,1,0.18)', boxShadow: '0 4px 16px #d0ed01, 0 1.5px 0 #fff inset' }}>
                <HiOutlineColorSwatch size={32} style={{ color: '#d0ed01', filter: 'drop-shadow(0 2px 6px #d0ed01)' }} />
              </div>
              <div>
                <div className="font-bold text-xl text-white mb-1">Resource & Tool Recommendations</div>
                <div className="text-gray-200">Get access to our curated list of tools, resources, and templates to accelerate your business growth.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Image and Info Section */}
      <div className="w-full md:w-1/2 max-w-xl flex flex-col items-center mt-6 md:mt-10">
        {/* Course Image */}
        <div className="w-full h-64 md:h-96 rounded-lg flex items-center justify-center mb-6 overflow-hidden" style={{ background: 'transparent' }}>
          <img
            src={courseBannerUrl}
            alt="Strategy Call"
            className="object-contain w-full h-full rounded-lg shadow-lg"
            style={{ background: 'transparent' }}
          />
        </div>
        {/* Trustpilot Section */}
        <div className="w-full flex flex-col gap-6 mt-2">
          <div className="flex flex-col items-center bg-black/40 rounded-lg p-4 border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 2l3.09 6.26L24 9.27l-5 4.87L20.18 22 14 18.27 7.82 22 9 14.14l-5-4.87 6.91-1.01L14 2z" fill="#d0ed01"/></svg>
              <span className="font-bold text-white text-lg">Trustpilot</span>
            </div>
            <div className="flex gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#d0ed01"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
              ))}
            </div>
            <div className="text-white text-sm">TrustScore <span className="font-bold">4.8</span> | <span className="font-bold">484</span> reviews</div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="w-full rounded-2xl p-4 mt-6" style={{ background: 'rgba(30, 30, 30, 0.35)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
          <h3 className="text-xl font-bold text-white mb-6">What Our Clients Say</h3>
          <div className="flex flex-col gap-4">
            {/* Testimonial 1 */}
            <div className="rounded-xl p-4 flex flex-row items-start border border-white/10 bg-white/10">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 1" className="w-10 h-10 rounded-full border border-[#d0ed01] object-cover mr-3" />
              <div>
                <div className="text-lg mb-1" style={{ color: '#d0ed01' }}>"</div>
                <div className="text-white text-sm mb-1">The strategy call was a game-changer for my business. The insights and action plan were exactly what I needed.</div>
                <div className="font-semibold text-white text-xs">Sarah Johnson, E-commerce Founder</div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="rounded-xl p-4 flex flex-row items-start border border-white/10 bg-white/10">
              <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="User 2" className="w-10 h-10 rounded-full border border-[#d0ed01] object-cover mr-3" />
              <div>
                <div className="text-lg mb-1" style={{ color: '#d0ed01' }}>"</div>
                <div className="text-white text-sm mb-1">Worth every penny! The personalized strategy and implementation plan helped me scale my business 3x in 6 months.</div>
                <div className="font-semibold text-white text-xs">Michael Chen, SaaS Entrepreneur</div>
              </div>
            </div>
          </div>
        </div>
        {/* Book Call Button */}
        <div className="flex justify-center md:justify-start mt-8 mb-4">
          <button
            className="relative font-bold py-3 px-10 rounded-full text-lg shadow-lg transition-all duration-300 border-2 border-[#d0ed01] bg-gradient-to-r from-[#eaff6b] via-[#d0ed01] to-[#b6c800] text-black hover:from-[#fff] hover:to-[#d0ed01] hover:shadow-[0_0_24px_4px_#d0ed01]"
            style={{ boxShadow: '0 0 16px 2px #d0ed01, 0 2px 8px 0 #fff inset' }}
          >
            <span className="drop-shadow-[0_0_6px_#d0ed01] tracking-wide">Book Your Call Now</span>
          </button>
        </div>
      </div>
    </div>
  );
} 