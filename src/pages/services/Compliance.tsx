
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, ClipboardCheck, FileCheck, CheckCircle } from 'lucide-react';
import { initScrollAnimations } from '@/utils/scrollAnimations';

const Compliance = () => {
  useEffect(() => {
    initScrollAnimations({ threshold: 0.2, staggerDelay: true });
  }, []);

  return (
    <PageLayout title="Compliance Services" description="Streamline your compliance operations with Masarna">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Compliance Services</h1>
          <p className="text-xl text-masarna-teal font-semibold mb-8">
            Simplify Compliance, Strengthen Your Foundation
          </p>
          <p className="text-lg text-gray-700">
            At Masarna, we understand that navigating the complex landscape of regulatory compliance is essential for your organization's success. Our comprehensive compliance services are designed to manage the intricacies of legal requirements, allowing you to focus on your core business activities.
          </p>
        </div>
        
        {/* Service Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Comprehensive Compliance Management */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 reveal">
            <div className="w-12 h-12 bg-masarna-teal/10 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="h-6 w-6 text-masarna-teal" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-masarna-teal">Comprehensive Compliance Management</h3>
            <p className="text-gray-700 mb-4">
              We handle the full spectrum of compliance tasks to ensure your operations remain uninterrupted:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal flex-shrink-0" />
                <span className="text-gray-700">State & Federal Filings: Managing franchise taxes, state registrations, annual reports, and ongoing compliance requirements.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal flex-shrink-0" />
                <span className="text-gray-700">Agency Liaison: Handling communications with state and federal agencies, including audits and regulatory updates.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal flex-shrink-0" />
                <span className="text-gray-700">Document Control: Maintaining an organized system for compliance tracking and instant document retrieval.</span>
              </li>
            </ul>
          </div>

          {/* Risk Mitigation & Regulatory Adherence */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 reveal">
            <div className="w-12 h-12 bg-masarna-teal/10 rounded-full flex items-center justify-center mb-4">
              <FileCheck className="h-6 w-6 text-masarna-teal" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-masarna-teal">Risk Mitigation & Regulatory Adherence</h3>
            <p className="text-gray-700 mb-4">
              Stay ahead of potential pitfalls with our proactive approach:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal flex-shrink-0" />
                <span className="text-gray-700">Regulatory Monitoring: Keeping abreast of changes in laws and regulations to ensure continuous compliance.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal flex-shrink-0" />
                <span className="text-gray-700">Policy Development: Crafting and updating internal policies to reflect current legal standards.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal flex-shrink-0" />
                <span className="text-gray-700">Training & Awareness: Educating your team on compliance best practices to foster a culture of accountability.</span>
              </li>
            </ul>
          </div>

          {/* Strategic Compliance Planning */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 reveal">
            <div className="w-12 h-12 bg-masarna-teal/10 rounded-full flex items-center justify-center mb-4">
              <ClipboardCheck className="h-6 w-6 text-masarna-teal" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-masarna-teal">Strategic Compliance Planning</h3>
            <p className="text-gray-700 mb-4">
              Align your compliance strategy with your business objectives:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal flex-shrink-0" />
                <span className="text-gray-700">Compliance Audits: Conducting thorough reviews to identify and address potential compliance gaps.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal flex-shrink-0" />
                <span className="text-gray-700">Reporting & Documentation: Preparing necessary reports and maintaining records to demonstrate compliance.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal flex-shrink-0" />
                <span className="text-gray-700">Continuous Improvement: Regularly assessing and enhancing compliance processes for optimal efficiency.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Choose Masarna */}
        <div className="bg-masarna-teal/10 p-8 rounded-lg mb-12 reveal">
          <h3 className="text-2xl font-semibold mb-6">Why Choose Masarna?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4">
                <FileText className="h-5 w-5 text-masarna-teal" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Expertise</h4>
                <p className="text-gray-700">Our team possesses deep knowledge of regulatory frameworks across various industries.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4">
                <ShieldCheck className="h-5 w-5 text-masarna-teal" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Efficiency</h4>
                <p className="text-gray-700">We streamline compliance processes to reduce administrative burdens.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4">
                <ClipboardCheck className="h-5 w-5 text-masarna-teal" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Reliability</h4>
                <p className="text-gray-700">With Masarna, you can trust that your compliance obligations are managed diligently.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 text-center reveal">
          <h3 className="text-2xl font-semibold mb-4">Let Masarna be your trusted partner in compliance management</h3>
          <p className="text-lg text-gray-700 mb-6">
            So you can concentrate on driving your business forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-masarna-teal hover:bg-masarna-teal/90 text-white"
              onClick={() => window.location.href = '#contact'}
            >
              Schedule a Consultation
            </Button>
            <Link to="/services">
              <Button variant="outline" className="border-masarna-teal text-masarna-teal hover:bg-masarna-teal/10">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Compliance;
