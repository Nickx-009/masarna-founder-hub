
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Service Pages
import Services from "./pages/Services";
import HumanResources from "./pages/services/HumanResources";
import Finance from "./pages/services/Finance";
import Legal from "./pages/services/Legal";
import Compliance from "./pages/services/Compliance";
import Strategy from "./pages/services/Strategy";
import Growth from "./pages/services/Growth";
import Operations from "./pages/services/Operations";

// Solution Pages
import Solutions from "./pages/Solutions";
import ChiefOfStaff from "./pages/solutions/ChiefOfStaff";
import FractionalCFO from "./pages/solutions/FractionalCFO";
import HeadOfHR from "./pages/solutions/HeadOfHR";
import FractionalRecruiter from "./pages/solutions/FractionalRecruiter";
import OperationsManager from "./pages/solutions/OperationsManager";
import ProjectManager from "./pages/solutions/ProjectManager";

// Resource Pages
import Resources from "./pages/Resources";
import Blog from "./pages/resources/Blog";
import Guides from "./pages/resources/Guides";
import CaseStudies from "./pages/resources/CaseStudies";
import Templates from "./pages/resources/Templates";
import Calculators from "./pages/resources/Calculators";
import Checklists from "./pages/resources/Checklists";
import Webinars from "./pages/resources/Webinars";
import Podcast from "./pages/resources/Podcast";
import Newsletter from "./pages/resources/Newsletter";

// Company Pages
import AboutUs from "./pages/company/AboutUs";
import Career from "./pages/company/Career";

// Other Pages
import Pricing from "./pages/Pricing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Services Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/human-resources" element={<HumanResources />} />
          <Route path="/services/finance" element={<Finance />} />
          <Route path="/services/legal" element={<Legal />} />
          <Route path="/services/compliance" element={<Compliance />} />
          <Route path="/services/strategy" element={<Strategy />} />
          <Route path="/services/growth" element={<Growth />} />
          <Route path="/services/operations" element={<Operations />} />
          
          {/* Solutions Routes */}
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/chief-of-staff" element={<ChiefOfStaff />} />
          <Route path="/solutions/fractional-cfo" element={<FractionalCFO />} />
          <Route path="/solutions/head-of-hr" element={<HeadOfHR />} />
          <Route path="/solutions/fractional-recruiter" element={<FractionalRecruiter />} />
          <Route path="/solutions/operations-manager" element={<OperationsManager />} />
          <Route path="/solutions/project-manager" element={<ProjectManager />} />
          
          {/* Resources Routes */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/guides" element={<Guides />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/templates" element={<Templates />} />
          <Route path="/resources/calculators" element={<Calculators />} />
          <Route path="/resources/checklists" element={<Checklists />} />
          <Route path="/resources/webinars" element={<Webinars />} />
          <Route path="/resources/podcast" element={<Podcast />} />
          <Route path="/resources/newsletter" element={<Newsletter />} />
          
          {/* Company Routes */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/career" element={<Career />} />
          
          {/* Other Routes */}
          <Route path="/pricing" element={<Pricing />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
