'use client';

// import { Helmet } from 'react-helmet-async';
import { defaultMeta, generateMeta } from '../config/meta.config';

const MetaTags = (props) => {
  const meta = generateMeta(props);
  const { title, description, keywords, ogImage, ogType, twitterCard, canonicalUrl } = meta;
  
  // Generate structured data for organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Codeship",
    "url": "https://codeship.in",
    "logo": "https://codeship.in/logo.png", // Update with your actual logo URL
    "description": defaultMeta.description,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      // Add your social media URLs here
      "https://www.linkedin.com/company/codeship",
      "https://twitter.com/codeship",
      "https://facebook.com/codeship"
    ]
  };

  return (
    // <Helmet>
    //   {/* Basic Meta Tags */}
    //   <title>{title}</title>
    //   <meta name="description" content={description} />
    //   <meta name="keywords" content={keywords} />

    //   {/* Open Graph / Facebook */}
    //   <meta property="og:type" content={ogType} />
    //   <meta property="og:title" content={title} />
    //   <meta property="og:description" content={description} />
    //   <meta property="og:image" content={ogImage} />
    //   <meta property="og:site_name" content="Codeship" />

    //   {/* Twitter */}
    //   <meta name="twitter:card" content={twitterCard} />
    //   <meta name="twitter:title" content={title} />
    //   <meta name="twitter:description" content={description} />
    //   <meta name="twitter:image" content={ogImage} />

    //   {/* Canonical URL */}
    //   {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

    //   {/* Additional Meta Tags */}
    //   <meta name="robots" content="index, follow" />
    //   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //   <meta name="theme-color" content="#000000" />
    //   <meta name="author" content="Codeship" />

    //   {/* Structured Data */}
    //   <script type="application/ld+json">
    //     {JSON.stringify(structuredData)}
    //   </script>
    // </Helmet>
    <></>
  );
};

export default MetaTags; 