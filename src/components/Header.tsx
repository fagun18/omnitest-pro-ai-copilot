
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-omnitest-400">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M4 9.5L12 4L20 9.5V17.5L12 22L4 17.5V9.5Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="#4C63B6" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M12 12L12 16" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
              <circle 
                cx="12" 
                cy="10" 
                r="1" 
                fill="white"
              />
            </svg>
            OmniTest Pro
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium hover:text-omnitest-400 transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-omnitest-400 transition-colors">How It Works</a>
          <a href="#pricing" className="text-sm font-medium hover:text-omnitest-400 transition-colors">Pricing</a>
          <a href="#faq" className="text-sm font-medium hover:text-omnitest-400 transition-colors">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="#contact" className="text-sm font-medium hover:text-omnitest-400 transition-colors">
            Login
          </a>
          <Button className="bg-highlight hover:bg-highlight-600 text-white">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed inset-x-0 top-16 bg-background border-b border-border transition-all duration-300 ease-in-out",
        isMenuOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      )}>
        <div className="container px-4 py-4 flex flex-col gap-4">
          <a 
            href="#features" 
            className="text-sm font-medium p-2 hover:bg-muted rounded-md"
            onClick={toggleMenu}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="text-sm font-medium p-2 hover:bg-muted rounded-md"
            onClick={toggleMenu}
          >
            How It Works
          </a>
          <a 
            href="#pricing" 
            className="text-sm font-medium p-2 hover:bg-muted rounded-md"
            onClick={toggleMenu}
          >
            Pricing
          </a>
          <a 
            href="#faq" 
            className="text-sm font-medium p-2 hover:bg-muted rounded-md"
            onClick={toggleMenu}
          >
            FAQ
          </a>
          <div className="flex flex-col gap-2 mt-2">
            <a 
              href="#contact" 
              className="text-sm font-medium p-2 hover:bg-muted rounded-md"
              onClick={toggleMenu}
            >
              Login
            </a>
            <Button className="bg-highlight hover:bg-highlight-600 text-white">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
