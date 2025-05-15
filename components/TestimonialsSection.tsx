'use client';
import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <section className="py-32 relative overflow-hidden bg-black/80">
      {/* Space-themed SVG background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="space-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
              <circle cx="10" cy="10" r="0.5" fill="white" />
              <circle cx="15" cy="5" r="0.7" fill="white" />
              <circle cx="5" cy="15" r="0.3" fill="white" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100" height="100" fill="url(#space-pattern)" />
        </svg>
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
            className="text-xl text-purple-200 max-w-2xl mx-auto"
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