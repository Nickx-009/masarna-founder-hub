
import React from 'react';
import { cn } from '@/lib/utils';

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
  const isHorizontal = orientation === 'horizontal';
  
  if (isHorizontal) {
    return (
      <div className={`max-w-6xl mx-auto ${className}`}>
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-px bg-masarna-orange/30 z-0"></div>
          
          <div className="flex justify-between relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center reveal hover-scale px-4 ${
                  index === 0 ? 'pl-0' : index === steps.length - 1 ? 'pr-0' : ''
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
      </div>
    );
  }
  
  return (
    <div className={`max-w-5xl mx-auto ${className}`}>
      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-px bg-masarna-orange/30 z-0 hidden md:block"></div>
        
        <div className="space-y-12 md:space-y-0 relative z-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center md:items-start gap-6 reveal ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse text-right'
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-masarna-orange flex items-center justify-center text-white font-bold text-xl flex-shrink-0 md:mt-0">
                {step.icon || step.number}
              </div>
              <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
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
    </div>
  );
};

export default ProcessTimeline;
