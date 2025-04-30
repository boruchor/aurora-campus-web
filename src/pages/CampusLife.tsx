
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VirtualCampusTour from '@/components/campus-life/VirtualCampusTour';
import ClubsAndSocieties from '@/components/campus-life/ClubsAndSocieties';
import HousingAndDining from '@/components/campus-life/HousingAndDining';
import StudentStories from '@/components/campus-life/StudentStories';
import AthleticsAndWellness from '@/components/campus-life/AthleticsAndWellness';

const CampusLife = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-aurora-light/10 to-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Campus Life</h1>
            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
              Experience the vibrant community and endless opportunities that make Aurora University 
              more than just a place to study—it's a place to belong, grow, and thrive.
            </p>
          </div>
        </section>
        
        <VirtualCampusTour />
        <ClubsAndSocieties />
        <HousingAndDining />
        <StudentStories />
        <AthleticsAndWellness />
      </main>
      <Footer />
    </div>
  );
};

export default CampusLife;
