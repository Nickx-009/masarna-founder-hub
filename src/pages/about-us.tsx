import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import AboutHero from '@/components/about/AboutHero';
import OurStoryTimeline from '@/components/about/OurStoryTimeline';
import ValuesSection from '@/components/about/ValuesSection';
import MissionVision from '@/components/about/MissionVision';
import CultureGallery from '@/components/about/CultureGallery';
import CompanyMetrics from '@/components/about/CompanyMetrics';
import CTASection from '@/components/CTASection';
import { initScrollAnimations } from '@/utils/scrollAnimations';

const AboutUs = () => {
  useEffect(() => {
    // Initialize scroll animations with staggered delay
    initScrollAnimations({ 
      threshold: 0.1,
      staggerDelay: true,
      staggerAmount: 150
    });
  }, []);

  return (
    <PageLayout title="About Us">
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