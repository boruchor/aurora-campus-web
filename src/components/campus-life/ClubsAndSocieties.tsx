
import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const clubCategories = ["All", "Academic", "Arts & Culture", "Athletic", "Community Service", "Professional", "Social"];

const clubs = [
  {
    name: "Student Government Association",
    category: "Academic",
    members: 42,
    description: "The official voice of the student body, representing student interests to university administration.",
    image: "https://images.unsplash.com/photo-1573164574001-518958d9baa2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "Aurora Entrepreneurs",
    category: "Professional",
    members: 35,
    description: "Supporting student entrepreneurs through networking, mentorship, and business competitions.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "Global Cultures Club",
    category: "Arts & Culture",
    members: 53,
    description: "Celebrating diversity through cultural events, international cuisine, and language exchanges.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "Debate Team",
    category: "Academic",
    members: 28,
    description: "Award-winning debate team participating in regional and national competitions.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "Environmental Action",
    category: "Community Service",
    members: 67,
    description: "Promoting sustainability and environmental awareness through campus initiatives.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "Aurora Theatre Company",
    category: "Arts & Culture",
    members: 45,
    description: "Student-run theater group producing several shows each academic year.",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "Intramural Sports",
    category: "Athletic",
    members: 120,
    description: "Recreational sports leagues for students at all skill levels.",
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "Aurora Robotics Club",
    category: "Academic",
    members: 30,
    description: "Designing and building robots for competitions and research projects.",
    image: "https://images.unsplash.com/photo-1581092787768-b968508298c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

const ClubsAndSocieties = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredClubs = activeCategory === "All" 
    ? clubs 
    : clubs.filter(club => club.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Clubs & Societies</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-8">
          With over 100 student organizations, Aurora University offers endless opportunities
          to pursue your passions, develop leadership skills, and build lifelong friendships.
        </p>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {clubCategories.map((category) => (
            <Badge
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm cursor-pointer hover:bg-aurora hover:text-white transition-colors ${
                activeCategory === category 
                  ? 'bg-aurora text-white' 
                  : 'bg-white text-gray-700'
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>
        
        {/* Clubs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filteredClubs.map((club, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={club.image} 
                  alt={club.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <Badge className="mb-2 bg-aurora-light/10 text-aurora-dark border-none">
                  {club.category}
                </Badge>
                <h3 className="text-xl font-semibold mb-2">{club.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{club.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{club.members} members</span>
                  <Button variant="ghost" className="text-aurora hover:text-aurora-dark">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-aurora hover:bg-aurora-dark">
            Browse All Student Organizations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClubsAndSocieties;
