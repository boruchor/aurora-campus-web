
import React from 'react';
import { useTheme } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuickFactsSection from '@/components/QuickFactsSection';
import FeaturedNewsSection from '@/components/FeaturedNewsSection';
import ResearchSection from '@/components/ResearchSection';
import EventsSection from '@/components/EventsSection';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme}`}>
      <ParticlesBackground />
      <Header />
      <main>
        <HeroSection />
        <QuickFactsSection />
        <FeaturedNewsSection />
        <ResearchSection />
        <EventsSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
