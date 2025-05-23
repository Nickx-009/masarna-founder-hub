
import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { initScrollAnimations } from '@/utils/scrollAnimations';
import { Helmet } from 'react-helmet-async';

type PageLayoutProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
};

const PageLayout = ({ 
  children, 
  title, 
  description, 
  keywords,
  canonicalUrl,
  ogImage
}: PageLayoutProps) => {
  // Generate full page title with brand
  const pageTitle = `${title} | Masarna`;
  
  // Default meta description if not provided
  const metaDescription = description || 'Masarna provides Operations-as-a-Service for startups, handling HR, compliance, finance, and strategic operations.';
  
  // Default keywords if not provided
  const metaKeywords = keywords || 'operations, startup operations, HR, compliance, finance, strategy';
  
  // Default canonical URL based on current path
  const canonical = canonicalUrl || `https://masarna.co${window.location.pathname}`;
  
  // Default OG image
  const openGraphImage = ogImage || 'https://masarna.co/lovable-uploads/4c19cc81-9f30-4ff8-b639-79916ff68ecd.png';

  useEffect(() => {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={canonical} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={openGraphImage} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonical} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={openGraphImage} />
      </Helmet>
      
      <Navigation />
      <main className="pt-24 min-h-screen">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default PageLayout;
