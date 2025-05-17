
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';

// Expanded testimonials array with 6 entries
const testimonials = [
  {
    id: 1,
    quote: "Masarna has been a game-changer for our startup. Their operational support allowed us to focus on product development while they handled the behind-the-scenes work flawlessly.",
    name: "Sarah Johnson",
    role: "CEO, TechNova",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    id: 2,
    quote: "Working with Masarna freed up 15+ hours per week that I was spending on operational tasks. Now I can focus on scaling our business and meeting with investors.",
    name: "Michael Chen",
    role: "Founder, GrowthLab",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    id: 3,
    quote: "Their expertise in compliance saved us from potential regulatory issues during our expansion. Masarna doesn't just execute tasks—they're true strategic partners.",
    name: "Alicia Martinez",
    role: "COO, FinEdge",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    id: 4,
    quote: "Since partnering with Masarna, our operational efficiency has increased by 40%. They streamlined our processes in ways I didn't think were possible.",
    name: "Daniel Kwon",
    role: "CTO, Vertex AI",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    id: 5,
    quote: "Delegating our HR and finance operations to Masarna was the best decision we made last year. It's like having an expert team without the overhead.",
    name: "Elena Rodriguez",
    role: "Founder, Lumina Health",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    id: 6,
    quote: "As a solo founder, I was drowning in administrative work. Masarna stepped in and transformed how I operate. Now I actually have time to think strategically.",
    name: "Ryan Parker",
    role: "CEO, Momentum SaaS",
    image: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80"
  }
];

const TestimonialsSection = () => {
  const [visibleSection, setVisibleSection] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleSection(true);
      }
    }, { threshold: 0.2 });
    
    const section = document.querySelector('#testimonials');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Single testimonial card component for cleaner code
  const TestimonialCard = ({ quote, name, role, image }: {
    quote: string;
    name: string;
    role: string;
    image: string;
  }) => (
    <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <p className="text-gray-700 italic mb-6 text-base leading-relaxed">"{quote}"</p>
        <div className="flex items-center">
          <Avatar className="h-10 w-10 border-2 border-masarna-orange">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
            <p className="text-gray-600 text-xs">{role}</p>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <section 
      id="testimonials" 
      className={`py-20 bg-gradient-to-br from-masarna-orange/5 to-masarna-orange/10 transition-opacity duration-1000 ${visibleSection ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-masarna-orange font-medium mb-2">Hear from those who've partnered with Masarna</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Founders & Executives love handing off operations to Masarna
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            See the impact our operational support has made for growing businesses
          </p>
        </div>
        
        {/* Grid layout for testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-masarna-orange hover:bg-masarna-orange/90 text-white px-6 py-5 rounded-lg"
            onClick={() => window.location.href = '#contact'}
          >
            See more client stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
