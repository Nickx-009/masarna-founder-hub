
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { Card, CardContent } from '@/components/ui/card';

const FractionalRecruiter = () => {
  return (
    <PageLayout title="Fractional Recruiter" description="Talent acquisition expertise for your startup">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 pt-16 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Expert Talent Acquisition for Your Startup</h1>
              <p className="text-lg text-gray-700 mb-8">
                Access specialized recruitment expertise to attract top talent 
                without the overhead of a full-time recruiting team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="lg:pl-10 reveal">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <h2 className="text-2xl font-semibold mb-6 text-masarna-orange">How Our Fractional Recruiters Help:</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Strategic recruitment planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Talent sourcing and candidate screening</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Employer branding and candidate experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Interview process design and management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background accent */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-r from-masarna-orange/5 to-masarna-orange/10" style={{
          clipPath: 'polygon(0 0, 100% 100%, 100% 0)'
        }}></div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* First content block - zigzag layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 reveal">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Strategic Talent Acquisition</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our fractional recruiters design comprehensive talent acquisition strategies 
                tailored to your specific needs, industry, and growth stage.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Role definition and compensation benchmarking</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Custom recruitment plans for each position</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Market analysis and talent mapping</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 bg-gray-50 p-8 rounded-lg">
              <div className="aspect-video bg-gradient-to-br from-masarna-orange/20 to-masarna-orange/5 rounded-md flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-xl font-semibold mb-3">Strategic Recruitment Planning</h3>
                  <p className="text-gray-700">
                    Tailored recruitment strategies that align with your business goals
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Second content block - zigzag layout reversed */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="aspect-video bg-gradient-to-br from-masarna-orange/20 to-masarna-orange/5 rounded-md flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-xl font-semibold mb-3">Employer Branding</h3>
                  <p className="text-gray-700">
                    Build a compelling employer brand that attracts top talent to your company
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Employer Branding & Candidate Experience</h2>
              <p className="text-lg text-gray-700 mb-6">
                Create a compelling employer brand and exceptional candidate experience 
                that makes your company stand out in a competitive talent market.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Employer value proposition development</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Candidate journey optimization</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Recruitment marketing strategies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center reveal">Recruitment Challenges & Our Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Common Recruitment Challenges</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                    </span>
                    <span className="text-gray-700">Finding qualified candidates quickly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                    </span>
                    <span className="text-gray-700">Competitive talent markets driving up costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                    </span>
                    <span className="text-gray-700">Inconsistent hiring processes and poor candidate experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                    </span>
                    <span className="text-gray-700">Limited recruitment expertise and tooling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-masarna-orange">Our Recruiter Solutions</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Specialized sourcing strategies and networks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Cost-effective recruitment approaches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Structured hiring processes and candidate journeys</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Access to enterprise-grade recruitment tools</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-masarna-orange/5 to-masarna-orange/10 p-10 rounded-xl reveal">
            <h3 className="text-xl font-semibold mb-6 text-center">"Game-Changing Talent Acquisition"</h3>
            <p className="text-lg text-gray-700 mb-8 text-center italic">
              "We struggled for months to fill key technical roles until we started working with Masarna's 
              Fractional Recruiter service. Within weeks, we had a pipeline of qualified candidates and 
              filled all three positions with exceptional talent. The ROI has been incredible."
            </p>
            <div className="text-center">
              <p className="font-medium text-masarna-orange">Michael Chen</p>
              <p className="text-sm text-gray-600">CTO, CloudScale Solutions</p>
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
