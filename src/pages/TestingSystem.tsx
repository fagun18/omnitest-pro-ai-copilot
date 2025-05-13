import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Check, X, AlertCircle, ChevronDown, FilePlus, Clipboard, LayoutDashboard, Globe, Info } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

const TestingSystem = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [targetUrl, setTargetUrl] = useState("");
  const [scanning, setScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [elementCount, setElementCount] = useState(0);
  const [testSuggestions, setTestSuggestions] = useState<Array<{
    name: string;
    covered: boolean;
    status: "covered" | "not-tested" | "partial";
    testCases: number;
  }>>([]);
  const [aiSuggestion, setAiSuggestion] = useState("");
  
  const handleUrlSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!targetUrl) {
      toast({
        title: "URL Required",
        description: "Please enter a valid website URL to scan",
        variant: "destructive"
      });
      return;
    }
    
    // Start the scanning simulation
    setScanning(true);
    setScanComplete(false);
    setTestSuggestions([]);
    setElementCount(0);
    
    // Simulate scanning process
    setTimeout(() => {
      // Simulate element detection over time
      let count = 0;
      const elementInterval = setInterval(() => {
        count += Math.floor(Math.random() * 3) + 1;
        if (count >= 23) {
          count = 23; // Final count matching design
          clearInterval(elementInterval);
        }
        setElementCount(count);
      }, 300);
      
      // After 3 seconds, show completed analysis and suggestions
      setTimeout(() => {
        setScanning(false);
        setScanComplete(true);
        
        // Generate test suggestions based on the URL
        const generatedSuggestions = [
          {
            name: "Payment Form Validation",
            covered: true,
            status: "covered" as const,
            testCases: 5
          },
          {
            name: "Cart Summary Component",
            covered: true,
            status: "covered" as const,
            testCases: 3
          },
          {
            name: "Payment Gateway Fallback",
            covered: false,
            status: "not-tested" as const,
            testCases: 2
          },
          {
            name: "Order Confirmation Flow",
            covered: false,
            status: "partial" as const,
            testCases: 4
          }
        ];
        
        setTestSuggestions(generatedSuggestions);
        setAiSuggestion("Test payment failure scenarios for improved coverage.");
        
      }, 3000);
    }, 1000);
  };
  
  useEffect(() => {
    // Reset the form when the tab changes
    if (activeTab !== "dashboard" && scanning) {
      setScanning(false);
    }
  }, [activeTab, scanning]);
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "covered":
        return "text-green-600";
      case "not-tested":
        return "text-red-600";
      case "partial":
        return "text-amber-600";
      default:
        return "text-gray-600";
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="OmniTest - Testing Companion System"
        description="AI-powered testing companion that automatically detects components, suggests tests, and tracks coverage"
        keywords="AI testing, test automation, component detection, test suggestions, coverage tracking"
      />
      <Header />
      
      <main className="flex-1 pt-16 bg-gray-50 dark:bg-gray-900">
        {/* System Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-semibold">OmniTest System</h1>
                <span className="bg-green-100 text-green-700 text-xs px-2.5 py-0.5 rounded-full">Live</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" className="text-sm">
                  <FilePlus className="w-4 h-4 mr-2" /> New Test
                </Button>
                <Button size="sm" className="text-sm">
                  <Clipboard className="w-4 h-4 mr-2" /> Export Report
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-6">
          <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <TabsList>
                <TabsTrigger value="dashboard" className="text-sm">
                  <LayoutDashboard className="w-4 h-4 mr-2" /> Dashboard
                </TabsTrigger>
                <TabsTrigger value="components" className="text-sm">Components</TabsTrigger>
                <TabsTrigger value="tests" className="text-sm">Tests</TabsTrigger>
                <TabsTrigger value="coverage" className="text-sm">Coverage</TabsTrigger>
                <TabsTrigger value="analytics" className="text-sm">Analytics</TabsTrigger>
              </TabsList>
              
              <form onSubmit={handleUrlSubmit} className="flex items-center gap-2 w-full md:w-auto">
                <div className="relative flex-1 md:flex-initial md:min-w-[350px]">
                  <Input
                    type="url"
                    placeholder="https://your-web-app.com/checkout"
                    className="pr-8"
                    value={targetUrl}
                    onChange={(e) => setTargetUrl(e.target.value)}
                    disabled={scanning}
                  />
                  {targetUrl && (
                    <button 
                      type="button" 
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      onClick={() => setTargetUrl("")}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <Button 
                  type="submit" 
                  size="default" 
                  disabled={scanning || !targetUrl}
                  className="whitespace-nowrap"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  {scanning ? "Scanning..." : "Scan Website"}
                </Button>
              </form>
            </div>
            
            <TabsContent value="dashboard" className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Components Detected</h3>
                    <span className="text-2xl font-bold text-omnitest-600">
                      {scanning ? (
                        <Skeleton className="w-8 h-8 rounded-md" />
                      ) : (
                        elementCount || "-"
                      )}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div 
                      className="bg-omnitest-500 h-2 rounded-full transition-all duration-500 ease-in-out" 
                      style={{width: scanning ? `${Math.min((elementCount / 23) * 100, 100)}%` : scanComplete ? '100%' : '0%'}}
                    ></div>
                  </div>
                  <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                    {scanning ? "Scanning in progress..." : scanComplete ? "100% detection complete" : "Waiting to scan"}
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Test Coverage</h3>
                    <span className="text-2xl font-bold text-omnitest-600">
                      {scanning || !scanComplete ? (
                        <Skeleton className="w-8 h-8 rounded-md" />
                      ) : (
                        "68%"
                      )}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div 
                      className="bg-omnitest-500 h-2 rounded-full transition-all duration-500 ease-in-out" 
                      style={{width: scanComplete ? '68%' : '0%'}}
                    ></div>
                  </div>
                  <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                    {scanning ? "Calculating coverage..." : scanComplete ? "+12% from last scan" : "Waiting to scan"}
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Issues Detected</h3>
                    <span className="text-2xl font-bold text-amber-600">
                      {scanning || !scanComplete ? (
                        <Skeleton className="w-8 h-8 rounded-md" />
                      ) : (
                        "7"
                      )}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div 
                      className="bg-amber-500 h-2 rounded-full transition-all duration-500 ease-in-out" 
                      style={{width: scanComplete ? '30%' : '0%'}}
                    ></div>
                  </div>
                  <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                    {scanning ? "Finding issues..." : scanComplete ? "7 issues recommended for testing" : "Waiting to scan"}
                  </p>
                </div>
              </div>
              
              {!scanComplete && !scanning && (
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center">
                  <Globe className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-medium mb-2">Enter a URL to Begin Analysis</h3>
                  <p className="text-gray-500 mb-6 max-w-md mx-auto">
                    Scan any website to automatically detect components and generate test suggestions using our AI-powered analysis.
                  </p>
                </div>
              )}
              
              {scanning && (
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center">
                  <div className="animate-spin w-12 h-12 border-4 border-omnitest-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-medium mb-2">Analyzing Website</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Our AI is scanning {targetUrl} to detect components and generate test suggestions.
                  </p>
                </div>
              )}
              
              {scanComplete && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Main Analysis Results */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                      <h3 className="font-semibold">Elements Detected: <span className="text-omnitest-500">{elementCount}</span></h3>
                      <div className="flex items-center gap-2 text-sm px-2 py-1 bg-green-100 text-green-700 rounded">
                        <Check className="w-4 h-4" />
                        AI Analysis Complete
                      </div>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-4">
                        {testSuggestions.map((suggestion, index) => (
                          <li key={index} className="flex items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                            <div className="w-4 h-4 mt-0.5 rounded-sm border border-gray-300 flex items-center justify-center bg-white mr-3">
                              {suggestion.covered && (
                                <Check className="w-3 h-3 text-highlight-500" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="text-sm font-medium">{suggestion.name}</div>
                                  <div className="text-xs text-gray-500">{suggestion.testCases} test cases</div>
                                </div>
                                <div className={`ml-auto text-xs font-medium ${getStatusColor(suggestion.status)}`}>
                                  {suggestion.status === "covered" ? "Covered" : 
                                   suggestion.status === "not-tested" ? "Not Tested" : "Partial"}
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                      
                      {aiSuggestion && (
                        <div className="mt-5 p-3 rounded bg-blue-50 border border-blue-100 flex items-center">
                          <Info className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                          <div className="text-sm">
                            <span className="font-medium text-blue-600">AI Suggestion:</span>
                            <span className="ml-2 text-blue-700">{aiSuggestion}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* AI Test Suggestions */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                      <h3 className="font-semibold">AI Test Suggestions</h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-4">
                        {[
                          "Payment Form Error Handling",
                          "User Authentication Flow",
                          "Cart Item Quantity Update",
                          "Address Validation Logic",
                          "Checkout Process Completion"
                        ].map((test, index) => (
                          <li key={index} className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-omnitest-100 dark:bg-omnitest-900 flex items-center justify-center text-omnitest-700 dark:text-omnitest-300 mr-3">
                                {index + 1}
                              </div>
                              <span>{test}</span>
                            </div>
                            <Button variant="outline" size="sm">Add</Button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="components" className="p-0">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold">Detected Components</h3>
                </div>
                <div className="p-6">
                  {!scanComplete ? (
                    <div className="text-center py-12">
                      <Globe className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                      <h3 className="text-xl font-medium mb-2">No Components Detected</h3>
                      <p className="text-gray-500 max-w-md mx-auto">
                        Scan a website to detect components and generate test suggestions.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { name: "Login Form", coverage: 90, tests: 5 },
                        { name: "Navigation Menu", coverage: 75, tests: 4 },
                        { name: "Product Card", coverage: 100, tests: 8 },
                        { name: "Search Bar", coverage: 50, tests: 2 },
                        { name: "Checkout Form", coverage: 60, tests: 6 },
                        { name: "User Profile", coverage: 40, tests: 3 }
                      ].map((component, index) => (
                        <div 
                          key={index} 
                          className="p-4 rounded-lg border cursor-pointer transition-colors border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <h4 className="font-medium">{component.name}</h4>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center">
                              <span className="text-xs text-gray-500 dark:text-gray-400 mr-2">Coverage:</span>
                              <div className="h-2 w-16 bg-gray-200 dark:bg-gray-700 rounded-full">
                                <div 
                                  className={`h-2 rounded-full ${
                                    component.coverage >= 70 ? "bg-green-500" : 
                                    component.coverage >= 40 ? "bg-amber-500" : "bg-red-500"
                                  }`} 
                                  style={{width: `${component.coverage}%`}}
                                ></div>
                              </div>
                              <span className="text-xs ml-2">{component.coverage}%</span>
                            </div>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{component.tests} tests</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
            
            {/* Other tab content */}
            <TabsContent value="tests" className="p-0">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-12 text-center">
                <Clipboard className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-medium mb-2">Test Management</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Scan a website first to generate and manage test cases.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="coverage" className="p-0">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-12 text-center">
                <Check className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-medium mb-2">Coverage Reports</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Scan a website first to generate and view coverage reports.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="analytics" className="p-0">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-12 text-center">
                <LayoutDashboard className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-medium mb-2">Testing Analytics</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Scan a website first to generate and view testing analytics.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TestingSystem;
