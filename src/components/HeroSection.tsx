
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import TypewriterText from './TypewriterText';

const HeroSection = () => {
  const revealRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Optional: Add observer for fade-in animations for other elements
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    const fadeElements = document.querySelectorAll('.reveal');
    fadeElements.forEach(el => observer.observe(el));
    
    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Multiple texts for the typewriter effect
  const typewriterTexts = [
    "Focus on growth. We'll handle the operations.",
    "Built for startups. Designed for scale.",
    "Your vision. Our expertise. Perfect synergy."
  ];

  // Partner logos array with descriptions
  const partnerLogos = [
    { id: 1, src: "/lovable-uploads/4c19cc81-9f30-4ff8-b639-79916ff68ecd.png", alt: "VC Partner Logo" },
    { id: 2, src: "/lovable-uploads/4cef5407-2fed-4b3a-984a-ed7f0eb1be5c.png", alt: "Investment Partner Logo" },
    { id: 3, src: "/lovable-uploads/5f95107d-6e25-46ce-aadd-db64bcedb580.png", alt: "Tech Partner Logo" },
    { id: 4, src: "/lovable-uploads/86c10d18-0b76-47f7-a474-7fafd09629e3.png", alt: "Financial Partner Logo" },
    { id: 5, src: "/lovable-uploads/cdd76ebf-239b-4d54-8d69-6b920bec1ba6.png", alt: "Strategy Partner Logo" },
    { id: 6, src: "/lovable-uploads/b49dc31a-e3c1-4deb-810d-518f9f7f937d.png", alt: "Innovation Partner Logo" }
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Enhanced grid background with dynamic gradient effect */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-grid-pattern-dynamic"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Operational Excellence for <br /> Ambitious Founders
          </h1>
          
          <h2 className="text-xl md:text-2xl text-masarna-orange font-medium mb-8">
            <TypewriterText 
              texts={typewriterTexts}
              className="min-h-[1.5em] inline-block"
              typingSpeed={70}
              deletingSpeed={40}
              delayBetweenTexts={1800}
            />
          </h2>
          
          <p className="text-lg text-gray-700 mb-10 reveal">
            Masarna provides comprehensive Operations-as-a-Service for early-stage 
            and growth-stage startups, so you can focus on what matters most - building your business.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 reveal" ref={revealRef}>
            <Button 
              className="bg-masarna-orange hover:bg-masarna-orange/90 text-white px-8 py-6 rounded-lg text-lg"
              onClick={() => window.location.href = '#contact'}
            >
              Book Your Free Ops Assessment
            </Button>
            <Button 
              variant="outline" 
              className="border-masarna-orange text-masarna-orange hover:bg-masarna-orange/10 px-8 py-6 rounded-lg text-lg"
              onClick={() => window.location.href = '#how-it-works'}
            >
              See How It Works
            </Button>
          </div>
          
          {/* Trusted By Section - Updated with actual logos */}
          <div className="mt-16 reveal">
            <p className="text-base text-gray-600 mb-6">
              Leading investors emphasize the strategic value of delegating operations to unlock leadership capacity
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10 max-w-4xl mx-auto">
              {partnerLogos.map((logo) => (
                <div 
                  key={logo.id} 
                  className="w-24 h-24 flex items-center justify-center transition-all duration-300 group"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative shape */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-masarna-orange" style={{
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'
      }}></div>
    </section>
  );
};

export default HeroSection;
