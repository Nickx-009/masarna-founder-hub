
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "How TechStart Scaled Their HR Operations",
      description: "Learn how this SaaS startup optimized their HR processes while growing from 10 to 100 employees.",
      industry: "SaaS",
      results: "5x growth, 40% reduction in HR costs"
    },
    {
      title: "Financial Transformation at HealthBridge",
      description: "How a healthcare tech company restructured their financial operations to prepare for Series B.",
      industry: "HealthTech",
      results: "Successfully raised $20M, 30% margin improvement"
    },
    {
      title: "GreenEco's Operational Efficiency Journey",
      description: "How this sustainability startup streamlined operations to handle 3x customer growth.",
      industry: "CleanTech",
      results: "300% customer growth, 25% cost reduction"
    },
    {
      title: "Compliance Mastery at FinTech Innovator",
      description: "How a financial technology startup navigated complex regulatory requirements while scaling globally.",
      industry: "FinTech",
      results: "Expanded to 12 countries, zero compliance issues"
    },
  ];

  return (
    <PageLayout title="Case Studies" description="Real-world examples of operational excellence">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
          <p className="text-lg text-gray-700 mb-12">
            Explore real-world examples of how startups like yours have achieved operational excellence with Masarna's support.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <span className="text-xs font-medium px-2 py-1 bg-masarna-teal/10 text-masarna-teal rounded-full">{study.industry}</span>
                  <span className="text-xs text-green-600 ml-3 font-medium">{study.results}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <Button variant="outline" className="text-masarna-teal border-masarna-teal hover:bg-masarna-teal/10">
                  Read Case Study
                </Button>
              </div>
            ))}
          </div>
          
          <div className="bg-masarna-teal/10 p-8 md:p-12 rounded-xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Could your success story be next?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's discuss how Masarna can help you achieve similar results for your startup's operations.
            </p>
            <Button 
              className="bg-masarna-teal hover:bg-masarna-teal/90 text-white"
              onClick={() => window.location.href = '#contact'}
            >
              Schedule a Free Assessment
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CaseStudies;
