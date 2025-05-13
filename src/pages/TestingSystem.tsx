
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Check, X, AlertCircle, ChevronDown, FilePlus, Clipboard, LayoutDashboard, Globe, Info } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

// Custom components
import MetricsCards from "@/components/testing/MetricsCards";
import ComponentList from "@/components/testing/ComponentList";
import SuggestionsList from "@/components/testing/SuggestionsList";
import ComponentPanel from "@/components/testing/ComponentPanel";
import NotificationBell from "@/components/NotificationBell";

// Utils
import { siteAnalyzer, DetectedComponent, AISuggestion } from "@/utils/siteAnalyzer";
import { websocketService } from "@/utils/websocket";

const TestingSystem = () => {
  const location = useLocation();
  const initialUrl = location.state?.initialUrl || "";
  
  const [activeTab, setActiveTab] = useState("dashboard");
  const [targetUrl, setTargetUrl] = useState(initialUrl);
  const [scanning, setScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [elementCount, setElementCount] = useState(0);
  const [testSuggestions, setTestSuggestions] = useState<DetectedComponent[]>([]);
  const [aiSuggestions, setAiSuggestions] = useState<AISuggestion[]>([]);
  const [aiSuggestion, setAiSuggestion] = useState("");
  const [coverage, setCoverage] = useState(0);
  const [issuesDetected, setIssuesDetected] = useState(0);
  
  // Connect to WebSocket on component mount
  useEffect(() => {
    websocketService.connect()
      .on('scan-progress', handleScanProgress);
      
    return () => {
      websocketService.off('scan-progress', handleScanProgress);
      websocketService.disconnect();
    };
  }, []);
  
  // Load initial URL if provided
  useEffect(() => {
    if (initialUrl) {
      handleUrlSubmit(new Event('submit') as any);
    }
  }, [initialUrl]);
  
  // Handle scan progress updates
  const handleScanProgress = (data: any) => {
    if (data.testId === targetUrl) {
      console.log("Scan progress:", data.progress);
      // Update UI based on progress
    }
  };
  
  // Handle component status change (checkbox toggle)
  const handleComponentStatusChange = (id: string) => {
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
  
  const handleUrlSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!targetUrl) {
      toast({
        title: "URL Required",
        description: "Please enter a valid website URL to scan",
        variant: "destructive"
      });
      return;
    }
    
    // Start the scanning process
    setScanning(true);
    setScanComplete(false);
    setTestSuggestions([]);
    setAiSuggestions([]);
    setElementCount(0);
    
    try {
      // Simulate element detection over time
      let count = 0;
      const elementInterval = setInterval(() => {
        count += Math.floor(Math.random() * 3) + 1;
        if (count >= 23) {
          count = 23; // Final count
          clearInterval(elementInterval);
        }
        setElementCount(count);
      }, 300);
      
      // Perform actual analysis using the site analyzer
      const analysisResult = await siteAnalyzer.analyzeUrl(targetUrl);
      
      // Update state with real results
      setTestSuggestions(analysisResult.components);
      setAiSuggestions(analysisResult.suggestions);
      setAiSuggestion(analysisResult.aiMessage);
      setElementCount(analysisResult.elementCount);
      setCoverage(analysisResult.coverage);
      setIssuesDetected(analysisResult.issuesDetected);
      
      // Show success notification
      toast({
        title: "Analysis Complete",
        description: `Successfully analyzed ${targetUrl} and found ${analysisResult.components.length} testable components.`,
        variant: "default"
      });
      
      // Add notification for new test insights
      websocketService.send({
        type: 'notification',
        data: {
          title: 'New Test Insights Available',
          message: `${analysisResult.components.length} components detected on ${targetUrl}`,
          type: 'info'
        },
        timestamp: Date.now()
      });
      
      setScanning(false);
      setScanComplete(true);
    } catch (error) {
      console.error("Error analyzing URL:", error);
      
      toast({
        title: "Analysis Failed",
        description: "Failed to analyze the website. Please try again.",
        variant: "destructive"
      });
      
      setScanning(false);
    }
  };
  
  useEffect(() => {
    // Reset the form when the tab changes
    if (activeTab !== "dashboard" && scanning) {
      setScanning(false);
    }
  }, [activeTab, scanning]);
  
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
                <NotificationBell />
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
              <MetricsCards 
                scanning={scanning}
                scanComplete={scanComplete}
                elementCount={elementCount}
                coverage={coverage}
                issuesDetected={issuesDetected}
              />
              
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
                    <ComponentList 
                      components={testSuggestions}
                      aiSuggestion={aiSuggestion}
                      onComponentStatusChange={handleComponentStatusChange}
                    />
                  </div>
                  
                  {/* AI Test Suggestions */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                      <h3 className="font-semibold">AI Test Suggestions</h3>
                    </div>
                    <SuggestionsList 
                      suggestions={aiSuggestions}
                      onAddSuggestion={handleAddSuggestion}
                    />
                  </div>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="components" className="p-0">
              <ComponentPanel activeTab="components" scanComplete={scanComplete} />
            </TabsContent>
            
            <TabsContent value="tests" className="p-0">
              <ComponentPanel activeTab="tests" scanComplete={scanComplete} />
            </TabsContent>
            
            <TabsContent value="coverage" className="p-0">
              <ComponentPanel activeTab="coverage" scanComplete={scanComplete} />
            </TabsContent>
            
            <TabsContent value="analytics" className="p-0">
              <ComponentPanel activeTab="analytics" scanComplete={scanComplete} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TestingSystem;
