import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const FOOTER_NAV = [
  { label: "Home", href: "/" },
  { label: "Delegate Form", href: "https://tinyurl.com/DelegateForm-amimun27" },
  { label: "IP Form", href: "https://tinyurl.com/IPForm-amimun27" },
  { label: "Instagram", href: "https://www.instagram.com/amimun_27" },
  { label: "LinkedIn", href: "https://tinyurl.com/linkedin-amimun27" },
];

const SUBURBS = [
  "Amity University Noida",
  "Sector-125",
  "Hybrid Mode",
  "Online + Offline",
  "14 Committees",
];

export function Footer() {
  return (
    <footer id="main-footer" className={styles.footer} data-theme="dark">
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <p className={styles.dotHeading}>
              <span className={styles.dot} />
              <span>AMIMUN 2027</span>
            </p>
            <Link href="/" className={styles.emblemLink} title="Amity University">
              <Image
                src="/Amity_University_logo.png"
                alt="Amity University Logo"
                width={120}
                height={50}
                style={{ objectFit: "contain", height: "auto", maxWidth: "140px" }}
              />
            </Link>
            <p className={styles.brandDescription}>
              Amity International Model United Nations — 16th Edition. Sapientia Ad Actionem – From Wisdom to Action.
            </p>
          </div>

          <div className={styles.navSection}>
            <ul className={styles.navList}>
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={styles.navLink}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <ul className={styles.socialList}>
              <li>
                <a
                  href="https://www.instagram.com/amimun_27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://tinyurl.com/linkedin-amimun27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.projectCol}>
            <p className={styles.dotHeading}>
              <span className={styles.dot} />
              <span>Registration Open</span>
            </p>
            <a
              href="https://tinyurl.com/DelegateForm-amimun27"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectCard}
            >
              <div className={styles.projectCardHeader}>
                <h4 className={styles.projectCardTitle}>Delegate Form</h4>
                <span className={styles.projectCardYear}>2027</span>
              </div>
              <p className={styles.projectCardDesc}>
                Offline: ₹2000 | Online: ₹750 | Int: $15
              </p>
            </a>
          </div>
        </div>

        <div className={styles.giantLogoWrapper} aria-hidden="true">
          <svg
            width="1414"
            height="260"
            viewBox="0 0 1414 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.giantLogoSvg}
          >
            <text
              x="0"
              y="230"
              textLength="1414"
              lengthAdjust="spacingAndGlyphs"
              fill="white"
              stroke="white"
              strokeWidth="8"
              strokeLinejoin="round"
              fontSize="300"
              fontWeight="900"
              fontFamily="var(--font-suisse-intl), system-ui, sans-serif"
            >
              AMIMUN'27
            </text>
          </svg>
        </div>

        <div className={styles.suburbSection}>
          <span className={styles.suburbHeader}>Conference Highlights</span>
          <div className={styles.suburbTags}>
            {SUBURBS.map((suburb) => (
              <span key={suburb} className={styles.suburbTag}>
                {suburb}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.bottomBar}>
          <span>Amity International Model United Nations Secretariat</span>
          <span>© 2027 AMIMUN. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
