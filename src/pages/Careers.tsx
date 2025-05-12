
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Careers = () => {
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

  const jobOpenings = [
    {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "Remote (US)",
      type: "Full-time",
      description: "Build exceptional user interfaces for our testing platform using React and TypeScript."
    },
    {
      title: "Machine Learning Engineer",
      department: "AI Research",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Develop and improve our AI algorithms for component detection and test suggestion."
    },
    {
      title: "QA Specialist",
      department: "Product",
      location: "Remote (Global)",
      type: "Full-time",
      description: "Help us build the best testing tool by testing it thoroughly yourself."
    },
    {
      title: "Developer Advocate",
      department: "Marketing",
      location: "Remote (US/Europe)",
      type: "Full-time",
      description: "Be the bridge between our engineering team and the testing community."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "New York, NY",
      type: "Full-time",
      description: "Ensure our customers get the most value from OmniTest."
    }
  ];

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

          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Open Positions</h2>
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

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Don't see a position that matches your skills? We're always looking for exceptional talent.
            </p>
            <Button className="bg-omnitest-500 hover:bg-omnitest-600">
              Send General Application
            </Button>
          </div>
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
