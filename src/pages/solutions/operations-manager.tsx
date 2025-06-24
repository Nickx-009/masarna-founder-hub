import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { Card, CardContent } from '@/components/ui/card';

const OperationsManager = () => {
  return (
    <PageLayout title="Operations Manager" description="Day-to-day operational leadership for your startup">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 pt-16 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Streamline Your Business Operations</h1>
              <p className="text-lg text-gray-700 mb-8">
                Get hands-on operational leadership to optimize your day-to-day processes, 
                increase efficiency, and support your growing business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-masarna-orange hover:bg-masarna-orange/90 text-white"
                  onClick={() => window.location.href = '#contact'}
                >
                  Schedule Consultation
                </Button>
                <Link href="/solutions">
                  <Button variant="outline" className="border-masarna-orange text-masarna-teal hover:bg-masarna-orange/10 bg-transparent">
                    Explore All Solutions
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:pl-10 reveal">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <h2 className="text-2xl font-semibold mb-6 text-masarna-orange">How Our Operations Managers Help:</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Business process mapping and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Systems implementation and improvement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Standard operating procedures development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Vendor management and relationships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background accent */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-r from-masarna-orange/5 to-masarna-orange/10" style={{
          clipPath: 'polygon(0 0, 100% 100%, 100% 0)'
        }}></div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* First content block - zigzag layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 reveal">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Process Design & Optimization</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our operations experts analyze, design, and implement efficient processes that 
                scale with your business while minimizing waste and maximizing productivity.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Process mapping and bottleneck identification</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Workflow automation and optimization</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Operational excellence frameworks</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 bg-gray-50 p-8 rounded-lg">
              <div className="aspect-video bg-gradient-to-br from-masarna-orange/20 to-masarna-orange/5 rounded-md flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-xl font-semibold mb-3">Process Optimization</h3>
                  <p className="text-gray-700">
                    Streamlined workflows that drive efficiency and scalability
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Second content block - zigzag layout reversed */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="aspect-video bg-gradient-to-br from-masarna-orange/20 to-masarna-orange/5 rounded-md flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-xl font-semibold mb-3">Systems Implementation</h3>
                  <p className="text-gray-700">
                    Strategic technology adoption to support operational excellence
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Systems Implementation & Integration</h2>
              <p className="text-lg text-gray-700 mb-6">
                Leverage the right tools and systems to support your operations, with 
                seamless integration between platforms for maximum efficiency.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Technology needs assessment and selection</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Implementation planning and execution</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Cross-platform integration and optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center reveal">Operations Challenges & Our Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Common Operations Challenges</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                    </span>
                    <span className="text-gray-700">Inefficient and manual processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                    </span>
                    <span className="text-gray-700">Siloed systems and fragmented data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                    </span>
                    <span className="text-gray-700">Scaling operational capacity with growth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                    </span>
                    <span className="text-gray-700">Inconsistent quality and service delivery</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-masarna-orange">Our Operations Solutions</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Process automation and workflow optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Integrated systems architecture and data flow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Scalable operational frameworks and training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Quality management systems and metrics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-masarna-orange/5 to-masarna-orange/10 p-10 rounded-xl reveal">
            <h3 className="text-xl font-semibold mb-6 text-center">"Operational Transformation"</h3>
            <p className="text-lg text-gray-700 mb-8 text-center italic">
              "Our Operations Manager from Masarna implemented systems and processes that reduced our 
              fulfillment time by 40% and cut operational costs by 25%. Their expertise has been 
              instrumental in helping us scale smoothly during a period of rapid growth."
            </p>
            <div className="text-center">
              <p className="font-medium text-masarna-orange">James Wilson</p>
              <p className="text-sm text-gray-600">Founder, EcoDelivery</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection 
        heading="Ready to optimize your operations?"
        description="Our operations managers will streamline your processes, implement efficient systems, and help you scale smoothly."
        buttonText="Get Operational Support Today" 
      />
    </PageLayout>
  );
};

export default OperationsManager;