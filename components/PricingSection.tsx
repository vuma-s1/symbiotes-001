const plans = [
  {
    name: "Starter",
    price: "₹50,000",
    description: "Perfect for small businesses looking to automate their first launch",
    features: [
      "Initial process automation",
      "Basic AI integration",
      "Up to 5 team members",
      "Email support",
      "1 month of maintenance"
    ],
    button: { text: "Get Started", filled: false }
  },
  {
    name: "Growth",
    price: "₹150,000",
    description: "Ideal for growing businesses needing multiple automated launches",
    features: [
      "Multiple process automation",
      "Advanced AI integration",
      "Up to 20 team members",
      "Priority support",
      "3 months of maintenance",
      "Custom reporting"
    ],
    popular: true,
    button: { text: "Get Started", filled: true }
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations requiring comprehensive automation solutions",
    features: [
      "Full process automation",
      "Enterprise AI integration",
      "Unlimited team members",
      "24/7 dedicated support",
      "6 months of maintenance",
      "Custom reporting & analytics",
      "SLA guarantees"
    ],
    button: { text: "Contact Us", filled: false }
  }
];

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
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border transition-all duration-200 ${
                plan.popular
                  ? "border-[#d0ed01] scale-105 bg-black/90"
                  : "border-[#d0ed01]/40 bg-black/80"
              } relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#d0ed01] text-black px-4 py-1 rounded-bl-xl rounded-tr-xl text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold mb-2 text-[#d0ed01]">{plan.price}</div>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-100">
                    <span className="mr-2 text-[#d0ed01]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              {plan.button.filled ? (
                <button className="w-full py-3 px-6 rounded-full bg-[#d0ed01] text-black font-semibold text-lg hover:bg-[#eaff6b] transition-colors">
                  {plan.button.text}
                </button>
              ) : (
                <button className="w-full py-3 px-6 rounded-full border border-[#d0ed01] text-[#d0ed01] font-semibold text-lg bg-transparent hover:bg-[#d0ed01] hover:text-black transition-colors">
                  {plan.button.text}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;