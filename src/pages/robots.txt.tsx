import { GetServerSideProps } from 'next';

const RobotsTxt = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = process.env.SITE_URL || 'https://masarna.co';
  
  const robotsTxt = `# Masarna Website Robots.txt
# Last updated: ${new Date().toISOString().split('T')[0]}

User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

# Allow Google to access everything
User-agent: Googlebot
Allow: /

# Allow Bing to access everything
User-agent: Bingbot
Allow: /

# Social media bots
User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

# Crawl delays to be polite to server resources
User-agent: *
Crawl-delay: 10

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml
`;

  res.setHeader('Content-Type', 'text/plain');
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
};

export default RobotsTxt;