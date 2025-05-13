import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Check, X, AlertCircle, ChevronDown, FilePlus, Clipboard, LayoutDashboard } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TestingSystem = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  
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
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="dashboard" className="text-sm">
                  <LayoutDashboard className="w-4 h-4 mr-2" /> Dashboard
                </TabsTrigger>
                <TabsTrigger value="components" className="text-sm">Components</TabsTrigger>
                <TabsTrigger value="tests" className="text-sm">Tests</TabsTrigger>
                <TabsTrigger value="coverage" className="text-sm">Coverage</TabsTrigger>
                <TabsTrigger value="analytics" className="text-sm">Analytics</TabsTrigger>
              </TabsList>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">Analyzing:</span>
                <div className="flex items-center border rounded px-2 py-1 bg-white dark:bg-gray-800 text-sm">
                  <span className="mr-2">https://yourwebapp.com</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            <TabsContent value="dashboard" className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Components Detected</h3>
                    <span className="text-2xl font-bold text-omnitest-600">42</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div className="bg-omnitest-500 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                  <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">100% detection complete</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Test Coverage</h3>
                    <span className="text-2xl font-bold text-omnitest-600">68%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div className="bg-omnitest-500 h-2 rounded-full" style={{width: '68%'}}></div>
                  </div>
                  <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">+12% from last scan</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Issues Detected</h3>
                    <span className="text-2xl font-bold text-amber-600">7</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div className="bg-amber-500 h-2 rounded-full" style={{width: '30%'}}></div>
                  </div>
                  <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">7 issues recommended for testing</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Test Suggestions */}
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
                
                {/* Recent Tests */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold">Recent Tests</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {[
                        { name: "Login Form Validation", status: "passed", date: "2 hours ago" },
                        { name: "Product Search Filtering", status: "passed", date: "4 hours ago" },
                        { name: "User Profile Update", status: "failed", date: "Yesterday" },
                        { name: "Product Image Gallery", status: "passed", date: "Yesterday" },
                        { name: "Responsive Layout Checks", status: "warning", date: "2 days ago" }
                      ].map((test, index) => (
                        <li key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                          <div>
                            <div className="flex items-center">
                              {test.status === "passed" ? (
                                <Check className="w-4 h-4 text-green-500 mr-2" />
                              ) : test.status === "failed" ? (
                                <X className="w-4 h-4 text-red-500 mr-2" />
                              ) : (
                                <AlertCircle className="w-4 h-4 text-amber-500 mr-2" />
                              )}
                              <span className="font-medium">{test.name}</span>
                            </div>
                            <span className="text-xs text-gray-500 dark:text-gray-400 ml-6">{test.date}</span>
                          </div>
                          <Button variant="ghost" size="sm">View</Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="components" className="p-0">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold">Detected Components</h3>
                </div>
                <div className="p-6">
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
                        className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                          selectedComponent === component.name 
                          ? "border-omnitest-500 bg-omnitest-50 dark:bg-omnitest-900/30" 
                          : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                        onClick={() => setSelectedComponent(component.name)}
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
                </div>
              </div>
            </TabsContent>
            
            {/* Other tab content would go here but simplified for brevity */}
            <TabsContent value="tests" className="p-0">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-center text-gray-500">Test management interface would appear here</h3>
              </div>
            </TabsContent>
            
            <TabsContent value="coverage" className="p-0">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-center text-gray-500">Coverage reporting dashboard would appear here</h3>
              </div>
            </TabsContent>
            
            <TabsContent value="analytics" className="p-0">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-center text-gray-500">Testing analytics would appear here</h3>
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
