
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Careers = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
    resumeLink: ""
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
        body: JSON.stringify({
          ...formData,
          subject: "Career Application"
        })
      });

      if (response.ok) {
        toast({
          title: "Application submitted!",
          description: "Thank you for your interest. We'll review your application and be in touch soon.",
        });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          position: "",
          coverLetter: "",
          resumeLink: ""
        });
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "We offer top-market salaries and equity options to all team members."
    },
    {
      title: "Flexible Work",
      description: "Work remotely, in our office, or a hybrid approach - whatever works best for you."
    },
    {
      title: "Learning Budget",
      description: "$2,000 annual budget for courses, books, conferences, and other learning opportunities."
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs to keep you at your best."
    },
    {
      title: "Unlimited PTO",
      description: "Take the time you need to rest, recharge, and maintain work-life balance."
    },
    {
      title: "Team Retreats",
      description: "Quarterly team gatherings to connect, collaborate, and celebrate our achievements."
    }
  ];

  // Currently no open positions
  const jobOpenings: any[] = [];
  const hasOpenPositions = jobOpenings.length > 0;

  return (
    <PageLayout
      title="Careers at OmniTest"
      description="Join our team and help transform the future of software testing"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              At OmniTest, we're building tools that help teams deliver better software. We're a passionate team of engineers, designers, and testing experts on a mission to transform how software testing is done through the power of AI.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We foster a culture of innovation, continuous learning, and work-life balance. We value diverse perspectives and believe in giving our team members the autonomy to do their best work.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-omnitest-800/50 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            {hasOpenPositions ? 'Open Positions' : 'Join Our Team'}
          </h2>
          
          {hasOpenPositions ? (
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <Badge className="bg-highlight-500">{job.type}</Badge>
                    </div>
                    <CardDescription>
                      <span className="text-omnitest-600 dark:text-omnitest-400">{job.department}</span> • {job.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>
                    <Button variant="outline" className="border-omnitest-500 text-omnitest-500 hover:bg-omnitest-500 hover:text-white">
                      View Job Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Submit Your Application</CardTitle>
                  <CardDescription>
                    We're always looking for talented individuals to join our team. Even if we don't have any open positions right now, we'd love to keep your information on file for future opportunities.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input 
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your email address"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number (optional)</Label>
                        <Input 
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position">Position of Interest</Label>
                        <Input 
                          id="position"
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          placeholder="What role are you interested in?"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="resumeLink">Resume/CV Link</Label>
                      <Input 
                        id="resumeLink"
                        name="resumeLink"
                        value={formData.resumeLink}
                        onChange={handleInputChange}
                        placeholder="Link to your resume (Google Drive, Dropbox, etc.)"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Please provide a link to your resume/CV stored on a cloud service
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="coverLetter">Cover Letter</Label>
                      <Textarea 
                        id="coverLetter"
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        placeholder="Tell us why you'd be a great fit for OmniTest"
                        rows={5}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto bg-omnitest-500" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}

          {hasOpenPositions && (
            <div className="mt-12 text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Don't see a position that matches your skills? We're always looking for exceptional talent.
              </p>
              <Button className="bg-omnitest-500 hover:bg-omnitest-600">
                Send General Application
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-omnitest-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Hiring Process</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-12">
              We strive to make our hiring process transparent, fair, and efficient.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <div className="bg-white dark:bg-omnitest-800/50 h-24 flex items-center justify-center rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                  <span className="font-bold">Application Review</span>
                </div>
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:block">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white dark:bg-omnitest-800/50 h-24 flex items-center justify-center rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                  <span className="font-bold">Initial Interview</span>
                </div>
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:block">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white dark:bg-omnitest-800/50 h-24 flex items-center justify-center rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                  <span className="font-bold">Technical Assessment</span>
                </div>
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:block">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="bg-white dark:bg-omnitest-800/50 h-24 flex items-center justify-center rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                  <span className="font-bold">Final Decision</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
