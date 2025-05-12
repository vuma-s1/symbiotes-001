'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "This platform has completely transformed how our team manages projects. The intuitive interface and powerful features have increased our productivity by 40%."
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    company: "InnovateX",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "The automation capabilities are game-changing. We've reduced manual work by 60% and can focus on what really matters - building great products."
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthLabs",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "The analytics and reporting features give us unprecedented insights into our team's performance. It's like having a crystal ball for project management."
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
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="relative w-16 h-16 rounded-full object-cover border-2 border-purple-500/50"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-purple-200">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="relative px-6">
                    <div className="absolute -left-2 top-0 text-4xl text-purple-500/30 font-serif">&ldquo;</div>
                    <p className="text-gray-300 leading-relaxed mb-6 relative z-10 italic">{testimonial.quote}</p>
                    <div className="absolute -right-2 bottom-0 text-4xl text-purple-500/30 font-serif">&rdquo;</div>
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