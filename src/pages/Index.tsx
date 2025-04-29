
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuickFactsSection from '@/components/QuickFactsSection';
import FeaturedNewsSection from '@/components/FeaturedNewsSection';
import ResearchSection from '@/components/ResearchSection';
import EventsSection from '@/components/EventsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
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
