
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

const PageLayout = ({ children, title, description }: PageLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="bg-gradient-to-b from-omnitest-100 to-white dark:from-omnitest-900 dark:to-omnitest-800 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">{title}</h1>
            {description && (
              <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
                {description}
              </p>
            )}
          </div>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
