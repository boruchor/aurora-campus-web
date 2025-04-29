
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AcademicDivisions from '@/components/academics/AcademicDivisions';
import BrowseBySubject from '@/components/academics/BrowseBySubject';
import SampleCourses from '@/components/academics/SampleCourses';
import FacultyProfiles from '@/components/academics/FacultyProfiles';

const Academics = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-aurora-light/10 to-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Academic Excellence</h1>
            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
              Aurora University offers a diverse range of academic programs designed to challenge, 
              inspire, and prepare students for meaningful careers and impactful lives.
            </p>
          </div>
        </section>
        
        <AcademicDivisions />
        <BrowseBySubject />
        <SampleCourses />
        <FacultyProfiles />
      </main>
      <Footer />
    </div>
  );
};

export default Academics;
