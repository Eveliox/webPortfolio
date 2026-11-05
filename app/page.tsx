import { Portfolio } from "@/components/Portfolio";
import { personal, hero } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  email: personal.email,
  url: "https://eveliogonzalez.com",
  sameAs: [personal.github, personal.linkedin],
  jobTitle: "Software Engineer",
  description: hero.tagline,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Miami",
    addressRegion: "FL",
    addressCountry: "US",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Florida International University",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Portfolio />
    </>
  );
}
