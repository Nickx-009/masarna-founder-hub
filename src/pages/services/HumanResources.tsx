
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HumanResources = () => {
  return (
    <PageLayout title="Human Resources Services" description="Complete HR solutions for startups">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Human Resources Services</h1>
          <p className="text-lg text-gray-700 mb-8">
            Our comprehensive HR solutions help startups build and maintain a thriving workforce, from talent 
            acquisition to employee development and compliance.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-masarna-teal">Our HR Services Include:</h2>
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
                <span className="text-gray-700">Recruitment and talent acquisition strategies</span>
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
                <span className="text-gray-700">Employee onboarding and development programs</span>
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
                <span className="text-gray-700">Compliance and regulatory guidance</span>
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
                <span className="text-gray-700">Benefits administration and optimization</span>
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
                <span className="text-gray-700">Culture development and maintenance</span>
              </li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Why Choose Masarna for HR</h2>
          <p className="text-gray-700 mb-6">
            At Masarna, we understand that people are your most valuable asset. Our HR services 
            are designed to help you attract, develop, and retain top talent while building a 
            company culture that drives success.
          </p>
          
          <p className="text-gray-700 mb-6">
            Our team of HR experts brings years of experience working with startups and 
            growing businesses across various industries. We provide both strategic guidance 
            and hands-on support to help you build scalable HR systems that grow with your company.
          </p>
          
          <div className="bg-masarna-teal/10 p-8 rounded-lg mt-12">
            <h3 className="text-xl font-semibold mb-4">Ready to optimize your HR operations?</h3>
            <p className="text-gray-700 mb-6">
              Schedule a free consultation to discuss your specific HR needs and how Masarna can help.
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

export default HumanResources;
