"use client";

import { useEffect, useRef, useState } from "react";
import { TextReveal } from "@/components/animations/TextReveal";
import { WHY_AMIMUN_DATA } from "@/content/why-amimun";
import styles from "./page.module.css";

export default function WhyAmimunPage() {
  const [activePillar, setActivePillar] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const pillarRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      pillarRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.2) {
          setActivePillar(idx);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>
            <span className={styles.heroDot} />
            <span>{WHY_AMIMUN_DATA.hero.tag}</span>
          </div>

          <h1 className={styles.titleMain}>
            <TextReveal as="span" baseDelay={100}>
              {WHY_AMIMUN_DATA.hero.title}
            </TextReveal>
          </h1>

          <div className={styles.heroGrid}>
            <p className={styles.heroSubtitle}>
              {WHY_AMIMUN_DATA.hero.subtitle}
            </p>

            <blockquote className={styles.quoteCard}>
              <p className={styles.quoteText}>
                &ldquo;{WHY_AMIMUN_DATA.hero.quote}&rdquo;
              </p>
              <cite className={styles.quoteAuthor}>
                — {WHY_AMIMUN_DATA.hero.author}
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Impact Stats Milestone Grid */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {WHY_AMIMUN_DATA.stats.map((stat, i) => (
            <div key={i} className={styles.statCard}>
              <span className={styles.statNumber}>{stat.value}</span>
              <h3 className={styles.statLabel}>{stat.label}</h3>
              <p className={styles.statSub}>{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky Left Indicator + Overlapping Parallax Pillar Cards */}
      <section className={styles.pillarsSection} id="why-amimun">
        <div className={styles.stickyLeft}>
          <span className={styles.sectionLabel}>Key Pillars</span>
          <h2 className={styles.sectionTitle}>
            Why Choose AMIMUN 2027
          </h2>
          <p className={styles.sectionDesc}>
            Discover the foundational commitments, global outlook, and rigorous academic debating standards that distinguish AMIMUN on the world stage.
          </p>
          <div className={styles.pillarIndicatorBox}>
            <span className={styles.indicatorLabel}>Active Focus</span>
            <span className={styles.indicatorActive}>{WHY_AMIMUN_DATA.pillars[activePillar]?.title || "Overview"}</span>
          </div>
        </div>

        <div className={styles.pillarList}>
          {WHY_AMIMUN_DATA.pillars.map((pillar, idx) => {
            const zIndex = idx + 1;
            const stickyTop = 110 + idx * 18;

            return (
              <div
                key={pillar.number}
                ref={(el) => {
                  pillarRefs.current[idx] = el;
                }}
                className={`${styles.pillarCard} ${activePillar === idx ? styles.activeCard : ""}`}
                style={{
                  top: `calc(var(--navigation-height) + ${stickyTop}px)`,
                  zIndex: zIndex,
                }}
              >
                <div className={styles.cardTopRow}>
                  <span className={styles.cardNumber}>{pillar.number}</span>
                  <span className={styles.cardTag}>{pillar.tag || "AMIMUN Standard"}</span>
                </div>
                <h3 className={styles.cardTitle}>{pillar.title}</h3>
                <p className={styles.cardDesc}>{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Delegate Experience Framework */}
      <section className={styles.experienceSection}>
        <div className={styles.experienceHeader}>
          <span className={styles.sectionLabel}>The Delegate Journey</span>
          <h2 className={styles.experienceTitle}>A Rigorous Academic Standard</h2>
          <p className={styles.experienceDesc}>
            Every session at AMIMUN is crafted to push intellectual boundaries and nurture diplomatic acumen.
          </p>
        </div>
        <div className={styles.experienceGrid}>
          {WHY_AMIMUN_DATA.delegateExperience.map((exp, i) => (
            <div key={i} className={styles.experienceCard}>
              <div className={styles.expIndex}>0{i + 1}</div>
              <h3 className={styles.expTitle}>{exp.title}</h3>
              <p className={styles.expText}>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* University Vision & Mission Feature Banner (AMIMUN Royal Blue #0c388d) */}
      <section className={styles.visionBanner} id="vision-mission">
        <div className={styles.visionInner}>
          <div className={styles.visionTag}>
            <span className={styles.heroDot} style={{ backgroundColor: "#ffffff" }} />
            <span>Institution Overview</span>
          </div>

          <h2 className={styles.visionHeading}>
            {WHY_AMIMUN_DATA.university.heading}
          </h2>
          <span className={styles.visionSubheading}>
            {WHY_AMIMUN_DATA.university.subheading}
          </span>

          <p className={styles.visionText}>
            {WHY_AMIMUN_DATA.university.vision}
          </p>
        </div>
      </section>

      {/* Core Values 4-Column Grid */}
      <section className={styles.valuesSection} id="core-values">
        <div className={styles.valuesHeader}>
          <span className={styles.sectionLabel}>Foundational Tenets</span>
          <h2 className={styles.valuesTitle}>Our Core Values</h2>
          <p className={styles.valuesSubtitle}>
            Eight institutional pillars steering Amity University&apos;s holistic educational mission.
          </p>
        </div>

        <div className={styles.valuesGrid}>
          {WHY_AMIMUN_DATA.values.map((val) => (
            <div key={val.number} className={styles.valueCard}>
              <div className={styles.valTop}>
                <span className={styles.valNumber}>{val.number}</span>
                <span className={styles.valCategory}>{val.category}</span>
              </div>
              <h3 className={styles.valTitle}>{val.title}</h3>
              <p className={styles.valDesc}>{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 16-Year Evolution Timeline Roadmap */}
      <section className={styles.timelineSection}>
        <div className={styles.timelineHeader}>
          <span className={styles.sectionLabel}>Milestone Roadmap</span>
          <h2 className={styles.timelineTitle}>16 Years of Diplomatic Heritage</h2>
          <p className={styles.timelineDesc}>
            Tracing AMIMUN&apos;s growth from its inaugural 2011 session to one of India&apos;s foremost international conferences.
          </p>
        </div>

        <div className={styles.timelineTrack}>
          {WHY_AMIMUN_DATA.timeline.map((item, i) => (
            <div key={item.year} className={styles.timelineNode}>
              <div className={styles.nodeMarker}>
                <span className={styles.nodeDot} />
                <span className={styles.nodeYear}>{item.year}</span>
              </div>
              <div className={styles.nodeCard}>
                <span className={styles.nodeTag}>{item.highlight}</span>
                <h3 className={styles.nodeTitle}>{item.title}</h3>
                <p className={styles.nodeText}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions Interactive Accordion */}
      <section className={styles.faqSection}>
        <div className={styles.faqHeader}>
          <span className={styles.sectionLabel}>Clarifications & Insights</span>
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
          <p className={styles.faqDesc}>
            Essential answers regarding committee standards, hybrid participation, and conference accreditation.
          </p>
        </div>

        <div className={styles.faqList}>
          {WHY_AMIMUN_DATA.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.question}
                className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ""}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className={styles.faqQuestionRow}>
                  <div className={styles.faqQuestionLeft}>
                    <span className={styles.faqCategory}>{faq.category}</span>
                    <h3 className={styles.faqQuestion}>{faq.question}</h3>
                  </div>
                  <span className={styles.faqToggleIcon}>{isOpen ? "−" : "+"}</span>
                </div>
                {isOpen && (
                  <div className={styles.faqAnswerWrapper}>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Registration Callout Banner */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaLeft}>
            <span className={styles.ctaTag}>Registration Open</span>
            <h2 className={styles.ctaHeading}>Step Onto The World Stage</h2>
            <p className={styles.ctaSubtitle}>
              Join over a thousand passionate student diplomats at Amity University Noida from 15th–17th January 2027.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a
              href="https://tinyurl.com/DelegateForm-amimun27"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaPrimaryBtn}
            >
              <span>Delegate Registration</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://tinyurl.com/IPForm-amimun27"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSecondaryBtn}
            >
              <span>International Press</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
