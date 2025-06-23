import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import Image from 'next/image';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Startup Operations Blog - Expert Insights & Strategies",
      description: "Get expert insights on startup operations, HR, compliance, finance, and growth strategies from Masarna's team of experienced operators.",
      keywords: "startup blog, operations insights, HR strategies, compliance guide, startup finance, business operations, masarna blog"
    },
    revalidate: 86400 // Revalidate once per day
  };
};

interface BlogProps {
  title: string;
  description: string;
  keywords: string;
}

const Blog = ({ title, description, keywords }: BlogProps) => {
  // Updated blog posts with recent dates and SEO-focused content
  const blogPosts = [
    {
      title: 'Essential Operational Metrics Every Startup Should Track in 2025',
      excerpt: 'Discover the critical KPIs that successful startups monitor to ensure sustainable growth and operational excellence.',
      category: 'Operations',
      date: 'June 15, 2025',
      author: 'Alex Morgan',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      featured: true
    },
    {
      title: 'The Complete Guide to Startup Compliance in 2025',
      excerpt: 'Navigate the complex landscape of startup compliance with our comprehensive guide covering federal, state, and industry-specific requirements.',
      category: 'Compliance',
      date: 'June 10, 2025',
      author: 'Jordan Chen',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
    },
    {
      title: 'Fractional Leadership: Why Startups Are Choosing Expertise Over Full-Time Hires',
      excerpt: 'Learn why smart founders are leveraging fractional executives to access senior-level expertise without the full-time cost.',
      category: 'Leadership',
      date: 'June 5, 2025',
      author: 'Taylor Kim',
      imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop'
    },
    {
      title: 'HR Automation Tools That Actually Work for Startups',
      excerpt: 'Cut through the noise and discover the HR automation tools that provide real value for growing startups.',
      category: 'Human Resources',
      date: 'May 30, 2025',
      author: 'Jamie Rodriguez',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop'
    },
    {
      title: 'Financial Planning Mistakes That Kill Startups (And How to Avoid Them)',
      excerpt: 'Avoid common financial pitfalls that derail promising startups with our expert financial planning strategies.',
      category: 'Finance',
      date: 'May 25, 2025',
      author: 'Casey Johnson',
      imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop'
    },
    {
      title: 'Building Remote-First Operations That Scale',
      excerpt: 'Create operational systems that support remote teams and scale with your business growth.',
      category: 'Operations',
      date: 'May 20, 2025',
      author: 'Riley Smith',
      imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop'
    },
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Head>
        <title>{title} | Masarna</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://masarna.co/resources/blog" />
        <meta property="og:image" content={featuredPost?.imageUrl || "https://masarna.co/lovable-uploads/4c19cc81-9f30-4ff8-b639-79916ff68ecd.png"} />
        <link rel="canonical" href="https://masarna.co/resources/blog" />
      </Head>
      
      <PageLayout 
        title={title} 
        description={description}
        keywords={keywords}
      >
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-6">Startup Operations Insights</h1>
              <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
                Expert insights, strategies, and best practices from our team of operational 
                experts to help you build and scale your startup more efficiently. Stay ahead 
                with actionable advice on HR, compliance, finance, and growth operations.
              </p>
            </div>
            
            {/* Featured Post */}
            {featuredPost && (
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16 border border-gray-100">
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-64 md:h-auto">
                    <Image 
                      src={featuredPost.imageUrl} 
                      alt={`Featured article: ${featuredPost.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="text-sm text-masarna-teal mb-2">Featured • {featuredPost.date}</div>
                    <h2 className="text-2xl font-bold mb-4">{featuredPost.title}</h2>
                    <p className="text-gray-700 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {featuredPost.author}</span>
                      <Button className="bg-masarna-teal hover:bg-masarna-teal/90 text-white">
                        Read Article
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Blog Post Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {regularPosts.map((post, index) => (
                <article 
                  key={index} 
                  className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48 w-full">
                    <Image 
                      src={post.imageUrl} 
                      alt={`Article thumbnail: ${post.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium text-masarna-teal">{post.category}</span>
                      <time className="text-xs text-gray-500">{post.date}</time>
                    </div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <Button variant="ghost" className="text-masarna-teal p-0 hover:bg-transparent hover:text-masarna-teal hover:underline">
                        Read More →
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter Signup Section */}
            <div className="bg-gradient-to-r from-masarna-orange/10 to-masarna-teal/10 rounded-lg p-8 text-center mb-16">
              <h3 className="text-2xl font-bold mb-4">Stay Updated with Startup Operations Insights</h3>
              <p className="text-gray-700 mb-6">
                Get weekly insights on startup operations, compliance updates, and growth strategies 
                delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-masarna-orange focus:border-transparent"
                  aria-label="Email for newsletter subscription"
                />
                <Button className="bg-masarna-orange hover:bg-masarna-orange/90 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <CTASection 
          heading="Need personalized operational guidance?"
          description="Schedule a call with our operational experts to get customized advice for your startup's specific challenges and growth stage."
          buttonText="Book a Strategy Session"
        />
      </PageLayout>
    </>
  );
};

export default Blog;