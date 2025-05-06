const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transform your design workflow with our AI-powered tools and features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Sitemaps",
              description: "Generate comprehensive sitemaps automatically based on your content structure"
            },
            {
              title: "Smart Wireframes",
              description: "Create professional wireframes with AI assistance in minutes"
            },
            {
              title: "Style Guide Generator",
              description: "Generate consistent style guides that match your brand identity"
            }
          ].map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border border-[#6248ff]/20 hover:border-[#6248ff] transition-colors">
              <h3 className="text-xl font-semibold text-[#d0ed01] mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;