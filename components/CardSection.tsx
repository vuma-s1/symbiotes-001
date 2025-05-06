'use client';

import { useEffect, useRef } from 'react';

const CardSection = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    const cards = cardsRef.current?.querySelectorAll('.card-item');
    cards?.forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      title: "AI-Powered Design",
      description: "Leverage artificial intelligence to enhance your design workflow and create stunning websites faster than ever.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
    },
    {
      title: "Smart Templates",
      description: "Access a library of intelligent templates that adapt to your brand and content automatically.",
      image: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg"
    },
    {
      title: "Real-time Collaboration",
      description: "Work seamlessly with your team in real-time, with instant updates and version control.",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
    },
    {
      title: "Custom Components",
      description: "Build and save your own reusable components with our intuitive interface.",
      image: "https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text mb-4">
            Why Choose Relume
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how our platform can transform your design workflow
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card-item opacity-0 transform translate-y-16 transition-all duration-1000 ease-out delay-${
                index * 200
              }`}
            >
              <div className="group relative overflow-hidden rounded-xl h-[400px] border border-[#6248ff]/20">
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                </div>
                <div className="relative h-full flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-[#d0ed01] mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-200 transform transition-transform duration-500 group-hover:-translate-y-2">
                    {card.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d0ed01] transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;