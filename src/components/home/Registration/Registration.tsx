"use client";

import { Reveal } from "@/components/animations/Reveal";
import { useTilt } from "@/components/animations/useTilt";
import styles from "./Registration.module.css";

const DELEGATE_FORM = "https://tinyurl.com/DelegateForm-amimun27";
const PRESS_FORM = "https://tinyurl.com/IPForm-amimun27";

const TIERS = [
  { name: "Offline delegate", price: "₹2000", note: "In person at Amity University, Noida.", href: DELEGATE_FORM, featured: true },
  { name: "Online delegate", price: "₹750", note: "Join the online committees from anywhere.", href: DELEGATE_FORM },
  { name: "International delegate", price: "$15", note: "For delegates registering from outside India.", href: DELEGATE_FORM },
  { name: "International Press", price: "₹1700", note: "Report, photograph and publish the conference.", href: PRESS_FORM },
];

function Tier({ tier, index }: { tier: (typeof TIERS)[number]; index: number }) {
  const ref = useTilt<HTMLAnchorElement>(5);
  return (
    <Reveal delay={index * 90} className={styles.tierWrap}>
      <a
        ref={ref}
        href={tier.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.tier} ${tier.featured ? styles.featured : ""}`}
      >
        <span className={styles.name}>{tier.name}</span>
        <span className={styles.price}>{tier.price}</span>
        <span className={styles.note}>{tier.note}</span>
        <span className={styles.cta}>
          Register <span aria-hidden="true">&rarr;</span>
        </span>
      </a>
    </Reveal>
  );
}

export function Registration() {
  return (
    <section className={styles.section} id="register" aria-labelledby="register-heading">
      <div className={styles.waves} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <Reveal className={styles.header}>
        <h2 id="register-heading" className={styles.heading}>
          Registrations are open.
        </h2>
        <p className={styles.sub}>Four ways to take part in AMIMUN&apos;27, in hybrid mode, 15-17 January 2027.</p>
      </Reveal>

      <div className={styles.grid}>
        {TIERS.map((tier, i) => (
          <Tier key={tier.name} tier={tier} index={i} />
        ))}
      </div>
    </section>
  );
}
