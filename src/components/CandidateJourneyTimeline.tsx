
import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface TimelineStep {
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

interface CandidateJourneyTimelineProps {
  steps: TimelineStep[];
  className?: string;
  showEmotions?: boolean;
  showMetrics?: boolean;
}

const CandidateJourneyTimeline = ({
  steps,
  className = '',
  showEmotions = false,
  showMetrics = false
}: CandidateJourneyTimelineProps) => {
  const isMobile = useIsMobile();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Handle scrolling
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Update scroll indicators
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    
    // Update active step based on scroll position
    const stepWidth = scrollWidth / steps.length;
    const currentStep = Math.min(
      Math.floor((scrollLeft + (stepWidth / 2)) / stepWidth),
      steps.length - 1
    );
    setActiveStep(currentStep);
  };

  // Add scroll event listener
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll(); // Initialize
    }
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Mobile vertical layout
  if (isMobile) {
    return (
      <div className={cn("px-4 py-8", className)}>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-1 bg-masarna-orange/30 rounded-full"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-masarna-orange flex items-center justify-center text-white font-bold text-sm z-10 relative">
                    {step.icon || step.number}
                  </div>
                </div>
                
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-700 mb-2">{step.description}</p>
                  
                  {showEmotions && step.emotion && (
                    <div className="mt-2 bg-masarna-orange/5 px-3 py-2 rounded-lg">
                      <p className="text-sm font-medium text-masarna-orange">{step.emotion}</p>
                      {step.candidateThought && (
                        <p className="text-xs italic mt-1 text-gray-600">"{step.candidateThought}"</p>
                      )}
                    </div>
                  )}
                  
                  {showMetrics && step.metrics && (
                    <div className="mt-2 bg-gray-50 px-3 py-2 rounded-lg">
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
  }

  // Desktop horizontal layout
  return (
    <div className={cn("relative max-w-7xl mx-auto", className)}>
      {/* Navigation controls */}
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className={cn(
            "p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none transition-all",
            !canScrollLeft ? "opacity-50 cursor-not-allowed" : "text-gray-600"
          )}
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <p className="text-sm text-gray-500">Scroll to see all stages</p>
        <button 
          onClick={scrollRight}
          disabled={!canScrollRight}
          className={cn(
            "p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none transition-all",
            !canScrollRight ? "opacity-50 cursor-not-allowed" : "text-gray-600"
          )}
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      
      {/* Timeline */}
      <div className="relative mb-10">
        {/* Connecting line */}
        <div className="absolute top-12 left-0 h-1 w-full bg-masarna-orange/30 z-0 rounded-full"></div>

        {/* Scrollable container for timeline items */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto py-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style dangerouslySetInnerHTML={{ __html: `
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}} />

          {steps.map((step, index) => (
            <div 
              key={index} 
              className={cn(
                "flex flex-col items-center text-center snap-start",
                "min-w-[280px] first:pl-4 last:pr-4"
              )}
            >
              <div 
                className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 z-10",
                  "transition-all duration-300",
                  activeStep === index ? "bg-masarna-orange scale-110" : "bg-masarna-orange/70"
                )}
              >
                {step.icon || step.number}
              </div>
              
              <div className="w-full">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
                
                {showEmotions && step.emotion && (
                  <div className="mt-4 bg-masarna-orange/5 px-4 py-3 rounded-lg">
                    <p className="text-sm font-medium text-masarna-orange">{step.emotion}</p>
                    {step.candidateThought && (
                      <p className="text-xs italic mt-1 text-gray-600">"{step.candidateThought}"</p>
                    )}
                  </div>
                )}
                
                {showMetrics && step.metrics && (
                  <div className="mt-4 bg-gray-50 px-4 py-3 rounded-lg">
                    <p className="text-xs text-gray-500">{step.metrics.label}</p>
                    <p className="text-lg font-bold text-masarna-orange">{step.metrics.value}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Step indicators */}
      <div className="flex justify-center gap-2">
        {steps.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              activeStep === index ? "bg-masarna-orange w-6" : "bg-gray-300"
            )}
            onClick={() => {
              if (scrollContainerRef.current) {
                const scrollWidth = scrollContainerRef.current.scrollWidth;
                const position = (scrollWidth / steps.length) * index;
                scrollContainerRef.current.scrollTo({ left: position, behavior: 'smooth' });
              }
            }}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CandidateJourneyTimeline;
