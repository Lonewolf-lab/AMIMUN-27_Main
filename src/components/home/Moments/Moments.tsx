"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useTilt } from "@/components/animations/useTilt";
import styles from "./Moments.module.css";

const PHOTOS = [
  { src: "/chronicles/opening-ceremony.JPG", alt: "Opening ceremony at a previous AMIMUN", caption: "Opening ceremony", area: "a", speed: 0.15 },
  { src: "/chronicles/delegates-discussion.JPG", alt: "Delegates debating in committee", caption: "Committee sessions", area: "b", speed: 0.45 },
  { src: "/chronicles/team-building.JPG", alt: "Delegates collaborating on a resolution", caption: "Drafting resolutions", area: "c", speed: -0.1 },
  { src: "/chronicles/award.JPG", alt: "Valedictory and awards ceremony", caption: "Valedictory and awards", area: "d", speed: 0.3 },
  { src: "/videos/amity-photo.jpg", alt: "Amity University campus, Noida", caption: "Amity University, Noida", area: "e", speed: -0.2 },
];

function Photo({ photo }: { photo: (typeof PHOTOS)[number] }) {
  const ref = useTilt<HTMLDivElement>(7);
  return (
    <figure
      className={`${styles.item} ${styles[photo.area]} sd-parallax`}
      style={{ "--speed": photo.speed } as CSSProperties}
    >
      <div ref={ref} className={styles.card}>
        <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 90vw, 40vw" className={styles.img} />
        <div className={styles.sheen} aria-hidden="true" />
      </div>
      <figcaption className={styles.caption}>{photo.caption}</figcaption>
    </figure>
  );
}

export function Moments() {
  return (
    <section className={styles.section} aria-labelledby="moments-heading">
      <div className={styles.bg} aria-hidden="true">
        <span className="sd-parallax" style={{ "--speed": 0.6 } as CSSProperties} />
        <span className="sd-parallax" style={{ "--speed": -0.4 } as CSSProperties} />
      </div>

      <h2 id="moments-heading" className={`${styles.heading} sd-reveal`}>
        Sixteen years of moments like these.
      </h2>

      <div className={styles.collage}>
        {PHOTOS.map((p) => (
          <Photo key={p.src} photo={p} />
        ))}
      </div>
    </section>
  );
}
