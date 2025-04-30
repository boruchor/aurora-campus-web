
import React, { useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuickFactsSection from '@/components/QuickFactsSection';
import FeaturedNewsSection from '@/components/FeaturedNewsSection';
import ResearchSection from '@/components/ResearchSection';
import EventsSection from '@/components/EventsSection';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  const { theme } = useTheme();
  
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 120,
    });
  }, []);

  // Refresh AOS when theme changes
  useEffect(() => {
    AOS.refresh();
  }, [theme]);

  return (
    <div className="min-h-screen">
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
    </div>
  );
};

export default Index;
