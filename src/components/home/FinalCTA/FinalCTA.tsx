"use client";

import Link from "next/link";
import { Map } from "@/registry/eldoraui/map";
import { Reveal } from "@/components/animations/Reveal";
import styles from "./FinalCTA.module.css";

export function FinalCTA() {
  return (
    <section className={styles.section} aria-labelledby="final-cta-heading">
      <div className={styles.copy}>
        <Reveal><p className={styles.eyebrow}><span /> REGISTRATIONS ARE OPEN</p></Reveal>
        <Reveal><h2 id="final-cta-heading" className={styles.heading}>From wisdom<br />to action.<br /><span>Your turn.</span></h2></Reveal>
        <Reveal delay={120}><p className={styles.sub}>Find your committee. Bring your perspective.<br />Take your seat at AMIMUN&apos;27.</p></Reveal>
        <Reveal className={styles.facts}><span>15—17 JAN 2027</span><span>NOIDA + ONLINE</span></Reveal>
        <Reveal delay={220} className={styles.actions}>
          <a href="#register" className={styles.primary}>Choose your registration <span aria-hidden="true">↗</span></a>
          <Link href="/committees" className={styles.secondary}>All 14 committees <span aria-hidden="true">→</span></Link>
        </Reveal>
      </div>
      <div data-scroll-scene className={styles.explorer}>
        <div className={styles.mapPanel}><Map /><div className={styles.mapCaption}><span>BE PART OF THE CONVERSATION</span><p>Different perspectives.<br />One shared purpose.</p></div></div>
      </div>
    </section>
  );
}
