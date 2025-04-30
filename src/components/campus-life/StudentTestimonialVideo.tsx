
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Play } from 'lucide-react';

export type Testimonial = {
  id: string;
  name: string;
  program: string;
  year: string;
  thumbnail: string;
  videoUrl: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sophia Chen",
    program: "Computer Science",
    year: "Senior",
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    quote: "Aurora University changed my perspective on learning. The hands-on projects and research opportunities have prepared me for the real world.",
  },
  {
    id: "2",
    name: "Marcus Johnson",
    program: "Environmental Science",
    year: "Junior",
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    quote: "The sustainability initiatives and field research at Aurora have been incredible. I'm making real contributions to climate research as an undergraduate.",
  },
  {
    id: "3",
    name: "Aisha Patel",
    program: "International Relations",
    year: "Graduate",
    thumbnail: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    quote: "The global perspective I gained from Aurora's study abroad programs and diverse student body has been invaluable to my career in diplomacy.",
  },
];

const StudentTestimonialVideo = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [open, setOpen] = useState(false);
  
  const openVideoModal = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setOpen(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Student Voices</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Hear directly from our students about their experiences at Aurora University.
          </p>
          <div className="w-20 h-1 bg-aurora mx-auto mt-6" data-aos="fade-up" data-aos-delay="300"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="relative aspect-video cursor-pointer group" onClick={() => openVideoModal(testimonial)}>
                <img 
                  src={testimonial.thumbnail} 
                  alt={`${testimonial.name} thumbnail`}
                  className="w-full h-full object-cover brightness-75 group-hover:brightness-50 transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-aurora/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-white fill-current" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <blockquote className="italic text-gray-700 mb-4">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.program}, {testimonial.year}</p>
                  </div>
                </div>
                <Button 
                  onClick={() => openVideoModal(testimonial)}
                  className="w-full mt-4 bg-aurora hover:bg-aurora-dark"
                >
                  Watch Testimonial
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedTestimonial?.name}'s Story</DialogTitle>
            <DialogDescription>
              {selectedTestimonial?.program}, {selectedTestimonial?.year}
            </DialogDescription>
          </DialogHeader>
          <div className="aspect-video w-full">
            {selectedTestimonial && (
              <iframe 
                src={selectedTestimonial.videoUrl}
                className="w-full h-full rounded-md"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${selectedTestimonial.name}'s Testimonial`}
              ></iframe>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default StudentTestimonialVideo;
