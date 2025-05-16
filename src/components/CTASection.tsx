
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';

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
      className={`py-20 bg-gradient-to-br from-[#f26522] to-[#f26522]/80 text-white transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-90'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0' : 'translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          
          <p className="text-xl mb-10 opacity-90">
            Book a free 30-minute operations assessment with our experts and discover how 
            Masarna can help optimize your startup's operations.
          </p>
          
          <Button 
            className="bg-white text-[#f26522] hover:bg-gray-100 px-8 py-6 rounded-lg text-lg shadow-lg"
            onClick={() => console.log("CTA button clicked")}
          >
            Book Your Free Ops Assessment
          </Button>
          
          <p className="mt-6 text-sm opacity-75">
            No commitment required. Learn how we can help your specific situation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
