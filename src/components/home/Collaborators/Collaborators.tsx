"use client";

import { useEffect, useRef, useState } from "react";
import { TextReveal } from "@/components/animations/TextReveal";
import styles from "./Collaborators.module.css";

const CONTACT_MEMBERS = [
  {
    name: "Saksham Shivasish",
    role: "Secretary General",
    edition: "AMIMUN 2027",
    phone: "+91 62055 21629",
    rawPhone: "+916205521629",
  },
  {
    name: "Kshitij Singh",
    role: "Director General",
    edition: "AMIMUN 2027",
    phone: "+91 73940 62221",
    rawPhone: "+917394062221",
  },
  {
    name: "Ishaan Mathur",
    role: "Deputy Director General",
    edition: "AMIMUN 2027",
    phone: "+91 98112 26687",
    rawPhone: "+919811226687",
  },
  {
    name: "Advika Yadav",
    role: "Charge D’ Affaires",
    edition: "AMIMUN 2027",
    phone: "+91 75228 77444",
    rawPhone: "+917522877444",
  },
  {
    name: "Zara Hussain",
    role: "Chef de Cabinet",
    edition: "AMIMUN 2027",
    phone: "+91 88513 20305",
    rawPhone: "+918851320305",
  },
  {
    name: "Krish Singhani",
    role: "USG Delegate Affairs",
    edition: "AMIMUN 2027",
    phone: "+91 85276 31976",
    rawPhone: "+918527631976",
  },
];

export function Collaborators() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="contact" ref={containerRef}>
      <div className={styles.container}>
        {/* Header Row */}
        <div className={styles.header}>
          <div className={styles.dotHeading}>
            <span className={styles.dot} />
            <TextReveal as="span" baseDelay={100}>
              Contact Us
            </TextReveal>
          </div>
          <h2 className={styles.mainTitle}>
            For further information, get in touch with the Secretariat
          </h2>
          <p className={styles.description}>
            Have questions regarding registrations, committee allotments, or logistics? Reach out directly to our executive leadership team.
          </p>
        </div>

        {/* Contact Cards Grid with Fluid Scroll Reveal */}
        <div className={`${styles.cardsGrid} ${isVisible ? styles.gridVisible : ""}`}>
          {CONTACT_MEMBERS.map((member, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <a
                key={member.name}
                href={`tel:${member.rawPhone}`}
                className={`${styles.contactCard} ${isHovered ? styles.cardHovered : ""}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.editionTag}>{member.edition}</span>
                  <span className={styles.arrowIcon} aria-hidden="true">
                    ↗
                  </span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.phoneLabel}>Direct Line</span>
                  <span className={styles.phoneNumber}>{member.phone}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
