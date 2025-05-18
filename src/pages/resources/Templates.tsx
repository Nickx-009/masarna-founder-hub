import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CTASection from '@/components/CTASection';

const Templates = () => {
  const templateCategories = [
    {
      category: "Human Resources",
      templates: [
        { title: "Employee Onboarding Checklist", format: "PDF & Editable", },
        { title: "Performance Review Template", format: "Google Doc", },
        { title: "Job Description Framework", format: "Word & PDF", },
      ]
    },
    {
      category: "Finance",
      templates: [
        { title: "Startup Financial Model", format: "Excel & Google Sheets", },
        { title: "Cash Flow Forecast Template", format: "Excel", },
        { title: "Investor Update Template", format: "PowerPoint", },
      ]
    },
    {
      category: "Operations",
      templates: [
        { title: "SOP Documentation Template", format: "Word & Google Doc", },
        { title: "Project Plan Framework", format: "Excel & PDF", },
        { title: "Vendor Evaluation Matrix", format: "Excel", },
      ]
    },
    {
      category: "Legal",
      templates: [
        { title: "Contractor Agreement", format: "PDF & Word", },
        { title: "Privacy Policy Generator", format: "Web Tool", },
        { title: "IP Protection Checklist", format: "PDF", },
      ]
    },
  ];

  return (
    <PageLayout title="Templates" description="Ready-to-use templates for startup operations">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Templates</h1>
          <p className="text-lg text-gray-700 mb-12">
            Save time and ensure best practices with our curated collection of ready-to-use templates for various operational needs.
          </p>
          
          <div className="space-y-12 mb-16">
            {templateCategories.map((category, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold mb-6 text-masarna-teal">{category.category} Templates</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.templates.map((template, tIndex) => (
                    <div key={tIndex} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-medium mb-2 text-gray-800">{template.title}</h3>
                      <p className="text-sm text-gray-500 mb-4">Format: {template.format}</p>
                      <Button variant="outline" size="sm" className="text-masarna-teal border-masarna-teal hover:bg-masarna-teal/10">
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <CTASection 
        heading="Need a custom template?"
        description="Our team can create tailored templates specifically designed for your unique operational needs."
        buttonText="Request Custom Template"
      />
    </PageLayout>
  );
};

export default Templates;
