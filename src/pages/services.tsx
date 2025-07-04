import React from 'react';
import { GetStaticProps } from 'next';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Services",
      description: "Comprehensive Operations-as-a-Service solutions for startups and growing businesses",
      keywords: "operations as a service, startup services, HR services, finance services, compliance services, strategy services, growth services, operations management"
    },
    revalidate: 86400 // Revalidate once per day
  };
};

interface ServicesProps {
  title: string;
  description: string;
  keywords: string;
}

const Services = ({ title, description, keywords }: ServicesProps) => {
  const serviceCategories = [
    {
      title: 'Human Resources',
      description: 'Comprehensive HR solutions for startups and growing companies.',
      link: '/services/human-resources',
    },
    {
      title: 'Finance & Operations',
      description: 'Financial management and operational excellence support.',
      link: '/services/finance',
    },
    {
      title: 'Legal & Compliance',
      description: 'Navigate legal requirements and ensure compliance.',
      link: '/services/compliance',
    },
    {
      title: 'Strategy & Planning',
      description: 'Strategic planning and roadmap development.',
      link: '/services/strategy',
    },
    {
      title: 'Growth & Scaling',
      description: 'Accelerate growth and scale your business efficiently.',
      link: '/services/growth',
    },
    {
      title: 'Operations Management',
      description: 'Streamline operations and improve efficiency.',
      link: '/services/operations',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Masarna provides comprehensive Operations-as-a-Service solutions tailored 
            to the unique needs of early-stage and growth-stage startups.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-3 text-masarna-orange">{service.title}</h3>
              <p className="text-gray-700 mb-5">{service.description}</p>
              <Link href={service.link}>
                <Button variant="outline" className="border-masarna-orange text-masarna-orange hover:bg-masarna-orange/10">
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      <CTASection 
        heading="Find your operational advantage"
        description="Let our experts analyze your current operational challenges and recommend tailored services to help you focus on growth and innovation."
        buttonText="Request a Service Consultation"
      />
    </PageLayout>
  );
};

export default Services;