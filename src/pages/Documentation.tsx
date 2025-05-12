
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Book, Code, VideoIcon } from "lucide-react";

const Documentation = () => {
  const gettingStartedDocs = [
    {
      title: "Installation Guide",
      description: "Learn how to install OmniTest on different browsers",
      icon: <FileText className="h-5 w-5" />,
      link: "#installation"
    },
    {
      title: "Quick Start Tutorial",
      description: "Get up and running with OmniTest in 5 minutes",
      icon: <Book className="h-5 w-5" />,
      link: "#quickstart"
    },
    {
      title: "Configuration Options",
      description: "Customize OmniTest for your specific needs",
      icon: <Code className="h-5 w-5" />,
      link: "#configuration"
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step guides on using OmniTest",
      icon: <VideoIcon className="h-5 w-5" />,
      link: "#videos"
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
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              <TabsTrigger value="user-guide">User Guide</TabsTrigger>
              <TabsTrigger value="api-reference">API Reference</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
            </TabsList>
            <TabsContent value="getting-started">
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {gettingStartedDocs.map((doc, index) => (
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
              <div className="mt-8 p-6 bg-gray-50 dark:bg-omnitest-900/50 rounded-lg border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-lg mb-2">Installation Instructions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">1. Install from Chrome Web Store</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Visit the Chrome Web Store and search for "OmniTest" or click the direct link below.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">2. Create an Account</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Sign up for a free account to start using OmniTest.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">3. Grant Permissions</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Allow OmniTest to access the websites you want to test.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">4. Start Testing</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Navigate to your web application and click the OmniTest icon to begin.
                    </p>
                  </div>
                </div>
              </div>
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
            <TabsContent value="integrations">
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Jira</CardTitle>
                    <CardDescription>Integrate with Jira for issue tracking</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Automatically create Jira tickets from test cases and link test results to existing issues.
                    </p>
                    <a href="#jira-integration" className="text-sm text-omnitest-600 dark:text-omnitest-400 hover:underline">
                      Setup instructions →
                    </a>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>TestRail</CardTitle>
                    <CardDescription>Sync test cases with TestRail</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Export test cases and results directly to TestRail for comprehensive test management.
                    </p>
                    <a href="#testrail-integration" className="text-sm text-omnitest-600 dark:text-omnitest-400 hover:underline">
                      Setup instructions →
                    </a>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>GitHub</CardTitle>
                    <CardDescription>Integrate with GitHub workflows</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Connect OmniTest with GitHub Actions for automated test coverage reporting on pull requests.
                    </p>
                    <a href="#github-integration" className="text-sm text-omnitest-600 dark:text-omnitest-400 hover:underline">
                      Setup instructions →
                    </a>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageLayout>
  );
};

export default Documentation;
