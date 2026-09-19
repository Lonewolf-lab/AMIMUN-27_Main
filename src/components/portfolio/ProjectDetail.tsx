import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/content";
import { TextReveal } from "@/components/animations/TextReveal";
import styles from "./ProjectDetail.module.css";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  // Extract key details
  const name = project.details.find((d) => d.label.toLowerCase() === "name")?.value || project.title;
  const status = project.details.find((d) => d.label.toLowerCase() === "status")?.value || "Completed";
  const location = project.details.find((d) => d.label.toLowerCase() === "location")?.value || "Melbourne, VIC";
  const architect = project.details.find((d) => d.label.toLowerCase() === "architect")?.value || "Haven Design";

  // Filter gallery blocks
  const galleryBlocks = (project.blocks || []).filter(
    (b) => b.type === "image" && b.image?.sourceUrl
  );

  return (
    <article className={styles.container}>
      <Link href="/projects" className={styles.backLink}>
        <span aria-hidden="true">&larr;</span>
        <span>Back to All Projects</span>
      </Link>

      <header className={styles.header}>
        <TextReveal as="h1" className={styles.title} baseDelay={50}>
          {project.title}
        </TextReveal>

        {project.heading && (
          <p className={styles.headingStatement}>{project.heading}</p>
        )}
      </header>

      {/* Main Hero Image */}
      {project.mainImage?.sourceUrl && (
        <div className={styles.mainImageWrapper}>
          <Image
            src={project.mainImage.sourceUrl}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1400px) 100vw, 1400px"
            className={styles.mainImage}
          />
        </div>
      )}

      {/* Metadata Bar */}
      <div className={styles.metaGrid}>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Project</span>
          <span className={styles.metaValue}>{name}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Status</span>
          <span className={styles.metaValue}>{status}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Location</span>
          <span className={styles.metaValue}>{location}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Architect</span>
          <span className={styles.metaValue}>{architect}</span>
        </div>
      </div>

      {/* Narrative Section */}
      {project.content && (
        <div className={styles.narrativeWrapper}>
          <div
            className={styles.narrativeContent}
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </div>
      )}

      {/* Architectural Gallery */}
      {galleryBlocks.length > 0 && (
        <section className={styles.gallery} aria-label="Project Gallery">
          {galleryBlocks.map((block, idx) => {
            const hasTwoImages = block.imageCount === "2" && block.imageSecondary?.sourceUrl;

            if (hasTwoImages) {
              return (
                <div key={idx} className={styles.twoColumnBlock}>
                  <div className={styles.columnImageWrapper}>
                    <Image
                      src={block.image.sourceUrl}
                      alt={`${project.title} gallery view ${idx + 1}a`}
                      fill
                      sizes="(max-width: 800px) 100vw, 50vw"
                      className={styles.galleryImage}
                    />
                  </div>
                  <div className={styles.columnImageWrapper}>
                    <Image
                      src={block.imageSecondary.sourceUrl}
                      alt={`${project.title} gallery view ${idx + 1}b`}
                      fill
                      sizes="(max-width: 800px) 100vw, 50vw"
                      className={styles.galleryImage}
                    />
                  </div>
                </div>
              );
            }

            return (
              <div key={idx} className={styles.singleImageBlock}>
                <Image
                  src={block.image.sourceUrl}
                  alt={`${project.title} gallery view ${idx + 1}`}
                  fill
                  sizes="(max-width: 1400px) 100vw, 1400px"
                  className={styles.galleryImage}
                />
              </div>
            );
          })}
        </section>
      )}

      {/* Next Project Teaser */}
      {project.nextPost && project.nextPost.link && (
        <section className={styles.nextSection}>
          <p className={styles.nextLabel}>Next Residence</p>
          <Link
            href={project.nextPost.link.url.replace(/\/$/, "")}
            className={styles.nextCard}
          >
            <div>
              <h4 className={styles.nextTitle}>{project.nextPost.heading}</h4>
            </div>
            <span className={styles.nextArrow} aria-hidden="true">
              &rarr;
            </span>
          </Link>
        </section>
      )}
    </article>
  );
}
