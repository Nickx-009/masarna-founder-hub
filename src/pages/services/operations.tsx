import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Settings, BarChart, CheckCircle, Cog, ClipboardList } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { initScrollAnimations } from '@/utils/scrollAnimations';
import ProcessSteps from '@/components/ProcessSteps';
import MetricsDisplay from '@/components/MetricsDisplay';

const Operations = () => {
  // Set up scroll animations
  useEffect(() => {
    initScrollAnimations({ staggerDelay: true, staggerAmount: 100 });
  }, []);

  // Operations service process steps
  const processSteps = [
    {
      number: "01",
      title: "Assessment",
      description: "We analyze your current operations and identify inefficiencies"
    },
    {
      number: "02",
      title: "Process Design",
      description: "We design optimized operational processes tailored to your business"
    },
    {
      number: "03",
      title: "Implementation",
      description: "We roll out new systems and processes with minimal disruption"
    },
    {
      number: "04",
      title: "Continuous Improvement",
      description: "We monitor performance and refine processes for optimal results"
    }
  ];

  // Success metrics
  const metrics = [
    { value: "35%", label: "Average reduction in operational costs" },
    { value: "50%", label: "Improvement in process efficiency" },
    { value: "60%", label: "Reduction in operational errors" },
    { value: "25%", label: "Increase in customer satisfaction" }
  ];

  return (
    <PageLayout title="Operations Services" description="Streamline your business operations with Masarna">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Background grid pattern */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-grid-pattern-dynamic"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 reveal">
              Operations Management Services
            </h1>
            
            <h2 className="text-xl md:text-2xl text-masarna-orange font-medium mb-6 reveal">
              Streamline Your Processes, Maximize Your Efficiency
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 reveal">
              Our operations management services help startups build scalable, efficient processes
              that support growth while reducing operational friction and costs.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 reveal">
              <Button 
                className="bg-masarna-orange hover:bg-masarna-orange/90 text-white"
                onClick={() => window.location.href = '#contact'}
              >
                Book a Free Consultation
              </Button>
              <Link href="/services">
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
              At Masarna, we understand that efficient operations are the backbone of any successful startup.
              Our team specializes in designing and implementing scalable processes that grow with your business
              while maximizing efficiency and reducing costs.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center reveal">Our Operations Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Process Optimization */}
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow hover:scale-[1.02] reveal service-card">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
                  <Settings className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Business Process Optimization
                </CardTitle>
              </CardHeader>
              <div className="w-full h-px bg-gray-200 my-2"></div>
              <CardContent>
                <p className="text-gray-700 mb-6 text-center">
                  We analyze and optimize your core business processes to improve efficiency and reduce costs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Process</span> Mapping & Analysis
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Bottleneck</span> Identification & Elimination
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Workflow</span> Redesign & Improvement
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Systems Integration */}
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow hover:scale-[1.02] reveal service-card">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
                  <Cog className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Systems Selection & Integration
                </CardTitle>
              </CardHeader>
              <div className="w-full h-px bg-gray-200 my-2"></div>
              <CardContent>
                <p className="text-gray-700 mb-6 text-center">
                  We help you select and implement the right tools and systems to support your operations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Technology</span> Needs Assessment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Software</span> Selection & Implementation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">System</span> Integration & Automation
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Documentation */}
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow hover:scale-[1.02] reveal service-card">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
                  <ClipboardList className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  SOP Development & Documentation
                </CardTitle>
              </CardHeader>
              <div className="w-full h-px bg-gray-200 my-2"></div>
              <CardContent>
                <p className="text-gray-700 mb-6 text-center">
                  We create clear, actionable standard operating procedures to ensure consistency and quality.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Process</span> Documentation & Standardization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Training</span> Material Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Knowledge</span> Management Systems
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Operational Metrics */}
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow hover:scale-[1.02] reveal service-card">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
                  <BarChart className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Operational Metrics & Reporting
                </CardTitle>
              </CardHeader>
              <div className="w-full h-px bg-gray-200 my-2"></div>
              <CardContent>
                <p className="text-gray-700 mb-6 text-center">
                  We establish key operational metrics and reporting systems to track and improve performance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">KPI</span> Development & Tracking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Dashboard</span> Creation & Implementation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Performance</span> Analysis & Reporting
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Process Timeline Section - UPDATED */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ProcessSteps steps={processSteps} title="Our Operations Process" />
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center reveal">Our Impact</h2>
            <MetricsDisplay metrics={metrics} />
          </div>
        </div>
      </section>
      
      {/* Why Choose Masarna */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center reveal">Why Choose Masarna for Operations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
              <div className="text-center">
                <div className="inline-block p-3 bg-masarna-orange/10 rounded-full mb-4">
                  <Settings className="h-8 w-8 text-masarna-orange" />
                </div>
                <h3 className="text-lg font-medium mb-2">Experience</h3>
                <p className="text-gray-700">
                  Our team brings extensive experience optimizing operations across diverse industries.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-3 bg-masarna-orange/10 rounded-full mb-4">
                  <Cog className="h-8 w-8 text-masarna-orange" />
                </div>
                <h3 className="text-lg font-medium mb-2">Practical</h3>
                <p className="text-gray-700">
                  We develop practical solutions that work for your specific business context.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-3 bg-masarna-orange/10 rounded-full mb-4">
                  <BarChart className="h-8 w-8 text-masarna-orange" />
                </div>
                <h3 className="text-lg font-medium mb-2">Results-Focused</h3>
                <p className="text-gray-700">
                  Our approach is centered on delivering measurable operational improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Use the shared CTA Section component */}
      <CTASection 
        heading="Streamline your business operations"
        description="Eliminate inefficiencies and build scalable processes with our operations expertise."
        buttonText="Get an Operations Audit"
      />
    </PageLayout>
  );
};

export default Operations;