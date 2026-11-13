import { Boot } from "@/components/journey/Boot";
import { Hud } from "@/components/journey/Hud";
import { Hero } from "@/components/journey/Hero";
import { Identity } from "@/components/journey/Identity";
import { Missions } from "@/components/journey/Missions";
import { Works } from "@/components/journey/Works";
import { Arsenal } from "@/components/journey/Arsenal";
import { Connect } from "@/components/journey/Connect";
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

// One night in Neo-Miami: the page opens at sundown and ends at first light.
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Boot />
      <Hud />
      <main id="main">
        <Hero />
        <Identity />
        <Missions />
        <Works />
        <Arsenal />
        <Connect />
      </main>
    </>
  );
}
