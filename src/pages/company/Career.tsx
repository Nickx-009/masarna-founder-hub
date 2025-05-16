
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from "@/components/ui/button";

const Career = () => {
  const openPositions = [
    {
      id: 1,
      title: "Chief of Staff",
      type: "Full-time",
      location: "Remote",
      description: "We're looking for an experienced Chief of Staff to join our team and help us scale our operations."
    },
    {
      id: 2,
      title: "Finance Manager",
      type: "Part-time",
      location: "Remote",
      description: "Join our team as a Finance Manager and help our clients optimize their financial operations."
    },
    {
      id: 3,
      title: "HR Specialist",
      type: "Contract",
      location: "Remote",
      description: "We're seeking an HR Specialist to support our clients with talent acquisition and HR operations."
    }
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Team</h1>
          <p className="text-lg text-gray-700 mb-8">
            At Masarna, we're building the future of operational excellence for startups and scaleups.
            Join our team of experienced operators and help companies reach their full potential.
          </p>

          <div className="bg-gray-50 rounded-lg p-8 my-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Work With Us?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-lg text-masarna-teal mb-2">Impact-Driven Work</h3>
                <p className="text-gray-600">
                  Work directly with founders and leaders to make a meaningful impact on growing companies.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg text-masarna-teal mb-2">Flexible Work Model</h3>
                <p className="text-gray-600">
                  We embrace remote work and flexible schedules to help you achieve work-life balance.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg text-masarna-teal mb-2">Continuous Learning</h3>
                <p className="text-gray-600">
                  Access professional development resources and learn from experienced peers.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg text-masarna-teal mb-2">Diverse Experience</h3>
                <p className="text-gray-600">
                  Work with companies across different industries and stages to broaden your expertise.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-12 mb-6">Open Positions</h2>
          
          {openPositions.length > 0 ? (
            <div className="space-y-6">
              {openPositions.map(job => (
                <div key={job.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-xl text-gray-800">{job.title}</h3>
                  <div className="flex gap-4 mt-2 mb-4">
                    <span className="text-sm text-gray-600">{job.type}</span>
                    <span className="text-sm text-gray-600">{job.location}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  <Button className="bg-masarna-teal hover:bg-masarna-teal/90 text-white">Apply Now</Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-600 mb-4">We don't have any open positions right now, but we're always looking for talent.</p>
              <Button variant="outline">Submit Your Resume</Button>
            </div>
          )}

          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Don't See a Position That Fits?</h2>
            <p className="text-gray-700 mb-6">
              We're always on the lookout for talented individuals. Send us your resume and let us know how you can contribute to our mission.
            </p>
            <Button variant="outline" className="border-masarna-teal text-masarna-teal hover:bg-masarna-teal/10">
              Send Open Application
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Career;
