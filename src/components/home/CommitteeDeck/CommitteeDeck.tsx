"use client";

import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ONLINE_COMMITTEES, OFFLINE_COMMITTEES } from "@/content/committees";
import { Reveal } from "@/components/animations/Reveal";
import styles from "./CommitteeDeck.module.css";

const DECK = [
  ...OFFLINE_COMMITTEES.map((c) => ({ ...c, mode: "Offline" })),
  ...ONLINE_COMMITTEES.map((c) => ({ ...c, mode: "Online" })),
];
const VISIBLE_SIDE = 3;

export function CommitteeDeck() {
  const [active, setActive] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const dragged = useRef(false);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [focused, setFocused] = useState(false);
  const dragStart = useRef<number | null>(null);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let interval: number | undefined;
    const sync = () => {
      window.clearInterval(interval);
      if (paused || interacting || focused || motion.matches || document.hidden) return;
      interval = window.setInterval(() => {
        if (dragStart.current === null) setActive((value) => (value + 1) % DECK.length);
      }, 4500);
    };
    sync();
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      window.clearInterval(interval);
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [paused, interacting, focused, active]);

  const go = (next: number) => setActive((next + DECK.length) % DECK.length);

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(active + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(active - 1); }
  };
  const onPointerDown = (e: PointerEvent) => {
    if (!e.isPrimary || e.button !== 0) return;
    dragStart.current = e.clientX;
    dragged.current = false;
  };
  const resetDrag = () => {
    dragStart.current = null;
    stageRef.current?.style.setProperty("--drag", "0px");
    stageRef.current?.removeAttribute("data-dragging");
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    const distance = e.clientX - dragStart.current;
    if (Math.abs(distance) > 8) {
      dragged.current = true;
      e.currentTarget.setPointerCapture(e.pointerId);
      e.currentTarget.dataset.dragging = "true";
    }
    e.currentTarget.style.setProperty("--drag", `${Math.max(-65, Math.min(65, distance * 0.35))}px`);
  };
  const onPointerUp = (e: PointerEvent) => {
    if (dragStart.current === null) return;
    const dx = e.clientX - dragStart.current;
    resetDrag();
    if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1));
  };

  const current = DECK[active];

  return (
    <section className={styles.section} aria-labelledby="deck-heading"
      onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false); }}
    >
      <div className={styles.backdrop} aria-hidden="true" />

      <Reveal className={styles.header}>
        <h2 id="deck-heading" className={styles.heading}>
          Pick the room you want to argue in.
        </h2>
      </Reveal>

      <div
        ref={stageRef}
        data-scroll-scene className={styles.stage}
        role="group"
        aria-roledescription="carousel"
        aria-label="Committees"
        tabIndex={0}
        onKeyDown={onKey}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerMove={onPointerMove}
        onPointerCancel={resetDrag}
        onLostPointerCapture={resetDrag}
        onClickCapture={(e) => { if (dragged.current) { e.preventDefault(); e.stopPropagation(); dragged.current = false; } }}
      >
        {DECK.map((c, i) => {
          // Shortest signed distance around the loop.
          let offset = i - active;
          if (offset > DECK.length / 2) offset -= DECK.length;
          if (offset < -DECK.length / 2) offset += DECK.length;
          const hidden = Math.abs(offset) > VISIBLE_SIDE;
          const isActive = offset === 0;

          return (
            <button
              key={c.slug}
              type="button"
              className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
              style={{ "--o": offset, "--abs": Math.abs(offset) } as CSSProperties}
              aria-hidden={hidden || undefined}
              tabIndex={-1}
              aria-label={`${c.name}, ${c.mode}${isActive ? ", selected" : ""}`}
              onPointerMove={(e) => {
                if (!isActive || window.matchMedia("(prefers-reduced-motion: reduce), (hover: none)").matches) return;
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--shine-x", `${(e.clientX - rect.left) / rect.width * 100}%`);
                e.currentTarget.style.setProperty("--shine-y", `${(e.clientY - rect.top) / rect.height * 100}%`);
              }}
              onClick={() => go(i)}
              data-hidden={hidden || undefined}
            >
              <span className={styles.cardGlow} aria-hidden="true" />
              <span className={styles.logo}>
                <Image src={c.logo} alt="" fill sizes="140px" />
              </span>
              <span className={styles.name}>{c.name}</span>
              <span className={styles.mode}>{c.mode}</span>
            </button>
          );
        })}
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.arrow} onClick={() => go(active - 1)} aria-label="Previous committee">
          <span aria-hidden="true">&larr;</span>
        </button>
        <div className={styles.detail} aria-live={paused || interacting || focused ? "polite" : "off"} aria-atomic="true"><div key={current.slug} className={styles.detailContent}>
          <Link href={`/committees/${current.slug}`} className={styles.committeeLink}>
            {current.fullName.replace(" — ", ", ")} <span aria-hidden="true">↗</span>
          </Link>
        </div></div>
        <button type="button" className={styles.arrow} onClick={() => go(active + 1)} aria-label="Next committee">
          <span aria-hidden="true">&rarr;</span>
        </button>
        <button type="button" className={styles.playback} aria-label={paused ? "Resume autoplay" : "Pause autoplay"} title={paused ? "Resume autoplay" : "Pause autoplay"} aria-pressed={paused} onClick={() => setPaused(!paused)}><span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span></button>
      </div>
    </section>
  );
}
