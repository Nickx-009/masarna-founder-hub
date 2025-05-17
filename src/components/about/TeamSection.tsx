
import React, { useState } from 'react';
import { LinkedIn, Mail, Coffee, Bike, Headphones, Mountains, Book, Plane } from 'lucide-react';

// Sample team data - replace with actual team members
const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    bio: 'Former operations lead at two successful startups. Passionate about helping founders scale efficiently.',
    funFact: 'Makes her own kombucha',
    funFactIcon: <Coffee className="w-4 h-4" />,
    linkedin: 'https://linkedin.com/'
  },
  {
    name: 'David Chen',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Streamlined operations for 15+ tech startups. Expert in creating systems that scale.',
    funFact: 'Competitive cyclist',
    funFactIcon: <Bike className="w-4 h-4" />,
    linkedin: 'https://linkedin.com/'
  },
  {
    name: 'Priya Sharma',
    role: 'Finance Lead',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Former CFO with experience managing finances for rapidly growing startups. MBA from Wharton.',
    funFact: 'Podcast addict',
    funFactIcon: <Headphones className="w-4 h-4" />,
    linkedin: 'https://linkedin.com/'
  },
  {
    name: 'James Wilson',
    role: 'Legal & Compliance',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Corporate attorney with a focus on startup law. Helps companies navigate complex regulatory environments.',
    funFact: 'Weekend hiker',
    funFactIcon: <Mountains className="w-4 h-4" />,
    linkedin: 'https://linkedin.com/'
  },
  {
    name: 'Elena Rodriguez',
    role: 'HR Director',
    image: 'https://images.unsplash.com/photo-1567532939604-b41b3fd74a1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Specialist in building HR systems and culture for fast-growing teams. Previously at Stripe and Airbnb.',
    funFact: 'Reads 50 books yearly',
    funFactIcon: <Book className="w-4 h-4" />,
    linkedin: 'https://linkedin.com/'
  },
  {
    name: 'Marcus Taylor',
    role: 'Growth Strategist',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Helped scale multiple SaaS companies from seed to Series B. Focused on sustainable growth models.',
    funFact: 'Visited 42 countries',
    funFactIcon: <Plane className="w-4 h-4" />,
    linkedin: 'https://linkedin.com/'
  },
];

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Seasoned operators who understand the challenges of building and scaling startups.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="reveal"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl relative group">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-5 transition-opacity duration-300 ${hoveredMember === index ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex items-center gap-2 text-white">
                      {member.funFactIcon}
                      <p className="text-sm font-light">{member.funFact}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-masarna-orange font-medium">{member.role}</p>
                  
                  <p className="mt-3 text-gray-600 text-sm">
                    {member.bio}
                  </p>
                  
                  <div className="mt-4 flex space-x-3">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 hover:bg-masarna-orange/10 rounded-full transition-colors"
                    >
                      <LinkedIn className="w-5 h-5 text-gray-600 hover:text-masarna-orange" />
                    </a>
                    <a 
                      href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@masarna.com`}
                      className="p-2 bg-gray-100 hover:bg-masarna-orange/10 rounded-full transition-colors"
                    >
                      <Mail className="w-5 h-5 text-gray-600 hover:text-masarna-orange" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
