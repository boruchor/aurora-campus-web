
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const scholarshipTypes = [
  {
    title: "Academic Merit Scholarships",
    amount: "$5,000 - $25,000 per year",
    description: "Based on high school GPA and standardized test scores",
    eligibility: "Incoming freshmen with GPA of 3.0 or higher",
    deadline: "Priority deadline: February 1",
    renewable: "Yes, with 3.0 GPA maintenance"
  },
  {
    title: "Leadership Scholarships",
    amount: "$3,000 - $10,000 per year",
    description: "Recognizes student leadership and community engagement",
    eligibility: "Demonstrated leadership in school and community",
    deadline: "March 15",
    renewable: "Yes, with continued leadership involvement"
  },
  {
    title: "Diversity Excellence Scholarships",
    amount: "$5,000 - $15,000 per year",
    description: "Supports students who enhance campus diversity",
    eligibility: "Commitment to promoting diversity and inclusion",
    deadline: "February 15",
    renewable: "Yes, with good academic standing"
  },
  {
    title: "Aurora Alumni Legacy Scholarships",
    amount: "$3,500 per year",
    description: "For children and grandchildren of Aurora alumni",
    eligibility: "Verified family relationship with Aurora graduate",
    deadline: "April 1",
    renewable: "Yes, for up to 4 years with good standing"
  }
];

const ScholarshipsAndAid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Scholarships & Financial Aid</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Aurora University is committed to making your education affordable through 
          a variety of scholarships, grants, and financial aid options.
        </p>
        
        {/* Scholarships */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Institutional Scholarships</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {scholarshipTypes.map((scholarship, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-aurora">{scholarship.title}</CardTitle>
                  <CardDescription className="text-lg font-bold">{scholarship.amount}</CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="mb-3">{scholarship.description}</p>
                  <ul className="text-sm space-y-2">
                    <li><span className="font-semibold">Eligibility:</span> {scholarship.eligibility}</li>
                    <li><span className="font-semibold">Deadline:</span> {scholarship.deadline}</li>
                    <li><span className="font-semibold">Renewable:</span> {scholarship.renewable}</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-aurora text-aurora hover:bg-aurora hover:text-white">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Financial Aid FAQ */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-6">Financial Aid FAQ</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I apply for financial aid?</AccordionTrigger>
              <AccordionContent>
                Start by completing the Free Application for Federal Student Aid (FAFSA) using school 
                code 001634. The FAFSA opens on October 1 each year, and we recommend submitting by 
                February 1 for priority consideration. After submitting, our financial aid office will 
                work with you to complete any additional requirements.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>What types of financial aid are available?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Aurora University offers a comprehensive financial aid program including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Merit-based scholarships</li>
                  <li>Need-based grants</li>
                  <li>Federal work-study opportunities</li>
                  <li>Federal student loans</li>
                  <li>Parent PLUS loans</li>
                  <li>Private scholarships</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>When will I receive my financial aid package?</AccordionTrigger>
              <AccordionContent>
                Financial aid packages are typically sent within 2-3 weeks after receiving all required 
                documents. Admitted students who complete the FAFSA by the priority deadline will receive 
                their packages beginning in March. You'll receive an email when your financial aid package 
                is ready to view in your student portal.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Can international students receive financial aid?</AccordionTrigger>
              <AccordionContent>
                International students are eligible for Aurora University's merit-based scholarships 
                and some institutional grants. While international students cannot receive U.S. federal 
                financial aid, we encourage you to explore scholarships from your home country and 
                international organizations.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>How do I maintain my scholarships and financial aid?</AccordionTrigger>
              <AccordionContent>
                Most scholarships require maintaining a minimum GPA (typically 2.75-3.0) and full-time 
                enrollment status. Some scholarships have additional requirements such as community 
                service or participation in specific programs. Each award's requirements are detailed 
                in your financial aid offer. Federal aid recipients must maintain satisfactory academic 
                progress as defined in the university catalog.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        {/* Net Price Calculator */}
        <div className="bg-white p-8 rounded-lg shadow-sm max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-3">Estimate Your Costs</h3>
          <p className="mb-6">
            Use our Net Price Calculator to estimate your out-of-pocket costs after scholarships and financial aid.
          </p>
          <Button className="bg-aurora hover:bg-aurora-dark">
            Launch Net Price Calculator
          </Button>
          <div className="mt-8 text-left border-t pt-6">
            <h4 className="font-semibold mb-2">Financial Aid Office</h4>
            <p className="text-sm">
              Phone: (555) 123-4567<br />
              Email: finaid@aurora.edu<br />
              Hours: Monday-Friday, 8:30 AM - 5:00 PM<br />
              Location: University Center, Room 120
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipsAndAid;
