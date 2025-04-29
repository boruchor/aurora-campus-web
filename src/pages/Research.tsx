
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResearchAreas from '@/components/research/ResearchAreas';
import RecentPublications from '@/components/research/RecentPublications';
import FeaturedLabs from '@/components/research/FeaturedLabs';
import StudentResearch from '@/components/research/StudentResearch';

const Research = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-aurora-light/10 to-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Research & Innovation</h1>
            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
              At Aurora University, we're committed to pushing the boundaries of knowledge through
              groundbreaking research and innovation across disciplines.
            </p>
          </div>
        </section>
        
        <ResearchAreas />
        <RecentPublications />
        <FeaturedLabs />
        <StudentResearch />
      </main>
      <Footer />
    </div>
  );
};

export default Research;
