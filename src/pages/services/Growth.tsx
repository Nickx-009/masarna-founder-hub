
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LineChart, BarChart, FileText, Target, CheckCircle, TrendingUp, Users } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { initScrollAnimations } from '@/utils/scrollAnimations';
import ProcessSteps from '@/components/ProcessSteps';
import MetricsDisplay from '@/components/MetricsDisplay';

const Growth = () => {
  // Set up scroll animations
  useEffect(() => {
    initScrollAnimations({ staggerDelay: true, staggerAmount: 100 });
  }, []);

  // Growth service process steps
  const processSteps = [
    {
      number: "01",
      title: "Market Analysis",
      description: "We analyze your market position and identify growth opportunities"
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "We create a tailored growth strategy aligned with your business goals"
    },
    {
      number: "03",
      title: "Implementation",
      description: "We execute the strategy with focused campaigns and initiatives"
    },
    {
      number: "04",
      title: "Optimization",
      description: "We measure results and continuously optimize for better performance"
    }
  ];

  // Success metrics
  const metrics = [
    { value: "75%", label: "Average increase in qualified leads" },
    { value: "45%", label: "Growth in customer acquisition" },
    { value: "85%", label: "Client retention improvement" },
    { value: "3.2x", label: "Return on marketing investment" }
  ];

  return (
    <PageLayout title="Growth Services" description="Growth and scaling services for startups">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Background grid pattern */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-grid-pattern-dynamic"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 reveal">
              Growth & Scaling Services
            </h1>
            
            <h2 className="text-xl md:text-2xl text-masarna-orange font-medium mb-6 reveal">
              Accelerate Your Growth, Maximize Your Potential
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 reveal">
              Our growth and scaling services help ambitious startups accelerate their growth 
              through strategic planning, market expansion, and optimized customer acquisition.
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
              At Masarna, we understand that sustainable growth requires a strategic approach.
              Our team specializes in designing and implementing growth strategies that deliver
              measurable results while building a foundation for long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center reveal">Our Growth Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Growth Strategy */}
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow hover:scale-[1.02] reveal service-card">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
                  <TrendingUp className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Growth Strategy Development
                </CardTitle>
              </CardHeader>
              <div className="w-full h-px bg-gray-200 my-2"></div>
              <CardContent>
                <p className="text-gray-700 mb-6 text-center">
                  We develop custom growth strategies aligned with your business goals, resources, and market opportunities.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Market</span> Analysis & Opportunity Identification
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Growth</span> Channel Selection & Prioritization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Revenue</span> Modeling & Growth Projections
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Customer Acquisition */}
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow hover:scale-[1.02] reveal service-card">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
                  <Users className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Customer Acquisition Optimization
                </CardTitle>
              </CardHeader>
              <div className="w-full h-px bg-gray-200 my-2"></div>
              <CardContent>
                <p className="text-gray-700 mb-6 text-center">
                  We optimize your customer acquisition strategies to lower costs and increase conversion rates.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Acquisition</span> Funnel Optimization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Marketing</span> Channel Effectiveness Analysis
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Customer</span> Acquisition Cost Reduction
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Market Expansion */}
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow hover:scale-[1.02] reveal service-card">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
                  <Target className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Market Expansion Planning
                </CardTitle>
              </CardHeader>
              <div className="w-full h-px bg-gray-200 my-2"></div>
              <CardContent>
                <p className="text-gray-700 mb-6 text-center">
                  We create strategic plans to help you enter new markets and expand your customer base.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Market</span> Entry Strategy Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Competitive</span> Landscape Analysis
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Distribution</span> Channel Strategy
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Growth Metrics */}
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow hover:scale-[1.02] reveal service-card">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
                  <BarChart3 className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Growth Metrics & KPI Development
                </CardTitle>
              </CardHeader>
              <div className="w-full h-px bg-gray-200 my-2"></div>
              <CardContent>
                <p className="text-gray-700 mb-6 text-center">
                  We establish clear metrics and KPIs to track and measure your growth performance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Metrics</span> Framework Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Analytics</span> Implementation & Dashboards
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Performance</span> Monitoring & Reporting
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
          <ProcessSteps steps={processSteps} title="Our Growth Process" />
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
            <h2 className="text-2xl font-semibold mb-8 text-center reveal">Why Choose Masarna for Growth</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
              <div className="text-center">
                <div className="inline-block p-3 bg-masarna-orange/10 rounded-full mb-4">
                  <TrendingUp className="h-8 w-8 text-masarna-orange" />
                </div>
                <h3 className="text-lg font-medium mb-2">Data-Driven</h3>
                <p className="text-gray-700">
                  Our strategies are based on robust data analysis and market insights.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-3 bg-masarna-orange/10 rounded-full mb-4">
                  <Target className="h-8 w-8 text-masarna-orange" />
                </div>
                <h3 className="text-lg font-medium mb-2">Targeted</h3>
                <p className="text-gray-700">
                  We focus on the highest-impact opportunities for your specific business.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-3 bg-masarna-orange/10 rounded-full mb-4">
                  <BarChart3 className="h-8 w-8 text-masarna-orange" />
                </div>
                <h3 className="text-lg font-medium mb-2">Measurable</h3>
                <p className="text-gray-700">
                  We track clear metrics to ensure your growth strategies deliver results.
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

export default Growth;

