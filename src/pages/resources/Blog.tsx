import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CTASection from '@/components/CTASection';

const Blog = () => {
  // Sample blog posts for display
  const blogPosts = [
    {
      title: 'Building Scalable Operations from Day One',
      excerpt: 'Learn how to design your operations to scale with your business growth.',
      category: 'Operations',
      date: 'May 10, 2025',
      author: 'Alex Morgan',
      imageUrl: '/placeholder.svg'
    },
    {
      title: 'The ROI of Fractional Leadership',
      excerpt: 'How startups can benefit from experienced executives without the full-time cost.',
      category: 'Leadership',
      date: 'May 5, 2025',
      author: 'Jordan Chen',
      imageUrl: '/placeholder.svg'
    },
    {
      title: 'Streamlining Your HR Processes',
      excerpt: 'Effective strategies to optimize your human resources operations.',
      category: 'Human Resources',
      date: 'April 28, 2025',
      author: 'Taylor Kim',
      imageUrl: '/placeholder.svg'
    },
    {
      title: 'Financial Planning for Early-Stage Startups',
      excerpt: 'Key financial considerations for founders in the early stages.',
      category: 'Finance',
      date: 'April 20, 2025',
      author: 'Jamie Rodriguez',
      imageUrl: '/placeholder.svg'
    },
    {
      title: 'Building a Remote-First Culture',
      excerpt: 'How to create a thriving company culture with a distributed team.',
      category: 'Culture',
      date: 'April 15, 2025',
      author: 'Casey Johnson',
      imageUrl: '/placeholder.svg'
    },
    {
      title: 'The Future of Operations Management',
      excerpt: 'Trends and predictions for how operational excellence will evolve.',
      category: 'Trends',
      date: 'April 8, 2025',
      author: 'Riley Smith',
      imageUrl: '/placeholder.svg'
    },
  ];

  return (
    <PageLayout title="Blog" description="Insights and expertise from our operational experts">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Blog</h1>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl">
            Discover insights, strategies, and best practices from our team of operational 
            experts to help you build and scale your business more efficiently.
          </p>
          
          {/* Featured Post */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16 border border-gray-100">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-12">
                <img 
                  src="/placeholder.svg" 
                  alt="Featured blog post" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <div className="text-sm text-masarna-teal mb-2">Featured • May 15, 2025</div>
                <h2 className="text-2xl font-bold mb-4">Essential Operational Metrics Every Startup Should Track</h2>
                <p className="text-gray-700 mb-6">
                  Understanding and monitoring the right operational metrics can be the difference between 
                  sustainable growth and unexpected challenges. In this comprehensive guide, we break down 
                  the essential metrics that every startup should be tracking from day one.
                </p>
                <Button className="bg-masarna-teal hover:bg-masarna-teal/90 text-white">
                  Read Article
                </Button>
              </div>
            </div>
          </div>
          
          {/* Blog Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-masarna-teal">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <Button variant="ghost" className="text-masarna-teal p-0 hover:bg-transparent hover:text-masarna-teal/80 hover:underline">
                      Read More →
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <CTASection 
        heading="Want expert operational insights?"
        description="Schedule a call with our operational experts to get personalized advice based on the challenges your business is facing."
        buttonText="Book a Strategy Session"
      />
    </PageLayout>
  );
};

export default Blog;
