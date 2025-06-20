import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import { ArrowRight } from "lucide-react";
import LeadCaptureDialog from "./LeadCaptureDialog";
import { trackCTAClick } from "@/utils/leadUtils";
import { useRouter } from 'next/router';

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
  const [isHovered, setIsHovered] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const router = useRouter();

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

  const handleCTAClick = () => {
    // Track the CTA click
    trackCTAClick(buttonText, router.pathname, getCTAContext());
    
    // Open the dialog
    setDialogOpen(true);
  };
  
  const getCTAContext = (): string => {
    const path = router.pathname;
    
    // Determine context based on URL path
    if (path.includes('/services/')) {
      return path.split('/services/')[1] || 'services';
    } else if (path.includes('/solutions/')) {
      return path.split('/solutions/')[1] || 'solutions';
    } else if (path === '/') {
      return 'homepage';
    }
    
    return 'general';
  };

  return (
    <>
      <section 
        id="contact" 
        className="mt-20 mb-20 flex justify-center px-4"
      >
        <div 
          className={`max-w-4xl w-full text-center bg-gradient-to-br from-masarna-orange/15 to-masarna-orange/5 p-8 md:p-12 rounded-2xl transition-all duration-500 shadow-lg border border-masarna-orange/10 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-4'
          } relative overflow-hidden`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-masarna-orange/5 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-masarna-teal/5 rounded-full -ml-12 -mb-12"></div>
          
          <div className="relative z-10">
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 transition-all duration-700 transform ${
              isVisible ? 'translate-y-0' : 'translate-y-10'
            }`}>{heading}</h2>
            
            <div className="w-16 h-1 bg-gradient-to-r from-masarna-orange to-masarna-teal mx-auto my-5 rounded-full opacity-80"></div>
            
            <p className={`text-lg text-gray-700 mb-8 max-w-2xl mx-auto transition-all duration-800 transform ${
              isVisible ? 'translate-y-0' : 'translate-y-10'
            }`}>
              {description}
            </p>
            
            <Button 
              className={`bg-masarna-orange hover:bg-masarna-orange/90 hover:scale-105 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 transform group ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${isHovered ? 'shadow-md' : ''}`}
              onClick={handleCTAClick}
            >
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
      
      <LeadCaptureDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        source={router.pathname}
        ctaText={buttonText}
        ctaContext={getCTAContext()}
      />
    </>
  );
};

export default CTASection;