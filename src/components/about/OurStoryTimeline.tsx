
import React from 'react';
import { CalendarDays, Award, Rocket, Users, Globe } from 'lucide-react';

const timelineData = [
  {
    year: '2024',
    title: 'Masarna Founded',
    description: 'Founded by former startup operators who understand the unique challenges of building and scaling companies.',
    icon: <CalendarDays className="w-6 h-6 text-white" />
  },
  {
    year: '2024',
    title: 'First 10 Clients',
    description: 'Reached our first milestone of helping 10 startups streamline their operations and accelerate growth.',
    icon: <Award className="w-6 h-6 text-white" />
  },
  {
    year: '2024',
    title: 'Team Expansion',
    description: 'Expanded our team with experts across HR, Finance, Legal, and Operations to better serve our clients.',
    icon: <Users className="w-6 h-6 text-white" />
  },
  {
    year: '2025',
    title: 'Global Reach',
    description: 'Started working with clients across 3 continents, helping startups scale internationally.',
    icon: <Globe className="w-6 h-6 text-white" />
  },
  {
    year: '2025',
    title: 'Looking Forward',
    description: 'Continuing to build innovative operational solutions to empower the next generation of startups.',
    icon: <Rocket className="w-6 h-6 text-white" />
  }
];

const OurStoryTimeline = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Story</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The journey that brought us here and the milestones that shaped our mission.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {timelineData.map((item, index) => (
            <div key={index} className="reveal mb-12 relative">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="flex-none mr-0 md:mr-6 mb-4 md:mb-0">
                  <div className="bg-masarna-orange text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>
                </div>
                
                <div className={`ml-0 md:ml-6 pl-6 md:pl-0 border-l-2 md:border-l-0 border-masarna-orange/30 relative ${index !== timelineData.length - 1 ? 'pb-12 md:pb-0' : ''}`}>
                  {/* Only show connecting line if not the last item */}
                  {index !== timelineData.length - 1 && (
                    <div className="hidden md:block absolute h-full w-0.5 bg-masarna-orange/30 top-16 left-8"></div>
                  )}
                  
                  <span className="text-sm font-semibold text-masarna-orange tracking-wider">{item.year}</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStoryTimeline;
