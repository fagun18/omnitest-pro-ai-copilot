import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  
  const featuredPost = {
    id: "ai-revolutionizing-testing",
    title: "How AI is Revolutionizing Software Testing",
    excerpt: "Discover the ways artificial intelligence is transforming traditional testing approaches and improving quality assurance.",
    author: "Sarah Johnson",
    date: "May 8, 2025",
    category: "Testing Trends",
    image: "/placeholder.svg",
    slug: "ai-revolutionizing-testing",
    content: `
      <p class="mb-4">
        The integration of artificial intelligence into software testing represents one of the most significant advancements in quality assurance in recent years. Traditional testing methods, while effective, have struggled to keep pace with the increasing complexity of modern software applications. This is where AI-powered testing solutions like OmniTest are changing the game.
      </p>
      
      <h3 class="text-xl font-bold mt-8 mb-4">The Limitations of Traditional Testing</h3>
      <p class="mb-4">
        Traditional software testing approaches face several challenges:
      </p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>They require significant manual effort and are time-consuming</li>
        <li>Test coverage is often incomplete due to resource constraints</li>
        <li>It's difficult to identify all possible edge cases</li>
        <li>Maintenance of test suites becomes increasingly complex as applications evolve</li>
        <li>Traditional tests struggle with dynamic content and changing UIs</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-8 mb-4">How AI is Transforming Testing</h3>
      <p class="mb-4">
        AI-powered testing tools are addressing these challenges in several ways:
      </p>
      
      <h4 class="text-lg font-semibold mt-6 mb-3">1. Intelligent Test Generation</h4>
      <p class="mb-4">
        AI algorithms can analyze application structures and suggest relevant test cases based on the functionality and complexity of components. This ensures more comprehensive coverage without requiring manual identification of all test scenarios.
      </p>
      
      <h4 class="text-lg font-semibold mt-6 mb-3">2. Self-Healing Tests</h4>
      <p class="mb-4">
        One of the most promising applications of AI in testing is the development of self-healing tests. These tests can automatically adapt to changes in the application's UI or structure, reducing maintenance overhead and preventing test failures due to minor UI adjustments.
      </p>
      
      <h4 class="text-lg font-semibold mt-6 mb-3">3. Predictive Analysis</h4>
      <p class="mb-4">
        AI can analyze patterns from previous testing cycles to predict which areas of an application are most likely to contain bugs. This allows testing teams to prioritize their efforts and focus on high-risk areas.
      </p>
      
      <h4 class="text-lg font-semibold mt-6 mb-3">4. Visual Testing</h4>
      <p class="mb-4">
        AI-powered visual testing tools can detect visual regressions that might be missed by functional tests. These tools can compare screenshots before and after changes to identify unwanted visual alterations.
      </p>
      
      <h3 class="text-xl font-bold mt-8 mb-4">Real-World Impact</h3>
      <p class="mb-4">
        Companies implementing AI-powered testing solutions are seeing significant benefits:
      </p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>40-70% reduction in testing time</li>
        <li>Improved test coverage, with some organizations reporting 30-50% increases</li>
        <li>Significant decrease in production defects</li>
        <li>More efficient allocation of QA resources</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-8 mb-4">The Future of AI in Testing</h3>
      <p class="mb-4">
        As AI technology continues to evolve, we can expect even more sophisticated testing tools that further reduce the need for manual testing while improving overall quality. Some emerging trends include:
      </p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Natural language processing for test creation from requirements documents</li>
        <li>Autonomous testing systems that continuously monitor applications in production</li>
        <li>AI-powered performance optimization based on usage patterns</li>
        <li>Cross-platform testing automation that adapts to different environments</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-8 mb-4">Conclusion</h3>
      <p class="mb-4">
        The integration of AI into software testing represents a paradigm shift in how we ensure software quality. By embracing these new technologies, testing teams can work more efficiently, achieve better coverage, and ultimately deliver higher quality software to end users.
      </p>
      <p class="mb-4">
        At OmniTest, we're at the forefront of this revolution, providing AI-powered testing tools that help teams transform their testing processes and deliver exceptional software experiences.
      </p>
    `
  };

  const blogPosts = [
    {
      id: "testing-blind-spots",
      title: "5 Common Testing Blind Spots and How to Address Them",
      excerpt: "Learn about the areas that most testing teams miss and strategies to ensure comprehensive coverage.",
      author: "Michael Chen",
      date: "May 2, 2025",
      category: "Best Practices",
      slug: "testing-blind-spots",
      image: "/placeholder.svg",
      content: `
        <p class="mb-4">
          Even the most diligent testing teams can miss critical areas of their applications. These blind spots often lead to unexpected bugs in production and poor user experiences. In this article, we'll explore five common testing blind spots and provide practical strategies to address them.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">1. Edge Cases and Boundary Conditions</h3>
        <p class="mb-4">
          Edge cases occur at the extremes of operating parameters, while boundary conditions exist at the transition points between different behaviors or states.
        </p>
        <p class="mb-4">
          <strong>Common issues:</strong> Empty states, maximum/minimum input values, resource limitations.
        </p>
        <p class="mb-4">
          <strong>Solution:</strong> Implement boundary value analysis and equivalence partitioning techniques. OmniTest's AI-powered suggestions can help identify potential edge cases you might otherwise miss.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">2. Mobile-Specific Scenarios</h3>
        <p class="mb-4">
          With users accessing applications across multiple devices, mobile-specific scenarios are often overlooked in testing strategies.
        </p>
        <p class="mb-4">
          <strong>Common issues:</strong> Touch interactions, network connectivity fluctuations, device orientation changes.
        </p>
        <p class="mb-4">
          <strong>Solution:</strong> Implement device-specific test cases and leverage OmniTest's mobile testing capabilities to ensure comprehensive coverage across different devices and conditions.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">3. Accessibility Requirements</h3>
        <p class="mb-4">
          Many applications fail to meet basic accessibility requirements, excluding users with disabilities and potentially violating regulations.
        </p>
        <p class="mb-4">
          <strong>Common issues:</strong> Missing alt text, keyboard navigation issues, color contrast problems.
        </p>
        <p class="mb-4">
          <strong>Solution:</strong> Integrate accessibility testing into your workflows using automated tools and manual verification. OmniTest can identify potential accessibility issues during component scanning.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">4. Internationalization and Localization</h3>
        <p class="mb-4">
          Applications serving global audiences often have issues with language support, date formats, and cultural considerations.
        </p>
        <p class="mb-4">
          <strong>Common issues:</strong> Text overflow in translated content, date/time format incompatibilities, right-to-left language support.
        </p>
        <p class="mb-4">
          <strong>Solution:</strong> Test with pseudo-localization and real translations in different languages. Consider cultural context and regional requirements in your test cases.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">5. Third-Party Integrations</h3>
        <p class="mb-4">
          Modern applications rely heavily on third-party services and APIs, which introduce additional complexity and potential failure points.
        </p>
        <p class="mb-4">
          <strong>Common issues:</strong> API changes, service outages, inconsistent data formats.
        </p>
        <p class="mb-4">
          <strong>Solution:</strong> Implement comprehensive integration testing with mocks for third-party services. Test failure scenarios and implement proper error handling.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Conclusion</h3>
        <p class="mb-4">
          Addressing these common testing blind spots requires a combination of awareness, proper testing methodologies, and the right tools. By expanding your testing coverage to include these often-overlooked areas, you can significantly improve application quality and user satisfaction.
        </p>
        <p class="mb-4">
          OmniTest's AI-powered detection engine can help identify many of these blind spots automatically, ensuring more comprehensive test coverage with less manual effort.
        </p>
      `
    },
    {
      id: "omnitest-cicd-integration",
      title: "Integrating OmniTest with Your CI/CD Pipeline",
      excerpt: "A step-by-step guide to incorporating OmniTest into your continuous integration and delivery workflow.",
      author: "David Kim",
      date: "April 27, 2025",
      category: "Tutorials",
      slug: "omnitest-cicd-integration",
      image: "/placeholder.svg",
      content: `
        <p class="mb-4">
          Continuous Integration and Continuous Deployment (CI/CD) have become essential practices for modern software development teams. Integrating your testing tools into this pipeline is critical for maintaining quality while delivering software rapidly. This guide will show you how to integrate OmniTest into your CI/CD workflow for automated testing at scale.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Benefits of Integrating OmniTest with CI/CD</h3>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Automated test generation and execution on each build</li>
          <li>Early detection of issues before they reach production</li>
          <li>Consistent testing standards across all deployments</li>
          <li>Detailed reporting and analytics for continuous improvement</li>
          <li>Reduced manual testing effort for your team</li>
        </ul>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Step 1: Set Up the OmniTest API</h3>
        <p class="mb-4">
          OmniTest provides a comprehensive API that allows you to integrate with various CI/CD tools. Start by generating an API key from your OmniTest dashboard:
        </p>
        <ol class="list-decimal pl-6 mb-6 space-y-2">
          <li>Log in to your OmniTest dashboard</li>
          <li>Navigate to Settings → API Access</li>
          <li>Generate a new API key with appropriate permissions</li>
          <li>Store this key securely in your CI/CD environment variables</li>
        </ol>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Step 2: Create a Test Configuration File</h3>
        <p class="mb-4">
          Create an <code>omnitest.config.json</code> file in your project repository to define your testing parameters:
        </p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto mb-6">
{
  "testEnvironment": "ci",
  "baseUrl": "https://staging.yourapp.com",
  "scanDepth": "comprehensive",
  "testPriority": ["functional", "security"],
  "outputFormat": "junit",
  "reportPath": "./test-reports"
}
        </pre>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Step 3: Integration with Popular CI/CD Platforms</h3>
        <h4 class="text-lg font-semibold mt-6 mb-3">GitHub Actions Example</h4>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto mb-6">
name: OmniTest Integration

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Run OmniTest
      uses: omnitest/github-action@v1
      with:
        api-key: ${"${{ secrets.OMNITEST_API_KEY }}"}
        config-file: ./omnitest.config.json
    - name: Upload test results
      uses: actions/upload-artifact@v2
      with:
        name: test-results
        path: ./test-reports
        </pre>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">Jenkins Pipeline Example</h4>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto mb-6">
pipeline {
    agent any
    
    stages {
        stage('Build') {
            // Your build steps here
        }
        
        stage('OmniTest') {
            steps {
                sh 'npm install -g omnitest-cli'
                withCredentials([string(credentialsId: 'omnitest-api-key', variable: 'OMNITEST_API_KEY')]) {
                    sh 'omnitest-cli run --api-key $OMNITEST_API_KEY --config omnitest.config.json'
                }
            }
            post {
                always {
                    junit 'test-reports/*.xml'
                }
            }
        }
        
        stage('Deploy') {
            // Your deployment steps here
        }
    }
}
        </pre>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Step 4: Analyzing Test Results</h3>
        <p class="mb-4">
          OmniTest generates detailed test reports that can be integrated with your CI/CD dashboard:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>JUnit XML reports for integration with test reporting tools</li>
          <li>HTML reports for human-readable analysis</li>
          <li>JSON output for custom integrations</li>
        </ul>
        <p class="mb-4">
          Configure your CI/CD pipeline to fail builds when critical tests fail, ensuring that quality gates are enforced before deployment.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Step 5: Continuous Improvement</h3>
        <p class="mb-4">
          Use OmniTest's analytics to continuously improve your testing process:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Analyze test coverage trends over time</li>
          <li>Identify recurring issue patterns</li>
          <li>Optimize testing parameters based on results</li>
          <li>Gradually increase test coverage with AI-suggested test cases</li>
        </ul>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Conclusion</h3>
        <p class="mb-4">
          Integrating OmniTest with your CI/CD pipeline creates a powerful automated testing workflow that ensures consistent quality across all deployments. By following the steps outlined in this guide, you can leverage OmniTest's AI-powered testing capabilities at scale while maintaining rapid delivery cycles.
        </p>
        <p class="mb-4">
          For more detailed information on specific integrations or advanced configuration options, please refer to our comprehensive <a href="/documentation" class="text-omnitest-600 hover:underline">documentation</a>.
        </p>
      `
    },
    {
      id: "future-test-automation-ai",
      title: "The Future of Test Automation with AI Co-pilots",
      excerpt: "Exploring how AI assistants are changing the landscape of test automation and enhancing tester productivity.",
      author: "Jessica Rodriguez",
      date: "April 18, 2025",
      category: "Industry Insights",
      slug: "future-test-automation-ai",
      image: "/placeholder.svg",
      content: `
        <p class="mb-4">
          The field of software testing is undergoing a profound transformation, driven by advances in artificial intelligence and machine learning. AI-powered testing co-pilots, like OmniTest, are not replacing human testers but rather enhancing their capabilities and productivity. Let's explore how these AI assistants are reshaping the future of test automation.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">The Evolution of Test Automation</h3>
        <p class="mb-4">
          Test automation has evolved through several distinct phases:
        </p>
        <ol class="list-decimal pl-6 mb-6 space-y-2">
          <li><strong>Manual Testing Era:</strong> Completely human-driven testing with minimal automation</li>
          <li><strong>Record-and-Replay Tools:</strong> First-generation automation that recorded manual actions</li>
          <li><strong>Scripted Automation:</strong> Programming-based test automation frameworks like Selenium</li>
          <li><strong>AI-Augmented Testing:</strong> The current era, where AI enhances human testers</li>
          <li><strong>Autonomous Testing:</strong> The emerging future where AI can independently identify, create, and run tests</li>
        </ol>
        
        <h3 class="text-xl font-bold mt-8 mb-4">How AI Co-pilots Transform Testing Today</h3>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">1. Intelligent Test Generation</h4>
        <p class="mb-4">
          AI co-pilots can analyze application structures and automatically suggest relevant test cases based on:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>UI component analysis and classification</li>
          <li>Common user flow patterns</li>
          <li>Historical bug data and patterns</li>
          <li>Code changes and impact analysis</li>
        </ul>
        <p class="mb-4">
          This capability dramatically reduces the time required to create comprehensive test coverage while ensuring that critical paths are not overlooked.
        </p>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">2. Self-Healing Test Scripts</h4>
        <p class="mb-4">
          One of the biggest challenges in test automation is maintaining scripts as applications evolve. AI co-pilots address this by:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Automatically adapting to UI changes</li>
          <li>Learning alternative selectors for elements</li>
          <li>Suggesting test script updates when applications change</li>
          <li>Predicting potential breaking changes before they occur</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">3. Intelligent Test Execution and Optimization</h4>
        <p class="mb-4">
          Beyond creation and maintenance, AI co-pilots optimize test execution through:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Prioritizing tests based on risk and impact</li>
          <li>Identifying redundant test cases</li>
          <li>Parallel execution optimization</li>
          <li>Failure analysis and categorization</li>
        </ul>
        
        <h3 class="text-xl font-bold mt-8 mb-4">The Human-AI Testing Partnership</h3>
        <p class="mb-4">
          The most effective testing approaches combine human expertise with AI capabilities:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
            <h4 class="font-bold mb-2">Human Strengths</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li>Strategic thinking</li>
              <li>Context understanding</li>
              <li>Creative problem-solving</li>
              <li>Business requirement interpretation</li>
              <li>Ethical considerations</li>
            </ul>
          </div>
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
            <h4 class="font-bold mb-2">AI Strengths</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li>Processing large amounts of data</li>
              <li>Identifying patterns</li>
              <li>Repetitive task execution</li>
              <li>Continuous monitoring</li>
              <li>Predictive analytics</li>
            </ul>
          </div>
        </div>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Skills for Testing Professionals in the AI Era</h3>
        <p class="mb-4">
          As AI becomes more integrated into testing workflows, testing professionals should focus on developing these skills:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li><strong>AI Literacy:</strong> Understanding how to effectively collaborate with AI tools</li>
          <li><strong>Strategic Test Planning:</strong> Defining what to test rather than just how to test</li>
          <li><strong>Data Analysis:</strong> Interpreting test results and metrics</li>
          <li><strong>Exploratory Testing:</strong> Focusing on areas where human intuition excels</li>
          <li><strong>Continuous Learning:</strong> Adapting to evolving testing practices and tools</li>
        </ul>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Looking Ahead: The Next Frontier</h3>
        <p class="mb-4">
          The future of AI in testing will likely include:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Predictive Testing:</strong> Anticipating issues before code is even written</li>
          <li><strong>Natural Language Test Creation:</strong> Generating tests from user stories or requirements</li>
          <li><strong>Autonomous Visual Testing:</strong> Identifying visual inconsistencies without human baselines</li>
          <li><strong>Cross-platform Intelligence:</strong> Understanding equivalence across different platforms</li>
          <li><strong>Continuous Feedback Loops:</strong> Learning from production usage to improve test coverage</li>
        </ul>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Conclusion</h3>
        <p class="mb-4">
          The future of test automation lies not in replacing human testers but in creating powerful human-AI partnerships. AI co-pilots like OmniTest amplify human capabilities, allowing testing professionals to focus on higher-value activities while ensuring more comprehensive coverage.
        </p>
        <p class="mb-4">
          As these technologies continue to evolve, organizations that embrace AI-augmented testing will gain significant advantages in quality, efficiency, and innovation.
        </p>
      `
    },
    {
      id: "techcorp-case-study",
      title: "Case Study: How TechCorp Improved Coverage by 85%",
      excerpt: "A detailed look at how one enterprise company transformed their testing process with OmniTest.",
      author: "Sarah Johnson",
      date: "April 10, 2025",
      category: "Case Studies",
      slug: "techcorp-case-study",
      image: "/placeholder.svg",
      content: `
        <p class="mb-4">
          This comprehensive case study examines how TechCorp, a leading enterprise software company, transformed their testing processes with OmniTest and achieved remarkable improvements in test coverage, efficiency, and product quality.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Company Background</h3>
        <p class="mb-4">
          TechCorp provides enterprise resource planning (ERP) solutions to Fortune 500 companies across multiple industries. Their flagship product is a complex web application with:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Over 200 distinct screens and workflows</li>
          <li>Integration with 15+ third-party services</li>
          <li>Support for multiple languages and regions</li>
          <li>Strict security and compliance requirements</li>
          <li>Bi-weekly release cycles</li>
        </ul>
        
        <h3 class="text-xl font-bold mt-8 mb-4">The Challenge</h3>
        <p class="mb-4">
          Prior to implementing OmniTest, TechCorp faced several significant challenges:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Limited Test Coverage:</strong> Only about 40% of application functionality was covered by automated tests</li>
          <li><strong>Test Maintenance Burden:</strong> Engineers spent 30% of their time maintaining existing tests</li>
          <li><strong>Slow Feedback Cycles:</strong> Complete test suite took over 8 hours to run</li>
          <li><strong>Missed Edge Cases:</strong> Critical bugs were consistently found in production</li>
          <li><strong>Resource Constraints:</strong> QA team couldn't scale fast enough to match development pace</li>
        </ul>
        
        <p class="mb-4">
          These challenges resulted in increasing technical debt, customer-reported issues, and delayed releases.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Implementation Strategy</h3>
        <p class="mb-4">
          TechCorp adopted a phased approach to implementing OmniTest:
        </p>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">Phase 1: Initial Deployment (Weeks 1-2)</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Conducted training sessions for the QA team</li>
          <li>Integrated OmniTest with their CI/CD pipeline</li>
          <li>Ran initial component detection scans across core modules</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">Phase 2: Coverage Expansion (Weeks 3-8)</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Generated test suggestions for high-priority workflows</li>
          <li>Implemented missing test cases based on OmniTest recommendations</li>
          <li>Established coverage baseline metrics</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">Phase 3: Optimization and Scaling (Months 3-6)</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Refined test execution strategy based on OmniTest analytics</li>
          <li>Expanded implementation to all product modules</li>
          <li>Integrated OmniTest results into release decision process</li>
        </ul>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Key Results</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white dark:bg-omnitest-800 p-6 rounded-md shadow-sm text-center">
            <p class="text-3xl font-bold text-omnitest-600 mb-2">85%</p>
            <p class="font-medium mb-1">Test Coverage</p>
            <p class="text-sm text-gray-600 dark:text-gray-300">Up from 40% pre-implementation</p>
          </div>
          <div class="bg-white dark:bg-omnitest-800 p-6 rounded-md shadow-sm text-center">
            <p class="text-3xl font-bold text-omnitest-600 mb-2">73%</p>
            <p class="font-medium mb-1">Fewer Production Bugs</p>
            <p class="text-sm text-gray-600 dark:text-gray-300">Compared to previous 6 months</p>
          </div>
          <div class="bg-white dark:bg-omnitest-800 p-6 rounded-md shadow-sm text-center">
            <p class="text-3xl font-bold text-omnitest-600 mb-2">68%</p>
            <p class="font-medium mb-1">Faster Test Execution</p>
            <p class="text-sm text-gray-600 dark:text-gray-300">Through optimized test prioritization</p>
          </div>
        </div>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Additional Benefits</h3>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Reduced Test Maintenance:</strong> 80% reduction in time spent maintaining tests due to self-healing capabilities</li>
          <li><strong>Improved Developer Experience:</strong> Faster feedback on code changes improved developer productivity</li>
          <li><strong>Better Resource Allocation:</strong> QA team focused on exploratory testing rather than routine verification</li>
          <li><strong>Enhanced Release Confidence:</strong> More comprehensive testing allowed for more confident releases</li>
          <li><strong>Customer Satisfaction:</strong> Net Promoter Score increased by 18 points after implementation</li>
        </ul>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
          <blockquote class="italic mb-4">
            "OmniTest has completely transformed our approach to quality assurance. We've not only improved our test coverage dramatically but also freed our QA engineers to focus on more strategic work. The ROI has been clear and substantial."
          </blockquote>
          <p class="text-right font-medium">- Robert Chen, CTO of TechCorp</p>
        </div>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Implementation Challenges</h3>
        <p class="mb-4">
          While the overall implementation was successful, TechCorp did encounter some challenges:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Initial Resistance:</strong> Some team members were hesitant about adopting AI-powered testing</li>
          <li><strong>Integration Complexity:</strong> Existing custom test frameworks required additional integration work</li>
          <li><strong>Cultural Shift:</strong> Moving from manual to AI-augmented testing required process changes</li>
        </ul>
        <p class="mb-4">
          These challenges were addressed through additional training, phased implementation, and demonstrating early wins.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Conclusion</h3>
        <p class="mb-4">
          TechCorp's implementation of OmniTest demonstrates the transformative potential of AI-powered testing solutions for enterprise applications. By significantly improving test coverage while reducing the maintenance burden, TechCorp was able to deliver higher quality software more rapidly and confidently.
        </p>
        <p class="mb-4">
          The success of this implementation has led TechCorp to expand their use of OmniTest across all their product lines and make it a cornerstone of their quality assurance strategy.
        </p>
      `
    },
    {
      id: "manual-automated-balance",
      title: "Balancing Manual and Automated Testing",
      excerpt: "Finding the right mix of human expertise and automation for optimal testing efficiency.",
      author: "Michael Chen",
      date: "April 3, 2025",
      category: "Best Practices",
      slug: "manual-automated-balance",
      image: "/placeholder.svg",
      content: `
        <p class="mb-4">
          The debate between manual and automated testing has been ongoing in the software industry for decades. However, the most effective testing strategies don't treat this as an either/or proposition. Instead, they find the optimal balance between human expertise and automation. This article explores how to achieve that balance and maximize testing effectiveness.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">The Complementary Nature of Manual and Automated Testing</h3>
        <p class="mb-4">
          Manual and automated testing each have distinct strengths and limitations that make them suited for different aspects of the testing process:
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="bg-white dark:bg-omnitest-800 p-6 rounded-lg shadow-sm">
            <h4 class="font-bold text-lg mb-3">Manual Testing Strengths</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>Exploratory testing and discovering unexpected issues</li>
              <li>Usability and user experience evaluation</li>
              <li>Complex scenario testing requiring human judgment</li>
              <li>Visual verification and aesthetic assessment</li>
              <li>Ad-hoc testing based on domain knowledge</li>
            </ul>
          </div>
          <div class="bg-white dark:bg-omnitest-800 p-6 rounded-lg shadow-sm">
            <h4 class="font-bold text-lg mb-3">Automated Testing Strengths</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>Repetitive test execution with consistent results</li>
              <li>Regression testing across multiple builds</li>
              <li>Performance and load testing at scale</li>
              <li>Data-driven testing with many variations</li>
              <li>Continuous integration and delivery support</li>
            </ul>
          </div>
        </div>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Signs of Imbalance in Your Testing Strategy</h3>
        <p class="mb-4">
          Several indicators suggest your testing approach may be out of balance:
        </p>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">Over-reliance on Manual Testing</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Testers repeatedly perform the same tests with each release</li>
          <li>Regression testing consumes a disproportionate amount of time</li>
          <li>Release cycles are delayed due to testing backlogs</li>
          <li>Inconsistent test results due to human factors</li>
          <li>Limited coverage due to time constraints</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">Over-reliance on Automation</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>High maintenance burden for test scripts</li>
          <li>Brittle tests that frequently break with minor changes</li>
          <li>Missing usability and UX issues</li>
          <li>Teams spending more time fixing tests than finding bugs</li>
          <li>False positives causing "alert fatigue"</li>
        </ul>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Framework for Finding the Right Balance</h3>
        <p class="mb-4">
          Achieving the optimal balance requires a strategic approach:
        </p>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">1. Risk-Based Assessment</h4>
        <p class="mb-4">
          Not all parts of your application have equal importance or risk. Apply different testing approaches based on risk assessment:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li><strong>High Risk/Critical Paths:</strong> Both thorough automation and regular manual testing</li>
          <li><strong>Medium Risk:</strong> Automated regression with periodic manual review</li>
          <li><strong>Low Risk:</strong> Primarily automated testing with minimal manual oversight</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">2. Test Pyramid Implementation</h4>
        <p class="mb-4">
          Follow the test pyramid principle for effective test distribution:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Unit Tests (Base):</strong> Numerous, fast, highly automated</li>
          <li><strong>Integration Tests (Middle):</strong> Moderate number, automated with some manual oversight</li>
          <li><strong>UI/E2E Tests (Top):</strong> Fewer in number, combination of automation and manual testing</li>
          <li><strong>Exploratory Testing (Cap):</strong> Primarily manual, focused on discovery</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">3. Leverage AI-Augmented Testing</h4>
        <p class="mb-4">
          Modern AI-powered tools like OmniTest provide a middle ground between manual and traditional automation:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>AI can identify which tests should be automated vs. manually executed</li>
          <li>Smart test generation reduces the effort to create automated tests</li>
          <li>Self-healing test capabilities reduce maintenance burden</li>
          <li>AI can highlight areas where manual testing would be more effective</li>
        </ul>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Practical Implementation Steps</h3>
        <ol class="list-decimal pl-6 mb-6 space-y-2">
          <li>
            <strong>Audit Current Testing Activities:</strong>
            <p class="mt-1 mb-2">Document all current testing activities and classify them as manual or automated. Identify time spent, coverage achieved, and bugs found through each approach.</p>
          </li>
          <li>
            <strong>Identify Automation Candidates:</strong>
            <p class="mt-1 mb-2">Look for repetitive, time-consuming manual tests that could be automated, focusing on stable features first.</p>
          </li>
          <li>
            <strong>Determine Manual Testing Focus Areas:</strong>
            <p class="mt-1 mb-2">Identify areas where human judgment adds the most value, such as exploratory testing of new features or complex user flows.</p>
          </li>
          <li>
            <strong>Implement AI-Assisted Testing:</strong>
            <p class="mt-1 mb-2">Use tools like OmniTest to bridge the gap between manual and automated approaches, leveraging AI to optimize testing efforts.</p>
          </li>
          <li>
            <strong>Measure and Adjust:</strong>
            <p class="mt-1 mb-2">Continuously monitor key metrics like bug detection rate, testing time, and coverage to refine your balance over time.</p>
          </li>
        </ol>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Case Study: Finding the Right Balance</h3>
        <p class="mb-4">
          A mid-sized e-commerce company implemented a balanced testing approach with these results:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Automated 70% of regression testing, freeing up 25 hours per sprint</li>
          <li>Redirected manual testing efforts to exploratory testing, finding 35% more edge case bugs</li>
          <li>Used OmniTest to identify automation gaps and prioritize test development</li>
          <li>Reduced overall testing time by 40% while increasing bug detection by 28%</li>
        </ul>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Conclusion</h3>
        <p class="mb-4">
          The most effective testing strategies don't view manual and automated testing as competing approaches but as complementary tools in a comprehensive quality assurance strategy. By thoughtfully balancing these approaches and leveraging AI-augmented testing tools like OmniTest, teams can maximize testing efficiency, coverage, and effectiveness.
        </p>
        <p class="mb-4">
          Remember that the optimal balance is unique to each organization and may evolve as applications, teams, and technologies change. Regular assessment and adjustment of your testing mix is essential for maintaining testing effectiveness over time.
        </p>
      `
    },
    {
      id: "testing-metrics",
      title: "Top 10 Testing Metrics You Should Be Tracking",
      excerpt: "Key performance indicators that help you measure and improve your testing effectiveness.",
      author: "Jessica Rodriguez",
      date: "March 25, 2025",
      category: "Metrics",
      slug: "testing-metrics",
      image: "/placeholder.svg",
      content: `
        <p class="mb-4">
          Effective software testing isn't just about running tests—it's about measuring and improving your testing process over time. By tracking the right metrics, you can identify bottlenecks, demonstrate the value of testing, and continuously enhance your quality assurance efforts. Here are the top 10 testing metrics that every QA team should be monitoring.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">1. Test Coverage</h3>
        <p class="mb-4">
          Test coverage measures how much of your application is being tested. There are several dimensions of coverage to consider:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Requirement Coverage:</strong> Percentage of requirements covered by test cases</li>
          <li><strong>Code Coverage:</strong> Percentage of code executed during tests</li>
          <li><strong>Feature Coverage:</strong> Percentage of features with associated tests</li>
          <li><strong>Risk Coverage:</strong> Percentage of identified risks mitigated by tests</li>
        </ul>
        <p class="mb-4">
          <strong>How to use it:</strong> Aim for high coverage in critical areas rather than 100% coverage everywhere. Use OmniTest's coverage dashboard to identify gaps in your testing strategy.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">2. Defect Density</h3>
        <p class="mb-4">
          Defect density measures the number of defects found relative to the size of the feature or component:
        </p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto mb-6">
Defect Density = Number of Defects / Size (Lines of Code, Function Points, etc.)
        </pre>
        <p class="mb-4">
          <strong>How to use it:</strong> Compare defect density across different components to identify quality hotspots that need more attention or refactoring.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">3. Defect Leakage</h3>
        <p class="mb-4">
          Defect leakage measures the percentage of bugs that escape testing and are discovered in production:
        </p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto mb-6">
Defect Leakage = (Defects found in Production / Total Defects) × 100%
        </pre>
        <p class="mb-4">
          <strong>How to use it:</strong> High leakage indicates gaps in your testing process. Categorize production defects to identify which types of issues are being missed.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">4. Test Execution Efficiency</h3>
        <p class="mb-4">
          This metric measures how efficiently your team can execute tests:
        </p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto mb-6">
Test Execution Efficiency = Number of Tests Executed / Time Spent
        </pre>
        <p class="mb-4">
          <strong>How to use it:</strong> Track this over time to ensure that your testing process isn't slowing down as your application grows. If efficiency decreases, consider more automation or optimizing test selection.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">5. Test Automation Percentage</h3>
        <p class="mb-4">
          This measures the proportion of your tests that are automated:
        </p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto mb-6">
Test Automation Percentage = (Number of Automated Tests / Total Number of Tests) × 100%
        </pre>
        <p class="mb-4">
          <strong>How to use it:</strong> While higher automation is generally better, focus on automating the right tests rather than achieving a specific percentage. Tests that run frequently or cover stable features are good automation candidates.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">6. Automation ROI</h3>
        <p class="mb-4">
          This measures the return on investment for your test automation efforts:
        </p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto mb-6">
Automation ROI = (Cost of Manual Testing - Cost of Automated Testing) / Cost of Automated Testing
        </pre>
        <p class="mb-4">
          <strong>How to use it:</strong> Calculate this for each automation initiative to ensure your automation efforts are delivering value. Remember to include maintenance costs in your calculations.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">7. Mean Time to Detect (MTTD)</h3>
        <p class="mb-4">
          This measures how quickly defects are identified after they're introduced:
        </p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto mb-6">
MTTD = Average time between defect introduction and detection
        </pre>
        <p class="mb-4">
          <strong>How to use it:</strong> Lower MTTD is better as it reduces the cost of fixing bugs. Use this metric to evaluate the effectiveness of your testing frequency and strategies like continuous testing.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">8. Test Case Effectiveness</h3>
        <p class="mb-4">
          This measures how well your test cases identify defects:
        </p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto mb-6">
Test Case Effectiveness = Number of Defects Found / Number of Test Cases
        </pre>
        <p class="mb-4">
          <strong>How to use it:</strong> Higher effectiveness indicates better-designed test cases. Compare effectiveness across different types of tests to identify which testing approaches are most valuable.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">9. Test Case Maintenance Effort</h3>
        <p class="mb-4">
          This measures the effort required to maintain your test suite:
        </p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto mb-6">
Maintenance Effort = Time Spent on Test Maintenance / Total Testing Time
        </pre>
        <p class="mb-4">
          <strong>How to use it:</strong> If maintenance consumes too much of your testing time, consider using more robust automation approaches or AI-powered testing tools like OmniTest that reduce maintenance through self-healing tests.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">10. User-Reported Defects</h3>
        <p class="mb-4">
          This tracks the number of issues reported by users after release:
        </p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto mb-6">
User-Reported Defects = Number of defects reported by users post-release
        </pre>
        <p class="mb-4">
          <strong>How to use it:</strong> This is an ultimate measure of your testing effectiveness. Categorize these defects to understand what types of issues are escaping your testing process.
        </p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Implementing Metrics in Your Organization</h3>
        <p class="mb-4">
          To successfully implement these metrics in your organization:
        </p>
        <ol class="list-decimal pl-6 mb-6 space-y-2">
          <li><strong>Start Small:</strong> Begin with 3-4 metrics that address your most pressing concerns</li>
          <li><strong>Establish Baselines:</strong> Measure current performance before setting improvement goals</li>
          <li><strong>Automate Collection:</strong> Use tools like OmniTest to automatically collect metrics</li>
          <li><strong>Review Regularly:</strong> Discuss metrics in sprint retrospectives or dedicated quality reviews</li>
          <li><strong>Take Action:</strong> Use metrics to drive specific improvements, not just for reporting</li>
        </ol>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
          <p class="font-semibold mb-2">OmniTest Metrics Dashboard</p>
          <p class="mb-4">
            OmniTest provides a comprehensive metrics dashboard that automatically tracks many of these key metrics, allowing you to:
          </p>
          <ul class="list-disc pl-6 space-y-1">
            <li>Monitor coverage across different dimensions</li>
            <li>Track defect trends and categories</li>
            <li>Measure automation effectiveness and ROI</li>
            <li>Generate executive-ready reports with actionable insights</li>
          </ul>
        </div>
        
        <h3 class="text-xl font-bold mt-8 mb-4">Conclusion</h3>
        <p class="mb-4">
          Effective testing requires not just running tests but measuring and improving your process over time. By tracking these key metrics, you can identify areas for improvement, justify testing investments, and ultimately deliver higher-quality software.
        </p>
        <p class="mb-4">
          Remember that metrics are meant to drive improvement, not just for reporting. Focus on metrics that help you answer specific questions about your testing process, and be willing to adjust your metrics as your testing strategy evolves.
        </p>
      `
    }
  ];

  return (
    <PageLayout
      title="Blog"
      description="Insights, tutorials, and industry trends in software testing and quality assurance"
    >
      {selectedPost ? (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedPost(null)} 
              className="mb-6"
            >
              ← Back to all articles
            </Button>
            
            {(selectedPost === featuredPost.id ? [featuredPost] : blogPosts.filter(post => post.id === selectedPost)).map((post) => (
              <div key={post.id} className="max-w-4xl mx-auto">
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-omnitest-100 dark:bg-omnitest-700/50 text-omnitest-600 dark:text-omnitest-300 text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm ml-3">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">By {post.author}</p>
                </div>
                
                <div className="aspect-[16/9] bg-gray-200 dark:bg-gray-700 mb-8 rounded-xl overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="prose prose-lg max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-omnitest-800/50 rounded-lg shadow-md overflow-hidden">
                  <div className="aspect-[16/9] bg-gray-200 dark:bg-gray-700">
                    <img 
                      src={featuredPost.image} 
                      alt="Featured post" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-0.5 rounded-full">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3">{featuredPost.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">By {featuredPost.author}</span>
                      <Button 
                        variant="ghost"
                        className="text-omnitest-600 dark:text-omnitest-400 font-medium hover:underline inline-flex items-center"
                        onClick={() => setSelectedPost(featuredPost.id)}
                      >
                        Read article <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Latest Articles</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <Card key={index} className="bg-white dark:bg-omnitest-800/50">
                      <CardHeader className="p-4 pb-0">
                        <div className="flex items-center mb-2">
                          <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-0.5 rounded-full">
                            {post.category}
                          </span>
                        </div>
                        <CardTitle className="text-base">{post.title}</CardTitle>
                        <CardDescription className="text-xs">{post.date}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <Button
                          variant="ghost"
                          className="text-sm text-omnitest-600 dark:text-omnitest-400 hover:underline p-0"
                          onClick={() => setSelectedPost(post.id)}
                        >
                          Read more →
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8">All Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index}>
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-0.5 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                      </div>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <CardDescription>By {post.author}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                      <Button
                        variant="ghost"
                        className="text-omnitest-600 dark:text-omnitest-400 font-medium hover:underline inline-flex items-center p-0"
                        onClick={() => setSelectedPost(post.id)}
                      >
                        Continue reading <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
};

export default Blog;
