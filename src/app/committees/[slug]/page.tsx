import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../page.module.css";

const COMMITTEE_SLUGS = [
  "ecosoc",
  "who",
  "unodc",
  "unctc",
  "unoosa",
  "unga-sochum",
  "unicef",
  "unhrc",
  "lok-sabha",
  "unga-ecofin",
  "unga-disec",
  "uncsw",
  "aippm",
  "ip",
];

interface CommitteePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return COMMITTEE_SLUGS.map((slug) => ({ slug }));
}

function formatCommitteeName(slug: string) {
  return slug
    .split("-")
    .map((part) => part.toUpperCase())
    .join("-");
}

export default async function CommitteePage({ params }: CommitteePageProps) {
  const { slug } = await params;

  if (!COMMITTEE_SLUGS.includes(slug)) {
    notFound();
  }

  return (
    <div className={styles.pageContainer}>
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <span className={styles.heroTag}>Committee</span>
          <h1 className={styles.title}>{formatCommitteeName(slug)}</h1>
          <Link href="/committees" className={styles.backLink}>
            &larr; Back to Committees
          </Link>
        </div>
      </section>
    </div>
  );
}
