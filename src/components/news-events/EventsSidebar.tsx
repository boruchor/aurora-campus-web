
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { events } from '@/data/events';

const EventsSidebar = () => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex items-center mb-6">
        <Calendar className="h-5 w-5 text-aurora mr-2" />
        <h2 className="text-xl font-bold">Upcoming Events</h2>
      </div>
      
      <div className="space-y-5">
        {events.map((event) => (
          <div key={event.id}>
            <div className="flex gap-4">
              <div className="bg-aurora-light/20 text-aurora-dark rounded-md p-2 text-center min-w-[60px]">
                <div className="text-xs font-medium">{event.month}</div>
                <div className="text-lg font-bold">{event.day}</div>
              </div>
              
              <div>
                <h3 className="font-semibold text-sm line-clamp-2 hover:text-aurora transition-colors">
                  <a href={`/events/${event.id}`}>{event.title}</a>
                </h3>
                <div className="flex items-center text-xs text-gray-600 mt-1">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{event.time}</span>
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  {event.location}
                </div>
              </div>
            </div>
            <Separator className="my-4" />
          </div>
        ))}
      </div>
      
      <Button 
        variant="outline" 
        className="w-full mt-4 border-aurora text-aurora hover:bg-aurora hover:text-white"
      >
        View All Events
        <Calendar className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default EventsSidebar;
