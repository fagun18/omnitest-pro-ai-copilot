
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, LineChart } from "lucide-react";

const Product = () => {
  return (
    <PageLayout 
      title="Our Product" 
      description="Discover how OmniTest's AI-powered testing capabilities can transform your development workflow"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">AI-Powered Testing Co-Pilot</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                OmniTest is a revolutionary browser extension that uses advanced AI to analyze your web application and provide intelligent testing suggestions.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-omnitest-100 p-1 rounded-full">
                    <Shield size={18} className="text-omnitest-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Comprehensive Detection</h3>
                    <p className="text-gray-600 dark:text-gray-300">Automatically identifies all components and user flows in your web application.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-omnitest-100 p-1 rounded-full">
                    <Zap size={18} className="text-omnitest-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Smart Testing Suggestions</h3>
                    <p className="text-gray-600 dark:text-gray-300">Get contextual recommendations for test cases based on your application's functionality.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-omnitest-100 p-1 rounded-full">
                    <LineChart size={18} className="text-omnitest-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Coverage Analytics</h3>
                    <p className="text-gray-600 dark:text-gray-300">Track your testing progress with detailed coverage reports and analytics.</p>
                  </div>
                </li>
              </ul>
              <Button className="bg-omnitest-500 hover:bg-omnitest-600">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-white dark:bg-omnitest-800/50 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-omnitest-700">
              <div className="aspect-video bg-gray-100 dark:bg-omnitest-700 rounded-md flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-300">Product Demo Video</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-omnitest-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">How OmniTest Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-omnitest-800/50 p-6 rounded-lg shadow-md border border-gray-100 dark:border-omnitest-700">
              <div className="bg-omnitest-100 dark:bg-omnitest-700 h-12 w-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-omnitest-600 dark:text-omnitest-200 font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-xl mb-2 text-center">Install the Extension</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Add OmniTest to your browser from the Chrome Web Store or Firefox Add-ons.
              </p>
            </div>
            <div className="bg-white dark:bg-omnitest-800/50 p-6 rounded-lg shadow-md border border-gray-100 dark:border-omnitest-700">
              <div className="bg-omnitest-100 dark:bg-omnitest-700 h-12 w-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-omnitest-600 dark:text-omnitest-200 font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-xl mb-2 text-center">Scan Your App</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Open your web application and let OmniTest analyze its components and user flows.
              </p>
            </div>
            <div className="bg-white dark:bg-omnitest-800/50 p-6 rounded-lg shadow-md border border-gray-100 dark:border-omnitest-700">
              <div className="bg-omnitest-100 dark:bg-omnitest-700 h-12 w-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-omnitest-600 dark:text-omnitest-200 font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold text-xl mb-2 text-center">Start Testing</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Get intelligent test suggestions and track your coverage as you test.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Product;
