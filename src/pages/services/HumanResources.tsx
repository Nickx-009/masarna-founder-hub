import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { UserPlus, DollarSign, FileCheck, Award, Target, TrendingUp, CheckCircle, Check } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from "@/components/ui/separator";
import { initScrollAnimations } from '@/utils/scrollAnimations';
import ProcessSteps from '@/components/ProcessSteps';

const HumanResources = () => {
  // Set up scroll animations with staggered effect
  useEffect(() => {
    initScrollAnimations({ 
      threshold: 0.1,
      staggerDelay: true,
      staggerAmount: 120
    });
  }, []);

  // HR process steps
  const processSteps = [
    {
      number: "01",
      title: "Needs Assessment",
      description: "We analyze your current HR practices and identify areas for improvement."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "We create a tailored HR strategy aligned with your business goals and culture."
    },
    {
      number: "03",
      title: "Implementation",
      description: "We execute the strategy, establishing systems, processes, and documentation."
    },
    {
      number: "04",
      title: "Monitoring & Optimization",
      description: "We continuously monitor HR performance and optimize processes for improvement."
    }
  ];

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
              At Masarna, we understand that effective human resources management is pivotal to your organization's success. 
              We take care of the HR complexities so you can focus on what matters most—growing your business.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 reveal">Our HR Services</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Employee Lifecycle Management */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 h-full reveal">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
                  <UserPlus className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Employee Lifecycle Management
                </CardTitle>
              </CardHeader>
              <Separator className="mx-8 bg-gray-100" />
              <CardContent className="pt-4 px-8">
                <p className="text-gray-700 mb-6 text-center">
                  From onboarding to transitions, we oversee every phase of the employee journey.
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">Onboarding & Offboarding:</span> Comprehensive processes for smooth transitions.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">IT & Systems Setup:</span> Ensuring new hires have the tools they need.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">Equity & Compensation:</span> Developing competitive and fair compensation structures.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">Promotions & Career Development:</span> Supporting employee growth and advancement.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Payroll Processing */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 h-full reveal">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
                  <DollarSign className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Efficient Payroll Processing
                </CardTitle>
              </CardHeader>
              <Separator className="mx-8 bg-gray-100" />
              <CardContent className="pt-4 px-8">
                <p className="text-gray-700 mb-6 text-center">
                  Accurate and timely payroll management for your entire workforce.
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">Global Payroll Management:</span> Handling multi-country payroll complexities.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">Contractor Payments:</span> Streamlined processes for freelance and contract work.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">Bonuses & Incentives:</span> Designing and implementing performance-based rewards.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">Tax Compliance:</span> Ensuring adherence to local and international tax laws.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Benefits Administration */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 h-full reveal">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
                  <FileCheck className="h-10 w-10 text-masarna-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-masarna-orange">
                  Benefits & Compliance
                </CardTitle>
              </CardHeader>
              <Separator className="mx-8 bg-gray-100" />
              <CardContent className="pt-4 px-8">
                <p className="text-gray-700 mb-6 text-center">
                  Navigating the complexities of benefits and regulatory requirements.
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">Benefits Management:</span> Selecting and administering competitive benefits packages.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">Regulatory Compliance:</span> Staying up-to-date with changing employment laws.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">Policy Development:</span> Creating clear and effective workplace policies.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-800 text-sm leading-tight">
                      <span className="font-medium">Training Programs:</span> Developing and implementing effective staff training.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* HR Process Timeline - Using our new component */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ProcessSteps steps={processSteps} title="Our HR Process" />
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center reveal">HR Success Metrics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto reveal">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-masarna-orange mb-2">90%</div>
              <p className="text-gray-700 text-sm">Improvement in employee onboarding satisfaction</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-masarna-orange mb-2">35%</div>
              <p className="text-gray-700 text-sm">Average reduction in HR administrative time</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-masarna-orange mb-2">45%</div>
              <p className="text-gray-700 text-sm">Increase in employee retention for our clients</p>
            </div>
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
                <div className="inline-block p-3 bg-masarna-orange/10 rounded-full mb-4">
                  <Award className="h-8 w-8 text-masarna-orange" />
                </div>
                <h3 className="text-lg font-medium mb-2">Expertise</h3>
                <p className="text-gray-700 text-sm">
                  Our team stays abreast of evolving HR practices to serve you better.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-3 bg-masarna-orange/10 rounded-full mb-4">
                  <Target className="h-8 w-8 text-masarna-orange" />
                </div>
                <h3 className="text-lg font-medium mb-2">Employee-Centric</h3>
                <p className="text-gray-700 text-sm">
                  We prioritize your team's well-being and satisfaction above all.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-3 bg-masarna-orange/10 rounded-full mb-4">
                  <TrendingUp className="h-8 w-8 text-masarna-orange" />
                </div>
                <h3 className="text-lg font-medium mb-2">Focus on Growth</h3>
                <p className="text-gray-700 text-sm">
                  By handling HR intricacies, we free you to concentrate on scaling your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Use the shared CTA Section component */}
      <CTASection 
        heading="Build a thriving workplace culture"
        description="Let our HR specialists help you attract, develop, and retain top talent with customized human resources solutions."
        buttonText="Enhance Your HR Strategy"
      />
    </PageLayout>
  );
};

export default HumanResources;
