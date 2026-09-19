"use client";

import { useEffect, useRef, useState, type ElementType } from "react";
import styles from "./TextReveal.module.css";

export type TextRevealTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

export interface TextRevealProps {
  children: string;
  as?: TextRevealTag;
  className?: string;
  baseDelay?: number;
  id?: string;
  style?: React.CSSProperties;
}

export function TextReveal({
  children,
  as: Component = "div",
  className = "",
  baseDelay = 0,
  id,
  style,
}: TextRevealProps) {

  const containerRef = useRef<HTMLElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Immediate activation if reduced motion is requested
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsActive(true);
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsActive(true);
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const words = typeof children === "string" ? children.trim().split(/\s+/) : [];

  const Tag = Component as ElementType;

  return (
    <Tag
      ref={containerRef}
      id={id}
      style={style}
      className={`${styles.revealContainer} ${isActive ? styles.active : ""} ${className}`.trim()}
    >

      {words.map((word, index) => (
        <span key={`${word}-${index}`} className={styles.wordParent}>
          <span
            className={styles.wordChild}
            style={{
              transitionDelay: `${baseDelay + index * 20}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
