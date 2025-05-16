
import { useState, useEffect } from 'react';
import { Users, Shield, BarChart3, Award, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const services = [
  {
    id: 1,
    tagline: "Manage smarter",
    title: "HR Admin & Recruiting",
    bulletPoints: [
      { text: "Hiring process streamlining", highlight: "streamlining" },
      { text: "Employee onboarding & offboarding", highlight: "onboarding & offboarding" },
      { text: "Benefits administration", highlight: "Benefits administration" },
      { text: "HR documentation & compliance", highlight: "documentation & compliance" }
    ],
    icon: Users,
    link: "/services/human-resources"
  },
  {
    id: 2,
    tagline: "Stay ahead",
    title: "Legal & Compliance",
    bulletPoints: [
      { text: "Entity formation and management", highlight: "Entity formation" },
      { text: "Regulatory compliance", highlight: "Regulatory compliance" },
      { text: "Contract review and management", highlight: "Contract review" },
      { text: "Risk assessment", highlight: "Risk assessment" }
    ],
    icon: Shield,
    link: "/services/compliance"
  },
  {
    id: 3,
    tagline: "Scale with confidence",
    title: "Finance Operations",
    bulletPoints: [
      { text: "Bookkeeping and accounting", highlight: "Bookkeeping" },
      { text: "Financial reporting", highlight: "Financial reporting" },
      { text: "Cash flow management", highlight: "Cash flow" },
      { text: "Budget planning and forecasting", highlight: "Budget planning" }
    ],
    icon: BarChart3,
    link: "/services/finance"
  },
  {
    id: 4,
    tagline: "Build for the future",
    title: "Equity & Growth",
    bulletPoints: [
      { text: "Equity plan management", highlight: "Equity plan" },
      { text: "Vesting schedule administration", highlight: "Vesting schedule" },
      { text: "Cap table management", highlight: "Cap table" },
      { text: "Growth strategy development", highlight: "Growth strategy" }
    ],
    icon: Award,
    link: "/services/growth"
  }
];

const ServicesSection = () => {
  const [visibleServices, setVisibleServices] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        const serviceId = parseInt(entry.target.getAttribute('data-service-id') || '0');
        if (entry.isIntersecting && !visibleServices.includes(serviceId)) {
          setTimeout(() => {
            setVisibleServices(prev => [...prev, serviceId]);
          }, index * 150); // Staggered animation
        }
      });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.service-card').forEach(el => observer.observe(el));
    
    return () => {
      document.querySelectorAll('.service-card').forEach(el => observer.unobserve(el));
    };
  }, [visibleServices]);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What We Handle</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            We take care of critical operational functions so you can focus on growing your startup.
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-masarna-orange mt-8 mb-12">
            Offload ops to your fractional operations team
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`service-card bg-white rounded-lg p-6 md:p-8 transition-all duration-500 border border-gray-100 shadow-sm hover:shadow-md hover:scale-[1.02] flex flex-col h-full ${
                visibleServices.includes(service.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-service-id={service.id}
            >
              <div className="w-16 h-16 mb-6 bg-masarna-orange/10 rounded-full flex items-center justify-center mx-auto">
                <service.icon className="w-8 h-8 text-masarna-orange" />
              </div>
              
              <span className="text-masarna-orange text-sm font-medium text-center block">{service.tagline}</span>
              <h3 className="text-xl font-bold my-3 text-gray-900 text-center">{service.title}</h3>
              
              <Separator className="my-4 bg-gray-100" />
              
              <ul className="space-y-2.5 mt-2 mb-4 flex-grow">
                {service.bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-masarna-orange" />
                    </span>
                    <span className="text-gray-700 text-sm leading-tight">
                      {point.text.split(point.highlight).map((part, i, array) => 
                        i < array.length - 1 ? (
                          <React.Fragment key={i}>
                            {part}<span className="font-medium text-gray-800">{point.highlight}</span>
                          </React.Fragment>
                        ) : part
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Link to={service.link} className="mt-4 inline-block self-center">
                <Button variant="link" className="text-masarna-orange p-0 hover:text-masarna-orange/80 hover:scale-105 transition-transform">
                  Learn more →
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
