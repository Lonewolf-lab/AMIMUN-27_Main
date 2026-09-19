"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./NavigationOverlay.module.css";

interface NavigationOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", sub: [
    { label: "Why AMIMUN",    href: "/about" },
    { label: "Beyond AMIMUN", href: "/beyond-amimun" },
  ]},
  { label: "Our Team", sub: [
    { label: "Our Guiding Light", href: "/guiding-light" },
    { label: "Advisory Board",    href: "/team#advisory-board" },
  ]},
  { label: "Committees", href: "/committees" },
];

const CTAS = [
  { label: "Delegate Form",           href: "https://tinyurl.com/DelegateForm-amimun27" },
  { label: "International Press Form", href: "https://tinyurl.com/IPForm-amimun27" },
];

export function NavigationOverlay({ isOpen, onClose }: NavigationOverlayProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!isOpen) { setActiveIndex(null); return; }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [isOpen, onClose]);

  const hasActive = activeIndex !== null;

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.visible : ""}`} aria-hidden={!isOpen} role="dialog" aria-modal="true">

      {/* Main list — always centred, slides left when sub open */}
      <ul className={`${styles.mainList} ${hasActive ? styles.mainSlid : ""}`}>
        {NAV.map((item, i) => (
          <li key={i} className={styles.menuItem}>
            {"sub" in item ? (
              <button
                className={`${styles.menuLink} ${activeIndex === i ? styles.menuLinkActive : ""}`}
                style={{ transitionDelay: isOpen ? `${i * 0.04}s` : "0s" }}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              >
                {item.label}
                <span className={`${styles.arrow} ${activeIndex === i ? styles.arrowOpen : ""}`} aria-hidden>→</span>
              </button>
            ) : (
              <Link href={item.href!} className={styles.menuLink}
                style={{ transitionDelay: isOpen ? `${i * 0.04}s` : "0s" }} onClick={onClose}>
                {item.label}
                <span className={styles.arrow} style={{ opacity: 0 }} aria-hidden>→</span>
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Sub-menus — position:fixed, completely out of flow */}
      {NAV.map((item, i) =>
        "sub" in item ? (
          <ul key={i} className={`${styles.subList} ${activeIndex === i ? styles.subVisible : ""}`}>
            {item.sub!.map((s, j) => (
              <li key={j} className={styles.subItem}>
                <Link href={s.href} className={styles.subLink} onClick={onClose}
                  style={{ transitionDelay: activeIndex === i ? `${j * 0.08 + 0.08}s` : "0s" }}>
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : null
      )}

      {/* CTAs */}
      <div className={styles.contactSection}>
        {CTAS.map((c, i) => (
          <div key={i} className={styles.contactItem}>
            <a href={c.href} target="_blank" rel="noopener noreferrer" className={styles.contactLink}
              style={{ transitionDelay: isOpen ? `${(NAV.length + i) * 0.04}s` : "0s" }}>
              {c.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
