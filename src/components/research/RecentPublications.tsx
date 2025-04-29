
import React from 'react';
import { FileSearch, FileChartColumn } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

type Publication = {
  id: number;
  title: string;
  authors: string;
  journal: string;
  date: string;
  abstract: string;
  category: 'science' | 'engineering' | 'medicine' | 'humanities';
  doi: string;
};

const publications: Publication[] = [
  {
    id: 1,
    title: "Advancements in Neural Network Architectures for Computer Vision Applications",
    authors: "Zhang, M., Patel, K., Rodriguez, S.",
    journal: "Journal of Artificial Intelligence Research",
    date: "March 2025",
    abstract: "This paper presents novel neural network architectures that significantly improve accuracy in image recognition tasks while reducing computational requirements.",
    category: 'science',
    doi: "10.1234/jair.2025.1234"
  },
  {
    id: 2,
    title: "Sustainable Urban Planning: A Comprehensive Framework for Smart Cities",
    authors: "Johnson, A., Williams, T., Garcia, L.",
    journal: "Environmental Planning and Design",
    date: "February 2025",
    abstract: "This research proposes an integrated framework for sustainable urban development that combines energy efficiency, transportation optimization, and community engagement.",
    category: 'engineering',
    doi: "10.5678/epd.2025.5678"
  },
  {
    id: 3,
    title: "Novel Biomaterials for Tissue Engineering Applications",
    authors: "Thompson, R., Chen, H., Nkosi, B.",
    journal: "Advanced Materials for Medicine",
    date: "January 2025",
    abstract: "Our study introduces a new class of biocompatible materials with enhanced mechanical properties and cellular integration for tissue engineering applications.",
    category: 'medicine',
    doi: "10.9012/amm.2025.9012"
  },
  {
    id: 4,
    title: "The Impact of Digital Communication on Modern Linguistic Patterns",
    authors: "Martinez, E., Smith, J., Kumar, P.",
    journal: "Journal of Digital Humanities",
    date: "December 2024",
    abstract: "This longitudinal study examines how digital communication platforms have influenced evolving linguistic patterns and communication norms over the past decade.",
    category: 'humanities',
    doi: "10.3456/jdh.2024.3456"
  },
  {
    id: 5,
    title: "Quantum Computing Approaches to Optimization Problems in Supply Chain Management",
    authors: "Wilson, D., Lee, S., Okafor, C.",
    journal: "Journal of Quantum Computing Applications",
    date: "November 2024",
    abstract: "We demonstrate how quantum algorithms provide exponential speedup for solving complex optimization problems in modern supply chain management systems.",
    category: 'science',
    doi: "10.7890/jqca.2024.7890"
  },
  {
    id: 6,
    title: "Climate Change Adaptation Strategies for Coastal Communities",
    authors: "Hernandez, L., Ahmed, F., Nakamura, T.",
    journal: "Climate Resilience and Sustainability",
    date: "October 2024",
    abstract: "This paper presents evidence-based strategies for coastal communities to adapt to rising sea levels and increasing storm intensities due to climate change.",
    category: 'engineering',
    doi: "10.2345/crs.2024.2345"
  }
];

const RecentPublications = () => {
  return (
    <section className="py-16 bg-white" id="publications">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3 text-center">Recent Publications</h2>
        <p className="text-lg text-center mb-10 max-w-2xl mx-auto text-gray-600">
          Our faculty and students regularly publish cutting-edge research in prestigious academic journals
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub) => (
            <PublicationCard key={pub.id} publication={pub} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 transition-colors"
          >
            <FileChartColumn className="mr-2 h-5 w-5" />
            View All Publications
          </a>
        </div>
      </div>
    </section>
  );
};

const PublicationCard = ({ publication }: { publication: Publication }) => {
  const getCategoryColor = (category: Publication['category']) => {
    switch (category) {
      case 'science': return 'bg-blue-100 text-blue-800';
      case 'engineering': return 'bg-green-100 text-green-800';
      case 'medicine': return 'bg-red-100 text-red-800';
      case 'humanities': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-2 mb-3">
          <FileSearch className="h-5 w-5 mt-1 flex-shrink-0 text-indigo-600" />
          <h3 className="text-lg font-semibold line-clamp-2">{publication.title}</h3>
        </div>
        
        <p className="text-sm text-gray-500 mb-3">{publication.authors}</p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium">{publication.journal}</span>
          <span className="text-sm text-gray-500">{publication.date}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{publication.abstract}</p>
        
        <div className="flex justify-between items-center mt-auto pt-3 border-t">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(publication.category)}`}>
            {publication.category.charAt(0).toUpperCase() + publication.category.slice(1)}
          </span>
          <a 
            href={`https://doi.org/${publication.doi}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            DOI: {publication.doi}
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentPublications;
