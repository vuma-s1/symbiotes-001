const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions for your design and development needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Website Design",
              description: "AI-assisted design process that maintains your unique brand identity",
              image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"
            },
            {
              title: "Development",
              description: "Rapid development with clean, maintainable code generation",
              image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
            },
            {
              title: "Consulting",
              description: "Expert guidance on implementing AI in your design workflow",
              image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
            }
          ].map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-[#d0ed01] mb-2">{service.title}</h3>
                <p className="text-gray-200">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;