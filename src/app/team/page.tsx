"use client";

// CHANGED: Added Next.js Image component for optimized image rendering.
import Image from "next/image";

import { useEffect, useRef, type CSSProperties } from "react";

import { TextReveal } from "@/components/animations/TextReveal";

import styles from "./page.module.css";

const ADVISORY_BOARD = [
  {
    name: "Gauri Sareen",
    role: "Secretary General AMIMUN'24",
    image: "/advisory-board/Gauri.jpg",
    bio: `Dear AMIMUN Family,

As I sit to write this message, I find myself reflecting on the journey AMIMUN has given me — a journey that has shaped my confidence, my perspective, and the person I have become. What began years ago with me entering my first AMIMUN conference as a nervous delegate grew into something far greater than I could have imagined. AMIMUN became a place where I found support, friendship, and countless opportunities to learn and grow.

What makes AMIMUN truly special is not just the debates or the committees, but the people who bring life to it — the delegates who challenge themselves, the volunteers who work quietly behind the scenes, and the leaders who guide with care and purpose. Together, each of us contributes to a legacy built on discipline, collaboration, and a shared commitment to doing better.

From my early days as a delegate to serving as the Secretary-General of AMIMUN'24, this journey has been one of steady learning and meaningful moments. As I watch AMIMUN'27 take shape, I feel grateful to continue being part of its story. The theme of this edition, "Virtus Per Disciplinam — Excellence Through Discipline," reflects what AMIMUN has always stood for: growth rooted in consistency, sincerity, and effort.

To everyone who is a part of AMIMUN'27, I encourage you to embrace this experience fully. Step into it with curiosity, openness, and the willingness to challenge yourself. This platform has a way of leaving a lasting impact, and I hope it does the same for you as it did for me.

With warm regards,
Gauri Sareen`,
  },

  {
    name: "Sagar Chamariti",
    role: "Director General, AMIMUN'24",
    image: "/advisory-board/Sagar.jpg",
    bio: `Dear Delegates,

It is an honour to welcome you to the Amity International Model United Nations Conference 2027. Having served as the Director General of AMIMUN'24, I have witnessed firsthand how the power of dialogue, diplomacy, and disciplined engagement can shape young minds and inspire meaningful global perspectives.

Our previous theme, "Optimus ad Optimorum," encouraged each of us to pursue excellence with purpose. Today, AMIMUN'27 carries this legacy forward under the guiding principle of *"Virtus Per Disciplinam — Excellence Through Discipline."* This theme reflects a simple yet powerful truth: progress is built not only on ideas, but on the discipline to refine them, act on them, and sustain them.

As delegates, you stand at the heart of this conference. You are not merely participants — you are emerging leaders with the ability to influence thought, question norms, and propose solutions that mirror the world we hope to build. Your discussions over these three days are opportunities to learn, collaborate, and grow into voices that matter.

To the Secretariat and Organizing Committee of AMIMUN'27, I extend my heartfelt appreciation. Your dedication, teamwork, and steady commitment have shaped this edition into an experience that reflects the values AMIMUN has upheld over the years. Your efforts ensure that this platform continues to thrive and inspire future leaders.

Delegates, I hope your debates challenge you, your resolutions carry purpose, and your experience at AMIMUN'27 stays with you long beyond the conference. May you approach each session with clarity, integrity, and the discipline that drives true excellence.

Warm Regards,
Sagar Chamarti`,
  },

  {
    name: "Jay Yadav",
    role: "Director General, AMIMUN'25",
    image: "/advisory-board/jay-yadav.jpg",
    bio: `Dear AMIMUN Delegates,

Each year, AMIMUN evolves into something greater than a conference — it becomes a space where young minds come together with the intention to understand, question, and shape the world around them. What truly defines AMIMUN is not only the enthusiasm for diplomacy or the pursuit of global awareness, but the willingness of its delegates to rethink perspectives, approach challenges with openness, and imagine solutions grounded in empathy and clarity. Being part of this journey has been an honour, and witnessing its steady growth has been deeply inspiring.

As you enter AMIMUN'27, I encourage you to value the strength of dialogue. It is through honest conversation that differences soften, understanding expands, and meaningful progress begins. Diplomacy has never been about winning an argument — it is about finding common purpose and turning diverse opinions into collective action. Let every committee session be an opportunity to learn something new, step outside your comfort zone, and grow both as individuals and as global citizens.

With every speech you deliver and every resolution you craft, remember that you are contributing to a legacy built on responsibility, unity, and disciplined effort. AMIMUN'27 invites you to embody its theme — to let discipline guide your ideas, refine your approach, and elevate your impact. May this conference remind you that the future is not something we simply anticipate, but something we actively build through intention and collaboration.

Warm Regards,
Jai Yadav`,
  },

  {
    name: "Amishi Arora",
    role: "Chief Advisor",
    image: "/advisory-board/Amishi.png",
    bio: `Dear AMIMUN Family,

The essence of AMIMUN has always extended beyond its committees and debates. It lives in the collective spirit of cooperation, respect, and curiosity that each one of you brings to this conference. Every edition reminds us that diplomacy does not begin on global stages — it begins here, in these rooms, with your willingness to speak, listen, and work toward shared understanding.

What truly sets AMIMUN apart is the sense of community it creates. It is a space where ideas are welcomed, diverse viewpoints are encouraged, and differences become opportunities to learn from one another. In this environment, you discover not only your capacity to lead, but also the importance of listening with patience and humility. The connections you build and the lessons you take away will remain with you long after the conference ends, becoming part of the growing legacy that AMIMUN cherishes year after year.

As emerging leaders and thoughtful changemakers, your presence at AMIMUN'27 carries significance. Leadership is not defined by titles or applause — it is defined by responsibility, integrity, and the discipline to act with purpose. Let this conference be a reminder that the small steps you take today — the conversations, the compromises, the insights — contribute to the world you will shape tomorrow.

Carry forward the camaraderie, the learning, and the spirit of AMIMUN wherever you go. You will find that this experience becomes a quiet but steady influence on the choices you make and the future you build.

With Best Wishes,
Amishi Arora`,
  },
];

