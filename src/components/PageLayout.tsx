
import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { initScrollAnimations } from '@/utils/scrollAnimations';

type PageLayoutProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
};

const PageLayout = ({ children, title, description }: PageLayoutProps) => {
  useEffect(() => {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Update document title
    document.title = `${title} | Masarna`;
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-screen">
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
