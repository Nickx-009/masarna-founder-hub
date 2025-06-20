import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from 'react';
import { initScrollAnimations } from '@/utils/scrollAnimations';
import Head from 'next/head';
import Script from 'next/script';

// Create a client
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize scroll animations
    initScrollAnimations();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Head>
          {/* Default meta tags that can be overridden by individual pages */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Masarna provides comprehensive Operations-as-a-Service for early-stage and growth-stage startups. Expert HR, compliance, finance operations, and strategic support to accelerate your business growth." />
          <meta name="keywords" content="operations as a service, startup operations, HR admin, compliance, finance operations, equity support, fractional CFO, chief of staff, head of HR, startup consulting, business operations" />
          <meta name="author" content="Masarna" />
          <meta name="robots" content="index, follow" />
          <meta name="google-site-verification" content="7miQXszy6obZUnW8k00gXXy0wwf37mp7C9eHAt09TZw" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://masarna.co/" />
          <meta property="og:title" content="Masarna - Operations-as-a-Service for Startups" />
          <meta property="og:description" content="Streamline your startup operations with expert HR, compliance, finance, and strategic support. Focus on growth while we handle the operational complexity." />
          <meta property="og:image" content="https://masarna.co/lovable-uploads/4c19cc81-9f30-4ff8-b639-79916ff68ecd.png" />
          <meta property="og:site_name" content="Masarna" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@masarna" />
          <meta name="twitter:title" content="Masarna - Operations-as-a-Service for Startups" />
          <meta name="twitter:description" content="Streamline your startup operations with expert HR, compliance, finance, and strategic support. Focus on growth while we handle the operational complexity." />
          <meta name="twitter:image" content="https://masarna.co/lovable-uploads/4c19cc81-9f30-4ff8-b639-79916ff68ecd.png" />
        </Head>
        
        {/* Enhanced Structured Data / JSON-LD */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://masarna.co/#organization",
              "name": "Masarna",
              "alternateName": "Masarna Operations",
              "url": "https://masarna.co",
              "logo": {
                "@type": "ImageObject",
                "url": "https://masarna.co/lovable-uploads/4c19cc81-9f30-4ff8-b639-79916ff68ecd.png",
                "width": 400,
                "height": 400
              },
              "description": "Operations-as-a-Service for early-stage and growth-stage startups. Expert HR, compliance, finance operations, and strategic support.",
              "foundingDate": "2023",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://masarna.co"
              },
              "sameAs": [
                "https://twitter.com/masarna",
                "https://linkedin.com/company/masarna1"
              ],
              "knowsAbout": [
                "Startup Operations",
                "Human Resources",
                "Compliance Management",
                "Financial Operations",
                "Strategic Planning",
                "Business Growth"
              ]
            })
          }}
        />
        
        {/* Professional Service Schema */}
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://masarna.co/#service",
              "name": "Masarna Operations-as-a-Service",
              "serviceType": "Business Operations Consulting",
              "provider": {
                "@id": "https://masarna.co/#organization"
              },
              "description": "Comprehensive operational support for startups including HR administration, compliance management, financial operations, and strategic growth planning",
              "areaServed": "US",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Startup Operations Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Human Resources Operations",
                      "description": "HR administration, recruiting, and employee management"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Compliance Management",
                      "description": "Legal compliance and regulatory requirements management"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Financial Operations",
                      "description": "CFO services, financial planning, and equity management"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Strategic Operations",
                      "description": "Business strategy, operations management, and growth planning"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* FAQ Schema */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Operations-as-a-Service?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Operations-as-a-Service (OaaS) is a comprehensive solution where Masarna handles all your operational needs including HR, compliance, finance, and strategic planning, allowing you to focus on core business growth."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Masarna help startups?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Masarna provides experienced operational support for startups by managing HR administration, ensuring compliance, handling financial operations, and providing strategic guidance to accelerate growth."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What types of companies work with Masarna?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Masarna works with early-stage and growth-stage startups that need operational support to scale efficiently without the overhead of full-time operational staff."
                  }
                }
              ]
            })
          }}
        />
        
        <Toaster />
        <Sonner />
        <Component {...pageProps} />
      </TooltipProvider>
    </QueryClientProvider>
  );
}