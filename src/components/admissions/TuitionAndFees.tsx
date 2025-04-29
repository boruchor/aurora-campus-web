
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TuitionAndFees = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Tuition & Fees</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Aurora University is committed to making quality education accessible. Our transparent 
          cost structure helps you plan for your educational investment.
        </p>
        
        <div className="space-y-12 max-w-4xl mx-auto">
          {/* Undergraduate Tuition */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Undergraduate Tuition (2023-2024)</h3>
            <div className="overflow-x-auto border rounded-md shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-bold">Item</TableHead>
                    <TableHead className="font-bold">Per Semester</TableHead>
                    <TableHead className="font-bold">Academic Year</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Full-Time Tuition (12-18 credits)</TableCell>
                    <TableCell>$16,500</TableCell>
                    <TableCell>$33,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Part-Time Tuition (per credit hour)</TableCell>
                    <TableCell>$950</TableCell>
                    <TableCell>Varies</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Room (standard double)</TableCell>
                    <TableCell>$4,200</TableCell>
                    <TableCell>$8,400</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Meal Plan (standard)</TableCell>
                    <TableCell>$3,250</TableCell>
                    <TableCell>$6,500</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Student Fees</TableCell>
                    <TableCell>$850</TableCell>
                    <TableCell>$1,700</TableCell>
                  </TableRow>
                  <TableRow className="bg-gray-50 font-bold">
                    <TableCell>Total (Full-Time, On-Campus)</TableCell>
                    <TableCell>$24,800</TableCell>
                    <TableCell>$49,600</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          
          {/* Graduate Tuition */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Graduate Tuition (2023-2024)</h3>
            <div className="overflow-x-auto border rounded-md shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-bold">Program</TableHead>
                    <TableHead className="font-bold">Cost Per Credit Hour</TableHead>
                    <TableHead className="font-bold">Average Total Program Cost</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Master of Business Administration (MBA)</TableCell>
                    <TableCell>$850</TableCell>
                    <TableCell>$30,600 (36 credits)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Master of Education (M.Ed.)</TableCell>
                    <TableCell>$725</TableCell>
                    <TableCell>$26,100 (36 credits)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Master of Science in Nursing (MSN)</TableCell>
                    <TableCell>$890</TableCell>
                    <TableCell>$32,040 (36 credits)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Doctor of Education (Ed.D.)</TableCell>
                    <TableCell>$975</TableCell>
                    <TableCell>$58,500 (60 credits)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          
          {/* Additional Fees */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Additional Fees</h3>
            <div className="overflow-x-auto border rounded-md shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-bold">Fee</TableHead>
                    <TableHead className="font-bold">Amount</TableHead>
                    <TableHead className="font-bold">Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Application Fee</TableCell>
                    <TableCell>$50 (Undergraduate)<br />$60 (Graduate)</TableCell>
                    <TableCell>Non-refundable, fee waivers available</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Enrollment Deposit</TableCell>
                    <TableCell>$200</TableCell>
                    <TableCell>Applied to first semester tuition</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Technology Fee</TableCell>
                    <TableCell>$350 per semester</TableCell>
                    <TableCell>All students</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Graduation Fee</TableCell>
                    <TableCell>$150</TableCell>
                    <TableCell>Due semester of graduation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Course Materials Fee</TableCell>
                    <TableCell>Varies by course</TableCell>
                    <TableCell>Applied to specific courses with lab/material requirements</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-gray-50 p-6 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-3">Payment Options</h3>
          <p className="mb-4">
            Aurora University offers several payment options to help manage your educational expenses, 
            including a monthly payment plan with no interest charges.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Full payment at the beginning of each semester</li>
            <li>Monthly payment plan (4 or 5 payments per semester)</li>
            <li>Employer reimbursement deferred payment option</li>
            <li>Online payment portal for credit card and e-check payments</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TuitionAndFees;
