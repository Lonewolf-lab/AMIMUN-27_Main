import { TextReveal } from "@/components/animations/TextReveal";
import styles from "./BrandStatement.module.css";

const REGIONS = ["Essendon", "Aberfeldie", "Moonee Ponds", "Ascot Vale"];

export function BrandStatement() {
  return (
    <section className={styles.statementSection}>
      <div className={styles.statementWrapper}>
        <p className="label" style={{ color: "var(--color-text-secondary)" }}>
          Philosophy & Presence
        </p>

        <TextReveal as="h2" className="text--size-xl" baseDelay={100}>
          Specialist residential builder crafting bespoke architectural homes defined by quiet elegance, expansive openness, and master craftsmanship.
        </TextReveal>

        <p className={styles.subText}>
          Every residence we build represents a harmonious synthesis between visionary architectural design and meticulous construction execution, intentionally shaped for enduring luxury.
        </p>

        <div className={styles.regionBadges}>
          {REGIONS.map((region) => (
            <span key={region} className={styles.badge}>
              {region}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
