import Head from 'next/head';
import { GetStaticProps } from 'next';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutSection from '@/components/AboutSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useEffect } from 'react';
import { initScrollAnimations } from '@/utils/scrollAnimations';

export const getStaticProps: GetStaticProps = async () => {
  // This could fetch data from an API or CMS in the future
  return {
    props: {
      pageTitle: "Masarna - Operations-as-a-Service for Startups | Streamline Your Business Operations",
      pageDescription: "Masarna provides comprehensive Operations-as-a-Service for early-stage and growth-stage startups. Expert HR, compliance, finance operations, and strategic support to accelerate your business growth.",
      pageKeywords: "masarna, operations as a service, startup operations, HR admin, compliance, finance operations, equity support, fractional CFO, chief of staff, head of HR, startup consulting, business operations, startup support"
    },
    // Revalidate every 24 hours
    revalidate: 86400
  };
};

interface HomeProps {
  pageTitle: string;
  pageDescription: string;
  pageKeywords: string;
}

export default function Home({ pageTitle, pageDescription, pageKeywords }: HomeProps) {
  useEffect(() => {
    // Initialize scroll animations with enhanced options
    initScrollAnimations({
      threshold: 0.15,
      staggerDelay: true
    });
    
    // Add a class to enable page transitions
    document.body.classList.add('page-loaded');
    
    return () => {
      document.body.classList.remove('page-loaded');
    };
  }, []);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <link rel="canonical" href="https://masarna.co/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Masarna - Operations-as-a-Service for Startups" />
        <meta property="og:description" content="Streamline your startup operations with expert HR, compliance, finance, and strategic support. Focus on growth while we handle the operational complexity." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://masarna.co/" />
        <meta property="og:image" content="https://masarna.co/lovable-uploads/4c19cc81-9f30-4ff8-b639-79916ff68ecd.png" />
        
        {/* Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://masarna.co/#business",
              "name": "Masarna",
              "description": "Operations-as-a-Service for early-stage and growth-stage startups",
              "url": "https://masarna.co",
              "telephone": "+1-555-MASARNA",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "40.7128",
                "longitude": "-74.0060"
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "47"
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen">
        <Navigation />
        <main>
          {/* Hidden H1 for SEO - visible H1 is in HeroSection */}
          <h1 className="sr-only">Masarna - Operations-as-a-Service for Startups</h1>
          <HeroSection />
          <HowItWorks />
          <ServicesSection />
          <TestimonialsSection />
          <AboutSection />
          <CTASection 
            heading="Ready to Transform Your Business Operations?"
            description="Schedule a free 30-minute consultation with our experts and discover how Masarna can streamline your operations and accelerate your growth."
            buttonText="Book Your Free Consultation"
          />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}