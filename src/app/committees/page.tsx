"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { TextReveal } from "@/components/animations/TextReveal";
import styles from "./page.module.css";

type Committee = {
  name: string;
  fullName: string;
  slug: string;
  logo: string;
};

const ONLINE_COMMITTEES: Committee[] = [
  {
    name: "ECOSOC",
    fullName: "United Nations Economic and Social Council",
    slug: "ecosoc",
    logo: "/committees/ecosoc.png",
  },
  {
    name: "WHO",
    fullName: "World Health Organization",
    slug: "who",
    logo: "/committees/WHO.png",
  },
  {
    name: "UNODC",
    fullName: "United Nations Office on Drugs and Crime",
    slug: "unodc",
    logo: "/committees/unodc.png",
  },
];

const OFFLINE_COMMITTEES: Committee[] = [
  {
    name: "UNCTC",
    fullName: "United Nations Counter-Terrorism Committee",
    slug: "unctc",
    logo: "/committees/unctc.svg",
  },
  {
    name: "UNOOSA",
    fullName: "United Nations Office for Outer Space Affairs",
    slug: "unoosa",
    logo: "/committees/unoosa.svg",
  },
  {
    name: "UNGA-SOCHUM",
    fullName: "United Nations General Assembly — Social, Humanitarian and Cultural Affairs",
    slug: "unga-sochum",
    logo: "/committees/unga-sochum.svg",
  },
  {
    name: "UNICEF",
    fullName: "United Nations Children's Fund",
    slug: "unicef",
    logo: "/committees/unicef.png",
  },
  {
    name: "UNHRC",
    fullName: "United Nations Human Rights Council",
    slug: "unhrc",
    logo: "/committees/unhrc.png",
  },
  {
    name: "Lok Sabha",
    fullName: "Lok Sabha — House of the People",
    slug: "lok-sabha",
    logo: "/committees/lok%20sabha.png",
  },
  {
    name: "UNGA-ECOFIN",
    fullName: "United Nations General Assembly — Economic and Financial Affairs",
    slug: "unga-ecofin",
    logo: "/committees/unga-ecofin.svg",
  },
  {
    name: "UNGA-DISEC",
    fullName: "United Nations General Assembly — Disarmament and International Security",
    slug: "unga-disec",
    logo: "/committees/unga-disec.png",
  },
  {
    name: "UNCSW",
    fullName: "United Nations Commission on the Status of Women",
    slug: "uncsw",
    logo: "/committees/uncsw.png",
  },
  {
    name: "AIPPM",
    fullName: "All India Political Parties Meet",
    slug: "aippm",
    logo: "/committees/aippm.svg",
  },
  {
    name: "IP",
    fullName: "International Press",
    slug: "ip",
    logo: "/committees/ip.png",
  },
];

const ENTRANCE_OFFSETS = [
  { x: "-18px", y: "-10px", rotate: "-0.4deg" },
  { x: "18px", y: "-8px", rotate: "0.35deg" },
  { x: "-16px", y: "10px", rotate: "-0.3deg" },
  { x: "16px", y: "8px", rotate: "0.3deg" },
];

function CommitteeSection({
  label,
  committees,
}: {
  label: string;
  committees: Committee[];
}) {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleCards(new Set(committees.map((committee) => committee.slug)));
      return;
    }

    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setVisibleCards(new Set(committees.map((committee) => committee.slug)));
        observer.unobserve(entry.target);
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px -55% 0px",
      }
    );

    observer.observe(grid);

    return () => observer.disconnect();
  }, [committees]);

  const renderCard = (committee: Committee, index: number) => {
    const offset = ENTRANCE_OFFSETS[index % ENTRANCE_OFFSETS.length];
    const cardStyle = {
      "--card-index": index,
      "--entrance-x": offset.x,
      "--entrance-y": offset.y,
      "--entrance-rotate": offset.rotate,
    } as CSSProperties;

    return (
      <Link
        key={committee.slug}
        href={`/committees/${committee.slug}`}
        className={`${styles.committeeCard} ${visibleCards.has(committee.slug) ? styles.cardVisible : ""}`.trim()}
        data-committee={committee.slug}
        style={cardStyle}
      >
        <div className={styles.cardInner}>
          <div className={`${styles.cardFace} ${styles.cardFront}`}>
            <span className={styles.cardIndex} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className={styles.logoArea}>
              <Image
                src={committee.logo}
                alt={`${committee.name} logo`}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
              />
            </span>

            <h2>{committee.name}</h2>
            <span className={styles.cardArrow} aria-hidden="true">
              &rarr;
            </span>
          </div>

          <div className={`${styles.cardFace} ${styles.cardBack}`} aria-hidden="true">
            <span className={styles.logoArea}>
              <Image
                src={committee.logo}
                alt=""
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
              />
            </span>
            <span className={styles.fullName}>{committee.fullName}</span>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <section className={styles.committeeSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>{label}</span>
        <div className={styles.divider} />
      </div>
      <div ref={gridRef} className={styles.committeeGrid}>
        {label === "Offline Committees" ? (
          <>
            {committees.slice(0, -2).map(renderCard)}
            <div className={styles.finalRow}>
              {committees
                .slice(-2)
                .map((committee, index) => renderCard(committee, committees.length - 2 + index))}
            </div>
          </>
        ) : (
          committees.map(renderCard)
        )}
      </div>
    </section>
  );
}

export default function CommitteesPage() {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <span className={styles.heroTag}>AMIMUN&apos;27</span>
          <h1 className={styles.title}>
            <TextReveal as="span" baseDelay={100}>
              Committees
            </TextReveal>
          </h1>
          <p className={styles.heroSubtitle}>
            Choose your forum for debate, diplomacy, and decisive action.
          </p>
        </div>
      </section>

      <main className={styles.committeesContent}>
        <CommitteeSection label="Online Committees" committees={ONLINE_COMMITTEES} />
        <CommitteeSection label="Offline Committees" committees={OFFLINE_COMMITTEES} />
      </main>
    </div>
  );
}
