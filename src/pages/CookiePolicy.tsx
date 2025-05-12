
import PageLayout from "@/components/PageLayout";

const CookiePolicy = () => {
  return (
    <PageLayout
      title="Cookie Policy"
      description="Understanding how and why we use cookies on our website"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose dark:prose-invert">
            <p className="text-gray-500 dark:text-gray-400 mb-8">Last updated: May 1, 2025</p>
            
            <h2>1. Introduction</h2>
            <p>
              This Cookie Policy explains how OmniTest ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website and use our browser extension (collectively, the "Service"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
            
            <h2>2. What Are Cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
            <p>
              Cookies set by the website owner (in this case, OmniTest) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
            </p>
            
            <h2>3. Types of Cookies We Use</h2>
            
            <h3>3.1 Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.
            </p>
            
            <h3>3.2 Performance and Analytics Cookies</h3>
            <p>
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.
            </p>
            
            <h3>3.3 Functional Cookies</h3>
            <p>
              These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
            </p>
            
            <h3>3.4 Targeting Cookies</h3>
            <p>
              These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.
            </p>
            
            <h2>4. How We Use Cookies</h2>
            <p>
              We use cookies for several reasons. Some cookies are required for technical reasons for our website and browser extension to operate, and we refer to these as "essential" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our Service. Third parties serve cookies through our website for analytics and other purposes.
            </p>
            
            <h2>5. Your Cookie Choices</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie banner on our website.
            </p>
            <p>
              Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our website.
            </p>
            
            <h2>6. Browser Extension Cookies</h2>
            <p>
              Our browser extension may also use cookies or similar local storage technologies to function properly and improve your experience. These cookies are necessary for the extension to operate effectively and provide its core features.
            </p>
            
            <h2>7. Updates to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
            
            <h2>8. Contact Information</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please contact us at:
            </p>
            <p>
              Email: privacy@omnitest.com<br />
              Address: 123 Testing Street, San Francisco, CA 94107
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CookiePolicy;
