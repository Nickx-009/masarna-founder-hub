import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import TypewriterText from './TypewriterText';
import Image from 'next/image';

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

  // Partner logos array with descriptions - using the newly uploaded logos
  const partnerLogos = [
    { id: 1, src: "/lovable-uploads/48baa83a-1563-47d0-8916-4c1b39372029.png", alt: "A Logo" },
    { id: 2, src: "/lovable-uploads/5d1ee6cb-01ad-47cd-9d5f-91cd5275b540.png", alt: "Techstars Logo" },
    { id: 3, src: "/lovable-uploads/0018a5ba-4539-48fa-a6b4-31a8eaf44178.png", alt: "MassChallenge Logo" },
    { id: 4, src: "/lovable-uploads/97b0ecd0-2a73-4f0c-965c-4eab302c6df9.png", alt: "Plug and Play Logo" },
    { id: 5, src: "/lovable-uploads/a4fbfafb-2f30-4e6d-8c61-944e4f5f697d.png", alt: "Seedcamp Logo" },
    { id: 6, src: "/lovable-uploads/240683e7-7d44-4801-9c5a-19fcbd217cea.png", alt: "Y Combinator Logo" },
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
          
          {/* Trusted By Section - Updated with all logos in a single row */}
          <div className="mt-16 reveal">
            <p className="text-base text-gray-600 mb-6">
              Leading investors emphasize the strategic value of delegating operations to unlock leadership capacity
            </p>
            <div className="flex flex-row justify-center items-center gap-6 md:gap-10 max-w-5xl mx-auto overflow-x-auto py-4">
              {partnerLogos.map((logo) => (
                <div 
                  key={logo.id} 
                  className="flex-shrink-0 w-16 h-16 flex items-center justify-center"
                >
                  <Image 
                    src={logo.src} 
                    alt={logo.alt}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
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