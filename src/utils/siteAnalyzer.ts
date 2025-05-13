
import { websocketService } from './websocket';

export interface DetectedComponent {
  id: string;
  name: string;
  covered: boolean;
  status: "covered" | "not-tested" | "partial";
  testCases: TestCase[];
  type?: string;
  elementType?: string;
}

export interface TestCase {
  id: string;
  name: string;
  description: string;
  priority: "high" | "medium" | "low";
}

export interface AISuggestion {
  id: string;
  name: string;
  description: string;
}

export interface AnalysisResult {
  components: DetectedComponent[];
  suggestions: AISuggestion[];
  aiMessage: string;
  coverage: number;
  elementCount: number;
  issuesDetected: number;
}

class SiteAnalyzer {
  private static instance: SiteAnalyzer;
  private analysisSessions: Map<string, AnalysisResult> = new Map();
  
  // Use singleton pattern
  static getInstance(): SiteAnalyzer {
    if (!SiteAnalyzer.instance) {
      SiteAnalyzer.instance = new SiteAnalyzer();
    }
    return SiteAnalyzer.instance;
  }
  
  // Analyze a target URL
  public async analyzeUrl(url: string): Promise<AnalysisResult> {
    const domain = this.extractDomain(url);
    console.log(`Analyzing URL: ${url}, Domain: ${domain}`);
    
    // Send initial progress notification via WebSocket
    websocketService.connect().sendTestProgress(url, 10);
    
    try {
      const response = await this.fetchPageContent(url);
      
      // Update progress
      websocketService.sendTestProgress(url, 30);
      
      // Parse the HTML from response
      const pageContent = response.toString();
      const elements = this.extractElements(pageContent);
      
      // Update progress
      websocketService.sendTestProgress(url, 60);
      
      // Generate relevant test cases based on actual elements
      const result = this.generateTestCases(elements, domain, url);
      
      // Store the result
      this.analysisSessions.set(url, result);
      
      // Final progress update
      websocketService.sendTestProgress(url, 100);
      
      return result;
    } catch (error) {
      console.error("Error analyzing URL:", error);
      throw new Error(`Failed to analyze ${url}: ${error}`);
    }
  }
  
  // Retrieve previous analysis results
  public getAnalysisHistory(): {url: string, result: AnalysisResult}[] {
    return Array.from(this.analysisSessions.entries())
      .map(([url, result]) => ({ url, result }));
  }
  
  public getResult(url: string): AnalysisResult | undefined {
    return this.analysisSessions.get(url);
  }
  
  // Extract the domain from a URL
  private extractDomain(url: string): string {
    try {
      const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
      return urlObj.hostname;
    } catch (e) {
      console.error("Error extracting domain:", e);
      return url;
    }
  }
  
