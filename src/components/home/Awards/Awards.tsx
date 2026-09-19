import { TextReveal } from "@/components/animations/TextReveal";
import styles from "./Awards.module.css";

const AWARDS_DATA = [
  {
    title: "Dates",
    description: "15th – 17th January 2027",
    year: "'27",
  },
  {
    title: "Venue",
    description: "Amity University, Sector-125, Noida, Uttar Pradesh",
    year: "Offline",
  },
  {
    title: "Mode",
    description: "Hybrid (Online + Offline)",
    year: "Global",
  },
  {
    title: "Theme",
    description: "Sapientia Ad Actionem – From Wisdom to Action",
    year: "SDGs",
  },
];

export function Awards() {
  return (
    <section className={styles.section} id="awards">
      <p className={styles.dotHeading}>
        <span className={styles.dot} />
        <TextReveal as="span" baseDelay={100}>
          Event Details
        </TextReveal>
      </p>

      {AWARDS_DATA.map((award) => (
        <div key={`${award.title}-${award.year}`}>
          <div className={styles.divider} />
          <div className={styles.awardItem}>
            <div className={styles.awardInner}>
              <div className={styles.awardLeft}>
                <p className={styles.awardLeft}>{award.title}</p>
              </div>
              <div className={styles.awardRight}>
                <p className={styles.awardDesc}>{award.description}</p>
                <p className={styles.awardYear}>{award.year}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.divider} />
    </section>
  );
}
