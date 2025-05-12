
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-gradient-to-b from-omnitest-50/60 to-transparent z-0"></div>
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-omnitest-100 text-omnitest-600 text-sm font-medium mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-highlight mr-2"></span>
            AI-Powered Web Testing Revolution
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-omnitest-500 to-highlight-500 text-transparent bg-clip-text">
            Never Miss a Test Case Again
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Your AI-powered testing companion that understands your app better than any checklist. Automatically detect components, suggest tests, and track coverage.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="bg-highlight hover:bg-highlight-600 text-white font-medium px-6 py-6">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-omnitest text-omnitest font-medium px-6 py-6">
              Book a Demo
            </Button>
          </div>
        </div>
        
        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-lg border border-gray-200 shadow-lg overflow-hidden bg-white">
            <div className="h-12 bg-gray-100 border-b border-gray-200 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="mx-auto text-gray-500 text-sm">OmniTest Pro - AI Test Detection</div>
            </div>
            <div className="relative">
              <div className="p-2 bg-gray-50 border-b">
                <div className="flex items-center justify-between p-2 bg-white border rounded-md">
                  <div className="text-sm text-gray-500">https://your-web-app.com/checkout</div>
                  <div className="flex items-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-omnitest-400" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4">
                <div className="col-span-1 bg-gray-50 p-4 border-r border-gray-200">
                  <div className="space-y-3">
                    <div className="h-6 bg-omnitest-100 rounded w-4/5 animate-pulse-slow"></div>
                    <div className="h-6 bg-omnitest-100 rounded w-3/4 animate-pulse-slow"></div>
                    <div className="h-6 bg-omnitest-100 rounded w-5/6 animate-pulse-slow"></div>
                    <div className="h-16 bg-highlight-100 rounded w-full mt-4"></div>
                    <div className="h-6 bg-omnitest-100 rounded w-3/5 animate-pulse-slow"></div>
                    <div className="h-6 bg-omnitest-100 rounded w-4/5 animate-pulse-slow"></div>
                  </div>
                </div>
                <div className="col-span-3 p-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-6">
                      <div className="font-medium">Elements Detected: <span className="text-omnitest-500">23</span></div>
                      <div className="flex items-center gap-2 text-sm px-2 py-1 bg-green-100 text-green-700 rounded">
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        AI Analysis Complete
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-4 h-4 mt-0.5 rounded-sm border border-gray-300 flex items-center justify-center bg-white">
                          <svg viewBox="0 0 24 24" className="w-3 h-3 text-highlight-500" fill="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium">Payment Form Validation</div>
                          <div className="text-xs text-gray-500">5 test cases</div>
                        </div>
                        <div className="ml-auto text-xs text-green-600 font-medium">Covered</div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-4 h-4 mt-0.5 rounded-sm border border-gray-300 flex items-center justify-center bg-white">
                          <svg viewBox="0 0 24 24" className="w-3 h-3 text-highlight-500" fill="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium">Cart Summary Component</div>
                          <div className="text-xs text-gray-500">3 test cases</div>
                        </div>
                        <div className="ml-auto text-xs text-green-600 font-medium">Covered</div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-4 h-4 mt-0.5 rounded-sm border border-gray-300 bg-white"></div>
                        <div className="ml-3">
                          <div className="text-sm font-medium">Payment Gateway Fallback</div>
                          <div className="text-xs text-gray-500">2 test cases</div>
                        </div>
                        <div className="ml-auto text-xs text-red-600 font-medium">Not Tested</div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-4 h-4 mt-0.5 rounded-sm border border-gray-300 bg-white"></div>
                        <div className="ml-3">
                          <div className="text-sm font-medium">Order Confirmation Flow</div>
                          <div className="text-xs text-gray-500">4 test cases</div>
                        </div>
                        <div className="ml-auto text-xs text-yellow-600 font-medium">Partial</div>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-omnitest-50 border border-omnitest-100 mt-6">
                      <div className="flex items-center text-sm text-omnitest-600">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">AI Suggestion:</span>
                        <span className="ml-2">Test payment failure scenarios for improved coverage.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center gap-8 flex-wrap">
          <div className="text-gray-400 dark:text-gray-600 flex items-center">
            <span className="text-sm font-medium mr-2">Trusted by teams at</span>
          </div>
          {["Company A", "Company B", "Company C", "Company D"].map((company) => (
            <div key={company} className="text-gray-400 dark:text-gray-600 font-semibold text-lg">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
