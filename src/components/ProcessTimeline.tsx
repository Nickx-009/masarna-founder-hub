
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  emotion?: string;
  candidateThought?: string;
  metrics?: {
    label: string;
    value: string;
  };
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  className?: string;
  orientation?: 'vertical' | 'horizontal';
  showEmotions?: boolean;
  showMetrics?: boolean;
}

const ProcessTimeline = ({ 
  steps, 
  className = '', 
  orientation = 'vertical',
  showEmotions = false,
  showMetrics = false
}: ProcessTimelineProps) => {
  const isMobile = useIsMobile();
  // Force vertical layout on mobile devices when horizontal is requested
  const isHorizontal = orientation === 'horizontal' && !isMobile;
  
  // Reference for scroll container
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Scroll handler functions for horizontal timeline
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };
  
  // Add scroll indicator effect
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const isAtStart = scrollLeft === 0;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
      
      // Could add visual indicators here if needed
      const leftButton = document.getElementById('scroll-left-button');
      const rightButton = document.getElementById('scroll-right-button');
      
      if (leftButton) {
        leftButton.style.opacity = isAtStart ? '0.5' : '1';
      }
      
      if (rightButton) {
        rightButton.style.opacity = isAtEnd ? '0.5' : '1';
      }
    };
    
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer && isHorizontal) {
      scrollContainer.addEventListener('scroll', handleScroll);
      // Initialize states
      handleScroll();
    }
    
    return () => {
      if (scrollContainer && isHorizontal) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isHorizontal]);
  
  if (isHorizontal) {
    return (
      <div className={`max-w-6xl mx-auto ${className}`}>
        {/* Scroll buttons for desktop */}
        <div className="hidden md:flex justify-between items-center mb-4">
          <button 
            id="scroll-left-button"
            onClick={scrollLeft} 
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 focus:outline-none transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <p className="text-sm text-gray-500">Scroll to see all stages</p>
          <button 
            id="scroll-right-button"
            onClick={scrollRight} 
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 focus:outline-none transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-px bg-masarna-orange/30 z-0"></div>
          
          {/* Mobile hint text */}
          <div className="md:hidden text-center mb-4">
            <p className="text-xs text-gray-500">Swipe to see all stages →</p>
          </div>
          
          <div 
            ref={scrollContainerRef}
            className="flex justify-between relative z-10 overflow-x-auto pb-6 scroll-smooth"
            style={{
              scrollbarWidth: 'none',  /* Firefox */
              msOverflowStyle: 'none',  /* IE and Edge */
            }}
          >
            {/* Hide scrollbar for Chrome, Safari and Opera */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center reveal hover-scale px-4 min-w-[200px] ${
                  index === 0 ? 'pl-1' : index === steps.length - 1 ? 'pr-1' : ''
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-masarna-orange flex items-center justify-center text-white font-bold text-xl flex-shrink-0 mb-4">
                  {step.icon || step.number}
                </div>
                
                <div className="w-full">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                  
                  {showEmotions && step.emotion && (
                    <div className="mt-3 bg-masarna-orange/5 px-3 py-2 rounded-lg">
                      <p className="text-sm font-medium text-masarna-orange">{step.emotion}</p>
                      {step.candidateThought && (
                        <p className="text-xs italic mt-1 text-gray-600">"{step.candidateThought}"</p>
                      )}
                    </div>
                  )}
                  
                  {showMetrics && step.metrics && (
                    <div className="mt-3 bg-gray-50 px-3 py-2 rounded-lg">
                      <p className="text-xs text-gray-500">{step.metrics.label}</p>
                      <p className="text-lg font-bold text-masarna-orange">{step.metrics.value}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile-only scroll indicator */}
        <div className="flex justify-center mt-2 md:hidden">
          <div className="flex space-x-1">
            {steps.map((_, index) => (
              <div 
                key={index} 
                className={`h-1.5 w-1.5 rounded-full ${
                  index === 0 ? 'bg-masarna-orange' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  // Mobile-optimized vertical timeline
  return (
    <div className={`max-w-5xl mx-auto ${className}`}>
      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-px bg-masarna-orange/30 z-0"></div>
        
        <div className="space-y-12 relative z-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex items-start gap-6 reveal"
            >
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-masarna-orange flex items-center justify-center text-white font-bold text-base md:text-xl flex-shrink-0">
                {step.icon || step.number}
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-700">{step.description}</p>
                
                {showEmotions && step.emotion && (
                  <div className="mt-3 bg-masarna-orange/5 px-3 py-2 rounded-lg">
                    <p className="text-sm font-medium text-masarna-orange">{step.emotion}</p>
                    {step.candidateThought && (
                      <p className="text-xs italic mt-1 text-gray-600">"{step.candidateThought}"</p>
                    )}
                  </div>
                )}
                
                {showMetrics && step.metrics && (
                  <div className="mt-3 bg-gray-50 px-3 py-2 rounded-lg">
                    <p className="text-xs text-gray-500">{step.metrics.label}</p>
                    <p className="text-lg font-bold text-masarna-orange">{step.metrics.value}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;
