
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

const MissionVision = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Vision</h2>
          <div className="w-20 h-1 bg-aurora mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Aurora University is guided by clear principles and aspirations that shape our academic community.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="mission" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="vision">Vision</TabsTrigger>
            </TabsList>
            <TabsContent value="mission">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                  <p className="text-lg mb-4">
                    Aurora University's mission is to empower students through transformative education that integrates theoretical knowledge with practical experience, fostering critical thinking, ethical leadership, and a commitment to service.
                  </p>
                  <p className="text-lg mb-4">
                    We are dedicated to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>Providing accessible, high-quality education that prepares students for meaningful careers and lifelong learning</li>
                    <li>Advancing knowledge through innovative research and creative endeavors</li>
                    <li>Engaging with local and global communities to address pressing challenges</li>
                    <li>Fostering an inclusive environment that celebrates diversity and promotes equity</li>
                    <li>Developing ethical leaders who act with integrity and compassion</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="vision">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                  <p className="text-lg mb-6">
                    Aurora University aspires to be a globally recognized institution known for:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold mb-3 text-aurora-dark">Academic Excellence</h4>
                      <p>Pioneering educational approaches that integrate cutting-edge research with innovative teaching methodologies.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold mb-3 text-aurora-dark">Research Impact</h4>
                      <p>Conducting transformative research that addresses global challenges and expands the boundaries of human knowledge.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold mb-3 text-aurora-dark">Global Engagement</h4>
                      <p>Creating an interconnected community of scholars and practitioners who collaborate across disciplines and borders.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold mb-3 text-aurora-dark">Inclusive Excellence</h4>
                      <p>Building a diverse and equitable community where all members can thrive and contribute their unique perspectives.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
