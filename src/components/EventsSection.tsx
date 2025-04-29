
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock } from 'lucide-react';

type Event = {
  id: number;
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  month: string;
  day: string;
};

const events: Event[] = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence in Healthcare",
    type: "Lecture",
    date: "May 5, 2025",
    time: "4:00 PM - 6:00 PM",
    location: "Thompson Hall Auditorium",
    month: "MAY",
    day: "5",
  },
  {
    id: 2,
    title: "Annual Aurora Innovation Conference",
    type: "Conference",
    date: "May 12-14, 2025",
    time: "All Day",
    location: "Aurora Conference Center",
    month: "MAY",
    day: "12-14",
  },
  {
    id: 3,
    title: "Spring Orchestra Concert",
    type: "Performance",
    date: "May 20, 2025",
    time: "7:30 PM - 9:30 PM",
    location: "Aurora Concert Hall",
    month: "MAY",
    day: "20",
  },
  {
    id: 4,
    title: "Graduate Research Symposium",
    type: "Symposium",
    date: "May 25, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Science Center",
    month: "MAY",
    day: "25",
  },
];

const EventsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Upcoming Events</h2>
            <div className="w-20 h-1 bg-aurora mb-4"></div>
            <p className="text-gray-600 max-w-2xl">
              Join us for lectures, performances, exhibitions, and other exciting events happening across campus.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button 
              variant="outline" 
              className="border-aurora text-aurora hover:bg-aurora hover:text-white"
            >
              View Full Calendar
              <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-date">
                <div className="text-sm font-medium">{event.month}</div>
                <div className="text-xl font-bold">{event.day}</div>
              </div>
              <div className="p-5">
                <div className="inline-block bg-gray-100 text-aurora-dark text-xs font-medium px-2.5 py-1 rounded mb-3">
                  {event.type}
                </div>
                <h3 className="text-lg font-bold mb-3 line-clamp-2 hover:text-aurora transition-colors">
                  <a href={`/events/${event.id}`}>{event.title}</a>
                </h3>
                <div className="flex items-start space-x-2 text-sm text-gray-600 mb-2">
                  <Clock className="h-4 w-4 mt-0.5" />
                  <span>{event.time}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <div>{event.location}</div>
                </div>
                <div className="mt-4">
                  <a 
                    href={`/events/${event.id}`} 
                    className="text-sm text-aurora font-medium hover:text-aurora-dark transition-colors inline-flex items-center"
                  >
                    Event details
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
