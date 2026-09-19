"use client";

import { useEffect, useState } from "react";
import { AMIMUNLogo } from "@/components/logo/AMIMUNLogo";
import styles from "./Preloader.module.css";

const LOGO_SIZE = 420;

export function Preloader() {
  const [stage, setStage] = useState<"assembling" | "moving" | "wiping" | "done">("assembling");
  const [targetStyle, setTargetStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const moveTimer = setTimeout(() => {
      // Measure where the header logo actually lives in the DOM
      const headerLogo = document.querySelector<HTMLElement>("#header .logoLink img, #header a img");
      if (headerLogo) {
        const rect = headerLogo.getBoundingClientRect();
        const scale = rect.width / LOGO_SIZE;
        setTargetStyle({
          top: rect.top + rect.height / 2 + "px",
          left: rect.left + rect.width / 2 + "px",
          transform: `translate(-50%, -50%) scale(${scale})`,
        });
      }
      setStage("moving");
    }, 2800);

    const wipeTimer = setTimeout(() => setStage("wiping"), 3300);
    const doneTimer = setTimeout(() => {
      setStage("done");
      if (typeof window !== "undefined" && typeof (window as any).lenis?.start === "function") {
        (window as any).lenis.start();
      }
    }, 4000);

    return () => {
      clearTimeout(moveTimer);
      clearTimeout(wipeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (stage === "done") return null;

  const isMoving = stage === "moving" || stage === "wiping";
  const isWiping = stage === "wiping";

  const containerStyle: React.CSSProperties = isMoving ? targetStyle : {};

  return (
    <div
      className={`${styles.preloader} ${isWiping ? styles.preloaderWiping : ""}`}
      aria-hidden="true"
    >
      <div
        className={`${styles.logoContainer} ${isMoving ? styles.logoMoving : ""} ${isWiping ? styles.logoFadeOut : ""}`}
        style={containerStyle}
      >
        <AMIMUNLogo size={LOGO_SIZE} animate={true} startDelay={0} />
      </div>
    </div>
  );
}
