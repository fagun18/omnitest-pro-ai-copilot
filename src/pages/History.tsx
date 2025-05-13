
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteAnalyzer, AnalysisResult } from "@/utils/siteAnalyzer";
import { ExternalLink, BarChart2, RefreshCw } from "lucide-react";

interface HistoryEntry {
  url: string;
  result: AnalysisResult;
  date: Date;
}

const History = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Load history data
    loadHistory();
  }, []);
  
  const loadHistory = () => {
    setIsLoading(true);
    
    try {
      // Get analysis history from the analyzer
      const analyzerHistory = siteAnalyzer.getAnalysisHistory();
      
      // Convert to history entries with dates
      const entries: HistoryEntry[] = analyzerHistory.map(entry => ({
        url: entry.url,
        result: entry.result,
        date: new Date(Date.now() - Math.random() * 10000000)
      }));
      
      // Sort by most recent first
      entries.sort((a, b) => b.date.getTime() - a.date.getTime());
      
      setHistory(entries);
    } catch (error) {
      console.error("Failed to load history:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const viewTest = (url: string) => {
    navigate("/system", { state: { initialUrl: url } });
  };
  
  // Format domain from URL
  const formatDomain = (url: string) => {
    try {
      const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
      return urlObj.hostname;
    } catch (e) {
      return url;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="OmniTest - Test History"
        description="View your test history and previous analysis results"
        keywords="test history, test analysis, testing records"
      />
      <Header />
      
      <main className="flex-1 pt-16 bg-gray-50 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">Test History</h1>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="text-sm"
                onClick={() => loadHistory()}
                disabled={isLoading}
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="p-6">
              {history.length === 0 ? (
                <div className="text-center py-12">
                  <BarChart2 className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-medium mb-2">No Test History</h3>
                  <p className="text-gray-500 max-w-md mx-auto mb-6">
                    You haven't run any tests yet. Scan a website to generate test suggestions and build your history.
                  </p>
                  <Button onClick={() => navigate("/system")}>
                    Start Testing
                  </Button>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Website</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Elements</TableHead>
                      <TableHead>Coverage</TableHead>
                      <TableHead>Issues</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {history.map((entry, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <ExternalLink className="w-4 h-4 mr-2 text-gray-400" />
                            {formatDomain(entry.url)}
                          </div>
                          <div className="text-xs text-gray-500 mt-1 truncate max-w-xs">
                            {entry.url}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>{entry.date.toLocaleDateString()}</div>
                          <div className="text-xs text-gray-500">
                            {entry.date.toLocaleTimeString()}
                          </div>
                        </TableCell>
                        <TableCell>{entry.result.elementCount}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={entry.result.coverage > 70 ? "default" : 
                                    entry.result.coverage > 40 ? "outline" : "secondary"}
                          >
                            {entry.result.coverage}%
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={
                              entry.result.issuesDetected > 10 ? "destructive" :
                              entry.result.issuesDetected > 5 ? "outline" : "default"
                            }
                          >
                            {entry.result.issuesDetected}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => viewTest(entry.url)}
                          >
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default History;
