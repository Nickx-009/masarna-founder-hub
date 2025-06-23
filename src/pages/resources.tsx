import React from 'react';
import { GetStaticProps } from 'next';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Resources",
      description: "Knowledge resources and tools for ambitious founders and startup operators",
      keywords: "startup resources, operational tools, business templates, startup guides, case studies, calculators, checklists, webinars, podcast, newsletter"
    },
    revalidate: 86400 // Revalidate once per day
  };
};

interface ResourcesProps {
  title: string;
  description: string;
  keywords: string;
}

const Resources = ({ title, description, keywords }: ResourcesProps) => {
  const resourceCategories = [
    {
      title: 'Blog',
      description: 'Insights and expertise from our team of operational experts.',
      link: '/resources/blog',
    },
    {
      title: 'Startup Guides',
      description: 'Step-by-step guides to navigate key operational challenges.',
      link: '/resources/guides',
    },
    {
      title: 'Case Studies',
      description: 'Real-world examples of operational excellence in action.',
      link: '/resources/case-studies',
    },
    {
      title: 'Templates',
      description: 'Ready-to-use templates for various operational needs.',
      link: '/resources/templates',
    },
    {
      title: 'Calculators',
      description: 'Tools to help you make data-driven decisions.',
      link: '/resources/calculators',
    },
    {
      title: 'Checklists',
      description: 'Ensure you cover all bases with our comprehensive checklists.',
      link: '/resources/checklists',
    },
    {
      title: 'Webinars',
      description: 'Educational sessions from industry experts and leaders.',
      link: '/resources/webinars',
    },
    {
      title: 'Podcast',
      description: 'Conversations with founders and operational leaders.',
      link: '/resources/podcast',
    },
    {
      title: 'Newsletter',
      description: 'Stay updated with the latest insights and resources.',
      link: '/resources/newsletter',
    },
  ];

  return (
    <PageLayout 
      title={title} 
      description={description}
      keywords={keywords}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Knowledge Resources</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Access a comprehensive library of resources to help you build, scale, and optimize your business operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourceCategories.map((resource, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-3 text-masarna-orange">{resource.title}</h3>
              <p className="text-gray-700 mb-5">{resource.description}</p>
              <Link href={resource.link}>
                <Button variant="outline" className="border-masarna-orange text-masarna-orange hover:bg-masarna-orange/10">
                  Explore
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      <CTASection 
        heading="Need specialized operational knowledge?"
        description="Whether you're facing a unique challenge or exploring a new opportunity, our team can create custom resources tailored to your specific situation."
        buttonText="Request Custom Content"
      />
    </PageLayout>
  );
};

export default Resources;