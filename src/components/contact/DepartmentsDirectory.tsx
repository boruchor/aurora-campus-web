
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mail, Phone } from 'lucide-react';

// Department data
const departments = [
  {
    id: "admissions",
    name: "Admissions Office",
    description: "Information about applying to Aurora University, campus tours, and enrollment.",
    contact: {
      email: "admissions@aurora-university.edu",
      phone: "(555) 123-4567",
      location: "Administration Building, First Floor"
    }
  },
  {
    id: "registrar",
    name: "Registrar's Office",
    description: "Course registration, transcripts, graduation, and academic records.",
    contact: {
      email: "registrar@aurora-university.edu",
      phone: "(555) 123-4568",
      location: "Administration Building, Room 102"
    }
  },
  {
    id: "financial-aid",
    name: "Financial Aid & Scholarships",
    description: "Information about financial aid, grants, loans, and scholarship opportunities.",
    contact: {
      email: "finaid@aurora-university.edu",
      phone: "(555) 123-4569",
      location: "Administration Building, Room 205"
    }
  },
  {
    id: "academic-affairs",
    name: "Academic Affairs",
    description: "Curriculum, academic policies, faculty resources, and program development.",
    contact: {
      email: "academics@aurora-university.edu",
      phone: "(555) 123-4570",
      location: "Administration Building, Room 305"
    }
  },
  {
    id: "student-services",
    name: "Student Services",
    description: "Student activities, organizations, counseling, and career services.",
    contact: {
      email: "studentservices@aurora-university.edu",
      phone: "(555) 123-4571",
      location: "Student Center, Second Floor"
    }
  },
  {
    id: "housing",
    name: "Housing & Residential Life",
    description: "On-campus housing options, room assignments, and residential programming.",
    contact: {
      email: "housing@aurora-university.edu",
      phone: "(555) 123-4572",
      location: "Student Center, Room 150"
    }
  },
  {
    id: "athletics",
    name: "Athletics Department",
    description: "Varsity sports, intramural activities, and athletic facilities.",
    contact: {
      email: "athletics@aurora-university.edu",
      phone: "(555) 123-4573",
      location: "Athletic Center, Room 100"
    }
  },
  {
    id: "it-services",
    name: "IT Services",
    description: "Technology support, wifi, accounts, and campus computing resources.",
    contact: {
      email: "it-helpdesk@aurora-university.edu",
      phone: "(555) 123-4574",
      location: "Library Building, Lower Level"
    }
  }
];

const DepartmentsDirectory = () => {
  return (
    <Accordion type="single" collapsible className="max-w-4xl mx-auto">
      {departments.map(dept => (
        <AccordionItem key={dept.id} value={dept.id}>
          <AccordionTrigger className="text-lg hover:text-aurora px-4">{dept.name}</AccordionTrigger>
          <AccordionContent className="px-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <p className="text-muted-foreground mb-4">{dept.description}</p>
                <p className="text-sm"><strong>Location:</strong> {dept.contact.location}</p>
              </div>
              <div className="space-y-3 md:border-l md:pl-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-aurora" />
                  <span className="text-sm break-all">{dept.contact.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-aurora" />
                  <span className="text-sm">{dept.contact.phone}</span>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default DepartmentsDirectory;
