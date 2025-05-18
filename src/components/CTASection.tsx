
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });
    
    const section = document.querySelector('#contact');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section 
      id="contact" 
      className={`py-20 bg-gradient-to-br from-masarna-orange to-masarna-orange/80 text-white transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-90'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left column - Content */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0' : 'translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business Operations?</h2>
            
            <p className="text-xl mb-6 opacity-90">
              Schedule a free 30-minute consultation with our experts and discover how 
              Masarna can streamline your operations and accelerate your growth.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </span>
                <span>No commitment required</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </span>
                <span>Custom solutions for your specific challenges</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </span>
                <span>Clear pricing and implementation timeline</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-white text-masarna-orange hover:bg-gray-100 px-8 py-6 rounded-lg text-lg shadow-lg flex items-center"
                onClick={() => console.log("CTA button clicked")}
              >
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <a 
                href="mailto:hello@masarna.com" 
                className="inline-flex items-center text-white hover:text-gray-100 transition-colors py-2"
              >
                <Mail className="mr-2 h-5 w-5" />
                <span>Or email us at hello@masarna.com</span>
              </a>
            </div>
          </div>
          
          {/* Right column - Image or testimonial */}
          <div className={`bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20 shadow-xl transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="mb-6 text-center">
              <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-2">
                Client Success Story
              </span>
              <h3 className="text-2xl font-bold">From Chaos to Clarity</h3>
            </div>
            
            <blockquote className="text-lg mb-6 italic">
              "Masarna helped us streamline our HR operations and cut administrative costs by 35%. 
              Their team provided personalized solutions that addressed our unique challenges. 
              The ROI has been incredible."
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full mr-4"></div>
              <div>
                <div className="font-medium">Sarah Johnson</div>
                <div className="text-sm opacity-80">CEO, TechStart Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
