'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Stars = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

interface Testimonial {
  name: string;
  subtitle: string;
  avatarGradient: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "James",
    subtitle: "@james",
    avatarGradient: "bg-gradient-to-br from-green-400 via-blue-500 to-purple-500",
    quote: "They don't just deliver; they go above and beyond. Exceptional service and outstanding results every time."
  },
  {
    name: "Rahul Mehta",
    subtitle: "CEO of TechWave",
    avatarGradient: "bg-gradient-to-br from-yellow-400 via-green-400 to-yellow-600",
    quote: "Symbiotes is a game-changer. They helped us scale our revenue by 300% while cutting ad costs in half!"
  },
  {
    name: "Neha Agarwal",
    subtitle: "Founder of StyleNests",
    avatarGradient: "bg-gradient-to-br from-blue-500 via-pink-500 to-purple-500",
    quote: "From strategy to execution, they've been the partners we didn't know we needed. Outstanding results!"
  }
];

const TestimonialsSection: React.FC = () => {
  // Add keyframes for the twinkle animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes twinkle {
        0% {
          opacity: 0.2;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0.2;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* Stars Background */}
      <Stars />
      
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0a0a0a] opacity-90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d0ed01] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#eaff6b] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Voices of Success
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Discover how teams are achieving extraordinary results
          </motion.p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative group ${
                  index === 1 ? 'lg:translate-y-12' : index === 2 ? 'lg:translate-y-24' : ''
                }`}
              >
                <div className="relative bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-colors">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <div className={`w-10 h-10 rounded-full ${testimonial.avatarGradient} mr-3`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-300">{testimonial.subtitle}</p>
                    </div>
                  </div>
                  <div className="relative px-0">
                    <p className="text-gray-200 leading-relaxed mb-0 relative z-10">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;