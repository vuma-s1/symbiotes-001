import SectionTwo from '@/components/SectionTwo';
import QuestionsSection from '@/components/QuestionsSection';
import HeroSection from '@/components/HeroSection';
import TrustedBySection from '@/components/TrustedBySection';

import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FounderStorySection from '@/components/FounderStorySection';
import FiveProcessSection from '@/components/FiveProcessSection';
import ContactSection from '@/components/ContactSection';

import CardSection from '@/components/CardSection';
import HeadingSection from '@/components/HeadingSection';
import FAQSection from '@/components/FAQSection';
import DomeGallery from '@/components/DomeGallery';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111]">
        <HeroSection />
        <TrustedBySection />
        <SectionTwo />
        <HeadingSection />
        
        <QuestionsSection />
        <CardSection />
        <FeaturesSection />
        <AboutSection />
        <ServicesSection />
  <DomeGallery />
        <FiveProcessSection />
        <ContactSection />
        <PricingSection />
        <TestimonialsSection />
        <FounderStorySection />
        <FAQSection />
        
      
    </main>
  );
}
