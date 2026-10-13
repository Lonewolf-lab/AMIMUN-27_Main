"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Owns homepage scroll motion; reverts every tween and inline style on unmount. */
export function HomeMotion({ children, className }: { children: ReactNode; className: string }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const media = gsap.matchMedia();
    let disposed = false;

    media.add("(prefers-reduced-motion: no-preference)", () => {
      element.dataset.scrollMotion = "active";
      const context = gsap.context(() => {
        const sections = Array.from(element.querySelectorAll<HTMLElement>(":scope > section"));
        sections.slice(1).forEach((section) => {
          const targets = Array.from(section.querySelectorAll<HTMLElement>("[data-reveal], .sd-reveal, [data-scroll-row], h2"))
            .filter((target) => !target.parentElement?.closest("[data-reveal], .sd-reveal, [data-scroll-row]"));
          targets.forEach((target, index) => {
            gsap.fromTo(target, { autoAlpha: 0, y: 42 }, {
              autoAlpha: 1, y: 0, duration: 1, ease: "power3.out",
              delay: Math.min(index % 4 * 0.08, 0.24),
              scrollTrigger: { trigger: target, start: "top 92%", once: true },
              clearProps: "opacity,visibility,transform",
            });
          });
        });

        element.querySelectorAll<HTMLElement>(".sd-parallax").forEach((target) => {
          const speed = Number.parseFloat(getComputedStyle(target).getPropertyValue("--speed")) || 0.2;
          gsap.fromTo(target, { y: speed * 80 }, {
            y: speed * -80, ease: "none",
            scrollTrigger: { trigger: target, start: "top bottom", end: "bottom top", scrub: 1, invalidateOnRefresh: true },
          });
        });

        element.querySelectorAll<HTMLElement>("[data-scroll-scene]").forEach((scene) => {
          gsap.fromTo(scene, { y: 65, scale: 0.94, autoAlpha: 0 }, {
            y: 0, scale: 1, autoAlpha: 1, duration: 1.3, ease: "power3.out",
            scrollTrigger: { trigger: scene, start: "top 92%", once: true }, clearProps: "transform,opacity,visibility",
          });
        });

        const countdown = element.querySelector<HTMLElement>("[data-countdown]");
        if (countdown) {
          gsap.fromTo(countdown.querySelectorAll("[data-countdown-unit]"), { y: 50, rotationX: -25, autoAlpha: 0 }, {
            y: 0, rotationX: 0, autoAlpha: 1, stagger: 0.1, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: countdown, start: "top 95%", once: true }, clearProps: "transform,opacity,visibility",
          });
        }

        const progress = element.querySelector(".scroll-progress");
        if (progress) gsap.fromTo(progress, { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } });
      }, element);
      return () => { context.revert(); delete element.dataset.scrollMotion; };
    });

    // Fonts and images can change trigger positions after the first render.
    const refresh = () => { if (!disposed) ScrollTrigger.refresh(); };
    document.fonts.ready.then(refresh);
    const images = Array.from(element.querySelectorAll("img"));
    images.forEach((image) => image.addEventListener("load", refresh, { once: true }));
    const timer = window.setTimeout(refresh, 1800);
    return () => {
      disposed = true;
      window.clearTimeout(timer);
      images.forEach((image) => image.removeEventListener("load", refresh));
      media.revert();
    };
  }, []);

  return <div ref={root} className={className}>{children}</div>;
}
