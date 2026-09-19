import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageContent } from "@/lib/content";
import { NarrativePage } from "@/components/narrative/NarrativePage";

export const metadata: Metadata = {
  title: "Expertise — Precision Residential Construction & Joinery | Haven",
  description:
    "Explore Haven's building methodology, joinery roots, and concept-to-completion management for high-end architectural homes in Melbourne.",
};

export default function ExpertisePage() {
  const page = getPageContent("expertise");

  if (!page) {
    notFound();
  }

  return (
    <main>
      <NarrativePage
        page={page}
        ctaHeading="Plan Your Architectural Build"
        ctaDescription="Engage early with our building team to optimize construction methodology and cost certainty."
      />
    </main>
  );
}
