"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OFFLINE_COMMITTEES, ONLINE_COMMITTEES } from "@/content/committees";

gsap.registerPlugin(ScrollTrigger);
const COMMITTEES = [...OFFLINE_COMMITTEES, ...ONLINE_COMMITTEES];
import { Reveal } from "@/components/animations/Reveal";
import { useTilt } from "@/components/animations/useTilt";
import styles from "./NumbersBento.module.css";

/** Counts from 0 to `to` once visible, writing to the DOM directly. */
function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.textContent = "0";
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / 1400);
        el.textContent = String(Math.round(to * (1 - Math.pow(1 - p, 4))));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return <span ref={ref}>{to}</span>;
}

function TiltCell({ className, children }: { className: string; children: ReactNode }) {
  const ref = useTilt<HTMLDivElement>(6);
  return (
    <div ref={ref} className={`${styles.cell} ${className}`}>
      <div className={styles.shine} aria-hidden="true" />
      {children}
    </div>
  );
}

function CommitteeLogos() {
  const ref = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      if (!ref.current) return;
      gsap.fromTo(ref.current.children, { opacity: 0, y: 24, scale: 0.8 }, {
        opacity: 1, y: 0, scale: 1, stagger: 0.045, duration: 0.75, ease: "back.out(1.4)",
        scrollTrigger: { trigger: ref.current, start: "top 92%", once: true }, clearProps: "opacity,transform",
      });
    });
    return () => media.revert();
  }, []);
  return (
    <ul ref={ref} className={styles.logoGrid} aria-label="Explore all 14 committees">
      {COMMITTEES.map((committee, index) => (
        <li key={committee.slug} className={styles.logoEntry} style={{ "--logo-index": index } as CSSProperties}>
          <Link href={`/committees/${committee.slug}`} className={styles.logoLink} aria-label={`Explore ${committee.fullName}`}>
            <span className={styles.medallion}><Image src={committee.logo} alt="" fill sizes="64px" /></span>
            <span className={styles.logoName}>{committee.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function EditionCard() {
  const ref = useTilt<HTMLDivElement>(3);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const timeline = gsap.timeline({ scrollTrigger: { trigger: element.querySelector(`.${styles.rollingNumber}`), start: "top 92%", once: true } });
      timeline.fromTo(element.querySelector(`.${styles.editionAtmosphere}`), { scale: 0.75, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.6, ease: "power3.out" }, 0);
      element.querySelectorAll<HTMLElement>("[data-edition-digit]").forEach((strip, index) => {
        const digit = Number(strip.dataset.editionDigit);
        timeline.fromTo(strip, { y: 0, yPercent: 0 }, { yPercent: -100 * digit / (digit + 1), duration: 1.6 + index * 0.3, ease: "power4.inOut", clearProps: "transform" }, 0.1 + index * 0.1);
      });
      timeline.fromTo(element.querySelector(`.${styles.editionCaption}`), { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, clearProps: "transform,opacity" }, 0.6);
      gsap.fromTo(element.querySelector(`.${styles.worldSpin}`), { rotationY: -25, rotationZ: -14 }, {
        rotationY: 65, rotationZ: -6, ease: "none", force3D: true,
        scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: 2.5 },
      });
      timeline.fromTo(element.querySelectorAll(`.${styles.constellation} span`), { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, stagger: 0.035, ease: "power2.out" }, 0.3);
      gsap.fromTo(element.querySelector(`.${styles.orbTrack}`), { y: 14 }, { y: -14, ease: "none", force3D: true, scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: 2.5 } });
    });
    return () => media.revert();
  }, [ref]);

  return (
    <div ref={ref} className={`${styles.cell} ${styles.editions}`}>
      <div className={styles.shine} aria-hidden="true" />
      <div className={styles.editionAtmosphere} aria-hidden="true"><div className={styles.orbTrack}>
        <div className={styles.orb} />
        <div className={styles.world}><div className={styles.worldSpin}>
          {[0, 30, 60, 90, 120, 150].map(angle => <span key={angle} className={styles.meridian} style={{ "--angle": `${angle}deg` } as CSSProperties} />)}
          {[-60, -30, 0, 30, 60].map(angle => <span key={angle} className={styles.latitude} style={{ "--angle": `${angle}deg` } as CSSProperties} />)}
        </div><div className={styles.worldLight} /></div>
        <div className={styles.constellation}>{Array.from({ length: 16 }, (_, index) => <span key={index} style={{ "--star-x": `${12 + ((index * 37) % 80)}%`, "--star-y": `${12 + ((index * 23) % 52)}%`, "--star-delay": `${index * -.4}s` } as CSSProperties} />)}</div>
        <div className={styles.orbitRing} /><div className={styles.orbitRingInner} />
        <span className={styles.orbitDot} /><span className={styles.orbitDotSmall} />
      </div></div>
      <span className={styles.editionEyebrow}>A LEGACY OF DIALOGUE <span>2027</span></span>
      <p className={`${styles.big} ${styles.rollingNumber}`} aria-label="16th edition">
        <span className={styles.digitPair} aria-hidden="true">{[1, 6].map((digit, index) => <span key={index} className={styles.digitWindow}><span data-edition-digit={digit} className={styles.digitStrip} style={{ "--digit": digit } as CSSProperties}>{Array.from({ length: digit + 1 }, (_, value) => <span key={value}>{value}</span>)}</span></span>)}<sup>th</sup></span>
      </p>
      <p className={`${styles.caption} ${styles.editionCaption}`}>edition of the Amity International Model United Nations, themed Sapientia Ad Actionem.</p>
      <div className={styles.editionValues}><span>Dialogue</span><span>Diplomacy</span><span>Action</span></div>
      <div className={styles.editionLine} aria-hidden="true"><span /></div>
    </div>
  );
}

export function NumbersBento() {
  return (
    <section className={styles.section} aria-labelledby="numbers-heading">
      <Reveal>
        <h2 id="numbers-heading" className={styles.heading}>
          Sixteen editions of debate, diplomacy and drafting.
        </h2>
      </Reveal>

      <Reveal className={styles.grid} delay={120}>
        <EditionCard />

        <TiltCell className={styles.committees}>
          <Image
            src="/chronicles/delegates-discussion.JPG"
            alt="Delegates debating in committee at a previous AMIMUN"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.photo}
          />
          <div className={styles.photoTint} aria-hidden="true" />
          <CommitteeLogos />
          <div className={styles.photoText}>
            <p className={styles.mid}>
              <CountUp to={14} /> committees
            </p>
            <p className={styles.captionLight}>From the UNGA to the Lok Sabha.</p>
          </div>
        </TiltCell>

        <TiltCell className={styles.days}>
          <p className={styles.mid}>
            <CountUp to={3} /> days
          </p>
          <p className={styles.caption}>15-17 January 2027 at Amity University, Noida.</p>
        </TiltCell>

        <TiltCell className={styles.hybrid}>
          <p className={styles.mid}>Hybrid</p>
          <p className={styles.caption}>Delegates join in person or online, from India and abroad.</p>
        </TiltCell>
      </Reveal>
    </section>
  );
}
