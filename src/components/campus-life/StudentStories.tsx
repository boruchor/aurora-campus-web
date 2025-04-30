
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Quote } from 'lucide-react';

const stories = [
  {
    id: 1,
    name: "Emma Chen",
    major: "Computer Science",
    year: "Senior",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    quote: "The supportive community and incredible research opportunities at Aurora have allowed me to grow both academically and personally. I've found mentors and friends who will be with me for life.",
    involvement: "Robotics Club, Student Ambassador"
  },
  {
    id: 2,
    name: "James Rodriguez",
    major: "Environmental Science",
    year: "Junior",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    quote: "Aurora University's commitment to sustainability drew me here, but the incredible faculty and hands-on learning experiences are what made me truly fall in love with this place.",
    involvement: "Environmental Action Club, Campus Tour Guide"
  },
  {
    id: 3,
    name: "Olivia Washington",
    major: "Business Administration",
    year: "Sophomore",
    image: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    quote: "From day one, I've felt welcomed at Aurora. The entrepreneurship programs have given me the confidence and skills to launch my own business while still in school.",
    involvement: "Student Government, Business Leaders Association"
  },
  {
    id: 4,
    name: "Michael Patel",
    major: "Neuroscience",
    year: "Senior",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    quote: "The research opportunities at Aurora are unmatched. Working alongside renowned professors in the lab as an undergraduate has prepared me incredibly well for medical school.",
    involvement: "Pre-Med Society, Intramural Basketball"
  },
  {
    id: 5,
    name: "Sophia Kim",
    major: "International Relations",
    year: "Junior",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    quote: "Studying abroad through Aurora's international programs changed my perspective on the world. The global connections I've made here will last a lifetime.",
    involvement: "Model UN, Global Cultures Club"
  }
];

const StudentStories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Student Stories</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Hear directly from our students about their Aurora University experience 
          and how it has shaped their academic journey and personal growth.
        </p>
        
        <Carousel className="max-w-6xl mx-auto">
          <CarouselContent>
            {stories.map((story) => (
              <CarouselItem key={story.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <CardContent className="pt-6 px-6 pb-0 flex-grow">
                    <Quote className="h-8 w-8 text-aurora opacity-30 mb-2" />
                    <p className="text-gray-600 italic mb-6">
                      "{story.quote}"
                    </p>
                  </CardContent>
                  <CardFooter className="flex items-center p-6 bg-gray-50 rounded-b-lg">
                    <Avatar className="h-14 w-14 mr-4 border-2 border-aurora">
                      <AvatarImage src={story.image} alt={story.name} />
                      <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-lg">{story.name}</h4>
                      <p className="text-sm text-gray-600">{story.major}, {story.year}</p>
                      <p className="text-xs text-aurora mt-1">{story.involvement}</p>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex justify-center mt-8">
            <div className="flex items-center gap-2">
              <CarouselPrevious className="position-relative left-0 right-auto" />
              <CarouselNext className="position-relative right-0 left-auto" />
            </div>
          </div>
        </Carousel>
        
        <div className="text-center mt-10">
          <a href="#" className="inline-block text-aurora font-semibold hover:text-aurora-dark transition-colors">
            Read More Student Stories →
          </a>
        </div>
      </div>
    </section>
  );
};

export default StudentStories;
