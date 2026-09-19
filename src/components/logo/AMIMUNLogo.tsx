"use client";

import { useEffect, useState } from "react";
import styles from "./AMIMUNLogo.module.css";

interface AMIMUNLogoProps {
  size?: number;
  className?: string;
  /** Run the staggered layer-by-layer assembly */
  animate?: boolean;
  /** Extra delay in ms before the first layer appears */
  startDelay?: number;
}

/**
 * Layer order per README-layer-order.svg:
 * 01-background → 02-globe → 04-swoosh → 03-dove → 05-top-text → 06-bottom-text → 07-border
 *
 * 08-complete-logo is the finished flat image, used as a static fallback in the header.
 */
const LAYER_FILES = [
  "/logo-layers/01-background.svg",
  "/logo-layers/02-globe-countries.svg",
  "/logo-layers/04-swoosh-india.svg",
  "/logo-layers/03-dove.svg",
  "/logo-layers/05-top-text.svg",
  "/logo-layers/06-bottom-text.svg",
  "/logo-layers/07-final-border.svg",
];

const LAYER_NAMES = [
  "background",
  "globe",
  "swoosh",
  "dove",
  "top-text",
  "bottom-text",
  "border",
];

/**
 * Animation personalities per layer:
 *   background  — scale bloom from centre
 *   globe       — fade + rise
 *   swoosh      — fly in from the right (swoosh motion)
 *   dove        — fly in from top-left (dove in flight)
 *   top-text    — rise up from below the wordmark
 *   bottom-text — rise up from further below
 *   border      — scale in like a ring closing
 */
const LAYER_ANIMATIONS = [
  styles.animBgBloom,
  styles.animFadeRise,
  styles.animFlyRight,
  styles.animFlyDove,
  styles.animRiseText,
  styles.animRiseTextFar,
  styles.animBorderClose,
];

/** Stagger between layers in ms */
const STAGGER_MS = 340;

export function AMIMUNLogo({
  size = 200,
  className = "",
  animate = false,
  startDelay = 0,
}: AMIMUNLogoProps) {
  const total = LAYER_FILES.length;
  const [visibleCount, setVisibleCount] = useState(animate ? 0 : total);

  useEffect(() => {
    if (!animate) {
      setVisibleCount(total);
      return;
    }
    setVisibleCount(0);
    const timers: ReturnType<typeof setTimeout>[] = [];

    LAYER_FILES.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleCount((c) => Math.max(c, i + 1));
        }, startDelay + i * STAGGER_MS)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [animate, startDelay, total]);

  return (
    <div
      className={`${styles.logoStack} ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="AMIMUN 2027 Logo"
    >
      {LAYER_FILES.map((src, i) => (
        <img
          key={LAYER_NAMES[i]}
          src={src}
          alt=""
          aria-hidden="true"
          className={`${styles.layer} ${LAYER_ANIMATIONS[i]} ${
            i < visibleCount ? styles.layerVisible : ""
          }`}
          draggable={false}
        />
      ))}
    </div>
  );
}

/**
 * Static complete logo — single flat image, no animation.
 * Used in the header where a crisp resolved image is preferred.
 */
export function AMIMUNLogoStatic({
  size = 34,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <img
      src="/amimun-logo.png"
      alt="AMIMUN 2027 Logo"
      width={size}
      height={size}
      className={className}
      draggable={false}
      style={{ display: "block", objectFit: "contain" }}
    />
  );
}
