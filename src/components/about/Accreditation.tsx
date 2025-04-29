
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

type Accreditation = {
  organization: string;
  type: string;
  year: string;
  programs: string;
};

type Partner = {
  name: string;
  country: string;
  type: string;
  logo: string;
};

const accreditations: Accreditation[] = [
  {
    organization: "Higher Education Commission (HEC)",
    type: "Institutional",
    year: "2023-2028",
    programs: "All Programs"
  },
  {
    organization: "Association to Advance Collegiate Schools of Business (AACSB)",
    type: "Specialized",
    year: "2022-2027",
    programs: "Business Programs"
  },
  {
    organization: "Accreditation Board for Engineering and Technology (ABET)",
    type: "Specialized",
    year: "2021-2026",
    programs: "Engineering Programs"
  },
  {
    organization: "Commission on Collegiate Nursing Education (CCNE)",
    type: "Specialized",
    year: "2020-2025",
    programs: "Nursing Programs"
  },
  {
    organization: "American Psychological Association (APA)",
    type: "Specialized",
    year: "2019-2024",
    programs: "Psychology Programs"
  }
];

const partners: Partner[] = [
  {
    name: "University of Cambridge",
    country: "United Kingdom",
    type: "Research & Exchange",
    logo: "https://images.unsplash.com/photo-1590644356932-22f0723bd25e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    name: "ETH Zurich",
    country: "Switzerland",
    type: "Research & Exchange",
    logo: "https://images.unsplash.com/photo-1557425493-6f90ae4659fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    name: "University of Tokyo",
    country: "Japan",
    type: "Joint Programs",
    logo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    name: "Stanford University",
    country: "United States",
    type: "Research Collaboration",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    name: "Tsinghua University",
    country: "China",
    type: "Exchange Programs",
    logo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    name: "University of Cape Town",
    country: "South Africa",
    type: "Research & Exchange",
    logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
  }
];

const Accreditation = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Accreditation & Global Partnerships</h2>
          <div className="w-20 h-1 bg-aurora mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Aurora University maintains the highest standards of academic excellence through recognized accreditations and strategic global partnerships.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Accreditations</h3>
          <Card className="mb-12 shadow-md">
            <CardContent className="pt-6 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Accrediting Organization</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Period</TableHead>
                    <TableHead>Programs Covered</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {accreditations.map((accreditation, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{accreditation.organization}</TableCell>
                      <TableCell>{accreditation.type}</TableCell>
                      <TableCell>{accreditation.year}</TableCell>
                      <TableCell>{accreditation.programs}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-semibold mb-6">Global Partnerships</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{partner.name}</h4>
                      <p className="text-sm text-gray-600">{partner.country}</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 px-3 py-2 rounded text-sm inline-block">
                    {partner.type}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Aurora University continuously seeks new partnerships with leading institutions around the world.
            </p>
            <a href="#" className="text-aurora hover:text-aurora-dark font-medium">
              Learn more about our international initiatives
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accreditation;
