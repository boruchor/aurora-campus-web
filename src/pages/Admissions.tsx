
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdmissionsOverview from '@/components/admissions/AdmissionsOverview';
import HowToApply from '@/components/admissions/HowToApply';
import TuitionAndFees from '@/components/admissions/TuitionAndFees';
import ScholarshipsAndAid from '@/components/admissions/ScholarshipsAndAid';
import ApplicationForm from '@/components/admissions/ApplicationForm';

const Admissions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-aurora-light/10 to-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Admissions & Aid</h1>
            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
              Your journey at Aurora University begins here. Explore our admission requirements, 
              application process, and financial aid opportunities.
            </p>
          </div>
        </section>
        
        <AdmissionsOverview />
        <HowToApply />
        <TuitionAndFees />
        <ScholarshipsAndAid />
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Admissions;
