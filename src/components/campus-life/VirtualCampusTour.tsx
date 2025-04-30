
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from 'lucide-react';

const tourLocations = [
  {
    id: 1,
    name: "Main Quad",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "The heart of campus where students gather to study, socialize, and participate in events.",
    location: "Central Campus"
  },
  {
    id: 2,
    name: "University Library",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Our state-of-the-art library offers extensive resources and comfortable study spaces.",
    location: "East Campus"
  },
  {
    id: 3,
    name: "Student Center",
    image: "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "A hub for student activities, dining options, and recreational facilities.",
    location: "South Campus"
  },
  {
    id: 4,
    name: "Innovation Center",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Cutting-edge facilities for research, entrepreneurship, and collaborative projects.",
    location: "North Campus"
  },
  {
    id: 5,
    name: "Performing Arts Center",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Home to our theater, music, and dance programs with performance spaces.",
    location: "West Campus"
  }
];

const VirtualCampusTour = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Virtual Campus Tour</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Explore Aurora University's beautiful campus from anywhere in the world. 
          Take a virtual tour of our facilities, spaces, and landmarks.
        </p>

        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {tourLocations.map((location) => (
                <CarouselItem key={location.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className="overflow-hidden">
                      <AspectRatio ratio={16 / 9}>
                        <img 
                          src={location.image} 
                          alt={location.name}
                          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                      </AspectRatio>
                    </div>
                    <CardContent className="p-4">
                      <CardTitle className="text-xl mb-2">{location.name}</CardTitle>
                      <div className="flex items-center mb-3 text-aurora-light">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{location.location}</span>
                      </div>
                      <CardDescription className="text-gray-600">
                        {location.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" className="w-full border-aurora text-aurora hover:bg-aurora hover:text-white">
                        View 360° Tour
                      </Button>
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

          <div className="mt-12 text-center">
            <Button className="bg-aurora hover:bg-aurora-dark">
              Schedule an In-Person Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualCampusTour;
