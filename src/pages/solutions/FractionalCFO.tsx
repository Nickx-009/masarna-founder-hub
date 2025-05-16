
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const FractionalCFO = () => {
  return (
    <PageLayout title="Fractional CFO" description="Expert financial leadership without the full-time cost">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Fractional CFO Services</h1>
          <p className="text-lg text-gray-700 mb-8">
            Get access to experienced financial leadership without the cost of a full-time CFO. 
            Our Fractional CFO service provides strategic financial guidance tailored to your 
            startup's specific needs and growth stage.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-masarna-orange">How Our Fractional CFOs Help:</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <CheckCircle className="h-3 w-3 text-masarna-orange" />
                </span>
                <span className="text-gray-700">Strategic financial planning and forecasting</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <CheckCircle className="h-3 w-3 text-masarna-orange" />
                </span>
                <span className="text-gray-700">Cash flow management and optimization</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <CheckCircle className="h-3 w-3 text-masarna-orange" />
                </span>
                <span className="text-gray-700">Fundraising strategy and preparation</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <CheckCircle className="h-3 w-3 text-masarna-orange" />
                </span>
                <span className="text-gray-700">Financial systems implementation and oversight</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <CheckCircle className="h-3 w-3 text-masarna-orange" />
                </span>
                <span className="text-gray-700">Board and investor reporting</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <CheckCircle className="h-3 w-3 text-masarna-orange" />
                </span>
                <span className="text-gray-700">Financial strategy for growth and scaling</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-masarna-orange/10 p-8 rounded-lg mt-12">
            <h3 className="text-xl font-semibold mb-4">Ready to strengthen your financial leadership?</h3>
            <p className="text-gray-700 mb-6">
              Schedule a free consultation to discuss how our Fractional CFO service can help your startup.
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

export default FractionalCFO;
