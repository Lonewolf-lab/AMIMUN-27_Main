"use client";

import { useEffect, useRef } from "react";
import createGlobe, { type COBEOptions } from "cobe";
import styles from "./globe.module.css";

const MOVEMENT_DAMPING = 1400;
const DEG = Math.PI / 180;

// Start with India (Noida) facing the viewer.
const NOIDA = { lat: 28.54, lon: 77.33 };
const START_PHI = Math.PI * 1.5 - NOIDA.lon * DEG;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: START_PHI,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.86, 0.9, 0.98],
  markerColor: [12 / 255, 56 / 255, 141 / 255],
  glowColor: [0.78, 0.85, 0.98],
  markers: [
    { location: [NOIDA.lat, NOIDA.lon], size: 0.1 },
    { location: [40.71, -74.0], size: 0.06 }, // New York, UN HQ
    { location: [46.2, 6.14], size: 0.05 }, // Geneva
    { location: [-1.29, 36.82], size: 0.05 }, // Nairobi
    { location: [-8.17, 113.7], size: 0.05 }, // Jember, UNEJ MUN
    { location: [-15.79, -47.88], size: 0.05 }, // Brasilia, Brazil MUN
    { location: [51.5, -0.12], size: 0.05 }, // London
    { location: [35.68, 139.69], size: 0.05 }, // Tokyo
  ],
};

interface GlobeProps {
  className?: string;
  config?: COBEOptions;
}

export function Globe({ className = "", config = GLOBE_CONFIG }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerInteracting = useRef<number | null>(null);
  // Drag offset target + its smoothed value (replaces motion's useSpring).
  const dragTarget = useRef(0);
  const dragValue = useRef(0);

  const setPointer = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current === null) return;
    dragTarget.current += (clientX - pointerInteracting.current) / MOVEMENT_DAMPING;
    pointerInteracting.current = clientX;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = canvas.offsetWidth;
    const ro = new ResizeObserver(() => (width = canvas.offsetWidth));
    ro.observe(canvas);

    let phi = config.phi ?? 0;
    const globe = createGlobe(canvas, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (pointerInteracting.current === null && !reduce) phi += 0.003;
        dragValue.current += (dragTarget.current - dragValue.current) * 0.1;
        state.phi = phi + dragValue.current;
        state.width = width * 2;
        state.height = width * 2;
      },
    });
    const fadeIn = setTimeout(() => (canvas.style.opacity = "1"), 0);

    return () => {
      clearTimeout(fadeIn);
      globe.destroy();
      ro.disconnect();
    };
  }, [config]);

  return (
    <div className={`${styles.wrap} ${className}`.trim()}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        aria-hidden="true"
        onPointerDown={(e) => setPointer(e.clientX)}
        onPointerUp={() => setPointer(null)}
        onPointerOut={() => setPointer(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  );
}

export default Globe;
