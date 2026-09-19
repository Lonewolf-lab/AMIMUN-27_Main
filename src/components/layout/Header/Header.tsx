"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NavigationOverlay } from "@/components/layout/NavigationOverlay/NavigationOverlay";
import { AMIMUNLogoStatic } from "@/components/logo/AMIMUNLogo";
import styles from "./Header.module.css";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFooterInView, setIsFooterInView] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const footer = document.querySelector("footer");
    let observer: IntersectionObserver | null = null;

    if (footer) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsFooterInView(entry.isIntersecting);
        },
        { threshold: 0.05 }
      );
      observer.observe(footer);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer?.disconnect();
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <header
        className={`${styles.headerWrapper} ${isFooterInView && !isMenuOpen ? styles.footerInView : ""}`}
        id="header"
      >
        <div className={styles.container}>
          <nav
            className={`${styles.navPill} ${isScrolled ? styles.scrolled : ""} ${isMenuOpen ? styles.isOpen : ""}`}
            aria-label="Main Navigation"
          >
            <Link
              href="/"
              className={styles.logoLink}
              title="AMIMUN 2027"
              onClick={() => setIsMenuOpen(false)}
            >
              <AMIMUNLogoStatic size={28} />
            </Link>

            <button
              className={styles.menuButton}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <span className={styles.menuText}>{isMenuOpen ? "Close" : "Menu"}</span>
              <div className={styles.menuLines}>
                <div className={styles.line} />
                <div className={styles.line} />
              </div>
            </button>
          </nav>
        </div>
      </header>

      <NavigationOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
