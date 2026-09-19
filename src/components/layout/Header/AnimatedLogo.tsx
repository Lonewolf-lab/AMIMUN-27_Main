"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./AnimatedLogo.module.css";

interface AnimatedLogoProps {
  color?: string;
  isInitialLoad?: boolean;
  baseDelay?: number; // seconds
  interactive?: boolean;
  size?: number;
  className?: string;
}

export function AnimatedLogo({
  color = "currentColor",
  isInitialLoad = false,
  baseDelay = 0,
  interactive = true,
  size = 37,
  className = "",
}: AnimatedLogoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(isInitialLoad);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isInitialLoad) {
      setIsAnimating(true);
      const totalAnimationTime = (baseDelay + 1.25) * 1000;
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, totalAnimationTime);
      return () => clearTimeout(timer);
    }
  }, [isInitialLoad, baseDelay]);

  const handleMouseEnter = () => {
    if (!interactive || isAnimating) return;
    setIsHovered(true);
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    // Expand back after collapsing
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 450);
  };

  const cssVars = {
    "--delay-0": `${baseDelay}s`,
    "--delay-1": `${baseDelay + 0.25}s`,
    "--delay-2": `${baseDelay + 0.5}s`,
    "--delay-3": `${baseDelay + 0.5}s`,
    "--delay-4": `${baseDelay + 0.75}s`,
    "--delay-5": `${baseDelay + 0.75}s`,
    "--delay-6": `${baseDelay + 1.0}s`,
  } as React.CSSProperties;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      style={cssVars}
      className={`${styles.svgLogo} ${isAnimating ? styles.animating : ""} ${
        isHovered ? styles.hovering : ""
      } ${className}`}
      onMouseEnter={handleMouseEnter}
      aria-label="Haven Constructions Logo"
    >
      {/* Piece 0: Top-left square */}
      <rect
        y="0"
        width={12}
        height={12}
        fill={color}
        className={`${styles.piece} ${styles.piece0}`}
      />

      {/* Piece 2: Top-right square */}
      <rect
        x="24"
        width={12}
        height={12}
        fill={color}
        className={`${styles.piece} ${styles.piece2}`}
      />

      {/* Piece 1: Upper center wedge */}
      <path
        d="M 24 12 H 11.65 V 24.35 Z"
        fill={color}
        className={`${styles.piece} ${styles.piece1}`}
      />

      {/* Piece 3: Middle-left wedge */}
      <path
        d="M 0 24 H 12 V 12 Z"
        fill={color}
        className={`${styles.piece} ${styles.piece3}`}
      />

      {/* Piece 4: Middle-right wedge */}
      <path
        d="M 24 24 H 36 V 12 Z"
        fill={color}
        className={`${styles.piece} ${styles.piece4}`}
      />

      {/* Piece 5: Bottom-left square */}
      <rect
        y="23.65"
        width={12.35}
        height={12.35}
        fill={color}
        className={`${styles.piece} ${styles.piece5}`}
      />

      {/* Piece 6: Bottom-right square */}
      <rect
        x="24"
        y="23.65"
        width={12}
        height={12.35}
        fill={color}
        className={`${styles.piece} ${styles.piece6}`}
      />
    </svg>
  );
}
