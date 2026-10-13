"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { AMIMUNLogo } from "@/components/logo/AMIMUNLogo";
import styles from "./Preloader.module.css";

const LOGO_SIZE = 320;
const RING_TEXT = "AMIMUN'27";

/**
 * Ring config — direction: 1 = CW, -1 = CCW
 * Each ring is progressively larger with bigger text.
 */
const RING_CONFIGS = [
  { radius: 195, fontSize: 16, direction: 1 },
  { radius: 260, fontSize: 24, direction: -1 },
  { radius: 340, fontSize: 34, direction: 1 },
  { radius: 430, fontSize: 48, direction: -1 },
  { radius: 535, fontSize: 66, direction: 1 },
  { radius: 650, fontSize: 88, direction: -1 },
  { radius: 780, fontSize: 114, direction: 1 },
];

/**
 * Calculate how many times to repeat the text so it fills
 * the FULL circumference of the circle (no gaps).
 */
function calcTextRepeats(radius: number, fontSize: number): number {
  const circumference = 2 * Math.PI * radius;
  // Approximate width per character (uppercase + letter-spacing)
  const charWidth = fontSize * 0.68;
  const singleRepWidth = (RING_TEXT.length + 1) * charWidth;
  return Math.max(3, Math.round(circumference / singleRepWidth));
}

type Stage = "dark" | "ignite" | "rings-enter" | "hold" | "exit" | "done";

export function Preloader() {
  const [stage, setStage] = useState<Stage>("dark");

  const handleExit = useCallback(() => {
    setStage("done");
    if (typeof window !== "undefined" && typeof (window as any).lenis?.start === "function") {
      (window as any).lenis.start();
    }
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setStage("ignite"), 400);
    const t2 = setTimeout(() => setStage("rings-enter"), 2200);
    const t3 = setTimeout(() => setStage("hold"), 3800);
    const t4 = setTimeout(() => setStage("exit"), 4600);
    const t5 = setTimeout(() => handleExit(), 5400);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, [handleExit]);

  // Precompute ring data
  const rings = useMemo(() =>
    RING_CONFIGS.map((cfg, i) => {
      const repeats = calcTextRepeats(cfg.radius, cfg.fontSize);
      const text = Array.from({ length: repeats }, () => `${RING_TEXT} `).join("");
      const circumference = 2 * Math.PI * cfg.radius;
      const svgSize = cfg.radius * 2 + Math.max(120, Math.round(cfg.fontSize * 2.2));
      return { ...cfg, text, circumference, svgSize, index: i };
    }),
  []);

  if (stage === "done") return null;

  const isIgnited = stage !== "dark";
  const ringsIn = stage === "rings-enter" || stage === "hold" || stage === "exit";
  const isExiting = stage === "exit";

  return (
    <div
      className={`${styles.preloader} ${isExiting ? styles.preloaderExit : ""}`}
      aria-hidden="true"
    >
      {/* Radial light burst behind logo */}
      <div className={`${styles.lightBurst} ${isIgnited ? styles.lightBurstActive : ""}`} />

      {/* Scan-line energy sweep */}
      <div className={`${styles.energySweep} ${isIgnited ? styles.energySweepActive : ""}`} />

      {/* Logo — stays at constant size, fully assembled after Phase 1 */}
      <div className={`${styles.logoWrap} ${isIgnited ? styles.logoLit : ""}`}>
        <AMIMUNLogo size={LOGO_SIZE} animate={isIgnited} startDelay={200} />
      </div>

      {/* Concentric spinning text rings */}
      <div className={styles.ringsContainer}>
        {rings.map(({ radius, fontSize, direction, text, circumference, svgSize, index }) => {
          const pathId = `ring-path-${index}`;
          // Entrance delay: stagger each ring
          const entranceDelay = `${index * 110}ms`;
          // Continuous rotation speed: outer rings slower
          const spinDuration = `${30 + index * 10}s`;

          return (
            <div
              key={index}
              className={`${styles.ringScaler} ${ringsIn ? styles.ringScalerIn : ""}`}
              style={{
                width: svgSize,
                height: svgSize,
                animationDelay: entranceDelay,
              }}
            >
              {/* GPU hardware-accelerated continuous spin */}
              <div
                className={direction > 0 ? styles.ringSpinCW : styles.ringSpinCCW}
                style={{ animationDuration: spinDuration }}
              >
                <svg
                  className={styles.ringSvg}
                  viewBox={`0 0 ${svgSize} ${svgSize}`}
                  overflow="visible"
                >
                  <defs>
                    <path
                      id={pathId}
                      d={`M ${svgSize / 2}, ${svgSize / 2} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
                      fill="none"
                    />
                  </defs>
                  <text
                    className={index % 2 === 0 ? styles.ringTextSans : styles.ringTextSerif}
                    fill={index % 2 === 0 ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.48)"}
                    fontSize={fontSize}
                  >
                    <textPath
                      href={`#${pathId}`}
                      startOffset="0%"
                      textLength={circumference}
                      lengthAdjust="spacing"
                    >
                      {text}
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          );
        })}
      </div>

      {/* Corner accent lines */}
      <div className={`${styles.cornerAccent} ${styles.cornerTL} ${isIgnited ? styles.cornerVisible : ""}`} />
      <div className={`${styles.cornerAccent} ${styles.cornerTR} ${isIgnited ? styles.cornerVisible : ""}`} />
      <div className={`${styles.cornerAccent} ${styles.cornerBL} ${isIgnited ? styles.cornerVisible : ""}`} />
      <div className={`${styles.cornerAccent} ${styles.cornerBR} ${isIgnited ? styles.cornerVisible : ""}`} />
    </div>
  );
}
