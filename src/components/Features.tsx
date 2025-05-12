
import { Check } from "lucide-react";

const Features = () => {
  const featuresList = [
    {
      title: "Smart Detection Engine",
      description: "Our AI automatically analyzes your web application to identify all interactive elements, forms, and user flows.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      benefits: [
        "Tech stack agnostic - works with any framework",
        "Real-time component analysis",
        "Automatic process flow mapping",
        "Identifies hidden elements and states"
      ],
      image: "/placeholder.svg"
    },
    {
      title: "Adaptive Test Suggestions",
      description: "Get intelligent recommendations for test cases based on the complexity and functionality of your application.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      benefits: [
        "Context-aware test recommendations",
        "Priority-based testing suggestions",
        "Security and accessibility checks built-in",
        "Learns from your testing patterns"
      ],
      image: "/placeholder.svg"
    },
    {
      title: "Coverage Dashboard",
      description: "Visualize your test coverage with detailed analytics and identify areas that need more testing attention.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      benefits: [
        "Live progress tracking",
        "Exportable audit reports",
        "Risk assessment visualization",
        "Coverage trend analysis"
      ],
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-omnitest-50 dark:from-omnitest-800 dark:to-omnitest-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Testing Features</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Boost your testing efficiency with AI-powered tools that understand your application's structure and functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-omnitest-800/50 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-omnitest-700 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-omnitest-100 dark:bg-omnitest-700 text-omnitest-600 dark:text-omnitest-200 mb-6">
                {feature.icon}
              </div>
              
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-md mb-6 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={`${feature.title} illustration`} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-highlight-500 mr-2 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-200 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
