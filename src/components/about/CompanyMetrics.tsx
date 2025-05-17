
import React, { useState, useEffect, useRef } from 'react';
import { BarChart } from 'lucide-react';

const metrics = [
  {
    value: 50,
    label: 'Startups Supported',
    description: 'Across various industries and growth stages'
  },
  {
    value: 98,
    label: 'Client Satisfaction',
    suffix: '%',
    description: 'Based on quarterly client feedback surveys'
  },
  {
    value: 15,
    label: 'Expert Team Members',
    description: 'With specialized knowledge across business functions'
  },
  {
    value: 3,
    label: 'Global Offices',
    description: 'Supporting clients across multiple time zones'
  }
];

const CompanyMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState<number[]>(metrics.map(() => 0));
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const intervals = metrics.map((metric, index) => {
      return setInterval(() => {
        setCounters(prev => {
          const newCounters = [...prev];
          if (newCounters[index] < metric.value) {
            const increment = Math.max(1, Math.floor(metric.value / 30));
            newCounters[index] = Math.min(
              newCounters[index] + increment, 
              metric.value
            );
          }
          return newCounters;
        });
      }, 50);
    });
    
    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isVisible]);
  
  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="p-3 rounded-full bg-masarna-orange/10">
              <BarChart className="w-6 h-6 text-masarna-orange" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">By the Numbers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our impact and growth over the years.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <div key={index} className="reveal">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold text-masarna-orange mb-2 flex items-end">
                  {counters[index]}{metric.suffix || ''}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{metric.label}</h3>
                <p className="text-gray-600 text-sm">{metric.description}</p>
                
                <div className="mt-4 w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                  <div 
                    className="bg-masarna-orange h-full rounded-full" 
                    style={{ 
                      width: isVisible ? '100%' : '0%',
                      transition: 'width 1.5s ease-in-out'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 italic">
            "We're proud of what we've accomplished, but we're just getting started.
            Our mission is to empower the next generation of innovative companies."
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyMetrics;
