import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "@/lib/content";
import styles from "./ProjectsCarousel.module.css";

export function ProjectsCarousel() {
  const projects = getAllProjects();

  return (
    <section className={styles.section} id="projects">
      <div className={styles.headerRow}>
        <div className={styles.titleArea}>
          <p className="label" style={{ color: "var(--color-text-secondary)" }}>
            Selected Portfolio
          </p>
          <h2 className="text--size-l">Architectural Residences</h2>
        </div>

        <Link href="/projects" className={styles.viewAllLink}>
          <span>View All Projects</span>
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => {
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
                <div className={styles.statusRow}>
                  <span>{location}</span>
                  <span>{status}</span>
                </div>

                <h3 className={styles.cardTitle}>{project.title}</h3>

                {architect && (
                  <div className={styles.metaRow}>
                    <span>Architect: {architect}</span>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
