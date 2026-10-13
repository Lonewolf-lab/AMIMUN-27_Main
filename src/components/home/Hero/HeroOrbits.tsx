"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { OFFLINE_COMMITTEES, ONLINE_COMMITTEES } from "@/content/committees";
import styles from "./HeroOrbits.module.css";

/*
 * Orbits are flat ellipses (no CSS 3D): a single rAF loop moves each item along
 * its ellipse and puts it in front of or behind the globe based on which half
 * of the orbit it is on. Cheap to render and nothing slices through the globe.
 *
 * Geometry is in % of the stage width: rx/ry are radii, roll rotates the ellipse.
 */
const RINGS = [
  { rx: 47, ry: 13, roll: -16, speed: 0.11, logos: 4, dots: 3 },
  { rx: 43, ry: 17, roll: 22, speed: -0.08, logos: 3, dots: 3 },
  { rx: 38, ry: 8, roll: 4, speed: 0.16, logos: 0, dots: 5 },
];

const LOGOS = [...OFFLINE_COMMITTEES, ...ONLINE_COMMITTEES];

type Item = { ring: number; phase: number; logo?: (typeof LOGOS)[number] };

const ITEMS: Item[] = (() => {
  const items: Item[] = [];
  let logoIndex = 0;
  RINGS.forEach((ring, r) => {
    const count = ring.logos + ring.dots;
    for (let i = 0; i < count; i++) {
      // Spread logos evenly around the ring; dots fill the gaps.
      const isLogo = Math.floor((i * ring.logos) / count) !== Math.floor(((i - 1) * ring.logos) / count);
      items.push({
        ring: r,
        phase: (i / count) * Math.PI * 2,
        logo: isLogo ? LOGOS[logoIndex++ % LOGOS.length] : undefined,
      });
    }
  });
  return items;
})();

const DEG = Math.PI / 180;

export function HeroOrbits() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const place = (t: number) => {
      ITEMS.forEach((item, i) => {
        const el = itemRefs.current[i];
        if (!el) return;
        const ring = RINGS[item.ring];
        const a = item.phase + t * ring.speed;
        const ex = Math.cos(a) * ring.rx;
        const ey = Math.sin(a) * ring.ry;
        const c = Math.cos(ring.roll * DEG);
        const s = Math.sin(ring.roll * DEG);
        const x = ex * c - ey * s;
        const y = ex * s + ey * c;
        const depth = Math.sin(a); // > 0: lower half of the ellipse = in front of the globe
        const scale = 0.78 + (depth + 1) * 0.14;
        el.style.transform = `translate(-50%, -50%) translate(${x.toFixed(2)}cqw, ${y.toFixed(2)}cqw) scale(${scale.toFixed(3)})`;
        el.style.zIndex = depth > 0 ? "3" : "1";
        el.style.opacity = (0.55 + (depth + 1) * 0.225).toFixed(3);
      });
    };

    place(0);
    if (reduce) return;

    let raf = 0;
    let running = false;
    const start = performance.now();
    const tick = (now: number) => {
      place((now - start) / 1000);
      raf = requestAnimationFrame(tick);
    };
    // Only animate while the hero is on screen.
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true;
        raf = requestAnimationFrame(tick);
      } else if (!entry.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(root);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.orbits}>
      {/* Back half of each ring, behind the globe */}
      <svg className={styles.ringsBack} viewBox="-50 -50 100 100" aria-hidden="true">
        {RINGS.map((r, i) => (
          <ellipse key={i} cx="0" cy="0" rx={r.rx} ry={r.ry} transform={`rotate(${r.roll})`} />
        ))}
      </svg>

      {/* Front half of each ring, drawn over the globe */}
      <svg className={styles.ringsFront} viewBox="-50 -50 100 100" aria-hidden="true">
        {RINGS.map((r, i) => (
          <path key={i} d={`M ${r.rx} 0 A ${r.rx} ${r.ry} 0 0 1 ${-r.rx} 0`} transform={`rotate(${r.roll})`} />
        ))}
      </svg>

      {ITEMS.map((item, i) => (
        <span
          key={i}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          className={item.logo ? styles.token : styles.dot}
        >
          {item.logo && <Image src={item.logo.logo} alt="" fill sizes="48px" />}
        </span>
      ))}
    </div>
  );
}
