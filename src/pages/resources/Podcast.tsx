
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Podcast = () => {
  const featuredEpisodes = [
    {
      title: "The Operational DNA of Successful Startups",
      guest: "Maya Rodriguez, COO at ScaleUp Ventures",
      description: "Discussing the critical operational systems that allow startups to scale effectively.",
      duration: "45 min",
      date: "May 2, 2025"
    },
    {
      title: "Financial Strategy for Fundraising Success",
      guest: "Alex Thomson, Angel Investor",
      description: "What investors look for in your financial operations before funding your startup.",
      duration: "38 min",
      date: "April 18, 2025"
    },
  ];

  const recentEpisodes = [
    {
      title: "Building Remote Teams That Execute",
      guest: "James Wilson, CEO at DistributedWorks",
      description: "Strategies for building high-performing distributed teams.",
      duration: "42 min",
      date: "April 5, 2025"
    },
    {
      title: "The HR Revolution in Tech Startups",
      guest: "Sophia Chang, Chief People Officer",
      description: "Innovative approaches to people operations in high-growth environments.",
      duration: "50 min",
      date: "March 22, 2025"
    },
    {
      title: "From Founder to Operational Leader",
      guest: "Marcus Green, Serial Entrepreneur",
      description: "How founders can evolve into effective operational leaders as their companies grow.",
      duration: "46 min",
      date: "March 8, 2025"
    },
    {
      title: "Legal Frameworks for Startup Success",
      guest: "Rachel Martinez, Startup Attorney",
      description: "Creating legal foundations that protect and enable your business growth.",
      duration: "41 min",
      date: "February 25, 2025"
    },
  ];

  return (
    <PageLayout title="Podcast" description="Conversations with founders and operational leaders">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h1 className="text-4xl font-bold mb-3">Operations Decoded</h1>
              <p className="text-lg text-gray-700">
                A podcast about the operational strategies behind successful startups.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
                Apple Podcasts
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" />
                  <path d="M12 8v8" />
                  <path d="m8 12 8 0" />
                </svg>
                Spotify
              </Button>
            </div>
          </div>
          
          {/* Featured Episodes */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-masarna-teal">Featured Episodes</h2>
            <div className="space-y-6">
              {featuredEpisodes.map((episode, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{episode.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">with {episode.guest}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium px-2 py-1 bg-masarna-teal/10 text-masarna-teal rounded-full">
                        {episode.date}
                      </span>
                      <span className="text-xs text-gray-500">{episode.duration}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{episode.description}</p>
                  <Button className="bg-masarna-teal hover:bg-masarna-teal/90 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Listen Now
                  </Button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recent Episodes */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-masarna-teal">Recent Episodes</h2>
            <div className="space-y-4">
              {recentEpisodes.map((episode, index) => (
                <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-800">{episode.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">with {episode.guest}</p>
                      <p className="text-sm text-gray-600 mt-1 md:pr-4">{episode.description}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-3 md:mt-0">
                      <div className="flex flex-col items-end">
                        <span className="text-xs text-gray-500">{episode.date}</span>
                        <span className="text-xs text-gray-500">{episode.duration}</span>
                      </div>
                      <Button variant="outline" size="sm" className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-masarna-teal/10 p-8 md:p-12 rounded-xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Suggest a Topic or Guest</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Have a topic you'd like us to explore or know someone who would make a great guest? We'd love to hear from you!
            </p>
            <Button 
              className="bg-masarna-teal hover:bg-masarna-teal/90 text-white"
              onClick={() => window.location.href = '#contact'}
            >
              Submit a Suggestion
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Podcast;
