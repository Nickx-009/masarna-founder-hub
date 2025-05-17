
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Funnel, Hexagon, Circle, Calendar, Clock, Briefcase, Handshake } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { Card, CardContent } from '@/components/ui/card';

const FractionalRecruiter = () => {
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
                <Funnel size={40} className="text-masarna-orange" />
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
      
      {/* Candidate Journey Experience */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 reveal">
            <h2 className="text-3xl font-bold mb-4">Candidate Journey Experience</h2>
            <p className="text-lg text-gray-700">
              Create an exceptional candidate experience that sets your company apart and attracts top talent.
            </p>
          </div>
          
          {/* Timeline Visualization */}
          <div className="relative mt-16 reveal">
            {/* Connecting line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-masarna-orange/30"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              {/* Item 1 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 order-2 md:order-1 mt-6 md:mt-0">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-3 text-masarna-orange">Discovery & Attraction</h3>
                      <p className="text-gray-700 mb-4">
                        Craft compelling job descriptions and employer branding that attracts 
                        the right candidates and promotes your unique company culture.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Weeks 1-2</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-masarna-orange flex items-center justify-center">
                      <Circle className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                    <div className="h-full flex items-center">
                      <span className="text-4xl text-masarna-orange font-bold">01</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 order-2">
                    <div className="h-full flex items-center justify-end">
                      <span className="text-4xl text-masarna-orange font-bold">02</span>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-masarna-orange flex items-center justify-center">
                      <Circle className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 order-1 mt-6 md:mt-0">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-3 text-masarna-orange">Assessment & Interview</h3>
                      <p className="text-gray-700 mb-4">
                        Design and implement a structured, efficient interview process 
                        that evaluates candidates thoroughly while respecting their time.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Weeks 3-4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 order-2 md:order-1 mt-6 md:mt-0">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-3 text-masarna-orange">Selection & Onboarding</h3>
                      <p className="text-gray-700 mb-4">
                        Create a seamless transition from offer acceptance to the first day
                        and beyond, ensuring new hires are set up for success.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Briefcase className="h-4 w-4 mr-1" />
                        <span>Weeks 5-6</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-masarna-orange flex items-center justify-center">
                      <Circle className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                    <div className="h-full flex items-center">
                      <span className="text-4xl text-masarna-orange font-bold">03</span>
                    </div>
                  </div>
                </div>
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
