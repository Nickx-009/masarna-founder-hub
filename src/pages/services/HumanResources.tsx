
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Briefcase, Shield, CheckCircle } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HumanResources = () => {
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
    <PageLayout title="Human Resources Services" description="Complete HR solutions for startups">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Background grid pattern */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-grid-pattern-dynamic"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 reveal">
              Human Resources Solutions
            </h1>
            
            <h2 className="text-xl md:text-2xl text-masarna-orange font-medium mb-6 reveal">
              Empowering Your Team, Simplifying Your Operations
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 reveal">
              Our comprehensive HR solutions are designed to streamline your operations, 
              ensure compliance, and foster a thriving workplace culture.
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
              At Masarna, we understand that effective human resources management is pivotal to your organization's success. 
              We take care of the HR complexities so you can focus on what matters most—growing your business.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Employee Lifecycle Management */}
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow reveal">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-blue-50">
                  <Users className="h-10 w-10 text-masarna-teal" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-teal">
                  Employee Lifecycle Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 text-center">
                  From onboarding to transitions, we oversee every phase of the employee journey.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal" />
                    <span className="text-gray-700">Onboarding & Offboarding</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal" />
                    <span className="text-gray-700">IT & Systems Setup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal" />
                    <span className="text-gray-700">Equity & Compensation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal" />
                    <span className="text-gray-700">Promotions & Career Development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Payroll Processing */}
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow reveal">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-blue-50">
                  <Briefcase className="h-10 w-10 text-masarna-teal" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-teal">
                  Efficient Payroll Processing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 text-center">
                  Accurate and timely payroll management for your entire workforce.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal" />
                    <span className="text-gray-700">Global Payroll Management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal" />
                    <span className="text-gray-700">Contractor Payments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal" />
                    <span className="text-gray-700">Bonuses & Incentives</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal" />
                    <span className="text-gray-700">Tax Compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Benefits Administration */}
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow reveal">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-blue-50">
                  <Shield className="h-10 w-10 text-masarna-teal" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-teal">
                  Benefits & Compliance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 text-center">
                  Navigating the complexities of benefits and regulatory requirements.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal" />
                    <span className="text-gray-700">Benefits Management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal" />
                    <span className="text-gray-700">Regulatory Compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal" />
                    <span className="text-gray-700">Policy Development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-masarna-teal" />
                    <span className="text-gray-700">Training Programs</span>
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
            <h2 className="text-2xl font-semibold mb-8 text-center reveal">Why Choose Masarna for HR</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
              <div className="text-center">
                <div className="inline-block p-3 bg-masarna-teal/10 rounded-full mb-4">
                  <Users className="h-8 w-8 text-masarna-teal" />
                </div>
                <h3 className="text-lg font-medium mb-2">Expertise</h3>
                <p className="text-gray-700">
                  Our team stays abreast of evolving HR practices to serve you better.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-3 bg-masarna-teal/10 rounded-full mb-4">
                  <Briefcase className="h-8 w-8 text-masarna-teal" />
                </div>
                <h3 className="text-lg font-medium mb-2">Employee-Centric</h3>
                <p className="text-gray-700">
                  We prioritize your team's well-being and satisfaction above all.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-3 bg-masarna-teal/10 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-masarna-teal" />
                </div>
                <h3 className="text-lg font-medium mb-2">Focus on Growth</h3>
                <p className="text-gray-700">
                  By handling HR intricacies, we free you to concentrate on scaling your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <div className="bg-masarna-teal/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-2xl font-bold mb-4">Ready to transform your HR operations?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Let Masarna be your trusted partner in human resources, so you can focus on what you do best—growing your organization.
            </p>
            <Button 
              className="bg-masarna-teal hover:bg-masarna-teal/90 text-white text-lg px-8 py-6"
              onClick={() => window.location.href = '#contact'}
            >
              Schedule Your Free HR Assessment
            </Button>
          </div>
        </div>
      </div>
      
      {/* Use the shared CTA Section component */}
      <CTASection />
    </PageLayout>
  );
};

export default HumanResources;
