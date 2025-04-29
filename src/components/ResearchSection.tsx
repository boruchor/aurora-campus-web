
import React from 'react';
import { cn } from "@/lib/utils";
import { ArrowRight } from 'lucide-react';

type ResearchArea = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const researchAreas: ResearchArea[] = [
  {
    id: 1,
    title: "Climate Science & Sustainability",
    description: "Developing innovative solutions to global environmental challenges through interdisciplinary collaboration.",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Quantum Computing",
    description: "Pushing the boundaries of computational power to solve complex problems across science and industry.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Medical Breakthroughs",
    description: "Pioneering research in genomics, immunology, and biomedical engineering to enhance human health.",
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  }
];

const ResearchSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Excellence</h2>
          <div className="w-20 h-1 bg-aurora mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Aurora University leads groundbreaking research initiatives that address society's most pressing challenges and expand the boundaries of human knowledge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchAreas.map((area) => (
            <div key={area.id} className="research-card">
              <div 
                className="h-96 bg-cover bg-center"
                style={{ backgroundImage: `url(${area.image})` }}
              >
                <div className="research-card-overlay"></div>
                <div className="research-card-content text-white">
                  <h3 className="text-2xl font-bold mb-2">{area.title}</h3>
                  <p className="mb-4">{area.description}</p>
                  <a 
                    href={`/research#area-${area.id}`}
                    className="inline-flex items-center text-white"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/research" 
            className="inline-flex items-center text-aurora hover:text-aurora-dark transition-colors font-medium"
          >
            Explore all research initiatives
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
