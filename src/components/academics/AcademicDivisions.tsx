
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const AcademicDivisions = () => {
  return (
    <section className="py-16 bg-white" id="divisions">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Academic Divisions</h2>
        
        <Tabs defaultValue="undergraduate" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="undergraduate" className="text-sm md:text-base">Undergraduate</TabsTrigger>
            <TabsTrigger value="graduate" className="text-sm md:text-base">Graduate</TabsTrigger>
            <TabsTrigger value="online" className="text-sm md:text-base">Online Learning</TabsTrigger>
          </TabsList>
          
          <TabsContent value="undergraduate" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center mb-2">
                  <BookOpen className="h-5 w-5 mr-2 text-aurora" />
                  <CardTitle>Undergraduate Programs</CardTitle>
                </div>
                <CardDescription>
                  Bachelor's degrees and undergraduate certificates across diverse disciplines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Program Features</h4>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>120 credit hours over 4 years (typical)</li>
                      <li>Hands-on learning experiences</li>
                      <li>Research opportunities for undergraduates</li>
                      <li>Study abroad options in 45+ countries</li>
                      <li>Internship and co-op programs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Key Offerings</h4>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>85+ major programs</li>
                      <li>120+ minor options</li>
                      <li>Interdisciplinary studies</li>
                      <li>Honors College opportunities</li>
                      <li>First-year experience program</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-aurora hover:bg-aurora-dark">
                  Explore Undergraduate Programs
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="graduate" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center mb-2">
                  <GraduationCap className="h-5 w-5 mr-2 text-aurora" />
                  <CardTitle>Graduate Programs</CardTitle>
                </div>
                <CardDescription>
                  Master's, doctoral programs and advanced certificates for specialized expertise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Program Features</h4>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Flexible scheduling options</li>
                      <li>World-class faculty mentorship</li>
                      <li>Research and teaching assistantships</li>
                      <li>Professional development workshops</li>
                      <li>Industry partnerships and networking</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Key Offerings</h4>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>65+ master's degree programs</li>
                      <li>40+ doctoral programs</li>
                      <li>Professional certificates</li>
                      <li>Cross-disciplinary research opportunities</li>
                      <li>Global research initiatives</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-aurora hover:bg-aurora-dark">
                  Explore Graduate Programs
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="online" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Globe className="h-5 w-5 mr-2 text-aurora" />
                  <CardTitle>Online Learning</CardTitle>
                </div>
                <CardDescription>
                  Flexible degree programs and courses designed for remote learning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Program Features</h4>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Asynchronous learning options</li>
                      <li>Interactive digital learning environments</li>
                      <li>24/7 technical support</li>
                      <li>Same faculty as on-campus programs</li>
                      <li>Virtual office hours and study groups</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Key Offerings</h4>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>25+ fully online degree programs</li>
                      <li>Hundreds of online courses</li>
                      <li>Professional development certificates</li>
                      <li>Self-paced learning options</li>
                      <li>Global student community</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-aurora hover:bg-aurora-dark">
                  Explore Online Programs
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AcademicDivisions;
