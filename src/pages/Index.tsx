
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="OmniTest - AI-Powered Testing Co-Pilot for Modern Applications"
        description="OmniTest is an AI-powered testing co-pilot that automatically detects web components, suggests intelligent tests, and tracks coverage to improve your app quality."
        keywords="AI testing, automated testing, web testing, QA automation, testing co-pilot, AI test generation, quality assurance, test coverage, software testing, bug detection, test automation"
      />
      <Header />
      <main className="pt-16"> {/* Add padding-top to account for fixed header */}
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
