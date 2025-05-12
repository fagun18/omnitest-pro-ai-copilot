
import PageLayout from "@/components/PageLayout";

const TermsOfService = () => {
  return (
    <PageLayout
      title="Terms of Service"
      description="Please read these terms carefully before using our services"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose dark:prose-invert">
            <p className="text-gray-500 dark:text-gray-400 mb-8">Last updated: May 1, 2025</p>
            
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") govern your access to and use of the OmniTest website and browser extension (the "Service"). By accessing or using the Service, you agree to be bound by these Terms.
            </p>
            
            <h2>2. Description of Service</h2>
            <p>
              OmniTest provides an AI-powered testing co-pilot that helps users detect web application components and generate testing suggestions. The Service is provided on an "as is" and "as available" basis.
            </p>
            
            <h2>3. User Accounts</h2>
            <p>
              To access certain features of the Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            <p>
              You agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information when creating your account</li>
              <li>Promptly update your account information as needed</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Ensure that you exit from your account at the end of each session</li>
            </ul>
            
            <h2>4. Subscription Plans and Payment</h2>
            <p>
              OmniTest offers various subscription plans, including a free tier and paid plans. By subscribing to a paid plan, you agree to pay the applicable fees as they become due.
            </p>
            <p>
              All fees are exclusive of taxes, which may be added to the total amount due. Subscription fees are non-refundable except as required by law or as explicitly stated in these Terms.
            </p>
            
            <h2>5. Intellectual Property Rights</h2>
            <h3>5.1 OmniTest's Rights</h3>
            <p>
              The Service, including all content, features, and functionality, is owned by OmniTest and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise use any portion of the Service without our prior written consent.
            </p>
            
            <h3>5.2 Your Rights</h3>
            <p>
              You retain all rights to your content that you upload, submit, or otherwise make available through the Service. By using the Service, you grant us a worldwide, non-exclusive license to use, reproduce, and display your content solely for the purpose of providing and improving the Service.
            </p>
            
            <h2>6. Acceptable Use</h2>
            <p>
              You agree not to use the Service to:
            </p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the intellectual property rights of others</li>
              <li>Attempt to gain unauthorized access to the Service or other users' accounts</li>
              <li>Interfere with or disrupt the operation of the Service</li>
              <li>Engage in any activity that could harm the Service or other users</li>
            </ul>
            
            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, OmniTest shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or goodwill, arising out of or in connection with your use of the Service.
            </p>
            
            <h2>8. Termination</h2>
            <p>
              We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including but not limited to a breach of these Terms.
            </p>
            
            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on our website or through other appropriate communication channels.
            </p>
            
            <h2>10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
            </p>
            
            <h2>11. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us at:
            </p>
            <p>
              Email: legal@omnitest.com<br />
              Address: 123 Testing Street, San Francisco, CA 94107
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TermsOfService;
