
import React, { useEffect, useState } from 'react';

type TimelineEvent = {
  year: number;
  title: string;
  description: string;
  image?: string;
};

const timelineEvents: TimelineEvent[] = [
  {
    year: 1887,
    title: "Founding",
    description: "Aurora College is established as a small liberal arts institution dedicated to providing accessible education.",
    image: "https://images.unsplash.com/photo-1554475659-1e7a89486690?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    year: 1925,
    title: "Campus Expansion",
    description: "The university acquires its iconic Main Hall and expands its campus to accommodate growing enrollment.",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    year: 1953,
    title: "Research Focus",
    description: "The institution establishes its first dedicated research centers focused on scientific advancement.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    year: 1984,
    title: "University Status",
    description: "Aurora College is officially granted university status, reflecting its expanded academic offerings and research capabilities.",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    year: 2001,
    title: "Global Partnerships",
    description: "Aurora University establishes its first international campuses and forms partnerships with universities around the world.",
    image: "https://images.unsplash.com/photo-1527891751199-7225231a68dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    year: 2019,
    title: "Innovation Hub",
    description: "The Aurora Innovation Center opens, focused on interdisciplinary research and entrepreneurship.",
    image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const HistoryTimeline = () => {
  const [activeEvent, setActiveEvent] = useState<number>(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById('history-timeline');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="history-timeline" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our History</h2>
          <div className="w-20 h-1 bg-aurora mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            For over a century, Aurora University has been at the forefront of academic excellence and innovation.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Bar */}
          <div className="hidden md:block absolute top-0 left-1/2 w-1 h-full bg-gray-300 transform -translate-x-1/2"></div>
          
          {/* Timeline Events */}
          <div className="space-y-24 relative">
            {timelineEvents.map((event, index) => (
              <div 
                key={event.year}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                  <div 
                    className={`w-6 h-6 rounded-full border-4 ${
                      activeEvent === index 
                        ? 'bg-aurora border-aurora-dark' 
                        : 'bg-white border-gray-300'
                    } transition-all duration-300`}
                    onMouseEnter={() => setActiveEvent(index)}
                  ></div>
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 p-6 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div 
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    onMouseEnter={() => setActiveEvent(index)}
                  >
                    {event.image && (
                      <img 
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-aurora text-white text-sm font-semibold rounded-full mb-2">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Spacer for layout */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
