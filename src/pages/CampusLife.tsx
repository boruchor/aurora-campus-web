
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HousingAndDining from '@/components/campus-life/HousingAndDining';
import ClubsAndSocieties from '@/components/campus-life/ClubsAndSocieties';
import AthleticsAndWellness from '@/components/campus-life/AthleticsAndWellness';
import StudentStories from '@/components/campus-life/StudentStories';
import VirtualCampusTour from '@/components/campus-life/VirtualCampusTour';
import StudentTestimonialVideo from '@/components/campus-life/StudentTestimonialVideo';
import BackToTop from '@/components/BackToTop';

const CampusLife = () => {
  useEffect(() => {
    // Initialize animations when component mounts
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: false,
      });
    }
    
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="relative py-16 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative container mx-auto px-4 text-center text-white z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">Campus Life</h1>
            <p className="text-xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Experience the vibrant community and diverse opportunities that make Aurora University a place to thrive.
            </p>
          </div>
        </div>

        <HousingAndDining />
        <StudentTestimonialVideo />
        <ClubsAndSocieties />
        <AthleticsAndWellness />
        <StudentStories />
        <VirtualCampusTour />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default CampusLife;
