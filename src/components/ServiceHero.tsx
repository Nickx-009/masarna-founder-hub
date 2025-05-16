
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  backLink: string;
  backLinkText: string;
}

const ServiceHero = ({ 
  title,
  subtitle, 
  description, 
  backLink,
  backLinkText 
}: ServiceHeroProps) => {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background grid pattern */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-grid-pattern-dynamic"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 reveal">
            {title}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-masarna-orange font-medium mb-6 reveal">
            {subtitle}
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 reveal">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 reveal">
            <Button 
              className="bg-masarna-orange hover:bg-masarna-orange/90 hover:scale-105 transition-all duration-300 text-white"
              onClick={() => window.location.href = '#contact'}
            >
              Book a Free Consultation
            </Button>
            <Link to={backLink}>
              <Button variant="outline" className="border-masarna-orange text-masarna-orange hover:bg-masarna-orange/10 hover:scale-105 transition-all duration-300">
                {backLinkText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative shape */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'
      }}></div>
    </section>
  );
};

export default ServiceHero;
