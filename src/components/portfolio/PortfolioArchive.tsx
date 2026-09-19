"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/content";
import { TextReveal } from "@/components/animations/TextReveal";
import styles from "./PortfolioArchive.module.css";

interface PortfolioArchiveProps {
  projects: Project[];
}

const FILTER_SUBURBS = [
  "All",
  "Essendon",
  "Aberfeldie",
  "Moonee Ponds",
  "Ascot Vale",
  "Brunswick",
];

export function PortfolioArchive({ projects }: PortfolioArchiveProps) {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (selectedFilter === "All") {
      return projects;
    }
    return projects.filter((project) => {
      const location =
        project.details
          .find((d) => d.label.toLowerCase() === "location")
          ?.value.toLowerCase() || "";
      return location.includes(selectedFilter.toLowerCase());
    });
  }, [projects, selectedFilter]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p className={styles.label}>Selected Works</p>
        <TextReveal as="h1" className={styles.title} baseDelay={50}>
          Portfolio
        </TextReveal>
        <p className={styles.description}>
          A collection of bespoke architectural residences crafted across Melbourne&apos;s
          premier inner northwest suburbs, each representing a singular union of architectural intent
          and master construction.
        </p>

        {/* Suburb Filter Bar */}
        <div className={styles.filterBar} role="group" aria-label="Filter projects by suburb">
          {FILTER_SUBURBS.map((suburb) => {
            const isActive = selectedFilter === suburb;
            return (
              <button
                key={suburb}
                type="button"
                className={`${styles.filterButton} ${
                  isActive ? styles.filterButtonActive : ""
                }`}
                onClick={() => setSelectedFilter(suburb)}
                aria-pressed={isActive}
              >
                {suburb}
              </button>
            );
          })}
        </div>
      </header>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className={styles.grid}>
          {filteredProjects.map((project) => {
            const location =
              project.details.find((d) => d.label.toLowerCase() === "location")?.value ||
              "Melbourne, VIC";
            const status =
              project.details.find((d) => d.label.toLowerCase() === "status")?.value ||
              "Completed";
            const architect =
              project.details.find((d) => d.label.toLowerCase() === "architect")?.value;

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={styles.card}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={project.mainImage.sourceUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.cardImage}
                  />
                </div>

                <div className={styles.cardInfo}>
                  <div className={styles.metaTop}>
                    <span>{location}</span>
                    <span>{status}</span>
                  </div>

                  <h2 className={styles.cardTitle}>{project.title}</h2>

                  {architect && (
                    <span className={styles.architect}>
                      Architect: {architect}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <p>No residences currently listed for {selectedFilter}.</p>
          <p style={{ marginTop: "8px" }}>
            Discover our projects in neighbouring suburbs or{" "}
            <Link
              href="/contact"
              style={{ color: "var(--color-brand-primary)", textDecoration: "underline" }}
            >
              contact us
            </Link>{" "}
            to discuss your site.
          </p>
        </div>
      )}
    </div>
  );
}
