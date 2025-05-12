
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
}

const SEO = ({
  title = "OmniTest - AI-Powered Testing Co-Pilot",
  description = "OmniTest is an AI-powered testing co-pilot that automatically detects web application components to provide intelligent testing suggestions and track coverage.",
  keywords = "AI testing, automated testing, web testing, QA automation, testing co-pilot, AI test generation, quality assurance, software testing, test automation",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  ogUrl = "https://omnitest.com",
  ogType = "website",
  twitterCard = "summary_large_image"
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="OmniTest" />
      <link rel="canonical" href={ogUrl} />
    </Helmet>
  );
};

export default SEO;
