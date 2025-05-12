
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "How does OmniTest Pro detect components?",
      answer: "OmniTest Pro uses a proprietary AI engine that analyzes the DOM structure, JavaScript events, and CSS properties to identify interactive elements and their relationships. It works across all modern frameworks including React, Vue, Angular, and vanilla JavaScript applications."
    },
    {
      question: "Will OmniTest Pro work with my tech stack?",
      answer: "Yes! OmniTest Pro is tech stack agnostic. It works with any web application regardless of framework. This includes React, Vue, Angular, Svelte, or custom frameworks. It can even detect components in legacy applications."
    },
    {
      question: "Do I need to modify my code to use OmniTest Pro?",
      answer: "No code changes are required. OmniTest Pro works as a browser extension that analyzes your application as is. This non-invasive approach means you can start using it immediately without any integration work."
    },
    {
      question: "How accurate are the AI test suggestions?",
      answer: "Our AI has been trained on thousands of web applications and millions of test cases. In benchmarks, OmniTest Pro identifies 93% of critical test paths that human testers would identify, plus an additional 27% of edge cases that are typically missed in manual testing processes."
    },
    {
      question: "Can I export test cases to my existing tools?",
      answer: "Absolutely! OmniTest Pro integrates with popular testing tools including TestRail, JIRA, Azure DevOps, and more. You can also export to CSV, JSON, or markdown formats for easy integration with any workflow."
    },
    {
      question: "Is there an enterprise self-hosted option?",
      answer: "Yes, for enterprise customers we offer a self-hosted solution that can be deployed in your own infrastructure. This includes additional features for team management, custom integration with internal tools, and enhanced security options."
    },
    {
      question: "How does OmniTest Pro handle security and privacy?",
      answer: "OmniTest Pro is designed with security and privacy in mind. The extension only analyzes the structure of your application, not your data. For sensitive applications, our Enterprise tier offers a fully self-hosted solution where no data leaves your infrastructure."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-omnitest-50 dark:bg-omnitest-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about OmniTest Pro and how it can transform your testing process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white dark:bg-omnitest-800/50 rounded-lg border border-gray-200 dark:border-omnitest-700 px-6"
              >
                <AccordionTrigger className="text-left font-medium py-4 text-gray-800 dark:text-gray-200">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 pb-4 pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Still have questions? We're here to help.
            </p>
            <div className="inline-flex items-center text-omnitest-600 dark:text-omnitest-400 font-medium">
              <a href="#contact" className="flex items-center hover:underline">
                <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
