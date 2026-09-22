"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { TextReveal } from "@/components/animations/TextReveal";
import styles from "./Countdown.module.css";

const CONFERENCE_START = Date.UTC(2027, 0, 15);

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
] as const;

function getTimeRemaining() {
  const difference = Math.max(0, CONFERENCE_START - Date.now());

  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

interface CountdownProps {
  scrollProgress: number;
}

export function Countdown({ scrollProgress }: CountdownProps) {
  const [timeRemaining, setTimeRemaining] = useState<ReturnType<typeof getTimeRemaining> | null>(null);

  useEffect(() => {
    const updateTime = () => setTimeRemaining(getTimeRemaining());
    updateTime();

    const interval = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      className={styles.section}
      style={{ "--countdown-progress": scrollProgress } as CSSProperties}
      aria-labelledby="countdown-heading"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 id="countdown-heading">
            <TextReveal as="span" baseDelay={100}>
              AMIMUN&apos;27 STARTS IN:
            </TextReveal>
          </h2>
          <p>January 15–17, 2027</p>
        </div>

        <div className={styles.timer} aria-live="polite" aria-label="Time until AMIMUN'27 starts">
          {UNITS.map(({ key, label }) => (
            <div className={styles.unit} key={key}>
              <span className={styles.value}>
                {timeRemaining ? (key === "days" ? timeRemaining[key] : String(timeRemaining[key]).padStart(2, "0")) : "00"}
              </span>
              <span className={styles.label}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
