import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Fuel, Hexagon, Circle, Calendar, Clock, Briefcase, Handshake, User, UserCheck, CircleDot, FileCheck } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { Card, CardContent } from '@/components/ui/card';
import ProcessTimeline from '@/components/ProcessTimeline';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FractionalRecruiter = () => {
  // Define the expanded candidate journey steps
  const candidateJourneySteps = [
    {
      number: "01",
      title: "Awareness & Attraction",
      description: "Creating compelling employer branding that attracts top candidates to your opportunities",
      icon: <User className="h-6 w-6 text-white" />,
      emotion: "Curious & Exploring",
      candidateThought: "This company looks interesting, I wonder what they offer?",
      metrics: {
        label: "Candidate Pool Increase",
        value: "+65%"
      }
    },
    {
      number: "02",
      title: "Application & Screening",
      description: "Streamlined application process with clear feedback and timely communication",
      icon: <CircleDot className="h-6 w-6 text-white" />,
      emotion: "Hopeful & Engaged",
      candidateThought: "The application was refreshingly simple. I appreciate their quick response!",
      metrics: {
        label: "Application Completion Rate",
        value: "92%"
      }
    },
    {
      number: "03",
      title: "Interview Experience",
      description: "Structured interviews that evaluate skills while showcasing company culture",
      icon: <Calendar className="h-6 w-6 text-white" />,
      emotion: "Challenged & Valued",
      candidateThought: "They asked thoughtful questions and I got to speak with key team members",
      metrics: {
        label: "Interview-to-Offer Rate",
        value: "45%"
      }
    },
    {
      number: "04",
      title: "Offer & Decision",
      description: "Transparent compensation discussions and responsive offer management",
      icon: <UserCheck className="h-6 w-6 text-white" />,
      emotion: "Excited & Confident",
      candidateThought: "They addressed all my concerns and I feel valued by the team",
      metrics: {
        label: "Offer Acceptance Rate",
        value: "87%"
      }
    },
    {
      number: "05",
      title: "Onboarding & Integration",
      description: "Comprehensive onboarding that sets new hires up for success from day one",
      icon: <FileCheck className="h-6 w-6 text-white" />,
      emotion: "Supported & Enthusiastic",
      candidateThought: "I already feel like part of the team and know what I need to succeed",
      metrics: {
        label: "90-day Retention",
        value: "98%"
      }
    }
  ];

  // Define candidate testimonials
  const candidateTestimonials = [
    {
      name: "Sarah L.",
      role: "Senior Developer",
      quote: "The recruiting experience was night and day compared to others. I felt valued throughout the entire process.",
      company: "Hired at TechVista"
    },
    {
      name: "Michael R.",
      role: "Product Manager",
      quote: "My recruiter truly understood my career goals and found me a position that aligned perfectly with my skills and aspirations.",
      company: "Hired at InnovateCorp"
    },
    {
      name: "Priya K.",
      role: "Marketing Director",
      quote: "From first contact to onboarding, the entire experience was seamless. I received clear communication every step of the way.",
      company: "Hired at GrowthLabs"
    }
  ];
  
  return (
    <PageLayout title="Fractional Recruiter" description="Talent acquisition expertise for your startup">
      {/* Innovative Hero Section with Talent Funnel */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 pt-16 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 reveal">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Talent Acquisition</h1>
            <p className="text-lg text-gray-700 mb-8">
              Access specialized recruitment expertise to attract top talent 
              without the overhead of a full-time recruiting team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-masarna-orange hover:bg-masarna-orange/90 text-white"
                onClick={() => window.location.href = '#contact'}
              >
                Schedule Consultation
              </Button>
              <Link to="/solutions">
                <Button variant="outline" className="border-masarna-orange text-masarna-orange hover:bg-masarna-orange/10">
                  Explore All Solutions
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Talent Funnel Visualization */}
          <div className="max-w-3xl mx-auto relative py-10 reveal">
            <div className="bg-white rounded-xl shadow-lg p-6 relative z-10">
              <div className="flex items-center justify-center mb-8">
                <Fuel size={40} className="text-masarna-orange" />
                <h2 className="text-2xl font-semibold ml-3">The Talent Pipeline Challenge</h2>
              </div>
              
              <div className="relative">
                {/* Funnel Visualization */}
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-md bg-masarna-orange/10 rounded-t-lg py-4 px-6 text-center mb-1 relative">
                    <span className="font-semibold">100% Applicants</span>
                    <ArrowDown className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-masarna-orange" />
                  </div>
                  <div className="w-5/6 max-w-sm bg-masarna-orange/20 py-4 px-6 text-center mb-1 relative">
                    <span className="font-semibold">45% Initial Screening</span>
                    <ArrowDown className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-masarna-orange" />
                  </div>
                  <div className="w-4/6 max-w-xs bg-masarna-orange/30 py-4 px-6 text-center mb-1 relative">
                    <span className="font-semibold">20% Interviews</span>
                    <ArrowDown className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-masarna-orange" />
                  </div>
                  <div className="w-2/6 max-w-[150px] bg-masarna-orange/50 py-4 px-6 text-center mb-1 relative">
                    <span className="font-semibold">5% Offers</span>
                    <ArrowDown className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-masarna-orange" />
                  </div>
                  <div className="w-1/6 max-w-[100px] bg-masarna-orange py-4 px-6 text-center text-white">
                    <span className="font-semibold">3% Hires</span>
                  </div>
                </div>
                
                {/* Side Statistics */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-xl font-bold text-masarna-orange">72%</h3>
                    <p className="text-sm text-gray-600">of startups struggle with recruiting top talent</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-xl font-bold text-masarna-orange">45</h3>
                    <p className="text-sm text-gray-600">days average time-to-hire for tech positions</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-xl font-bold text-masarna-orange">35%</h3>
                    <p className="text-sm text-gray-600">reduction in hiring time with specialized recruiters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background accent */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-r from-masarna-orange/5 to-masarna-orange/10" style={{
          clipPath: 'polygon(0 0, 100% 100%, 100% 0)'
        }}></div>
      </section>

      {/* Talent Acquisition Framework Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 reveal">
            <h2 className="text-3xl font-bold mb-4">Talent Acquisition Framework</h2>
            <p className="text-lg text-gray-700">
              Our fractional recruiters implement a proven framework to optimize each stage of your talent acquisition process.
            </p>
          </div>
          
          {/* Framework Visualization */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
            {/* Framework Item 1 */}
            <div className="relative p-6 transition-all hover:scale-105 duration-300">
              <div className="absolute inset-0 bg-masarna-orange/5 rounded-xl"></div>
              <div className="relative flex flex-col items-center p-4">
                <div className="w-16 h-16 flex items-center justify-center bg-masarna-orange/10 rounded-full mb-4">
                  <Hexagon className="h-8 w-8 text-masarna-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Strategy & Planning</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-masarna-orange mr-2 flex-shrink-0" />
                    <span>Workforce planning aligned to business goals</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-masarna-orange mr-2 flex-shrink-0" />
                    <span>Compensation benchmarking</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-masarna-orange mr-2 flex-shrink-0" />
                    <span>Role definition & requirements analysis</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Framework Item 2 */}
            <div className="relative p-6 transition-all hover:scale-105 duration-300">
              <div className="absolute inset-0 bg-masarna-orange/5 rounded-xl"></div>
              <div className="relative flex flex-col items-center p-4">
                <div className="w-16 h-16 flex items-center justify-center bg-masarna-orange/10 rounded-full mb-4">
                  <Hexagon className="h-8 w-8 text-masarna-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sourcing & Attraction</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-masarna-orange mr-2 flex-shrink-0" />
                    <span>Targeted sourcing strategies</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-masarna-orange mr-2 flex-shrink-0" />
                    <span>Employer branding & positioning</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-masarna-orange mr-2 flex-shrink-0" />
                    <span>Multi-channel candidate outreach</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Framework Item 3 */}
            <div className="relative p-6 transition-all hover:scale-105 duration-300">
              <div className="absolute inset-0 bg-masarna-orange/5 rounded-xl"></div>
              <div className="relative flex flex-col items-center p-4">
                <div className="w-16 h-16 flex items-center justify-center bg-masarna-orange/10 rounded-full mb-4">
                  <Hexagon className="h-8 w-8 text-masarna-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Selection & Closing</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-masarna-orange mr-2 flex-shrink-0" />
                    <span>Structured interview process design</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-masarna-orange mr-2 flex-shrink-0" />
                    <span>Candidate assessment methodology</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-masarna-orange mr-2 flex-shrink-0" />
                    <span>Offer management & negotiation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Candidate Journey Experience */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 reveal">
            <h2 className="text-3xl font-bold mb-4">Candidate Journey Experience</h2>
            <p className="text-lg text-gray-700">
              Create an exceptional end-to-end candidate experience that sets your company apart and attracts top talent.
            </p>
          </div>
          
          {/* Horizontal Timeline */}
          <div className="mt-16 reveal">
            <ProcessTimeline 
              steps={candidateJourneySteps}
              orientation="horizontal"
              showEmotions={true}
              showMetrics={true}
            />
          </div>
          
          {/* Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 reveal">
            <Card className="bg-white border-masarna-orange/10 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-masarna-orange/10 flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-masarna-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Candidate-Centric</h3>
                <p className="text-gray-600">
                  Our process is designed around the candidate experience, ensuring clear communication and respect at every stage.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-masarna-orange/10 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-masarna-orange/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-masarna-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Efficient Process</h3>
                <p className="text-gray-600">
                  Streamlined workflows reduce time-to-hire by 35% while maintaining comprehensive evaluation standards.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-masarna-orange/10 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-masarna-orange/10 flex items-center justify-center mb-4">
                  <Handshake className="h-6 w-6 text-masarna-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Long-term Success</h3>
                <p className="text-gray-600">
                  Our approach ensures alignment between candidate expectations and company culture for lasting partnerships.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Candidate Testimonials */}
          <div className="mt-20 reveal">
            <h3 className="text-2xl font-bold text-center mb-10">Hear From Placed Candidates</h3>
            
            <Carousel className="max-w-4xl mx-auto">
              <CarouselContent>
                {candidateTestimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="px-6">
                    <Card className="bg-white border-masarna-orange/10">
                      <CardContent className="p-8">
                        <div className="flex items-start mb-6">
                          <div className="w-12 h-12 rounded-full bg-masarna-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                            <span className="text-xl font-bold text-masarna-orange">{testimonial.name.charAt(0)}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                            <p className="text-xs text-masarna-orange">{testimonial.company}</p>
                          </div>
                        </div>
                        
                        <blockquote className="text-gray-700 italic mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map(star => (
                            <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
          
          {/* Business Impact */}
          <div className="mt-20 bg-white p-8 rounded-xl shadow-sm max-w-4xl mx-auto reveal">
            <h3 className="text-2xl font-bold text-center mb-8">Business Impact of Enhanced Candidate Experience</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-masarna-orange mb-2">65%</div>
                <p className="text-sm text-gray-600">Increase in quality applications</p>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-masarna-orange mb-2">87%</div>
                <p className="text-sm text-gray-600">Offer acceptance rate</p>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-masarna-orange mb-2">42%</div>
                <p className="text-sm text-gray-600">Reduction in time-to-hire</p>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-masarna-orange mb-2">93%</div>
                <p className="text-sm text-gray-600">First-year retention rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Before & After Transformation Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 reveal">
            <h2 className="text-3xl font-bold mb-4">The Recruitment Transformation</h2>
            <p className="text-lg text-gray-700">
              See how our fractional recruiters transform your talent acquisition process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 reveal">
            {/* Before Column */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-500 mb-2">BEFORE</h3>
                <div className="w-20 h-1 bg-gray-400 mx-auto"></div>
              </div>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-0.5">
                    <span className="text-red-500 font-bold">✕</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Unstructured Hiring Process</h4>
                    <p className="text-gray-600 text-sm">Inconsistent approaches leading to poor candidate selection</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-0.5">
                    <span className="text-red-500 font-bold">✕</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Limited Talent Pipeline</h4>
                    <p className="text-gray-600 text-sm">Relying only on job boards and personal networks</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-0.5">
                    <span className="text-red-500 font-bold">✕</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Slow Time-to-Hire</h4>
                    <p className="text-gray-600 text-sm">45+ days average with high candidate drop-off</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-0.5">
                    <span className="text-red-500 font-bold">✕</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Poor Candidate Experience</h4>
                    <p className="text-gray-600 text-sm">Resulting in damaged employer brand and lost opportunities</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-10 p-4 bg-red-50 rounded-lg">
                <div className="text-center">
                  <span className="text-xl font-bold text-red-500">30%</span>
                  <p className="text-sm text-gray-600">Higher attrition rate within first year</p>
                </div>
              </div>
            </div>
            
            {/* After Column */}
            <div className="bg-masarna-orange/5 p-8 rounded-xl border border-masarna-orange/20">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-masarna-orange mb-2">AFTER</h3>
                <div className="w-20 h-1 bg-masarna-orange mx-auto"></div>
              </div>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-0.5">
                    <span className="text-masarna-orange font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Optimized Recruitment Strategy</h4>
                    <p className="text-gray-600 text-sm">Structured process aligned with business goals</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-0.5">
                    <span className="text-masarna-orange font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Diverse Talent Channels</h4>
                    <p className="text-gray-600 text-sm">Specialized sourcing strategies for each role</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-0.5">
                    <span className="text-masarna-orange font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Accelerated Hiring Velocity</h4>
                    <p className="text-gray-600 text-sm">25 days average time-to-hire for critical roles</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-0.5">
                    <span className="text-masarna-orange font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Exceptional Candidate Journey</h4>
                    <p className="text-gray-600 text-sm">Leading to better offer acceptance rates</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-10 p-4 bg-masarna-orange/10 rounded-lg">
                <div className="text-center">
                  <span className="text-xl font-bold text-masarna-orange">85%</span>
                  <p className="text-sm text-gray-600">First-year retention rate for new hires</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Voice of Talent Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 reveal">
            <h2 className="text-3xl font-bold mb-4">Voice of Talent</h2>
            <p className="text-lg text-gray-700">
              Hear from companies that transformed their recruitment with our fractional recruiters.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto reveal">
            {/* Client Testimonial */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-masarna-orange/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-masarna-orange">M</span>
                </div>
                <div>
                  <h3 className="font-semibold">Michael Chen</h3>
                  <p className="text-sm text-gray-600">CTO, CloudScale Solutions</p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 mb-6">
                <p className="italic">
                  "We struggled for months to fill key technical roles until we started working with Masarna's 
                  Fractional Recruiter service. Within weeks, we had a pipeline of qualified candidates and 
                  filled all three positions with exceptional talent. The ROI has been incredible."
                </p>
              </blockquote>
              
              <div className="flex justify-between items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">Hired 3 software engineers in 4 weeks</span>
              </div>
            </div>
            
            {/* Placed Candidate Testimonial */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-masarna-orange/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-masarna-orange">S</span>
                </div>
                <div>
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <p className="text-sm text-gray-600">VP of Product, Placed via Masarna</p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 mb-6">
                <p className="italic">
                  "The recruitment process was refreshingly transparent and efficient. My Masarna recruiter took 
                  the time to understand my career goals and made sure the role was truly a good fit. Three months in, 
                  and I couldn't be happier with my new position."
                </p>
              </blockquote>
              
              <div className="flex justify-between items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">Placed in 3 weeks from initial contact</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Talent Partnership CTA Section */}
      <section className="py-20 bg-gradient-to-br from-white to-masarna-orange/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden reveal">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <Handshake className="h-8 w-8 text-masarna-orange mr-3" />
                  <h2 className="text-2xl font-bold">Talent Partnership</h2>
                </div>
                
                <p className="text-gray-700 mb-8">
                  Ready to transform your recruitment process? Schedule a consultation with our 
                  fractional recruitment experts and build your dream team.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-masarna-orange text-sm font-bold">✓</span>
                    </div>
                    <span>Customized recruitment strategy</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-masarna-orange text-sm font-bold">✓</span>
                    </div>
                    <span>Flexible engagement models</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-masarna-orange text-sm font-bold">✓</span>
                    </div>
                    <span>No long-term commitments</span>
                  </li>
                </ul>
                
                <Button 
                  className="bg-masarna-orange hover:bg-masarna-orange/90 text-white w-full py-6"
                  onClick={() => window.location.href = '#contact'}
                >
                  Schedule Your Free Consultation
                </Button>
              </div>
              
              <div className="lg:w-1/2 bg-masarna-orange/10 p-8 lg:p-12 flex items-center justify-center">
                <div>
                  <div className="text-center mb-6">
                    <span className="text-6xl font-bold text-masarna-orange">30%</span>
                    <p className="text-xl font-medium">Faster Hiring</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <span className="block text-2xl font-bold text-masarna-orange">85%</span>
                      <p className="text-sm">Offer acceptance rate</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <span className="block text-2xl font-bold text-masarna-orange">40%</span>
                      <p className="text-sm">Cost savings vs. agencies</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <span className="block text-2xl font-bold text-masarna-orange">90%</span>
                      <p className="text-sm">Client satisfaction</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <span className="block text-2xl font-bold text-masarna-orange">500+</span>
                      <p className="text-sm">Successful placements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection />
    </PageLayout>
  );
};

export default FractionalRecruiter;
