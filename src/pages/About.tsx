
import PageLayout from "@/components/PageLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      title: "CEO & Co-founder",
      bio: "Former Director of QA at Enterprise Software Inc., with 15+ years of experience in software testing and quality assurance.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      title: "CTO & Co-founder",
      bio: "AI and machine learning expert with previous experience at major tech companies developing intelligent systems.",
      avatar: "MC"
    },
    {
      name: "Jessica Rodriguez",
      title: "Head of Product",
      bio: "Product leader with a passion for creating tools that solve real problems for development teams.",
      avatar: "JR"
    },
    {
      name: "David Kim",
      title: "Lead Engineer",
      bio: "Full-stack developer specialized in browser extensions and web technologies with 10+ years of experience.",
      avatar: "DK"
    }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We believe quality should never be compromised. Our tools help teams deliver exceptional software consistently."
    },
    {
      title: "Human-Centered AI",
      description: "We build AI that enhances human capabilities rather than replacing them, making testers more effective and efficient."
    },
    {
      title: "Continuous Innovation",
      description: "We're committed to staying at the forefront of testing technology, constantly evolving our platform."
    },
    {
      title: "Customer Success",
      description: "Our success is measured by our customers' success. We're dedicated to helping teams achieve their quality goals."
    }
  ];

  return (
    <PageLayout
      title="About OmniTest"
      description="Learn about our mission to transform software testing with AI"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              OmniTest was founded in 2023 by a team of experienced software testing professionals who recognized a critical gap in the market: as web applications grew increasingly complex, traditional testing methods struggled to keep pace, resulting in missed bugs and quality issues.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our founders experienced firsthand the challenges of maintaining comprehensive test coverage while under pressure to deliver faster. They envisioned a solution that would leverage artificial intelligence to augment human testers, making them more effective and efficient.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              After months of research and development, OmniTest was born — an AI-powered testing co-pilot that automatically detects web application components and provides intelligent testing suggestions. Today, we're proud to help hundreds of companies deliver higher quality software by ensuring nothing slips through the cracks.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-omnitest-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-omnitest-800/50 p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <Avatar className="h-32 w-32 mx-auto mb-4">
                  <AvatarImage src="" alt={member.name} />
                  <AvatarFallback className="bg-omnitest-200 text-omnitest-600 text-xl">{member.avatar}</AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-omnitest-600 dark:text-omnitest-400 mb-2">{member.title}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-omnitest-100 dark:bg-omnitest-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're building the future of software testing and we're looking for talented individuals to join our team.
            </p>
            <a href="/careers" className="inline-block px-6 py-3 bg-omnitest-500 hover:bg-omnitest-600 text-white rounded-md">
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
