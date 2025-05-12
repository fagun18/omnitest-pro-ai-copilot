
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, RefreshCcw, XOctagon } from "lucide-react";

const ServerError = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-omnitest-50 to-white dark:from-omnitest-900 dark:to-omnitest-800 p-4">
      <XOctagon className="h-20 w-20 text-destructive mb-6" />
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">500</h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 text-center">
        Server Error
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md text-center">
        Something went wrong on our end. Our team has been notified and is working to fix the issue. Please try again later.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={handleRefresh} 
          variant="outline"
          className="flex items-center justify-center"
        >
          <RefreshCcw className="mr-2 h-4 w-4" />
          Try Again
        </Button>
        <Button asChild className="bg-omnitest-500 hover:bg-omnitest-600">
          <Link to="/" className="flex items-center">
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ServerError;
