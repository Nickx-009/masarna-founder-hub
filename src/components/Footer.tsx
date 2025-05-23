
import { ArrowUp, Facebook, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription handling would go here
    console.log('Newsletter subscription submitted');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-masarna-dark-gray to-black text-white pt-16 pb-8 relative">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern pointer-events-none"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Company & Contact */}
          <div className="space-y-6">
            <Link to="/" className="block mb-4">
              <img
                src="/lovable-uploads/5f95107d-6e25-46ce-aadd-db64bcedb580.png"
                alt="Masarna Logo"
                className="h-16 w-auto mb-4"
              />
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Operations-as-a-Service for ambitious founders and startups.
              We handle the operational details so you can focus on growth.
            </p>
            <div className="flex items-center space-x-1">
              <Mail className="w-5 h-5 mr-2 text-masarna-orange" />
              <a href="mailto:hello@masarna.co" className="text-gray-300 hover:text-white transition-colors">
                hello@masarna.co
              </a>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 pt-2">
              <a href="https://linkedin.com/company/masarna1" target="_blank" rel="noopener noreferrer" 
                className="bg-gray-800 p-2 rounded-full hover:bg-masarna-orange transition-colors" 
                aria-label="Masarna on LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com/masarna" target="_blank" rel="noopener noreferrer" 
                className="bg-gray-800 p-2 rounded-full hover:bg-masarna-orange transition-colors" 
                aria-label="Masarna on Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://facebook.com/masarna" target="_blank" rel="noopener noreferrer" 
                className="bg-gray-800 p-2 rounded-full hover:bg-masarna-orange transition-colors" 
                aria-label="Masarna on Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com/masarna" target="_blank" rel="noopener noreferrer" 
                className="bg-gray-800 p-2 rounded-full hover:bg-masarna-orange transition-colors" 
                aria-label="Masarna on Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Services */}
          <div>
            <h4 className="font-bold mb-5 text-lg border-l-4 border-masarna-orange pl-3">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/human-resources" className="text-gray-300 hover:text-masarna-orange transition-colors">HR & Recruiting</Link></li>
              <li><Link to="/services/compliance" className="text-gray-300 hover:text-masarna-orange transition-colors">Compliance</Link></li>
              <li><Link to="/services/finance" className="text-gray-300 hover:text-masarna-orange transition-colors">Finance Operations</Link></li>
              <li><Link to="/services/operations" className="text-gray-300 hover:text-masarna-orange transition-colors">Operations</Link></li>
              <li><Link to="/services/strategy" className="text-gray-300 hover:text-masarna-orange transition-colors">Strategy</Link></li>
              <li><Link to="/services/growth" className="text-gray-300 hover:text-masarna-orange transition-colors">Growth</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Company & Solutions */}
          <div>
            <h4 className="font-bold mb-5 text-lg border-l-4 border-masarna-orange pl-3">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about-us" className="text-gray-300 hover:text-masarna-orange transition-colors">About Us</Link></li>
              <li><Link to="/career" className="text-gray-300 hover:text-masarna-orange transition-colors">Careers</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-masarna-orange transition-colors">Solutions</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-masarna-orange transition-colors">Pricing</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-masarna-orange transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="text-gray-300 hover:text-masarna-orange transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter & Resources */}
          <div>
            <h4 className="font-bold mb-5 text-lg border-l-4 border-masarna-orange pl-3">Stay Updated</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest insights on startup operations.</p>
            
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 border-gray-700 text-white" 
                  required 
                />
                <Button type="submit" className="bg-masarna-orange hover:bg-masarna-orange/90">
                  Subscribe
                </Button>
              </div>
            </form>
            
            <h4 className="font-bold mb-3 text-lg border-l-4 border-masarna-orange pl-3">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/resources/blog" className="text-gray-300 hover:text-masarna-orange transition-colors">Blog</Link></li>
              <li><Link to="/resources/guides" className="text-gray-300 hover:text-masarna-orange transition-colors">Guides</Link></li>
              <li><Link to="/resources/case-studies" className="text-gray-300 hover:text-masarna-orange transition-colors">Case Studies</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Back to top button */}
        <div className="flex justify-center md:justify-end">
          <button 
            onClick={scrollToTop}
            className="bg-gray-800 text-white p-3 rounded-full hover:bg-masarna-orange transition-all duration-300 flex items-center justify-center"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
        
        {/* Copyright Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center md:text-left text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Masarna. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Operations-as-a-Service for startups</p>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Masarna",
          "url": "https://masarna.co",
          "logo": "https://masarna.co/lovable-uploads/4c19cc81-9f30-4ff8-b639-79916ff68ecd.png",
          "sameAs": [
            "https://twitter.com/masarna",
            "https://facebook.com/masarna",
            "https://linkedin.com/company/masarna1",
            "https://instagram.com/masarna"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "hello@masarna.co",
            "contactType": "customer service"
          }
        }
      `}} />
    </footer>
  );
};

export default Footer;
