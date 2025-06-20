import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: "Book a Free Ops Assessment",
    description: "We'll review your current back-office setup and identify what's slowing you down.",
    details: "Our team analyzes your operations, pinpoints bottlenecks, and creates a customized improvement plan."
  },
  {
    number: 2,
    title: "Meet Your Masarna Ops Manager",
    description: "You get a dedicated expert to proactively run and manage your internal operations.",
    details: "Your ops manager becomes an extension of your team, handling day-to-day operational tasks with expertise."
  },
  {
    number: 3,
    title: "Focus on Growth, We Handle the Rest",
    description: "From HR admin to vendor payments to cap table updates, we run your back office like clockwork.",
    details: "While you focus on strategic growth, we ensure your operations run efficiently and scale with your business."
  }
];

const HowItWorks = () => {
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const [animatedLine, setAnimatedLine] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const stepNumber = parseInt(entry.target.getAttribute('data-step') || '0');
        if (entry.isIntersecting && !visibleElements.includes(stepNumber)) {
          // Add a small delay for staggered animation
          setTimeout(() => {
            setVisibleElements(prev => [...prev, stepNumber]);
          }, stepNumber * 150);
        }
      });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.step-card').forEach(el => observer.observe(el));

    // Animate the line when section is visible
    const lineObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setAnimatedLine(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('how-it-works');
    if (section) {
      lineObserver.observe(section);
    }
    
    return () => {
      document.querySelectorAll('.step-card').forEach(el => observer.unobserve(el));
      if (section) {
        lineObserver.unobserve(section);
      }
    };
  }, [visibleElements]);

  return (
    <section id="how-it-works" className="py-20 bg-masarna-light-gray relative overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Your Back-Office Ops, Fully Handled</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our seamless process ensures your operations run efficiently while you focus on growing your business.
          </p>
          <div className="w-24 h-1 bg-[#f26522] mx-auto mt-6"></div>
        </div>
        
        <div className="relative">
          {/* Connection line with animated gradient effect */}
          <div className={`absolute top-0 bottom-0 left-1/2 w-1 md:w-1.5 bg-gradient-to-b from-[#f26522]/10 via-[#f26522]/30 to-[#f26522]/10 transform -translate-x-1/2 hidden md:block ${animatedLine ? 'after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-[#f26522]/40 after:animate-pulse' : ''}`}>
            {/* Animated dots traveling along the line */}
            <div className={`absolute top-0 h-4 w-4 left-1/2 -translate-x-1/2 -translate-y-1/2 ${animatedLine ? 'animate-bounce' : ''}`}>
              <div className="h-2 w-2 rounded-full bg-[#f26522] shadow-[0_0_8px_rgba(242,101,34,0.6)]"></div>
            </div>
            <div className={`absolute top-1/2 h-4 w-4 left-1/2 -translate-x-1/2 -translate-y-1/2 ${animatedLine ? 'animate-bounce' : ''} delay-700`}>
              <div className="h-2 w-2 rounded-full bg-[#f26522] shadow-[0_0_8px_rgba(242,101,34,0.6)]"></div>
            </div>
            <div className={`absolute bottom-0 h-4 w-4 left-1/2 -translate-x-1/2 translate-y-1/2 ${animatedLine ? 'animate-bounce' : ''} delay-1000`}>
              <div className="h-2 w-2 rounded-full bg-[#f26522] shadow-[0_0_8px_rgba(242,101,34,0.6)]"></div>
            </div>
          </div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`step-card relative ${
                  index % 2 === 0 ? 'md:pr-8 lg:pr-12 md:text-right md:ml-auto md:mr-[50%]' : 'md:pl-8 lg:pl-12 md:text-left md:mr-auto md:ml-[50%]'
                } md:w-[45%] mb-8 md:mb-20 transition-all duration-700 ${
                  visibleElements.includes(step.number) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                data-step={step.number}
              >
                {/* Step number circle with enhanced styling */}
                <div 
                  className={`absolute top-0 ${
                    index % 2 === 0 ? 'md:right-0 md:-mr-8 lg:-mr-12' : 'md:left-0 md:-ml-8 lg:-ml-12'
                  } -mt-2 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center z-10 
                  ${visibleElements.includes(step.number) ? 'shadow-[0_0_15px_rgba(242,101,34,0.2)]' : ''} 
                  transition-all duration-500 hover:scale-110`}
                >
                  <span className={`text-[#f26522] text-2xl font-bold ${visibleElements.includes(step.number) ? 'scale-100' : 'scale-0'} transition-transform duration-500 delay-300`}>
                    {step.number}
                  </span>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:border-[#f26522]/20 border border-transparent group">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#f26522] transition-colors">{step.title}</h3>
                  <p className="text-gray-700 mb-4">{step.description}</p>
                  <div className={`flex items-start gap-2 text-sm text-gray-600 ${visibleElements.includes(step.number) ? 'opacity-100' : 'opacity-0'} transition-opacity delay-500 duration-500`}>
                    <CheckCircle className="w-5 h-5 text-[#f26522] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <p>{step.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;