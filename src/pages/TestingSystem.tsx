
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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";

// Interface for test case types
interface TestCase {
  id: string;
  name: string;
  description: string;
  priority: "high" | "medium" | "low";
}

interface DetectedComponent {
  id: string;
  name: string;
  covered: boolean;
  status: "covered" | "not-tested" | "partial";
  testCases: TestCase[];
}

interface AISuggestion {
  id: string;
  name: string;
  description: string;
}

const TestingSystem = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [targetUrl, setTargetUrl] = useState("");
  const [scanning, setScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [elementCount, setElementCount] = useState(0);
  const [testSuggestions, setTestSuggestions] = useState<DetectedComponent[]>([]);
  const [aiSuggestions, setAiSuggestions] = useState<AISuggestion[]>([]);
  const [aiSuggestion, setAiSuggestion] = useState("");
  const [expandedItems, setExpandedItems] = useState<{[key: string]: boolean}>({});
  
  // Toggle expanded state for a component
  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  // Handle checkbox change for a component
  const handleCheckboxChange = (id: string) => {
    setTestSuggestions(prev => 
      prev.map(item => 
        item.id === id 
          ? { 
              ...item, 
              covered: !item.covered, 
              status: !item.covered ? "covered" : "not-tested" 
            } 
          : item
      )
    );
    
    // Show toast notification
    toast({
      title: "Test status updated",
      description: "The test status has been updated successfully.",
    });
  };
  
  // Handle Add button click for AI suggestions
  const handleAddSuggestion = (suggestion: AISuggestion) => {
    // Check if suggestion already exists in testSuggestions
    const exists = testSuggestions.some(item => item.name === suggestion.name);
    
    if (!exists) {
      const newTestSuggestion: DetectedComponent = {
        id: suggestion.id,
        name: suggestion.name,
        covered: false,
        status: "not-tested",
        testCases: [
          {
            id: `tc-${suggestion.id}-1`,
            name: `Verify ${suggestion.name.toLowerCase()}`,
            description: suggestion.description,
            priority: "medium"
          }
        ]
      };
      
      setTestSuggestions(prev => [...prev, newTestSuggestion]);
      
      // Show success toast
      toast({
        title: "Test added",
        description: `${suggestion.name} has been added to your test cases.`,
        variant: "default"
      });
      
      // Remove from AI suggestions
      setAiSuggestions(prev => prev.filter(item => item.id !== suggestion.id));
    }
  };
  
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
    setAiSuggestions([]);
    setElementCount(0);
    setExpandedItems({});
    
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
        
        // Generate dynamic test suggestions based on the URL
        const urlDomain = new URL(targetUrl.startsWith('http') ? targetUrl : `https://${targetUrl}`).hostname;
        console.log("Analyzing domain:", urlDomain);
        
        // Dynamic test suggestions based on the URL
        const generatedSuggestions = getAnalysisByDomain(urlDomain);
        setTestSuggestions(generatedSuggestions.components);
        setAiSuggestions(generatedSuggestions.suggestions);
        setAiSuggestion(generatedSuggestions.aiMessage);
        
      }, 3000);
    }, 1000);
  };
  
  // Dynamic analysis based on domain
  const getAnalysisByDomain = (domain: string) => {
    // E-commerce detection
    if (domain.includes('shop') || domain.includes('store') || domain.includes('commerce') || domain.includes('cart')) {
      return {
        components: [
          {
            id: "comp-1",
            name: "Payment Form Validation",
            covered: false,
            status: "not-tested" as const,
            testCases: [
              { 
                id: "tc-1-1", 
                name: "Validate credit card number format", 
                description: "Test that invalid credit card formats are rejected", 
                priority: "high" as const 
              },
              { 
                id: "tc-1-2", 
                name: "Test expiration date validation", 
                description: "Verify expired cards are rejected", 
                priority: "high" as const 
              },
              { 
                id: "tc-1-3", 
                name: "Test CVV code validation", 
                description: "Ensure CVV must be 3-4 digits", 
                priority: "medium" as const 
              }
            ]
          },
          {
            id: "comp-2",
            name: "Cart Summary Component",
            covered: false,
            status: "not-tested" as const,
            testCases: [
              { 
                id: "tc-2-1", 
                name: "Verify item quantity updates", 
                description: "Test that changing quantity updates total price", 
                priority: "high" as const 
              },
              { 
                id: "tc-2-2", 
                name: "Test removing items from cart", 
                description: "Ensure items can be removed from cart", 
                priority: "medium" as const 
              }
            ]
          },
          {
            id: "comp-3",
            name: "Payment Gateway Fallback",
            covered: false,
            status: "not-tested" as const,
            testCases: [
              { 
                id: "tc-3-1", 
                name: "Test primary gateway failure", 
                description: "Verify system falls back to secondary gateway", 
                priority: "high" as const 
              }
            ]
          },
          {
            id: "comp-4",
            name: "Order Confirmation Flow",
            covered: false,
            status: "partial" as const,
            testCases: [
              { 
                id: "tc-4-1", 
                name: "Verify order confirmation email", 
                description: "Test that email is sent with correct order details", 
                priority: "high" as const 
              },
              { 
                id: "tc-4-2", 
                name: "Test order summary page", 
                description: "Ensure page shows all purchased items", 
                priority: "medium" as const 
              }
            ]
          }
        ],
        suggestions: [
          { 
            id: "sug-1", 
            name: "Payment Form Error Handling", 
            description: "Test how the payment form handles network errors and timeouts" 
          },
          { 
            id: "sug-2", 
            name: "User Authentication Flow", 
            description: "Test guest checkout vs registered user checkout paths" 
          },
          { 
            id: "sug-3", 
            name: "Cart Item Quantity Update", 
            description: "Verify inventory checks when updating quantities" 
          },
          { 
            id: "sug-4", 
            name: "Address Validation Logic", 
            description: "Test international address formats and validation" 
          },
          { 
            id: "sug-5", 
            name: "Checkout Process Completion", 
            description: "Test order completion with various payment methods" 
          }
        ],
        aiMessage: "Test payment failure scenarios and edge cases for improved coverage."
      };
    }
    // Content/blog site detection
    else if (domain.includes('blog') || domain.includes('news') || domain.includes('content')) {
      return {
        components: [
          {
            id: "comp-1",
            name: "Comment Submission Form",
            covered: false,
            status: "not-tested" as const,
            testCases: [
              { 
                id: "tc-1-1", 
                name: "Test markdown formatting", 
                description: "Verify comment formatting options work correctly", 
                priority: "medium" as const 
              },
              { 
                id: "tc-1-2", 
                name: "Test comment length limits", 
                description: "Ensure character limits are enforced", 
                priority: "low" as const 
              }
            ]
          },
          {
            id: "comp-2",
            name: "Content Search Functionality",
            covered: false,
            status: "not-tested" as const,
            testCases: [
              { 
                id: "tc-2-1", 
                name: "Verify search results relevance", 
                description: "Test search returns relevant content", 
                priority: "high" as const 
              },
              { 
                id: "tc-2-2", 
                name: "Test search filters", 
                description: "Verify date and category filters work", 
                priority: "medium" as const 
              }
            ]
          },
          {
            id: "comp-3",
            name: "Social Sharing Buttons",
            covered: false,
            status: "not-tested" as const,
            testCases: [
              { 
                id: "tc-3-1", 
                name: "Test sharing on platforms", 
                description: "Verify content is shared correctly to socials", 
                priority: "medium" as const 
              }
            ]
          }
        ],
        suggestions: [
          { 
            id: "sug-1", 
            name: "Content Rating System", 
            description: "Test user ratings functionality and aggregation" 
          },
          { 
            id: "sug-2", 
            name: "Related Content Algorithm", 
            description: "Verify suggested content relevance and display" 
          },
          { 
            id: "sug-3", 
            name: "Subscribe Form Validation", 
            description: "Test email validation and subscription confirmation" 
          },
          { 
            id: "sug-4", 
            name: "Content Pagination", 
            description: "Test navigation between paginated content" 
          },
          { 
            id: "sug-5", 
            name: "Media Embedding", 
            description: "Verify video and image embeds function correctly" 
          }
        ],
        aiMessage: "Focus testing on search functionality and content filtering for improved user experience."
      };
    }
    // Default/generic site detection
    else {
      return {
        components: [
          {
            id: "comp-1",
            name: "Contact Form Validation",
            covered: false,
            status: "not-tested" as const,
            testCases: [
              { 
                id: "tc-1-1", 
                name: "Test email validation", 
                description: "Verify email format validation", 
                priority: "high" as const 
              },
              { 
                id: "tc-1-2", 
                name: "Test required fields", 
                description: "Ensure required fields cannot be empty", 
                priority: "high" as const 
              }
            ]
          },
          {
            id: "comp-2",
            name: "Navigation Menu",
            covered: false,
            status: "not-tested" as const,
            testCases: [
              { 
                id: "tc-2-1", 
                name: "Test mobile responsiveness", 
                description: "Verify menu collapses on mobile devices", 
                priority: "high" as const 
              },
              { 
                id: "tc-2-2", 
                name: "Test navigation links", 
                description: "Ensure all links direct to correct pages", 
                priority: "medium" as const 
              }
            ]
          },
          {
            id: "comp-3",
            name: "Image Carousel",
            covered: false,
            status: "not-tested" as const,
            testCases: [
              { 
                id: "tc-3-1", 
                name: "Test auto-rotation", 
                description: "Verify images rotate automatically", 
                priority: "low" as const 
              },
              { 
                id: "tc-3-2", 
                name: "Test manual navigation", 
                description: "Test next/previous controls work", 
                priority: "medium" as const 
              }
            ]
          }
        ],
        suggestions: [
          { 
            id: "sug-1", 
            name: "Page Load Performance", 
            description: "Test page load times across different devices" 
          },
          { 
            id: "sug-2", 
            name: "Cross-browser Compatibility", 
            description: "Verify site works on Chrome, Firefox, Safari" 
          },
          { 
            id: "sug-3", 
            name: "Form Submission Handling", 
            description: "Test error and success states for forms" 
          },
          { 
            id: "sug-4", 
            name: "Accessibility Compliance", 
            description: "Test keyboard navigation and screen reader support" 
          },
          { 
            id: "sug-5", 
            name: "Responsive Layouts", 
            description: "Verify layouts adapt to different screen sizes" 
          }
        ],
        aiMessage: "Focus on testing responsive design and mobile usability for better user experience."
      };
    }
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
                        {testSuggestions.map((suggestion) => (
                          <li key={suggestion.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                            <Collapsible
                              open={expandedItems[suggestion.id] || false}
                              onOpenChange={() => toggleExpanded(suggestion.id)}
                              className="w-full"
                            >
                              <div className="flex items-start">
                                <div className="mt-0.5 mr-3">
                                  <Checkbox 
                                    id={`check-${suggestion.id}`}
                                    checked={suggestion.covered}
                                    onCheckedChange={() => handleCheckboxChange(suggestion.id)}
                                  />
                                </div>
                                <div className="flex-1">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <CollapsibleTrigger className="flex items-center text-left w-full">
                                        <div>
                                          <div className="text-sm font-medium">{suggestion.name}</div>
                                          <div className="text-xs text-gray-500">{suggestion.testCases.length} test cases</div>
                                        </div>
                                        <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${expandedItems[suggestion.id] ? 'rotate-180' : ''}`} />
                                      </CollapsibleTrigger>
                                    </div>
                                    <div className={`ml-auto text-xs font-medium ${getStatusColor(suggestion.status)}`}>
                                      {suggestion.status === "covered" ? "Covered" : 
                                      suggestion.status === "not-tested" ? "Not Tested" : "Partial"}
                                    </div>
                                  </div>
                                  
                                  <CollapsibleContent>
                                    <div className="mt-4 pl-4 border-l-2 border-gray-100">
                                      <h4 className="font-medium text-sm mb-2">Test Cases:</h4>
                                      <ul className="space-y-3">
                                        {suggestion.testCases.map((testCase) => (
                                          <li key={testCase.id} className="text-sm">
                                            <div className="font-medium">{testCase.name}</div>
                                            <div className="text-xs text-gray-500">{testCase.description}</div>
                                            <div className="mt-1">
                                              <span className={`text-xs px-2 py-0.5 rounded-full 
                                                ${testCase.priority === 'high' ? 'bg-red-100 text-red-700' : 
                                                 testCase.priority === 'medium' ? 'bg-amber-100 text-amber-700' : 
                                                 'bg-blue-100 text-blue-700'}`}>
                                                {testCase.priority} priority
                                              </span>
                                            </div>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </CollapsibleContent>
                                </div>
                              </div>
                            </Collapsible>
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
                        {aiSuggestions.map((suggestion, index) => (
                          <li key={suggestion.id} className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-omnitest-100 dark:bg-omnitest-900 flex items-center justify-center text-omnitest-700 dark:text-omnitest-300 mr-3">
                                {index + 1}
                              </div>
                              <div>
                                <div className="font-medium">{suggestion.name}</div>
                                <div className="text-xs text-gray-500">{suggestion.description}</div>
                              </div>
                            </div>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleAddSuggestion(suggestion)}
                            >
                              Add
                            </Button>
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

