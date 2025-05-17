
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { Card, CardContent } from '@/components/ui/card';

const HeadOfHR = () => {
  return (
    <PageLayout title="Head of HR" description="Seasoned HR leadership for your growing team">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 pt-16 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Expert HR Leadership for Growing Teams</h1>
              <p className="text-lg text-gray-700 mb-8">
                Build and maintain a thriving company culture with our experienced HR leadership, 
                without the cost of a full-time executive.
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
                <h2 className="text-2xl font-semibold mb-6 text-masarna-orange">How Our Head of HR Services Help:</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">HR strategy development and implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Talent acquisition and retention planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Culture development and employee engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Performance management systems</span>
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
              <h2 className="text-3xl font-bold mb-6">Strategic HR Leadership</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our experienced HR leaders bring strategic vision to your people operations, 
                aligning HR initiatives with your business goals and growth trajectory.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Develop HR roadmaps aligned with company objectives</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Design competitive compensation and benefits programs</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Create succession planning and leadership development</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 bg-gray-50 p-8 rounded-lg">
              <div className="aspect-video bg-gradient-to-br from-masarna-orange/20 to-masarna-orange/5 rounded-md flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-xl font-semibold mb-3">HR Strategy Development</h3>
                  <p className="text-gray-700">
                    Comprehensive HR strategies that support your business goals and foster growth
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
                  <h3 className="text-xl font-semibold mb-3">Culture & Employee Experience</h3>
                  <p className="text-gray-700">
                    Build engaging workplace cultures that attract and retain top talent
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Culture Development & Employee Engagement</h2>
              <p className="text-lg text-gray-700 mb-6">
                Create a workplace culture that attracts and retains top talent while fostering 
                engagement, productivity and alignment with company values.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Design employee experience programs</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Implement engagement surveys and action plans</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-masarna-orange mr-2" />
                  <span>Develop onboarding and retention strategies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center reveal">HR Challenges & Our Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Common HR Challenges</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                    </span>
                    <span className="text-gray-700">High employee turnover and recruiting costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                    </span>
                    <span className="text-gray-700">Compliance risks and outdated HR policies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                    </span>
                    <span className="text-gray-700">Poor employee engagement and satisfaction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                    </span>
                    <span className="text-gray-700">Lack of strategic HR leadership and vision</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-masarna-orange">Our Head of HR Solutions</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Employee retention strategies and programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Up-to-date policies and compliance management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Employee engagement and culture initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700">Strategic HR planning aligned with business goals</span>
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
            <h3 className="text-xl font-semibold mb-6 text-center">"Transformative HR Leadership"</h3>
            <p className="text-lg text-gray-700 mb-8 text-center italic">
              "The Head of HR service from Masarna completely transformed our people operations. 
              Within six months, we saw employee satisfaction increase by 40% and reduced 
              turnover by nearly 25%. Their strategic approach to HR has been a game-changer for our growth."
            </p>
            <div className="text-center">
              <p className="font-medium text-masarna-orange">Sarah Johnson</p>
              <p className="text-sm text-gray-600">CEO, TechGrowth Inc.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection />
    </PageLayout>
  );
};

export default HeadOfHR;
