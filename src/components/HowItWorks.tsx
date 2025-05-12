
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Install the Browser Extension",
      description: "Add OmniTest Pro to your browser with a single click. Available for Chrome, Firefox, and Edge.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Navigate to Your Web App",
      description: "Open your application in the browser. OmniTest Pro works with any website, from simple pages to complex SPAs.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Begin AI Analysis",
      description: "One click initiates the AI engine to scan your page, identifying all testable components and user flows.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Review Test Suggestions",
      description: "Get an intelligent list of test cases prioritized by risk and complexity. No more guessing what to test.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      number: "05",
      title: "Execute and Track Tests",
      description: "Mark tests as you complete them and track your progress. OmniTest Pro continually updates coverage metrics.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      number: "06",
      title: "Export & Integrate",
      description: "Export test cases to your favorite tools like TestRail, JIRA, or as structured documentation for your team.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-omnitest-50 dark:bg-omnitest-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How OmniTest Pro Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Seamlessly integrate OmniTest Pro into your testing workflow with these simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-omnitest-800/50 rounded-xl p-8 border border-gray-100 dark:border-omnitest-700 relative"
            >
              <div className="absolute -top-3 -right-3 bg-omnitest-400 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                {step.number}
              </div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-omnitest-100 dark:bg-omnitest-700 text-omnitest-600 dark:text-omnitest-200 mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 mx-auto max-w-3xl bg-white dark:bg-omnitest-800/50 rounded-xl p-8 border border-gray-100 dark:border-omnitest-700 shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="w-20 h-20 rounded-full bg-omnitest-100 dark:bg-omnitest-700 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-highlight-500" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Demo Scenario</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A tester visits an e-commerce site. OmniTest Pro:
              </p>
              <ol className="space-y-2 text-gray-700 dark:text-gray-200">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-highlight-100 text-highlight-600 text-xs font-bold mr-2 mt-0.5">1</span>
                  Detects React-based product page
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-highlight-100 text-highlight-600 text-xs font-bold mr-2 mt-0.5">2</span>
                  Suggests 23 test cases (UI, cart, recommendations)
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-highlight-100 text-highlight-600 text-xs font-bold mr-2 mt-0.5">3</span>
                  Tracks completed visual regression checks
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-highlight-100 text-highlight-600 text-xs font-bold mr-2 mt-0.5">4</span>
                  Flags untested payment gateway fallback
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
