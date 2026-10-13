"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useTilt } from "@/components/animations/useTilt";
import styles from "./Emblem.module.css";

const CHAPTERS = [
  { title: "Find your voice", body: "Take the floor. Challenge a perspective. Make your argument count.", image: "/chronicles/delegates-discussion.JPG", alt: "A delegate speaking during an AMIMUN committee session", caption: "The floor is yours.", tag: "DEBATE" },
  { title: "Build something together", body: "Meet your bloc, exchange ideas, and turn a conversation into a resolution.", image: "/chronicles/team-building.JPG", alt: "AMIMUN delegates working together", caption: "Progress starts with a conversation.", tag: "COLLABORATE" },
  { title: "Turn wisdom into action", body: "Three days of diplomacy. Perspectives and connections to take beyond the room.", image: "/chronicles/award.JPG", alt: "The AMIMUN awards ceremony", caption: "Take more than a memory home.", tag: "ACT" },
];

export function Emblem() {
  const [active, setActive] = useState(0);
  const tiltRef = useTilt<HTMLDivElement>(4);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const photo = photoRef.current?.querySelector(`[data-photo="${active}"] img`);
      if (photo) gsap.fromTo(photo, { scale: 1.08 }, { scale: 1, duration: 1.2, ease: "power3.out" });
    });
    return () => media.revert();
  }, [active]);

  return (
    <section className={styles.section} aria-labelledby="experience-heading">
      <div className={styles.copy}>
        <p className={`${styles.eyebrow} sd-reveal`}>THE AMIMUN EXPERIENCE</p>
        <h2 id="experience-heading" className={`${styles.heading} sd-reveal`}>A world of ideas.<br />A room for yours.</h2>
        <p className={`${styles.sub} sd-reveal`}>From wisdom to action, through the people you meet and the conversations you start.</p>
        <div className={styles.chapters} aria-label="Explore the AMIMUN experience">
          {CHAPTERS.map((chapter, index) => (
            <button key={chapter.tag} type="button" className={styles.chapter} aria-pressed={active === index} aria-controls="experience-photo" onClick={() => setActive(index)}>
              <span className={styles.number}>0{index + 1}</span>
              <span className={styles.chapterCopy}><span className={styles.title}>{chapter.title}</span><span className={styles.body}>{chapter.body}</span></span>
              <span className={styles.arrow} aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
      </div>
      <div data-scroll-scene className={styles.scene}>
        <div ref={tiltRef} className={styles.tilt}>
          <div className={styles.backFrame} aria-hidden="true" />
          <figure className={styles.frame} id="experience-photo">
            <div ref={photoRef} className={styles.photos}>
              {CHAPTERS.map((chapter, index) => <div key={chapter.tag} data-photo={index} className={`${styles.photo} ${index === active ? styles.photoActive : ""}`} aria-hidden={index !== active}><Image src={chapter.image} alt={chapter.alt} fill sizes="(max-width: 900px) 90vw, 48vw" /></div>)}
            </div>
            <div className={styles.tint} aria-hidden="true" />
            <span className={styles.badge}>AMIMUN&apos;27 <span>↗</span></span>
            <figcaption className={styles.caption} aria-live="polite"><span className={styles.tag}>{CHAPTERS[active].tag} / 0{active + 1}</span><p>{CHAPTERS[active].caption}</p></figcaption>
          </figure>
          <div className={styles.footnote}><span>15—17 JANUARY 2027</span><span>AMITY UNIVERSITY, NOIDA</span></div>
        </div>
      </div>
    </section>
  );
}
