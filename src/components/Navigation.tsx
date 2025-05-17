
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Users, BarChart3, Shield, Target, TrendingUp, Settings, Briefcase, DollarSign, UserPlus, Sliders, ClipboardList, FileText, BookOpen, BarChart, FileCheck, Calculator, CheckSquare, Video, Mic, Mail, Building, Award } from 'lucide-react';
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
            src="/lovable-uploads/5f95107d-6e25-46ce-aadd-db64bcedb580.png"
            alt="Masarna Logo"
            className="h-[60px] w-auto"
            style={{ maxWidth: '220px' }}
          />
        </Link>
        
        {/* Desktop Navigation with Mega Menu */}
        <div className="hidden md:flex justify-center flex-1">
          <NavigationMenu className="max-w-full">
            <NavigationMenuList>
              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-[#f26522]">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-3 p-6 w-[600px]">
                    <div>
                      <h3 className="font-medium text-lg mb-2 text-[#f26522]">Core Services</h3>
                      <ul className="space-y-4">
                        <li>
                          <Link to="/services/human-resources" className="flex items-start text-gray-700 hover:text-[#f26522] group">
                            <Users className="h-5 w-5 mr-3 mt-0.5 text-[#f26522] group-hover:text-[#f26522]" />
                            <div>
                              <div className="font-medium">Human Resources</div>
                              <div className="text-sm text-gray-500">Complete HR solutions for startups</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/finance" className="flex items-start text-gray-700 hover:text-[#f26522] group">
                            <BarChart3 className="h-5 w-5 mr-3 mt-0.5 text-[#f26522] group-hover:text-[#f26522]" />
                            <div>
                              <div className="font-medium">Finance & Operations</div>
                              <div className="text-sm text-gray-500">Financial strategy & execution</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/compliance" className="flex items-start text-gray-700 hover:text-[#f26522] group">
                            <Shield className="h-5 w-5 mr-3 mt-0.5 text-[#f26522] group-hover:text-[#f26522]" />
                            <div>
                              <div className="font-medium">Legal & Compliance</div>
                              <div className="text-sm text-gray-500">Protect your business interests</div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2 text-[#f26522]">Specialized Services</h3>
                      <ul className="space-y-4">
                        <li>
                          <Link to="/services/strategy" className="flex items-start text-gray-700 hover:text-[#f26522] group">
                            <Target className="h-5 w-5 mr-3 mt-0.5 text-[#f26522] group-hover:text-[#f26522]" />
                            <div>
                              <div className="font-medium">Strategy & Planning</div>
                              <div className="text-sm text-gray-500">Roadmaps for sustainable growth</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/growth" className="flex items-start text-gray-700 hover:text-[#f26522] group">
                            <TrendingUp className="h-5 w-5 mr-3 mt-0.5 text-[#f26522] group-hover:text-[#f26522]" />
                            <div>
                              <div className="font-medium">Growth & Scaling</div>
                              <div className="text-sm text-gray-500">Accelerate your business trajectory</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/operations" className="flex items-start text-gray-700 hover:text-[#f26522] group">
                            <Settings className="h-5 w-5 mr-3 mt-0.5 text-[#f26522] group-hover:text-[#f26522]" />
                            <div>
                              <div className="font-medium">Operations Management</div>
                              <div className="text-sm text-gray-500">Optimize workflows & efficiency</div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-span-2 mt-4 pt-4 border-t border-gray-100">
                      <Link to="/services" className="text-[#f26522] hover:underline font-medium">
                        View all services →
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-[#f26522]">Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-3 p-6 w-[600px]">
                    <div>
                      <h3 className="font-medium text-lg mb-2 text-[#f26522]">Fractional Leadership</h3>
                      <ul className="space-y-4">
                        <li>
                          <Link to="/solutions/chief-of-staff" className="flex items-start text-gray-700 hover:text-[#f26522] group">
                            <Briefcase className="h-5 w-5 mr-3 mt-0.5 text-[#f26522] group-hover:text-[#f26522]" />
                            <div>
                              <div className="font-medium">Chief of Staff</div>
                              <div className="text-sm text-gray-500">Strategic leadership support</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/solutions/fractional-cfo" className="flex items-start text-gray-700 hover:text-[#f26522] group">
                            <DollarSign className="h-5 w-5 mr-3 mt-0.5 text-[#f26522] group-hover:text-[#f26522]" />
                            <div>
                              <div className="font-medium">CFO</div>
                              <div className="text-sm text-gray-500">Financial strategy without full-time cost</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/solutions/head-of-hr" className="flex items-start text-gray-700 hover:text-[#f26522] group">
                            <Users className="h-5 w-5 mr-3 mt-0.5 text-[#f26522] group-hover:text-[#f26522]" />
                            <div>
                              <div className="font-medium">Head of HR</div>
                              <div className="text-sm text-gray-500">Expert culture & people ops leadership</div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2 text-[#f26522]">Specialized Roles</h3>
                      <ul className="space-y-4">
                        <li>
                          <Link to="/solutions/fractional-recruiter" className="flex items-start text-gray-700 hover:text-[#f26522] group">
                            <UserPlus className="h-5 w-5 mr-3 mt-0.5 text-[#f26522] group-hover:text-[#f26522]" />
                            <div>
                              <div className="font-medium">Fractional Recruiter</div>
                              <div className="text-sm text-gray-500">Build your ideal team efficiently</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/solutions/operations-manager" className="flex items-start text-gray-700 hover:text-[#f26522] group">
                            <Sliders className="h-5 w-5 mr-3 mt-0.5 text-[#f26522] group-hover:text-[#f26522]" />
                            <div>
                              <div className="font-medium">Operations Manager</div>
                              <div className="text-sm text-gray-500">Streamline processes & workflows</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/solutions/project-manager" className="flex items-start text-gray-700 hover:text-[#f26522] group">
                            <ClipboardList className="h-5 w-5 mr-3 mt-0.5 text-[#f26522] group-hover:text-[#f26522]" />
                            <div>
                              <div className="font-medium">Project Manager</div>
                              <div className="text-sm text-gray-500">Deliver initiatives on time & budget</div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-span-2 mt-4 pt-4 border-t border-gray-100">
                      <Link to="/solutions" className="text-[#f26522] hover:underline font-medium">
                        All leadership solutions →
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-[#f26522]">Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-4 gap-3 p-6 w-[900px]">
                    <div>
                      <h3 className="font-medium text-lg mb-2 text-[#f26522]">Knowledge Center</h3>
                      <ul className="space-y-4">
                        <li>
                          <Link to="/resources/blog" className="flex items-start text-gray-700 hover:text-[#f26522] group">
                            <FileText className="h-5 w-5 mr-3 mt-0.5 text-[#f26522] group-hover:text-[#f26522]" />
                            <div>
                              <div className="font-medium">Blog</div>
                              <div className="text-sm text-gray-500">Insights for founders & operators</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/resources/guides" className="flex items-start text-gray-700 hover:text-[#f26522] group">
                            <BookOpen className="h-5 w-5 mr-3 mt-0.5 text-[#f26522] group-hover:text-[#f26522]" />
                            <div>
                              <div className="font-medium">Startup Guides</div>
                              <div className="text-sm text-gray-500">Step-by-step operational guidance</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/resources/case-studies" className="flex items-start text-gray-700 hover:text-[#f26522] group">
                            <BarChart className="h-5 w-5 mr-3 mt-0.5 text-[#f26522] group-hover:text-[#f26522]" />
                            <div>
                              <div className="font-medium">Case Studies</div>
                              <div className="text-sm text-gray-500">Success stories & proof points</div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2 text-[#f26522]">Tools</h3>
                      <ul className="space-y-4">
                        <li>
                          <Link to="/resources/templates" className="flex items-start text-gray-700 hover:text-[#f26522] group">
                            <FileCheck className="h-5 w-5 mr-3 mt-0.5 text-[#f26522] group-hover:text-[#f26522]" />
                            <div>
                              <div className="font-medium">Templates</div>
                              <div className="text-sm text-gray-500">Ready-to-use documents & forms</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/resources/calculators" className="flex items-start text-gray-700 hover:text-[#f26522] group">
                            <Calculator className="h-5 w-5 mr-3 mt-0.5 text-[#f26522] group-hover:text-[#f26522]" />
                            <div>
                              <div className="font-medium">Calculators</div>
                              <div className="text-sm text-gray-500">Tools for financial forecasting</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/resources/checklists" className="flex items-start text-gray-700 hover:text-[#f26522] group">
                            <CheckSquare className="h-5 w-5 mr-3 mt-0.5 text-[#f26522] group-hover:text-[#f26522]" />
                            <div>
                              <div className="font-medium">Checklists</div>
                              <div className="text-sm text-gray-500">Stay organized & on track</div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2 text-[#f26522]">Learn</h3>
                      <ul className="space-y-4">
                        <li>
                          <Link to="/resources/webinars" className="flex items-start text-gray-700 hover:text-[#f26522] group">
                            <Video className="h-5 w-5 mr-3 mt-0.5 text-[#f26522] group-hover:text-[#f26522]" />
                            <div>
                              <div className="font-medium">Webinars</div>
                              <div className="text-sm text-gray-500">Expert sessions on key topics</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/resources/podcast" className="flex items-start text-gray-700 hover:text-[#f26522] group">
                            <Mic className="h-5 w-5 mr-3 mt-0.5 text-[#f26522] group-hover:text-[#f26522]" />
                            <div>
                              <div className="font-medium">Podcast</div>
                              <div className="text-sm text-gray-500">Leadership insights on the go</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/resources/newsletter" className="flex items-start text-gray-700 hover:text-[#f26522] group">
                            <Mail className="h-5 w-5 mr-3 mt-0.5 text-[#f26522] group-hover:text-[#f26522]" />
                            <div>
                              <div className="font-medium">Newsletter</div>
                              <div className="text-sm text-gray-500">Weekly operational insights</div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2 text-[#f26522]">Company</h3>
                      <ul className="space-y-4">
                        <li>
                          <Link to="/about-us" className="flex items-start text-gray-700 hover:text-[#f26522] group">
                            <Building className="h-5 w-5 mr-3 mt-0.5 text-[#f26522] group-hover:text-[#f26522]" />
                            <div>
                              <div className="font-medium">About Us</div>
                              <div className="text-sm text-gray-500">Our mission & team</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/career" className="flex items-start text-gray-700 hover:text-[#f26522] group">
                            <Award className="h-5 w-5 mr-3 mt-0.5 text-[#f26522] group-hover:text-[#f26522]" />
                            <div>
                              <div className="font-medium">Career</div>
                              <div className="text-sm text-gray-500">Join our talented team</div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-span-4 mt-4 pt-4 border-t border-gray-100">
                      <Link to="/resources" className="text-[#f26522] hover:underline font-medium">
                        All resources →
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Pricing (Direct link) - Updated to match other menu items */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/pricing" className="text-gray-700 hover:text-[#f26522] transition-colors inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium">
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        {/* Call to Action Button */}
        <div className="hidden md:block">
          <Button 
            className="bg-[#f26522] hover:bg-[#f26522]/90 text-white rounded-lg" 
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
                    <Link to="/services/human-resources" className="w-full flex items-center">
                      <Users className="h-4 w-4 mr-2 text-[#f26522]" />
                      <span>Human Resources</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/finance" className="w-full flex items-center">
                      <BarChart3 className="h-4 w-4 mr-2 text-[#f26522]" />
                      <span>Finance & Operations</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/compliance" className="w-full flex items-center">
                      <Shield className="h-4 w-4 mr-2 text-[#f26522]" />
                      <span>Legal & Compliance</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/strategy" className="w-full flex items-center">
                      <Target className="h-4 w-4 mr-2 text-[#f26522]" />
                      <span>Strategy & Planning</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services" className="w-full font-medium text-[#f26522] flex items-center justify-between">
                      <span>View all services</span>
                      <ChevronDown className="h-4 w-4 transform rotate-270" />
                    </Link>
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
                    <Link to="/solutions/chief-of-staff" className="w-full flex items-center">
                      <Briefcase className="h-4 w-4 mr-2 text-[#f26522]" />
                      <span>Chief of Staff</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/solutions/fractional-cfo" className="w-full flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-[#f26522]" />
                      <span>CFO</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/solutions/head-of-hr" className="w-full flex items-center">
                      <Users className="h-4 w-4 mr-2 text-[#f26522]" />
                      <span>Head of HR</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/solutions/fractional-recruiter" className="w-full flex items-center">
                      <UserPlus className="h-4 w-4 mr-2 text-[#f26522]" />
                      <span>Fractional Recruiter</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/solutions" className="w-full font-medium text-[#f26522] flex items-center justify-between">
                      <span>All solutions</span>
                      <ChevronDown className="h-4 w-4 transform rotate-270" />
                    </Link>
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
                    <Link to="/resources/blog" className="w-full flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-[#f26522]" />
                      <span>Blog</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/resources/guides" className="w-full flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-[#f26522]" />
                      <span>Startup Guides</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/resources/templates" className="w-full flex items-center">
                      <FileCheck className="h-4 w-4 mr-2 text-[#f26522]" />
                      <span>Templates</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/about-us" className="w-full flex items-center">
                      <Building className="h-4 w-4 mr-2 text-[#f26522]" />
                      <span>About Us</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/career" className="w-full flex items-center">
                      <Award className="h-4 w-4 mr-2 text-[#f26522]" />
                      <span>Career</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/resources" className="w-full font-medium text-[#f26522] flex items-center justify-between">
                      <span>All resources</span>
                      <ChevronDown className="h-4 w-4 transform rotate-270" />
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            {/* Mobile Pricing (Direct Link) */}
            <Link 
              to="/pricing" 
              className="text-gray-700 hover:text-[#f26522] transition-colors py-2 px-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            
            {/* Mobile CTA */}
            <Button 
              className="bg-[#f26522] hover:bg-[#f26522]/90 text-white w-full rounded-lg mt-2" 
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
