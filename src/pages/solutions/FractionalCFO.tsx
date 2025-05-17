
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, BarChart3, TrendingUp, DollarSign } from 'lucide-react';
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
      problem: "High costs of a full-time executive CFO",
      solution: "Access top-tier financial leadership at a fraction of the cost",
      icon: <DollarSign className="h-6 w-6 text-masarna-orange" />
    },
    {
      problem: "Difficulty scaling financial operations",
      solution: "Implement scalable financial systems and processes",
      icon: <TrendingUp className="h-6 w-6 text-masarna-orange" />
    },
    {
      problem: "Limited financial visibility for decision making",
      solution: "Gain actionable financial insights and strategic foresight",
      icon: <BarChart3 className="h-6 w-6 text-masarna-orange" />
    }
  ];

  return (
    <PageLayout title="CFO" description="Expert financial leadership without the full-time cost">
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
              Strategic <span className="text-masarna-orange">Financial Leadership</span> When You Need It
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              Expert financial guidance without the overhead cost of a full-time executive, tailored to your growth stage and business goals.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-masarna-orange hover:bg-masarna-orange/90 text-white px-6 py-6 rounded-lg"
                onClick={() => window.location.href = '#contact'}
              >
                Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link to="#how-it-works">
                <Button variant="outline" className="border-masarna-orange text-masarna-orange hover:bg-masarna-orange/10 px-6 py-6 rounded-lg">
                  Learn How It Works
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
                  <div className="flex gap-4 mb-6">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-masarna-orange/20 flex items-center justify-center text-masarna-orange">
                        <DollarSign className="h-4 w-4" />
                      </div>
                      <div className="ml-3 text-lg font-medium">Financial Dashboard</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <div className="text-xs text-gray-500">Revenue</div>
                        <div className="text-lg font-bold">$1.8M</div>
                        <div className="flex items-center text-green-600 text-xs">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          <span>+12.4%</span>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <div className="text-xs text-gray-500">Expenses</div>
                        <div className="text-lg font-bold">$782K</div>
                        <div className="flex items-center text-red-600 text-xs">
                          <TrendingUp className="h-3 w-3 mr-1 rotate-180" />
                          <span>-4.1%</span>
                        </div>
                      </div>
                    </div>
                    <div className="h-24 relative">
                      <div className="absolute bottom-0 left-0 right-0 h-full flex items-end gap-1">
                        <div className="w-1/6 h-[35%] bg-masarna-orange/20 rounded-t"></div>
                        <div className="w-1/6 h-[45%] bg-masarna-orange/30 rounded-t"></div>
                        <div className="w-1/6 h-[60%] bg-masarna-orange/40 rounded-t"></div>
                        <div className="w-1/6 h-[75%] bg-masarna-orange/60 rounded-t"></div>
                        <div className="w-1/6 h-[85%] bg-masarna-orange/80 rounded-t"></div>
                        <div className="w-1/6 h-[95%] bg-masarna-orange rounded-t"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Overview - ZigZag Layout */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How a <span className="text-masarna-orange">Fractional CFO</span> Works
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Strategic financial leadership that scales with your business needs
            </p>
          </div>
          
          {/* ZigZag Items */}
          <div className="space-y-24 md:space-y-32">
            {/* Item 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12 reveal">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <span className="text-xs font-semibold inline-block py-1 px-3 rounded-full bg-masarna-orange/10 text-masarna-orange mb-4">01. Financial Strategy</span>
                <h3 className="text-2xl font-bold mb-4">Strategic Financial Planning & Analysis</h3>
                <p className="text-gray-700 mb-6">
                  Your CFO develops comprehensive financial strategies aligned with your business goals, providing the analysis and insights you need to make informed decisions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mt-1 bg-masarna-orange/10 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </div>
                    <span>Long-term financial forecasting and planning</span>
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
                    <span>Financial modeling for strategic initiatives</span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
                <div className="bg-gradient-to-br from-gray-50 to-masarna-orange/5 p-8 rounded-xl shadow-lg max-w-md w-full border border-gray-100">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-masarna-orange/20 to-masarna-orange/10 rounded-lg blur-md"></div>
                    <div className="relative bg-white p-6 rounded-lg shadow">
                      <h4 className="font-bold text-lg mb-3">Financial Roadmap</h4>
                      <div className="space-y-4 mt-4">
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                          <div className="flex justify-between items-center">
                            <span className="text-masarna-orange font-medium">Phase 1</span>
                            <span className="bg-masarna-orange/10 text-masarna-orange text-xs px-2 py-1 rounded">Q1</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">Financial assessment & foundation</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                          <div className="flex justify-between items-center">
                            <span className="text-masarna-orange font-medium">Phase 2</span>
                            <span className="bg-masarna-orange/10 text-masarna-orange text-xs px-2 py-1 rounded">Q2</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">Systems optimization & reporting</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                          <div className="flex justify-between items-center">
                            <span className="text-masarna-orange font-medium">Phase 3</span>
                            <span className="bg-masarna-orange/10 text-masarna-orange text-xs px-2 py-1 rounded">Q3-Q4</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">Strategic growth & investment planning</p>
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
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500">Cash Reserves</span>
                          <span className="font-medium">$420,000</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full">
                          <div className="h-2 bg-gradient-to-r from-masarna-orange to-masarna-orange/50 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500">Accounts Receivable</span>
                          <span className="font-medium">$185,000</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full">
                          <div className="h-2 bg-gradient-to-r from-masarna-orange to-masarna-orange/50 rounded-full" style={{ width: '38%' }}></div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500">Accounts Payable</span>
                          <span className="font-medium">$95,000</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full">
                          <div className="h-2 bg-gradient-to-r from-masarna-orange to-masarna-orange/50 rounded-full" style={{ width: '22%' }}></div>
                        </div>
                        <div className="p-3 mt-2 border border-green-100 bg-green-50 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-green-600 font-medium">+3.2 months</span>
                              <div className="text-xs text-gray-500">Runway Extension</div>
                            </div>
                            <TrendingUp className="text-green-600 h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-xs font-semibold inline-block py-1 px-3 rounded-full bg-masarna-orange/10 text-masarna-orange mb-4">02. Cash Flow Optimization</span>
                <h3 className="text-2xl font-bold mb-4">Strategic Cash Flow Management</h3>
                <p className="text-gray-700 mb-6">
                  Your CFO optimizes your cash flow through expert management of working capital, making sure you have the liquidity needed for operations and growth.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mt-1 bg-masarna-orange/10 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </div>
                    <span>Cash flow forecasting and management</span>
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
                    <span>Runway extension strategies</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Item 3 */}
            <div className="flex flex-col md:flex-row items-center gap-12 reveal">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <span className="text-xs font-semibold inline-block py-1 px-3 rounded-full bg-masarna-orange/10 text-masarna-orange mb-4">03. Funding & Investor Relations</span>
                <h3 className="text-2xl font-bold mb-4">Fundraising & Investor Strategy</h3>
                <p className="text-gray-700 mb-6">
                  Your CFO prepares your business for fundraising success with investor-ready financials, compelling narratives, and strategic guidance throughout the process.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mt-1 bg-masarna-orange/10 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </div>
                    <span>Pitch deck financial narrative development</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 bg-masarna-orange/10 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </div>
                    <span>Investor financial documentation preparation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 bg-masarna-orange/10 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </div>
                    <span>Due diligence management and support</span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
                <div className="bg-gradient-to-br from-gray-50 to-masarna-orange/5 p-8 rounded-xl shadow-lg max-w-md w-full border border-gray-100">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-masarna-orange/20 to-masarna-orange/10 rounded-lg blur-md"></div>
                    <div className="relative bg-white p-6 rounded-lg shadow">
                      <h4 className="font-bold text-lg mb-3">Fundraising Preparation</h4>
                      <div className="space-y-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-masarna-orange/10 flex items-center justify-center text-masarna-orange">
                            <span className="font-bold">1</span>
                          </div>
                          <div className="ml-3">
                            <p className="font-medium">Financial Story</p>
                            <div className="h-1.5 w-40 bg-gray-100 rounded-full mt-1">
                              <div className="h-1.5 bg-masarna-orange rounded-full w-full"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-masarna-orange/10 flex items-center justify-center text-masarna-orange">
                            <span className="font-bold">2</span>
                          </div>
                          <div className="ml-3">
                            <p className="font-medium">Financial Models</p>
                            <div className="h-1.5 w-40 bg-gray-100 rounded-full mt-1">
                              <div className="h-1.5 bg-masarna-orange rounded-full w-full"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-masarna-orange/10 flex items-center justify-center text-masarna-orange">
                            <span className="font-bold">3</span>
                          </div>
                          <div className="ml-3">
                            <p className="font-medium">Due Diligence Room</p>
                            <div className="h-1.5 w-40 bg-gray-100 rounded-full mt-1">
                              <div className="h-1.5 bg-masarna-orange rounded-full w-3/4"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-masarna-orange/10 flex items-center justify-center text-masarna-orange">
                            <span className="font-bold">4</span>
                          </div>
                          <div className="ml-3">
                            <p className="font-medium">Investor Outreach</p>
                            <div className="h-1.5 w-40 bg-gray-100 rounded-full mt-1">
                              <div className="h-1.5 bg-masarna-orange rounded-full w-1/2"></div>
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
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gradient-to-br from-masarna-orange/5 to-masarna-orange/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transform Your Financial Strategy
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              From financial uncertainty to strategic clarity and optimized performance
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
                  <AvatarImage src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80" alt="Michael Chen" />
                  <AvatarFallback className="bg-masarna-orange/20">MC</AvatarFallback>
                </Avatar>
                <div className="mt-4 text-center md:text-left">
                  <h4 className="font-bold text-lg">Michael Chen</h4>
                  <p className="text-gray-600">CEO, TechNova Solutions</p>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="text-3xl text-masarna-orange font-serif mb-4">❝</div>
                <blockquote className="text-lg md:text-xl font-medium text-gray-700 mb-6 italic">
                  Working with Masarna's CFO service transformed our financial strategy. We gained clarity on our unit economics, extended our runway by 8 months, and secured Series A funding. The strategic guidance was invaluable.
                </blockquote>
                <div className="flex items-center">
                  <div className="flex text-masarna-orange">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">$4.5M Series A Raised</span>
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
                Ready to strengthen your <span className="text-masarna-orange">financial leadership</span>?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                Schedule a consultation to explore how a fractional CFO can optimize your financial strategy and accelerate your growth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  className="bg-masarna-orange hover:bg-masarna-orange/90 text-white px-8 py-6 text-lg rounded-lg"
                  onClick={() => window.location.href = '#contact'}
                >
                  Schedule Financial Consultation
                </Button>
                <Link to="/solutions">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 rounded-lg">
                    Explore More Solutions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FractionalCFO;
