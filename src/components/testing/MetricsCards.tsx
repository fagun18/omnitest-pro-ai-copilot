
import { Skeleton } from "@/components/ui/skeleton";

interface MetricsCardsProps {
  scanning: boolean;
  scanComplete: boolean;
  elementCount: number;
  coverage: number;
  issuesDetected: number;
}

export const MetricsCards = ({ 
  scanning,
  scanComplete,
  elementCount,
  coverage,
  issuesDetected
}: MetricsCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium">Components Detected</h3>
          <span className="text-2xl font-bold text-omnitest-600">
            {scanning ? (
              <Skeleton className="w-8 h-8 rounded-md" />
            ) : (
              elementCount || "-"
            )}
          </span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
          <div 
            className="bg-omnitest-500 h-2 rounded-full transition-all duration-500 ease-in-out" 
            style={{width: scanning ? `${Math.min((elementCount / 23) * 100, 100)}%` : scanComplete ? '100%' : '0%'}}
          ></div>
        </div>
        <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
          {scanning ? "Scanning in progress..." : scanComplete ? "100% detection complete" : "Waiting to scan"}
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium">Test Coverage</h3>
          <span className="text-2xl font-bold text-omnitest-600">
            {scanning || !scanComplete ? (
              <Skeleton className="w-8 h-8 rounded-md" />
            ) : (
              `${coverage}%`
            )}
          </span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
          <div 
            className="bg-omnitest-500 h-2 rounded-full transition-all duration-500 ease-in-out" 
            style={{width: scanComplete ? `${coverage}%` : '0%'}}
          ></div>
        </div>
        <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
          {scanning ? "Calculating coverage..." : scanComplete ? "+12% from last scan" : "Waiting to scan"}
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium">Issues Detected</h3>
          <span className="text-2xl font-bold text-amber-600">
            {scanning || !scanComplete ? (
              <Skeleton className="w-8 h-8 rounded-md" />
            ) : (
              issuesDetected
            )}
          </span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
          <div 
            className="bg-amber-500 h-2 rounded-full transition-all duration-500 ease-in-out" 
            style={{width: scanComplete ? '30%' : '0%'}}
          ></div>
        </div>
        <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
          {scanning ? "Finding issues..." : scanComplete ? `${issuesDetected} issues recommended for testing` : "Waiting to scan"}
        </p>
      </div>
    </div>
  );
};

export default MetricsCards;
