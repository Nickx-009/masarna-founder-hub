import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import Head from 'next/head';

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

  // SEO metadata
  const pageTitle = "Startup Templates & Operational Resources";
  const pageDescription = "Save time and ensure best practices with our curated collection of ready-to-use templates for HR, finance, operations, and legal needs.";
  const pageKeywords = "startup templates, operational resources, HR templates, financial models, SOP templates, legal documents, business operations, document templates";

  return (
    <>
      <Head>
        <title>{pageTitle} | Masarna</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://masarna.co/resources/templates" />
        <meta property="og:image" content="https://masarna.co/lovable-uploads/4c19cc81-9f30-4ff8-b639-79916ff68ecd.png" />
        <link rel="canonical" href="https://masarna.co/resources/templates" />
      </Head>
      
      <PageLayout 
        title={pageTitle} 
        description={pageDescription}
        keywords={pageKeywords}
      >
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
    </>
  );
};

export default Templates;