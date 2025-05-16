
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeadOfHR = () => {
  return (
    <PageLayout title="Head of HR" description="Seasoned HR leadership for your growing team">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Head of HR Services</h1>
          <p className="text-lg text-gray-700 mb-8">
            Build and maintain a thriving company culture with our experienced HR leadership. 
            Our Head of HR service provides strategic guidance on people operations without 
            the cost of a full-time executive.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-masarna-teal">How Our Head of HR Services Help:</h2>
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
                <span className="text-gray-700">HR strategy development and implementation</span>
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
                <span className="text-gray-700">Talent acquisition and retention planning</span>
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
                <span className="text-gray-700">Culture development and employee engagement</span>
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
                <span className="text-gray-700">Performance management systems</span>
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
                <span className="text-gray-700">Compliance and policy development</span>
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
                <span className="text-gray-700">Benefits optimization and administration</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-masarna-teal/10 p-8 rounded-lg mt-12">
            <h3 className="text-xl font-semibold mb-4">Ready to elevate your HR leadership?</h3>
            <p className="text-gray-700 mb-6">
              Schedule a free consultation to discuss how our Head of HR service can help your startup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-masarna-teal hover:bg-masarna-teal/90 text-white"
                onClick={() => window.location.href = '#contact'}
              >
                Schedule Consultation
              </Button>
              <Link to="/solutions">
                <Button variant="outline" className="border-masarna-teal text-masarna-teal hover:bg-masarna-teal/10">
                  View All Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HeadOfHR;
