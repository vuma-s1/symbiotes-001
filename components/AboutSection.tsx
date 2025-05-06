const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text mb-6">
              About Relume
            </h2>
            <p className="text-gray-400 mb-6">
              We're revolutionizing the way designers and developers work together. Our AI-powered platform streamlines the website creation process while maintaining the human touch that makes great design truly special.
            </p>
            <p className="text-gray-400">
              Founded by designers for designers, we understand the challenges of modern web development and are here to help you overcome them.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                alt="Team collaboration"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;