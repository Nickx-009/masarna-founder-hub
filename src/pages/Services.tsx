
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
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
    <PageLayout title="Services" description="Operational excellence services for ambitious founders">
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
              <Link to={service.link}>
                <Button variant="outline" className="border-masarna-orange text-masarna-orange hover:bg-masarna-orange/10">
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-masarna-orange/10 p-8 md:p-12 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to elevate your operations?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Get a free assessment of your current operations and discover how 
            we can help you focus on growth.
          </p>
          <Button 
            className="bg-masarna-orange hover:bg-masarna-orange/90 text-white px-8 py-6 text-lg rounded-lg"
            onClick={() => window.location.href = '#contact'}
          >
            Book Your Free Assessment
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Services;
