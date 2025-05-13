
import { Button } from "@/components/ui/button";
import { AISuggestion } from "@/utils/siteAnalyzer";

interface SuggestionsListProps {
  suggestions: AISuggestion[];
  onAddSuggestion: (suggestion: AISuggestion) => void;
}

export const SuggestionsList = ({ 
  suggestions, 
  onAddSuggestion 
}: SuggestionsListProps) => {
  
  return (
    <div className="p-6">
      {suggestions.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No AI suggestions available.
        </div>
      ) : (
        <ul className="space-y-4">
          {suggestions.map((suggestion, index) => (
            <li key={suggestion.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-omnitest-100 dark:bg-omnitest-900 flex items-center justify-center text-omnitest-700 dark:text-omnitest-300 mr-3">
                  {index + 1}
                </div>
                <div>
                  <div className="font-medium">{suggestion.name}</div>
                  <div className="text-xs text-gray-500">{suggestion.description}</div>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onAddSuggestion(suggestion)}
              >
                Add
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SuggestionsList;
