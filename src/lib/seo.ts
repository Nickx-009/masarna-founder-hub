// SEO utility functions for consistent metadata across pages

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
}

export const defaultSEO: SEOProps = {
  title: 'Operations-as-a-Service for Startups',
  description: 'Masarna provides comprehensive Operations-as-a-Service for early-stage and growth-stage startups. Expert HR, compliance, finance operations, and strategic support to accelerate your business growth.',
  keywords: 'operations as a service, startup operations, HR admin, compliance, finance operations, equity support, fractional CFO, chief of staff, head of HR, startup consulting, business operations',
  ogImage: 'https://masarna.co/lovable-uploads/4c19cc81-9f30-4ff8-b639-79916ff68ecd.png',
  ogType: 'website',
  twitterCard: 'summary_large_image'
};

export const getSEOTags = (props: Partial<SEOProps>): SEOProps => {
  return {
    ...defaultSEO,
    ...props,
    // Ensure title has brand name
    title: props.title ? `${props.title} | Masarna` : defaultSEO.title
  };
};

// Generate structured data for different page types
export const generateOrganizationSchema = () => {
  return {
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
  };
};

export const generateServiceSchema = () => {
  return {
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
  };
};

export const generateFAQSchema = () => {
  return {
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
  };
};