"use client";

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const faqs = [
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

  useEffect(() => {
    if (sectionRef.current) {
      const section = sectionRef.current;
      
      // Create the animation
      gsap.fromTo(
        section.querySelectorAll('.faq-item'),
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-black min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item border-b border-gray-700 py-4">
              <button
                className="w-full flex items-center justify-between focus:outline-none"
                onClick={() => handleToggle(idx)}
              >
                <span className="text-lg font-semibold text-white text-left">
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
              {openIndex === idx && (
                <div className="mt-3 text-gray-400 text-base animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
