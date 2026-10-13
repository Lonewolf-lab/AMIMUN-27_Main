import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./Partners.module.css";

const LOGOS = [
  { file: "unicef.png", name: "UNICEF" },
  { file: "unesco.png", name: "UNESCO" },
  { file: "unhcr.png", name: "UNHCR" },
  { file: "UNwomen.png", name: "UN Women" },
  { file: "UNacademic.png", name: "UN Academic Impact" },
  { file: "UNglobal.png", name: "UN Global" },
  { file: "global-compact.webp", name: "UN Global Compact" },
  { file: "heforshe.png", name: "HeForShe" },
  { file: "helpageindia.png", name: "HelpAge India" },
  { file: "peta.png", name: "PETA" },
  { file: "nescafe.png", name: "Nescafé" },
  { file: "polaroid.png", name: "Polaroid" },
  { file: "collegedunia.png", name: "Collegedunia" },
  { file: "phil-group.png", name: "Phil Group" },
  { file: "chhatra-sansad.png", name: "Chhatra Sansad" },
  { file: "MaltMUN.png", name: "MaltMUN" },
  { file: "NUMUN.jpeg", name: "NUMUN" },
  { file: "theglobaltimes.jpeg", name: "The Global Times" },
  { file: "hindikhabar.jpg", name: "Hindi Khabar" },
  { file: "amity-radio.jpeg", name: "Amity Radio" },
];

export function Partners() {
  return (
    <section className={styles.section} aria-labelledby="partners-heading">
      <h2 id="partners-heading" className={`${styles.heading} sd-reveal`}>
        Partners across past editions.
      </h2>

      <div data-scroll-scene className={styles.stage}>
        <ul className={styles.plane}>
          {LOGOS.map((logo, i) => (
            <li key={logo.file} className={styles.tile} style={{ "--i": i } as CSSProperties}>
              <Image src={`/sponsors/${logo.file}`} alt={logo.name} fill sizes="160px" />
            </li>
          ))}
        </ul>
        <div className={styles.floor} aria-hidden="true" />
      </div>
    </section>
  );
}
