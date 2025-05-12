import React from 'react';

const tickItems = [
  {
    name: 'Copywriting',
    description: 'Compelling content that converts',
    icon: '✍️'
  },
  {
    name: 'Design',
    description: 'Visual excellence that engages',
    icon: '🎨'
  },
  {
    name: 'Performance Marketing',
    description: 'Data-driven growth strategies',
    icon: '📈'
  },
  {
    name: 'Sales',
    description: 'Revenue acceleration',
    icon: '💰'
  },
  {
    name: 'Tech/Automation',
    description: 'Efficient scaling solutions',
    icon: '⚡'
  }
];

const FiveProcessSection = () => (
  <section className="py-20 bg-black w-full overflow-hidden">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#d0ed01] mb-6">
        Your Growth Support System
      </h2>
      <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
        Five powerful services working together to accelerate your growth
      </p>
      
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          {tickItems.map((item, idx) => (
            <div 
              key={idx} 
              className="relative group"
            >
              {/* Vertical Connection Line */}
              <div className="absolute left-1/2 -top-8 h-8 w-0.5 bg-[#d0ed01] opacity-20 hidden md:block" />
              
              <div className="relative flex flex-col items-center">
                {/* Circle with Icon and Tick Mark */}
                <div className="w-24 h-24 rounded-full bg-black border-2 border-[#d0ed01] flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 relative overflow-hidden group-hover:border-[#d0ed01] group-hover:shadow-[0_0_20px_rgba(208,237,1,0.3)]">
                  <span className="text-3xl z-10 group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                  
                  {/* Tick Mark SVG */}
                  <svg 
                    className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="50" cy="50" r="48" stroke="#d0ed01" strokeWidth="3" fill="rgba(208,237,1,0.15)" />
                    <path 
                      d="M30 50L45 65L70 35" 
                      stroke="#d0ed01" 
                      strokeWidth="5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      filter="url(#glow)"
                    />
                    <defs>
                      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>
                  </svg>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-[#d0ed01] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                
                <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-[#d0ed01] transition-colors duration-300">{item.name}</h3>
                <p className="text-gray-400 text-sm text-center group-hover:text-gray-300 transition-colors duration-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FiveProcessSection;