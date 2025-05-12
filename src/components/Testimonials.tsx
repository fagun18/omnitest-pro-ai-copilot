
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "OmniTest Pro has transformed how we approach testing. We've reduced missed bugs by 73% and cut testing time in half.",
      name: "Sarah Johnson",
      title: "QA Lead at TechCorp",
      avatar: "SJ",
    },
    {
      quote: "As a startup with limited resources, OmniTest Pro gives us enterprise-grade testing capabilities without needing a full QA team.",
      name: "Michael Chen",
      title: "CTO at LaunchFast",
      avatar: "MC",
    },
    {
      quote: "The AI suggestions are eerily accurate. It found edge cases our team would have never thought to test for.",
      name: "Jessica Rodriguez",
      title: "Senior Test Engineer at WebScale",
      avatar: "JR",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-omnitest-50 dark:from-omnitest-900 dark:to-omnitest-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Testing Professionals</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            See how OmniTest Pro is revolutionizing testing workflows for companies of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-omnitest-800/50 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-omnitest-700"
            >
              <div className="mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 13.8667 4.86667 12.1333 5.93333 10.5333C7 8.93333 8.46667 7.73333 10.3333 6.93333L11.3333 8.66667C9.73333 9.33333 8.53333 10.3333 7.73333 11.6667C6.93333 13 6.66667 14.2 6.93333 15.2667C7.2 15.0667 7.66667 14.9333 8.33333 14.9333C9.26667 14.9333 10.0667 15.2667 10.7333 15.9333C11.4 16.6 11.7333 17.4667 11.7333 18.5333C11.7333 19.4667 11.4 20.2667 10.7333 20.9333C10.0667 21.2 9.26667 21.3333 9.33333 21.3333ZM21.3333 21.3333C19.8667 21.3333 18.6667 20.8 17.7333 19.7333C16.8 18.6667 16.3333 17.3333 16.3333 15.7333C16.3333 13.8667 16.8667 12.1333 17.9333 10.5333C19 8.93333 20.4667 7.73333 22.3333 6.93333L23.3333 8.66667C21.7333 9.33333 20.5333 10.3333 19.7333 11.6667C18.9333 13 18.6667 14.2 18.9333 15.2667C19.2 15.0667 19.6667 14.9333 20.3333 14.9333C21.2667 14.9333 22.0667 15.2667 22.7333 15.9333C23.4 16.6 23.7333 17.4667 23.7333 18.5333C23.7333 19.4667 23.4 20.2667 22.7333 20.9333C22.0667 21.2 21.2667 21.3333 21.3333 21.3333Z" fill="#4C63B6"/>
                </svg>
              </div>
              
              <p className="text-gray-700 dark:text-gray-200 mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="" alt={testimonial.name} />
                  <AvatarFallback className="bg-omnitest-200 text-omnitest-600">{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 md:p-10 bg-white dark:bg-omnitest-800/50 rounded-xl border border-gray-100 dark:border-omnitest-700 shadow-lg max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
              <div className="flex -space-x-4">
                <Avatar className="border-4 border-white dark:border-omnitest-800 h-16 w-16">
                  <AvatarFallback className="bg-omnitest-200 text-omnitest-600 text-xl">C1</AvatarFallback>
                </Avatar>
                <Avatar className="border-4 border-white dark:border-omnitest-800 h-16 w-16">
                  <AvatarFallback className="bg-highlight-200 text-highlight-600 text-xl">C2</AvatarFallback>
                </Avatar>
                <Avatar className="border-4 border-white dark:border-omnitest-800 h-16 w-16">
                  <AvatarFallback className="bg-omnitest-200 text-omnitest-600 text-xl">C3</AvatarFallback>
                </Avatar>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">Join 500+ companies improving their test coverage</h3>
              <p className="text-gray-600 dark:text-gray-300">
                From startups to enterprises, teams are discovering and fixing bugs faster with OmniTest Pro.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <div className="text-xs font-medium bg-green-100 text-green-700 py-1 px-2 rounded-full">68% Fewer Production Bugs</div>
                <div className="text-xs font-medium bg-blue-100 text-blue-700 py-1 px-2 rounded-full">40% Faster Testing Cycles</div>
                <div className="text-xs font-medium bg-purple-100 text-purple-700 py-1 px-2 rounded-full">3x Better Test Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
