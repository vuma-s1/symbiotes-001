const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from designers and developers who have transformed their workflow with Relume
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Lead Designer at TechCorp",
              image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
              quote: "Relume has completely transformed how we approach website design. The AI-powered features save us countless hours while maintaining creative control."
            },
            {
              name: "Michael Chen",
              role: "Frontend Developer",
              image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
              quote: "The integration between design and development is seamless. It's like having an AI assistant that understands both worlds."
            },
            {
              name: "Emily Rodriguez",
              role: "Creative Director",
              image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
              quote: "Our team's productivity has increased dramatically since we started using Relume. The AI suggestions are incredibly intuitive."
            }
          ].map((testimonial, index) => (
            <div key={index} className="p-6 rounded-xl border border-[#6248ff]/20">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-400 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;