
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const typewriterRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Initialize the typewriter animation with looping
    const textElement = typewriterRef.current;
    if (textElement) {
      textElement.classList.add('animate-typewriter-loop');
    }
    
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

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="w-full h-full" style={{ 
          backgroundImage: 'radial-gradient(circle, #0C7489 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Operational Excellence for <br /> Ambitious Founders
          </h1>
          
          <h2 ref={typewriterRef} className="typewriter text-xl md:text-2xl text-masarna-teal font-medium mb-8">
            Focus on growth. We'll handle the operations.
          </h2>
          
          <p className="text-lg text-gray-700 mb-10 reveal">
            Masarna provides comprehensive Operations-as-a-Service for early-stage 
            and growth-stage startups, so you can focus on what matters most - building your business.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 reveal">
            <Button 
              className="bg-masarna-teal hover:bg-masarna-teal/90 text-white px-8 py-6 rounded-lg text-lg"
              onClick={() => window.location.href = '#contact'}
            >
              Book Your Free Ops Assessment
            </Button>
            <Button 
              variant="outline" 
              className="border-masarna-teal text-masarna-teal hover:bg-masarna-teal/10 px-8 py-6 rounded-lg text-lg"
              onClick={() => window.location.href = '#how-it-works'}
            >
              See How It Works
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative shape */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-masarna-gray" style={{
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'
      }}></div>
    </section>
  );
};

export default HeroSection;
