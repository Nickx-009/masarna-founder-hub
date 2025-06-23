import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import CTASection from '@/components/CTASection';
import { initScrollAnimations } from '@/utils/scrollAnimations';
import dynamic from 'next/dynamic';

// Define the solution pages data
const solutionPages = [
  {
    slug: 'chief-of-staff',
    title: 'Chief of Staff',
    description: 'Strategic leadership support for founders and executives.',
    Component: dynamic(() => import('@/pages/solutions/chief-of-staff')),
    metaTitle: 'Fractional Chief of Staff Services | Masarna',
    metaDescription: 'Access strategic leadership support with our fractional Chief of Staff services. Streamline operations and focus on growth while we handle the details.',
    metaKeywords: 'fractional chief of staff, strategic leadership, executive support, startup operations, leadership efficiency, strategic initiatives'
  },
  {
    slug: 'fractional-cfo',
    title: 'Fractional CFO',
    description: 'Expert financial leadership without the full-time cost.',
    Component: dynamic(() => import('@/pages/solutions/FractionalCFO')),
    metaTitle: 'Fractional CFO Services | Masarna',
    metaDescription: 'Get expert financial leadership for your startup without the full-time cost. Our fractional CFOs provide strategic financial guidance and operational support.',
    metaKeywords: 'fractional CFO, financial leadership, startup finance, financial strategy, cash flow management, fundraising support'
  },
  {
    slug: 'head-of-hr',
    title: 'Head of HR',
    description: 'Seasoned HR leadership to build and maintain your culture.',
    Component: dynamic(() => import('@/pages/solutions/HeadOfHR')),
    metaTitle: 'Fractional Head of HR Services | Masarna',
    metaDescription: 'Build and maintain a thriving company culture with our experienced HR leadership, without the cost of a full-time executive.',
    metaKeywords: 'head of HR, HR leadership, company culture, employee engagement, HR strategy, talent management'
  },
  {
    slug: 'fractional-recruiter',
    title: 'Fractional Recruiter',
    description: 'Talent acquisition expertise to build your dream team.',
    Component: dynamic(() => import('@/pages/solutions/FractionalRecruiter')),
    metaTitle: 'Fractional Recruiter Services | Masarna',
    metaDescription: 'Access specialized recruitment expertise to attract top talent without the overhead of a full-time recruiting team.',
    metaKeywords: 'fractional recruiter, talent acquisition, hiring strategy, recruitment process, candidate experience, startup recruiting'
  },
  {
    slug: 'operations-manager',
    title: 'Operations Manager',
    description: 'Day-to-day operational leadership and process improvement.',
    Component: dynamic(() => import('@/pages/solutions/OperationsManager')),
    metaTitle: 'Fractional Operations Manager Services | Masarna',
    metaDescription: 'Get hands-on operational leadership to optimize your day-to-day processes, increase efficiency, and support your growing business.',
    metaKeywords: 'operations manager, process optimization, systems implementation, operational efficiency, business processes, startup operations'
  },
  {
    slug: 'project-manager',
    title: 'Project Manager',
    description: 'Focused project leadership to deliver results on time.',
    Component: dynamic(() => import('@/pages/solutions/ProjectManager')),
    metaTitle: 'Fractional Project Manager Services | Masarna',
    metaDescription: 'Drive your key initiatives to completion with experienced project leadership, ensuring on-time, on-budget delivery with maximum business impact.',
    metaKeywords: 'project manager, project planning, risk management, project delivery, timeline management, startup projects'
  }
];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = solutionPages.map(solution => ({
    params: { slug: solution.slug }
  }));

  return {
    paths,
    fallback: false // Return 404 for any paths not defined above
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const solutionData = solutionPages.find(solution => solution.slug === slug);

  if (!solutionData) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      ...solutionData
    },
    revalidate: 86400 // Revalidate once per day
  };
};

interface SolutionPageProps {
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

const SolutionPage = ({
  title,
  description,
  metaTitle,
  metaDescription,
  metaKeywords,
  slug
}: SolutionPageProps) => {
  useEffect(() => {
    // Initialize scroll animations with staggered delay
    initScrollAnimations({ 
      threshold: 0.1,
      staggerDelay: true,
      staggerAmount: 120
    });
  }, []);

  // Dynamically import the solution component based on slug
  const SolutionComponent = solutionPages.find(solution => solution.slug === slug)?.Component;

  return (
    <PageLayout 
      title={metaTitle} 
      description={metaDescription}
      keywords={metaKeywords}
    >
      {SolutionComponent && <SolutionComponent />}
      
      <CTASection 
        heading={`Ready to enhance your team with a ${title}?`}
        description={`Schedule a free consultation to discuss how our ${title} service can help your business grow.`}
        buttonText={`Book a ${title} Consultation`}
      />
    </PageLayout>
  );
};

export default SolutionPage;