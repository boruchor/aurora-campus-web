
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer>
      {/* Newsletter Section */}
      <div className="aurora-gradient py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-white mb-2">Stay Connected</h3>
              <p className="text-gray-200">
                Subscribe to our newsletter for the latest news, events, and updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full md:w-auto space-y-4 sm:space-y-0 sm:space-x-2">
              <Input 
                type="email"
                placeholder="Your email address"
                className="bg-white/10 text-white border-white/30 placeholder:text-gray-300"
              />
              <Button 
                className="bg-white text-aurora-dark hover:bg-gray-100 font-medium"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1 - About */}
            <div>
              <div className="text-2xl font-bold mb-6">
                <span className="text-gray-400">Aurora</span>
                <span className="text-white ml-1">University</span>
              </div>
              <p className="text-gray-400 mb-6">
                Empowering students to create a better world through academic excellence, innovative research, and community engagement.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/academics" className="text-gray-400 hover:text-white transition-colors">Academics</a></li>
                <li><a href="/admissions" className="text-gray-400 hover:text-white transition-colors">Admissions</a></li>
                <li><a href="/research" className="text-gray-400 hover:text-white transition-colors">Research</a></li>
                <li><a href="/campus-life" className="text-gray-400 hover:text-white transition-colors">Campus Life</a></li>
                <li><a href="/news-events" className="text-gray-400 hover:text-white transition-colors">News & Events</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Column 3 - Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Student Portal</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Faculty & Staff</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Library</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Campus Map</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            {/* Column 4 - Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <span className="text-gray-400">
                    123 University Avenue<br />
                    Aurora City, AC 12345<br />
                    United States
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-400">(123) 456-7890</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-3" />
                  <a href="mailto:info@aurorauni.edu" className="text-gray-400 hover:text-white transition-colors">
                    info@aurorauni.edu
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-500">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-4 md:mb-0">
                © 2025 Aurora University. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-gray-300 transition-colors">Terms of Use</a>
                <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-gray-300 transition-colors">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
