
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const AdmissionsOverview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Admissions Overview</h2>
        
        <Tabs defaultValue="domestic" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="domestic">Domestic Students</TabsTrigger>
            <TabsTrigger value="international">International Students</TabsTrigger>
          </TabsList>
          
          <TabsContent value="domestic" className="space-y-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4">Domestic Student Admissions</h3>
                <p className="mb-4">
                  Aurora University welcomes applications from students across the United States who demonstrate 
                  academic promise and a commitment to personal growth. Our holistic admissions process takes into 
                  account your academic achievements, extracurricular involvement, and personal qualities.
                </p>
                
                <h4 className="text-xl font-medium mt-6 mb-3">General Requirements</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Completed application form</li>
                  <li>Official high school transcripts (3.0 GPA recommended)</li>
                  <li>SAT or ACT scores (optional for 2023-2024 admissions cycle)</li>
                  <li>Personal statement (500-650 words)</li>
                  <li>Two letters of recommendation</li>
                  <li>Application fee of $50 (fee waivers available)</li>
                </ul>
                
                <h4 className="text-xl font-medium mt-6 mb-3">Transfer Students</h4>
                <p className="mb-4">
                  Transfer students must provide official transcripts from all colleges previously attended 
                  and have a minimum cumulative GPA of 2.5. Transfer credit evaluations are conducted after admission.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="international" className="space-y-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4">International Student Admissions</h3>
                <p className="mb-4">
                  Aurora University is proud to welcome students from around the globe. Our diverse campus 
                  community is enriched by international perspectives and experiences.
                </p>
                
                <h4 className="text-xl font-medium mt-6 mb-3">International Requirements</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Completed international application form</li>
                  <li>Official secondary school records (translated to English if necessary)</li>
                  <li>Proof of English proficiency (TOEFL score of 79+ or IELTS score of 6.5+)</li>
                  <li>Financial documentation showing ability to pay for education</li>
                  <li>Copy of passport identification page</li>
                  <li>Personal statement (500-650 words)</li>
                  <li>Two letters of recommendation</li>
                  <li>Application fee of $75 (USD)</li>
                </ul>
                
                <h4 className="text-xl font-medium mt-6 mb-3">Visa Information</h4>
                <p className="mb-4">
                  After acceptance, our International Student Office will assist with I-20 forms and visa application 
                  guidance. International students must maintain full-time enrollment to maintain F-1 visa status.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AdmissionsOverview;
