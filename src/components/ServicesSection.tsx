
import { useState, useEffect } from 'react';
import { Users, Shield, BarChart3, Award, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    tagline: "Manage smarter",
    title: "HR Admin & Recruiting",
    bulletPoints: [
      "Hiring process streamlining",
      "Employee onboarding & offboarding",
      "Benefits administration",
      "HR documentation & compliance"
    ],
    icon: Users,
    link: "/services/human-resources"
  },
  {
    id: 2,
    tagline: "Stay ahead",
    title: "Legal & Compliance",
    bulletPoints: [
      "Entity formation and management",
      "Regulatory compliance",
      "Contract review and management",
      "Risk assessment"
    ],
    icon: Shield,
    link: "/services/compliance"
  },
  {
    id: 3,
    tagline: "Scale with confidence",
    title: "Finance Operations",
    bulletPoints: [
      "Bookkeeping and accounting",
      "Financial reporting",
      "Cash flow management",
      "Budget planning and forecasting"
    ],
    icon: BarChart3,
    link: "/services/finance"
  },
  {
    id: 4,
    tagline: "Build for the future",
    title: "Equity & Growth",
    bulletPoints: [
      "Equity plan management",
      "Vesting schedule administration",
      "Cap table management",
      "Growth strategy development"
    ],
    icon: Award,
    link: "/services/growth"
  }
];

const ServicesSection = () => {
  const [visibleServices, setVisibleServices] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const serviceId = parseInt(entry.target.getAttribute('data-service-id') || '0');
        if (entry.isIntersecting && !visibleServices.includes(serviceId)) {
          setVisibleServices(prev => [...prev, serviceId]);
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
              className={`service-card bg-white rounded-lg p-8 transition-all duration-700 border border-gray-100 shadow-sm hover:shadow-md flex flex-col ${
                visibleServices.includes(service.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-service-id={service.id}
            >
              <div className="w-16 h-16 mb-6 bg-masarna-orange/10 rounded-full flex items-center justify-center">
                <service.icon className="w-8 h-8 text-masarna-orange" />
              </div>
              
              <span className="text-masarna-orange text-sm font-medium">{service.tagline}</span>
              <h3 className="text-xl font-bold my-3 text-gray-900">{service.title}</h3>
              
              <ul className="space-y-3 my-4 flex-grow">
                {service.bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-masarna-orange mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
              
              <Link to={service.link} className="mt-4 inline-block">
                <Button variant="link" className="text-masarna-orange p-0 hover:text-masarna-orange/80">
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
