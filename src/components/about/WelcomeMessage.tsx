
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const WelcomeMessage = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/5">
            <img 
              src="https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Chancellor Portrait" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-3/5">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Aurora University</h1>
            <Card className="bg-white border-none shadow-md">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">A Message from the Chancellor</h2>
                <p className="text-lg mb-4">
                  "At Aurora University, we believe that education is more than just the transfer of knowledge—it is the transformation of minds and the cultivation of future leaders who will shape our world. 
                </p>
                <p className="text-lg mb-4">
                  Our institution stands at the intersection of tradition and innovation. We honor our rich heritage while embracing the challenges and opportunities of the future. Through rigorous academics, groundbreaking research, and a vibrant campus community, we prepare our students to become thoughtful, ethical, and impactful citizens of the global community.
                </p>
                <p className="text-lg mb-4">
                  I invite you to explore our university—whether virtually or in person—and discover the remarkable community that makes Aurora a truly special place for learning, discovery, and growth."
                </p>
                <div className="flex items-center mt-6">
                  <div className="mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                      alt="Chancellor Signature" 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Dr. Eleanor M. Robinson</p>
                    <p className="text-gray-600">Chancellor, Aurora University</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;
