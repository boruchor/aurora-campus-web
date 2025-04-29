
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";

type NewsItem = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
};

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Aurora University Researchers Make Breakthrough in Clean Energy Technology",
    excerpt: "Research team develops new method to increase solar cell efficiency by 25%, promising more affordable renewable energy.",
    category: "Research",
    date: "April 25, 2025",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "University Launches New Global Health Initiative",
    excerpt: "New program will connect students with international partners to address critical health challenges worldwide.",
    category: "Academics",
    date: "April 20, 2025",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "Aurora Debate Team Wins National Championship",
    excerpt: "Students showcase exceptional critical thinking and persuasive skills to bring home top honors against elite competition.",
    category: "Student Achievement",
    date: "April 15, 2025",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
];

const FeaturedNewsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured News</h2>
            <div className="w-20 h-1 bg-aurora mb-4"></div>
            <p className="text-gray-600 max-w-2xl">
              Discover the latest stories, research breakthroughs, and events from our vibrant university community.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button 
              variant="outline" 
              className="border-aurora text-aurora hover:bg-aurora hover:text-white"
            >
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={item.id} className="feature-card">
              <a href={`/news/${item.id}`} className="block">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-aurora-dark text-white text-sm py-1 px-3 rounded">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-aurora transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="text-aurora font-medium inline-flex items-center">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedNewsSection;
