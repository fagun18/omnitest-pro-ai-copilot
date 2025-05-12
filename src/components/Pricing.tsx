
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Free",
      price: {
        monthly: "$0",
        annually: "$0",
      },
      description: "Basic detection for individuals and small projects.",
      features: [
        "Basic component detection",
        "5 test saves per month",
        "Export to CSV",
        "1 project",
        "Community support",
      ],
      buttonText: "Start Free",
      highlighted: false,
    },
    {
      name: "Pro",
      price: {
        monthly: "$29",
        annually: "$19",
      },
      description: "Advanced features for professional testers and small teams.",
      features: [
        "Everything in Free",
        "Unlimited test saves",
        "AI test suggestions",
        "API integrations",
        "Test coverage dashboard",
        "Email support",
        "10 projects",
      ],
      buttonText: "Start Pro Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: {
        monthly: "Custom",
        annually: "Custom",
      },
      description: "Full-featured solution for organizations with complex testing needs.",
      features: [
        "Everything in Pro",
        "On-premise deployment",
        "SSO authentication",
        "Team analytics",
        "Custom integrations",
        "Dedicated support",
        "Unlimited projects",
      ],
      buttonText: "Contact Sales",
      highlighted: false,
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Choose the plan that fits your testing needs and scale as your team grows.
          </p>
          
          <div className="flex items-center justify-center">
            <div className="bg-gray-100 dark:bg-omnitest-800 p-1 rounded-full inline-flex">
              <button 
                className={`px-4 py-2 rounded-full text-sm ${annual ? 'bg-white dark:bg-omnitest-700 shadow-sm' : 'text-gray-600 dark:text-gray-300'}`}
                onClick={() => setAnnual(true)}
              >
                Annual
                <span className="ml-1 text-xs text-highlight-500 font-medium">Save 34%</span>
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm ${!annual ? 'bg-white dark:bg-omnitest-700 shadow-sm' : 'text-gray-600 dark:text-gray-300'}`}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl border ${
                plan.highlighted 
                  ? 'border-highlight-400 dark:border-highlight-500 shadow-lg shadow-highlight-100' 
                  : 'border-gray-200 dark:border-gray-700'
              } overflow-hidden`}
            >
              {plan.highlighted && (
                <div className="bg-highlight-500 text-white text-center py-1.5 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-1">
                  <span className="text-4xl font-bold">
                    {annual ? plan.price.annually : plan.price.monthly}
                  </span>
                  {plan.name !== "Enterprise" && (
                    <span className="text-gray-500 dark:text-gray-400 ml-2">
                      /user/month
                    </span>
                  )}
                </div>
                {annual && plan.name !== "Free" && plan.name !== "Enterprise" && (
                  <div className="text-sm text-gray-500 mb-4">Billed annually</div>
                )}
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                  {plan.description}
                </p>
                
                <Button 
                  className={`w-full ${
                    plan.highlighted 
                      ? 'bg-highlight hover:bg-highlight-600 text-white' 
                      : 'bg-omnitest-400 hover:bg-omnitest-500 text-white'
                  }`}
                >
                  {plan.buttonText}
                </Button>
                
                <div className="mt-6">
                  <div className="text-sm font-medium mb-4">What's included:</div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center bg-omnitest-50 dark:bg-omnitest-800/50 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4">Need a custom solution?</h3>
          <p className="mb-6">
            Contact our team to discuss custom requirements, volume discounts, or specific integrations.
          </p>
          <Button className="bg-omnitest-400 hover:bg-omnitest-500 text-white">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
