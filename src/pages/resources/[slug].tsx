import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import PageLayout from '@/components/PageLayout';
import CTASection from '@/components/CTASection';
import dynamic from 'next/dynamic';

// Define the resource pages data
const resourcePages = [
  {
    slug: 'blog',
    title: 'Startup Operations Insights',
    Component: dynamic(() => import('@/pages/resources/Blog')),
    metaTitle: 'Startup Operations Blog - Expert Insights & Strategies',
    metaDescription: 'Get expert insights on startup operations, HR, compliance, finance, and growth strategies from Masarna\'s team of experienced operators.',
    metaKeywords: 'startup blog, operations insights, HR strategies, compliance guide, startup finance, business operations, masarna blog'
  },
  {
    slug: 'guides',
    title: 'Startup Guides',
    Component: dynamic(() => import('@/pages/resources/Guides')),
    metaTitle: 'Startup Guides & Operational Resources',
    metaDescription: 'Access comprehensive, actionable guides to help you navigate the operational challenges of building and scaling a startup.',
    metaKeywords: 'startup guides, operational resources, HR processes, financial forecasting, legal compliance, tech stack, startup operations'
  },
  {
    slug: 'case-studies',
    title: 'Case Studies',
    Component: dynamic(() => import('@/pages/resources/CaseStudies')),
    metaTitle: 'Startup Success Stories & Case Studies',
    metaDescription: 'Explore real-world examples of how startups achieved operational excellence with Masarna\'s support.',
    metaKeywords: 'startup case studies, operational excellence, business growth, HR optimization, financial transformation, compliance management'
  },
  {
    slug: 'templates',
    title: 'Templates',
    Component: dynamic(() => import('@/pages/resources/Templates')),
    metaTitle: 'Startup Templates & Operational Resources',
    metaDescription: 'Save time and ensure best practices with our curated collection of ready-to-use templates for HR, finance, operations, and legal needs.',
    metaKeywords: 'startup templates, operational resources, HR templates, financial models, SOP templates, legal documents'
  },
  {
    slug: 'calculators',
    title: 'Calculators',
    Component: dynamic(() => import('@/pages/resources/Calculators')),
    metaTitle: 'Startup Financial & Operational Calculators',
    metaDescription: 'Make data-driven decisions with our specialized calculators designed for startups. Estimate runway, equity dilution, hiring costs, and more.',
    metaKeywords: 'startup calculators, financial tools, runway calculator, equity dilution, hiring cost, SaaS unit economics'
  },
  {
    slug: 'checklists',
    title: 'Checklists',
    Component: dynamic(() => import('@/pages/resources/Checklists')),
    metaTitle: 'Startup Operational Checklists & Frameworks',
    metaDescription: 'Ensure you cover all important aspects of your startup operations with our comprehensive, expert-curated checklists.',
    metaKeywords: 'startup checklists, operational frameworks, business launch checklist, growth checklist, compliance checklist'
  },
  {
    slug: 'webinars',
    title: 'Webinars',
    Component: dynamic(() => import('@/pages/resources/Webinars')),
    metaTitle: 'Startup Operations Webinars & Educational Sessions',
    metaDescription: 'Learn from industry experts and operational leaders through our educational webinar series focused on startups and scaling businesses.',
    metaKeywords: 'startup webinars, operational excellence, HR webinars, financial modeling, legal essentials, remote operations'
  },
  {
    slug: 'podcast',
    title: 'Podcast',
    Component: dynamic(() => import('@/pages/resources/Podcast')),
    metaTitle: 'Operations Decoded Podcast - Startup Leadership Insights',
    metaDescription: 'Listen to our podcast featuring conversations with founders, operators, and experts about the operational strategies behind successful startups.',
    metaKeywords: 'startup podcast, operations podcast, founder interviews, operational strategies, remote teams, HR revolution'
  },
  {
    slug: 'newsletter',
    title: 'Newsletter',
    Component: dynamic(() => import('@/pages/resources/Newsletter')),
    metaTitle: 'Startup Operations Newsletter - Monthly Insights',
    metaDescription: 'Subscribe to our monthly newsletter for practical operational advice, templates, and insights delivered straight to your inbox.',
    metaKeywords: 'startup newsletter, operations insights, monthly updates, startup advice, operational excellence, business growth'
  }
];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = resourcePages.map(resource => ({
    params: { slug: resource.slug }
  }));

  return {
    paths,
    fallback: false // Return 404 for any paths not defined above
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const resourceData = resourcePages.find(resource => resource.slug === slug);

  if (!resourceData) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      ...resourceData
    },
    revalidate: 86400 // Revalidate once per day
  };
};

interface ResourcePageProps {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

const ResourcePage = ({
  title,
  metaTitle,
  metaDescription,
  metaKeywords,
  slug
}: ResourcePageProps) => {
  // Dynamically import the resource component based on slug
  const ResourceComponent = resourcePages.find(resource => resource.slug === slug)?.Component;

  return (
    <PageLayout 
      title={metaTitle} 
      description={metaDescription}
      keywords={metaKeywords}
    >
      {ResourceComponent && <ResourceComponent />}
      
      <CTASection 
        heading={`Need personalized ${title.toLowerCase()} support?`}
        description="Our team of operational experts is ready to help you implement these strategies in your business."
        buttonText="Schedule a Consultation"
      />
    </PageLayout>
  );
};

export default ResourcePage;