  // Simulate fetching page content
  private async fetchPageContent(url: string): Promise<string> {
    // In a real implementation, this would make an actual fetch request
    // For now, we'll simulate it
    console.log(`Fetching content from: ${url}`);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate different responses based on URL content
        let content = `<html><head><title>Sample Page</title></head><body>`;
        
        // E-commerce detection
        if (url.includes('shop') || url.includes('store') || url.includes('commerce')) {
          content += `
            <header>
              <nav>
                <ul>
                  <li><a href="/products">Products</a></li>
                  <li><a href="/cart">Cart</a></li>
                  <li><a href="/checkout">Checkout</a></li>
                </ul>
              </nav>
            </header>
            <main>
              <div id="product-grid">
                <div class="product-card"></div>
                <div class="product-card"></div>
              </div>
              <div id="cart-summary"></div>
              <form id="payment-form">
                <input type="text" name="cardNumber" placeholder="Card Number" />
                <input type="text" name="expiration" placeholder="MM/YY" />
                <input type="text" name="cvv" placeholder="CVV" />
                <button type="submit">Pay Now</button>
              </form>
            </main>
          `;
        } 
        // Blog detection
        else if (url.includes('blog') || url.includes('news')) {
          content += `
            <header>
              <nav>
                <ul>
                  <li><a href="/categories">Categories</a></li>
                  <li><a href="/search">Search</a></li>
                </ul>
              </nav>
            </header>
            <main>
              <article>
                <h1>Blog Post Title</h1>
                <div class="content"></div>
                <div class="comments-section">
                  <form id="comment-form">
                    <textarea name="comment"></textarea>
                    <button type="submit">Post Comment</button>
                  </form>
                </div>
              </article>
              <aside>
                <div class="search-box"></div>
                <div class="social-sharing"></div>
              </aside>
            </main>
          `;
        }
        // Generic website
        else {
          content += `
            <header>
              <nav>
                <ul>
                  <li><a href="/about">About</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </nav>
            </header>
            <main>
              <section class="hero">
                <h1>Welcome</h1>
                <p>Site description</p>
              </section>
              <section class="features">
                <div class="feature-card"></div>
                <div class="feature-card"></div>
              </section>
              <div class="carousel"></div>
            </main>
          `;
        }
        
        content += `</body></html>`;
        resolve(content);
      }, 1000);
    });
  }
  
  // Extract HTML elements from page content
  private extractElements(pageContent: string): string[] {
    // In a real implementation, this would parse HTML and extract elements
    // For now, we'll simulate by extracting certain keywords
    const elements: string[] = [];
    
    // Extract forms
    const formMatches = pageContent.match(/<form[^>]*>/g);
    if (formMatches) {
      elements.push(...formMatches);
    }
    
    // Extract buttons
    const buttonMatches = pageContent.match(/<button[^>]*>/g);
    if (buttonMatches) {
      elements.push(...buttonMatches);
    }
    
    // Extract navigation
    const navMatches = pageContent.match(/<nav[^>]*>/g);
    if (navMatches) {
      elements.push(...navMatches);
    }
    
    // Extract key divs with IDs
    const divWithIdMatches = pageContent.match(/<div id="[^"]*"[^>]*>/g);
    if (divWithIdMatches) {
      elements.push(...divWithIdMatches);
    }
    
    // Extract links
    const linkMatches = pageContent.match(/<a href="[^"]*"[^>]*>/g);
    if (linkMatches) {
      elements.push(...linkMatches);
    }
    
    return elements;
  }
  
  // Generate test cases based on detected elements
  private generateTestCases(elements: string[], domain: string, url: string): AnalysisResult {
    // Map elements to actual test components
    const components: DetectedComponent[] = [];
    const suggestions: AISuggestion[] = [];
    
    // Check for forms
    const hasForms = elements.some(el => el.includes('<form'));
    const hasPaymentForm = elements.some(el => el.includes('payment-form') || el.includes('cardNumber'));
    const hasCommentForm = elements.some(el => el.includes('comment-form'));
    const hasNavigation = elements.some(el => el.includes('<nav'));
    const hasCarousel = elements.some(el => el.includes('carousel'));
    const hasProducts = elements.some(el => el.includes('product-card') || url.includes('shop') || url.includes('store'));
    
    // Add navigation test if detected
    if (hasNavigation) {
      components.push({
        id: "comp-nav",
        name: "Navigation Menu",
        covered: false,
        status: "not-tested",
        testCases: [
          { 
            id: "tc-nav-1", 
            name: "Test mobile responsiveness", 
            description: "Verify menu collapses on mobile devices", 
            priority: "high" 
          },
          { 
            id: "tc-nav-2", 
            name: "Test navigation links", 
            description: "Ensure all links direct to correct pages", 
            priority: "medium" 
          }
        ]
      });
    }
    
    // Add payment form test if detected
    if (hasPaymentForm) {
      components.push({
        id: "comp-payment",
        name: "Payment Form Validation",
        covered: false,
        status: "not-tested",
        testCases: [
          { 
            id: "tc-payment-1", 
            name: "Validate credit card number format", 
            description: "Test that invalid credit card formats are rejected", 
            priority: "high" 
          },
          { 
            id: "tc-payment-2", 
            name: "Test expiration date validation", 
            description: "Verify expired cards are rejected", 
            priority: "high" 
          },
          { 
            id: "tc-payment-3", 
            name: "Test CVV code validation", 
            description: "Ensure CVV must be 3-4 digits", 
            priority: "medium" 
          }
        ]
      });
      
      // Add related suggestion
      suggestions.push({
        id: "sug-payment",
        name: "Payment Form Error Handling",
        description: "Test how the payment form handles network errors and timeouts"
      });
    }
    
    // Add cart summary test for e-commerce
    if (elements.some(el => el.includes('cart-summary'))) {
      components.push({
        id: "comp-cart",
        name: "Cart Summary Component",
        covered: false,
        status: "not-tested",
        testCases: [
          { 
            id: "tc-cart-1", 
            name: "Verify item quantity updates", 
            description: "Test that changing quantity updates total price", 
            priority: "high" 
          },
          { 
            id: "tc-cart-2", 
            name: "Test removing items from cart", 
            description: "Ensure items can be removed from cart", 
            priority: "medium" 
          }
        ]
      });
    }
    
    // Add comment form test if detected
    if (hasCommentForm) {
      components.push({
        id: "comp-comment",
        name: "Comment Submission Form",
        covered: false,
        status: "not-tested",
        testCases: [
          { 
            id: "tc-comment-1", 
            name: "Test comment submission", 
            description: "Verify comments can be submitted successfully", 
            priority: "medium" 
          },
          { 
            id: "tc-comment-2", 
            name: "Test comment length limits", 
            description: "Ensure character limits are enforced", 
            priority: "low" 
          }
        ]
      });
    }
    
    // Add carousel test if detected
    if (hasCarousel) {
      components.push({
        id: "comp-carousel",
        name: "Image Carousel",
        covered: false,
        status: "not-tested",
        testCases: [
          { 
            id: "tc-carousel-1", 
            name: "Test auto-rotation", 
            description: "Verify images rotate automatically", 
            priority: "low" 
          },
          { 
            id: "tc-carousel-2", 
            name: "Test manual navigation", 
            description: "Test next/previous controls work", 
            priority: "medium" 
          }
        ]
      });
    }
    
    // Add search functionality if detected
    if (elements.some(el => el.includes('search'))) {
      components.push({
        id: "comp-search",
        name: "Search Functionality",
        covered: false,
        status: "not-tested",
        testCases: [
          { 
            id: "tc-search-1", 
            name: "Verify search results", 
            description: "Test search returns relevant results", 
            priority: "high" 
          },
          { 
            id: "tc-search-2", 
            name: "Test empty search", 
            description: "Verify appropriate message for no results", 
            priority: "medium" 
          }
        ]
      });
    }
    
    // Add product listing test for e-commerce
    if (hasProducts) {
      components.push({
        id: "comp-products",
        name: "Product Listing",
        covered: false,
        status: "not-tested",
        testCases: [
          { 
            id: "tc-product-1", 
            name: "Test product filtering", 
            description: "Verify products can be filtered by category", 
            priority: "medium" 
          },
          { 
            id: "tc-product-2", 
            name: "Test product sorting", 
            description: "Ensure products can be sorted by price", 
            priority: "medium" 
          }
        ]
      });
    }
    
    // Generate AI suggestions based on detected content
    if (hasPaymentForm) {
      suggestions.push(
        { 
          id: "sug-user-auth", 
          name: "User Authentication Flow", 
          description: "Test guest checkout vs registered user checkout paths" 
        },
        { 
          id: "sug-cart", 
          name: "Cart Item Quantity Update", 
          description: "Verify inventory checks when updating quantities" 
        },
        { 
          id: "sug-address", 
          name: "Address Validation Logic", 
          description: "Test international address formats and validation" 
        }
      );
    }
    
    // Add general suggestions that apply to most sites
    suggestions.push(
      { 
        id: "sug-perf", 
        name: "Page Load Performance", 
        description: "Test page load times across different devices" 
      },
      { 
        id: "sug-browser", 
        name: "Cross-browser Compatibility", 
        description: "Verify site works on Chrome, Firefox, Safari" 
      },
      { 
        id: "sug-accessibility", 
        name: "Accessibility Compliance", 
        description: "Test keyboard navigation and screen reader support" 
      },
      { 
        id: "sug-responsive", 
        name: "Responsive Layouts", 
        description: "Verify layouts adapt to different screen sizes" 
      }
    );
    
    // Generate appropriate AI message
    let aiMessage = "";
    if (hasPaymentForm) {
      aiMessage = "Focus testing on payment validation and checkout flow security.";
    } else if (hasCommentForm) {
      aiMessage = "Focus on testing form validation and comment submission flow.";
    } else {
      aiMessage = "Focus on testing responsive design and navigation functionality.";
    }
    
    // Calculate metrics
    const elementCount = elements.length;
    const coverage = Math.floor(Math.random() * 30 + 50); // 50-80%
    const issuesDetected = components.length > 0 ? Math.floor(components.length / 2) + 1 : 3;
    
    return {
      components,
      suggestions,
      aiMessage,
      elementCount,
      coverage,
      issuesDetected
    };
  }
}

export const siteAnalyzer = SiteAnalyzer.getInstance();
