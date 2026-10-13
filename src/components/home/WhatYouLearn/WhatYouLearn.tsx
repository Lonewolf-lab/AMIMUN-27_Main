"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./WhatYouLearn.module.css";

const ITEMS = [
  {
    number: "01",
    tag: "High Stakes & Strategy",
    title: "Diplomacy Under Pressure",
    body: "Navigate real-world geopolitical tensions across 14 dynamic committees. Learn to hold a position, build cross-regional alliances, and forge consensus when stakes are highest.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    number: "02",
    tag: "Strategic Consensus",
    title: "The Art of Negotiation",
    body: "Every clause of a resolution is a masterclass in negotiation. Understand how precise phrasing shapes global outcomes, compromises are engineered, and competing national interests are reconciled.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
      </svg>
    ),
  },
  {
    number: "03",
    tag: "UN SDG Frameworks",
    title: "Research & Policy Crafting",
    body: "Transform raw multilateral information into actionable, enforceable treaties. Frame complex international crises through the lens of United Nations Sustainable Development Goals.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    number: "04",
    tag: "Oratory Excellence",
    title: "Public Speaking & Debate",
    body: "Hold the floor with commanding poise. AMIMUN sharpens your instinctive ability to articulate nuanced ideas clearly, persuasively, and with impact under rigorous time constraints.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    number: "05",
    tag: "Multilateral Empathy",
    title: "Cross-Cultural Collaboration",
    body: "Deliberate alongside delegates representing diverse nations and institutions worldwide. Cultivate deep diplomatic empathy, adapt communication styles, and discover universal solutions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: "06",
    tag: "Wisdom to Action",
    title: "Leadership & Responsibility",
    body: "Step boldly into the shoes of global heads of state. Command your voting bloc, navigate multilateral accountability, and internalize that leadership turns wisdom into decisive action.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export function WhatYouLearn() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mousePos, setMousePos] = useState<{ [key: number]: { x: number; y: number } }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos((prev) => ({
      ...prev,
      [index]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    }));
  };

  return (
    <section className={styles.section}>
      {/* Subtle background luxury accent */}
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badgeDot} />
            <span className={styles.eyebrow}>Transformational Outcomes</span>
          </div>
          <div className={styles.titleRow}>
            <h2 className={styles.heading}>What You&rsquo;ll Master</h2>
            <p className={styles.headerSubtitle}>
              Experience the comprehensive skill architecture engineered through 16 editions of AMIMUN.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {ITEMS.map((item, i) => {
            const pos = mousePos[i] || { x: 150, y: 150 };

            return (
              <div
                key={item.number}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={styles.card}
                style={{ "--index": i } as React.CSSProperties}
                onMouseMove={(e) => handleMouseMove(e, i)}
              >
                {/* Dynamic cursor spot glow */}
                <div
                  className={styles.cardGlow}
                  style={{
                    left: `${pos.x}px`,
                    top: `${pos.y}px`,
                  }}
                  aria-hidden="true"
                />

                <div className={styles.cardContent}>
                  <div className={styles.cardTop}>
                    <div className={styles.iconWrapper}>
                      {item.icon}
                    </div>
                    <div className={styles.tagWrapper}>
                      <span className={styles.numberBadge}>{item.number}</span>
                      <span className={styles.tagText}>{item.tag}</span>
                    </div>
                  </div>

                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.body}>{item.body}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.exploreText}>Core Competency</span>
                    <span className={styles.exploreArrow} aria-hidden="true">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
