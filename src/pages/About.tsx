
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WelcomeMessage from '@/components/about/WelcomeMessage';
import MissionVision from '@/components/about/MissionVision';
import HistoryTimeline from '@/components/about/HistoryTimeline';
import UniversityStructure from '@/components/about/UniversityStructure';
import Accreditation from '@/components/about/Accreditation';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <WelcomeMessage />
        <MissionVision />
        <HistoryTimeline />
        <UniversityStructure />
        <Accreditation />
      </main>
      <Footer />
    </div>
  );
};

export default About;
