import React from 'react';

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

interface ProcessStepsProps {
  steps: ProcessStep[];
  title?: string;
}

const ProcessSteps = ({ steps, title }: ProcessStepsProps) => {
  return (
    <div className="max-w-5xl mx-auto">
      {title && <h2 className="text-3xl font-bold mb-12 text-center reveal">{title}</h2>}
      
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
                {step.number}
              </div>
              <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;