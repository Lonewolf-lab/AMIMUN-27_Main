import Link from "next/link";
import { TextReveal } from "@/components/animations/TextReveal";
import styles from "./ExpertiseHighlight.module.css";

interface Pillar {
  number: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Architectural Alignment",
    description:
      "We engage from early design stages, understanding the subtle intent behind every elevation, material transition, and sightline to protect design integrity.",
    linkText: "For Architects",
    href: "/for-architects",
  },
  {
    number: "02",
    title: "Master Craftsmanship",
    description:
      "A third-generation builder grounded in fine furniture and joinery craft. Every detail, junction, and custom surface is executed with uncompromising rigor.",
    linkText: "Our Expertise",
    href: "/expertise",
  },
  {
    number: "03",
    title: "Bespoke Delivery",
    description:
      "Limiting our commission volume ensures dedicated site leadership, clear communication, and seamless collaboration from site acquisition to handover.",
    linkText: "About Haven",
    href: "/about",
  },
];

export function ExpertiseHighlight() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.label}>Building Philosophy</p>
          <TextReveal as="h2" className={styles.heading} baseDelay={50}>
            Simplicity is the outcome of clarity, intent, and rigorous refinement.
          </TextReveal>
          <p className={styles.subheading}>
            Serving Melbourne&apos;s premier inner-northwest enclaves—Essendon,
            Aberfeldie, Moonee Ponds, and Ascot Vale—with artisanal residential construction.
          </p>
        </div>

        <div className={styles.pillarsGrid}>
          {PILLARS.map((pillar) => (
            <div key={pillar.number} className={styles.pillarCard}>
              <span className={styles.pillarNumber}>{pillar.number}</span>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarBody}>{pillar.description}</p>
              <Link href={pillar.href} className={styles.pillarLink}>
                <span>{pillar.linkText}</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
