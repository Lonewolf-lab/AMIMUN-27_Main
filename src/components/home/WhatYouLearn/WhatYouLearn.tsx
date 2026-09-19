"use client";

import { useEffect, useRef } from "react";
import styles from "./WhatYouLearn.module.css";

const ITEMS = [
  {
    number: "01",
    title: "Diplomacy Under Pressure",
    body: "Navigate real-world geopolitical tensions across 14 dynamic committees. Learn to hold a position, build alliances, and find consensus when stakes are high.",
  },
  {
    number: "02",
    title: "The Art of Negotiation",
    body: "Every clause of a resolution is a negotiation. Understand how language shapes outcomes, how compromise is engineered, and how competing interests are reconciled.",
  },
  {
    number: "03",
    title: "Research & Policy Crafting",
    body: "Move from raw information to actionable policy. Frame complex global challenges through the lens of the UN Sustainable Development Goals.",
  },
  {
    number: "04",
    title: "Public Speaking & Debate",
    body: "Speak to a room, hold the floor, and defend your position. AMIMUN sharpens the ability to articulate ideas clearly, persuasively, and under time pressure.",
  },
  {
    number: "05",
    title: "Cross-Cultural Collaboration",
    body: "Work alongside delegates from across the country and beyond. Build empathy, adapt communication styles, and discover how diverse perspectives sharpen solutions.",
  },
  {
    number: "06",
    title: "Leadership & Responsibility",
    body: "Step into the role of a world leader. Own your decisions, rally your bloc, and learn that true leadership means turning wisdom into purposeful action.",
  },
];

export function WhatYouLearn() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.18 }
    );

    rowRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>At AMIMUN&apos;27</p>
        <h2 className={styles.heading}>What you&rsquo;ll learn</h2>
      </div>

      <div className={styles.list}>
        {ITEMS.map((item, i) => (
          <div
            key={item.number}
            ref={(el) => { rowRefs.current[i] = el; }}
            className={`${styles.row} ${i % 2 === 0 ? styles.fromLeft : styles.fromRight}`}
          >
            <span className={styles.number}>{item.number}</span>
            <div className={styles.divider} />
            <div className={styles.content}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.body}>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
