import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, Users, Briefcase } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { useEffect } from 'react';

const ChiefOfStaff = () => {
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
      problem: "Spending too much time on operational details",
      solution: "Focus on strategic vision while your CoS manages day-to-day operations",
      icon: <Star className="h-6 w-6 text-masarna-orange" />
    },
    {
      problem: "Struggling to coordinate cross-functional projects",
      solution: "CoS serves as central coordinator, ensuring all teams stay aligned",
      icon: <Users className="h-6 w-6 text-masarna-orange" />
    },
    {
      problem: "Missing critical opportunities due to overwhelm",
      solution: "CoS filters priorities and creates space for strategic decision-making",
      icon: <Briefcase className="h-6 w-6 text-masarna-orange" />
    }
  ];

  return (
    <PageLayout title="Chief of Staff" description="Fractional Chief of Staff services for startups">
      {/* Hero Section - Split Design */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-masarna-orange/5 to-masarna-orange/10 z-0"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-block bg-masarna-orange/10 px-4 py-2 rounded-full mb-4">
              <p className="text-masarna-orange font-medium text-sm">Executive Support</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Your <span className="text-masarna-orange">Strategic Partner</span> for Operational Excellence
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              Reclaim your time and accelerate growth with a seasoned Chief of Staff who becomes your strategic right hand.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-masarna-orange hover:bg-masarna-orange/90 text-white px-6 py-6 rounded-lg"
                onClick={() => window.location.href = '#contact'}
              >
                Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="#how-it-works">
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
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 bg-masarna-orange/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-masarna-orange" />
                      </div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 bg-masarna-orange/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-masarna-orange" />
                      </div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
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
              How a <span className="text-masarna-orange">Fractional Chief of Staff</span> Works
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The strategic support of an executive without the full-time cost
            </p>
          </div>
          
          {/* ZigZag Items */}
          <div className="space-y-24 md:space-y-32">
            {/* Item 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12 reveal">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <span className="text-xs font-semibold inline-block py-1 px-3 rounded-full bg-masarna-orange/10 text-masarna-orange mb-4">01. Strategic Planning</span>
                <h3 className="text-2xl font-bold mb-4">Drive Strategic Initiatives & Priorities</h3>
                <p className="text-gray-700 mb-6">
                  Your Chief of Staff works directly with you to identify strategic priorities, translate vision into actionable plans, and ensure focus on high-value activities that accelerate growth.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mt-1 bg-masarna-orange/10 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </div>
                    <span>Strategic initiative development and execution</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 bg-masarna-orange/10 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </div>
                    <span>Decision-making framework implementation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 bg-masarna-orange/10 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </div>
                    <span>Leadership strategy alignment</span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
                <div className="bg-gradient-to-br from-gray-50 to-masarna-orange/5 p-8 rounded-xl shadow-lg max-w-md w-full border border-gray-100">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-masarna-orange/20 to-masarna-orange/10 rounded-lg blur-md"></div>
                    <div className="relative bg-white p-6 rounded-lg shadow">
                      <h4 className="font-bold text-lg mb-3">Strategic Roadmap</h4>
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
                      <h4 className="font-bold text-lg mb-3">Communication Flow</h4>
                      <div className="flex items-center justify-center my-4">
                        <div className="h-16 w-16 rounded-full bg-masarna-orange/20 flex items-center justify-center border-2 border-masarna-orange">
                          <span className="font-bold">CEO</span>
                        </div>
                        <div className="w-12 h-1 bg-masarna-orange"></div>
                        <div className="h-14 w-14 rounded-full bg-masarna-orange/10 flex items-center justify-center border border-masarna-orange">
                          <span className="font-bold text-sm">CoS</span>
                        </div>
                      </div>
                      <div className="flex justify-around mt-4">
                        <div className="flex flex-col items-center">
                          <div className="w-1 h-8 bg-masarna-orange/50"></div>
                          <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-xs">
                            Team A
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-1 h-8 bg-masarna-orange/50"></div>
                          <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-xs">
                            Team B
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-1 h-8 bg-masarna-orange/50"></div>
                          <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-xs">
                            Team C
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-xs font-semibold inline-block py-1 px-3 rounded-full bg-masarna-orange/10 text-masarna-orange mb-4">02. Communication Hub</span>
                <h3 className="text-2xl font-bold mb-4">Streamlined Team Coordination</h3>
                <p className="text-gray-700 mb-6">
                  Your Chief of Staff serves as a central communication hub, coordinating across teams, managing key stakeholders, and ensuring information flows effectively throughout your organization.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mt-1 bg-masarna-orange/10 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </div>
                    <span>Cross-functional team coordination</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 bg-masarna-orange/10 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </div>
                    <span>Stakeholder relationship management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 bg-masarna-orange/10 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </div>
                    <span>Information synthesis and dissemination</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Item 3 */}
            <div className="flex flex-col md:flex-row items-center gap-12 reveal">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <span className="text-xs font-semibold inline-block py-1 px-3 rounded-full bg-masarna-orange/10 text-masarna-orange mb-4">03. Operational Excellence</span>
                <h3 className="text-2xl font-bold mb-4">Systems and Process Optimization</h3>
                <p className="text-gray-700 mb-6">
                  Your Chief of Staff implements efficient operational systems and processes that scale with your growth, eliminate bottlenecks, and create a foundation for sustainable expansion.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mt-1 bg-masarna-orange/10 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </div>
                    <span>Business process optimization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 bg-masarna-orange/10 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </div>
                    <span>Operational systems implementation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 bg-masarna-orange/10 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </div>
                    <span>Efficiency analysis and improvement</span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
                <div className="bg-gradient-to-br from-gray-50 to-masarna-orange/5 p-8 rounded-xl shadow-lg max-w-md w-full border border-gray-100">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-masarna-orange/20 to-masarna-orange/10 rounded-lg blur-md"></div>
                    <div className="relative bg-white p-6 rounded-lg shadow">
                      <h4 className="font-bold text-lg mb-3">Process Optimization</h4>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-sm font-medium text-red-500 mr-3">Old</div>
                          <div className="h-2 flex-grow bg-gray-200 rounded relative">
                            <div className="absolute inset-0 w-1/3 bg-red-300 rounded"></div>
                          </div>
                          <span className="ml-2">33%</span>
                        </div>
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-masarna-orange/10 flex items-center justify-center text-sm font-medium text-masarna-orange mr-3">New</div>
                          <div className="h-2 flex-grow bg-gray-200 rounded relative">
                            <div className="absolute inset-0 w-4/5 bg-gradient-to-r from-masarna-orange to-masarna-orange/50 rounded"></div>
                          </div>
                          <span className="ml-2">80%</span>
                        </div>
                        <div className="p-3 bg-green-50 border border-green-100 rounded-lg mt-2">
                          <div className="flex">
                            <div className="text-green-500 font-medium">+143%</div>
                            <div className="ml-2 text-gray-600 text-sm">Efficiency Improvement</div>
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
              Transform Your Leadership Effectiveness
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              From founder overwhelm to strategic clarity and operational excellence
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
                  <AvatarImage src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80" alt="Naomi Vega" />
                  <AvatarFallback className="bg-masarna-orange/20">NV</AvatarFallback>
                </Avatar>
                <div className="mt-4 text-center md:text-left">
                  <h4 className="font-bold text-lg">Naomi Vega</h4>
                  <p className="text-gray-600">Founder, EcoSmart Solutions</p>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="text-3xl text-masarna-orange font-serif mb-4">❝</div>
                <blockquote className="text-lg md:text-xl font-medium text-gray-700 mb-6 italic">
                  Before working with Masarna's Chief of Staff, I was drowning in operational details. Now I have the mental space to focus on vision and strategy. Our execution velocity has doubled, and I've reclaimed 15+ hours every week.
                </blockquote>
                <div className="flex items-center">
                  <div className="flex text-masarna-orange">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">Series B Funding Secured</span>
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
                Ready to multiply your <span className="text-masarna-orange">executive effectiveness</span>?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                Schedule a consultation to explore how a fractional Chief of Staff can transform your operational capacity and strategic focus.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  className="bg-masarna-orange hover:bg-masarna-orange/90 text-white px-8 py-6 text-lg rounded-lg"
                  onClick={() => window.location.href = '#contact'}
                >
                  Schedule Executive Consultation
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
    </PageLayout>
  );
};

export default ChiefOfStaff;