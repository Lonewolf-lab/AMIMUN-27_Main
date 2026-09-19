import Image from "next/image";
import Link from "next/link";
import styles from "./CardProjects.module.css";

export interface ProjectCardData {
  slug: string;
  title: string;
  year: string;
  imageUrl: string;
  aspectRatio?: string;
  externalUrl?: string;
}

export interface CardProjectsProps {
  layout: "2" | "3";
  projects: ProjectCardData[];
}

export function CardProjects({ layout, projects }: CardProjectsProps) {
  if (layout === "2" && projects[0]) {
    const p = projects[0];
    const CardLink = p.externalUrl ? "a" : Link;
    const linkProps = p.externalUrl
      ? { href: p.externalUrl, target: "_blank", rel: "noopener noreferrer" }
      : { href: `/projects/${p.slug}` };

    return (
      <section className={styles.section}>
        <div className={styles.layout2Container}>
          {/* @ts-ignore */}
          <CardLink {...linkProps} className={styles.layout2Card}>
            <div className={styles.cardText}>
              <h3 className={styles.cardHeading}>{p.title}</h3>
              <p className={styles.cardDate}>{p.year}</p>
            </div>
            <div className={styles.layout2Media}>
              <Image
                src={p.imageUrl}
                alt={p.title}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.cardImage}
              />
            </div>
          </CardLink>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.layout3Grid}>
        {projects.map((p, idx) => {
          const aspect =
            p.aspectRatio ||
            (idx === 0 ? "346 / 520" : idx === 1 ? "450 / 300" : "346 / 484");

          const CardLink = p.externalUrl ? "a" : Link;
          const linkProps = p.externalUrl
            ? { href: p.externalUrl, target: "_blank", rel: "noopener noreferrer" }
            : { href: `/projects/${p.slug}` };

          return (
            /* @ts-ignore */
            <CardLink
              key={p.slug}
              {...linkProps}
              className={styles.layout3Card}
            >
              <div className={styles.cardText}>
                <h3 className={styles.cardHeading}>{p.title}</h3>
                <p className={styles.cardDate}>{p.year}</p>
              </div>
              <div
                className={styles.layout3Media}
                style={{ aspectRatio: aspect }}
              >
                <Image
                  src={p.imageUrl}
                  alt={p.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className={styles.cardImage}
                />
              </div>
            </CardLink>
          );
        })}
      </div>
    </section>
  );
}
