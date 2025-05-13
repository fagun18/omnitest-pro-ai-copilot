
import { useState } from "react";
import { ChevronDown, Info } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { DetectedComponent, TestCase } from "@/utils/siteAnalyzer";

interface ComponentListProps {
  components: DetectedComponent[];
  aiSuggestion: string;
  onComponentStatusChange: (id: string) => void;
}

export const ComponentList = ({ 
  components, 
  aiSuggestion, 
  onComponentStatusChange 
}: ComponentListProps) => {
  const [expandedItems, setExpandedItems] = useState<{[key: string]: boolean}>({});
  
  // Toggle expanded state for a component
  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  // Get status text and color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "covered":
        return "text-green-600";
      case "not-tested":
        return "text-red-600";
      case "partial":
        return "text-amber-600";
      default:
        return "text-gray-600";
    }
  };
  
  return (
    <div className="p-4">
      {components.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No components detected. Try scanning a different page.
        </div>
      ) : (
        <ul className="space-y-4">
          {components.map((component) => (
            <li key={component.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <Collapsible
                open={expandedItems[component.id] || false}
                onOpenChange={() => toggleExpanded(component.id)}
                className="w-full"
              >
                <div className="flex items-start">
                  <div className="mt-0.5 mr-3">
                    <Checkbox 
                      id={`check-${component.id}`}
                      checked={component.covered}
                      onCheckedChange={() => onComponentStatusChange(component.id)}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <CollapsibleTrigger className="flex items-center text-left w-full">
                          <div>
                            <div className="text-sm font-medium">{component.name}</div>
                            <div className="text-xs text-gray-500">{component.testCases.length} test cases</div>
                          </div>
                          <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${expandedItems[component.id] ? 'rotate-180' : ''}`} />
                        </CollapsibleTrigger>
                      </div>
                      <div className={`ml-auto text-xs font-medium ${getStatusColor(component.status)}`}>
                        {component.status === "covered" ? "Covered" : 
                        component.status === "not-tested" ? "Not Tested" : "Partial"}
                      </div>
                    </div>
                    
                    <CollapsibleContent>
                      <div className="mt-4 pl-4 border-l-2 border-gray-100">
                        <h4 className="font-medium text-sm mb-2">Test Cases:</h4>
                        <ul className="space-y-3">
                          {component.testCases.map((testCase: TestCase) => (
                            <li key={testCase.id} className="text-sm">
                              <div className="font-medium">{testCase.name}</div>
                              <div className="text-xs text-gray-500">{testCase.description}</div>
                              <div className="mt-1">
                                <span className={`text-xs px-2 py-0.5 rounded-full 
                                  ${testCase.priority === 'high' ? 'bg-red-100 text-red-700' : 
                                   testCase.priority === 'medium' ? 'bg-amber-100 text-amber-700' : 
                                   'bg-blue-100 text-blue-700'}`}>
                                  {testCase.priority} priority
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CollapsibleContent>
                  </div>
                </div>
              </Collapsible>
            </li>
          ))}
        </ul>
      )}
      
      {aiSuggestion && (
        <div className="mt-5 p-3 rounded bg-blue-50 border border-blue-100 flex items-center">
          <Info className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
          <div className="text-sm">
            <span className="font-medium text-blue-600">AI Suggestion:</span>
            <span className="ml-2 text-blue-700">{aiSuggestion}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComponentList;
