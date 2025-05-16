
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, ClipboardCheck, FileCheck, CheckCircle } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Compliance = () => {
  // Set up scroll animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    revealElements.forEach(el => observer.observe(el));
    
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <PageLayout title="Compliance Services" description="Streamline your compliance operations with Masarna">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Background grid pattern */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-grid-pattern-dynamic"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 reveal">
              Compliance Services
            </h1>
            
            <h2 className="text-xl md:text-2xl text-masarna-orange font-medium mb-6 reveal">
              Simplify Compliance, Strengthen Your Foundation
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 reveal">
              At Masarna, we understand that navigating the complex landscape of regulatory compliance is essential for your organization's success. Our comprehensive compliance services are designed to manage the intricacies of legal requirements, allowing you to focus on your core business activities.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 reveal">
              <Button 
                className="bg-masarna-orange hover:bg-masarna-orange/90 text-white"
                onClick={() => window.location.href = '#contact'}
              >
                Book a Free Consultation
              </Button>
              <Link to="/services">
                <Button variant="outline" className="border-masarna-orange text-masarna-orange hover:bg-masarna-orange/10">
                  Explore All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative shape */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'
        }}></div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 reveal">
              At Masarna, we recognize that effective compliance management is crucial for your organization's success.
              We handle the complexities so you can focus on what matters most—growing your business.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Comprehensive Compliance Management */}
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow reveal">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-blue-50">
                  <ShieldCheck className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Comprehensive Compliance Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 text-center">
                  We handle the full spectrum of compliance tasks to ensure your operations remain uninterrupted.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-orange" />
                    <span className="text-gray-700">State & Federal Filings: Managing franchise taxes, state registrations, annual reports, and ongoing compliance requirements.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-orange" />
                    <span className="text-gray-700">Agency Liaison: Handling communications with state and federal agencies, including audits and regulatory updates.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-orange" />
                    <span className="text-gray-700">Document Control: Maintaining an organized system for compliance tracking and instant document retrieval.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Risk Mitigation & Regulatory Adherence */}
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow reveal">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-blue-50">
                  <FileCheck className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Risk Mitigation & Regulatory Adherence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 text-center">
                  Stay ahead of potential pitfalls with our proactive approach.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-orange" />
                    <span className="text-gray-700">Regulatory Monitoring: Keeping abreast of changes in laws and regulations to ensure continuous compliance.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-orange" />
                    <span className="text-gray-700">Policy Development: Crafting and updating internal policies to reflect current legal standards.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-orange" />
                    <span className="text-gray-700">Training & Awareness: Educating your team on compliance best practices to foster a culture of accountability.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Strategic Compliance Planning */}
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow reveal">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-blue-50">
                  <ClipboardCheck className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Strategic Compliance Planning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 text-center">
                  Align your compliance strategy with your business objectives.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-orange" />
                    <span className="text-gray-700">Compliance Audits: Conducting thorough reviews to identify and address potential compliance gaps.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-orange" />
                    <span className="text-gray-700">Reporting & Documentation: Preparing necessary reports and maintaining records to demonstrate compliance.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-orange" />
                    <span className="text-gray-700">Continuous Improvement: Regularly assessing and enhancing compliance processes for optimal efficiency.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Documentation & Reporting */}
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow reveal">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-blue-50">
                  <FileText className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Documentation & Reporting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 text-center">
                  Maintain accurate records and stay prepared for any regulatory scrutiny.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-orange" />
                    <span className="text-gray-700">Record Management: Organizing and maintaining all necessary compliance documentation.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-orange" />
                    <span className="text-gray-700">Compliance Reporting: Creating comprehensive reports for management and stakeholders.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-orange" />
                    <span className="text-gray-700">Audit Support: Providing assistance and documentation during regulatory audits.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Why Choose Masarna */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center reveal">Why Choose Masarna for Compliance</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
              <div className="text-center">
                <div className="inline-block p-3 bg-masarna-orange/10 rounded-full mb-4">
                  <ShieldCheck className="h-8 w-8 text-masarna-orange" />
                </div>
                <h3 className="text-lg font-medium mb-2">Expertise</h3>
                <p className="text-gray-700">
                  Our team brings deep knowledge of regulatory frameworks across various industries.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-3 bg-masarna-orange/10 rounded-full mb-4">
                  <ClipboardCheck className="h-8 w-8 text-masarna-orange" />
                </div>
                <h3 className="text-lg font-medium mb-2">Efficiency</h3>
                <p className="text-gray-700">
                  We streamline compliance processes to reduce administrative burdens.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-3 bg-masarna-orange/10 rounded-full mb-4">
                  <FileCheck className="h-8 w-8 text-masarna-orange" />
                </div>
                <h3 className="text-lg font-medium mb-2">Reliability</h3>
                <p className="text-gray-700">
                  With Masarna, you can trust that your compliance obligations are managed diligently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <div className="bg-masarna-orange/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-2xl font-bold mb-4">Ready to optimize your compliance operations?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Let Masarna be your trusted partner in compliance management, so you can concentrate on driving your business forward.
            </p>
            <Button 
              className="bg-masarna-orange hover:bg-masarna-orange/90 text-white text-lg px-8 py-6"
              onClick={() => window.location.href = '#contact'}
            >
              Schedule Your Free Compliance Assessment
            </Button>
          </div>
        </div>
      </div>
      
      {/* Use the shared CTA Section component */}
      <CTASection />
    </PageLayout>
  );
};

export default Compliance;
