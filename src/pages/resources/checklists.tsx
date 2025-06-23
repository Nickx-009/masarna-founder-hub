import React from 'react';
import { GetStaticProps } from 'next';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import Head from 'next/head';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Startup Operational Checklists & Frameworks",
      description: "Ensure you cover all important aspects of your startup operations with our comprehensive, expert-curated checklists for launch, growth, operations, and compliance.",
      keywords: "startup checklists, operational frameworks, business launch checklist, growth checklist, compliance checklist, process documentation, vendor selection, tech stack audit"
    },
    revalidate: 86400 // Revalidate once per day
  };
};

interface ChecklistsProps {
  title: string;
  description: string;
  keywords: string;
}

const Checklists = ({ title, description, keywords }: ChecklistsProps) => {
  const checklistCategories = [
    {
      category: "Startup Launch",
      checklists: [
        { title: "Pre-Launch Business Checklist", items: "25 items" },
        { title: "Legal Setup Checklist", items: "18 items" },
        { title: "Initial Team Building Checklist", items: "15 items" },
      ]
    },
    {
      category: "Growth & Scaling",
      checklists: [
        { title: "Fundraising Preparation Checklist", items: "20 items" },
        { title: "Team Scaling Checklist", items: "22 items" },
        { title: "International Expansion Checklist", items: "30 items" },
      ]
    },
    {
      category: "Operational Excellence",
      checklists: [
        { title: "Process Documentation Checklist", items: "16 items" },
        { title: "Vendor Selection Checklist", items: "14 items" },
        { title: "Tech Stack Audit Checklist", items: "24 items" },
      ]
    },
    {
      category: "Compliance & Risk",
      checklists: [
        { title: "Data Privacy Compliance Checklist", items: "28 items" },
        { title: "Financial Controls Checklist", items: "19 items" },
        { title: "Business Continuity Checklist", items: "21 items" },
      ]
    },
  ];

  return (
    <>
      <Head>
        <title>{title} | Masarna</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://masarna.co/resources/checklists" />
        <meta property="og:image" content="https://masarna.co/lovable-uploads/4c19cc81-9f30-4ff8-b639-79916ff68ecd.png" />
        <link rel="canonical" href="https://masarna.co/resources/checklists" />
      </Head>
      
      <PageLayout 
        title={title} 
        description={description}
        keywords={keywords}
      >
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Checklists</h1>
            <p className="text-lg text-gray-700 mb-12">
              Ensure you cover all important aspects of your operations with our comprehensive, expert-curated checklists.
            </p>
            
            <div className="space-y-12 mb-16">
              {checklistCategories.map((category, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-semibold mb-6 text-masarna-teal">{category.category} Checklists</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {category.checklists.map((checklist, cIndex) => (
                      <div key={cIndex} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-medium mb-2 text-gray-800">{checklist.title}</h3>
                        <p className="text-sm text-gray-500 mb-4">{checklist.items}</p>
                        <Button variant="outline" size="sm" className="text-masarna-teal border-masarna-teal">
                          View Checklist
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
          heading="Need a tailored checklist?"
          description="Our operational experts can create custom checklists specifically designed for your unique business challenges."
          buttonText="Request Custom Checklist"
        />
      </PageLayout>
    </>
  );
};

export default Checklists;