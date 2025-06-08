import React from 'react';

const ProcessCard: React.FC<{icon: string, title: string, desc: string, iconSize?: string}> = ({ icon, title, desc, iconSize }) => (
  <div className="bg-[#1a2600cc] rounded-xl p-5 shadow-2xl flex flex-col items-start min-h-[120px] min-w-[180px] max-w-[240px] mx-auto" style={{boxShadow: '0 0 32px 0 #d0ed0133'}}>
    <div className="flex flex-row items-center gap-3 mb-1 w-full">
      <img src={icon} alt={title + ' icon'} className={iconSize ? iconSize : "w-14 h-14 object-contain"} />
      <span className="font-semibold text-xl text-white">{title}</span>
    </div>
    <span className="text-gray-200 text-sm">{desc}</span>
  </div>
);

const ServicesPage = () => (
  <main className="min-h-screen bg-black text-white relative overflow-hidden">
    {/* Hero Section with Background Image */}
    <section
      className="relative flex flex-col items-center justify-center min-h-screen px-4"
      style={{
        backgroundImage: "url('/images/img2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 flex flex-col items-center w-full" style={{marginTop: '6vh'}}>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-center mb-8 leading-tight" style={{color: '#FFFFFF'}}>
          Where <span
            className="bg-gradient-to-r from-[#d0ed01] to-white bg-clip-text text-transparent"
          >Growth</span> Meets <span
            className="bg-gradient-to-r from-[#d0ed01] to-white bg-clip-text text-transparent"
          >Connection</span>
        </h1>
        <p className="text-lg md:text-2xl text-center mb-2 whitespace-nowrap w-full" style={{color: '#FFFFFF'}}>
          Every business has untapped potential. We don't just find it—we amplify it.
        </p>
        <p className="text-base md:text-lg text-center mb-10 whitespace-nowrap w-full" style={{color: '#FFFFFFcc'}}>
          Symbiotes brings marketing brilliance and technical expertise together to help your brand evolve.
        </p>
        {/* Custom Button with Neon Gradient Background */}
        <button
          className="relative flex items-center justify-center px-12 py-4 mb-16 rounded-full font-bold text-white text-xl shadow-lg"
          style={{
            background: 'linear-gradient(90deg, #212b01 0%, #d0ed01 50%, #212b01 100%)',
            boxShadow: '0 4px 24px 0 rgba(208,237,1,0.25)',
            border: 'none',
          }}
        >
          Let&apos;s Build Your Tomorrow
        </button>
      </div>
      {/* Logos Row - position at bottom of dome */}
      <div className="flex flex-wrap justify-center items-center gap-12 w-full max-w-4xl absolute left-1/2 -translate-x-1/2" style={{bottom: '6vh', marginTop: '0', position: 'absolute'}}>
        <img src="/logos/launch.png" alt="launch logo" className="h-12 object-contain" />
        <img src="/logos/brand2.png" alt="brand2 logo" className="h-12 object-contain" />
        <img src="/logos/sinus.png" alt="sinus logo" className="h-12 object-contain" />
        <img src="/logos/brand4.png" alt="brand4 logo" className="h-12 object-contain" />
        <img src="/logos/bulbit.png" alt="bulbit logo" className="h-12 object-contain" />
      </div>
    </section>
    {/* Why does success feel just out of reach? Section */}
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] px-4 py-20 bg-black overflow-hidden" style={{
      backgroundImage: "url('/images/img1.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4 text-white">
          Why does <span className="text-[#d0ed01]">success</span> feel just out of reach?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-center text-gray-200 mb-12 max-w-2xl">
          Your marketing budget vanishes, but results don&apos;t show up. Campaigns are chaotic, and your competitors outpace you with seemingly half the effort.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            <div className="bg-[#1a2600cc] rounded-xl p-6 shadow-lg text-center text-white min-h-[110px] flex flex-col justify-center" style={{boxShadow: '0 0 32px 0 #d0ed0133'}}>
              <span className="font-semibold text-lg mb-2">You&apos;re Invisible</span>
              <span className="text-gray-300 text-sm">Your audience can&apos;t find you, let alone remember you.</span>
            </div>
            <div className="bg-[#1a2600cc] rounded-xl p-6 shadow-lg text-center text-white min-h-[110px] flex flex-col justify-center" style={{boxShadow: '0 0 32px 0 #d0ed0133'}}>
              <span className="font-semibold text-lg mb-2">Your Audience Isn&apos;t Listening</span>
              <span className="text-gray-300 text-sm">Content isn&apos;t connecting, and your message falls flat.</span>
            </div>
          </div>
          {/* Center column */}
          <div className="flex flex-col gap-8 justify-center items-center">
            <div className="bg-[#263800cc] rounded-xl p-6 shadow-lg text-center text-white min-h-[110px] flex flex-col justify-center" style={{boxShadow: '0 0 40px 0 #d0ed0166'}}>
              <span className="font-semibold text-lg mb-2">You&apos;re Spending Without Returns</span>
              <span className="text-gray-300 text-sm">Every dollar feels wasted without seeing actual growth.</span>
            </div>
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-8">
            <div className="bg-[#1a2600cc] rounded-xl p-6 shadow-lg text-center text-white min-h-[110px] flex flex-col justify-center" style={{boxShadow: '0 0 32px 0 #d0ed0133'}}>
              <span className="font-semibold text-lg mb-2">Your Efforts Don&apos;t Scale</span>
              <span className="text-gray-300 text-sm">Manual processes and outdated strategies keep you stuck.</span>
            </div>
            <div className="bg-[#1a2600cc] rounded-xl p-6 shadow-lg text-center text-white min-h-[110px] flex flex-col justify-center" style={{boxShadow: '0 0 32px 0 #d0ed0133'}}>
              <span className="font-semibold text-lg mb-2">Competitors Are Winning the Battle</span>
              <span className="text-gray-300 text-sm">They&apos;ve outpaced you in visibility, innovation, and results.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Why do 98% of our clients stay with us? Section */}
    <section className="relative flex flex-col items-center justify-center px-4 py-20 bg-black" style={{
      backgroundImage: `repeating-linear-gradient(to right, rgba(255,255,255,0.07) 0, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.07) 0, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 60px)`,
      backgroundColor: '#000',
    }}>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-6 text-white">
          Why do <span className="text-[#d0ed01]">98%</span> of our clients stay with us?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-center text-gray-200 mb-2 max-w-3xl">
          We&apos;re not just another agency with generic solutions.<br />
          We&apos;re your partners, dedicated to uncovering opportunities you&apos;ve never seen, solving challenges you can&apos;t fix, and helping your business reach heights you thought impossible.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mt-12 w-full">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            <FeatureItem icon="/images/ic.png" title="Tailored Strategies, Not Templates:" desc="Every solution is custom-built for your goals." />
            <FeatureItem icon="/images/ic.png" title="Proven ROI:" desc="Over $50M+ revenue generated for our clients." />
            <FeatureItem icon="/images/ic.png" title="Speed That Matches Your Ambition:" desc="Rapid execution to keep you ahead of the competition." />
            <FeatureItem icon="/images/ic.png" title="Transparent Collaboration:" desc="We&apos;re with you every step—clear, honest, and focused on results." />
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-8">
            <FeatureItem icon="/images/ic.png" title="98% Retention Rate:" desc="Our clients stay because we make their success our priority." />
            <FeatureItem icon="/images/ic.png" title="Future-Ready Solutions:" desc="AI, automation, and innovation built into every strategy." />
            <FeatureItem icon="/images/ic.png" title="Always Adapting:" desc="Your business evolves, and so do our strategies." />
            <FeatureItem icon="/images/ic.png" title="Beyond the Contract:" desc="Our support doesn&apos;t end when the campaign does." />
          </div>
        </div>
      </div>
    </section>
    {/* Our process is as simple as it is effective Section */}
    <section className="relative flex flex-col items-center justify-center px-4 py-24 bg-black" style={{
      backgroundImage: `repeating-linear-gradient(to right, rgba(255,255,255,0.07) 0, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.07) 0, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 60px)`,
      backgroundColor: '#000',
    }}>
      {/* Neon orb backgrounds - match reference image */}
      <img src="/images/img3.png" alt="orb background" className="absolute left-[18%] top-[22%] w-[240px] opacity-60 pointer-events-none select-none" style={{zIndex: 0}} />
      <img src="/images/img3.png" alt="orb background" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] opacity-80 pointer-events-none select-none" style={{zIndex: 0}} />
      <img src="/images/img3.png" alt="orb background" className="absolute right-[18%] bottom-[13%] w-[240px] opacity-50 pointer-events-none select-none" style={{zIndex: 0}} />
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-20 -mt-20 text-white">
          Our process is as <span className="text-[#d0ed01]">simple</span> as it is <span className="text-[#d0ed01]">effective</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-8 mt-8">
          <ProcessCard icon="/images/ic1.png" title="Discover" desc="Uncover your audience's preferences and pain points." iconSize="w-20 h-20 -ml-4 object-contain" />
          <ProcessCard icon="/images/ic2.png" title="Blueprint" desc="Create an actionable, step-by-step plan for success." iconSize="w-20 h-20 -ml-4 object-contain" />
          <ProcessCard icon="/images/ic3.png" title="Design & Build" desc="Turn vision into reality with creative execution." />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-2/3 mt-8">
          <ProcessCard icon="/images/ic4.png" title="Launch" desc="Execute campaigns with precision to maximize impact." iconSize="w-14 h-14 object-contain" />
          <ProcessCard icon="/images/ic5.png" title="Optimize" desc="Refine strategies using real-time data for continuous growth." iconSize="w-14 h-14 object-contain" />
        </div>
      </div>
    </section>
    {/* Numbers That Speak for Themselves Section */}
    <section className="relative flex flex-col items-center justify-center px-4 py-24 bg-black" style={{
      backgroundImage: `repeating-linear-gradient(to right, rgba(255,255,255,0.07) 0, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.07) 0, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 60px)`,
      backgroundColor: '#000',
    }}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-16 text-white">
        Numbers That Speak for Themselves
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 w-full max-w-6xl mx-auto">
        <StatCard icon="/images/icc1.png" stat="500+" label="Clients Served" />
        <StatCard icon="/images/icc2.png" stat="700+" label="Projects Delivered" />
        <StatCard icon="/images/icc3.png" stat="50+" label="Industries Impacted" />
        <StatCard icon="/images/icc4.png" stat="5x" label="Average ROI for Clients" />
        <StatCard icon="/images/icc5.png" stat="$10M+" label="in Advertising Spend Managed" />
        <StatCard icon="/images/icc6.png" stat="5M+" label="Views Generated" />
        <StatCard icon="/images/icc7.png" stat="100+" label="Experts in Our Network" />
        <StatCard icon="/images/icc8.png" stat="300+" label="Campaigns Launched" />
      </div>
    </section>
    {/* Services That Sync With Your Launch DNA Section */}
    <section className="relative flex flex-col items-center justify-center px-4 py-24 bg-black" style={{
      backgroundImage: `repeating-linear-gradient(to right, rgba(255,255,255,0.07) 0, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.07) 0, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 60px)`,
      backgroundColor: '#000',
    }}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-6 text-white">
        Services That Sync With Your Launch DNA
      </h2>
      <p className="text-base sm:text-lg text-center text-white mb-12 max-w-3xl mx-auto leading-snug">
        Every strategy, creative, tech, and growth module plugs directly into our 7-Step Symbiotes Framework —so you activate only what you need, exactly when you need it.
      </p>
      <div className="relative flex flex-row items-center justify-center w-full max-w-6xl mx-auto">
        {/* Left Steps */}
        <div className="hidden md:flex flex-col justify-center gap-14 h-[500px] text-right mr-0 min-w-[260px] absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <div>
            <div className="text-white text-base font-normal leading-tight">Step 2: Positioning Craft<br/>Identity & Assets</div>
          </div>
          <div>
            <div className="text-white text-base font-normal leading-tight">Step 4: Lead Generation<br/>Capture & Nurture Demand</div>
          </div>
          <div>
            <div className="text-white text-base font-normal leading-tight">Step 6: Launch Strategy<br/>Monetise Momentum</div>
          </div>
        </div>
        {/* Center Pyramid Image */}
        <div className="flex-shrink-0 mx-0 flex items-center h-[420px]">
          <img src="/images/icc9.png" alt="7-step pyramid" className="h-[420px] w-auto" />
        </div>
        {/* Right Steps */}
        <div className="hidden md:flex flex-col justify-center gap-14 h-[500px] text-left ml-0 min-w-[260px] absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <div>
            <div className="text-white text-base font-normal leading-tight">Step 1: Pre-Positioning<br/>Validate & Strategize</div>
          </div>
          <div>
            <div className="text-white text-base font-normal leading-tight">Step 3: Omnipresence<br/>Become Unmissable</div>
          </div>
          <div>
            <div className="text-white text-base font-normal leading-tight">Step 5: MVP Building<br/>Ship the Core Product</div>
          </div>
          <div>
            <div className="text-white text-base font-normal leading-tight">Step 7: Growth & Performance<br/>Scale What Works</div>
          </div>
        </div>
      </div>
    </section>
    {/* Service Offerings Grid Section */}
    <section className="relative flex flex-col items-center justify-center px-4 py-24 bg-black" style={{
      backgroundImage: `repeating-linear-gradient(to right, rgba(255,255,255,0.07) 0, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.07) 0, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 60px)`,
      backgroundColor: '#000',
    }}>
      {/* Neon grid background */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-white/20 relative overflow-hidden min-w-[280px] max-w-[320px] w-full min-h-[340px] md:min-h-[360px] flex flex-col justify-start" style={{background: 'linear-gradient(to bottom, rgba(208,237,1,0.3) 0%, rgba(0,0,0,0.3) 100%)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: '0 4px 32px 0 #d0ed0133'}}>
            <div className="font-semibold text-white text-lg mb-2">Pre-Positioning<br /><span className='font-normal'>Validate & Strategise</span></div>
            <ul className="text-sm text-white list-disc pl-4 space-y-1">
              <li>Business Launch Program</li>
              <li>Machine-Learning Model Development (market intelligence)</li>
              <li>AI Solutions (rapid desk-research agents)</li>
              <li>Custom Chatbots for competitor / VOI Q&A</li>
              <li>Team Training Program Development (lean-validation skills)</li>
            </ul>
          </div>
          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-white/20 relative overflow-hidden min-w-[280px] max-w-[320px] w-full min-h-[340px] md:min-h-[360px] flex flex-col justify-start" style={{background: 'linear-gradient(to bottom, rgba(208,237,1,0.3) 0%, rgba(0,0,0,0.3) 100%)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: '0 4px 32px 0 #d0ed0133'}}>
            <div className="font-semibold text-white text-lg mb-2">Positioning<br /><span className='font-normal'>Craft Identity & Assets</span></div>
            <ul className="text-sm text-white list-disc pl-4 space-y-1">
              <li><span className="font-semibold text-white">Brand Development</span></li>
              <li><span className="font-semibold text-white">Graphic Design</span></li>
              <li><span className="font-semibold text-white">Video Production & Editing</span></li>
              <li>Web Design & Development</li>
              <li>Content Strategy & Creation (messaging pillars)</li>
              <li>Custom Chatbots (site FAQ bot)</li>
            </ul>
          </div>
          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-white/20 relative overflow-hidden min-w-[280px] max-w-[320px] w-full min-h-[340px] md:min-h-[360px] flex flex-col justify-start" style={{background: 'linear-gradient(to bottom, rgba(208,237,1,0.3) 0%, rgba(0,0,0,0.3) 100%)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: '0 4px 32px 0 #d0ed0133'}}>
            <div className="font-semibold text-white text-lg mb-2">Omnipresence<br /><span className='font-normal'>Become Unmissable</span></div>
            <ul className="text-sm text-white list-disc pl-4 space-y-1">
              <li>Social Media Management</li>
              <li>SEO quick-wins content</li>
              <li>Podcast production & syndication</li>
              <li>Graphic Design assets & motion snippets</li>
              <li>Video Production & Editing for reels/shorts</li>
              <li>WhatsApp Marketing</li>
              <li>Public Relations newsroom seeding</li>
            </ul>
          </div>
          {/* Card 4 */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-white/20 relative overflow-hidden min-w-[280px] max-w-[320px] w-full min-h-[340px] md:min-h-[360px] flex flex-col justify-start" style={{background: 'linear-gradient(to bottom, rgba(208,237,1,0.3) 0%, rgba(0,0,0,0.3) 100%)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: '0 4px 32px 0 #d0ed0133'}}>
            <div className="font-semibold text-white text-lg mb-2">Lead Generation<br /><span className='font-normal'>Capture & Nurture Demand</span></div>
            <ul className="text-sm text-white list-disc pl-4 space-y-1">
              <li>Landing-Page Design & Development</li>
              <li>Performance Marketing</li>
              <li>Lead Generation & Nurturing workflows</li>
              <li>Email Marketing sequences</li>
              <li>ABM</li>
              <li>WhatsApp Marketing</li>
              <li>Automation & Workflow Optimisation</li>
              <li>SEO conversion pages</li>
            </ul>
          </div>
          {/* Card 5 */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-white/20 relative overflow-hidden min-w-[280px] max-w-[320px] w-full min-h-[340px] md:min-h-[360px] flex flex-col justify-start" style={{background: 'linear-gradient(to bottom, rgba(208,237,1,0.3) 0%, rgba(0,0,0,0.3) 100%)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: '0 4px 32px 0 #d0ed0133'}}>
            <div className="font-semibold text-white text-lg mb-2">MVP Building<br /><span className='font-normal'>Ship the Core Product</span></div>
            <ul className="text-sm text-white list-disc pl-4 space-y-1">
              <li>Custom Software Development</li>
              <li>Mobile App Development</li>
              <li>Web Design & Development</li>
              <li>Machine-Learning Model Development</li>
              <li>AI Solutions</li>
              <li>Custom Chatbots</li>
              <li>AR/VR Development</li>
            </ul>
          </div>
          {/* Card 6 */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-white/20 relative overflow-hidden min-w-[280px] max-w-[320px] w-full min-h-[340px] md:min-h-[360px] flex flex-col justify-start" style={{background: 'linear-gradient(to bottom, rgba(208,237,1,0.3) 0%, rgba(0,0,0,0.3) 100%)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: '0 4px 32px 0 #d0ed0133'}}>
            <div className="font-semibold text-white text-lg mb-2">Launch Strategy<br /><span className='font-normal'>Monetize Momentum</span></div>
            <ul className="text-sm text-white list-disc pl-4 space-y-1">
              <li>Performance Marketing</li>
              <li>Public Relations</li>
              <li>Video Production & Editing</li>
              <li>Email Marketing</li>
              <li>WhatsApp Marketing</li>
              <li>Automation & Workflow Optimization (cart timers, CRM)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* Growth & Performance Section (reference image) */}
    <section className="relative flex flex-col items-center justify-center px-4 py-24 bg-black overflow-hidden" style={{
      backgroundImage: `repeating-linear-gradient(to right, rgba(255,255,255,0.07) 0, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.07) 0, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 60px)`,
      backgroundColor: '#000',
    }}>
      {/* Add back icc11 gear images on both sides */}
      <img src="/images/icc11.png" alt="gear left" className="absolute left-40 bottom-1/4 w-72 h-72 opacity-90 pointer-events-none select-none" />
      <img src="/images/icc11.png" alt="gear right" className="absolute right-40 bottom-1/4 w-72 h-72 opacity-90 pointer-events-none select-none scale-x-[-1]" />
      <div className="relative z-10 flex justify-center items-center min-h-[400px]">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-white/20 px-8 py-8 min-w-[280px] max-w-[320px] w-full min-h-[340px] md:min-h-[360px] flex flex-col justify-start items-start" style={{background: 'linear-gradient(to bottom, rgba(208,237,1,0.3) 0%, rgba(0,0,0,0.3) 100%)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: '0 4px 32px 0 #d0ed0133'}}>
          <div className="font-semibold text-white text-lg mb-2 text-left">Growth & Performance<br /><span className="font-normal">Scale What Works</span></div>
          <ul className="text-sm text-white list-disc pl-4 space-y-1 mt-2 text-left">
            <li>Scaling Strategies</li>
            <li>Performance Marketing</li>
            <li>SEO content moat</li>
            <li>Content Strategy & Creation</li>
            <li>Lead Generation & Nurturing</li>
            <li>Email Marketing</li>
            <li>WhatsApp Marketing (support & promos)</li>
            <li>Automation & Workflow Optimization</li>
            <li>Team Training Program Development</li>
          </ul>
        </div>
      </div>
    </section>
    {/* New Section with icc12 background (reference image) */}
    <section className="relative flex flex-col items-center justify-center px-4 py-24 bg-black overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center" style={{height: '540px', position: 'relative'}}>
        <div style={{
          backgroundImage: "url('/images/icc12.png')",
          backgroundSize: '70%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: 0.4,
        }} />
        <div className="relative z-10 w-full flex flex-col items-center justify-center h-full -mt-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-2 text-white">Industry Insights & Market Trends</h2>
          <div className="text-gray-300 text-base text-center mb-1 max-w-3xl">We live and breathe the latest trends, algorithms, and consumer behaviors so you don't have to.<br />From AI's role in customer retention to the future of voice marketing, we integrate what's next into what's now.</div>
          <div className="mt-2 space-y-3 w-full max-w-4xl mx-auto">
            <div className="text-white text-center text-base font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">80% of online conversions come from personalized campaigns — are yours hitting the mark?</div>
            <div className="text-white text-center text-base font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">AI-driven strategies are predicted to generate $126 billion in revenue by 2026. Are you ready to leverage them?</div>
            <div className="text-white text-center text-base font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">93% of businesses with omnichannel strategies outperform their competitors. Are you omnipresent?</div>
            <div className="text-white text-center text-base font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">73% of millennials are willing to spend more on sustainable brands.</div>
            <div className="text-white text-center text-base font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">92% of consumers trust recommendations from creators over traditional ads.</div>
            <div className="text-white text-center text-base font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">91% of consumers are more likely to shop with brands that provide relevant offers and recommendations.</div>
            <div className="text-white text-center text-base font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">76% of people prefer mobile-friendly sites when searching on their smartphones</div>
          </div>
        </div>
      </div>
    </section>
    {/* Real Stories, Real Results Steps Section (reference image style, exact match) */}
    <section className="relative flex flex-col items-center justify-center px-4 py-24 bg-black">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center mb-16 text-white">
        Real Stories, Real Results
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-24 w-full max-w-5xl mx-auto">
        {/* Left Column */}
        <div className="flex flex-col gap-16">
          {/* Step 1 */}
          <div>
            <div className="flex flex-row items-center gap-0 mb-2 justify-start ml-4">
              <div className="relative w-[200px] h-[110px] flex items-center justify-center -ml-14">
                <img src='/images/icc18.png' alt='Step 1' className='absolute w-full h-full object-contain' />
                <span className="relative z-10 text-white font-bold text-sm -ml-2">Step 1</span>
              </div>
              <span className="text-white font-bold text-lg">Audience Research</span>
            </div>
            <div className="text-white text-base leading-snug ml-[114px]">"Discover how your audience perceives<br/>your brand, their preferences,<br/>and what truly matters to them."</div>
          </div>
          {/* Step 3 */}
          <div>
            <div className="flex flex-row items-center gap-0 mb-2 justify-start ml-4">
              <div className="relative w-[200px] h-[110px] flex items-center justify-center -ml-14">
                <img src='/images/icc18.png' alt='Step 3' className='absolute w-full h-full object-contain' />
                <span className="relative z-10 text-white font-bold text-sm -ml-2">Step 3</span>
              </div>
              <span className="text-white font-bold text-lg">Creative Concepting</span>
            </div>
            <div className="text-white text-base leading-snug ml-[114px]">"Craft engaging, original ideas tailored<br/>to your audience."</div>
          </div>
          {/* Step 5 */}
          <div>
            <div className="flex flex-row items-center gap-0 mb-2 justify-start ml-4">
              <div className="relative w-[200px] h-[110px] flex items-center justify-center -ml-14">
                <img src='/images/icc18.png' alt='Step 5' className='absolute w-full h-full object-contain' />
                <span className="relative z-10 text-white font-bold text-sm -ml-2">Step 5</span>
              </div>
              <span className="text-white font-bold text-lg">Data-Driven Refinement</span>
            </div>
            <div className="text-white text-base leading-snug ml-[114px]">"Measure results, analyze feedback, and<br/>refine strategies to drive continuous growth."</div>
          </div>
        </div>
        {/* Right Column */}
        <div className="flex flex-col gap-4">
          {/* Step 2 */}
          <div>
            <div className="flex flex-row items-center gap-0 mb-2 justify-start ml-4">
              <div className="relative w-[200px] h-[110px] flex items-center justify-center -ml-14">
                <img src='/images/icc18.png' alt='Step 2' className='absolute w-full h-full object-contain' />
                <span className="relative z-10 text-white font-bold text-sm -ml-2">Step 2</span>
              </div>
              <span className="text-white font-bold text-lg">Strategy Development</span>
            </div>
            <div className="text-white text-base leading-snug ml-[114px]">"Translate insights into actionable plans<br/>that align with your goals."<br/><br/>"Because understanding your audience is<br/>like unlocking the treasure chest to their<br/>hearts and minds."</div>
          </div>
          {/* Step 4 */}
          <div>
            <div className="flex flex-row items-center gap-0 mb-2 justify-start ml-4">
              <div className="relative w-[200px] h-[110px] flex items-center justify-center -ml-14">
                <img src='/images/icc18.png' alt='Step 4' className='absolute w-full h-full object-contain' />
                <span className="relative z-10 text-white font-bold text-sm -ml-2">Step 4</span>
              </div>
              <span className="text-white font-bold text-lg">Execution</span>
            </div>
            <div className="text-white text-base leading-snug ml-[114px]">"Bring ideas to life with precision, passion,<br/>and purpose."<br/><br/>Ideas without action are just dreams—our<br/>execution turns them into reality."</div>
          </div>
          {/* Step 6 */}
          <div>
            <div className="flex flex-row items-center gap-0 mb-2 justify-start ml-4">
              <div className="relative w-[200px] h-[110px] flex items-center justify-center -ml-14">
                <img src='/images/icc18.png' alt='Step 6' className='absolute w-full h-full object-contain' />
                <span className="relative z-10 text-white font-bold text-sm -ml-2">Step 6</span>
              </div>
              <span className="text-white font-bold text-lg">Scaling for Growth</span>
            </div>
            <div className="text-white text-base leading-snug ml-[114px]">"Turn success into sustained growth with<br/>strategies that evolve with your business."<br/><br/>Growth isn't luck—it's the result of refining<br/>and scaling what works best for you."</div>
          </div>
        </div>
      </div>
    </section>
    {/* Testimonials Section */}
    <section className="relative flex flex-col items-center justify-center px-4 py-32 bg-black">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        <div className="text-white text-center italic text-xl md:text-2xl font-light leading-relaxed mb-16" style={{fontFamily: 'Inter, Arial, sans-serif'}}>
          "Symbiotes is a game-changer. They helped us scale our revenue by 300% while cutting ad costs in half!"<br/>
          <span className="not-italic font-normal text-lg md:text-xl block mt-4">— Rahul Mehta, CEO of TechWave</span>
          </div>
        <div className="text-white text-center italic text-xl md:text-2xl font-light leading-relaxed" style={{fontFamily: 'Inter, Arial, sans-serif'}}>
          "From strategy to execution, they've been the partners we didn't know we needed. Outstanding results!"<br/>
          <span className="not-italic font-normal text-lg md:text-xl block mt-4">— Neha Agarwal, Founder of StyleNest</span>
        </div>
      </div>
    </section>
  </main>
);

type FeatureItemProps = {
  icon: string;
  title: string;
  desc: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, desc }) => (
  <div className="flex items-start gap-4">
    <img src={icon} alt="feature icon" className="w-14 h-14 object-contain" />
    <div>
      <span className="text-white font-semibold text-lg">{title}</span>
      <div className="text-gray-300 text-sm mt-1">{desc}</div>
    </div>
  </div>
);

const StatCard: React.FC<{icon: string, stat: string, label: string}> = ({ icon, stat, label }) => (
  <div className="flex flex-col items-center text-center">
    <img src={icon} alt={label + ' icon'} className="w-32 h-32 mb-6 object-contain" />
    <span className="text-3xl font-bold text-white mb-2">{stat}</span>
    <span className="text-lg text-white leading-tight">{label}</span>
  </div>
);

export default ServicesPage;
