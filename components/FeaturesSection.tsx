const features = [
  {
    num: '01',
    color: 'bg-blue-300 text-blue-800',
    hoverBg: 'hover:bg-[#d0ed01] hover:text-black',
    title: 'Dramatically Improve Launch Success Rate',
    hiddenContent: `Get a personalized roadmap based on 7+ years of proven methods, designed to navigate common early-stage failure points.\nFeature: Custom Mission Blueprints,`,
  },
  {
    num: '02',
    color: 'bg-yellow-300 text-yellow-900',
    hoverBg: 'hover:bg-[#d0ed01] hover:text-black',
    title: 'Validate Ideas Faster, Save Resources',
    hiddenContent: `Leverage AI for rapid market analysis and PMF checks. Avoid costly wrong turns; invest your frugal resources wisely.\nFeature: AI-Powered Validation & Research,`,
  },
  {
    num: '03',
    color: 'bg-pink-200 text-pink-700',
    hoverBg: 'hover:bg-[#d0ed01] hover:text-black',
    title: 'Stay in Command, Reduce Overwhelm.',
    hiddenContent: `Manage your entire launch from one central hub. Keep track of everything without feeling timeless or losing control.\nFeature: Mission Control Dashboard (The Launch Pad),`,
  },
  {
    num: '04',
    color: 'bg-green-200 text-green-700',
    hoverBg: 'hover:bg-[#d0ed01] hover:text-black',
    title: 'Master Each Critical Stage.',
    hiddenContent: `Our framework ensures you systematically address validation, positioning, presence, leads, and launch – tackling the root causes of early failure.\nFeature: Guided Business Stages Framework,`,
  },
  {
    num: '05',
    color: 'bg-purple-100 text-purple-700',
    hoverBg: 'hover:bg-[#d0ed01] hover:text-black',
    title: 'Execute Efficiently, Stay Accountable.',
    hiddenContent: `Automate routine tasks and reminders. Focus your energy on high-impact actions while the system keeps things moving.\nFeature: Automated Guidance & Workflow System,`,
  },
  {
    num: '06',
    color: 'bg-pink-200 text-pink-700',
    hoverBg: 'hover:bg-[#d0ed01] hover:text-black',
    title: 'Amplify Your Capabilities.',
    hiddenContent: `Access vetted experts who understand the frugal, high-intensity startup environment.\nFeature: Symbiotes Growth Crew Network,`,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-[#010101]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text mb-4">
            Engineered to Maximize Success & Minimize Risk.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl bg-[#181818] text-white flex flex-col h-[340px] min-h-[220px] relative shadow-md transition-all duration-300 overflow-hidden cursor-pointer ${feature.hoverBg} hover:scale-105 hover:shadow-2xl`}
            >
              <span className={`absolute top-2 left-6 flex items-center justify-center w-14 h-14 rounded-full font-extrabold text-xl ${feature.color} group-hover:bg-black group-hover:text-white transition-all duration-300`}>{feature.num}</span>
              <h3 className="text-2xl font-bold text-white mb-2 mt-20 group-hover:mt-6 group-hover:text-black transition-all duration-300">{feature.title}</h3>
              {feature.hiddenContent && (
                <div className="opacity-0 max-h-0 translate-y-4 group-hover:opacity-100 group-hover:max-h-72 group-hover:translate-y-0 group-hover:mt-4 transition-all duration-500 ease-in-out text-white group-hover:text-black text-base whitespace-pre-line overflow-y-auto pr-2">
                  {feature.hiddenContent}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;