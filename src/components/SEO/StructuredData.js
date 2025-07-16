import Head from '@docusaurus/Head';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Code & Chaos",
    "url": "https://sophiedeziel.github.io",
    "description": "A journey through my mind. In all directions. All at once.",
    "author": {
      "@type": "Person",
      "name": "Sophie Déziel"
    },
    "sameAs": [
      "https://github.com/sophiedeziel"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Code & Chaos",
    "url": "https://sophiedeziel.github.io",
    "description": "Explore my tech blog covering web development, Ruby on Rails, and adventures in the world of code. Follow my journey through technical challenges and creative discoveries.",
    "inLanguage": "en",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://sophiedeziel.github.io/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Head>
  );
}