
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const OperationsManager = () => {
  return (
    <PageLayout title="Operations Manager" description="Day-to-day operational leadership for your startup">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Operations Manager Services</h1>
          <p className="text-lg text-gray-700 mb-8">
            Get hands-on operational leadership to streamline your day-to-day business processes. 
            Our Operations Manager service helps you build efficient systems and workflows to support 
            your growing business.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-masarna-orange">How Our Operations Managers Help:</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <CheckCircle className="h-3 w-3 text-masarna-orange" />
                </span>
                <span className="text-gray-700">Process design and optimization</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <CheckCircle className="h-3 w-3 text-masarna-orange" />
                </span>
                <span className="text-gray-700">Workflow implementation and management</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <CheckCircle className="h-3 w-3 text-masarna-orange" />
                </span>
                <span className="text-gray-700">SOP development and documentation</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <CheckCircle className="h-3 w-3 text-masarna-orange" />
                </span>
                <span className="text-gray-700">Team coordination and resource allocation</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <CheckCircle className="h-3 w-3 text-masarna-orange" />
                </span>
                <span className="text-gray-700">Vendor and partner management</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <CheckCircle className="h-3 w-3 text-masarna-orange" />
                </span>
                <span className="text-gray-700">Operational metrics tracking and improvement</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-masarna-orange/10 p-8 rounded-lg mt-12">
            <h3 className="text-xl font-semibold mb-4">Ready to streamline your operations?</h3>
            <p className="text-gray-700 mb-6">
              Schedule a free consultation to discuss how our Operations Manager service can help your startup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-masarna-orange hover:bg-masarna-orange/90 text-white"
                onClick={() => window.location.href = '#contact'}
              >
                Schedule Consultation
              </Button>
              <Link to="/solutions">
                <Button variant="outline" className="border-masarna-orange text-masarna-orange hover:bg-masarna-orange/10">
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

export default OperationsManager;
