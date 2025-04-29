
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Subject = {
  id: number;
  name: string;
  description: string;
  category: 'arts' | 'science' | 'business' | 'engineering' | 'health' | 'social';
  programTypes: ('undergraduate' | 'graduate' | 'online')[];
  icon: string;
};

const subjects: Subject[] = [
  {
    id: 1,
    name: "Computer Science",
    description: "Study algorithms, programming languages, and computational systems",
    category: 'engineering',
    programTypes: ['undergraduate', 'graduate', 'online'],
    icon: "💻"
  },
  {
    id: 2,
    name: "Psychology",
    description: "Explore human behavior, cognition, and mental processes",
    category: 'social',
    programTypes: ['undergraduate', 'graduate', 'online'],
    icon: "🧠"
  },
  {
    id: 3,
    name: "Business Administration",
    description: "Learn principles of management, finance, marketing, and operations",
    category: 'business',
    programTypes: ['undergraduate', 'graduate', 'online'],
    icon: "📊"
  },
  {
    id: 4,
    name: "Biology",
    description: "Study living organisms, their structures, functions, and interactions",
    category: 'science',
    programTypes: ['undergraduate', 'graduate'],
    icon: "🧬"
  },
  {
    id: 5,
    name: "English Literature",
    description: "Analyze literary works, cultural contexts, and critical theory",
    category: 'arts',
    programTypes: ['undergraduate', 'graduate', 'online'],
    icon: "📚"
  },
  {
    id: 6,
    name: "Mechanical Engineering",
    description: "Design, analyze, and manufacture mechanical systems",
    category: 'engineering',
    programTypes: ['undergraduate', 'graduate'],
    icon: "⚙️"
  },
  {
    id: 7,
    name: "Nursing",
    description: "Prepare for patient care with clinical training and health sciences",
    category: 'health',
    programTypes: ['undergraduate', 'graduate', 'online'],
    icon: "🏥"
  },
  {
    id: 8,
    name: "Economics",
    description: "Study production, distribution, and consumption of goods and services",
    category: 'business',
    programTypes: ['undergraduate', 'graduate'],
    icon: "📈"
  },
  {
    id: 9,
    name: "Chemistry",
    description: "Explore matter, its properties, composition, and transformations",
    category: 'science',
    programTypes: ['undergraduate', 'graduate'],
    icon: "🧪"
  },
  {
    id: 10,
    name: "Fine Arts",
    description: "Develop creative skills in visual arts, music, theater, or dance",
    category: 'arts',
    programTypes: ['undergraduate'],
    icon: "🎨"
  },
  {
    id: 11,
    name: "Political Science",
    description: "Analyze political systems, governance, and public policy",
    category: 'social',
    programTypes: ['undergraduate', 'graduate', 'online'],
    icon: "🏛️"
  },
  {
    id: 12,
    name: "Public Health",
    description: "Study prevention, health promotion, and community well-being",
    category: 'health',
    programTypes: ['undergraduate', 'graduate', 'online'],
    icon: "🌍"
  },
];

const BrowseBySubject = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredSubjects = filter === 'all' 
    ? subjects 
    : subjects.filter(subject => subject.category === filter);

  return (
    <section className="py-16 bg-gray-50" id="subjects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Browse by Subject</h2>
        
        <div className="mb-8">
          <Tabs defaultValue="all" onValueChange={setFilter} className="w-full">
            <TabsList className="flex flex-wrap justify-center mb-6">
              <TabsTrigger value="all">All Subjects</TabsTrigger>
              <TabsTrigger value="arts">Arts & Humanities</TabsTrigger>
              <TabsTrigger value="science">Science</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="engineering">Engineering</TabsTrigger>
              <TabsTrigger value="health">Health Sciences</TabsTrigger>
              <TabsTrigger value="social">Social Sciences</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSubjects.map((subject) => (
                  <SubjectCard key={subject.id} subject={subject} />
                ))}
              </div>
            </TabsContent>
            
            {['arts', 'science', 'business', 'engineering', 'health', 'social'].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSubjects.map((subject) => (
                    <SubjectCard key={subject.id} subject={subject} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

const SubjectCard = ({ subject }: { subject: Subject }) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="text-4xl mb-4">{subject.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
        <p className="text-gray-600 mb-4">{subject.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {subject.programTypes.includes('undergraduate') && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Undergraduate
            </span>
          )}
          {subject.programTypes.includes('graduate') && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              Graduate
            </span>
          )}
          {subject.programTypes.includes('online') && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Online
            </span>
          )}
        </div>
        <Button variant="outline" className="w-full">Learn More</Button>
      </CardContent>
    </Card>
  );
};

export default BrowseBySubject;
