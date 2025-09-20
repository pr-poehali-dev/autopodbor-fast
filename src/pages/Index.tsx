import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AutoSelectionSection from '@/components/AutoSelectionSection';
import InspectionSection from '@/components/InspectionSection';
import AdditionalSections from '@/components/AdditionalSections';
import Footer from '@/components/Footer';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('main');

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation 
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />
      
      <HeroSection 
        onNavigateToSection={scrollToSection}
      />
      
      <ServicesSection />
      
      <AutoSelectionSection />
      
      <InspectionSection />
      
      <AdditionalSections />
      
      <Footer />
    </div>
  );
};

export default Index;