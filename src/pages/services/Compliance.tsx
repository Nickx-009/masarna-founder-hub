import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, ClipboardCheck, FileCheck, Check, CheckCircle } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from "@/components/ui/separator";
import { initScrollAnimations } from '@/utils/scrollAnimations';

const Compliance = () => {
  // Set up scroll animations with staggered effect
  useEffect(() => {
    initScrollAnimations({ 
      threshold: 0.1,
      staggerDelay: true,
      staggerAmount: 120
    });
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
                className="bg-masarna-orange hover:bg-masarna-orange/90 hover:scale-105 transition-all duration-300 text-white"
                onClick={() => window.location.href = '#contact'}
              >
                Book a Free Consultation
              </Button>
              <Link to="/services">
                <Button variant="outline" className="border-masarna-orange text-masarna-orange hover:bg-masarna-orange/10 hover:scale-105 transition-all duration-300">
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
          <h2 className="text-3xl font-bold text-center mb-12 reveal">Our Compliance Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Comprehensive Compliance Management */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 h-full reveal">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
                  <ShieldCheck className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Comprehensive Compliance Management
                </CardTitle>
              </CardHeader>
              <Separator className="mx-8 bg-gray-100" />
              <CardContent className="pt-4 px-8">
                <p className="text-gray-700 mb-6 text-center">
                  We handle the full spectrum of compliance tasks to ensure your operations remain uninterrupted.
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">State & Federal Filings:</span> Managing franchise taxes, state registrations, annual reports, and ongoing compliance requirements.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">Agency Liaison:</span> Handling communications with state and federal agencies, including audits and regulatory updates.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">Document Control:</span> Maintaining an organized system for compliance tracking and instant document retrieval.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Risk Mitigation & Regulatory Adherence */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 h-full reveal">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
                  <FileCheck className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Risk Mitigation & Regulatory Adherence
                </CardTitle>
              </CardHeader>
              <Separator className="mx-8 bg-gray-100" />
              <CardContent className="pt-4 px-8">
                <p className="text-gray-700 mb-6 text-center">
                  Stay ahead of potential pitfalls with our proactive approach.
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">Regulatory Monitoring:</span> Keeping abreast of changes in laws and regulations to ensure continuous compliance.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">Policy Development:</span> Crafting and updating internal policies to reflect current legal standards.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">Training & Awareness:</span> Educating your team on compliance best practices to foster a culture of accountability.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Strategic Compliance Planning */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 h-full reveal">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
                  <ClipboardCheck className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Strategic Compliance Planning
                </CardTitle>
              </CardHeader>
              <Separator className="mx-8 bg-gray-100" />
              <CardContent className="pt-4 px-8">
                <p className="text-gray-700 mb-6 text-center">
                  Align your compliance strategy with your business objectives.
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">Compliance Audits:</span> Conducting thorough reviews to identify and address potential compliance gaps.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">Reporting & Documentation:</span> Preparing necessary reports and maintaining records to demonstrate compliance.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">Continuous Improvement:</span> Regularly assessing and enhancing compliance processes for optimal efficiency.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Documentation & Reporting */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 h-full reveal">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
                  <FileText className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Documentation & Reporting
                </CardTitle>
              </CardHeader>
              <Separator className="mx-8 bg-gray-100" />
              <CardContent className="pt-4 px-8">
                <p className="text-gray-700 mb-6 text-center">
                  Maintain accurate records and stay prepared for any regulatory scrutiny.
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">Record Management:</span> Organizing and maintaining all necessary compliance documentation.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">Compliance Reporting:</span> Creating comprehensive reports for management and stakeholders.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">Audit Support:</span> Providing assistance and documentation during regulatory audits.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Compliance Process Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center reveal">Our Compliance Process</h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] h-full w-0.5 bg-masarna-orange/20"></div>
              
              {/* Timeline steps */}
              <div className="space-y-12 relative">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center md:items-start reveal">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                    <h3 className="font-semibold text-lg mb-2 text-masarna-orange">Initial Assessment</h3>
                    <p className="text-gray-700 text-sm">We evaluate your current compliance status and identify areas that need attention.</p>
                  </div>
                  <div className="z-10 order-1 md:order-2">
                    <div className="w-10 h-10 rounded-full bg-masarna-orange/10 border-4 border-white flex items-center justify-center shadow-sm">
                      <span className="text-masarna-orange font-semibold">1</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3 mt-6 md:mt-0"></div>
                </div>
                
                {/* Step 2 */}
                <div className="flex flex-col md:flex-row items-center md:items-start reveal">
                  <div className="md:w-1/2 md:pr-12 order-2 mt-6 md:mt-0"></div>
                  <div className="z-10 order-1">
                    <div className="w-10 h-10 rounded-full bg-masarna-orange/10 border-4 border-white flex items-center justify-center shadow-sm">
                      <span className="text-masarna-orange font-semibold">2</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left order-3 mt-6 md:mt-0">
                    <h3 className="font-semibold text-lg mb-2 text-masarna-orange">Strategy Development</h3>
                    <p className="text-gray-700 text-sm">We create a tailored compliance strategy aligned with your business goals.</p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center md:items-start reveal">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                    <h3 className="font-semibold text-lg mb-2 text-masarna-orange">Implementation</h3>
                    <p className="text-gray-700 text-sm">We execute the strategy, establishing systems, procedures, and documentation.</p>
                  </div>
                  <div className="z-10 order-1 md:order-2">
                    <div className="w-10 h-10 rounded-full bg-masarna-orange/10 border-4 border-white flex items-center justify-center shadow-sm">
                      <span className="text-masarna-orange font-semibold">3</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3 mt-6 md:mt-0"></div>
                </div>
                
                {/* Step 4 */}
                <div className="flex flex-col md:flex-row items-center md:items-start reveal">
                  <div className="md:w-1/2 md:pr-12 order-2 mt-6 md:mt-0"></div>
                  <div className="z-10 order-1">
                    <div className="w-10 h-10 rounded-full bg-masarna-orange/10 border-4 border-white flex items-center justify-center shadow-sm">
                      <span className="text-masarna-orange font-semibold">4</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left order-3 mt-6 md:mt-0">
                    <h3 className="font-semibold text-lg mb-2 text-masarna-orange">Monitoring & Optimization</h3>
                    <p className="text-gray-700 text-sm">We continuously monitor compliance status and optimize processes for improvement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center reveal">Compliance Success Metrics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto reveal">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-masarna-orange mb-2">98%</div>
              <p className="text-gray-700 text-sm">Compliance audit success rate for clients</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-masarna-orange mb-2">40%</div>
              <p className="text-gray-700 text-sm">Average reduction in compliance-related costs</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-masarna-orange mb-2">75%</div>
              <p className="text-gray-700 text-sm">Time saved on compliance management tasks</p>
            </div>
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
                <p className="text-gray-700 text-sm">
                  Our team brings deep knowledge of regulatory frameworks across various industries.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-3 bg-masarna-orange/10 rounded-full mb-4">
                  <ClipboardCheck className="h-8 w-8 text-masarna-orange" />
                </div>
                <h3 className="text-lg font-medium mb-2">Efficiency</h3>
                <p className="text-gray-700 text-sm">
                  We streamline compliance processes to reduce administrative burdens.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-3 bg-masarna-orange/10 rounded-full mb-4">
                  <FileCheck className="h-8 w-8 text-masarna-orange" />
                </div>
                <h3 className="text-lg font-medium mb-2">Reliability</h3>
                <p className="text-gray-700 text-sm">
                  With Masarna, you can trust that your compliance obligations are managed diligently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Use the shared CTA Section component */}
      <CTASection />
    </PageLayout>
  );
};

export default Compliance;
