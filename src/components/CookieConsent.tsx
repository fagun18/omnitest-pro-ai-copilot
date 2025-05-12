
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  
  useEffect(() => {
    // Check if user has already given consent
    const consentGiven = localStorage.getItem("cookie-consent");
    if (!consentGiven) {
      // Show consent banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setShowConsent(false);
  };
  
  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "false");
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setShowConsent(false);
  };
  
  if (!showConsent) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 p-4 md:p-6 shadow-lg z-50 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-3 flex-shrink-0">
            <Cookie className="h-6 w-6 text-omnitest-400" />
            <h3 className="text-lg font-medium">Cookie Consent</h3>
          </div>
          <div className="flex-grow">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              We use cookies to enhance your browsing experience, analyze site traffic and personalize content.
              By clicking "Accept All", you consent to our use of cookies.
              Visit our <a href="/cookie-policy" className="text-omnitest-500 hover:underline">Cookie Policy</a> to learn more.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0 mt-4 md:mt-0">
            <Button variant="outline" size="sm" onClick={handleDecline}>
              Essential Only
            </Button>
            <Button className="bg-omnitest-500 hover:bg-omnitest-600" size="sm" onClick={handleAccept}>
              Accept All
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleDecline} 
              className="ml-2"
              aria-label="Close cookie consent"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
