import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { Card, CardContent } from '@/components/ui/card';

const ProjectManager = () => {
  return (
    <PageLayout title="Project Manager" description="Focused project leadership for your startup">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 pt-16 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Deliver Your Critical Projects Successfully</h1>
              <p className="text-lg text-gray-700 mb-8">
                Drive your key initiatives to completion with experienced project leadership, 
                ensuring on-time, on-budget delivery with maximum business impact.
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
                <h2 className="text-2xl font-semibold mb-6 text-masarna-orange">How Our Project Managers Help:</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Project planning and scope definition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Timeline development and milestone tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Resource allocation and management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Risk management and issue resolution</span>
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
              <h2 className="text-3xl font-bold mb-6">Strategic Project Planning</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our project managers develop comprehensive plans that align with your business 
                objectives, defining clear scopes, timelines, and success metrics.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Project charter and objective definition</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Scope definition and work breakdown structure</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Timeline development with critical path analysis</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 bg-gray-50 p-8 rounded-lg">
              <div className="aspect-video bg-gradient-to-br from-masarna-orange/20 to-masarna-orange/5 rounded-md flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-xl font-semibold mb-3">Strategic Planning</h3>
                  <p className="text-gray-700">
                    Clear project roadmaps that align with your business goals
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
                  <h3 className="text-xl font-semibold mb-3">Risk Management</h3>
                  <p className="text-gray-700">
                    Proactive identification and mitigation of project risks
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Risk Management & Issue Resolution</h2>
              <p className="text-lg text-gray-700 mb-6">
                Anticipate and manage project risks with proactive strategies, 
                while quickly resolving issues to keep your projects on track.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Risk identification and assessment</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Mitigation strategy development</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Issue tracking and resolution frameworks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center reveal">Project Challenges & Our Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Common Project Challenges</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                    </span>
                    <span className="text-gray-700">Scope creep and unclear objectives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                    </span>
                    <span className="text-gray-700">Missed deadlines and timeline slippage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                    </span>
                    <span className="text-gray-700">Resource conflicts and allocation issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                    </span>
                    <span className="text-gray-700">Stakeholder misalignment and communication gaps</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-masarna-orange">Our Project Management Solutions</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Clear scoping documents and change control processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Structured milestone tracking and early warning systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Strategic resource planning and capacity management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Regular stakeholder communication and alignment</span>
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
            <h3 className="text-xl font-semibold mb-6 text-center">"Project Delivery Excellence"</h3>
            <p className="text-lg text-gray-700 mb-8 text-center italic">
              "We hired a Project Manager from Masarna to lead our product launch, which had already 
              missed two deadlines. They immediately brought structure to the chaos, identified key issues, 
              and delivered the project on time and under budget. The ROI was incredible."
            </p>
            <div className="text-center">
              <p className="font-medium text-masarna-orange">Alicia Rodriguez</p>
              <p className="text-sm text-gray-600">VP of Product, HealthTech Innovations</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection 
        heading="Ready to deliver your critical projects on time?"
        description="Our project managers will ensure your initiatives are completed successfully, on schedule, and within budget."
        buttonText="Get Project Management Support" 
      />
    </PageLayout>
  );
};

export default ProjectManager;