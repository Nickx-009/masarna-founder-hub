import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, ArrowRight, DollarSign, BarChart, FileText, Calculator, Star } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';

const FractionalCFO = () => {
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Value proposition data with problems and solutions
  const valuePairs = [
    {
      problem: "Lack of financial strategy and visibility",
      solution: "Strategic financial planning and real-time dashboards for informed decisions",
      icon: <DollarSign className="h-6 w-6 text-masarna-orange" />
    },
    {
      problem: "Inefficient cash flow management",
      solution: "Optimized cash flow processes and forecasting to ensure business stability",
      icon: <BarChart className="h-6 w-6 text-masarna-orange" />
    },
    {
      problem: "Unprepared for fundraising and investor relations",
      solution: "Expert guidance on financial modeling, pitch preparation, and investor communications",
      icon: <Calculator className="h-6 w-6 text-masarna-orange" />
    }
  ];

  return (
    <>
      {/* Hero Section - Split Design */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-masarna-orange/5 to-masarna-orange/10 z-0"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-block bg-masarna-orange/10 px-4 py-2 rounded-full mb-4">
              <p className="text-masarna-orange font-medium text-sm">Financial Leadership</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Expert <span className="text-masarna-orange">Financial Leadership</span> Without the Full-Time Cost
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              Access strategic financial guidance, operational support, and investor relations expertise 
              with our experienced Fractional CFO service.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-masarna-orange hover:bg-masarna-orange/90 text-white px-6 py-6 rounded-lg"
                onClick={() => window.location.href = '#contact'}
              >
                Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/solutions">
                <Button variant="outline" className="border-masarna-orange text-masarna-orange hover:bg-masarna-orange/10 px-6 py-6 rounded-lg">
                  Explore All Solutions
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Content - Visual Element */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-masarna-orange to-masarna-orange/60 rounded-lg blur opacity-25"></div>
              <div className="relative bg-white rounded-lg overflow-hidden shadow-xl">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-3 text-masarna-orange">How Our Fractional CFO Helps:</h2>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <CheckCircle className="h-4 w-4 text-masarna-orange" />
                        </span>
                        <span className="text-gray-700">Strategic financial planning and analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <CheckCircle className="h-4 w-4 text-masarna-orange" />
                        </span>
                        <span className="text-gray-700">Cash flow management and forecasting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <CheckCircle className="h-4 w-4 text-masarna-orange" />
                        </span>
                        <span className="text-gray-700">Fundraising preparation and investor relations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <CheckCircle className="h-4 w-4 text-masarna-orange" />
                        </span>
                        <span className="text-gray-700">Financial systems implementation and optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Overview - ZigZag Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-masarna-orange">Fractional CFO</span> Service Delivers
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Strategic financial leadership without the full-time executive cost
            </p>
          </div>
          
          {/* ZigZag Items */}
          <div className="space-y-24 md:space-y-32">
            {/* Item 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12 reveal">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <span className="text-xs font-semibold inline-block py-1 px-3 rounded-full bg-masarna-orange/10 text-masarna-orange mb-4">01. Financial Strategy</span>
                <h3 className="text-2xl font-bold mb-4">Strategic Financial Planning</h3>
                <p className="text-gray-700 mb-6">
                  Our experienced CFOs develop comprehensive financial strategies aligned with your business goals,
                  providing the roadmap for sustainable growth and profitability.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mt-1 bg-masarna-orange/10 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </div>
                    <span>Annual and multi-year financial planning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 bg-masarna-orange/10 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </div>
                    <span>KPI development and performance tracking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 bg-masarna-orange/10 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </div>
                    <span>Financial modeling and scenario planning</span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
                <div className="bg-gradient-to-br from-gray-50 to-masarna-orange/5 p-8 rounded-xl shadow-lg max-w-md w-full border border-gray-100">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-masarna-orange/20 to-masarna-orange/10 rounded-lg blur-md"></div>
                    <div className="relative bg-white p-6 rounded-lg shadow">
                      <h4 className="font-bold text-lg mb-3">Financial Roadmap</h4>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-masarna-orange/10 flex items-center justify-center text-sm font-bold text-masarna-orange mr-3">Q1</div>
                          <div className="h-1 flex-grow bg-gradient-to-r from-masarna-orange to-masarna-orange/30 rounded"></div>
                        </div>
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-masarna-orange/10 flex items-center justify-center text-sm font-bold text-masarna-orange mr-3">Q2</div>
                          <div className="h-1 flex-grow bg-gradient-to-r from-masarna-orange to-masarna-orange/20 rounded"></div>
                        </div>
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-masarna-orange/10 flex items-center justify-center text-sm font-bold text-masarna-orange mr-3">Q3</div>
                          <div className="h-1 flex-grow bg-gradient-to-r from-masarna-orange to-masarna-orange/10 rounded"></div>
                        </div>
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-masarna-orange/10 flex items-center justify-center text-sm font-bold text-masarna-orange mr-3">Q4</div>
                          <div className="h-1 flex-grow bg-masarna-orange/5 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className="flex flex-col md:flex-row items-center gap-12 reveal">
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="bg-gradient-to-br from-gray-50 to-masarna-orange/5 p-8 rounded-xl shadow-lg max-w-md w-full border border-gray-100">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-masarna-orange/20 to-masarna-orange/10 rounded-lg blur-md"></div>
                    <div className="relative bg-white p-6 rounded-lg shadow">
                      <h4 className="font-bold text-lg mb-3">Cash Flow Management</h4>
                      <div className="p-4 bg-gradient-to-br from-gray-50 to-masarna-orange/5 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-medium text-gray-700">Cash Runway</span>
                          <div className="text-sm text-masarna-orange font-medium">+40%</div>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-masarna-orange rounded-full" style={{ width: "70%" }}></div>
                        </div>
                      </div>
                      <div className="p-4 mt-4 bg-gradient-to-br from-gray-50 to-masarna-orange/5 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-medium text-gray-700">Working Capital</span>
                          <div className="text-sm text-masarna-orange font-medium">+25%</div>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-masarna-orange rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-xs font-semibold inline-block py-1 px-3 rounded-full bg-masarna-orange/10 text-masarna-orange mb-4">02. Cash Flow Optimization</span>
                <h3 className="text-2xl font-bold mb-4">Cash Flow Management & Forecasting</h3>
                <p className="text-gray-700 mb-6">
                  Optimize your cash flow with expert management and forecasting, ensuring your business 
                  maintains financial stability while funding growth initiatives.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mt-1 bg-masarna-orange/10 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </div>
                    <span>13-week cash flow forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 bg-masarna-orange/10 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </div>
                    <span>Working capital optimization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 bg-masarna-orange/10 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </div>
                    <span>Burn rate management and runway extension</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Item 3 */}
            <div className="flex flex-col md:flex-row items-center gap-12 reveal">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <span className="text-xs font-semibold inline-block py-1 px-3 rounded-full bg-masarna-orange/10 text-masarna-orange mb-4">03. Fundraising Support</span>
                <h3 className="text-2xl font-bold mb-4">Fundraising & Investor Relations</h3>
                <p className="text-gray-700 mb-6">
                  Our Fractional CFOs prepare your business for successful fundraising rounds with 
                  compelling financial models, pitch materials, and investor communications.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mt-1 bg-masarna-orange/10 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </div>
                    <span>Investor-ready financial models</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 bg-masarna-orange/10 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </div>
                    <span>Due diligence preparation and management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 bg-masarna-orange/10 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </div>
                    <span>Investor reporting and communications</span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
                <div className="bg-gradient-to-br from-gray-50 to-masarna-orange/5 p-8 rounded-xl shadow-lg max-w-md w-full border border-gray-100">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-masarna-orange/20 to-masarna-orange/10 rounded-lg blur-md"></div>
                    <div className="relative bg-white p-6 rounded-lg shadow">
                      <h4 className="font-bold text-lg mb-3">Fundraising Readiness</h4>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-sm font-medium text-red-500 mr-3">Pre</div>
                          <div className="h-2 flex-grow bg-gray-200 rounded relative">
                            <div className="absolute inset-0 w-1/3 bg-red-300 rounded"></div>
                          </div>
                          <span className="ml-2">33%</span>
                        </div>
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-masarna-orange/10 flex items-center justify-center text-sm font-medium text-masarna-orange mr-3">Post</div>
                          <div className="h-2 flex-grow bg-gray-200 rounded relative">
                            <div className="absolute inset-0 w-4/5 bg-gradient-to-r from-masarna-orange to-masarna-orange/50 rounded"></div>
                          </div>
                          <span className="ml-2">90%</span>
                        </div>
                        <div className="p-3 bg-green-50 border border-green-100 rounded-lg mt-2">
                          <div className="flex">
                            <div className="text-green-500 font-medium">+173%</div>
                            <div className="ml-2 text-gray-600 text-sm">Fundraising Readiness</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gradient-to-br from-masarna-orange/5 to-masarna-orange/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transform Your Financial Operations
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              From financial challenges to strategic financial management
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {valuePairs.map((pair, index) => (
              <Card key={index} className="bg-white shadow-md border-none hover:shadow-lg transition-shadow duration-300 reveal">
                <div className="p-8">
                  {/* Problem Section */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-500">✗</span>
                      </div>
                      <h4 className="font-semibold text-gray-900">The Challenge:</h4>
                    </div>
                    <p className="text-gray-700">{pair.problem}</p>
                  </div>
                  
                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-gray-200 via-masarna-orange/30 to-gray-200 my-4"></div>
                  
                  {/* Solution Section */}
                  <div className="mt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-8 w-8 bg-masarna-orange/10 rounded-full flex items-center justify-center">
                        {pair.icon}
                      </div>
                      <h4 className="font-semibold text-gray-900">The Solution:</h4>
                    </div>
                    <p className="text-gray-700">{pair.solution}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gradient-to-br from-gray-50 to-masarna-orange/5 p-8 md:p-12 rounded-2xl shadow-lg relative overflow-hidden reveal">
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-masarna-orange/10 rounded-full -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-masarna-orange/10 rounded-full -ml-8 -mb-8"></div>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center relative z-10">
              <div className="w-full md:w-1/3">
                <Avatar className="h-28 w-28 border-4 border-white shadow-xl mx-auto md:mx-0">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80" alt="Marcus Thornton" />
                  <AvatarFallback className="bg-masarna-orange/20">MT</AvatarFallback>
                </Avatar>
                <div className="mt-4 text-center md:text-left">
                  <h4 className="font-bold text-lg">Marcus Thornton</h4>
                  <p className="text-gray-600">CTO, Quantum Leap AI</p>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="text-3xl text-masarna-orange font-serif mb-4">❝</div>
                <blockquote className="text-lg md:text-xl font-medium text-gray-700 mb-6 italic">
                  Working with Masarna's fractional CFO was a game-changer for our fundraising strategy. 
                  They brought clarity to our financials that impressed investors. Within six months, 
                  we secured our Series A with much better terms than we initially expected.
                </blockquote>
                <div className="flex items-center">
                  <div className="flex text-masarna-orange">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">$8M Series A Secured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-masarna-orange opacity-10 rounded-full -mt-12 -ml-12"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-masarna-orange opacity-10 rounded-full -mb-16 -mr-16"></div>
            
            <div className="relative z-10 text-center py-12 px-4 reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Ready to elevate your <span className="text-masarna-orange">financial strategy</span>?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                Schedule a consultation to explore how a Fractional CFO can transform your financial operations and accelerate your growth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  className="bg-masarna-orange hover:bg-masarna-orange/90 text-white px-8 py-6 text-lg rounded-lg"
                  onClick={() => window.location.href = '#contact'}
                >
                  Schedule Financial Consultation
                </Button>
                <Link href="/solutions">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 rounded-lg">
                    Explore More Solutions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FractionalCFO;