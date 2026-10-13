"use client";

import { useEffect, useId, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { TextReveal } from "@/components/animations/TextReveal";
import { useMagnetic } from "@/components/animations/useMagnetic";
import { HeroOrbits } from "./HeroOrbits";
import styles from "./Hero.module.css";

const Globe = dynamic(() => import("@/components/ui/globe"), { ssr: false });

/**
 * AMIMUN'27 wordmark. The SVG viewBox is sized to the text's measured width
 * (after the font loads) instead of forcing it with textLength, which Safari
 * ignores and which clipped the "27".
 */
function Wordmark({ fill, gradient = false }: { fill: string; gradient?: boolean }) {
  const textRef = useRef<SVGTextElement | null>(null);
  const [viewBox, setViewBox] = useState("0 0 1414 260");
  const gradientId = useId();

  useEffect(() => {
    let cancelled = false;
    const fit = () => {
      const text = textRef.current;
      if (!text || cancelled) return;
      const box = text.getBBox();
      if (box.width > 0) setViewBox(`${box.x - 6} 0 ${box.width + 12} 260`);
    };
    fit();
    document.fonts?.ready.then(fit);
    return () => {
      cancelled = true;
    };
  }, []);

  const paint = gradient ? `url(#${gradientId})` : fill;

  return (
    <svg
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.logoSvg}
      aria-label="AMIMUN'27"
    >
      {gradient && (
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#071f55" />
            <stop offset="45%" stopColor="#0c388d" />
            <stop offset="80%" stopColor="#2c63d6" />
            <stop offset="100%" stopColor="#0a97d9" />
          </linearGradient>
        </defs>
      )}
      <text
        ref={textRef}
        x="0"
        y="230"
        fill={paint}
        stroke={paint}
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
}

export function Hero() {
  const [lettersRising, setLettersRising] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [subheadingRevealed, setSubheadingRevealed] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const videoSectionRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const registerRef = useMagnetic<HTMLAnchorElement>(0.35);
  const committeesRef = useMagnetic<HTMLAnchorElement>(0.25);

  // Pointer parallax: writes --px / --py (-0.5..0.5) on the hero, no re-renders.
  useEffect(() => {
    const el = heroRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce), (hover: none)").matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--px", (e.clientX / window.innerWidth - 0.5).toFixed(3));
        el.style.setProperty("--py", (e.clientY / window.innerHeight - 0.5).toFixed(3));
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

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
    <section ref={heroRef} className={`${styles.hero} ${isRevealed ? styles.heroRevealed : ""}`}>
      {/* 3D stage: draggable globe + orbiting committee rings */}
      <div className={styles.stage} aria-hidden="true">
        <div className={styles.stageInner}>
          <div className={styles.globeLayer}>
            <Globe />
          </div>
          <HeroOrbits />
        </div>
      </div>

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
            <Wordmark fill="#ffffff" />
          </div>
          <div className={styles.subheading} style={{ visibility: "hidden" }}>
            <span>15-17 JANUARY 2027</span>
          </div>
        </div>
      </div>

      {/* Sticky Main Hero Content & Wordmark */}
      <div className={styles.contentGrid}>
        <div className={styles.topSpacing}>
          <div className={styles.intro}>
            <p className={styles.themeSubheading}>
              <TextReveal as="span" baseDelay={300}>
                Sapientia Ad Actionem
              </TextReveal>
            </p>
            <p className={`${styles.tagline} ${subheadingRevealed ? styles.subheadingRevealed : ""}`}>
              Where diplomacy, dialogue, and discipline meet to shape tomorrow&apos;s global leaders.
            </p>
            <div className={`${styles.actions} ${subheadingRevealed ? styles.subheadingRevealed : ""}`}>
              <a ref={registerRef} href="#register" className={styles.primary}>
                Register
                <span aria-hidden="true">&rarr;</span>
              </a>
              <Link ref={committeesRef} href="/committees" className={styles.secondary}>
                View committees
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`${styles.logoWrapper} ${
            lettersRising ? styles.lettersRising : ""
          }`}
        >
          <Wordmark fill="#0c388d" />
        </div>

        <div
          className={`${styles.subheading} ${
            subheadingRevealed ? styles.subheadingRevealed : ""
          }`}
        >
          <span>15-17 JANUARY 2027</span>
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
              <video
                src="/videos/Amimun'27%20Teaser.mp4"
                poster="/videos/amity-photo.jpg"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className={styles.heroVideo}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
