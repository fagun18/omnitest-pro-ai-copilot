
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-omnitest-400">
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
            OmniTest
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="relative group">
            <Link to="/product" className="text-sm font-medium hover:text-omnitest-400 transition-colors">Product</Link>
            <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-omnitest-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-2">
                <Link to="/features" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-omnitest-700">Features</Link>
                <Link to="/case-studies" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-omnitest-700">Case Studies</Link>
                <Link to="/documentation" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-omnitest-700">Documentation</Link>
              </div>
            </div>
          </div>
          <Link to="/pricing" className="text-sm font-medium hover:text-omnitest-400 transition-colors">Pricing</Link>
          <div className="relative group">
            <Link to="/company" className="text-sm font-medium hover:text-omnitest-400 transition-colors">Company</Link>
            <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-omnitest-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-2">
                <Link to="/about" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-omnitest-700">About</Link>
                <Link to="/blog" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-omnitest-700">Blog</Link>
                <Link to="/careers" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-omnitest-700">Careers</Link>
              </div>
            </div>
          </div>
          <Link to="/contact" className="text-sm font-medium hover:text-omnitest-400 transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium hover:text-omnitest-400 transition-colors">
            Login
          </Link>
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
          <Link to="/product" className="text-sm font-medium p-2 hover:bg-muted rounded-md" onClick={toggleMenu}>Product</Link>
          <Link to="/features" className="text-sm font-medium p-2 hover:bg-muted rounded-md pl-6" onClick={toggleMenu}>Features</Link>
          <Link to="/case-studies" className="text-sm font-medium p-2 hover:bg-muted rounded-md pl-6" onClick={toggleMenu}>Case Studies</Link>
          <Link to="/documentation" className="text-sm font-medium p-2 hover:bg-muted rounded-md pl-6" onClick={toggleMenu}>Documentation</Link>
          <Link to="/pricing" className="text-sm font-medium p-2 hover:bg-muted rounded-md" onClick={toggleMenu}>Pricing</Link>
          <Link to="/company" className="text-sm font-medium p-2 hover:bg-muted rounded-md" onClick={toggleMenu}>Company</Link>
          <Link to="/about" className="text-sm font-medium p-2 hover:bg-muted rounded-md pl-6" onClick={toggleMenu}>About</Link>
          <Link to="/blog" className="text-sm font-medium p-2 hover:bg-muted rounded-md pl-6" onClick={toggleMenu}>Blog</Link>
          <Link to="/careers" className="text-sm font-medium p-2 hover:bg-muted rounded-md pl-6" onClick={toggleMenu}>Careers</Link>
          <Link to="/contact" className="text-sm font-medium p-2 hover:bg-muted rounded-md" onClick={toggleMenu}>Contact</Link>
          <div className="flex flex-col gap-2 mt-2">
            <Link to="/login" className="text-sm font-medium p-2 hover:bg-muted rounded-md" onClick={toggleMenu}>Login</Link>
            <Button className="bg-highlight hover:bg-highlight-600 text-white">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
