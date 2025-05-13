
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormspreeScript from "./components/FormspreeScript";
import { HelmetProvider } from "react-helmet-async";
import CookieConsent from "./components/CookieConsent";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServerError from "./pages/ServerError";
import Product from "./pages/Product";
import Features from "./pages/Features";
import CaseStudies from "./pages/CaseStudies";
import Documentation from "./pages/Documentation";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import TestingSystem from "./pages/TestingSystem";
import History from "./pages/History";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <BrowserRouter>
        <FormspreeScript />
        <CookieConsent />
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Product Routes */}
          <Route path="/product" element={<Product />} />
          <Route path="/features" element={<Features />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/system" element={<TestingSystem />} />
          <Route path="/history" element={<History />} />
          
          {/* Company Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<About />} /> {/* Redirects to about page */}
          
          {/* Legal Routes */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          
          {/* Error Routes */}
          <Route path="/500" element={<ServerError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </QueryClientProvider>
);

// Add TypeScript interface for window.formbutton
declare global {
  interface Window {
    formbutton: any;
  }
}

export default App;
