"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { GUIDING_LIGHT_DATA } from "@/content/guiding-light";

const PROMINENT_CATEGORY_IDS = [
  "patron-in-chief",
  "chief-patron",
  "patrons",
  "co-patron",
];

export default function GuidingLightPage() {
  const [activeTab, setActiveTab] = useState(GUIDING_LIGHT_DATA[0].id);

  const activeCategory =
    GUIDING_LIGHT_DATA.find((cat) => cat.id === activeTab) ||
    GUIDING_LIGHT_DATA[0];

  const isProminentCategory = PROMINENT_CATEGORY_IDS.includes(activeTab);

  const getInitials = (name: string) => {
    return name
      .replace(/^(Dr\.|Prof\.|Mr\.|Ms\.|Mrs\.)\s*/i, "")
      .replace(/\(.*?\)/g, "")
      .trim()
      .split(/\s+/)
      .map((part) => part[0])
      .slice(0, 2)
      .join("");
  };

  return (
    <div className={styles.pageContainer}>
      {/* Refined Hero Header */}
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <span className={styles.heroTag}>AMIMUN&apos;27</span>
          <h1 className={styles.title}>Our Guiding Light</h1>
          <p className={styles.heroSubtitle}>
            Distinguished leaders, academic luminaries, and university patrons guiding the conference toward global excellence.
          </p>
        </div>
      </section>

      {/* Main Layout: Left Vertical Panel + Right Grid */}
      <div className={styles.layoutWrapper}>
        <aside className={styles.sidebarNav} aria-label="Designations">
          {GUIDING_LIGHT_DATA.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`${styles.navButton} ${
                  isActive ? styles.navButtonActive : ""
                }`}
              >
                <span>{cat.label}</span>
                <span style={{ opacity: isActive ? 1 : 0.35 }}>→</span>
              </button>
            );
          })}
        </aside>

        <main className={styles.gridSection}>
          <div className={styles.cardGrid}>
            {activeCategory.members.map((member, idx) => (
              <article
                key={idx}
                className={`${styles.card} ${
                  isProminentCategory ? styles.cardProminent : ""
                }`}
              >
                <div
                  className={`${styles.imageWrapper} ${
                    isProminentCategory ? styles.imageWrapperProminent : ""
                  }`}
                >
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes={
                        isProminentCategory
                          ? "(max-width: 768px) 100vw, 350px"
                          : "(max-width: 768px) 100vw, 280px"
                      }
                      className={styles.memberPhoto}
                    />
                  ) : (
                    <div className={styles.portraitPlaceholder}>
                      <span className={styles.monogram}>
                        {getInitials(member.name)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Downward flap dropdown on hover */}
                <div className={styles.cardFlap}>
                  <div className={styles.flapInner}>
                    <div className={styles.flapContent}>
                      <h3 className={styles.memberName}>{member.name}</h3>
                      <p className={styles.memberRole}>{member.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
