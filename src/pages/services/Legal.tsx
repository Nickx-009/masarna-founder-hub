
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Legal = () => {
  return (
    <PageLayout title="Legal Services" description="Legal and compliance services for startups">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Legal & Compliance Services</h1>
          <p className="text-lg text-gray-700 mb-8">
            Our legal and compliance services help startups navigate complex regulatory 
            requirements and build strong legal foundations for sustainable growth.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-masarna-teal">Our Legal Services Include:</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg 
                  className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal" 
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Contract review and management</span>
              </li>
              <li className="flex items-start">
                <svg 
                  className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal" 
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Regulatory compliance</span>
              </li>
              <li className="flex items-start">
                <svg 
                  className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal" 
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">IP protection strategies</span>
              </li>
              <li className="flex items-start">
                <svg 
                  className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal" 
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Privacy and data protection</span>
              </li>
              <li className="flex items-start">
                <svg 
                  className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal" 
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Corporate governance</span>
              </li>
              <li className="flex items-start">
                <svg 
                  className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal" 
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Risk assessment and management</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-masarna-teal/10 p-8 rounded-lg mt-12">
            <h3 className="text-xl font-semibold mb-4">Need legal support?</h3>
            <p className="text-gray-700 mb-6">
              Schedule a free consultation to discuss your specific legal needs and how Masarna can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-masarna-teal hover:bg-masarna-teal/90 text-white"
                onClick={() => window.location.href = '#contact'}
              >
                Schedule Consultation
              </Button>
              <Link to="/services">
                <Button variant="outline" className="border-masarna-teal text-masarna-teal hover:bg-masarna-teal/10">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Legal;
