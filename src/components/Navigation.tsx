
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white/90 shadow-sm backdrop-blur' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="font-bold font-poppins">
          <img
            src="/lovable-uploads/86c10d18-0b76-47f7-a474-7fafd09629e3.png"
            alt="Masarna Logo"
            className="h-14 w-auto"
            style={{ maxWidth: '180px' }}
          />
        </Link>
        
        {/* Desktop Navigation with Mega Menu */}
        <div className="hidden md:flex justify-center flex-1">
          <NavigationMenu className="max-w-full">
            <NavigationMenuList>
              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-masarna-teal">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-3 p-6 w-[500px]">
                    <div>
                      <h3 className="font-medium text-lg mb-2 text-masarna-teal">Core Services</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/services/human-resources" className="block text-gray-700 hover:text-masarna-teal">
                            Human Resources
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/finance" className="block text-gray-700 hover:text-masarna-teal">
                            Finance & Operations
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/legal" className="block text-gray-700 hover:text-masarna-teal">
                            Legal & Compliance
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2 text-masarna-teal">Specialized Services</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/services/strategy" className="block text-gray-700 hover:text-masarna-teal">
                            Strategy & Planning
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/growth" className="block text-gray-700 hover:text-masarna-teal">
                            Growth & Scaling
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/operations" className="block text-gray-700 hover:text-masarna-teal">
                            Operations Management
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-span-2 mt-4 pt-4 border-t border-gray-100">
                      <Link to="/services" className="text-masarna-teal hover:underline font-medium">
                        View all services →
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-masarna-teal">Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-3 p-6 w-[600px]">
                    <div>
                      <h3 className="font-medium text-lg mb-2 text-masarna-teal">Fractional Leadership</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/solutions/chief-of-staff" className="block text-gray-700 hover:text-masarna-teal">
                            Chief of Staff
                          </Link>
                        </li>
                        <li>
                          <Link to="/solutions/fractional-cfo" className="block text-gray-700 hover:text-masarna-teal">
                            Fractional CFO
                          </Link>
                        </li>
                        <li>
                          <Link to="/solutions/head-of-hr" className="block text-gray-700 hover:text-masarna-teal">
                            Head of HR
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2 text-masarna-teal">Specialized Roles</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/solutions/fractional-recruiter" className="block text-gray-700 hover:text-masarna-teal">
                            Fractional Recruiter
                          </Link>
                        </li>
                        <li>
                          <Link to="/solutions/operations-manager" className="block text-gray-700 hover:text-masarna-teal">
                            Operations Manager
                          </Link>
                        </li>
                        <li>
                          <Link to="/solutions/project-manager" className="block text-gray-700 hover:text-masarna-teal">
                            Project Manager
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-span-2 mt-4 pt-4 border-t border-gray-100">
                      <Link to="/solutions" className="text-masarna-teal hover:underline font-medium">
                        All leadership solutions →
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-masarna-teal">Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-3 gap-3 p-6 w-[750px]">
                    <div>
                      <h3 className="font-medium text-lg mb-2 text-masarna-teal">Knowledge Center</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/resources/blog" className="block text-gray-700 hover:text-masarna-teal">
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link to="/resources/guides" className="block text-gray-700 hover:text-masarna-teal">
                            Startup Guides
                          </Link>
                        </li>
                        <li>
                          <Link to="/resources/case-studies" className="block text-gray-700 hover:text-masarna-teal">
                            Case Studies
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2 text-masarna-teal">Tools</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/resources/templates" className="block text-gray-700 hover:text-masarna-teal">
                            Templates
                          </Link>
                        </li>
                        <li>
                          <Link to="/resources/calculators" className="block text-gray-700 hover:text-masarna-teal">
                            Calculators
                          </Link>
                        </li>
                        <li>
                          <Link to="/resources/checklists" className="block text-gray-700 hover:text-masarna-teal">
                            Checklists
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2 text-masarna-teal">Learn</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/resources/webinars" className="block text-gray-700 hover:text-masarna-teal">
                            Webinars
                          </Link>
                        </li>
                        <li>
                          <Link to="/resources/podcast" className="block text-gray-700 hover:text-masarna-teal">
                            Podcast
                          </Link>
                        </li>
                        <li>
                          <Link to="/resources/newsletter" className="block text-gray-700 hover:text-masarna-teal">
                            Newsletter
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-span-3 mt-4 pt-4 border-t border-gray-100">
                      <Link to="/resources" className="text-masarna-teal hover:underline font-medium">
                        All resources →
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Pricing (Direct link) */}
              <NavigationMenuItem>
                <Link to="/pricing" className="text-gray-700 hover:text-masarna-teal transition-colors font-medium p-2">
                  Pricing
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        {/* Call to Action Button */}
        <div className="hidden md:block">
          <Button 
            className="bg-masarna-teal hover:bg-masarna-teal/90 text-white rounded-lg" 
            onClick={() => window.location.href = '#contact'}
          >
            Book Assessment
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 p-2"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full py-4 px-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {/* Mobile Services Dropdown */}
            <div className="py-2">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700">
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuItem asChild>
                    <Link to="/services/human-resources" className="w-full">Human Resources</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/finance" className="w-full">Finance & Operations</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/legal" className="w-full">Legal & Compliance</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/strategy" className="w-full">Strategy & Planning</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services" className="w-full font-medium text-masarna-teal">View all services</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            {/* Mobile Solutions Dropdown */}
            <div className="py-2">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700">
                  <span>Solutions</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuItem asChild>
                    <Link to="/solutions/chief-of-staff" className="w-full">Chief of Staff</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/solutions/fractional-cfo" className="w-full">Fractional CFO</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/solutions/head-of-hr" className="w-full">Head of HR</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/solutions/fractional-recruiter" className="w-full">Fractional Recruiter</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/solutions" className="w-full font-medium text-masarna-teal">All solutions</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            {/* Mobile Resources Dropdown */}
            <div className="py-2">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700">
                  <span>Resources</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuItem asChild>
                    <Link to="/resources/blog" className="w-full">Blog</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/resources/guides" className="w-full">Startup Guides</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/resources/templates" className="w-full">Templates</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/resources" className="w-full font-medium text-masarna-teal">All resources</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            {/* Mobile Pricing (Direct Link) */}
            <Link 
              to="/pricing" 
              className="text-gray-700 hover:text-masarna-teal transition-colors py-2 px-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            
            {/* Mobile CTA */}
            <Button 
              className="bg-masarna-teal hover:bg-masarna-teal/90 text-white w-full rounded-lg mt-2" 
              onClick={() => {
                window.location.href = '#contact';
                setMobileMenuOpen(false);
              }}
            >
              Book Assessment
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
