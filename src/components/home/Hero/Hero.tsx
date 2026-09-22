"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TextReveal } from "@/components/animations/TextReveal";
import styles from "./Hero.module.css";

const AMIMUN_WORDMARK_SVG = (fillColor: string) => (
  <svg
    viewBox="0 0 1414 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.logoSvg}
    aria-label="AMIMUN'27"
  >
    <text
      x="0"
      y="230"
      textLength="1414"
      lengthAdjust="spacingAndGlyphs"
      fill={fillColor}
      stroke={fillColor}
      strokeWidth="8"
      strokeLinejoin="round"
      fontSize="300"
      fontWeight="900"
      fontFamily="var(--font-suisse-intl), system-ui, sans-serif"
    >
      AMIMUN&apos;27
    </text>
  </svg>
);

export function Hero() {
  const [lettersRising, setLettersRising] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [subheadingRevealed, setSubheadingRevealed] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const videoSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lettersTimer = setTimeout(() => setLettersRising(true), 900);
    const wipeTimer = setTimeout(() => setIsRevealed(true), 1250);
    const subheadingTimer = setTimeout(() => setSubheadingRevealed(true), 1500);

    return () => {
      clearTimeout(lettersTimer);
      clearTimeout(wipeTimer);
      clearTimeout(subheadingTimer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoSectionRef.current) return;
      const rect = videoSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      const progress = Math.max(
        0,
        Math.min(1, -rect.top / totalScrollable)
      );
      setVideoProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scale: starts at ~78% (0.78) and expands smoothly to 1.0 (full screen)
  const scale = 0.78 + videoProgress * 0.22;

  // Inset crop: subtle rounded framing when at 78%, smoothly opening to full edge-to-edge
  const sideInset = Math.max(0, (1 - videoProgress) * 6); // 6% -> 0%
  const verticalInset = Math.max(0, (1 - videoProgress) * 4); // 4% -> 0%
  const borderRadius = Math.max(0, (1 - videoProgress) * 16); // 16px -> 0px
  const clipPathStyle = `inset(${verticalInset}% ${sideInset}% ${verticalInset}% ${sideInset}% round ${borderRadius}px)`;

  return (
    <section className={`${styles.hero} ${isRevealed ? styles.heroRevealed : ""}`}>
      {/* Signature Blue Transition Overlay */}
      <div
        className={`${styles.overlay} ${isRevealed ? styles.overlayRevealed : ""}`}
        aria-hidden="true"
      >
        <div className={styles.contentGrid}>
          <div className={styles.overlayTopSpacing}>
            <p className={styles.themeSubheading} style={{ opacity: 0 }}>
              Sapientia Ad Actionem
            </p>
          </div>
          <div
            className={`${styles.overlayLogo} ${
              lettersRising ? styles.lettersRising : ""
            }`}
          >
            {AMIMUN_WORDMARK_SVG("#ffffff")}
          </div>
          <p className={styles.taglineCentered} style={{ opacity: 0 }}>
            Where diplomacy, dialogue, and discipline meet to shape tomorrow&apos;s global leaders.
          </p>
        </div>
      </div>

      {/* Sticky Main Hero Content & Wordmark */}
      <div className={styles.contentGrid}>
        <div className={styles.topSpacing}>
          <p className={styles.themeSubheading}>
            <TextReveal as="span" baseDelay={300}>
              Sapientia Ad Actionem
            </TextReveal>
          </p>
        </div>

        <div
          className={`${styles.logoWrapper} ${
            lettersRising ? styles.lettersRising : ""
          }`}
        >
          {AMIMUN_WORDMARK_SVG("#0c388d")}
        </div>

        <p
          className={`${styles.taglineCentered} ${
            subheadingRevealed ? styles.subheadingRevealed : ""
          }`}
        >
          Where diplomacy, dialogue, and discipline meet to shape tomorrow&apos;s global leaders.
        </p>

        <div
          className={`${styles.subheading} ${
            subheadingRevealed ? styles.subheadingRevealed : ""
          }`}
        >
          <span>15&ndash;17 JANUARY 2027</span>
          <span>AMITY UNIVERSITY, NOIDA</span>
        </div>
      </div>

      {/* Video Container - Starts at half the size (scale: 0.5, cropped) and expands smoothly to 100% full screen on scroll */}
      <div ref={videoSectionRef} className={styles.videoSection}>
        <div className={styles.videoStickyContainer}>
          <div
            className={styles.videoCard}
            style={{
              transform: `scale(${scale})`,
              clipPath: clipPathStyle,
              WebkitClipPath: clipPathStyle,
            }}
          >
            <figure className={styles.mediaFigure}>
              <Image
                src="/videos/amity-photo.jpg?v=20260922"
                alt="Amity University campus"
                fill
                sizes="100vw"
                className={styles.heroVideo}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
