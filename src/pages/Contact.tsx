
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InquiryForm from '@/components/contact/InquiryForm';
import ContactInfo from '@/components/contact/ContactInfo';
import CampusMap from '@/components/contact/CampusMap';
import DepartmentsDirectory from '@/components/contact/DepartmentsDirectory';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-aurora/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground">
                We're here to help. Reach out to Aurora University with any questions or concerns.
              </p>
            </div>
          </div>
        </section>
        
        <section className="container py-8 md:py-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <ContactInfo />
            <InquiryForm />
          </div>
        </section>
        
        <section className="bg-muted/40 py-12">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Campus</h2>
            <CampusMap />
          </div>
        </section>
        
        <section className="container py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Departments Directory</h2>
          <DepartmentsDirectory />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
