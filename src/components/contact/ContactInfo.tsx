
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-8 md:pr-6">
      <div>
        <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
        <p className="text-muted-foreground mb-8">
          Whether you're a prospective student, alumni, or community member, we're here to answer your questions
          and provide the information you need.
        </p>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-aurora/10 p-3 rounded-full mr-4">
            <Phone className="h-6 w-6 text-aurora" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Phone</h4>
            <p className="text-muted-foreground">(555) 123-4567</p>
            <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 8:00 AM - 5:00 PM</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-aurora/10 p-3 rounded-full mr-4">
            <Mail className="h-6 w-6 text-aurora" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Email</h4>
            <p className="text-muted-foreground">info@aurora-university.edu</p>
            <p className="text-sm text-muted-foreground mt-1">We aim to respond within 1 business day</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-aurora/10 p-3 rounded-full mr-4">
            <MapPin className="h-6 w-6 text-aurora" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Address</h4>
            <p className="text-muted-foreground">
              1200 Aurora Drive<br />
              Aurora, CA 94301
            </p>
            <p className="text-sm text-muted-foreground mt-1">Main Campus</p>
          </div>
        </div>
      </div>
      
      <div className="pt-4">
        <h4 className="font-medium mb-3">Connect With Us</h4>
        <div className="flex space-x-4">
          <a href="#" className="bg-aurora/10 p-3 rounded-full hover:bg-aurora/20 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aurora">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#" className="bg-aurora/10 p-3 rounded-full hover:bg-aurora/20 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aurora">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" className="bg-aurora/10 p-3 rounded-full hover:bg-aurora/20 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aurora">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a href="#" className="bg-aurora/10 p-3 rounded-full hover:bg-aurora/20 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aurora">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
