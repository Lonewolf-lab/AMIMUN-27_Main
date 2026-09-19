import { Metadata } from "next";
import { TextReveal } from "@/components/animations/TextReveal";
import { ConsultationForm } from "@/components/contact/ConsultationForm/ConsultationForm";
import { ContactHub } from "@/components/contact/ContactHub/ContactHub";

export const metadata: Metadata = {
  title: "Contact & Consultation — Haven Constructions | Custom Luxury Builder",
  description:
    "Arrange a confidential consultation with Haven Constructions. Specialist luxury home builders serving Essendon, Aberfeldie, Moonee Ponds, and Ascot Vale.",
};

export default function ContactPage() {
  return (
    <main
      style={{
        maxWidth: "var(--max-container-width)",
        margin: "0 auto",
        padding:
          "calc(var(--navigation-height) + var(--space-xl)) var(--space-gutter) var(--space-section-large)",
      }}
    >
      <header style={{ marginBottom: "var(--space-3xl)", maxWidth: "820px", margin: "0 auto var(--space-3xl)" }}>
        <p
          className="label"
          style={{
            color: "var(--color-brand-primary)",
            marginBottom: "var(--space-2xs)",
          }}
        >
          Speak with our team
        </p>
        <TextReveal as="h1" className="text--size-xl" baseDelay={50}>
          Let’s explore your vision
        </TextReveal>
        <p
          style={{
            fontSize: "var(--step-0)",
            color: "var(--color-text-secondary)",
            marginTop: "var(--space-s)",
            lineHeight: "1.6",
          }}
        >
          Whether your architectural plans are fully resolved or currently in conceptual development,
          we welcome early dialogue. Outline your project below to arrange a dedicated discussion with
          Haven&apos;s directors.
        </p>
      </header>

      <ConsultationForm />
      <ContactHub />
    </main>
  );
}
