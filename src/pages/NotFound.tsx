
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-omnitest-50 to-white dark:from-omnitest-900 dark:to-omnitest-800 p-4">
      <AlertTriangle className="h-20 w-20 text-highlight-500 mb-6" />
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">404</h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 text-center">
        Oops! We couldn't find that page
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md text-center">
        The page you're looking for doesn't exist or has been moved. Check the URL or return to the homepage.
      </p>
      <Button asChild className="bg-omnitest-500 hover:bg-omnitest-600">
        <Link to="/" className="flex items-center">
          <Home className="mr-2 h-4 w-4" />
          Return to Home
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
