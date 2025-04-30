
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const sportsTeams = [
  { 
    name: "Basketball", 
    type: "Men's & Women's", 
    division: "NCAA Division II",
    achievements: "Conference Champions 2023, 2024",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  { 
    name: "Soccer", 
    type: "Men's & Women's", 
    division: "NCAA Division II",
    achievements: "Regional Finalists 2023",
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  { 
    name: "Swimming", 
    type: "Men's & Women's", 
    division: "NCAA Division II",
    achievements: "3 All-Americans in 2024",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  { 
    name: "Volleyball", 
    type: "Women's", 
    division: "NCAA Division II",
    achievements: "Conference Champions 2022",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
];

const intramurals = [
  { 
    name: "Flag Football", 
    season: "Fall", 
    skillLevel: "All levels",
    image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  { 
    name: "Basketball", 
    season: "Winter", 
    skillLevel: "All levels",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  { 
    name: "Ultimate Frisbee", 
    season: "Spring", 
    skillLevel: "All levels",
    image: "https://images.unsplash.com/photo-1591491723332-b2fed3820bc9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  { 
    name: "Soccer", 
    season: "Spring", 
    skillLevel: "All levels",
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
];

const wellnessPrograms = [
  { 
    name: "Fitness Classes", 
    schedule: "Daily", 
    description: "Variety of classes including yoga, pilates, HIIT, and dance fitness.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  { 
    name: "Mental Health Services", 
    schedule: "By Appointment", 
    description: "Professional counseling and support services for all students.",
    image: "https://images.unsplash.com/photo-1557682250-491fc4b625fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  { 
    name: "Nutrition Counseling", 
    schedule: "Weekly", 
    description: "Personalized nutrition advice from registered dietitians.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  { 
    name: "Outdoor Adventures", 
    schedule: "Seasonal", 
    description: "Group hiking, climbing, and camping trips led by trained guides.",
    image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
];

const AthleticsAndWellness = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Athletics & Wellness</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          From competitive NCAA teams to casual intramurals and comprehensive wellness 
          programs, Aurora University supports your physical and mental well-being.
        </p>
        
        <Tabs defaultValue="sports" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="sports">Varsity Sports</TabsTrigger>
            <TabsTrigger value="intramurals">Intramurals</TabsTrigger>
            <TabsTrigger value="wellness">Wellness Programs</TabsTrigger>
          </TabsList>
          
          {/* Varsity Sports Tab */}
          <TabsContent value="sports">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {sportsTeams.map((sport, index) => (
                <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="h-44 overflow-hidden">
                    <img 
                      src={sport.image} 
                      alt={sport.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge className="mb-2 bg-aurora-light/10 text-aurora-dark border-none">
                      {sport.type}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-1">{sport.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{sport.division}</p>
                    <p className="text-xs font-medium text-aurora">{sport.achievements}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button className="bg-aurora hover:bg-aurora-dark">
                View All Sports Teams
              </Button>
            </div>
          </TabsContent>
          
          {/* Intramurals Tab */}
          <TabsContent value="intramurals">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {intramurals.map((sport, index) => (
                <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="h-44 overflow-hidden">
                    <img 
                      src={sport.image} 
                      alt={sport.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge className="mb-2 bg-aurora-light/10 text-aurora-dark border-none">
                      {sport.season} Season
                    </Badge>
                    <h3 className="text-xl font-semibold mb-1">{sport.name}</h3>
                    <p className="text-sm text-gray-600">{sport.skillLevel}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button className="bg-aurora hover:bg-aurora-dark">
                Intramural Sign-Ups
              </Button>
            </div>
          </TabsContent>
          
          {/* Wellness Programs Tab */}
          <TabsContent value="wellness">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {wellnessPrograms.map((program, index) => (
                <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="h-44 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge className="mb-2 bg-aurora-light/10 text-aurora-dark border-none">
                      {program.schedule}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-1">{program.name}</h3>
                    <p className="text-sm text-gray-600">{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button className="bg-aurora hover:bg-aurora-dark">
                Wellness Center Schedule
              </Button>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="max-w-6xl mx-auto mt-16 bg-gray-50 rounded-lg p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Aurora University Recreation Center</h3>
              <p className="text-gray-600 mb-4">
                Our state-of-the-art recreation center features an Olympic-sized swimming pool,
                indoor track, basketball courts, workout facilities, and more.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" className="border-aurora text-aurora hover:bg-aurora hover:text-white">
                  Hours & Information
                </Button>
                <Button className="bg-aurora hover:bg-aurora-dark">
                  Virtual Tour
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Recreation Center" 
                className="w-full h-52 object-cover rounded-md" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AthleticsAndWellness;
