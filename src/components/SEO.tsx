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
  robots?: string;
};

const SEO = ({
  title = "Fokel — Digital Studio",
  description = "Fokel is a premium digital studio specializing in B2B marketing, strategic web design, and SEO-driven growth. We transform ambitious brands into market leaders.",
  keywords = "digital marketing agency, B2B digital marketing, creative digital studio, web design company, SEO services, branding agency",
  image = "https://www.fokelworks.com/og-image.png",
  url,
  type = "website",
  publishedTime,
  author = "Fokel Digital",
  robots = "index, follow",
}: SEOProps) => {
  const fullUrl = url || "https://www.fokelworks.com";
  const fullTitle = title.includes("Fokel") ? title : `${title} | Fokel`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Fokel" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@fokelworks" />

      {/* Article specific */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && (
        <meta property="article:author" content={author} />
      )}
    </Helmet>
  );
};

export default SEO;
