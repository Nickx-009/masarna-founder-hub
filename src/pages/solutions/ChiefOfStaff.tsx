
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const ChiefOfStaff = () => {
  return (
    <PageLayout title="Chief of Staff" description="Fractional Chief of Staff services for startups">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Fractional Chief of Staff</h1>
          <p className="text-lg text-gray-700 mb-8">
            Extend your executive capabilities with a seasoned Chief of Staff who can drive strategic initiatives, 
            coordinate cross-functional projects, and free up your time to focus on vision and growth.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-masarna-orange">How a Chief of Staff Can Help:</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <CheckCircle className="h-3 w-3 text-masarna-orange" />
                </span>
                <span className="text-gray-700">Drive strategic initiatives and special projects</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <CheckCircle className="h-3 w-3 text-masarna-orange" />
                </span>
                <span className="text-gray-700">Coordinate cross-functional teams and activities</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <CheckCircle className="h-3 w-3 text-masarna-orange" />
                </span>
                <span className="text-gray-700">Implement efficient operational systems and processes</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <CheckCircle className="h-3 w-3 text-masarna-orange" />
                </span>
                <span className="text-gray-700">Manage executive communications and prioritization</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <CheckCircle className="h-3 w-3 text-masarna-orange" />
                </span>
                <span className="text-gray-700">Optimize decision-making processes</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <CheckCircle className="h-3 w-3 text-masarna-orange" />
                </span>
                <span className="text-gray-700">Act as a thought partner to the CEO/founder</span>
              </li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">When You Need a Chief of Staff</h2>
          <p className="text-gray-700 mb-6">
            A fractional Chief of Staff is particularly valuable when:
          </p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                <CheckCircle className="h-3 w-3 text-masarna-orange" />
              </span>
              <span className="text-gray-700">You're spending too much time on operational details rather than strategic vision</span>
            </li>
            <li className="flex items-start">
              <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                <CheckCircle className="h-3 w-3 text-masarna-orange" />
              </span>
              <span className="text-gray-700">Your company is growing rapidly and systems are struggling to keep pace</span>
            </li>
            <li className="flex items-start">
              <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                <CheckCircle className="h-3 w-3 text-masarna-orange" />
              </span>
              <span className="text-gray-700">You need strong project management across multiple departments</span>
            </li>
            <li className="flex items-start">
              <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                <CheckCircle className="h-3 w-3 text-masarna-orange" />
              </span>
              <span className="text-gray-700">You can't justify a full-time executive but need leadership support</span>
            </li>
          </ul>
          
          <div className="bg-masarna-orange/10 p-8 rounded-lg mt-12">
            <h3 className="text-xl font-semibold mb-4">Ready to multiply your impact?</h3>
            <p className="text-gray-700 mb-6">
              Let's discuss how a fractional Chief of Staff can help you optimize your time and accelerate growth.
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

export default ChiefOfStaff;
