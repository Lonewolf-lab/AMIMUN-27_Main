"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./map.module.css";

// Adapted from the Eldora UI Map reference supplied for this section.
function Marker({ src, top, offset, delay }: { src: string; top: number; offset: number; delay: number }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      variants={reducedMotion ? { idle: { opacity: 1, scale: 1 }, active: { opacity: 1, scale: 1 } } : {
        idle: { scale: 0, opacity: 0, y: 0 },
        active: { y: [-20, 0, 4, 0], scale: [0.75, 1], opacity: [0, 1] },
      }}
      transition={{ duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : delay, ease: "easeOut" }}
      style={{ "--offset": `${offset}px`, top } as CSSProperties}
      className={styles.marker}
    >
      <svg fill="none" viewBox="0 0 38 38" className={styles.pin}>
        <path d="M29.607 5.193c5.858 5.857 5.858 15.355 0 21.213l-9.9 9.9-.707.706-.708-.708-9.899-9.898c-5.857-5.858-5.857-15.356 0-21.213 5.858-5.858 15.356-5.858 21.214 0Z" fill="#9cc8ff" fillOpacity=".3" />
        <path d="m28.9 25.698-9.9 9.9-9.9-9.9C3.634 20.232 3.634 11.367 9.1 5.9 14.569.432 23.433.432 28.9 5.9c5.467 5.468 5.467 14.332 0 19.8Z" fill="white" />
      </svg>
      <span className={styles.avatar}><Image src={src} alt="" fill sizes="24px" /></span>
    </motion.div>
  );
}

export function Map() {
  return (
    <motion.div initial="idle" whileInView="active" whileHover="active" viewport={{ once: true, amount: 0.25 }} variants={{ idle: {}, active: {} }} aria-hidden="true" className={styles.map}>
      <div className={styles.background} />
      <div className={styles.markers}>
        <Marker src="/committees/unctc.svg" top={96} offset={-128} delay={0.15} />
        <Marker src="/committees/WHO.png" top={160} offset={-16} delay={0.4} />
        <Marker src="/committees/unicef.png" top={144} offset={96} delay={0.3} />
        <Marker src="/committees/unhrc.png" top={192} offset={64} delay={0.6} />
        <Marker src="/committees/ecosoc.png" top={224} offset={-32} delay={0.8} />
      </div>
      <div className={styles.fade} />
    </motion.div>
  );
}
