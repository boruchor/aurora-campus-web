
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type Faculty = {
  id: number;
  name: string;
  title: string;
  department: string;
  image: string;
  expertise: string[];
  education: string;
};

const faculty: Faculty[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Professor",
    department: "Computer Science",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    expertise: ["Artificial Intelligence", "Machine Learning", "Data Mining"],
    education: "Ph.D., Computer Science, Stanford University"
  },
  {
    id: 2,
    name: "Dr. Michael Rodriguez",
    title: "Associate Professor",
    department: "Biology",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    expertise: ["Molecular Biology", "Genetics", "Bioinformatics"],
    education: "Ph.D., Molecular Biology, University of California, Berkeley"
  },
  {
    id: 3,
    name: "Dr. Amara Jackson",
    title: "Assistant Professor",
    department: "Economics",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    expertise: ["Development Economics", "International Trade", "Econometrics"],
    education: "Ph.D., Economics, Harvard University"
  },
  {
    id: 4,
    name: "Dr. James Park",
    title: "Professor",
    department: "Literature",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    expertise: ["20th Century Fiction", "Literary Theory", "Creative Writing"],
    education: "Ph.D., English Literature, Oxford University"
  },
  {
    id: 5,
    name: "Dr. Elena Kim",
    title: "Distinguished Professor",
    department: "Physics",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    expertise: ["Quantum Mechanics", "Theoretical Physics", "Particle Physics"],
    education: "Ph.D., Theoretical Physics, MIT"
  },
  {
    id: 6,
    name: "Dr. Marcus Johnson",
    title: "Associate Professor",
    department: "Psychology",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    expertise: ["Clinical Psychology", "Cognitive Behavioral Therapy", "Mental Health"],
    education: "Ph.D., Clinical Psychology, University of Chicago"
  }
];

const FacultyProfiles = () => {
  return (
    <section className="py-16 bg-gray-50" id="faculty">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3 text-center">Meet Our Faculty</h2>
        <p className="text-lg text-center mb-10 max-w-2xl mx-auto text-gray-600">
          Learn from world-renowned experts dedicated to excellence in teaching and research
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member) => (
            <FacultyCard key={member.id} faculty={member} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-aurora hover:bg-aurora-dark">
            View All Faculty
          </Button>
        </div>
      </div>
    </section>
  );
};

const FacultyCard = ({ faculty }: { faculty: Faculty }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
      <CardContent className="p-0">
        <div className="aspect-[3/4] overflow-hidden">
          <img 
            src={faculty.image} 
            alt={faculty.name} 
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-1">{faculty.name}</h3>
          <p className="text-aurora mb-1">{faculty.title}</p>
          <p className="text-gray-600 mb-3">{faculty.department}</p>
          
          <div className="flex flex-wrap gap-1.5 mb-3">
            <TooltipProvider>
              {faculty.expertise.map((area, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 cursor-help">
                      {area}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">Expert in {area}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
          
          <p className="text-sm text-gray-500">{faculty.education}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FacultyProfiles;
