import Image from "next/image";
import Link from "next/link";
import { ONLINE_COMMITTEES, OFFLINE_COMMITTEES } from "@/content/committees";
import styles from "./CommitteeMarquee.module.css";

const ALL = [...OFFLINE_COMMITTEES, ...ONLINE_COMMITTEES];

export function CommitteeMarquee() {
  return (
    <section className={styles.section} aria-label="AMIMUN'27 committees">
      <div className={styles.track}>
        {/* Rendered twice for a seamless loop; the copy is hidden from assistive tech. */}
        {[0, 1].map((copy) => (
          <ul key={copy} className={styles.list} aria-hidden={copy === 1 || undefined}>
            {ALL.map((c) => (
              <li key={c.slug}>
                <Link href={`/committees/${c.slug}`} className={styles.item} tabIndex={copy === 1 ? -1 : undefined}>
                  <span className={styles.logo}>
                    <Image src={c.logo} alt="" fill sizes="56px" />
                  </span>
                  <span className={styles.name}>{c.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
