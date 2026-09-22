"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Countdown } from "@/components/home/Countdown/Countdown";
import styles from "./ScrollGallery.module.css";

const CHRONICLES_IMAGES = [
  {
    url: "/chronicles/opening-ceremony.JPG",
    alt: "AMIMUN Opening Ceremony & Keynote Address",
  },
  {
    url: "/chronicles/delegates-discussion.JPG",
    alt: "Delegates engaging in committee debate and diplomacy",
  },
  {
    url: "/chronicles/team-building.JPG",
    alt: "AMIMUN delegates collaborating on resolutions",
  },
  {
    url: "/chronicles/award.JPG",
    alt: "Valedictory & Awards Ceremony",
  },
];

export function ScrollGallery() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = Math.max(0, Math.min(1, currentScroll / totalScrollable));
      setProgress(rawProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate dynamic scale and clip values
  const scale = 0.2 + progress * 0.8;
  const clipY = Math.max(0, (1 - progress) * 64);
  const clipX = Math.max(0, (1 - progress) * 240);

  // Active image index
  const activeIndex = Math.min(
    CHRONICLES_IMAGES.length - 1,
    Math.floor(progress * CHRONICLES_IMAGES.length)
  );

  // Offsets for periphery text
  const offsetTop = (1 - progress) * 80;
  const offsetRight = -(1 - progress) * 80;
  const offsetBottom = -(1 - progress) * 80;
  const offsetLeft = (1 - progress) * 80;

  return (
    <section ref={containerRef} className={styles.scrollGallery}>
      <div className={styles.spacer}>
        <div className={styles.inner}>
          {/* Periphery Typography Overlay */}
          <div className={styles.textContainer}>
            <div className={styles.textGrid}>
              <div
                className={`${styles.textItem} ${styles.textTop}`}
                style={{ transform: `translateY(${offsetTop}px)` }}
              >
                <p>16TH EDITION</p>
              </div>

              <div
                className={`${styles.textItem} ${styles.textRight}`}
                style={{ transform: `translateX(${offsetRight}px)` }}
              >
                <p>Sapientia Ad Actionem</p>
              </div>

              <div
                className={`${styles.textItem} ${styles.textBottom}`}
                style={{ transform: `translateY(${offsetBottom}px)` }}
              >
                <p>AMITY UNIVERSITY, NOIDA</p>
              </div>

              <div
                className={`${styles.textItem} ${styles.textLeft}`}
                style={{ transform: `translateX(${offsetLeft}px)` }}
              >
                <p>AMIMUN 2027</p>
              </div>
            </div>
          </div>

          {/* Central Zooming Image Stack */}
          <div
            className={styles.imagesContainer}
            style={{
              transform: `scale(${scale})`,
              clipPath: `inset(${clipY}px ${clipX}px)`,
            }}
          >
            {CHRONICLES_IMAGES.map((img, idx) => (
              <div
                key={img.url}
                className={`${styles.imgItem} ${
                  idx === activeIndex ? styles.imgItemActive : ""
                }`}
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1400px) 80vw, 1200px"
                  className={styles.image}
                  priority={idx === 0}
                />
              </div>
            ))}
          </div>

          <Countdown scrollProgress={progress} />
        </div>
      </div>
    </section>
  );
}
