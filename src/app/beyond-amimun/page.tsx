"use client";

import { useEffect, useRef, useState } from "react";
import { TextReveal } from "@/components/animations/TextReveal";
import { BEYOND_AMIMUN_DATA } from "@/content/beyond-amimun";
import styles from "./page.module.css";

export default function BeyondAmimunPage() {
  const horizontalSectionRef = useRef<HTMLDivElement | null>(null);
  const trainTrackRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);

  useEffect(() => {
    const calculateMaxTranslate = () => {
      if (trainTrackRef.current) {
        const trackWidth = trainTrackRef.current.scrollWidth;
        const containerWidth = window.innerWidth;
        setMaxTranslate(Math.max(0, trackWidth - containerWidth + 120));
      }
    };

    calculateMaxTranslate();
    window.addEventListener("resize", calculateMaxTranslate);

    const handleScroll = () => {
      if (!horizontalSectionRef.current) return;
      const rect = horizontalSectionRef.current.getBoundingClientRect();
      const sectionHeight = horizontalSectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // When the top of the pinned section enters viewport
      const totalScrollable = sectionHeight - windowHeight;
      if (totalScrollable <= 0) return;

      const currentScrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScrolled / totalScrollable));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculateMaxTranslate);
    };
  }, []);

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>
            <span className={styles.heroDot} />
            <span>{BEYOND_AMIMUN_DATA.hero.tag}</span>
          </div>

          <h1 className={styles.titleMain}>
            <TextReveal as="span" baseDelay={100}>
              {BEYOND_AMIMUN_DATA.hero.title}
            </TextReveal>
          </h1>

          <div className={styles.heroGrid}>
            <p className={styles.heroSubtitle}>
              {BEYOND_AMIMUN_DATA.hero.subtitle}
            </p>

            <div className={styles.highlightCard}>
              <h3 className={styles.highlightTitle}>Independent Student Body</h3>
              <p className={styles.highlightText}>
                {BEYOND_AMIMUN_DATA.hero.studentBodyText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Club Identity Banner */}
      <section className={styles.clubBanner}>
        <div className={styles.clubInner}>
          <span className={styles.bannerTag}>Our Mission & Vision</span>
          <p className={styles.clubStatement}>
            {BEYOND_AMIMUN_DATA.hero.clubStatement}
          </p>
        </div>
      </section>

      {/* Pinned Horizontal Train Track Initiatives Section */}
      <section ref={horizontalSectionRef} className={styles.horizontalPinnedWrapper} id="initiatives">
        <div className={styles.horizontalStickyViewport}>
          <div className={styles.horizontalHeader}>
            <div className={styles.headerLeft}>
              <span className={styles.sectionLabel}>Core Initiatives</span>
              <h2 className={styles.sectionTitle}>Expanding Diplomatic Horizons</h2>
            </div>
            <p className={styles.sectionDesc}>
              Scroll through our structured training modules, global dialogues, and international coalitions.
            </p>
          </div>

          <div className={styles.trainTrackContainer}>
            <div
              ref={trainTrackRef}
              className={styles.trainTrack}
              style={{
                transform: `translateX(-${scrollProgress * maxTranslate}px)`,
              }}
            >
              {BEYOND_AMIMUN_DATA.initiatives.map((item) => (
                <div key={item.number} className={styles.trainCard}>
                  <div className={styles.cardTopRow}>
                    <span className={styles.cardNumber}>{item.number}</span>
                    <span className={styles.cardTag}>{item.tag}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar Indicator */}
          <div className={styles.progressBarWrapper}>
            <div
              className={styles.progressBarFill}
              style={{ width: `${Math.min(100, Math.max(0, scrollProgress * 100))}%` }}
            />
          </div>
        </div>
      </section>

      {/* Prestigious Collaborations Grid */}
      <section className={styles.collabSection} id="collaborations">
        <div className={styles.collabHeader}>
          <span className={styles.sectionLabel}>Ecosystem Partners</span>
          <h2 className={styles.collabTitle}>Prestigious Collaborations</h2>
          <p className={styles.collabDesc}>
            Partnering with premier intergovernmental and non-governmental bodies to uphold authentic diplomatic debate standards.
          </p>
        </div>

        <div className={styles.collabGrid}>
          {BEYOND_AMIMUN_DATA.collaborations.map((collab, i) => (
            <div key={i} className={styles.collabCard}>
              <div className={styles.collabTopRow}>
                <span className={styles.collabIndex}>0{i + 1}</span>
                <span className={styles.collabBadge}>Official Partner</span>
              </div>
              <h3 className={styles.collabName}>{collab.name}</h3>
              <p className={styles.collabDetail}>{collab.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
