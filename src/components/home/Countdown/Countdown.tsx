"use client";

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { gsap } from "gsap";
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

function RollingValue({ value, visible }: { value: number | null; visible: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const previous = useRef<number | null>(null);
  const formatted = value === null ? "—" : String(value).padStart(2, "0");

  useLayoutEffect(() => {
    const strip = ref.current;
    if (!strip) return;
    const from = previous.current;
    previous.current = value;
    const rows = strip.children;
    rows[0].textContent = from === null ? formatted : String(from).padStart(2, "0");
    rows[1].textContent = formatted;
    // First render and resumed tabs show the real time immediately, without a spin.
    const sequential = value !== null && from !== null && (from - value === 1 || (from === 0 && (value === 59 || value === 23)));
    if (!visible || !sequential || document.hidden || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(rows[0], { yPercent: 0, opacity: 0 });
      gsap.set(rows[1], { yPercent: 0, opacity: 1 });
      return;
    }
    const timeline = gsap.timeline();
    timeline.fromTo(rows[0], { yPercent: 0, opacity: 1 }, { yPercent: -25, opacity: 0, duration: 0.2, ease: "power2.in" }, 0);
    timeline.fromTo(rows[1], { yPercent: 25, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.45, ease: "power2.out" }, 0.18);
    return () => { timeline.kill(); };
  }, [value, visible, formatted]);

  return <span className={styles.numberWindow} aria-hidden="true"><span ref={ref} className={styles.numberStrip}><span>{formatted}</span><span>{formatted}</span></span></span>;
}

interface CountdownProps {
  scrollProgress: number;
}

export function Countdown({ scrollProgress }: CountdownProps) {
  const timerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!timerRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    observer.observe(timerRef.current);
    return () => observer.disconnect();
  }, []);
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
              AMIMUN&apos;27 STARTS IN
            </TextReveal>
          </h2>
          <p>15—17 JAN 2027</p>
        </div>

        <div ref={timerRef} data-countdown className={styles.timer} role="timer" aria-live="off" aria-label="Time until AMIMUN'27 starts">
          {UNITS.map(({ key, label }) => (
            <div data-countdown-unit className={styles.unit} key={key}>
              <span className={styles.value} aria-label={timeRemaining ? String(timeRemaining[key]) : "Loading"}>
                <RollingValue value={timeRemaining?.[key] ?? null} visible={visible} />
              </span>
              <span className={styles.label}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
