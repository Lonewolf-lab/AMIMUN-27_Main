"use client";

import Image from "next/image";
import Link from "next/link";
import { TextReveal } from "@/components/animations/TextReveal";
import styles from "./SectionIntro.module.css";

export interface SectionIntroProps {
  heading: string;
  subheading: string;
  paragraphs: string[];
  cta?: {
    label: string;
    href: string;
  };
  image?: {
    url: string;
    alt: string;
  };
  id?: string;
}

export function SectionIntro({
  heading,
  subheading,
  paragraphs,
  cta,
  image,
  id,
}: SectionIntroProps) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.headingRow}>
        <h2 className={styles.heading}>
          <TextReveal as="span" baseDelay={100}>
            {heading}
          </TextReveal>
        </h2>
      </div>

      <div className={styles.divider} />

      <div className={styles.contentRow}>
        <div className={styles.subheadingCol}>
          <p className={styles.dotHeading}>
            <span className={styles.dot} />
            <span>{subheading}</span>
          </p>
        </div>

        <div className={styles.bodyCol}>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className={styles.ctaCol}>
          {cta && (
            <Link href={cta.href} className={styles.ctaButton}>
              <span>{cta.label}</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </div>

      {image && (
        <div className={styles.imageWrapper}>
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="(max-width: 900px) 100vw, 80vw"
            className={styles.image}
          />
        </div>
      )}
    </section>
  );
}
