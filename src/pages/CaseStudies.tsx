
import PageLayout from "@/components/PageLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "How TechCorp Reduced Bugs by 73%",
      company: "TechCorp Inc.",
      description: "A leading SaaS provider used OmniTest to completely transform their testing approach.",
      tags: ["Enterprise", "SaaS", "Test Automation"],
      image: "techcorp.jpg",
      logo: "TC",
      color: "bg-blue-200 text-blue-600",
      path: "/case-studies/techcorp"
    },
    {
      title: "LaunchFast's Journey to Efficient Testing",
      company: "LaunchFast",
      description: "This startup achieved enterprise-level testing with limited resources using OmniTest.",
      tags: ["Startup", "E-commerce", "Manual Testing"],
      image: "launchfast.jpg",
      logo: "LF",
      color: "bg-green-200 text-green-600",
      path: "/case-studies/launchfast"
    },
    {
      title: "WebScale Discovers Critical Edge Cases",
      company: "WebScale Technologies",
      description: "How AI suggestions helped identify issues their team would have missed.",
      tags: ["Mid-size", "FinTech", "Security Testing"],
      image: "webscale.jpg",
      logo: "WS",
      color: "bg-purple-200 text-purple-600",
      path: "/case-studies/webscale"
    },
    {
      title: "Agency X Standardizes Testing Across Clients",
      company: "Agency X",
      description: "A digital agency implements OmniTest to create consistent testing processes for all clients.",
      tags: ["Agency", "Multiple Industries", "Workflow"],
      image: "agencyx.jpg",
      logo: "AX",
      color: "bg-orange-200 text-orange-600",
      path: "/case-studies/agencyx"
    }
  ];

  return (
    <PageLayout
      title="Case Studies"
      description="See how companies across industries have transformed their testing processes with OmniTest"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                <div className="relative">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">{study.company} Case Study Image</span>
                  </div>
                  <Avatar className="absolute top-4 left-4 h-12 w-12 border-2 border-white">
                    <AvatarImage src="" alt={study.company} />
                    <AvatarFallback className={study.color}>{study.logo}</AvatarFallback>
                  </Avatar>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <CardDescription>{study.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{study.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-gray-100 dark:bg-gray-800 py-1 px-2 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={study.path}
                    className="inline-flex items-center text-omnitest-600 dark:text-omnitest-400 font-medium hover:underline"
                  >
                    Read full case study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-omnitest-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join These Success Stories</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              OmniTest has helped companies of all sizes improve their testing efficiency, reduce bugs, and deliver higher quality software.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-16 bg-white dark:bg-omnitest-800 rounded border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                  <span className="text-gray-400">Client Logo</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CaseStudies;
