"use client";

import { useEffect, useRef, useState } from "react";
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
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
      id="awards"
    >
      <p className={styles.dotHeading}>
        <span className={styles.dot} />
        <TextReveal as="span" baseDelay={100}>
          Event Details
        </TextReveal>
      </p>

      {AWARDS_DATA.map((award, index) => (
        <div key={`${award.title}-${award.year}`}>
          <div className={styles.divider} />
          <div
            className={styles.awardItem}
            style={{ transitionDelay: `${index * 0.08}s` }}
          >
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
