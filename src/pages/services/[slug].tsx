import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import CTASection from '@/components/CTASection';
import { initScrollAnimations } from '@/utils/scrollAnimations';
import dynamic from 'next/dynamic';

// Define the service pages data
const servicePages = [
  {
    slug: 'human-resources',
    title: 'Human Resources Services',
    subtitle: 'Empowering Your Team, Simplifying Your Operations',
    description: 'Our comprehensive HR solutions are designed to streamline your operations, ensure compliance, and foster a thriving workplace culture.',
    backLink: '/services',
    backLinkText: 'Explore All Services',
    Component: dynamic(() => import('@/pages/services/HumanResources')),
    metaTitle: 'HR Services for Startups | Masarna',
    metaDescription: 'Comprehensive HR solutions for startups including employee lifecycle management, payroll processing, and benefits administration.',
    metaKeywords: 'startup HR, human resources, employee management, payroll processing, benefits administration, HR compliance, startup culture'
  },
  {
    slug: 'finance',
    title: 'Finance Services',
    subtitle: 'Streamline Your Finances, Empower Your Growth',
    description: 'Our comprehensive finance services are designed to simplify your financial operations, ensure compliance, and support your business\'s growth trajectory.',
    backLink: '/services',
    backLinkText: 'Explore All Services',
    Component: dynamic(() => import('@/pages/services/Finance')),
    metaTitle: 'Financial Services for Startups | Masarna',
    metaDescription: 'Expert financial management services for startups including financial operations, revenue management, compliance, and strategic planning.',
    metaKeywords: 'startup finance, financial operations, revenue management, financial compliance, strategic financial planning, startup CFO'
  },
  {
    slug: 'compliance',
    title: 'Compliance Services',
    subtitle: 'Simplify Compliance, Strengthen Your Foundation',
    description: 'Our comprehensive compliance services are designed to manage the intricacies of legal requirements, allowing you to focus on your core business activities.',
    backLink: '/services',
    backLinkText: 'Explore All Services',
    Component: dynamic(() => import('@/pages/services/Compliance')),
    metaTitle: 'Compliance Services for Startups | Masarna',
    metaDescription: 'Comprehensive compliance management services for startups including regulatory adherence, risk mitigation, and documentation.',
    metaKeywords: 'startup compliance, regulatory compliance, risk mitigation, compliance documentation, legal compliance, startup legal'
  },
  {
    slug: 'strategy',
    title: 'Strategy Services',
    subtitle: 'Define Your Vision, Chart Your Path to Success',
    description: 'Our strategic planning and roadmap development services help startups define their vision, set clear objectives, and develop actionable plans to achieve their goals.',
    backLink: '/services',
    backLinkText: 'Explore All Services',
    Component: dynamic(() => import('@/pages/services/Strategy')),
    metaTitle: 'Strategic Planning Services for Startups | Masarna',
    metaDescription: 'Expert strategic planning services for startups including vision development, goal setting, product roadmaps, and market positioning.',
    metaKeywords: 'startup strategy, strategic planning, vision development, OKRs, product roadmap, market positioning, business strategy'
  },
  {
    slug: 'growth',
    title: 'Growth Services',
    subtitle: 'Accelerate Your Growth, Maximize Your Potential',
    description: 'Our growth and scaling services help ambitious startups accelerate their growth through strategic planning, market expansion, and optimized customer acquisition.',
    backLink: '/services',
    backLinkText: 'Explore All Services',
    Component: dynamic(() => import('@/pages/services/Growth')),
    metaTitle: 'Growth & Scaling Services for Startups | Masarna',
    metaDescription: 'Comprehensive growth services for startups including growth strategy development, customer acquisition optimization, and market expansion planning.',
    metaKeywords: 'startup growth, business scaling, customer acquisition, market expansion, growth metrics, startup KPIs, growth strategy'
  },
  {
    slug: 'operations',
    title: 'Operations Services',
    subtitle: 'Streamline Your Processes, Maximize Your Efficiency',
    description: 'Our operations management services help startups build scalable, efficient processes that support growth while reducing operational friction and costs.',
    backLink: '/services',
    backLinkText: 'Explore All Services',
    Component: dynamic(() => import('@/pages/services/Operations')),
    metaTitle: 'Operations Management Services for Startups | Masarna',
    metaDescription: 'Expert operations management services for startups including process optimization, systems integration, SOP development, and operational metrics.',
    metaKeywords: 'startup operations, business process optimization, systems integration, SOP development, operational metrics, efficiency improvement'
  }
];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = servicePages.map(service => ({
    params: { slug: service.slug }
  }));

  return {
    paths,
    fallback: false // Return 404 for any paths not defined above
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const serviceData = servicePages.find(service => service.slug === slug);

  if (!serviceData) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      ...serviceData
    },
    revalidate: 86400 // Revalidate once per day
  };
};

interface ServicePageProps {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  backLink: string;
  backLinkText: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

const ServicePage = ({
  title,
  subtitle,
  description,
  backLink,
  backLinkText,
  metaTitle,
  metaDescription,
  metaKeywords,
  slug
}: ServicePageProps) => {
  useEffect(() => {
    // Initialize scroll animations with staggered delay
    initScrollAnimations({ 
      threshold: 0.1,
      staggerDelay: true,
      staggerAmount: 120
    });
  }, []);

  // Dynamically import the service component based on slug
  const ServiceComponent = servicePages.find(service => service.slug === slug)?.Component;

  return (
    <PageLayout 
      title={metaTitle} 
      description={metaDescription}
      keywords={metaKeywords}
    >
      <ServiceHero
        title={title}
        subtitle={subtitle}
        description={description}
        backLink={backLink}
        backLinkText={backLinkText}
      />
      
      {ServiceComponent && <ServiceComponent />}
      
      <CTASection 
        heading={`Ready to enhance your ${title.toLowerCase().replace('services', 'operations')}?`}
        description={`Schedule a free consultation to discuss your specific ${slug.replace('-', ' ')} needs and how Masarna can help.`}
        buttonText={`Book a Free ${title.replace('Services', '')} Consultation`}
      />
    </PageLayout>
  );
};

export default ServicePage;