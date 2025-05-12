
import PageLayout from "@/components/PageLayout";

const PrivacyPolicy = () => {
  return (
    <PageLayout
      title="Privacy Policy"
      description="Learn how we collect, use, and protect your information"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose dark:prose-invert">
            <p className="text-gray-500 dark:text-gray-400 mb-8">Last updated: May 1, 2025</p>
            
            <h2>1. Introduction</h2>
            <p>
              OmniTest ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and browser extension (collectively, the "Service").
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Service.
            </p>
            
            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>
              We may collect personally identifiable information, such as:
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Company name</li>
              <li>Job title</li>
              <li>Billing information</li>
            </ul>
            
            <h3>2.2 Browser Extension Data</h3>
            <p>
              When you use our browser extension, we collect:
            </p>
            <ul>
              <li>Information about the websites you test (URLs, component structure)</li>
              <li>Test cases you create or modify</li>
              <li>Testing coverage statistics</li>
            </ul>
            <p>
              <strong>Important:</strong> We do not collect personal data from the websites you test, such as form inputs, passwords, or other sensitive information.
            </p>
            
            <h2>3. How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul>
              <li>Provide, maintain, and improve our Service</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Develop new products and services</li>
              <li>Generate anonymized, aggregated data for improving our AI algorithms</li>
            </ul>
            
            <h2>4. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            
            <h2>5. Data Security</h2>
            <p>
              We use administrative, technical, and physical security measures to protect your personal information. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
            
            <h2>6. Your Data Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>The right to access your personal information</li>
              <li>The right to rectify inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
            </ul>
            <p>
              To exercise these rights, please contact us at privacy@omnitest.com.
            </p>
            
            <h2>7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
