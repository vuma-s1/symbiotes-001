"use client";

import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Stars = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const createStars = () => {
      const starsContainer = starsRef.current;
      if (!starsContainer) return;

      // Clear existing stars
      starsContainer.innerHTML = '';

      // Create multiple stars
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 2 + 1;
        
        // Random animation duration
        const duration = Math.random() * 3 + 2;
        
        star.style.cssText = `
          position: absolute;
          left: ${x}%;
          top: ${y}%;
          width: ${size}px;
          height: ${size}px;
          background: white;
          border-radius: 50%;
          opacity: ${Math.random()};
          animation: twinkle ${duration}s infinite;
        `;
        
        starsContainer.appendChild(star);
      }
    };

    createStars();
  }, []);

  return (
    <div 
      ref={starsRef} 
      className="absolute inset-0 w-full h-full z-10"
      style={{
        background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0, 0, 0, 0.37) 100%)'
      }}
    />
  );
};

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Is this just another info product or course?",
    answer: "Nope. Symbiotes is a system — not just content. You get a personalized launch blueprint, real tools, and ongoing support to help you actually execute."
  },
  {
    question: "What if I don't have an idea yet?",
    answer: "Perfect. Symbiotes helps you validate problems, explore high-signal opportunities, and identify gaps in the market before you build anything."
  },
  {
    question: "Can I use Symbiotes if I've already launched?",
    answer: "Absolutely. Whether you're pre-product, mid-launch, or stuck post-launch, we'll meet you where you are and show you what to do next."
  },
  {
    question: "What's in the launch blueprint?",
    answer: "It's a personalized, stage-specific plan that outlines your next steps, growth strategy, and tactical actions — paired with a workbook you can use to execute."
  },
  {
    question: "How is this different from just hiring an agency or consultant?",
    answer: "Symbiotes combines the thinking of a strategist, the clarity of a coach, and the speed of an operator — all inside one interactive system designed to help you do it yourself (or with us, if you want)."
  },
  {
    question: "What happens after I generate my blueprint?",
    answer: "You'll unlock access to the Launch Command Center — our project management dashboard — and can optionally plug into our services, community, or incubator if you need deeper support."
  },
  {
    question: "Is this for solo founders or teams?",
    answer: "Both. Whether you're a team of one or ten, the system adapts to your stage and structure — and the execution tools work for either."
  },
  {
    question: "What if I'm not technical?",
    answer: "No problem. Many of our founders aren't. We help you prioritize, validate, and move forward — without needing to code or hire a dev on Day 1."
  },
  {
    question: "Do you offer hands-on support or done-for-you services?",
    answer: "Yes. If you want extra help, you can plug into our internal pods for growth, design, content, or tech — or work with vetted operators from our EdTech community."
  },
  {
    question: "How long does it take to start seeing results?",
    answer: "You'll get your launch blueprint instantly. Most founders start executing within 24–48 hours — and we've seen people close sales, grow waitlists, and refine offers within the first week."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes twinkle {
        0% { opacity: 0.2; }
        50% { opacity: 1; }
        100% { opacity: 0.2; }
      }
    `;
    document.head.appendChild(style);

    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.faq-item'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none none",
            once: true
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 bg-black min-h-screen overflow-hidden overflow-x-hidden">
      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-16 bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item border-b border-gray-700 py-4">
              <button
                type="button"
                className="w-full flex items-center justify-between focus:outline-none hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-base font-semibold text-white text-left">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 ml-2 transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="#d0ed01"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-400 text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
