
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, Utensils, Coffee, Home } from "lucide-react";

const residenceHalls = [
  {
    name: "Aurora Hall",
    type: "First-Year",
    description: "Modern residence hall designed specifically for first-year students with communal spaces for building community.",
    amenities: ["Single & Double Rooms", "Community Bathrooms", "Study Lounges", "Game Room", "Laundry Facilities"],
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "Horizon Suites",
    type: "Upper-class",
    description: "Suite-style accommodations for upperclassmen featuring private bathrooms and common living areas.",
    amenities: ["4-Person Suites", "Private Bathrooms", "Kitchenette", "Air Conditioning", "Elevator Access"],
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "University Apartments",
    type: "Graduate",
    description: "Independent apartment-style living for graduate students and upperclassmen.",
    amenities: ["1-2 Bedroom Options", "Full Kitchen", "Private Bathroom", "Living Room", "On-site Parking"],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

const diningOptions = [
  {
    name: "Aurora Main Dining Hall",
    type: "All-You-Can-Eat",
    description: "Our main dining facility featuring multiple stations with diverse food options prepared fresh daily.",
    offerings: ["International Cuisine", "Vegetarian & Vegan", "Allergen-Free Station", "Made-to-Order Grill"],
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "The Campus Café",
    type: "à la carte",
    description: "Casual café offering grab-and-go options, coffee, and snacks throughout the day.",
    offerings: ["Specialty Coffee", "Sandwiches", "Pastries", "Smoothies & Juices"],
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "Student Center Food Court",
    type: "Food Court",
    description: "Multiple food vendors in one convenient location at the heart of campus.",
    offerings: ["Pizza", "Burgers", "Sushi", "Salad Bar", "Mexican Grill"],
    image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

const HousingAndDining = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Housing & Dining</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Discover comfortable living spaces and delicious dining options that make Aurora University feel like home.
        </p>
        
        <Tabs defaultValue="housing" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="housing" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              <span>Campus Housing</span>
            </TabsTrigger>
            <TabsTrigger value="dining" className="flex items-center gap-2">
              <Utensils className="h-4 w-4" />
              <span>Dining Options</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Housing Tab */}
          <TabsContent value="housing">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {residenceHalls.map((hall, index) => (
                <Card key={index} className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={hall.image} 
                      alt={hall.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-aurora-light/10 text-aurora-dark border-none">
                      {hall.type} Housing
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2">{hall.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{hall.description}</p>
                    
                    <h4 className="font-medium text-sm mb-2 text-gray-700">Amenities:</h4>
                    <ul className="text-sm text-gray-600 mb-4">
                      {hall.amenities.map((amenity, i) => (
                        <li key={i} className="flex items-center mb-1">
                          <Home className="h-3 w-3 mr-2 text-aurora" />
                          {amenity}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full border-aurora text-aurora hover:bg-aurora hover:text-white mt-2">
                      View Floor Plans
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Dining Tab */}
          <TabsContent value="dining">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {diningOptions.map((option, index) => (
                <Card key={index} className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={option.image} 
                      alt={option.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-aurora-light/10 text-aurora-dark border-none">
                      {option.type}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2">{option.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{option.description}</p>
                    
                    <h4 className="font-medium text-sm mb-2 text-gray-700">Featured Options:</h4>
                    <ul className="text-sm text-gray-600 mb-4">
                      {option.offerings.map((offering, i) => (
                        <li key={i} className="flex items-center mb-1">
                          {offering.includes("Coffee") ? (
                            <Coffee className="h-3 w-3 mr-2 text-aurora" />
                          ) : (
                            <Utensils className="h-3 w-3 mr-2 text-aurora" />
                          )}
                          {offering}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full border-aurora text-aurora hover:bg-aurora hover:text-white mt-2">
                      View Menu
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Learn more about our housing options and meal plans
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" className="bg-aurora hover:bg-aurora-dark">
              Housing Application
            </Button>
            <Button variant="outline" className="border-aurora text-aurora hover:bg-aurora hover:text-white">
              Dining Plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HousingAndDining;
