
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80')",
        }}
      >
        <div className="absolute inset-0 hero-overlay" />
      </div>
      
      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Empowering Innovation.
              <br />
              <span className="animate-underline">Shaping Futures.</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Aurora University fosters an environment where curiosity, creativity, and critical thinking converge to address global challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg"
                className="bg-aurora hover:bg-aurora-dark text-white font-medium text-lg"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white/90 hover:bg-white text-aurora-dark font-medium text-lg"
              >
                Visit Campus
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/20 font-medium text-lg"
              >
                Donate
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
        <span className="text-white text-sm mb-2">Scroll to explore</span>
        <div className="w-px h-8 bg-white/50 animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;
