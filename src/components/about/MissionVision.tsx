
import React, { useEffect, useRef } from 'react';
import { Compass, Eye } from 'lucide-react';

const MissionVision = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrollPosition = window.scrollY;
      const sectionPosition = sectionRef.current.offsetTop;
      const offset = scrollPosition - sectionPosition;
      
      if (offset > -500 && offset < 500) {
        const leftImage = sectionRef.current.querySelector('.left-image') as HTMLElement;
        const rightImage = sectionRef.current.querySelector('.right-image') as HTMLElement;
        
        if (leftImage) leftImage.style.transform = `translateY(${offset * 0.05}px)`;
        if (rightImage) rightImage.style.transform = `translateY(${-offset * 0.05}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mission Side */}
          <div className="reveal order-2 lg:order-1">
            <div className="relative z-10 bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-masarna-orange/10 rounded-full">
                  <Compass className="w-6 h-6 text-masarna-orange" />
                </div>
                <h3 className="text-2xl font-bold ml-4 text-gray-800">Our Mission</h3>
              </div>
              
              <p className="text-gray-700 mb-4">
                To empower founders by taking the operational burden off their shoulders, 
                allowing them to focus on innovation and growth.
              </p>
              
              <blockquote className="border-l-4 border-masarna-orange pl-4 py-2 my-6 italic text-gray-600">
                "We believe operational excellence is not just a support function—it's a 
                strategic advantage that can make or break a startup's success story."
              </blockquote>
              
              <p className="text-gray-700">
                Every solution we provide is designed to create tangible value and 
                measurable impact for the startups we serve.
              </p>
            </div>
            
            <div className="left-image absolute -left-24 bottom-0 w-64 h-64 bg-masarna-orange/10 rounded-full blur-2xl opacity-70 transition-transform duration-700"></div>
          </div>
          
          {/* Vision Side */}
          <div className="reveal order-1 lg:order-2">
            <div className="relative z-10 bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-masarna-teal/10 rounded-full">
                  <Eye className="w-6 h-6 text-masarna-teal" />
                </div>
                <h3 className="text-2xl font-bold ml-4 text-gray-800">Our Vision</h3>
              </div>
              
              <p className="text-gray-700 mb-4">
                To be the premier operational partner for startups worldwide, known for 
                our expertise, reliability, and measurable impact on business outcomes.
              </p>
              
              <blockquote className="border-l-4 border-masarna-teal pl-4 py-2 my-6 italic text-gray-600">
                "We envision a world where founders can fully focus on their product and vision, 
                confident that their operational foundation is built for scale and success."
              </blockquote>
              
              <p className="text-gray-700">
                By 2030, we aim to have empowered over 1,000 startups to achieve operational 
                excellence and sustainable growth.
              </p>
            </div>
            
            <div className="right-image absolute -right-24 top-0 w-64 h-64 bg-masarna-teal/10 rounded-full blur-2xl opacity-70 transition-transform duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
