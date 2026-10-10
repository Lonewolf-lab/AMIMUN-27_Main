"use client";

import { useEffect, useRef, useState } from "react";
import { TextReveal } from "@/components/animations/TextReveal";
import styles from "./LocationSection.module.css";

export function LocationSection() {
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
      { threshold: 0.15 }
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
      id="location"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badgeDot} />
            <TextReveal as="span" baseDelay={100} className={styles.badgeText}>
              Conference Venue
            </TextReveal>
          </div>
          <h2 className={styles.title}>
            Join Us at Amity University Noida
          </h2>
          <p className={styles.subtitle}>
            Sector-125, Noida, Uttar Pradesh 201313 — A sprawling, world-class academic campus ready to host global diplomacy.
          </p>
        </div>

        <div className={styles.contentGrid}>
          {/* Left Details Card */}
          <div className={styles.detailsCard}>
            <div className={styles.detailItem}>
              <div className={styles.iconCircle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className={styles.itemText}>
                <span className={styles.itemLabel}>Campus Location</span>
                <p className={styles.itemValue}>
                  Amity University, Sector-125, Noida, Expressway, Uttar Pradesh, 201313
                </p>
              </div>
            </div>

            <div className={styles.detailItem}>
              <div className={styles.iconCircle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className={styles.itemText}>
                <span className={styles.itemLabel}>Conference Dates</span>
                <p className={styles.itemValue}>15th – 17th January 2027 (Hybrid Mode)</p>
              </div>
            </div>

            <div className={styles.detailItem}>
              <div className={styles.iconCircle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className={styles.itemText}>
                <span className={styles.itemLabel}>Accessibility & Transit</span>
                <p className={styles.itemValue}>
                  Direct metro connectivity via Botanical Garden / Okhla Bird Sanctuary (Magenta/Blue Line).
                </p>
              </div>
            </div>

            <div className={styles.buttonGroup}>
              <a
                href="https://maps.app.goo.gl/GJvrAxbsEGKp8TkHA"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapBtn}
              >
                <span>Open in Google Maps</span>
                <span className={styles.btnArrow} aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Right Map Embed Card */}
          <div className={styles.mapCard}>
            <div className={styles.mapContainer}>
              <iframe
                title="Amity University Noida Location Map"
                src="https://maps.google.com/maps?q=Amity+University+Noida+Sector+125&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.mapIframe}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
