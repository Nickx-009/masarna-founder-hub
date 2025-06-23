import React from 'react';
import { GetStaticProps } from 'next';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Pricing",
      description: "Simple, transparent pricing for operational excellence services",
      keywords: "operations as a service pricing, startup pricing, fractional services cost, operational support pricing, transparent pricing, startup services cost"
    },
    revalidate: 86400 // Revalidate once per day
  };
};

interface PricingProps {
  title: string;
  description: string;
  keywords: string;
}

const Pricing = ({ title, description, keywords }: PricingProps) => {
  const pricingPlans = [
    {
      name: 'Startup',
      price: '$2,500',
      frequency: 'per month',
      description: 'Perfect for early-stage startups needing operational support.',
      features: [
        '10 hours of operational support per week',
        'Dedicated operations specialist',
        'Basic process documentation',
        'Monthly strategy sessions',
        'Essential tool recommendations'
      ],
      buttonText: 'Get Started',
      featured: false
    },
    {
      name: 'Scaleup',
      price: '$5,000',
      frequency: 'per month',
      description: 'Ideal for growing startups ready to scale their operations.',
      features: [
        '20 hours of operational support per week',
        'Dedicated operations manager',
        'Comprehensive process documentation',
        'Bi-weekly strategy sessions',
        'Full tech stack implementation',
        'Growth metrics dashboard'
      ],
      buttonText: 'Most Popular',
      featured: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      frequency: 'tailored solutions',
      description: 'Full operational support for established companies.',
      features: [
        'Full-time operational support',
        'Fractional leadership team',
        'Complete operational framework',
        'Weekly strategic planning',
        'Cross-functional integration',
        'Performance optimization',
        'Dedicated account manager'
      ],
      buttonText: 'Contact Us',
      featured: false
    }
  ];

  return (
    <PageLayout 
      title={title} 
      description={description}
      keywords={keywords}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Choose the plan that matches your business needs and growth stage. All plans include access to our team of operational experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden shadow-lg border transition-all ${
                plan.featured 
                  ? 'border-masarna-orange scale-105 md:scale-110 z-10 bg-white' 
                  : 'border-gray-200 bg-white hover:shadow-xl'
              }`}
            >
              <div 
                className={`p-6 ${
                  plan.featured ? 'bg-masarna-orange text-white' : 'bg-gray-50 text-masarna-orange'
                }`}
              >
                <h3 className="text-xl font-bold">{plan.name}</h3>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500"> {plan.frequency}</span>
                </div>
                
                <p className="text-gray-700 mb-6">{plan.description}</p>
                
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg 
                        className={`h-5 w-5 mr-2 mt-0.5 ${plan.featured ? 'text-masarna-orange' : 'text-gray-500'}`} 
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-6 ${
                    plan.featured 
                      ? 'bg-masarna-orange hover:bg-masarna-orange/90 text-white' 
                      : 'bg-white text-masarna-orange border border-masarna-orange hover:bg-masarna-orange/10'
                  }`}
                  onClick={() => window.location.href = '#contact'}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a custom solution?</h2>
          <p className="text-lg text-gray-700 mb-8">
            We understand that every business is unique. Contact us to discuss how we can tailor our services to meet your specific operational needs.
          </p>
          <Button 
            className="bg-masarna-orange hover:bg-masarna-orange/90 text-white px-8 py-6 text-lg rounded-lg"
            onClick={() => window.location.href = '#contact'}
          >
            Schedule a Consultation
          </Button>
        </div>
        
        <div className="mt-20 p-8 md:p-12 bg-gray-50 rounded-xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-masarna-orange">Can I change plans later?</h3>
              <p className="text-gray-700">Yes, you can upgrade or downgrade your plan at any time as your business needs change.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-masarna-orange">Is there a minimum contract period?</h3>
              <p className="text-gray-700">We typically recommend a 3-month minimum engagement to see meaningful results, but we can discuss your specific situation.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-masarna-orange">How quickly can you start?</h3>
              <p className="text-gray-700">We can typically begin work within 1-2 weeks of finalizing our agreement.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-masarna-orange">Do you offer any discounts?</h3>
              <p className="text-gray-700">We offer special rates for startups that commit to quarterly or annual contracts.</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Pricing;