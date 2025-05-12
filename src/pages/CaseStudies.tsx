
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CaseStudies = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState("techcorp");
  
  const caseStudies = [
    {
      id: "techcorp",
      title: "How TechCorp Reduced Bugs by 73%",
      company: "TechCorp Inc.",
      description: "A leading SaaS provider used OmniTest to completely transform their testing approach.",
      tags: ["Enterprise", "SaaS", "Test Automation"],
      image: "/placeholder.svg",
      logo: "TC",
      color: "bg-blue-200 text-blue-600",
      fullContent: `
        <h3 class="text-2xl font-bold mb-4">Background</h3>
        <p class="mb-6">TechCorp is a leading enterprise SaaS provider with a complex web application serving over 10,000 businesses worldwide. Their platform includes customer relationship management, billing, and reporting functionalities.</p>
        
        <h3 class="text-2xl font-bold mb-4">The Challenge</h3>
        <p class="mb-4">Prior to implementing OmniTest, TechCorp faced several significant challenges:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Their testing team couldn't keep up with the rapid development cycles</li>
          <li>Test coverage was inconsistent across different parts of the application</li>
          <li>Critical bugs were being discovered in production</li>
          <li>Manual testing was time-consuming and expensive</li>
        </ul>
        
        <h3 class="text-2xl font-bold mb-4">The Solution</h3>
        <p class="mb-4">TechCorp implemented OmniTest across their organization:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Deployed OmniTest to all 35 members of their QA team</li>
          <li>Integrated OmniTest's suggestions into their test automation framework</li>
          <li>Used the coverage dashboard to identify testing gaps</li>
          <li>Implemented AI-suggested test cases for edge cases and error scenarios</li>
        </ul>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-md mb-6">
          <blockquote class="italic">
            "OmniTest completely changed how we approach testing. The AI-powered suggestions have helped us discover edge cases we would never have thought to test manually. It's like having a QA expert looking over your shoulder at all times."
          </blockquote>
          <p class="text-right mt-2 font-medium">- Sarah Johnson, QA Director at TechCorp</p>
        </div>
        
        <h3 class="text-2xl font-bold mb-4">The Results</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-white dark:bg-omnitest-800 p-4 rounded-md shadow-sm text-center">
            <p class="text-3xl font-bold text-omnitest-600">73%</p>
            <p>Reduction in production bugs</p>
          </div>
          <div class="bg-white dark:bg-omnitest-800 p-4 rounded-md shadow-sm text-center">
            <p class="text-3xl font-bold text-omnitest-600">45%</p>
            <p>Increase in test coverage</p>
          </div>
          <div class="bg-white dark:bg-omnitest-800 p-4 rounded-md shadow-sm text-center">
            <p class="text-3xl font-bold text-omnitest-600">30%</p>
            <p>Reduction in testing time</p>
          </div>
        </div>
        
        <h3 class="text-2xl font-bold mb-4">Implementation Process</h3>
        <ol class="list-decimal pl-6 mb-6 space-y-2">
          <li>Initial deployment and team training (2 weeks)</li>
          <li>Integration with existing test automation framework (3 weeks)</li>
          <li>Full implementation and workflow optimization (2 months)</li>
          <li>Continuous improvement and refinement (ongoing)</li>
        </ol>
      `
    },
    {
      id: "launchfast",
      title: "LaunchFast's Journey to Efficient Testing",
      company: "LaunchFast",
      description: "This startup achieved enterprise-level testing with limited resources using OmniTest.",
      tags: ["Startup", "E-commerce", "Manual Testing"],
      image: "/placeholder.svg",
      logo: "LF",
      color: "bg-green-200 text-green-600",
      fullContent: `
        <h3 class="text-2xl font-bold mb-4">Background</h3>
        <p class="mb-6">LaunchFast is an e-commerce startup with a team of 15 employees. They built a custom shopping platform focusing on a seamless mobile experience. With limited resources, they needed a cost-effective way to ensure quality.</p>
        
        <h3 class="text-2xl font-bold mb-4">The Challenge</h3>
        <p class="mb-4">As a small startup, LaunchFast faced unique testing challenges:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>No dedicated QA staff - developers were responsible for testing their own code</li>
          <li>Limited budget for comprehensive testing tools</li>
          <li>Needed to support multiple browsers and devices</li>
          <li>Required to comply with e-commerce security standards</li>
        </ul>
        
        <h3 class="text-2xl font-bold mb-4">The Solution</h3>
        <p class="mb-4">LaunchFast implemented OmniTest to maximize their testing efficiency:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Used OmniTest's detection engine to identify critical user flows</li>
          <li>Implemented suggested test cases for payment processing and checkout</li>
          <li>Leveraged security testing recommendations to ensure PCI compliance</li>
          <li>Created a standardized testing process for all developers</li>
        </ul>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-md mb-6">
          <blockquote class="italic">
            "As a startup, we don't have the luxury of a large QA team. OmniTest gives us the confidence of enterprise-level testing without the enterprise-level costs. It's like having an AI testing expert on the team."
          </blockquote>
          <p class="text-right mt-2 font-medium">- Alex Chen, CTO at LaunchFast</p>
        </div>
        
        <h3 class="text-2xl font-bold mb-4">The Results</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-white dark:bg-omnitest-800 p-4 rounded-md shadow-sm text-center">
            <p class="text-3xl font-bold text-omnitest-600">80%</p>
            <p>Reduction in critical bugs</p>
          </div>
          <div class="bg-white dark:bg-omnitest-800 p-4 rounded-md shadow-sm text-center">
            <p class="text-3xl font-bold text-omnitest-600">50%</p>
            <p>Faster testing cycles</p>
          </div>
          <div class="bg-white dark:bg-omnitest-800 p-4 rounded-md shadow-sm text-center">
            <p class="text-3xl font-bold text-omnitest-600">95%</p>
            <p>Checkout flow reliability</p>
          </div>
        </div>
      `
    },
    {
      id: "webscale",
      title: "WebScale Discovers Critical Edge Cases",
      company: "WebScale Technologies",
      description: "How AI suggestions helped identify issues their team would have missed.",
      tags: ["Mid-size", "FinTech", "Security Testing"],
      image: "/placeholder.svg",
      logo: "WS",
      color: "bg-purple-200 text-purple-600",
      fullContent: `
        <h3 class="text-2xl font-bold mb-4">Background</h3>
        <p class="mb-6">WebScale Technologies provides financial software solutions to credit unions and regional banks. Their platform handles sensitive financial data and transactions for over 500,000 end users.</p>
        
        <h3 class="text-2xl font-bold mb-4">The Challenge</h3>
        <p class="mb-4">WebScale faced significant challenges ensuring security and reliability:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Needed to ensure complete security for financial transactions</li>
          <li>Required compliance with stringent financial regulations</li>
          <li>Complex workflows with numerous edge cases</li>
          <li>High cost of potential failures in production</li>
        </ul>
        
        <h3 class="text-2xl font-bold mb-4">The Solution</h3>
        <p class="mb-4">WebScale implemented OmniTest with a focus on edge case discovery:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Used OmniTest's AI to analyze complex financial workflows</li>
          <li>Implemented comprehensive testing for all identified edge cases</li>
          <li>Conducted security testing based on OmniTest suggestions</li>
          <li>Created a continuous testing pipeline with OmniTest integration</li>
        </ul>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-md mb-6">
          <blockquote class="italic">
            "The most valuable aspect of OmniTest has been its ability to identify edge cases our team would have missed. In financial software, overlooking even one edge case can have serious consequences."
          </blockquote>
          <p class="text-right mt-2 font-medium">- Jane Williams, VP of Engineering at WebScale</p>
        </div>
        
        <h3 class="text-2xl font-bold mb-4">Key Discoveries</h3>
        <p class="mb-6">OmniTest helped WebScale discover critical issues before deployment:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>A race condition in concurrent transaction processing</li>
          <li>Security vulnerability in password reset workflow</li>
          <li>Data inconsistency during specific account merging scenarios</li>
          <li>Input validation bypass in international wire transfers</li>
        </ul>
        
        <h3 class="text-2xl font-bold mb-4">The Results</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-white dark:bg-omnitest-800 p-4 rounded-md shadow-sm text-center">
            <p class="text-3xl font-bold text-omnitest-600">17</p>
            <p>Critical issues prevented</p>
          </div>
          <div class="bg-white dark:bg-omnitest-800 p-4 rounded-md shadow-sm text-center">
            <p class="text-3xl font-bold text-omnitest-600">100%</p>
            <p>Compliance maintained</p>
          </div>
          <div class="bg-white dark:bg-omnitest-800 p-4 rounded-md shadow-sm text-center">
            <p class="text-3xl font-bold text-omnitest-600">0</p>
            <p>Security breaches</p>
          </div>
        </div>
      `
    },
    {
      id: "agencyx",
      title: "Agency X Standardizes Testing Across Clients",
      company: "Agency X",
      description: "A digital agency implements OmniTest to create consistent testing processes for all clients.",
      tags: ["Agency", "Multiple Industries", "Workflow"],
      image: "/placeholder.svg",
      logo: "AX",
      color: "bg-orange-200 text-orange-600",
      fullContent: `
        <h3 class="text-2xl font-bold mb-4">Background</h3>
        <p class="mb-6">Agency X is a digital agency that builds custom web applications for clients across various industries. They manage over 40 active client projects with diverse technology stacks and requirements.</p>
        
        <h3 class="text-2xl font-bold mb-4">The Challenge</h3>
        <p class="mb-4">Agency X struggled with consistent quality across different client projects:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Each project used different testing approaches</li>
          <li>Quality was inconsistent across client projects</li>
          <li>Difficult to standardize testing across different tech stacks</li>
          <li>Limited visibility into testing coverage</li>
        </ul>
        
        <h3 class="text-2xl font-bold mb-4">The Solution</h3>
        <p class="mb-4">Agency X implemented OmniTest as their standardized testing solution:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Deployed OmniTest across all project teams</li>
          <li>Created standardized testing workflows for all client projects</li>
          <li>Used the technology-agnostic detection engine to work with any stack</li>
          <li>Implemented coverage dashboards for client reporting</li>
        </ul>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-md mb-6">
          <blockquote class="italic">
            "OmniTest has been a game-changer for our agency. We finally have a consistent way to ensure quality across all our client projects, regardless of the technology stack or industry."
          </blockquote>
          <p class="text-right mt-2 font-medium">- Mark Thompson, Director of Technology at Agency X</p>
        </div>
        
        <h3 class="text-2xl font-bold mb-4">Client Success Stories</h3>
        <div class="space-y-4 mb-6">
          <div class="bg-white dark:bg-omnitest-800 p-4 rounded-md shadow-sm">
            <p class="font-bold">E-commerce Client</p>
            <p>Reduced cart abandonment by 15% after fixing issues identified by OmniTest</p>
          </div>
          <div class="bg-white dark:bg-omnitest-800 p-4 rounded-md shadow-sm">
            <p class="font-bold">Healthcare Portal</p>
            <p>Achieved 100% compliance with accessibility standards using OmniTest's recommendations</p>
          </div>
          <div class="bg-white dark:bg-omnitest-800 p-4 rounded-md shadow-sm">
            <p class="font-bold">Real Estate Application</p>
            <p>Improved mobile user experience with issues identified by OmniTest's detection engine</p>
          </div>
        </div>
        
        <h3 class="text-2xl font-bold mb-4">The Results</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-white dark:bg-omnitest-800 p-4 rounded-md shadow-sm text-center">
            <p class="text-3xl font-bold text-omnitest-600">40%</p>
            <p>Reduction in client-reported bugs</p>
          </div>
          <div class="bg-white dark:bg-omnitest-800 p-4 rounded-md shadow-sm text-center">
            <p class="text-3xl font-bold text-omnitest-600">25%</p>
            <p>Faster project delivery</p>
          </div>
          <div class="bg-white dark:bg-omnitest-800 p-4 rounded-md shadow-sm text-center">
            <p class="text-3xl font-bold text-omnitest-600">12</p>
            <p>New clients gained from reputation</p>
          </div>
        </div>
      `
    }
  ];

  const clientLogos = [
    { name: "TechCorp Inc.", logo: "/placeholder.svg" },
    { name: "LaunchFast", logo: "/placeholder.svg" },
    { name: "WebScale Technologies", logo: "/placeholder.svg" },
    { name: "Agency X", logo: "/placeholder.svg" }
  ];

  return (
    <PageLayout
      title="Case Studies"
      description="See how companies across industries have transformed their testing processes with OmniTest"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue={selectedCaseStudy} onValueChange={setSelectedCaseStudy}>
            <div className="mb-8">
              <TabsList className="w-full grid grid-cols-2 md:grid-cols-4">
                {caseStudies.map((study) => (
                  <TabsTrigger key={study.id} value={study.id} className="text-sm md:text-base">
                    {study.company}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {caseStudies.map((study) => (
              <TabsContent key={study.id} value={study.id}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-3">
                    <Card>
                      <div className="relative">
                        <div className="aspect-video bg-gray-200 dark:bg-gray-700">
                          <img 
                            src={study.image} 
                            alt={study.company}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <Avatar className="absolute top-4 left-4 h-16 w-16 border-2 border-white">
                          <AvatarImage src="" alt={study.company} />
                          <AvatarFallback className={study.color}>{study.logo}</AvatarFallback>
                        </Avatar>
                      </div>
                      <CardHeader>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {study.tags.map((tag, i) => (
                            <span key={i} className="text-xs bg-gray-100 dark:bg-gray-800 py-1 px-2 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <CardTitle className="text-2xl">{study.title}</CardTitle>
                        <CardDescription>{study.company}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div dangerouslySetInnerHTML={{ __html: study.fullContent }} />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-omnitest-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join These Success Stories</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              OmniTest has helped companies of all sizes improve their testing efficiency, reduce bugs, and deliver higher quality software.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {clientLogos.map((client, index) => (
                <div key={index} className="h-16 bg-white dark:bg-omnitest-800 rounded border border-gray-200 dark:border-gray-700 flex items-center justify-center p-2">
                  <img 
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CaseStudies;
