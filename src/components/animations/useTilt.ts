"use client";

import { useEffect, useRef } from "react";

/**
 * Pointer-driven 3D tilt. Writes --rx / --ry / --mx / --my CSS variables
 * straight onto the element (no React re-renders). Consumers apply them in CSS:
 * transform: perspective(900px) rotateX(var(--rx)) rotateY(var(--ry));
 * --mx / --my (0-100%) are handy for a cursor-following highlight.
 */
export function useTilt<T extends HTMLElement>(maxDeg = 8) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce), (hover: none)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        el.style.setProperty("--ry", `${(x - 0.5) * maxDeg * 2}deg`);
        el.style.setProperty("--rx", `${(0.5 - y) * maxDeg * 2}deg`);
        el.style.setProperty("--mx", `${x * 100}%`);
        el.style.setProperty("--my", `${y * 100}%`);
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [maxDeg]);

  return ref;
}
