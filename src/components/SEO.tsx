import { Helmet } from "react-helmet-async";

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
};

const SEO = ({
  title = "Fokel — Digital Studio",
  description = "Fokel is a digital studio that brings your business into market focus with bold, disruptive strategies. Expert digital marketing, web design, SEO, and branding services.",
  keywords = "digital marketing agency, web design company, SEO services, branding agency, social media marketing, digital strategy",
  image = "https://www.fokelworks.com/og-image.png",
  url,
  type = "website",
  publishedTime,
  author,
}: SEOProps) => {
  const fullUrl = url || "https://www.fokelworks.com";
  const fullTitle = title.includes("Fokel") ? title : `${title} | Fokel`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Fokel" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article specific */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}
    </Helmet>
  );
};

export default SEO;
