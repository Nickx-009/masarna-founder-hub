import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Target, Lightbulb, Flag, ChartBar, CheckCircle, ArrowRight } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { initScrollAnimations } from '@/utils/scrollAnimations';

const Strategy = () => {
  // Set up scroll animations
  useEffect(() => {
    initScrollAnimations({ staggerDelay: true, staggerAmount: 100 });
  }, []);

  // Strategy process steps
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We analyze your business model, objectives, and competitive landscape"
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "We create a tailored strategic roadmap aligned with your vision"
    },
    {
      number: "03",
      title: "Implementation Planning",
      description: "We break down the strategy into actionable steps with clear metrics"
    },
    {
      number: "04",
      title: "Execution Support",
      description: "We provide ongoing guidance to ensure successful implementation"
    }
  ];

  // Success metrics
  const metrics = [
    { value: "89%", label: "Of clients achieve their strategic goals" },
    { value: "63%", label: "Average improvement in operational efficiency" },
    { value: "2.4x", label: "Average revenue growth within 12 months" },
    { value: "74%", label: "Reduction in strategic execution time" }
  ];

  return (
    <PageLayout title="Strategy Services" description="Strategic planning services for startups">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Background grid pattern */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-grid-pattern-dynamic"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 reveal">
              Strategy & Planning Services
            </h1>
            
            <h2 className="text-xl md:text-2xl text-masarna-orange font-medium mb-6 reveal">
              Define Your Vision, Chart Your Path to Success
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 reveal">
              Our strategic planning and roadmap development services help startups define their vision, 
              set clear objectives, and develop actionable plans to achieve their goals.
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
              At Masarna, we believe that effective strategy is the foundation of business success.
              Our team specializes in helping startups and growing businesses develop clear, actionable
              strategic plans that align with their vision and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center reveal">Our Strategy Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Vision & Mission */}
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow hover:scale-[1.02] reveal service-card">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
                  <Flag className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Vision & Mission Development
                </CardTitle>
              </CardHeader>
              <div className="w-full h-px bg-gray-200 my-2"></div>
              <CardContent>
                <p className="text-gray-700 mb-6 text-center">
                  We help startups articulate compelling vision and mission statements that inspire teams and guide decision-making.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Purpose</span> Definition Workshops
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Core Values</span> Identification
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Vision</span> Statement Crafting
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Strategic Planning */}
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow hover:scale-[1.02] reveal service-card">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
                  <Target className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Strategic Goal Setting & OKRs
                </CardTitle>
              </CardHeader>
              <div className="w-full h-px bg-gray-200 my-2"></div>
              <CardContent>
                <p className="text-gray-700 mb-6 text-center">
                  We establish clear strategic objectives and measurable key results to drive focused execution.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">OKR</span> Framework Implementation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Goal</span> Alignment Throughout Organization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Performance</span> Tracking Systems
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Product Roadmap */}
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow hover:scale-[1.02] reveal service-card">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
                  <Lightbulb className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Product Roadmap Development
                </CardTitle>
              </CardHeader>
              <div className="w-full h-px bg-gray-200 my-2"></div>
              <CardContent>
                <p className="text-gray-700 mb-6 text-center">
                  We create strategic product roadmaps that align with business goals and market opportunities.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Feature</span> Prioritization Framework
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Release</span> Planning & Timeline Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Resource</span> Allocation Planning
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Market Positioning */}
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow hover:scale-[1.02] reveal service-card">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
                  <ChartBar className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Market Positioning & Analysis
                </CardTitle>
              </CardHeader>
              <div className="w-full h-px bg-gray-200 my-2"></div>
              <CardContent>
                <p className="text-gray-700 mb-6 text-center">
                  We help startups define their unique market position and competitive advantage.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Competitive</span> Analysis
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Differentiation</span> Strategy Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Market</span> Opportunity Assessment
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Process Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center reveal">Our Strategy Process</h2>
            
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-px bg-masarna-orange/30 z-0 hidden md:block"></div>
              
              <div className="space-y-12 md:space-y-0 relative z-10">
                {processSteps.map((step, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col md:flex-row items-center md:items-start gap-6 reveal ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse text-right'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-masarna-orange flex items-center justify-center text-white font-bold text-xl flex-shrink-0 md:mt-0">
                      {step.number}
                    </div>
                    <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center reveal">Our Impact</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center reveal">
                  <div className="text-3xl md:text-4xl font-bold text-masarna-orange mb-2">{metric.value}</div>
                  <p className="text-gray-700 text-sm">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Masarna */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center reveal">Why Choose Masarna for Strategy</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
              <div className="text-center">
                <div className="inline-block p-3 bg-masarna-orange/10 rounded-full mb-4">
                  <Lightbulb className="h-8 w-8 text-masarna-orange" />
                </div>
                <h3 className="text-lg font-medium mb-2">Strategic Expertise</h3>
                <p className="text-gray-700">
                  Our team brings deep strategic expertise across diverse industries and business models.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-3 bg-masarna-orange/10 rounded-full mb-4">
                  <Target className="h-8 w-8 text-masarna-orange" />
                </div>
                <h3 className="text-lg font-medium mb-2">Actionable Plans</h3>
                <p className="text-gray-700">
                  We create practical, actionable strategies that translate into tangible results.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-3 bg-masarna-orange/10 rounded-full mb-4">
                  <ChartBar className="h-8 w-8 text-masarna-orange" />
                </div>
                <h3 className="text-lg font-medium mb-2">Data-Driven</h3>
                <p className="text-gray-700">
                  Our strategies are based on thorough research, analysis, and market insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Use the shared CTA Section component with custom props */}
      <CTASection 
        heading="Ready to develop your strategic roadmap?"
        description="Schedule a free consultation to discuss your specific strategic needs and how Masarna can help."
        buttonText="Schedule Your Free Strategy Session"
      />
    </PageLayout>
  );
};

export default Strategy;