// CHANGED: Removed getInitials() because the initials placeholders
// are being replaced by the actual advisory board photographs.

export default function TeamPage() {
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.cardVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((card) => card && observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <span className={styles.heroTag}>Our Team</span>

          <h1 className={styles.title}>
            <TextReveal as="span" baseDelay={100}>
              Advisory Board
            </TextReveal>
          </h1>

          <p className={styles.heroSubtitle}>
            The experience and guidance behind AMIMUN&apos;s continuing legacy.
          </p>
        </div>
      </section>

      <section
        className={styles.boardSection}
        id="advisory-board"
      >
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Advisory Board</span>

          <h2 className={styles.sectionTitle}>
            Guidance shaped by experience
          </h2>
        </div>

        <div className={styles.cardGrid}>
          {ADVISORY_BOARD.map((member, index) => (
            <article
              key={member.name}
              ref={(card) => {
                cardRefs.current[index] = card;
              }}
              className={styles.card}
              style={{ "--reveal-delay": `${index * 0.08}s` } as CSSProperties}
            >
              {/* CHANGED: Replaced the initials placeholder with the actual
                  advisory board photograph. The image path comes from the
                  image property defined in ADVISORY_BOARD above. */}
              <div className={styles.portrait}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={styles.memberImage}
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
              </div>

              <div className={styles.cardContent}>
                <div className={styles.memberInfo}>
                  <h3>{member.name}</h3>

                  <p className={styles.role}>{member.role}</p>
                </div>

                <div
                  className={styles.bioArea}
                  data-lenis-prevent
                >
                  {member.bio ? <p className={styles.bio}>{member.bio}</p> : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}