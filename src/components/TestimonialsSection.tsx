
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

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
  }
];

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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

  useEffect(() => {
    // Auto-rotate testimonials every 5 seconds
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className={`py-20 bg-gradient-to-br from-masarna-teal/5 to-masarna-teal/10 transition-opacity duration-1000 ${visibleSection ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Founders Love Masarna</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what startup founders have to say about working with us.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute top-0 left-0 w-full transition-all duration-700 ${
                  index === activeTestimonial 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-masarna-teal">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-lg md:text-xl text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                      <Separator className="mb-4" />
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeTestimonial ? 'bg-masarna-teal scale-125' : 'bg-gray-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              className="bg-masarna-teal hover:bg-masarna-teal/90 text-white px-6 py-5 rounded-lg"
              onClick={() => window.location.href = '#contact'}
            >
              Join Our Happy Clients
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
