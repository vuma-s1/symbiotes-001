import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CardSection from '@/components/CardSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111]">
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <CardSection />
        <FeaturesSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}