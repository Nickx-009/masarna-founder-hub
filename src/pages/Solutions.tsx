
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Solutions = () => {
  const solutionCategories = [
    {
      title: 'Chief of Staff',
      description: 'Strategic leadership support for founders and executives.',
      link: '/solutions/chief-of-staff',
    },
    {
      title: 'Fractional CFO',
      description: 'Expert financial leadership without the full-time cost.',
      link: '/solutions/fractional-cfo',
    },
    {
      title: 'Head of HR',
      description: 'Seasoned HR leadership to build and maintain your culture.',
      link: '/solutions/head-of-hr',
    },
    {
      title: 'Fractional Recruiter',
      description: 'Talent acquisition expertise to build your dream team.',
      link: '/solutions/fractional-recruiter',
    },
    {
      title: 'Operations Manager',
      description: 'Day-to-day operational leadership and process improvement.',
      link: '/solutions/operations-manager',
    },
    {
      title: 'Project Manager',
      description: 'Focused project leadership to deliver results on time.',
      link: '/solutions/project-manager',
    },
  ];

  return (
    <PageLayout title="Solutions" description="Leadership solutions for ambitious founders">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Leadership Solutions</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Access fractional leadership and specialized expertise to accelerate your business growth 
            without the overhead of full-time executives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionCategories.map((solution, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-3 text-masarna-orange">{solution.title}</h3>
              <p className="text-gray-700 mb-5">{solution.description}</p>
              <Link to={solution.link}>
                <Button variant="outline" className="border-masarna-orange text-masarna-orange hover:bg-masarna-orange/10">
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-masarna-orange/10 p-8 md:p-12 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need leadership support?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Let us match you with the perfect fractional leader for your business needs and growth stage.
          </p>
          <Button 
            className="bg-masarna-orange hover:bg-masarna-orange/90 text-white px-8 py-6 text-lg rounded-lg"
            onClick={() => window.location.href = '#contact'}
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Solutions;
