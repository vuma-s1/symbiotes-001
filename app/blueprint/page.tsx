'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { HiCheck, HiOutlineLightningBolt, HiOutlineCalendar, HiOutlineTag, HiOutlineColorSwatch } from 'react-icons/hi';

export default function BlueprintPage() {
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
            GET COMPLETE ACCESS TO <span className="uppercase">"Blueprint"</span><br />
            <span className="block mt-2">FOR ONLY <span className="text-[#d0ed01] text-4xl md:text-5xl font-extrabold">$1000</span></span>
          </h2>
        </div>
        {/* Description Section */}
        <div className="text-left mb-16">
          <div className="flex items-start mb-2">
            <span className="text-red-400 text-3xl mr-3" style={{ color: '#d0ed01' }}>✔</span>
            <p className="text-lg md:text-xl text-white font-medium">
              How to Run TikTok Ads course is a step-by-step proven framework to creating TikTok ads that sell. You'll learn how to create valuable, high-converting ads that emulate the look and feel of organic posts on TikTok.
            </p>
          </div>
        </div>
        {/* Get Blueprint Button */}
        <div className="flex justify-center md:justify-start mb-16">
          <button
            className="relative font-bold py-3 px-10 rounded-full text-lg shadow-lg transition-all duration-300 border-2 border-[#d0ed01] bg-gradient-to-r from-[#eaff6b] via-[#d0ed01] to-[#b6c800] text-black hover:from-[#fff] hover:to-[#d0ed01] hover:shadow-[0_0_24px_4px_#d0ed01]"
            style={{ boxShadow: '0 0 16px 2px #d0ed01, 0 2px 8px 0 #fff inset' }}
          >
            <span className="drop-shadow-[0_0_6px_#d0ed01] tracking-wide">Get Blueprint</span>
          </button>
        </div>
        {/* Progress Steps Section */}
        <div className="bg-black rounded-xl shadow-lg p-8 mb-8 relative max-w-3xl mx-auto mt-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-left leading-tight">Get the Full AI-Powered Startup Blueprint</h2>
          <div className="flex flex-col gap-6">
            {/* New Feature 1 */}
            <div className="flex items-start bg-black rounded-lg shadow p-6 mb-2 border border-gray-800">
              <div className="flex-shrink-0 mr-6 flex items-center justify-center w-12 h-12 rounded-full" style={{ background: 'rgba(208,237,1,0.18)', boxShadow: '0 4px 16px #d0ed01, 0 1.5px 0 #fff inset' }}>
                <HiOutlineLightningBolt size={32} style={{ color: '#d0ed01', filter: 'drop-shadow(0 2px 6px #d0ed01)' }} />
              </div>
              <div>
                <div className="font-bold text-xl text-white mb-1">Your Entire Startup, Mapped Out in Minutes</div>
                <div className="text-gray-200">From idea to revenue, we auto-generate your complete business model — including value prop, monetization plan, GTM strategy, and execution flow. No templates. No fluff. Just a full system built around your vision.</div>
              </div>
            </div>
            {/* New Feature 2 */}
            <div className="flex items-start bg-black rounded-lg shadow p-6 mb-2 border border-gray-800">
              <div className="flex-shrink-0 mr-6 flex items-center justify-center w-12 h-12 rounded-full" style={{ background: 'rgba(208,237,1,0.18)', boxShadow: '0 4px 16px #d0ed01, 0 1.5px 0 #fff inset' }}>
                <HiOutlineCalendar size={32} style={{ color: '#d0ed01', filter: 'drop-shadow(0 2px 6px #d0ed01)' }} />
              </div>
              <div>
                <div className="font-bold text-xl text-white mb-1">A 90-Day Launch Calendar — With Tasks & SOPs</div>
                <div className="text-gray-200">You'll receive a ready-to-use timeline with weekly goals, prioritized tasks, and built-in SOPs. It's like having a project manager, strategist, and co-founder — all in one.</div>
              </div>
            </div>
            {/* New Feature 3 */}
            <div className="flex items-start bg-black rounded-lg shadow p-6 mb-2 border border-gray-800">
              <div className="flex-shrink-0 mr-6 flex items-center justify-center w-12 h-12 rounded-full" style={{ background: 'rgba(208,237,1,0.18)', boxShadow: '0 4px 16px #d0ed01, 0 1.5px 0 #fff inset' }}>
                <HiOutlineTag size={32} style={{ color: '#d0ed01', filter: 'drop-shadow(0 2px 6px #d0ed01)' }} />
              </div>
              <div>
                <div className="font-bold text-xl text-white mb-1">Instant Clarity on Your Audience, Brand, and Growth Stack</div>
                <div className="text-gray-200">Define your perfect customer, sharpen your positioning, and unlock content, ad, and outreach playbooks tailored to your market. From day one, you'll know how to grow.</div>
              </div>
            </div>
            {/* New Feature 4 */}
            <div className="flex items-start bg-black rounded-lg shadow p-6 mb-2 border border-gray-800">
              <div className="flex-shrink-0 mr-6 flex items-center justify-center w-12 h-12 rounded-full" style={{ background: 'rgba(208,237,1,0.18)', boxShadow: '0 4px 16px #d0ed01, 0 1.5px 0 #fff inset' }}>
                <HiOutlineColorSwatch size={32} style={{ color: '#d0ed01', filter: 'drop-shadow(0 2px 6px #d0ed01)' }} />
              </div>
              <div>
                <div className="font-bold text-xl text-white mb-1">Done-for-You Creative, Talent & Execution Pods</div>
                <div className="text-gray-200">We generate a launch-ready brand kit, suggest exact roles to hire (or plug into), and give you access to curated pods — design, tech, content, and more — ready to build with you on demand.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Image and Info Section */}
      <div className="w-full md:w-1/2 max-w-xl flex flex-col items-center mt-6 md:mt-10">
        {/* Placeholder for course image, to be uploaded later */}
        <div className="w-full h-64 md:h-96 rounded-lg flex items-center justify-center mb-6 overflow-hidden" style={{ background: 'transparent' }}>
          <img
            src={courseBannerUrl}
            alt="Course Banner"
            className="object-contain w-full h-full rounded-lg shadow-lg"
            style={{ background: 'transparent' }}
          />
        </div>
        {/* Trustpilot and Secure Section below image */}
        <div className="w-full flex flex-col gap-6 mt-2">
          {/* Trustpilot Section */}
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
          {/* Info Icons Section */}
          <div className="flex flex-row items-center justify-between gap-4 bg-black/40 rounded-lg p-4 border border-white/10">
            <div className="flex items-center gap-2">
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" fill="#d0ed01"/><path d="M8 24v-2a4 4 0 014-4h8a4 4 0 014 4v2" stroke="#000" strokeWidth="2" strokeLinecap="round"/><path d="M16 16a6 6 0 100-12 6 6 0 000 12z" stroke="#000" strokeWidth="2"/></svg>
              <span className="font-semibold text-white text-base">20,000+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" fill="#d0ed01"/><path d="M16 29C8.82 29 3 23.18 3 16.5V8.82A2.82 2.82 0 015.82 6h20.36A2.82 2.82 0 0129 8.82v7.68C29 23.18 23.18 29 16 29z" stroke="#000" strokeWidth="2"/><path d="M16 19a3 3 0 100-6 3 3 0 000 6z" stroke="#000" strokeWidth="2"/></svg>
              <span className="font-semibold text-white text-base">SECURE TRANSACTION</span>
            </div>
          </div>
        </div>
        {/* Bonuses Section */}
        <div className="w-full bg-black rounded-lg shadow p-6 mt-6">
          <h4 className="font-bold text-lg text-white mb-4">You'll Also Receive Instant Access To<br />These 7 Exclusive Symbiotes Bonuses – Free</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full mr-3" style={{ background: '#d0ed01' }}>
                <HiCheck className="text-black" size={16} />
              </span>
              <span className="text-white text-base font-medium">BONUS 1: AI Blueprint Generator – Instantly map your entire startup plan from a single idea</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full mr-3" style={{ background: '#d0ed01' }}>
                <HiCheck className="text-black" size={16} />
              </span>
              <span className="text-white text-base font-medium">BONUS 2: Prebuilt brand kit templates (logo, colors, fonts – all done for you)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full mr-3" style={{ background: '#d0ed01' }}>
                <HiCheck className="text-black" size={16} />
              </span>
              <span className="text-white text-base font-medium">BONUS 3: Launch-ready Task Calendar with SOPs for every major milestone</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full mr-3" style={{ background: '#d0ed01' }}>
                <HiCheck className="text-black" size={16} />
              </span>
              <span className="text-white text-base font-medium">BONUS 4: 50+ startup model templates to jumpstart your execution</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full mr-3" style={{ background: '#d0ed01' }}>
                <HiCheck className="text-black" size={16} />
              </span>
              <span className="text-white text-base font-medium">BONUS 5: Growth Pod Scripts – proven cold outreach, funnel, and ad copy templates</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full mr-3" style={{ background: '#d0ed01' }}>
                <HiCheck className="text-black" size={16} />
              </span>
              <span className="text-white text-base font-medium">BONUS 6: Creator Marketplace Access – vetted freelancers & micro-agencies on demand</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full mr-3" style={{ background: '#d0ed01' }}>
                <HiCheck className="text-black" size={16} />
              </span>
              <span className="text-white text-base font-medium">BONUS 7: "From Zero to Launch" masterclass – step-by-step walkthrough to get live fast</span>
            </li>
          </ul>
        </div>
        {/* Testimonials Section (moved below bonuses) */}
        <div className="w-full rounded-2xl p-4 mt-6" style={{ background: 'rgba(30, 30, 30, 0.35)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
          <h3 className="text-xl font-bold text-white mb-6">What Our Users Say</h3>
          <div className="flex flex-col gap-4">
            {/* Testimonial 1 */}
            <div className="rounded-xl p-4 flex flex-row items-start border border-white/10 bg-white/10">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 1" className="w-10 h-10 rounded-full border border-[#d0ed01] object-cover mr-3" />
              <div>
                <div className="text-lg mb-1" style={{ color: '#d0ed01' }}>“</div>
                <div className="text-white text-sm mb-1">If you want the best-of-the-best for launching your startup, this blueprint is your secret weapon. The clarity and execution plan are next-level.</div>
                <div className="font-semibold text-white text-xs">Kevin King, Startup Mentor</div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="rounded-xl p-4 flex flex-row items-start border border-white/10 bg-white/10">
              <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="User 2" className="w-10 h-10 rounded-full border border-[#d0ed01] object-cover mr-3" />
              <div>
                <div className="text-lg mb-1" style={{ color: '#d0ed01' }}>“</div>
                <div className="text-white text-sm mb-1">I've worked with dozens of frameworks, but nothing comes close to the AI-powered blueprint. It's like having a co-founder who never sleeps.</div>
                <div className="font-semibold text-white text-xs">Bradley Sutton, SaaS Founder</div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="rounded-xl p-4 flex flex-row items-start border border-white/10 bg-white/10">
              <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="User 3" className="w-10 h-10 rounded-full border border-[#d0ed01] object-cover mr-3" />
              <div>
                <div className="text-lg mb-1" style={{ color: '#d0ed01' }}>“</div>
                <div className="text-white text-sm mb-1">The launch calendar and growth stack gave us instant clarity. We hit our first revenue milestone in weeks, not months.</div>
                <div className="font-semibold text-white text-xs">Kian Golzari, Product Builder</div>
              </div>
            </div>
          </div>
        </div>
        {/* Get Blueprint Button below testimonials */}
        <div className="flex justify-center md:justify-start mt-8 mb-4">
          <button
            className="relative font-bold py-3 px-10 rounded-full text-lg shadow-lg transition-all duration-300 border-2 border-[#d0ed01] bg-gradient-to-r from-[#eaff6b] via-[#d0ed01] to-[#b6c800] text-black hover:from-[#fff] hover:to-[#d0ed01] hover:shadow-[0_0_24px_4px_#d0ed01]"
            style={{ boxShadow: '0 0 16px 2px #d0ed01, 0 2px 8px 0 #fff inset' }}
          >
            <span className="drop-shadow-[0_0_6px_#d0ed01] tracking-wide">Get Blueprint</span>
          </button>
        </div>
      </div>
    </div>
  );
}