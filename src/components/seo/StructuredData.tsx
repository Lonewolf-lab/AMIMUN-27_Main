export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "AMIMUN'27",
    alternateName: "Amity International Model United Nations 2027",
    description:
      "16th Edition of Amity International Model United Nations scheduled from 15–17 January 2027 at Amity University, Noida.",
    url: "https://amimun.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Amity University, Sector 125",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201313",
      addressCountry: "IN",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
