
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "How AI is Revolutionizing Software Testing",
    excerpt: "Discover the ways artificial intelligence is transforming traditional testing approaches and improving quality assurance.",
    author: "Sarah Johnson",
    date: "May 8, 2025",
    category: "Testing Trends",
    image: "ai-testing.jpg",
    slug: "ai-revolutionizing-testing"
  };

  const blogPosts = [
    {
      title: "5 Common Testing Blind Spots and How to Address Them",
      excerpt: "Learn about the areas that most testing teams miss and strategies to ensure comprehensive coverage.",
      author: "Michael Chen",
      date: "May 2, 2025",
      category: "Best Practices",
      slug: "testing-blind-spots"
    },
    {
      title: "Integrating OmniTest with Your CI/CD Pipeline",
      excerpt: "A step-by-step guide to incorporating OmniTest into your continuous integration and delivery workflow.",
      author: "David Kim",
      date: "April 27, 2025",
      category: "Tutorials",
      slug: "omnitest-cicd-integration"
    },
    {
      title: "The Future of Test Automation with AI Co-pilots",
      excerpt: "Exploring how AI assistants are changing the landscape of test automation and enhancing tester productivity.",
      author: "Jessica Rodriguez",
      date: "April 18, 2025",
      category: "Industry Insights",
      slug: "future-test-automation-ai"
    },
    {
      title: "Case Study: How TechCorp Improved Coverage by 85%",
      excerpt: "A detailed look at how one enterprise company transformed their testing process with OmniTest.",
      author: "Sarah Johnson",
      date: "April 10, 2025",
      category: "Case Studies",
      slug: "techcorp-case-study"
    },
    {
      title: "Balancing Manual and Automated Testing",
      excerpt: "Finding the right mix of human expertise and automation for optimal testing efficiency.",
      author: "Michael Chen",
      date: "April 3, 2025",
      category: "Best Practices",
      slug: "manual-automated-balance"
    },
    {
      title: "Top 10 Testing Metrics You Should Be Tracking",
      excerpt: "Key performance indicators that help you measure and improve your testing effectiveness.",
      author: "Jessica Rodriguez",
      date: "March 25, 2025",
      category: "Metrics",
      slug: "testing-metrics"
    }
  ];

  return (
    <PageLayout
      title="Blog"
      description="Insights, tutorials, and industry trends in software testing and quality assurance"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-omnitest-800/50 rounded-lg shadow-md overflow-hidden">
                <div className="aspect-[16/9] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Featured Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-omnitest-100 dark:bg-omnitest-700/50 text-omnitest-600 dark:text-omnitest-300 text-xs px-2 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm ml-3">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {featuredPost.date}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{featuredPost.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">By {featuredPost.author}</span>
                    <Link 
                      to={`/blog/${featuredPost.slug}`}
                      className="text-omnitest-600 dark:text-omnitest-400 font-medium hover:underline inline-flex items-center"
                    >
                      Read article <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Latest Articles</h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post, index) => (
                  <Card key={index} className="bg-white dark:bg-omnitest-800/50">
                    <CardHeader className="p-4 pb-0">
                      <div className="flex items-center mb-2">
                        <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-0.5 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <CardTitle className="text-base">{post.title}</CardTitle>
                      <CardDescription className="text-xs">{post.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="text-sm text-omnitest-600 dark:text-omnitest-400 hover:underline"
                      >
                        Read more →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">All Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription>By {post.author}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-omnitest-600 dark:text-omnitest-400 font-medium hover:underline inline-flex items-center"
                    >
                      Continue reading <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
