"use client";

import { useEffect, useRef } from "react";

/**
 * Pulls the element toward the cursor while hovered. Uses the CSS `translate`
 * property so it composes with any existing `transform` (hover lifts, scale).
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.3) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce), (hover: none)").matches) return;

    el.style.transition = `${el.style.transition ? `${el.style.transition}, ` : ""}translate 0.35s cubic-bezier(0.19, 1, 0.22, 1)`;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) * strength;
        const y = (e.clientY - (r.top + r.height / 2)) * strength;
        el.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      el.style.translate = "0px 0px";
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);

  return ref;
}
