
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-omnitest-400 to-omnitest-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Testing Process Today</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join hundreds of companies that have revolutionized their QA approach with OmniTest Pro's AI-powered testing insights.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-omnitest-600 font-medium px-8 py-6">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-medium px-8 py-6">
              Schedule Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Active Companies</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">5M+</div>
              <div className="text-white/80">Tests Generated</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">68%</div>
              <div className="text-white/80">Fewer Bugs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
