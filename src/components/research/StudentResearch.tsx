
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type StudentProject = {
  id: number;
  title: string;
  student: string;
  major: string;
  class: string;
  description: string;
  image: string;
  impact: string;
};

const studentProjects: StudentProject[] = [
  {
    id: 1,
    title: "Biodegradable Plastics from Agricultural Waste",
    student: "Maya Patel",
    major: "Chemical Engineering",
    class: "Senior",
    description: "Developing sustainable plastic alternatives using agricultural waste products that fully decompose within 6 months while maintaining commercial-grade durability.",
    image: "https://images.unsplash.com/photo-1582486225644-4f0eb69c6e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    impact: "Potential to reduce plastic waste by utilizing abundant agricultural byproducts."
  },
  {
    id: 2,
    title: "AI-Powered Early Detection of Plant Diseases",
    student: "Jason Kim",
    major: "Computer Science",
    class: "Junior",
    description: "Created a mobile application that uses machine learning to identify plant diseases from photographs, helping farmers intervene before widespread crop damage occurs.",
    image: "https://images.unsplash.com/photo-1530363683124-91647083a154?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    impact: "Being tested by local farmers with potential to improve crop yields and reduce pesticide use."
  },
  {
    id: 3,
    title: "Solar-Powered Water Purification System",
    student: "Aisha Johnson",
    major: "Environmental Engineering",
    class: "Senior",
    description: "Designed an affordable, portable water purification system powered entirely by solar energy that can produce up to 20 liters of clean drinking water daily.",
    image: "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    impact: "Prototype being tested in rural communities with limited access to clean water."
  },
  {
    id: 4,
    title: "Mental Health Monitoring Wearable Device",
    student: "Carlos Rodriguez",
    major: "Biomedical Engineering",
    class: "Sophomore",
    description: "Developing a wearable device that monitors key physiological indicators of stress and anxiety, providing early intervention recommendations through a companion app.",
    image: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    impact: "Working with campus health services to pilot the device with student volunteers."
  },
  {
    id: 5,
    title: "Urban Vertical Farming Optimization",
    student: "Zoe Chen",
    major: "Agricultural Science",
    class: "Junior",
    description: "Researching optimal lighting, nutrient delivery, and plant spacing configurations to maximize yields in urban vertical farming systems while minimizing energy usage.",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    impact: "Partnering with local urban farms to implement findings and improve food production."
  }
];

const StudentResearch = () => {
  return (
    <section className="py-16 bg-white" id="student-research">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3 text-center">Student-Led Innovation</h2>
        <p className="text-lg text-center mb-10 max-w-2xl mx-auto text-gray-600">
          Highlighting the groundbreaking research conducted by our undergraduate students
        </p>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {studentProjects.map((project) => (
              <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <StudentProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative mr-4" />
            <CarouselNext className="relative" />
          </div>
        </Carousel>
        
        <div className="text-center mt-12">
          <div className="bg-indigo-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">Undergraduate Research Opportunities</h3>
            <p className="text-gray-700 mb-4">
              Aurora University offers numerous pathways for undergraduates to engage in meaningful research alongside faculty mentors.
            </p>
            <a 
              href="#" 
              className="inline-block px-6 py-3 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 transition-colors"
            >
              Apply for Research Funding
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const StudentProjectCard = ({ project }: { project: StudentProject }) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <div className="aspect-video w-full overflow-hidden rounded-t-lg">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            {project.major}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
            {project.class} Year
          </span>
        </div>
        
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{project.title}</h3>
        
        <p className="text-sm text-gray-500 mb-3">
          By {project.student}
        </p>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
        
        <div className="mt-auto pt-3 border-t border-gray-100">
          <p className="text-xs font-medium text-gray-700">
            <span className="font-semibold">Impact: </span>
            {project.impact}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentResearch;
