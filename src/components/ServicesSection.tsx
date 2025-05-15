
import { useState, useEffect } from 'react';
import { Users, Shield, BarChart3, Award } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "HR Admin & Fractional Recruiting",
    description: "Streamline your hiring process, onboarding, benefits administration, and employee management.",
    icon: Users,
  },
  {
    id: 2,
    title: "Compliance",
    description: "Stay compliant with ever-changing regulations across jurisdictions, from entity formation to reporting.",
    icon: Shield,
  },
  {
    id: 3,
    title: "Finance Operations",
    description: "Manage your financial processes efficiently, from bookkeeping and accounting to financial reporting.",
    icon: BarChart3,
  },
  {
    id: 4,
    title: "Equity Support",
    description: "Handle equity plans, grants, vesting schedules, and related documentation with precision.",
    icon: Award,
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
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We take care of critical operational functions so you can focus on growing your startup.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`service-card bg-white rounded-lg p-8 transition-all duration-700 border border-gray-100 shadow-sm hover:shadow-md ${
                visibleServices.includes(service.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-service-id={service.id}
            >
              <div className="w-16 h-16 mb-6 bg-masarna-teal/10 rounded-full flex items-center justify-center">
                <service.icon className="w-8 h-8 text-masarna-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
