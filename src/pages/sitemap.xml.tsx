import { GetServerSideProps } from 'next';

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = process.env.SITE_URL || 'https://masarna.co';
  
  // Define all your site's pages
  const pages = [
    { url: '/', lastmod: new Date().toISOString(), priority: 1.0, changefreq: 'weekly' },
    
    // Services pages
    { url: '/services', lastmod: new Date().toISOString(), priority: 0.8, changefreq: 'monthly' },
    { url: '/services/human-resources', lastmod: new Date().toISOString(), priority: 0.7, changefreq: 'monthly' },
    { url: '/services/finance', lastmod: new Date().toISOString(), priority: 0.7, changefreq: 'monthly' },
    { url: '/services/compliance', lastmod: new Date().toISOString(), priority: 0.7, changefreq: 'monthly' },
    { url: '/services/strategy', lastmod: new Date().toISOString(), priority: 0.7, changefreq: 'monthly' },
    { url: '/services/growth', lastmod: new Date().toISOString(), priority: 0.7, changefreq: 'monthly' },
    { url: '/services/operations', lastmod: new Date().toISOString(), priority: 0.7, changefreq: 'monthly' },
    
    // Solutions pages
    { url: '/solutions', lastmod: new Date().toISOString(), priority: 0.8, changefreq: 'monthly' },
    { url: '/solutions/chief-of-staff', lastmod: new Date().toISOString(), priority: 0.7, changefreq: 'monthly' },
    { url: '/solutions/fractional-cfo', lastmod: new Date().toISOString(), priority: 0.7, changefreq: 'monthly' },
    { url: '/solutions/head-of-hr', lastmod: new Date().toISOString(), priority: 0.7, changefreq: 'monthly' },
    { url: '/solutions/fractional-recruiter', lastmod: new Date().toISOString(), priority: 0.7, changefreq: 'monthly' },
    { url: '/solutions/operations-manager', lastmod: new Date().toISOString(), priority: 0.7, changefreq: 'monthly' },
    { url: '/solutions/project-manager', lastmod: new Date().toISOString(), priority: 0.7, changefreq: 'monthly' },
    
    // Resources pages
    { url: '/resources', lastmod: new Date().toISOString(), priority: 0.8, changefreq: 'weekly' },
    { url: '/resources/blog', lastmod: new Date().toISOString(), priority: 0.6, changefreq: 'weekly' },
    { url: '/resources/guides', lastmod: new Date().toISOString(), priority: 0.6, changefreq: 'monthly' },
    { url: '/resources/case-studies', lastmod: new Date().toISOString(), priority: 0.6, changefreq: 'monthly' },
    { url: '/resources/templates', lastmod: new Date().toISOString(), priority: 0.6, changefreq: 'monthly' },
    { url: '/resources/calculators', lastmod: new Date().toISOString(), priority: 0.6, changefreq: 'monthly' },
    { url: '/resources/checklists', lastmod: new Date().toISOString(), priority: 0.6, changefreq: 'monthly' },
    { url: '/resources/webinars', lastmod: new Date().toISOString(), priority: 0.6, changefreq: 'monthly' },
    { url: '/resources/podcast', lastmod: new Date().toISOString(), priority: 0.6, changefreq: 'weekly' },
    { url: '/resources/newsletter', lastmod: new Date().toISOString(), priority: 0.6, changefreq: 'monthly' },
    
    // Company pages
    { url: '/about-us', lastmod: new Date().toISOString(), priority: 0.5, changefreq: 'monthly' },
    { url: '/career', lastmod: new Date().toISOString(), priority: 0.5, changefreq: 'monthly' },
    
    // Other pages
    { url: '/pricing', lastmod: new Date().toISOString(), priority: 0.8, changefreq: 'monthly' },
    { url: '/privacy-policy', lastmod: new Date().toISOString(), priority: 0.3, changefreq: 'yearly' },
    { url: '/terms-of-use', lastmod: new Date().toISOString(), priority: 0.3, changefreq: 'yearly' },
  ];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `).join('')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;