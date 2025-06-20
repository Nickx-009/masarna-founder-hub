import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });
    
    const section = document.querySelector('#about');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">About Masarna</h2>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-xl mb-6 text-gray-700">
              Masarna was founded by former startup operators who understand the unique challenges 
              that founders face when building and scaling their companies.
            </p>
            
            <p className="text-lg mb-6 text-gray-700">
              We believe that operational excellence is a competitive advantage. 
              By taking the operational burden off your shoulders, we enable you to focus 
              on what you do best—innovating and growing your business.
            </p>
            
            <p className="text-lg mb-6 text-gray-700">
              Our team brings decades of combined experience across HR, compliance, finance, 
              and equity management, specifically tailored to the startup ecosystem.
            </p>
            
            <p className="font-medium text-lg text-masarna-orange">
              We're not just a service provider—we're your proactive operational partner, 
              committed to your long-term success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;