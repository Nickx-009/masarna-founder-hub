
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-masarna-dark-gray text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="block mb-4">
              <img
                src="/lovable-uploads/5f95107d-6e25-46ce-aadd-db64bcedb580.png"
                alt="Masarna Logo"
                className="h-20 w-auto mb-6"
                style={{ maxWidth: '240px' }}
              />
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Operations-as-a-Service for ambitious founders and startups.
              We handle the operational details so you can focus on growth.
            </p>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-[#f26522]" />
              <a href="mailto:hello@masarna.com" className="text-gray-300 hover:text-white transition-colors">
                hello@masarna.com
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">HR & Recruiting</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Compliance</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Finance Operations</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Equity Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Masarna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
