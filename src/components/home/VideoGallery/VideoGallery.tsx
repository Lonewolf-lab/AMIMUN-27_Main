"use client";

import Image from "next/image";
import { TextReveal } from "@/components/animations/TextReveal";
import styles from "./VideoGallery.module.css";

const STORIES_DATA = {
  heading: "Registration & Fees",
  description:
    "Official registrations for AMIMUN 2027 are officially open. Step into the roles of world leaders, tackle contemporary challenges, and craft inclusive, responsible, and impactful solutions. Select a category below to apply.",
  panels: [
    {
      client: "Delegate Registration",
      project: "Offline: ₹2000 | Online: ₹750 | Int: $15",
      posterUrl:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
    },
    {
      client: "International Press (IP)",
      project: "Registration Fee: ₹1700",
      posterUrl:
        "https://images.unsplash.com/photo-1575320181282-9afab399332c?q=80&w=1200&auto=format&fit=crop",
    },
  ],
};

export function VideoGallery() {
  return (
    <section className={styles.section} id="client-stories">
      <div className={styles.grid}>
        {/* Left Column: Heading & Description */}
        <div className={styles.leftColumn}>
          <p className={styles.dotHeading}>
            <span className={styles.dot} />
            <TextReveal as="span" baseDelay={100}>
              {STORIES_DATA.heading}
            </TextReveal>
          </p>

          <div className={styles.divider} />

          <p className={styles.description}>{STORIES_DATA.description}</p>
        </div>

        {/* Right Column: Video Story Cards */}
        <div className={styles.panelsColumn}>
          {STORIES_DATA.panels.map((panel) => (
            <div key={panel.client} className={styles.videoCard}>
              <div className={styles.videoTitle}>
                <span>{panel.client}</span>
                <span className={styles.projectLabel}>{panel.project}</span>
              </div>

              <div className={styles.videoPlayerWrapper}>
                <Image
                  src={panel.posterUrl}
                  alt={`${panel.client} - ${panel.project}`}
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                  className={styles.videoPoster}
                />

                <div className={styles.playButton} aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
