
import React, { useState } from 'react';
import { Microscope, AtomIcon, TestTubes, FileChartLine } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ResearchArea = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  examples: string[];
};

const researchAreas: ResearchArea[] = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "Pioneering research in machine learning, neural networks, and autonomous systems to solve complex problems and create intelligent technologies.",
    icon: AtomIcon,
    examples: [
      "Natural Language Processing",
      "Computer Vision",
      "Reinforcement Learning",
      "Autonomous Systems",
      "Ethical AI Development"
    ]
  },
  {
    id: "sustainable",
    title: "Sustainable Energy",
    description: "Developing innovative solutions for renewable energy generation, storage, and distribution to address global climate challenges.",
    icon: FileChartLine,
    examples: [
      "Solar Energy Optimization",
      "Wind Power Systems",
      "Energy Storage Technologies",
      "Smart Grid Development",
      "Biofuel Research"
    ]
  },
  {
    id: "materials",
    title: "Materials Science",
    description: "Creating and studying advanced materials with novel properties for applications in medicine, engineering, and sustainable development.",
    icon: TestTubes,
    examples: [
      "Nanomaterials",
      "Biomaterials",
      "Polymers & Composites",
      "Electronic Materials",
      "Sustainable Materials"
    ]
  },
  {
    id: "biotech",
    title: "Biotechnology",
    description: "Leveraging biological systems and organisms to develop new products and processes that improve human health and environmental sustainability.",
    icon: Microscope,
    examples: [
      "Gene Therapy",
      "Synthetic Biology",
      "Bioinformatics",
      "Agricultural Biotechnology",
      "Pharmaceutical Development"
    ]
  }
];

const ResearchAreas = () => {
  const [activeTab, setActiveTab] = useState("ai");

  return (
    <section className="py-16 bg-gray-50" id="research-areas">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3 text-center">Research Areas</h2>
        <p className="text-lg text-center mb-10 max-w-2xl mx-auto text-gray-600">
          Explore our diverse research initiatives across multiple disciplines
        </p>
        
        <Tabs defaultValue="ai" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 sm:grid-cols-4">
              {researchAreas.map((area) => (
                <TabsTrigger key={area.id} value={area.id} className="px-4 py-2 flex items-center gap-2">
                  <area.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{area.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {researchAreas.map((area) => (
            <TabsContent key={area.id} value={area.id} className="mt-0">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="lg:flex gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <area.icon className="h-8 w-8 mr-3 text-indigo-700" />
                        <h3 className="text-2xl font-bold">{area.title}</h3>
                      </div>
                      <p className="text-gray-700 mb-6">{area.description}</p>
                      <h4 className="font-medium text-lg mb-3">Research Focus Areas:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {area.examples.map((example, index) => (
                          <li key={index} className="flex items-center">
                            <span className="h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:w-1/3 mt-6 lg:mt-0 bg-indigo-100 rounded-lg p-4">
                      <h4 className="font-medium text-lg mb-3 text-indigo-900">Key Statistics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg text-center">
                          <p className="text-3xl font-bold text-indigo-700">25+</p>
                          <p className="text-sm text-gray-600">Active Projects</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center">
                          <p className="text-3xl font-bold text-indigo-700">$12M</p>
                          <p className="text-sm text-gray-600">Annual Funding</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center">
                          <p className="text-3xl font-bold text-indigo-700">40+</p>
                          <p className="text-sm text-gray-600">Researchers</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center">
                          <p className="text-3xl font-bold text-indigo-700">18</p>
                          <p className="text-sm text-gray-600">Patents</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ResearchAreas;
