import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageContent } from "@/lib/content";
import { NarrativePage } from "@/components/narrative/NarrativePage";

export const metadata: Metadata = {
  title: "For Architects — Collaborative Luxury Construction | Haven",
  description:
    "Partner with Haven Constructions. Early buildability advice, uncompromising fidelity to drawings, and disciplined trade coordination.",
};

export default function ForArchitectsPage() {
  const page = getPageContent("for-architects");

  if (!page) {
    notFound();
  }

  return (
    <main>
      <NarrativePage
        page={page}
        ctaHeading="Collaborate on Your Next Vision"
        ctaDescription="Submit a project for early tender review, buildability advice, or contractor partnership."
      />
    </main>
  );
}
