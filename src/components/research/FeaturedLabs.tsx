
import React from 'react';
import { Microscope, TestTube, AtomIcon } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

type Lab = {
  id: number;
  name: string;
  director: string;
  description: string;
  image: string;
  equipmentHighlights: string[];
  icon: React.ElementType;
};

const labs: Lab[] = [
  {
    id: 1,
    name: "Advanced AI Systems Laboratory",
    director: "Dr. Sophia Chen",
    description: "Our lab focuses on developing next-generation artificial intelligence systems with applications in healthcare, finance, and autonomous vehicles.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    equipmentHighlights: [
      "NVIDIA DGX SuperPOD Cluster",
      "Quantum Computing Interface",
      "Brain-Computer Interface Lab",
      "Autonomous Robot Testing Facility"
    ],
    icon: AtomIcon
  },
  {
    id: 2,
    name: "Sustainable Materials Engineering Lab",
    director: "Dr. Marcus Johnson",
    description: "We research and develop eco-friendly materials for construction, packaging, and consumer products to reduce environmental impact while maintaining performance.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    equipmentHighlights: [
      "Materials Characterization Suite",
      "Bioplastic Development System",
      "Environmental Testing Chamber",
      "Composite Manufacturing Unit"
    ],
    icon: TestTube
  },
  {
    id: 3,
    name: "Genomics & Biotechnology Research Center",
    director: "Dr. Elena Rodriguez",
    description: "Our center integrates cutting-edge genomic technologies with biotechnology applications to address challenges in medicine, agriculture, and environmental conservation.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    equipmentHighlights: [
      "Next-Gen Sequencing Platform",
      "CRISPR Gene Editing Suite",
      "Bioreactor Arrays",
      "Cell Culture Facility"
    ],
    icon: Microscope
  }
];

const FeaturedLabs = () => {
  return (
    <section className="py-16 bg-gray-50" id="labs">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3 text-center">Featured Labs & Facilities</h2>
        <p className="text-lg text-center mb-10 max-w-2xl mx-auto text-gray-600">
          Explore our state-of-the-art research facilities equipped with cutting-edge technology
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {labs.map((lab) => (
            <LabCard key={lab.id} lab={lab} />
          ))}
        </div>
      </div>
    </section>
  );
};

const LabCard = ({ lab }: { lab: Lab }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="relative overflow-hidden rounded-lg cursor-pointer h-96 group">
          <img 
            src={lab.image} 
            alt={lab.name} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20">
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center mb-2">
                <lab.icon className="h-6 w-6 text-indigo-400 mr-2" />
                <h3 className="text-xl font-bold text-white">{lab.name}</h3>
              </div>
              <p className="text-gray-300 text-sm">{lab.director}</p>
            </div>
          </div>
        </div>
      </HoverCardTrigger>
      
      <HoverCardContent className="w-80 p-0 shadow-xl">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{lab.name}</h3>
          <p className="text-sm text-gray-600 mb-4">{lab.description}</p>
          
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Equipment Highlights:</h4>
            <ul className="space-y-1">
              {lab.equipmentHighlights.map((item, i) => (
                <li key={i} className="text-xs flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 mt-1 mr-2"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-4 pt-3 border-t border-gray-100">
            <a 
              href="#" 
              className="text-xs text-indigo-600 hover:text-indigo-800 flex items-center justify-end"
            >
              Visit Lab Website
              <svg className="h-3.5 w-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default FeaturedLabs;
