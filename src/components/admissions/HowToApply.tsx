
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ClipboardList, Calendar, BookOpen, CheckSquare } from 'lucide-react';

const applicationSteps = [
  {
    step: 1,
    title: "Complete Your Application",
    description: "Fill out the Aurora University online application with your personal information, academic background, and interests.",
    icon: ClipboardList,
    cta: "Start Application"
  },
  {
    step: 2,
    title: "Submit Required Documents",
    description: "Upload or send your transcripts, test scores, letters of recommendation, and personal statement.",
    icon: BookOpen,
    cta: "Document Checklist"
  },
  {
    step: 3,
    title: "Application Review",
    description: "Our admissions committee will carefully review your complete application package.",
    icon: CheckSquare,
    cta: "Check Status"
  },
  {
    step: 4,
    title: "Decision and Enrollment",
    description: "Receive your admission decision and complete enrollment steps if accepted.",
    icon: Calendar,
    cta: "Important Dates"
  }
];

const HowToApply = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">How to Apply</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Follow these simple steps to apply to Aurora University. Our admissions team is here to 
          help you through every stage of the process.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {applicationSteps.map((step) => (
            <Card key={step.step} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="bg-aurora text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <step.icon className="h-6 w-6 text-aurora" />
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-sm text-gray-600">{step.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-aurora text-aurora hover:bg-aurora hover:text-white">
                  {step.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Application deadlines for the upcoming academic year:
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            <div className="bg-white rounded-md p-4 shadow-sm border border-gray-200">
              <p className="font-semibold text-aurora">Fall Semester</p>
              <p>Early Action: November 1</p>
              <p>Regular Decision: February 1</p>
            </div>
            <div className="bg-white rounded-md p-4 shadow-sm border border-gray-200">
              <p className="font-semibold text-aurora">Spring Semester</p>
              <p>Priority Date: October 15</p>
              <p>Final Deadline: December 1</p>
            </div>
            <div className="bg-white rounded-md p-4 shadow-sm border border-gray-200">
              <p className="font-semibold text-aurora">Transfer Students</p>
              <p>Fall: July 1</p>
              <p>Spring: December 1</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToApply;
