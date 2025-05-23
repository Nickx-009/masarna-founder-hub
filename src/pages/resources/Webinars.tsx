import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CTASection from '@/components/CTASection';

const Webinars = () => {
  const upcomingWebinars = [
    {
      title: "Building a Scalable HR Function from Day One",
      date: "May 25, 2025",
      time: "11:00 AM PT",
      speaker: "Sarah Johnson, Head of HR Strategy",
      description: "Learn how to build HR systems that scale with your company from the start.",
    },
    {
      title: "Financial Modeling for Pre-Seed Startups",
      date: "June 2, 2025",
      time: "10:00 AM PT",
      speaker: "Michael Chen, Fractional CFO",
      description: "A practical guide to creating your first financial models before raising capital.",
    },
  ];

  const pastWebinars = [
    {
      title: "Operational Excellence: From Chaos to Control",
      date: "April 10, 2025",
      speaker: "David Rivera, COO",
      description: "How to implement systems and processes that bring order to startup chaos.",
      recording: true,
    },
    {
      title: "Legal Essentials for Early-Stage Startups",
      date: "March 15, 2025",
      speaker: "Priya Sharma, Legal Counsel",
      description: "Navigate the legal requirements of launching and growing your startup.",
      recording: true,
    },
    {
      title: "Building Your Startup's Financial Roadmap",
      date: "February 28, 2025",
      speaker: "Tom Williams, Fractional CFO",
      description: "Create a financial strategy that supports your business goals.",
      recording: true,
    },
    {
      title: "Remote-First Operations: Best Practices",
      date: "January 20, 2025",
      speaker: "Elena Gonzalez, Operations Director",
      description: "Build effective systems for remote and distributed teams.",
      recording: true,
    },
  ];

  return (
    <PageLayout title="Webinars" description="Educational sessions from industry experts">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Webinars</h1>
          <p className="text-lg text-gray-700 mb-12">
            Learn from industry experts and operational leaders through our educational webinar series focused on startups and scaling businesses.
          </p>
          
          {/* Upcoming Webinars */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-masarna-teal">Upcoming Webinars</h2>
            <div className="space-y-6">
              {upcomingWebinars.map((webinar, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{webinar.title}</h3>
                    <div className="flex items-center mt-2 md:mt-0">
                      <span className="text-sm font-medium px-3 py-1 bg-masarna-teal/10 text-masarna-teal rounded-full">
                        {webinar.date} • {webinar.time}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Presented by: {webinar.speaker}</p>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  <Button className="bg-masarna-teal hover:bg-masarna-teal/90 text-white">
                    Register Now
                  </Button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Past Webinars */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-masarna-teal">Past Webinars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastWebinars.map((webinar, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-medium mb-2 text-gray-800">{webinar.title}</h3>
                  <p className="text-sm text-gray-500 mb-1">{webinar.date} • {webinar.speaker}</p>
                  <p className="text-sm text-gray-600 mb-4">{webinar.description}</p>
                  <Button variant="outline" size="sm" className="text-masarna-teal border-masarna-teal hover:bg-masarna-teal/10">
                    {webinar.recording ? "Watch Recording" : "View Details"}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <CTASection 
        heading="Want to learn from our experts live?"
        description="Register for our upcoming webinars or request a topic for future sessions. Get your operational questions answered by industry experts."
        buttonText="Register for Next Webinar"
      />
    </PageLayout>
  );
};

export default Webinars;
