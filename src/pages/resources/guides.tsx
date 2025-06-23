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
      title: "Startup Guides & Operational Resources",
      description: "Access comprehensive, actionable guides to help you navigate the operational challenges of building and scaling a startup. From HR to finance to legal compliance.",
      keywords: "startup guides, operational resources, HR processes, financial forecasting, legal compliance, tech stack, startup operations, business scaling"
    },
    revalidate: 86400 // Revalidate once per day
  };
};

interface GuidesProps {
  title: string;
  description: string;
  keywords: string;
}

const Guides = ({ title, description, keywords }: GuidesProps) => {
  const guides = [
    {
      title: "Startup HR Essentials",
      description: "Essential HR processes and policies for early-stage startups.",
      category: "Human Resources",
      readTime: "15 min read",
    },
    {
      title: "Financial Forecasting for Startups",
      description: "A step-by-step guide to creating accurate financial forecasts.",
      category: "Finance",
      readTime: "20 min read",
    },
    {
      title: "Legal Checklist for New Ventures",
      description: "Ensure your startup has all the legal bases covered from day one.",
      category: "Legal",
      readTime: "12 min read",
    },
    {
      title: "Building a Scalable Tech Stack",
      description: "Choose the right tools and systems that grow with your business.",
      category: "Operations",
      readTime: "18 min read",
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
        <meta property="og:url" content="https://masarna.co/resources/guides" />
        <meta property="og:image" content="https://masarna.co/lovable-uploads/4c19cc81-9f30-4ff8-b639-79916ff68ecd.png" />
        <link rel="canonical" href="https://masarna.co/resources/guides" />
      </Head>
      
      <PageLayout 
        title={title} 
        description={description}
        keywords={keywords}
      >
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Startup Guides</h1>
            <p className="text-lg text-gray-700 mb-12">
              Comprehensive, actionable guides to help you navigate the operational challenges of building and scaling a startup.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {guides.map((guide, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-medium px-2 py-1 bg-masarna-teal/10 text-masarna-teal rounded-full">{guide.category}</span>
                    <span className="text-xs text-gray-500 ml-3">{guide.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{guide.title}</h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <Button variant="outline" className="text-masarna-teal border-masarna-teal">
                    Read Guide
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <CTASection 
          heading="Need custom guidance?"
          description="Our team can provide personalized advice and solutions tailored to your specific operational challenges."
          buttonText="Request Custom Guidance"
        />
      </PageLayout>
    </>
  );
};

export default Guides;