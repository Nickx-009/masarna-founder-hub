
import React from 'react';
import { Hexagon, Users, Lightbulb, Target, Clock, Shield, Sparkles } from 'lucide-react';

const values = [
  {
    title: 'Operational Excellence',
    description: 'We believe great operations are the backbone of successful companies.',
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: 'Founder First',
    description: 'We work to support founders\' visions and help them achieve their goals.',
    icon: <Users className="w-6 h-6" />
  },
  {
    title: 'Results Driven',
    description: 'We measure our success by the impact we create for our clients.',
    icon: <Target className="w-6 h-6" />
  },
  {
    title: 'Efficiency',
    description: 'We value time and resources by implementing streamlined processes.',
    icon: <Clock className="w-6 h-6" />
  },
  {
    title: 'Trust & Reliability',
    description: 'We build lasting relationships through consistency and transparency.',
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: 'Innovation',
    description: 'We continuously evolve our approaches to stay ahead of industry trends.',
    icon: <Lightbulb className="w-6 h-6" />
  }
];

const ValuesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These core principles guide our work and shape how we support our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="reveal group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-masarna-orange/80 to-masarna-teal/80 rounded-xl transform rotate-3 scale-[0.97] opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"></div>
                <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 p-6 h-full border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="relative">
                      <Hexagon className="w-12 h-12 text-masarna-orange opacity-20 absolute" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold ml-4 text-gray-800">{value.title}</h3>
                  </div>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
