import Link from "next/link";
import Image from "next/image";
import { TextReveal } from "@/components/animations/TextReveal";
import styles from "./page.module.css";

const ONLINE_COMMITTEES = [
  { name: "ECOSOC", slug: "ecosoc", logo: "/committees/ecosoc.png" },
  { name: "WHO", slug: "who", logo: "/committees/WHO.png" },
  { name: "UNODC", slug: "unodc", logo: "/committees/unodc.png" },
];

const OFFLINE_COMMITTEES = [
  { name: "UNCTC", slug: "unctc", logo: "/committees/unctc.svg" },
  { name: "UNOOSA", slug: "unoosa", logo: "/committees/unoosa.svg" },
  { name: "UNGA-SOCHUM", slug: "unga-sochum", logo: "/committees/unga-sochum.svg" },
  { name: "UNICEF", slug: "unicef", logo: "/committees/unicef.png" },
  { name: "UNHRC", slug: "unhrc", logo: "/committees/unhrc.png" },
  { name: "Lok Sabha", slug: "lok-sabha", logo: "/committees/lok%20sabha.png" },
  { name: "UNGA-ECOFIN", slug: "unga-ecofin", logo: "/committees/unga-ecofin.svg" },
  { name: "UNGA-DISEC", slug: "unga-disec", logo: "/committees/unga-disec.png" },
  { name: "UNCSW", slug: "uncsw", logo: "/committees/uncsw.png" },
  { name: "AIPPM", slug: "aippm", logo: "/committees/aippm.svg" },
  { name: "IP", slug: "ip", logo: "/committees/ip.png" },
];

function CommitteeSection({
  label,
  committees,
}: {
  label: string;
  committees: typeof ONLINE_COMMITTEES;
}) {
  return (
    <section className={styles.committeeSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>{label}</span>
        <div className={styles.divider} />
      </div>
      <div className={styles.committeeGrid}>
        {label === "Offline Committees" ? (
          <>
            {committees.slice(0, -2).map((committee, index) => (
              <Link
                key={committee.slug}
                href={`/committees/${committee.slug}`}
                className={styles.committeeCard}
              >
                <span className={styles.cardIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.logoArea}>
                  <Image
                    src={committee.logo}
                    alt={`${committee.name} logo`}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                </span>

                <h2>{committee.name}</h2>
                <span className={styles.cardArrow} aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            ))}

            <div className={styles.finalRow}>
              {committees.slice(-2).map((committee, index) => {
                const cardNumber = committees.length - 1 + index;

                return (
                  <Link
                    key={committee.slug}
                    href={`/committees/${committee.slug}`}
                    className={styles.committeeCard}
                  >
                    <span className={styles.cardIndex} aria-hidden="true">
                      {String(cardNumber).padStart(2, "0")}
                    </span>

                    <span className={styles.logoArea}>
                      <Image
                        src={committee.logo}
                        alt={`${committee.name} logo`}
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                      />
                    </span>

                    <h2>{committee.name}</h2>
                    <span className={styles.cardArrow} aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                );
              })}
            </div>
          </>
        ) : (
          committees.map((committee, index) => (
            <Link
              key={committee.slug}
              href={`/committees/${committee.slug}`}
              className={styles.committeeCard}
            >
              <span className={styles.cardIndex} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className={styles.logoArea}>
                <Image
                  src={committee.logo}
                  alt={`${committee.name} logo`}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
              </span>

              <h2>{committee.name}</h2>
              <span className={styles.cardArrow} aria-hidden="true">
                &rarr;
              </span>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}

export default function CommitteesPage() {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <span className={styles.heroTag}>AMIMUN&apos;27</span>
          <h1 className={styles.title}>
            <TextReveal as="span" baseDelay={100}>
              Committees
            </TextReveal>
          </h1>
          <p className={styles.heroSubtitle}>
            Choose your forum for debate, diplomacy, and decisive action.
          </p>
        </div>
      </section>

      <main className={styles.committeesContent}>
        <CommitteeSection label="Online Committees" committees={ONLINE_COMMITTEES} />
        <CommitteeSection label="Offline Committees" committees={OFFLINE_COMMITTEES} />
      </main>
    </div>
  );
}
