
import PageLayout from "@/components/PageLayout";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const featureGroups = [
    {
      title: "Smart Detection Engine",
      description: "Our AI automatically analyzes your web application structure.",
      features: [
        "Tech stack agnostic - works with any framework",
        "Real-time component analysis",
        "Automatic process flow mapping",
        "Identifies hidden elements and states",
        "Dynamic content detection",
        "Custom component labeling"
      ],
      image: "detection-engine.svg"
    },
    {
      title: "Adaptive Test Suggestions",
      description: "Get intelligent recommendations for test cases based on your application.",
      features: [
        "Context-aware test recommendations",
        "Priority-based testing suggestions",
        "Security and accessibility checks",
        "Learns from your testing patterns",
        "Custom test template support",
        "Integration with test management tools"
      ],
      image: "test-suggestions.svg"
    },
    {
      title: "Coverage Dashboard",
      description: "Visualize your test coverage with detailed analytics.",
      features: [
        "Live progress tracking",
        "Exportable audit reports",
        "Risk assessment visualization",
        "Coverage trend analysis",
        "Team performance metrics",
        "Test gap identification"
      ],
      image: "coverage-dashboard.svg"
    }
  ];

  return (
    <PageLayout
      title="Features"
      description="Explore OmniTest's full range of powerful features designed to enhance your testing workflow"
    >
      {featureGroups.map((group, index) => (
        <section 
          key={index} 
          className={`py-16 ${index % 2 === 1 ? 'bg-gray-50 dark:bg-omnitest-900/50' : 'bg-white dark:bg-omnitest-800'}`}
        >
          <div className="container mx-auto px-4">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-row-reverse' : ''}`}>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{group.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {group.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {group.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-highlight-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white dark:bg-omnitest-700/50 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-omnitest-600">
                <div className="aspect-video bg-gray-100 dark:bg-omnitest-600 rounded-md flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-300">{group.title} Illustration</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-omnitest-100 dark:bg-omnitest-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to enhance your testing workflow?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of testers who have already transformed their testing process with OmniTest.
          </p>
          <Button className="bg-highlight hover:bg-highlight-600 text-white">Get Started Today</Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Features;
