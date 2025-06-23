import React from 'react';
import { GetStaticProps } from 'next';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import CTASection from '@/components/CTASection';
import Head from 'next/head';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Startup Operations Newsletter - Monthly Insights",
      description: "Subscribe to our monthly newsletter for practical operational advice, templates, and insights delivered straight to your inbox.",
      keywords: "startup newsletter, operations insights, monthly updates, startup advice, operational excellence, business growth, startup resources"
    },
    revalidate: 86400 // Revalidate once per day
  };
};

interface NewsletterProps {
  title: string;
  description: string;
  keywords: string;
}

const Newsletter = ({ title, description, keywords }: NewsletterProps) => {
  const latestIssues = [
    {
      title: "Building Operational Excellence from Day One",
      date: "May 2025",
      description: "How early-stage startups can build scalable operational systems.",
      highlights: ["The 3 operational pillars every startup needs", "Case study: How TechGrowth scaled to 100 employees", "Template: Operational readiness assessment"]
    },
    {
      title: "Financial Operations That Impress Investors",
      date: "April 2025",
      description: "Setting up financial systems that support fundraising efforts.",
      highlights: ["Key financial metrics investors look for", "Interview with a VC on financial red flags", "Tool spotlight: Financial forecasting templates"]
    },
    {
      title: "Building a Culture That Scales",
      date: "March 2025",
      description: "HR strategies for maintaining culture through rapid growth.",
      highlights: ["Remote-first culture building blocks", "Expert interview: Chief People Officer at ScaleUp", "Resource: Culture documentation template"]
    },
  ];

  return (
    <>
      <Head>
        <title>{title} | Masarna</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://masarna.co/resources/newsletter" />
        <meta property="og:image" content="https://masarna.co/lovable-uploads/4c19cc81-9f30-4ff8-b639-79916ff68ecd.png" />
        <link rel="canonical" href="https://masarna.co/resources/newsletter" />
      </Head>
      
      <PageLayout 
        title={title} 
        description={description}
        keywords={keywords}
      >
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-6">Operational Insights Newsletter</h1>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Join thousands of founders and operators receiving practical operational advice, templates, and insights delivered straight to your inbox each month.
              </p>
              
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 max-w-xl mx-auto">
                <h2 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="text-sm text-gray-700 block mb-1">First Name</label>
                      <Input id="firstName" placeholder="First Name" aria-label="First Name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="text-sm text-gray-700 block mb-1">Last Name</label>
                      <Input id="lastName" placeholder="Last Name" aria-label="Last Name" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm text-gray-700 block mb-1">Email Address</label>
                    <Input id="email" type="email" placeholder="you@example.com" aria-label="Email Address" />
                  </div>
                  <div>
                    <label htmlFor="company" className="text-sm text-gray-700 block mb-1">Company (Optional)</label>
                    <Input id="company" placeholder="Your Company" aria-label="Company Name (Optional)" />
                  </div>
                  <Button className="w-full bg-masarna-teal hover:bg-masarna-teal/90 text-white mt-2">
                    Subscribe to Newsletter
                  </Button>
                  <p className="text-xs text-gray-500 mt-2">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Latest Issues */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-masarna-teal">Latest Issues</h2>
              <div className="space-y-8">
                {latestIssues.map((issue, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{issue.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{issue.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{issue.description}</p>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">In this issue:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {issue.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="text-sm text-gray-600">{highlight}</li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" className="text-masarna-teal border-masarna-teal">
                      Read Issue
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-masarna-teal/10 p-8 md:p-12 rounded-xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Have a topic suggestion?</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Is there a specific operational challenge you'd like us to address in an upcoming newsletter?
              </p>
              <Button 
                className="bg-masarna-teal hover:bg-masarna-teal/90 text-white"
                onClick={() => window.location.href = '#contact'}
              >
                Suggest a Topic
              </Button>
            </div>
          </div>
        </div>
        
        <CTASection 
          heading="Need personalized operational guidance?"
          description="Subscribe to our newsletter for insights, or book a call with our team for tailored advice specific to your business challenges."
          buttonText="Book a Consultation Call"
        />
      </PageLayout>
    </>
  );
};

export default Newsletter;