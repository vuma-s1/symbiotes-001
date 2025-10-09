'use client';

import React, { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, Rocket, Shield, TrendingUp, Users, Zap, Target } from 'lucide-react';

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-black">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#d0ed01]"></div>
  </div>
);

const AerospacePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <Suspense fallback={<LoadingSpinner />}>
        <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 animate-in fade-in duration-500">
        <div className="max-w-7xl mx-auto">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link 
              href="/what-we-do" 
              className="inline-flex items-center text-[#d0ed01] hover:text-[#b5d101] transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to What We Do
            </Link>
          </div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Side - Image */}
            <div className="flex justify-start -ml-8">
               <Suspense fallback={<div className="w-[600px] h-[450px] bg-gray-800 animate-pulse rounded-lg"></div>}>
                 <Image
                   src="/images/what we do/image.png"
                   alt="Aerospace consulting illustration"
                   width={600}
                   height={450}
                   className="w-[600px] h-[450px]"
                   style={{ background: 'transparent' }}
                   priority
                   loading="eager"
                 />
               </Suspense>
            </div>

            {/* Right Side - Content */}
            <div className="text-left max-w-lg ml-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white whitespace-nowrap">
                Aerospace consulting
              </h1>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Navigate headwinds in Aerospace and Defense. From economic uncertainty, supply chain disruptions and skill gaps, the Aerospace and Defense Industry is being challenged.
              </p>
              <p className="text-lg text-[#d0ed01] font-semibold mb-8">
                The key is to have a digital-first mindset.
              </p>
              <div className="flex justify-center">
                <a 
                  href="#contact" 
                  className="inline-block bg-[#d0ed01] text-black font-bold text-base px-6 py-3 rounded-full hover:bg-[#b5d101] transition-all duration-300 transform hover:scale-105"
                >
                  BOOK A CALL NOW
                </a>
              </div>
            </div>
          </div>

          {/* Industry by the Numbers */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
              Aerospace and defense now
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-left">
                <div className="w-16 h-1 bg-[#d0ed01] mb-4"></div>
                <div className="text-5xl font-bold text-white mb-4">84%</div>
                <p className="text-gray-300 text-sm leading-relaxed">of companies focus on transforming parts of their business rather than the whole and tend to treat transformation as a finite program rather than a continuous process</p>
              </div>
              <div className="text-left">
                <div className="w-16 h-1 bg-[#d0ed01] mb-4"></div>
                <div className="text-5xl font-bold text-white mb-4">75%</div>
                <p className="text-gray-300 text-sm leading-relaxed">of executives expect up to a fifth of their workforce to reskill or work in new domains using new tech within the next five years</p>
              </div>
              <div className="text-left">
                <div className="w-16 h-1 bg-[#d0ed01] mb-4"></div>
                <div className="text-5xl font-bold text-white mb-4">14%</div>
                <p className="text-gray-300 text-sm leading-relaxed">expected YOY revenue increase of 2023 global commercial aerospace driven by air traffics' strong recovery</p>
              </div>
              <div className="text-left">
                <div className="w-16 h-1 bg-[#d0ed01] mb-4"></div>
                <div className="text-5xl font-bold text-white mb-4">67%</div>
                <p className="text-gray-300 text-sm leading-relaxed">of executives believe short-term supply chain disruption will be a challenge</p>
              </div>
            </div>
          </div>

          {/* A System Built for Precision, Struggling with Connection */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#d0ed01]">
              A System Built for Precision, Struggling with Connection
            </h2>
            <div className="max-w-4xl">
              <p className="text-lg text-white leading-relaxed">
                The Aerospace and Defense world is one of the most complex systems on earth. An aircraft isn't just a machine — it's the result of thousands of companies, suppliers, engineers, and regulators working together across countries and timelines.
              </p>
              <p className="text-lg text-white leading-relaxed mt-4">
                Every day, data moves through hundreds of tools, reports, and departments. But most of these systems don't talk to each other. Design teams use one platform. Manufacturers use another. Maintenance logs live in old databases.
              </p>
              <p className="text-lg text-white leading-relaxed mt-4">
                Information that should move in seconds can take days. The people are skilled. The technology exists. What's missing is a way to connect it all — a system that allows the entire ecosystem to think as one.
              </p>
            </div>
          </div>

          {/* Where the System Slows Down */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#d0ed01]">
              Where the System Slows Down
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-4xl mx-auto">
              Behind every successful mission are layers of manual work, disconnected systems, and missed signals.<br />
              These are the challenges holding the industry back:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#d0ed01]/10 to-[#6248ff]/10 p-6 rounded-2xl border border-[#d0ed01]/20 hover:border-[#d0ed01]/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-[#d0ed01] mb-3">Fragmented Data & Systems</h3>
                <p className="text-gray-300">Design, production, and fleet operations each work in isolation.</p>
              </div>
              <div className="bg-gradient-to-br from-[#6248ff]/10 to-[#d0ed01]/10 p-6 rounded-2xl border border-[#6248ff]/20 hover:border-[#6248ff]/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-[#6248ff] mb-3">Manual Compliance</h3>
                <p className="text-gray-300">Documentation-heavy and painfully slow certification processes.</p>
              </div>
              <div className="bg-gradient-to-br from-[#d0ed01]/10 to-[#6248ff]/10 p-6 rounded-2xl border border-[#d0ed01]/20 hover:border-[#d0ed01]/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-[#d0ed01] mb-3">Reactive Maintenance</h3>
                <p className="text-gray-300">Fixes happen after failure, not before.</p>
              </div>
              <div className="bg-gradient-to-br from-[#6248ff]/10 to-[#d0ed01]/10 p-6 rounded-2xl border border-[#6248ff]/20 hover:border-[#6248ff]/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-[#6248ff] mb-3">Supply Chain Blind Spots</h3>
                <p className="text-gray-300">Visibility ends at Tier 1, leaving hidden risks beneath.</p>
              </div>
              <div className="bg-gradient-to-br from-[#d0ed01]/10 to-[#6248ff]/10 p-6 rounded-2xl border border-[#d0ed01]/20 hover:border-[#d0ed01]/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-[#d0ed01] mb-3">Aging Workforce</h3>
                <p className="text-gray-300">Experts retiring faster than replacements are trained.</p>
              </div>
              <div className="bg-gradient-to-br from-[#6248ff]/10 to-[#d0ed01]/10 p-6 rounded-2xl border border-[#6248ff]/20 hover:border-[#6248ff]/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-[#6248ff] mb-3">Cybersecurity Concerns</h3>
                <p className="text-gray-300">Sensitive data sitting on external infrastructure.</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg text-gray-300">
                None of these are small issues. But all of them can be fixed — not by doing more, but by doing it smarter.
              </p>
            </div>
          </div>

          {/* Every Layer Matters. Every Connection Counts. */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#d0ed01]">
              Every Layer Matters. Every Connection Counts.
            </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group relative p-8 overflow-hidden min-h-[200px]" style={{ backgroundColor: '#111111' }}>
                  <div className="w-16 h-1 bg-[#d0ed01] mb-4"></div>
                  <h3 className="text-lg font-bold text-white uppercase mb-4">DESIGN & INNOVATION</h3>
                  <p className="text-[#d0ed01] text-sm mb-4">Where ideas take flight</p>
                  <ul className="text-gray-300 text-sm space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <li>• Concept design and aerodynamics modeling</li>
                    <li>• Virtual prototypes, simulations, and testing</li>
                    <li>• Integration of AI-driven predictive design tools</li>
                  </ul>
                </div>

                <div className="group relative p-8 overflow-hidden min-h-[200px]" style={{ backgroundColor: '#111111' }}>
                  <div className="w-16 h-1 bg-[#d0ed01] mb-4"></div>
                  <h3 className="text-lg font-bold text-white uppercase mb-4">MANUFACTURING & PRODUCTION</h3>
                  <p className="text-[#d0ed01] text-sm mb-4">Where precision becomes real</p>
                  <ul className="text-gray-300 text-sm space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <li>• Robotics and automation on assembly lines</li>
                    <li>• Smart factories with digital twins</li>
                    <li>• AI-based quality assurance and defect prediction</li>
                  </ul>
                </div>

                <div className="group relative p-8 overflow-hidden min-h-[200px]" style={{ backgroundColor: '#111111' }}>
                  <div className="w-16 h-1 bg-[#d0ed01] mb-4"></div>
                  <h3 className="text-lg font-bold text-white uppercase mb-4">MAINTENANCE & OPERATIONS</h3>
                  <p className="text-[#d0ed01] text-sm mb-4">Keeping the skies safe and steady</p>
                  <ul className="text-gray-300 text-sm space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <li>• Predictive maintenance using sensors and IoT</li>
                    <li>• AR-assisted ground teams for faster repairs</li>
                    <li>• Real-time data feedback loops between air and ground</li>
                  </ul>
                </div>

                <div className="group relative p-8 overflow-hidden min-h-[200px]" style={{ backgroundColor: '#111111' }}>
                  <div className="w-16 h-1 bg-[#d0ed01] mb-4"></div>
                  <h3 className="text-lg font-bold text-white uppercase mb-4">PILOTS, CREW & MISSION CONTROL</h3>
                  <p className="text-[#d0ed01] text-sm mb-4">The human link in a machine-led world</p>
                  <ul className="text-gray-300 text-sm space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <li>• XR-based training and simulations</li>
                    <li>• Voice and gesture interfaces powered by AI</li>
                    <li>• Live analytics dashboards for mission awareness</li>
                  </ul>
                </div>

                <div className="group relative p-8 overflow-hidden min-h-[200px]" style={{ backgroundColor: '#111111' }}>
                  <div className="w-16 h-1 bg-[#d0ed01] mb-4"></div>
                  <h3 className="text-lg font-bold text-white uppercase mb-4">REGULATION & COMPLIANCE</h3>
                  <p className="text-[#d0ed01] text-sm mb-4">Building trust through transparency</p>
                  <ul className="text-gray-300 text-sm space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <li>• Automated certification and documentation</li>
                    <li>• Blockchain-enabled traceability</li>
                    <li>• Continuous audit-ready data systems</li>
                  </ul>
                </div>

                <div className="group relative p-8 overflow-hidden min-h-[200px]" style={{ backgroundColor: '#111111' }}>
                  <div className="w-16 h-1 bg-[#d0ed01] mb-4"></div>
                  <h3 className="text-lg font-bold text-white uppercase mb-4">DEFENSE & SPACE PROGRAMS</h3>
                  <p className="text-[#d0ed01] text-sm mb-4">Security, speed, and sovereignty</p>
                  <ul className="text-gray-300 text-sm space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <li>• Autonomous and AI-assisted defense systems</li>
                    <li>• National data sovereignty and AI ethics frameworks</li>
                    <li>• Secure communication and command platforms</li>
                  </ul>
                </div>

                <div className="group relative p-8 overflow-hidden min-h-[200px]" style={{ backgroundColor: '#111111' }}>
                  <div className="w-16 h-1 bg-[#d0ed01] mb-4"></div>
                  <h3 className="text-lg font-bold text-white uppercase mb-4">SUPPLY CHAIN & PARTNERSHIPS</h3>
                  <p className="text-[#d0ed01] text-sm mb-4">The hidden engine of aerospace</p>
                  <ul className="text-gray-300 text-sm space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <li>• End-to-end digital supply tracking</li>
                    <li>• Risk management and alternative sourcing via AI</li>
                    <li>• Partner ecosystems integrated into a single data fabric</li>
                  </ul>
                </div>

                <div className="group relative p-8 overflow-hidden min-h-[200px]" style={{ backgroundColor: '#111111' }}>
                  <div className="w-16 h-1 bg-[#d0ed01] mb-4"></div>
                  <h3 className="text-lg font-bold text-white uppercase mb-4">LEADERSHIP & STRATEGY</h3>
                  <p className="text-[#d0ed01] text-sm mb-4">Clarity above the clouds</p>
                  <ul className="text-gray-300 text-sm space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <li>• Real-time decision dashboards</li>
                    <li>• Funding insights and investment readiness</li>
                    <li>• Scenario simulations and sustainability intelligence</li>
                  </ul>
                </div>
              </div>
            <div className="text-center mt-8">
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                When these layers move together — design, production, defense, operations, and leadership — the industry stops working in isolation and starts thinking as one system. That's the ecosystem Symbiotes helps bring to life.
              </p>
            </div>
          </div>

          {/* Where Intelligence Takes Flight */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#d0ed01]">
              Where Intelligence Takes Flight
            </h2>
            <p className="text-xl text-white mb-8">
              Imagine this world:
            </p>
            <div className="space-y-4 mb-8 max-w-5xl">
              <p className="text-lg text-gray-300 leading-relaxed">A factory floor where machines correct themselves before a human even notices an error.</p>
              <p className="text-lg text-gray-300 leading-relaxed">An aircraft that monitors its own health mid-flight and sends data to engineers before landing.</p>
              <p className="text-lg text-gray-300 leading-relaxed">A technician guided by AR glasses that overlay every instruction directly in front of them.</p>
              <p className="text-lg text-gray-300 leading-relaxed">A regulator reviewing live certification data instead of waiting for paperwork.</p>
              <p className="text-lg text-gray-300 leading-relaxed">A defense system that predicts threats, not just reacts to them.</p>
            </div>
            <p className="text-lg text-white leading-relaxed max-w-5xl">
              That's not far away — it's already being built. With the right systems in place, aerospace can evolve from a mechanical industry into an intelligent one — where learning never stops, and performance compounds with every mission.
            </p>
          </div>

          {/* From Ideas to Intelligent Systems */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#d0ed01]">
              From Ideas to Intelligent Systems
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-4xl mx-auto">
              We don't just help aerospace companies "go digital." We help them build frameworks that continuously evolve — systems that learn, adapt, and grow smarter every year.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#d0ed01] to-[#6248ff] rounded-full flex items-center justify-center mb-4">
                  <span className="text-black font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#6248ff]">Discover</h3>
                <p className="text-gray-300">Understand where the inefficiencies, gaps, and data silos are.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#6248ff] to-[#d0ed01] rounded-full flex items-center justify-center mb-4">
                  <span className="text-black font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#6248ff]">Design</h3>
                <p className="text-gray-300">Create a connected architecture that links people, tools, and processes into one flow.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#d0ed01] to-[#6248ff] rounded-full flex items-center justify-center mb-4">
                  <span className="text-black font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#6248ff]">Deploy</h3>
                <p className="text-gray-300">Integrate AI, automation, and immersive technology step by step, without disruption.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#6248ff] to-[#d0ed01] rounded-full flex items-center justify-center mb-4">
                  <span className="text-black font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#6248ff]">Certify</h3>
                <p className="text-gray-300">Make compliance automatic — live dashboards instead of audits.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#d0ed01] to-[#6248ff] rounded-full flex items-center justify-center mb-4">
                  <span className="text-black font-bold text-xl">5</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#6248ff]">Scale</h3>
                <p className="text-gray-300">Use analytics and predictive models to keep improving performance over time.</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg text-gray-300">
                This isn't a project. It's a permanent upgrade to how the aerospace ecosystem works.
              </p>
            </div>
          </div>

          {/* Built for the World's Toughest Standards */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-[#d0ed01]/20 to-[#6248ff]/20 p-12 rounded-2xl border border-[#d0ed01]/30">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                Built for the World's Toughest Standards
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                In this industry, trust is everything. Every process must be secure, traceable, and compliant — not once a year, but every second.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Symbiotes builds with that principle at its core. Our systems align with the strictest aerospace and defense standards — DO-178C, DO-254, ARP4754A, AS9100, FAA, EASA, DGCA, CEMILAC, ITAR, and ISO 27001.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                We design with data sovereignty, zero-trust security, and quantum-safe encryption, ensuring your mission stays yours — no matter where it operates.
              </p>
              <p className="text-xl text-[#d0ed01] font-bold">
                Trust isn't a document. It's a design choice.
              </p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#d0ed01]">
              Why Choose Symbiotes for Aerospace?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#d0ed01] to-[#6248ff] rounded-full flex items-center justify-center mb-4">
                  <Target className="text-black" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#6248ff]">Industry Expertise</h3>
                <p className="text-gray-300">
                  Deep understanding of aerospace challenges, regulations, and cutting-edge technologies from commercial aviation to space exploration.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#6248ff] to-[#d0ed01] rounded-full flex items-center justify-center mb-4">
                  <Rocket className="text-black" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#6248ff]">Cutting-Edge Technology</h3>
                <p className="text-gray-300">
                  Latest AI, machine learning, and autonomous systems technologies tailored specifically for aerospace applications.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#d0ed01] to-[#6248ff] rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="text-black" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#6248ff]">Proven Results</h3>
                <p className="text-gray-300">
                  Track record of delivering measurable improvements in efficiency, safety, and cost reduction for aerospace clients.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#6248ff]/20 to-[#d0ed01]/20 p-12 rounded-2xl border border-[#d0ed01]/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Rebuild the Skies with Intelligence
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              The Aerospace and Defense industry doesn't need another upgrade — it needs a reinvention. Symbiotes helps build that future — connecting data, machines, and people into one intelligent ecosystem that learns, protects, and grows.
            </p>
            <p className="text-lg text-[#d0ed01] font-bold mb-8">
              Your next mission deserves systems that can think. Let's build them together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-block bg-[#d0ed01] text-black font-bold text-lg px-8 py-4 rounded-full hover:bg-[#b5d101] transition-all duration-300 transform hover:scale-105"
              >
                Book a Strategy Call
              </a>
              <a 
                href="/what-we-do" 
                className="inline-block border-2 border-[#6248ff] text-[#6248ff] font-bold text-lg px-8 py-4 rounded-full hover:bg-[#6248ff] hover:text-white transition-all duration-300"
              >
                Download the Aerospace Intelligence Blueprint
              </a>
            </div>
          </div>
        </div>
        </main>
      </Suspense>
    </div>
  );
};

export default AerospacePage;
