import SectionTwo from '@/components/SectionTwo';
import SectionThree from '@/components/SectionThree';
import QuestionsSection from '@/components/QuestionsSection';
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
      
        <HeroSection />
        <SectionTwo />
        <SectionThree />
        <QuestionsSection />
        <CardSection />
        <FeaturesSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      
    </main>
  );
}
