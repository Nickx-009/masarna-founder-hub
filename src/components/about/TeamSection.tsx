import React, { useState } from 'react';
import { Linkedin, Mail, Coffee, Bike, Headphones, Mountain, Book, Plane } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Sample team data - replace with actual team members
const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: '/lovable-uploads/cdd76ebf-239b-4d54-8d69-6b920bec1ba6.png',
    bio: 'Former operations lead at two successful startups. Passionate about helping founders scale efficiently.',
    funFact: 'Makes her own kombucha',
    funFactIcon: <Coffee className="w-4 h-4" />,
    linkedin: 'https://linkedin.com/company/masarna1'
  },
  {
    name: 'David Chen',
    role: 'Head of Operations',
    image: '/lovable-uploads/b49dc31a-e3c1-4deb-810d-518f9f7f937d.png',
    bio: 'Streamlined operations for 15+ tech startups. Expert in creating systems that scale.',
    funFact: 'Competitive cyclist',
    funFactIcon: <Bike className="w-4 h-4" />,
    linkedin: 'https://linkedin.com/company/masarna1'
  },
  {
    name: 'Priya Sharma',
    role: 'Finance Lead',
    image: '/lovable-uploads/c95bc8af-9b36-41a9-a4e8-62e111ab4106.png',
    bio: 'Former CFO with experience managing finances for rapidly growing startups. MBA from Wharton.',
    funFact: 'Podcast addict',
    funFactIcon: <Headphones className="w-4 h-4" />,
    linkedin: 'https://linkedin.com/company/masarna1'
  },
  {
    name: 'James Wilson',
    role: 'Legal & Compliance',
    image: '/lovable-uploads/f8b1908a-4e43-48f0-ab52-5a4fc742395c.png',
    bio: 'Corporate attorney with a focus on startup law. Helps companies navigate complex regulatory environments.',
    funFact: 'Weekend hiker',
    funFactIcon: <Mountain className="w-4 h-4" />,
    linkedin: 'https://linkedin.com/company/masarna1'
  },
  {
    name: 'Elena Rodriguez',
    role: 'HR Director',
    image: '/lovable-uploads/8b23f5d8-91cc-4d28-a905-cc6bc95fcd36.png',
    bio: 'Specialist in building HR systems and culture for fast-growing teams. Previously at Stripe and Airbnb.',
    funFact: 'Reads 50 books yearly',
    funFactIcon: <Book className="w-4 h-4" />,
    linkedin: 'https://linkedin.com/company/masarna1'
  },
  {
    name: 'Marcus Taylor',
    role: 'Growth Strategist',
    image: '/placeholder.svg',
    bio: 'Helped scale multiple SaaS companies from seed to Series B. Focused on sustainable growth models.',
    funFact: 'Visited 42 countries',
    funFactIcon: <Plane className="w-4 h-4" />,
    linkedin: 'https://linkedin.com/company/masarna1'
  },
];

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  
  // Function to generate initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

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
                <div className="h-64 relative overflow-hidden flex items-center justify-center bg-gradient-to-b from-masarna-orange/10 to-masarna-orange/5 p-6">
                  {member.image !== '/placeholder.svg' ? (
                    <div className="w-40 h-40 relative">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover object-center rounded-full border-4 border-white shadow-lg"
                      />
                    </div>
                  ) : (
                    <Avatar className="w-40 h-40 border-4 border-white shadow-lg">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="text-4xl font-bold bg-masarna-orange text-white">
                        {getInitials(member.name)}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  
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
                      <Linkedin className="w-5 h-5 text-gray-600 hover:text-masarna-orange" />
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
