
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, User, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mldbwqdv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for contacting us. We'll be in touch soon.",
        });
        setFormState({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: ""
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout
      title="Contact Us"
      description="Get in touch with our team for support, sales inquiries, or partnership opportunities"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="col-span-2">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name" 
                      value={formState.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name" 
                      value={formState.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email address" 
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (optional)</Label>
                    <Input 
                      id="phone" 
                      placeholder="Enter your phone number" 
                      value={formState.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input 
                    id="company" 
                    placeholder="Enter your company name" 
                    value={formState.company}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please provide details about your inquiry" 
                    rows={6} 
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  className="w-full md:w-auto bg-highlight hover:bg-highlight-600" 
                  type="submit" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Message'}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="flex items-start p-6">
                    <Mail className="mr-4 h-5 w-5 text-omnitest-500" />
                    <div>
                      <h3 className="font-bold mb-1">Email Us</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-1">General Inquiries:</p>
                      <a href="mailto:info@omnitest.com" className="text-omnitest-600 dark:text-omnitest-400 hover:underline">info@omnitest.com</a>
                      <p className="text-gray-600 dark:text-gray-300 mt-2 mb-1">Support:</p>
                      <a href="mailto:support@omnitest.com" className="text-omnitest-600 dark:text-omnitest-400 hover:underline">support@omnitest.com</a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="flex items-start p-6">
                    <Phone className="mr-4 h-5 w-5 text-omnitest-500" />
                    <div>
                      <h3 className="font-bold mb-1">Call Us</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-1">Sales:</p>
                      <a href="tel:+1-800-123-4567" className="text-omnitest-600 dark:text-omnitest-400 hover:underline">+1 (800) 123-4567</a>
                      <p className="text-gray-600 dark:text-gray-300 mt-2 mb-1">Support:</p>
                      <a href="tel:+1-800-123-4568" className="text-omnitest-600 dark:text-omnitest-400 hover:underline">+1 (800) 123-4568</a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="flex items-start p-6">
                    <MapPin className="mr-4 h-5 w-5 text-omnitest-500" />
                    <div>
                      <h3 className="font-bold mb-1">Our Headquarters</h3>
                      <address className="not-italic text-gray-600 dark:text-gray-300">
                        123 Testing Street<br />
                        San Francisco, CA 94107<br />
                        United States
                      </address>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="bg-gray-100 dark:bg-omnitest-900/50 p-6 rounded-lg">
                  <h3 className="font-bold mb-3">Office Hours</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">Monday - Friday:</p>
                  <p className="font-medium mb-2">9:00 AM - 6:00 PM (PST)</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">Saturday - Sunday:</p>
                  <p className="font-medium">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-omnitest-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-omnitest-800/50 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">How quickly can I expect a response?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We strive to respond to all inquiries within 24 hours during business days. For urgent support issues, premium customers receive priority response times.
              </p>
            </div>
            
            <div className="bg-white dark:bg-omnitest-800/50 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Do you offer product demos?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes! We offer personalized demos for teams interested in exploring OmniTest. Select "Request a Demo" in the inquiry type and we'll arrange a session with our product specialists.
              </p>
            </div>
            
            <div className="bg-white dark:bg-omnitest-800/50 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">What information should I include for support requests?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                For the fastest resolution, please include your account email, browser version, specific steps to reproduce the issue, and any error messages or screenshots.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
