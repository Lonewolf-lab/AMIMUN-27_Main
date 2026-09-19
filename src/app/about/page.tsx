"use client";

import { useEffect, useRef, useState } from "react";
import { TextReveal } from "@/components/animations/TextReveal";
import { WHY_AMIMUN_DATA } from "@/content/why-amimun";
import styles from "./page.module.css";

export default function WhyAmimunPage() {
  const [activePillar, setActivePillar] = useState(0);
  const pillarRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      pillarRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.2) {
          setActivePillar(idx);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>
            <span className={styles.heroDot} />
            <span>{WHY_AMIMUN_DATA.hero.tag}</span>
          </div>

          <h1 className={styles.titleMain}>
            <TextReveal as="span" baseDelay={100}>
              {WHY_AMIMUN_DATA.hero.title}
            </TextReveal>
          </h1>

          <div className={styles.heroGrid}>
            <p className={styles.heroSubtitle}>
              {WHY_AMIMUN_DATA.hero.subtitle}
            </p>

            <blockquote className={styles.quoteCard}>
              <p className={styles.quoteText}>
                &ldquo;{WHY_AMIMUN_DATA.hero.quote}&rdquo;
              </p>
              <cite className={styles.quoteAuthor}>
                — {WHY_AMIMUN_DATA.hero.author}
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Sticky Left Indicator + Overlapping Parallax Pillar Cards */}
      <section className={styles.pillarsSection} id="why-amimun">
        <div className={styles.stickyLeft}>
          <span className={styles.sectionLabel}>Key Pillars</span>
          <h2 className={styles.sectionTitle}>
            Why Choose AMIMUN 2027
          </h2>
          <p className={styles.sectionDesc}>
            Discover the foundational commitments, global outlook, and rigorous academic debating standards that distinguish AMIMUN on the world stage.
          </p>
        </div>

        <div className={styles.pillarList}>
          {WHY_AMIMUN_DATA.pillars.map((pillar, idx) => {
            const zIndex = idx + 1;
            // Progressive top offset so Card 01 sits at 120px, Card 02 at 136px, etc.
            const stickyTop = 110 + idx * 18;

            return (
              <div
                key={pillar.number}
                ref={(el) => {
                  pillarRefs.current[idx] = el;
                }}
                className={styles.pillarCard}
                style={{
                  top: `calc(var(--navigation-height) + ${stickyTop}px)`,
                  zIndex: zIndex,
                  borderColor: activePillar === idx ? "#0c388d" : undefined,
                }}
              >
                <div className={styles.cardTopRow}>
                  <span className={styles.cardNumber}>{pillar.number}</span>
                  <span className={styles.cardTag}>AMIMUN Standard</span>
                </div>
                <h3 className={styles.cardTitle}>{pillar.title}</h3>
                <p className={styles.cardDesc}>{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* University Vision & Mission Feature Banner (AMIMUN Royal Blue #0c388d) */}
      <section className={styles.visionBanner} id="vision-mission">
        <div className={styles.visionInner}>
          <div className={styles.visionTag}>
            <span className={styles.heroDot} style={{ backgroundColor: "#ffffff" }} />
            <span>Institution Overview</span>
          </div>

          <h2 className={styles.visionHeading}>
            {WHY_AMIMUN_DATA.university.heading}
          </h2>

          <p className={styles.visionText}>
            {WHY_AMIMUN_DATA.university.vision}
          </p>
        </div>
      </section>

      {/* Core Values 4-Column Grid */}
      <section className={styles.valuesSection} id="core-values">
        <div className={styles.valuesHeader}>
          <span className={styles.sectionLabel}>Foundational Tenets</span>
          <h2 className={styles.valuesTitle}>Our Core Values</h2>
        </div>

        <div className={styles.valuesGrid}>
          {WHY_AMIMUN_DATA.values.map((val) => (
            <div key={val.number} className={styles.valueCard}>
              <span className={styles.valNumber}>{val.number}</span>
              <h3 className={styles.valTitle}>{val.title}</h3>
              <p className={styles.valDesc}>{val.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
