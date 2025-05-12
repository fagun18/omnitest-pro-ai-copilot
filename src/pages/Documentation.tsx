
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Book, Code, VideoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Documentation = () => {
  const documentationSections = [
    {
      title: "Installation Guide",
      description: "Learn how to install OmniTest on different browsers",
      icon: <FileText className="h-5 w-5" />,
      link: "#installation",
      content: `
        <h3 class="text-xl font-bold mb-4">Installing OmniTest Browser Extension</h3>
        <p class="mb-4">Follow these simple steps to install OmniTest on your preferred browser:</p>
        <ol class="list-decimal pl-5 mb-6 space-y-2">
          <li>Visit the browser extension store for your browser (Chrome Web Store, Firefox Add-ons, etc.)</li>
          <li>Search for "OmniTest" in the store or use the direct link from our website</li>
          <li>Click "Add to Browser" or "Install" button</li>
          <li>Accept the permissions required</li>
          <li>Once installed, the OmniTest icon will appear in your browser toolbar</li>
          <li>Click the icon to start using OmniTest</li>
        </ol>
        <p class="mb-4">Note: OmniTest supports the following browsers:</p>
        <ul class="list-disc pl-5 mb-4">
          <li>Google Chrome (version 88 and later)</li>
          <li>Microsoft Edge (version 88 and later)</li>
          <li>Mozilla Firefox (version 86 and later)</li>
          <li>Safari (version 14 and later)</li>
        </ul>
      `
    },
    {
      title: "Quick Start Tutorial",
      description: "Get up and running with OmniTest in 5 minutes",
      icon: <Book className="h-5 w-5" />,
      link: "#quickstart",
      content: `
        <h3 class="text-xl font-bold mb-4">Quick Start Guide</h3>
        <p class="mb-4">Follow this simple 5-minute tutorial to get started with OmniTest:</p>
        <ol class="list-decimal pl-5 mb-6 space-y-4">
          <li>
            <p class="font-semibold">Open the extension</p>
            <p>Click on the OmniTest icon in your browser toolbar to open the extension panel</p>
          </li>
          <li>
            <p class="font-semibold">Navigate to your web application</p>
            <p>Go to the web application you want to test in the same browser window</p>
          </li>
          <li>
            <p class="font-semibold">Start scanning</p>
            <p>Click "Start Scan" in the OmniTest panel to analyze the current page</p>
          </li>
          <li>
            <p class="font-semibold">Review detected components</p>
            <p>OmniTest will identify interactive elements, forms, and user flows on the page</p>
          </li>
          <li>
            <p class="font-semibold">Generate test suggestions</p>
            <p>Click "Generate Tests" to receive AI-powered test case suggestions</p>
          </li>
        </ol>
        <p class="mb-4">Congratulations! You've just completed your first OmniTest scan and generated your first test suggestions.</p>
      `
    },
    {
      title: "Configuration Options",
      description: "Customize OmniTest for your specific needs",
      icon: <Code className="h-5 w-5" />,
      link: "#configuration",
      content: `
        <h3 class="text-xl font-bold mb-4">Configuration Settings</h3>
        <p class="mb-4">OmniTest offers several configuration options to customize your testing experience:</p>
        
        <h4 class="text-lg font-semibold mb-2">General Settings</h4>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><span class="font-medium">Scan Depth:</span> Control how deep OmniTest scans your application (Basic, Standard, Comprehensive)</li>
          <li><span class="font-medium">Automatic Scanning:</span> Enable/disable automatic scanning when navigating to new pages</li>
          <li><span class="font-medium">Element Highlighting:</span> Toggle visual highlighting of detected elements</li>
          <li><span class="font-medium">Dark Mode:</span> Switch between light and dark interface themes</li>
        </ul>
        
        <h4 class="text-lg font-semibold mb-2">Test Generation Settings</h4>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><span class="font-medium">Test Format:</span> Choose output format (Plain text, Gherkin, Cypress, Selenium, etc.)</li>
          <li><span class="font-medium">Test Priority:</span> Focus on specific types of tests (Functional, Security, Accessibility, Performance)</li>
          <li><span class="font-medium">Test Detail Level:</span> Set the granularity of generated test cases</li>
        </ul>
        
        <h4 class="text-lg font-semibold mb-2">Integration Settings</h4>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><span class="font-medium">Export Options:</span> Configure integrations with test management tools</li>
          <li><span class="font-medium">API Keys:</span> Manage API keys for third-party integrations</li>
          <li><span class="font-medium">Webhook URLs:</span> Set up webhooks for test result notifications</li>
        </ul>
      `
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step guides on using OmniTest",
      icon: <VideoIcon className="h-5 w-5" />,
      link: "#videos",
      content: `
        <h3 class="text-xl font-bold mb-4">Video Tutorial Library</h3>
        <p class="mb-6">Learn OmniTest features through our comprehensive video tutorial library:</p>
        
        <div class="space-y-6">
          <div>
            <h4 class="text-lg font-semibold mb-2">Getting Started with OmniTest</h4>
            <div class="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center mb-2">
              <span class="text-gray-500">Video Thumbnail</span>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-300">Duration: 5:23 • Learn the basics of OmniTest and how to get started with your first test.</p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-2">Advanced Component Detection</h4>
            <div class="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center mb-2">
              <span class="text-gray-500">Video Thumbnail</span>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-300">Duration: 8:17 • Deep dive into how OmniTest detects complex web components.</p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-2">Integrating with Your CI/CD Pipeline</h4>
            <div class="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center mb-2">
              <span class="text-gray-500">Video Thumbnail</span>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-300">Duration: 12:05 • Learn how to integrate OmniTest with your existing CI/CD workflows.</p>
          </div>
        </div>
        
        <div class="mt-6">
          <Button className="bg-omnitest-500 hover:bg-omnitest-600">View Full Video Library</Button>
        </div>
      `
    }
  ];

  return (
    <PageLayout
      title="Documentation"
      description="Comprehensive guides and resources to help you get the most out of OmniTest"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="getting-started" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              <TabsTrigger value="user-guide">User Guide</TabsTrigger>
              <TabsTrigger value="api-reference">API Reference</TabsTrigger>
            </TabsList>
            
            <TabsContent value="getting-started">
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {documentationSections.map((doc, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                      <div className="mr-2 bg-omnitest-100 dark:bg-omnitest-800 p-1.5 rounded-md text-omnitest-600 dark:text-omnitest-300">
                        {doc.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{doc.title}</CardTitle>
                        <CardDescription>{doc.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <a 
                        href={doc.link} 
                        className="text-sm text-omnitest-600 dark:text-omnitest-400 hover:underline"
                      >
                        Read documentation →
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {documentationSections.map((section, index) => (
                <div key={index} id={section.link.substring(1)} className="mt-12 p-6 bg-white dark:bg-omnitest-800/50 rounded-lg border border-gray-100 dark:border-gray-700">
                  <div dangerouslySetInnerHTML={{ __html: section.content }} />
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="user-guide">
              <div className="mt-6 p-8 bg-white dark:bg-omnitest-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4">User Guide Contents</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="border-b border-gray-100 dark:border-gray-700 pb-2">
                      <a href="#dashboard" className="text-omnitest-600 dark:text-omnitest-400 hover:underline">Understanding the Dashboard</a>
                    </li>
                    <li className="border-b border-gray-100 dark:border-gray-700 pb-2">
                      <a href="#scanning" className="text-omnitest-600 dark:text-omnitest-400 hover:underline">Scanning Applications</a>
                    </li>
                    <li className="border-b border-gray-100 dark:border-gray-700 pb-2">
                      <a href="#suggestions" className="text-omnitest-600 dark:text-omnitest-400 hover:underline">Working with Test Suggestions</a>
                    </li>
                    <li className="border-b border-gray-100 dark:border-gray-700 pb-2">
                      <a href="#coverage" className="text-omnitest-600 dark:text-omnitest-400 hover:underline">Coverage Analysis</a>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="border-b border-gray-100 dark:border-gray-700 pb-2">
                      <a href="#reports" className="text-omnitest-600 dark:text-omnitest-400 hover:underline">Generating Reports</a>
                    </li>
                    <li className="border-b border-gray-100 dark:border-gray-700 pb-2">
                      <a href="#exports" className="text-omnitest-600 dark:text-omnitest-400 hover:underline">Exporting Test Cases</a>
                    </li>
                    <li className="border-b border-gray-100 dark:border-gray-700 pb-2">
                      <a href="#team" className="text-omnitest-600 dark:text-omnitest-400 hover:underline">Team Collaboration</a>
                    </li>
                    <li className="border-b border-gray-100 dark:border-gray-700 pb-2">
                      <a href="#settings" className="text-omnitest-600 dark:text-omnitest-400 hover:underline">Account Settings</a>
                    </li>
                  </ul>
                </div>
                <p className="mt-6 text-gray-600 dark:text-gray-300">
                  For the complete user guide, please download our comprehensive PDF documentation.
                </p>
                <a href="#download" className="mt-4 inline-block px-4 py-2 bg-omnitest-500 hover:bg-omnitest-600 text-white rounded-md">
                  Download Full User Guide
                </a>
              </div>
            </TabsContent>
            
            <TabsContent value="api-reference">
              <div className="mt-6 p-8 bg-white dark:bg-omnitest-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4">API Reference</h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  OmniTest provides a comprehensive API for integrating with your existing tools and workflows. Below is a summary of the available endpoints.
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-2">Authentication</h4>
                    <div className="bg-gray-50 dark:bg-omnitest-900/50 p-3 rounded-md">
                      <code className="text-sm font-mono">POST /api/v1/auth/token</code>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      Generate an API token for accessing protected endpoints.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Test Cases</h4>
                    <div className="bg-gray-50 dark:bg-omnitest-900/50 p-3 rounded-md">
                      <code className="text-sm font-mono">GET /api/v1/testcases</code>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      Retrieve all test cases for a specific project.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Coverage Reports</h4>
                    <div className="bg-gray-50 dark:bg-omnitest-900/50 p-3 rounded-md">
                      <code className="text-sm font-mono">GET /api/v1/reports/coverage</code>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      Get coverage analysis for a project or specific page.
                    </p>
                  </div>
                </div>
                <a href="#full-api-docs" className="mt-6 inline-block text-omnitest-600 dark:text-omnitest-400 hover:underline">
                  View full API documentation →
                </a>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageLayout>
  );
};

export default Documentation;
