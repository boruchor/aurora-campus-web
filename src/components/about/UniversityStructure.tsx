
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from '@/components/ui/card';

type School = {
  name: string;
  dean: string;
  departments: string[];
  description: string;
};

const schools: School[] = [
  {
    name: "College of Arts & Sciences",
    dean: "Dr. Samantha Chen",
    departments: [
      "Humanities",
      "Social Sciences",
      "Natural Sciences",
      "Mathematics",
      "Fine Arts"
    ],
    description: "Our largest and most diverse college, offering foundational education across multiple disciplines and specialized majors that cultivate critical thinking, creativity, and analytical skills."
  },
  {
    name: "School of Engineering",
    dean: "Dr. Marcus Reynolds",
    departments: [
      "Electrical & Computer Engineering",
      "Mechanical Engineering",
      "Civil & Environmental Engineering",
      "Aerospace Engineering",
      "Materials Science"
    ],
    description: "A cutting-edge hub for innovation and technical excellence, preparing students to solve complex challenges through rigorous technical training and hands-on project experience."
  },
  {
    name: "School of Business",
    dean: "Dr. Priya Narayan",
    departments: [
      "Management",
      "Finance",
      "Marketing",
      "Entrepreneurship",
      "International Business"
    ],
    description: "Developing future business leaders through a combination of theoretical knowledge, practical skills, and global perspectives on commerce and organizational leadership."
  },
  {
    name: "School of Medicine & Health Sciences",
    dean: "Dr. James Washington",
    departments: [
      "Medicine",
      "Nursing",
      "Public Health",
      "Biomedical Sciences",
      "Health Informatics"
    ],
    description: "Dedicated to advancing healthcare through innovative research, clinical excellence, and the education of compassionate healthcare providers committed to patient-centered care."
  },
  {
    name: "Graduate School",
    dean: "Dr. Elizabeth Moreno",
    departments: [
      "Doctoral Programs",
      "Master's Programs",
      "Professional Certificates",
      "Interdisciplinary Studies"
    ],
    description: "Offering advanced degrees and specialized training for those seeking to deepen their expertise, conduct original research, and become leaders in their respective fields."
  }
];

const UniversityStructure = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">University Structure</h2>
          <div className="w-20 h-1 bg-aurora mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Aurora University is organized into several colleges and schools, each dedicated to excellence in teaching, research, and service.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {schools.map((school, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl font-semibold hover:text-aurora">
                  {school.name}
                </AccordionTrigger>
                <AccordionContent>
                  <Card className="mb-4">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className="md:w-2/3">
                          <p className="text-gray-600 mb-4">{school.description}</p>
                          <div className="mb-4">
                            <span className="font-semibold">Dean:</span> {school.dean}
                          </div>
                          <h4 className="font-semibold mb-2">Departments:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {school.departments.map((dept, i) => (
                              <li key={i}>{dept}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="md:w-1/3">
                          <div className="bg-gray-100 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">Quick Links</h4>
                            <ul className="space-y-2">
                              <li>
                                <a href="#" className="text-aurora hover:underline">
                                  Programs
                                </a>
                              </li>
                              <li>
                                <a href="#" className="text-aurora hover:underline">
                                  Faculty
                                </a>
                              </li>
                              <li>
                                <a href="#" className="text-aurora hover:underline">
                                  Research
                                </a>
                              </li>
                              <li>
                                <a href="#" className="text-aurora hover:underline">
                                  News & Events
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="text-aurora hover:text-aurora-dark font-medium">
            View detailed organizational chart
          </a>
        </div>
      </div>
    </section>
  );
};

export default UniversityStructure;
