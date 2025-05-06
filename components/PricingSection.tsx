const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Starter",
              price: "49",
              features: [
                "5 AI-generated sitemaps",
                "10 wireframe exports",
                "Basic style guide",
                "Email support"
              ]
            },
            {
              name: "Professional",
              price: "99",
              features: [
                "Unlimited sitemaps",
                "Unlimited wireframes",
                "Advanced style guide",
                "Priority support",
                "Team collaboration"
              ],
              popular: true
            },
            {
              name: "Enterprise",
              price: "249",
              features: [
                "Everything in Professional",
                "Custom AI training",
                "API access",
                "Dedicated support",
                "Custom integrations"
              ]
            }
          ].map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border ${
                plan.popular
                  ? "border-[#d0ed01] scale-105"
                  : "border-[#6248ff]/20"
              } relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#d0ed01] text-black px-4 py-1 rounded-bl-xl rounded-tr-xl text-sm font-medium">
                  Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-[#d0ed01]">${plan.price}</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <span className="mr-2 text-[#d0ed01]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-6 rounded-lg bg-[#d0ed01] text-black font-medium hover:bg-[#eaff6b] transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;