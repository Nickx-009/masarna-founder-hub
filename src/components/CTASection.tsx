
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';

interface CTASectionProps {
  heading?: string;
  description?: string;
  buttonText?: string;
}

const CTASection = ({ 
  heading = "Ready to elevate your operations?", 
  description = "Get a free assessment of your current operations and discover how we can help you focus on growth.",
  buttonText = "Book Your Free Assessment"
}: CTASectionProps) => {
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
      className={`mt-20 text-center bg-masarna-orange/10 p-8 md:p-12 rounded-xl transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-90'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className={`text-2xl md:text-3xl font-bold mb-4 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0' : 'translate-y-10'
        }`}>{heading}</h2>
        
        <p className={`text-lg text-gray-700 mb-8 max-w-2xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0' : 'translate-y-10'
        }`}>
          {description}
        </p>
        
        <Button 
          className={`bg-masarna-orange hover:bg-masarna-orange/90 text-white px-8 py-6 text-lg rounded-lg transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          onClick={() => console.log("CTA button clicked")}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
