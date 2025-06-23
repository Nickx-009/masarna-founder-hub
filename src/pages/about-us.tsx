import React, { useEffect } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import PageLayout from '@/components/PageLayout';
import AboutHero from '@/components/about/AboutHero';
import OurStoryTimeline from '@/components/about/OurStoryTimeline';
import ValuesSection from '@/components/about/ValuesSection';
import MissionVision from '@/components/about/MissionVision';
import CultureGallery from '@/components/about/CultureGallery';
import CompanyMetrics from '@/components/about/CompanyMetrics';
import CTASection from '@/components/CTASection';
import { initScrollAnimations } from '@/utils/scrollAnimations';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "About Us",
      description: "Learn about Masarna's mission, values, and the team behind our Operations-as-a-Service platform for startups.",
      keywords: "masarna about us, startup operations team, operations experts, remote operations team, startup support team, operations as a service company"
    },
    revalidate: 86400 // Revalidate once per day
  };
};

interface AboutUsProps {
  title: string;
  description: string;
  keywords: string;
}

const AboutUs = ({ title, description, keywords }: AboutUsProps) => {
  useEffect(() => {
    // Initialize scroll animations with staggered delay
    initScrollAnimations({ 
      threshold: 0.1,
      staggerDelay: true,
      staggerAmount: 150
    });
  }, []);

  return (
    <PageLayout 
      title={title} 
      description={description}
      keywords={keywords}
    >
      <AboutHero />
      <OurStoryTimeline />
      <ValuesSection />
      <MissionVision />
      <CultureGallery />
      <CompanyMetrics />
      <CTASection 
        heading="Want to be part of our story?"
        description="Join our team or partner with us to create operational excellence for ambitious founders."
        buttonText="Get in Touch"
      />
    </PageLayout>
  );
};

export default AboutUs;