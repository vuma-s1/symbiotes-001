import SectionTwo from '@/components/SectionTwo';
import QuestionsSection from '@/components/QuestionsSection';
import HeroSection from '@/components/HeroSection';

import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FiveProcessSection from '@/components/FiveProcessSection';
import ContactSection from '@/components/ContactSection';

import CardSection from '@/components/CardSection';
import HeadingSection from '@/components/HeadingSection';
import FAQSection from '@/components/FAQSection';
import CommunitySection from '@/components/CommunitySection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111]">
        <HeroSection />
        <SectionTwo />
        <HeadingSection />
        
        <QuestionsSection />
        <CardSection />
        <FeaturesSection />
        <AboutSection />
        <ServicesSection />
        <CommunitySection/>
        <FiveProcessSection />
        <ContactSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        
      
    </main>
  );
}
