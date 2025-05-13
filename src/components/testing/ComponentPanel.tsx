
import { BarChart2, CheckSquare, Database, FileText, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

interface ComponentPanelProps {
  activeTab: string;
  scanComplete: boolean;
}

export const ComponentPanel = ({ activeTab, scanComplete }: ComponentPanelProps) => {
  // Mock data for components tab
  const components = [
    { name: "Login Form", coverage: 90, tests: 5 },
    { name: "Navigation Menu", coverage: 75, tests: 4 },
    { name: "Product Card", coverage: 100, tests: 8 },
    { name: "Search Bar", coverage: 50, tests: 2 },
    { name: "Checkout Form", coverage: 60, tests: 6 },
    { name: "User Profile", coverage: 40, tests: 3 }
  ];
  
  // Mock data for tests tab
  const tests = [
    { id: "TC-001", name: "Verify login with valid credentials", status: "Passed", component: "Login Form" },
    { id: "TC-002", name: "Verify login with invalid credentials", status: "Failed", component: "Login Form" },
    { id: "TC-003", name: "Test responsive navigation menu", status: "Passed", component: "Navigation Menu" },
    { id: "TC-004", name: "Test product filtering", status: "Pending", component: "Product Listing" },
    { id: "TC-005", name: "Test checkout process", status: "Passed", component: "Checkout Form" }
  ];
  
  if (activeTab === "components") {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Detected Components</h3>
            <Input 
              className="max-w-xs"
              placeholder="Search components..."
              type="search"
            />
          </div>
        </div>
        <div className="p-6">
          {!scanComplete ? (
            <div className="text-center py-12">
              <Database className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-medium mb-2">No Components Detected</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Scan a website to detect components and generate test suggestions.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {components.map((component, index) => (
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
    );
  } else if (activeTab === "tests") {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Test Cases</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <FileText className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Configure
              </Button>
            </div>
          </div>
        </div>
        <div className="p-0 overflow-x-auto">
          {!scanComplete ? (
            <div className="text-center py-12">
              <CheckSquare className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-medium mb-2">No Tests Available</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Scan a website first to generate and manage test cases.
              </p>
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-medium text-gray-500">ID</th>
                  <th className="text-left p-4 font-medium text-gray-500">Test Name</th>
                  <th className="text-left p-4 font-medium text-gray-500">Component</th>
                  <th className="text-left p-4 font-medium text-gray-500">Status</th>
                  <th className="text-left p-4 font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tests.map((test, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 text-sm">{test.id}</td>
                    <td className="p-4 text-sm">{test.name}</td>
                    <td className="p-4 text-sm">{test.component}</td>
                    <td className="p-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        test.status === 'Passed' ? 'bg-green-100 text-green-800' :
                        test.status === 'Failed' ? 'bg-red-100 text-red-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {test.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm">
                      <Button variant="ghost" size="sm">View</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  } else if (activeTab === "coverage") {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold">Coverage Report</h3>
        </div>
        <div className="p-6">
          {!scanComplete ? (
            <div className="text-center py-12">
              <CheckSquare className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-medium mb-2">No Coverage Data</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Scan a website first to generate and view coverage reports.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Overall Coverage</CardTitle>
                  <CardDescription>Percentage of components with test coverage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-4">75%</div>
                  <Progress value={75} className="h-2" />
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Functional Coverage</CardTitle>
                    <CardDescription>Feature functionality coverage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-2">82%</div>
                    <Progress value={82} className="h-2" />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>UI Coverage</CardTitle>
                    <CardDescription>User interface element coverage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-2">68%</div>
                    <Progress value={68} className="h-2" />
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  } else if (activeTab === "analytics") {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold">Testing Analytics</h3>
        </div>
        <div className="p-6">
          {!scanComplete ? (
            <div className="text-center py-12">
              <BarChart2 className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-medium mb-2">No Analytics Data</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Scan a website first to generate and view testing analytics.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Test Results Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">24</div>
                      <div className="text-sm text-gray-500">Passed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">5</div>
                      <div className="text-sm text-gray-500">Failed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">8</div>
                      <div className="text-sm text-gray-500">Pending</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">37</div>
                      <div className="text-sm text-gray-500">Total</div>
                    </div>
                  </div>
                  
                  <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div className="flex h-full">
                      <div className="bg-green-500 h-full" style={{ width: "65%" }}></div>
                      <div className="bg-red-500 h-full" style={{ width: "14%" }}></div>
                      <div className="bg-blue-500 h-full" style={{ width: "21%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  return null;
};

export default ComponentPanel;
