'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Car, Shield, TrendingUp, Users, Zap, Target } from 'lucide-react';

const AutomotivePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link 
              href="/what-we-do" 
              className="inline-flex items-center text-[#d0ed01] hover:text-[#b5d101] transition-colors duration-200"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to What We Do
            </Link>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#d0ed01] to-[#6248ff] bg-clip-text text-transparent">
              Automotive
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Rebuilding Intelligence on the Road
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-8">
              Navigate disruption in Automotive. From volatile demand and fragmented platforms to software complexity and sustainability pressures, the industry faces its most complex decade yet.
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              The only way forward is to move from legacy workflows to intelligent mobility systems — where data, design, and people work together seamlessly.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-[#d0ed01] text-black font-bold text-lg px-8 py-4 rounded-full hover:bg-[#b5d101] transition-all duration-300 transform hover:scale-105"
            >
              BOOK A CALL NOW
            </a>
          </div>

          {/* Industry by the Numbers */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#d0ed01]">
              Industry by the Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center bg-gradient-to-br from-[#d0ed01]/10 to-transparent p-6 rounded-2xl border border-[#d0ed01]/20">
                <div className="text-4xl font-bold text-[#d0ed01] mb-2">92,504,338</div>
                <p className="text-gray-300 text-sm">vehicles produced worldwide in 2024</p>
              </div>
              <div className="text-center bg-gradient-to-br from-[#6248ff]/10 to-transparent p-6 rounded-2xl border border-[#6248ff]/20">
                <div className="text-4xl font-bold text-[#6248ff] mb-2">17 million+</div>
                <p className="text-gray-300 text-sm">electric cars sold in 2024 — over 20% of global new-car sales</p>
              </div>
              <div className="text-center bg-gradient-to-br from-[#d0ed01]/10 to-transparent p-6 rounded-2xl border border-[#d0ed01]/20">
                <div className="text-4xl font-bold text-[#d0ed01] mb-2">$115/kWh</div>
                <p className="text-gray-300 text-sm">average lithium-ion battery pack price in 2024 (−20% YoY)</p>
              </div>
              <div className="text-center bg-gradient-to-br from-[#6248ff]/10 to-transparent p-6 rounded-2xl border border-[#6248ff]/20">
                <div className="text-4xl font-bold text-[#6248ff] mb-2">25%</div>
                <p className="text-gray-300 text-sm">share of global robot installations in 2023 attributable to Automotive</p>
              </div>
              <div className="text-center bg-gradient-to-br from-[#d0ed01]/10 to-transparent p-6 rounded-2xl border border-[#d0ed01]/20">
                <div className="text-4xl font-bold text-[#d0ed01] mb-2">$462 billion</div>
                <p className="text-gray-300 text-sm">projected size of the automotive software & electronics market by 2030</p>
              </div>
            </div>
          </div>

          {/* A System Built for Precision, Struggling with Connection */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-[#6248ff]/20 to-[#d0ed01]/20 p-12 rounded-2xl border border-[#6248ff]/30">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                A System Built for Precision, Struggling with Connection
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                The Automotive world is one of the most complex systems on earth.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                A vehicle isn't just a product — it's the outcome of thousands of suppliers, software stacks, plants, and regulations synchronized across borders and timelines.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Every day, data moves through PLM, MES, ERP, TMS, dealer DMS, telematics clouds, and in-vehicle ECUs. But most of these systems don't talk to each other.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Design teams use one platform. Plants run another. Vehicle logs sit in proprietary controllers.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Information that should move in seconds can take days.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                The people are skilled. The technology exists.<br />
                What's missing is a way to connect it all — a system that allows the entire ecosystem to think as one.
              </p>
            </div>
          </div>

          {/* Where the System Slows Down */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#d0ed01]">
              Where the System Slows Down
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-4xl mx-auto">
              Behind every successful launch are layers of manual work, disconnected systems, and missed signals.<br />
              These are the challenges holding the industry back:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-[#d0ed01]/10 to-[#6248ff]/10 p-6 rounded-2xl border border-[#d0ed01]/20 hover:border-[#d0ed01]/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-[#d0ed01] mb-3">Fragmented data and platforms</h3>
                <p className="text-gray-300">design, manufacturing, and in-field operations each work in isolation</p>
              </div>
              <div className="bg-gradient-to-br from-[#6248ff]/10 to-[#d0ed01]/10 p-6 rounded-2xl border border-[#6248ff]/20 hover:border-[#6248ff]/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-[#6248ff] mb-3">Manual compliance and homologation</h3>
                <p className="text-gray-300">documentation-heavy and painfully slow</p>
              </div>
              <div className="bg-gradient-to-br from-[#d0ed01]/10 to-[#6248ff]/10 p-6 rounded-2xl border border-[#d0ed01]/20 hover:border-[#d0ed01]/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-[#d0ed01] mb-3">Reactive quality and warranty</h3>
                <p className="text-gray-300">fixes happen after defects reach the field, not before</p>
              </div>
              <div className="bg-gradient-to-br from-[#6248ff]/10 to-[#d0ed01]/10 p-6 rounded-2xl border border-[#6248ff]/20 hover:border-[#6248ff]/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-[#6248ff] mb-3">Supply-chain blind spots</h3>
                <p className="text-gray-300">visibility fades past Tier 1, leaving hidden risks beneath</p>
              </div>
              <div className="bg-gradient-to-br from-[#d0ed01]/10 to-[#6248ff]/10 p-6 rounded-2xl border border-[#d0ed01]/20 hover:border-[#d0ed01]/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-[#d0ed01] mb-3">Aging workforce and reskilling gaps</h3>
                <p className="text-gray-300">experts retiring faster than replacements are trained</p>
              </div>
              <div className="bg-gradient-to-br from-[#6248ff]/10 to-[#d0ed01]/10 p-6 rounded-2xl border border-[#6248ff]/20 hover:border-[#6248ff]/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-[#6248ff] mb-3">Cybersecurity and update integrity</h3>
                <p className="text-gray-300">safety-critical code scattered across heterogeneous ECUs</p>
              </div>
              <div className="bg-gradient-to-br from-[#d0ed01]/10 to-[#6248ff]/10 p-6 rounded-2xl border border-[#d0ed01]/20 hover:border-[#d0ed01]/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-[#d0ed01] mb-3">Sustainability goals without live tracking</h3>
                <p className="text-gray-300">Scope 1–3 targets measured long after decisions are made</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg text-gray-300">
                None of these are small issues. But all of them can be fixed — not by doing more, but by doing it smarter.
              </p>
            </div>
          </div>

          {/* The Next Chapter of Automotive Has Already Begun */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-[#d0ed01]/20 to-[#6248ff]/20 p-12 rounded-2xl border border-[#d0ed01]/30">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                The Next Chapter of Automotive Has Already Begun
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                The future of automotive isn't just about building more EVs or new models. It's about making the entire system — from design to plant to road — intelligent.
              </p>
              <p className="text-lg text-gray-300 mb-4">Here's what's changing:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="text-[#d0ed01] mt-1">•</div>
                  <p className="text-lg text-gray-300"><span className="font-bold text-white">Software-Defined Vehicles</span> — cars that upgrade through code instead of hardware</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#d0ed01] mt-1">•</div>
                  <p className="text-lg text-gray-300"><span className="font-bold text-white">AI-Driven Factories</span> — lines that adjust, learn, and improve every cycle</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#d0ed01] mt-1">•</div>
                  <p className="text-lg text-gray-300"><span className="font-bold text-white">Predictive Quality & Maintenance</span> — telemetry that spots and fixes issues before failures</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#d0ed01] mt-1">•</div>
                  <p className="text-lg text-gray-300"><span className="font-bold text-white">XR Workforces</span> — technicians trained in VR, guided by AR on the line and in service bays</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#d0ed01] mt-1">•</div>
                  <p className="text-lg text-gray-300"><span className="font-bold text-white">Sovereign Mobility Data</span> — in-country data fabrics for safety, privacy, and compliance</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#d0ed01] mt-1">•</div>
                  <p className="text-lg text-gray-300"><span className="font-bold text-white">Carbon Intelligence</span> — real-time energy and emissions optimization from foundry to fleet</p>
                </div>
              </div>
              <p className="text-lg text-gray-300">
                The change is already underway. The question is whether the system can keep up with its own potential.
              </p>
            </div>
          </div>

          {/* Every Layer Matters. Every Connection Counts. */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#d0ed01]">
              Every Layer Matters. Every Connection Counts.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-[#d0ed01]/10 to-[#6248ff]/10 p-6 rounded-2xl border border-[#d0ed01]/20 hover:border-[#d0ed01]/50 transition-all duration-300">
                <div className="text-2xl font-bold text-[#d0ed01] mb-3">01</div>
                <h3 className="text-xl font-bold text-[#d0ed01] mb-3">Design & Innovation</h3>
                <p className="text-gray-300 text-sm mb-3">Where ideas take shape</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Concept design and vehicle dynamics modeling</li>
                  <li>• Virtual prototypes, simulations, and testing</li>
                  <li>• Integration of AI-driven generative design tools</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#6248ff]/10 to-[#d0ed01]/10 p-6 rounded-2xl border border-[#6248ff]/20 hover:border-[#6248ff]/50 transition-all duration-300">
                <div className="text-2xl font-bold text-[#6248ff] mb-3">02</div>
                <h3 className="text-xl font-bold text-[#6248ff] mb-3">Manufacturing & Production</h3>
                <p className="text-gray-300 text-sm mb-3">Where precision becomes real</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Robotics and automation on assembly lines</li>
                  <li>• Smart factories with digital twins</li>
                  <li>• AI-based quality assurance and defect prediction</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#d0ed01]/10 to-[#6248ff]/10 p-6 rounded-2xl border border-[#d0ed01]/20 hover:border-[#d0ed01]/50 transition-all duration-300">
                <div className="text-2xl font-bold text-[#d0ed01] mb-3">03</div>
                <h3 className="text-xl font-bold text-[#d0ed01] mb-3">After-Sales & Operations</h3>
                <p className="text-gray-300 text-sm mb-3">Keeping vehicles safe and reliable</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Predictive maintenance using telemetry and IoT</li>
                  <li>• AR-assisted service for faster repairs</li>
                  <li>• Real-time feedback loops from road to plant</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#6248ff]/10 to-[#d0ed01]/10 p-6 rounded-2xl border border-[#6248ff]/20 hover:border-[#6248ff]/50 transition-all duration-300">
                <div className="text-2xl font-bold text-[#6248ff] mb-3">04</div>
                <h3 className="text-xl font-bold text-[#6248ff] mb-3">Drivers, Dealers & Mobility Ops</h3>
                <p className="text-gray-300 text-sm mb-3">The human link in a machine-led world</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• XR-based training and remote assist</li>
                  <li>• Voice and in-car conversational interfaces</li>
                  <li>• Live analytics dashboards for network performance</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#d0ed01]/10 to-[#6248ff]/10 p-6 rounded-2xl border border-[#d0ed01]/20 hover:border-[#d0ed01]/50 transition-all duration-300">
                <div className="text-2xl font-bold text-[#d0ed01] mb-3">05</div>
                <h3 className="text-xl font-bold text-[#d0ed01] mb-3">Regulation & Compliance</h3>
                <p className="text-gray-300 text-sm mb-3">Building trust through transparency</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Automated homologation and documentation</li>
                  <li>• Secure OTA and software provenance</li>
                  <li>• Continuous audit-ready data across vehicles and plants</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#6248ff]/10 to-[#d0ed01]/10 p-6 rounded-2xl border border-[#6248ff]/20 hover:border-[#6248ff]/50 transition-all duration-300">
                <div className="text-2xl font-bold text-[#6248ff] mb-3">06</div>
                <h3 className="text-xl font-bold text-[#6248ff] mb-3">ADAS, Autonomy & Safety Programs</h3>
                <p className="text-gray-300 text-sm mb-3">Confidence at scale</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Sensor fusion, perception, and validation pipelines</li>
                  <li>• ISO 26262 functional safety lifecycle</li>
                  <li>• Scenario simulation and safety case generation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#d0ed01]/10 to-[#6248ff]/10 p-6 rounded-2xl border border-[#d0ed01]/20 hover:border-[#d0ed01]/50 transition-all duration-300">
                <div className="text-2xl font-bold text-[#d0ed01] mb-3">07</div>
                <h3 className="text-xl font-bold text-[#d0ed01] mb-3">Supply Chain & Partnerships</h3>
                <p className="text-gray-300 text-sm mb-3">The hidden engine of mobility</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• End-to-end digital supply tracking</li>
                  <li>• Risk management and alternative sourcing via AI</li>
                  <li>• Partner ecosystems integrated into a single data fabric</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#6248ff]/10 to-[#d0ed01]/10 p-6 rounded-2xl border border-[#6248ff]/20 hover:border-[#6248ff]/50 transition-all duration-300">
                <div className="text-2xl font-bold text-[#6248ff] mb-3">08</div>
                <h3 className="text-xl font-bold text-[#6248ff] mb-3">Leadership & Strategy</h3>
                <p className="text-gray-300 text-sm mb-3">Clarity on every route</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Real-time decision dashboards</li>
                  <li>• Capital allocation and program readiness</li>
                  <li>• Scenario simulations and sustainability intelligence</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                When these layers move together — design, production, autonomy, operations, and leadership — the industry stops working in isolation and starts thinking as one system. That's the ecosystem Symbiotes helps bring to life.
              </p>
            </div>
          </div>

          {/* Where Intelligence Takes Automotive Forward */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-[#6248ff]/20 to-[#d0ed01]/20 p-12 rounded-2xl border border-[#6248ff]/30">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                Where Intelligence Takes Automotive Forward
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Imagine this world:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="text-[#d0ed01] mt-1">•</div>
                  <p className="text-lg text-gray-300">A line where robots correct tolerances before a gauge flags the drift</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#d0ed01] mt-1">•</div>
                  <p className="text-lg text-gray-300">A vehicle that self-diagnoses on the road and books its own service slot</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#d0ed01] mt-1">•</div>
                  <p className="text-lg text-gray-300">A technician guided by AR glasses that overlay every torque spec in front of them</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#d0ed01] mt-1">•</div>
                  <p className="text-lg text-gray-300">A regulator reviewing live compliance evidence instead of waiting for paperwork</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#d0ed01] mt-1">•</div>
                  <p className="text-lg text-gray-300">A mobility network that predicts demand surges and reroutes fleets in real time</p>
                </div>
              </div>
              <p className="text-lg text-gray-300 mb-6">
                That's not far away — it's already being built.
              </p>
              <p className="text-lg text-gray-300">
                With the right systems in place, automotive can evolve from mechanical throughput into an intelligent ecosystem — where learning compounds with every mile.
              </p>
            </div>
          </div>

          {/* From Ideas to Intelligent Systems */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#d0ed01]">
              From Ideas to Intelligent Systems
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-4xl mx-auto">
              We don't just help automotive companies "go digital." We help them build frameworks that continuously evolve — systems that learn, adapt, and grow smarter every year.
            </p>
            <p className="text-lg text-gray-300 text-center mb-8 max-w-3xl mx-auto">
              Our process is simple, but deep:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#d0ed01] to-[#6248ff] rounded-full flex items-center justify-center mb-4">
                  <span className="text-black font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#6248ff]">Discover</h3>
                <p className="text-gray-300">Understand where the inefficiencies, gaps, and data silos are</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#6248ff] to-[#d0ed01] rounded-full flex items-center justify-center mb-4">
                  <span className="text-black font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#6248ff]">Design</h3>
                <p className="text-gray-300">Create a connected architecture that links people, tools, and processes into one flow</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#d0ed01] to-[#6248ff] rounded-full flex items-center justify-center mb-4">
                  <span className="text-black font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#6248ff]">Deploy</h3>
                <p className="text-gray-300">Integrate AI, automation, and immersive technology step by step, without disruption</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#6248ff] to-[#d0ed01] rounded-full flex items-center justify-center mb-4">
                  <span className="text-black font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#6248ff]">Certify</h3>
                <p className="text-gray-300">Make compliance automatic — live dashboards instead of audits</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#d0ed01] to-[#6248ff] rounded-full flex items-center justify-center mb-4">
                  <span className="text-black font-bold text-xl">5</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#6248ff]">Scale</h3>
                <p className="text-gray-300">Use analytics and predictive models to keep improving performance over time</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg text-gray-300">
                This isn't a project. It's a permanent upgrade to how the automotive ecosystem works.
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
                Symbiotes builds with that principle at its core. Our systems align with the strictest automotive standards — ISO 26262 (Functional Safety), ASPICE, IATF 16949, ISO/SAE 21434 (Cybersecurity), UNECE R155/R156 (CSMS/Software Updates), GDPR/CCPA, and ISO 27001.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                We design with data sovereignty, zero-trust security, and secure OTA pipelines, ensuring your mission stays yours — no matter where it operates.
              </p>
              <p className="text-xl text-[#d0ed01] font-bold">
                Trust isn't a document. It's a design choice.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#d0ed01]">
              FAQ
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Questions You Might Have — Answered Simply
            </p>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#d0ed01]/10 to-[#6248ff]/10 p-6 rounded-2xl border border-[#d0ed01]/20">
                <h3 className="text-xl font-bold text-[#d0ed01] mb-3">Q1. What exactly does Symbiotes do for the Automotive industry?</h3>
                <p className="text-gray-300">Symbiotes helps automotive companies build connected, intelligent systems — from design to production to field operations. We bring AI, automation, XR, and digital infrastructure together so the entire ecosystem communicates and improves as one.</p>
              </div>
              <div className="bg-gradient-to-br from-[#6248ff]/10 to-[#d0ed01]/10 p-6 rounded-2xl border border-[#6248ff]/20">
                <h3 className="text-xl font-bold text-[#6248ff] mb-3">Q2. Are these solutions only for large OEMs or can suppliers and dealers benefit too?</h3>
                <p className="text-gray-300">Both. Whether you're a Tier-1 supplier, a dealer group, or a new EV startup, we design scalable systems that fit your size, resources, and growth goals. Our goal is to make intelligence accessible — not exclusive.</p>
              </div>
              <div className="bg-gradient-to-br from-[#d0ed01]/10 to-[#6248ff]/10 p-6 rounded-2xl border border-[#d0ed01]/20">
                <h3 className="text-xl font-bold text-[#d0ed01] mb-3">Q3. How does Symbiotes approach software safety, cybersecurity, and OTA compliance?</h3>
                <p className="text-gray-300">We build with ISO 26262 and ASPICE for safety, ISO/SAE 21434 and UNECE R155/R156 for cybersecurity and software updates, plus GDPR/CCPA for data privacy. Evidence is generated continuously and remains under your control.</p>
              </div>
              <div className="bg-gradient-to-br from-[#6248ff]/10 to-[#d0ed01]/10 p-6 rounded-2xl border border-[#6248ff]/20">
                <h3 className="text-xl font-bold text-[#6248ff] mb-3">Q4. How fast can an automotive organization see tangible impact?</h3>
                <p className="text-gray-300">Most organizations begin to see measurable improvements in visibility, first-time-right quality, and field issue detection within 90–120 days of structured implementation. We build in stages — fast enough to show progress, stable enough for long-term scale.</p>
              </div>
              <div className="bg-gradient-to-br from-[#d0ed01]/10 to-[#6248ff]/10 p-6 rounded-2xl border border-[#d0ed01]/20">
                <h3 className="text-xl font-bold text-[#d0ed01] mb-3">Q5. Do you only focus on technology, or also people and operations?</h3>
                <p className="text-gray-300">Technology is only one side of the equation. We focus equally on upskilling teams, aligning plants and programs, and creating systems that make work easier — not harder. Innovation should empower people, not replace them.</p>
              </div>
              <div className="bg-gradient-to-br from-[#6248ff]/10 to-[#d0ed01]/10 p-6 rounded-2xl border border-[#6248ff]/20">
                <h3 className="text-xl font-bold text-[#6248ff] mb-3">Q6. Can Symbiotes support software-defined vehicle roadmaps and data monetization?</h3>
                <p className="text-gray-300">Yes. We help architect SDV platforms, secure OTA, and data products — from predictive services and usage-based features to fleet analytics — with clear governance and ROI.</p>
              </div>
              <div className="bg-gradient-to-br from-[#d0ed01]/10 to-[#6248ff]/10 p-6 rounded-2xl border border-[#d0ed01]/20">
                <h3 className="text-xl font-bold text-[#d0ed01] mb-3">Q7. How does Symbiotes differ from traditional consulting or IT vendors?</h3>
                <p className="text-gray-300">We're not a traditional consultant. We're an ecosystem builder. We don't just advise — we design, build, and operationalize systems that grow with you. From AI to brand to market readiness, we handle the entire 0→1→100 journey.</p>
              </div>
              <div className="bg-gradient-to-br from-[#6248ff]/10 to-[#d0ed01]/10 p-6 rounded-2xl border border-[#6248ff]/20">
                <h3 className="text-xl font-bold text-[#6248ff] mb-3">Q8. How do we start working with Symbiotes?</h3>
                <p className="text-gray-300">Start with a 30-minute strategy call. We'll understand your current challenges, goals, and gaps — then co-design a roadmap tailored to your organization's reality and long-term vision.</p>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#6248ff]/20 to-[#d0ed01]/20 p-12 rounded-2xl border border-[#d0ed01]/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Rebuild the Future of Automotive with Intelligence
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              The Automotive industry doesn't need another upgrade — it needs a reinvention. Symbiotes helps build that future — connecting data, machines, and people into one intelligent ecosystem that learns, protects, and grows.
            </p>
            <p className="text-lg text-[#d0ed01] font-bold mb-8">
              Your next program deserves systems that can think. Let's build them together.
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
                Download the Automotive Intelligence Blueprint
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AutomotivePage;
