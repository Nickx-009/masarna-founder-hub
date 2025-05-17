import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { DollarSign, BarChart, FileText, Calculator, CheckCircle } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { initScrollAnimations } from '@/utils/scrollAnimations';
import ProcessSteps from '@/components/ProcessSteps';
import MetricsDisplay from '@/components/MetricsDisplay';

const Finance = () => {
  // Set up scroll animations
  useEffect(() => {
    initScrollAnimations({ staggerDelay: true, staggerAmount: 100 });
  }, []);

  // Financial service process steps
  const processSteps = [
    {
      number: "01",
      title: "Assessment",
      description: "We analyze your current financial operations and processes"
    },
    {
      number: "02",
      title: "Strategy",
      description: "We develop a tailored financial management strategy for your needs"
    },
    {
      number: "03",
      title: "Implementation",
      description: "We deploy systems and processes for optimal financial operations"
    },
    {
      number: "04",
      title: "Optimization",
      description: "We continually refine and improve your financial processes"
    }
  ];

  // Success metrics
  const metrics = [
    { value: "40%", label: "Average reduction in financial management costs" },
    { value: "65%", label: "Faster monthly close process" },
    { value: "89%", label: "Of clients report improved financial clarity" },
    { value: "3.5x", label: "Return on investment in financial services" }
  ];

  return (
    <PageLayout title="Finance Services" description="Financial management services for startups">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Background grid pattern */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-grid-pattern-dynamic"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 reveal">
              Finance Services
            </h1>
            
            <h2 className="text-xl md:text-2xl text-masarna-orange font-medium mb-6 reveal">
              Streamline Your Finances, Empower Your Growth
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 reveal">
              Our comprehensive finance services are designed to simplify your financial operations, 
              ensure compliance, and support your business's growth trajectory.
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
              At Masarna, we recognize that effective financial management is crucial for your organization's success.
              We handle the complexities so you can focus on what matters most—growing your business.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center reveal">Our Finance Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Financial Operations */}
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow hover:scale-[1.02] reveal service-card">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
                  <DollarSign className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Comprehensive Financial Operations
                </CardTitle>
              </CardHeader>
              <div className="w-full h-px bg-gray-200 my-2"></div>
              <CardContent>
                <p className="text-gray-700 mb-6 text-center">
                  We handle the complexities of financial management, allowing you to focus on strategic initiatives.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Accounts Payable</span> & Receivable Management
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Banking</span> Operations & Reconciliation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Expense</span> Management & Tracking
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Revenue Management */}
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow hover:scale-[1.02] reveal service-card">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
                  <BarChart className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Revenue Management & Optimization
                </CardTitle>
              </CardHeader>
              <div className="w-full h-px bg-gray-200 my-2"></div>
              <CardContent>
                <p className="text-gray-700 mb-6 text-center">
                  Ensuring a healthy cash flow is vital. Our services help maintain optimal financial performance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Billing</span> & Collections Optimization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Cash Flow</span> Analysis & Forecasting
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Credit</span> Management & Risk Assessment
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Compliance & Reporting */}
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow hover:scale-[1.02] reveal service-card">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
                  <FileText className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Compliance & Financial Reporting
                </CardTitle>
              </CardHeader>
              <div className="w-full h-px bg-gray-200 my-2"></div>
              <CardContent>
                <p className="text-gray-700 mb-6 text-center">
                  Stay ahead of regulatory requirements with our expertise in financial reporting and compliance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Audit</span> Preparation & Support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Tax</span> Compliance & Planning
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Financial</span> Statement Preparation
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Strategic Planning */}
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow hover:scale-[1.02] reveal service-card">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
                  <Calculator className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Strategic Financial Planning
                </CardTitle>
              </CardHeader>
              <div className="w-full h-px bg-gray-200 my-2"></div>
              <CardContent>
                <p className="text-gray-700 mb-6 text-center">
                  Align your financial strategies with your business goals for sustainable growth.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Budgeting</span> & Financial Forecasting
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Financial</span> Analysis & Decision Support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">Investor</span> Relations & Fundraising Support
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
          <ProcessSteps steps={processSteps} title="Our Financial Services Process" />
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
            <h2 className="text-2xl font-semibold mb-8 text-center reveal">Why Choose Masarna for Finance</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
              <div className="text-center">
                <div className="inline-block p-3 bg-masarna-orange/10 rounded-full mb-4">
                  <DollarSign className="h-8 w-8 text-masarna-orange" />
                </div>
                <h3 className="text-lg font-medium mb-2">Expertise</h3>
                <p className="text-gray-700">
                  Our team brings deep knowledge of financial best practices and regulatory requirements.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-3 bg-masarna-orange/10 rounded-full mb-4">
                  <BarChart className="h-8 w-8 text-masarna-orange" />
                </div>
                <h3 className="text-lg font-medium mb-2">Efficiency</h3>
                <p className="text-gray-700">
                  We leverage technology to automate and streamline financial processes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-3 bg-masarna-orange/10 rounded-full mb-4">
                  <Calculator className="h-8 w-8 text-masarna-orange" />
                </div>
                <h3 className="text-lg font-medium mb-2">Scalability</h3>
                <p className="text-gray-700">
                  Our services are designed to grow with your business, adapting to your evolving needs.
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

export default Finance;
