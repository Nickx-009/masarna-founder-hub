
import React from 'react';
import PageLayout from '@/components/PageLayout';

const AboutUs = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Masarna</h1>
          <p className="text-lg text-gray-700 mb-8">
            We help startups and scaleups grow with fractional leadership and operational support.
            Our mission is to enable founders to build sustainable businesses without the overhead
            of a full management team.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-12 mb-4">Our Story</h2>
          <p className="text-gray-700 mb-6">
            Masarna was founded in 2022 by a team of experienced operators who saw the challenges
            that early-stage companies faced when trying to scale their operations. Our founders
            have worked with dozens of startups and recognized a pattern: companies need experienced
            leadership, but can't always afford full-time executives.
          </p>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-12 mb-4">Our Values</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <div className="bg-masarna-teal rounded-full w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-medium text-lg">Operational Excellence</h3>
                <p className="text-gray-600">We believe that great operations are the backbone of successful companies.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="bg-masarna-teal rounded-full w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-medium text-lg">Founder First</h3>
                <p className="text-gray-600">We work to support founders' visions and help them achieve their goals.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="bg-masarna-teal rounded-full w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-medium text-lg">Results Driven</h3>
                <p className="text-gray-600">We measure our success by the impact we create for our clients.</p>
              </div>
            </li>
          </ul>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-12 mb-4">Our Team</h2>
          <p className="text-gray-700 mb-8">
            Our team consists of experienced operators who have scaled companies across various industries.
            We bring decades of combined experience to help your business succeed.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Team member placeholders */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="text-center">
                <div className="bg-gray-200 rounded-full w-48 h-48 mx-auto mb-4"></div>
                <h3 className="font-semibold text-lg">Team Member {i}</h3>
                <p className="text-gray-600">Position</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
