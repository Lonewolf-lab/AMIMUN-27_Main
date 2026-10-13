import { Reveal } from "@/components/animations/Reveal";
import styles from "./Awards.module.css";

export function Awards() {
  return (
    <section className={styles.section} id="awards" aria-labelledby="event-details-heading">
      <Reveal className={styles.header}>
        <p className={styles.eyebrow}>PLAN YOUR AMIMUN</p>
        <h2 id="event-details-heading">Three days.<br />A world of possibilities.</h2>
      </Reveal>
      <div className={styles.layout}>
        <Reveal className={styles.datePanel}>
          <span className={styles.dateLabel}>JANUARY 2027</span>
          <p className={styles.dates}>15<span>—</span>17</p>
          <p className={styles.dateCaption}>Friday to Sunday</p>
          <a href="/amimun-2027.ics" download className={styles.calendar}>Add to calendar <span aria-hidden="true">↗</span></a>
          <span className={styles.dateWatermark} aria-hidden="true">&apos;27</span>
        </Reveal>
        <dl className={styles.details}>
          <Reveal as="div" className={styles.row}>
            <dt><span className={styles.number}>01</span> The venue</dt>
            <dd><a href="https://www.google.com/maps/search/?api=1&query=Amity%20University%20Sector%20125%20Noida" target="_blank" rel="noopener noreferrer" className={styles.venue}>Amity University <span aria-hidden="true">↗</span></a><p>Sector 125, Noida, Uttar Pradesh</p></dd>
          </Reveal>
          <Reveal as="div" className={styles.row}>
            <dt><span className={styles.number}>02</span> Your way to join</dt>
            <dd><span className={styles.value}>In person or online</span><p>One hybrid conference. Fourteen committees.</p></dd>
          </Reveal>
          <Reveal as="div" className={styles.row}>
            <dt><span className={styles.number}>03</span> The theme</dt>
            <dd><span className={styles.value}>Sapientia ad Actionem</span><p>From wisdom to action.</p></dd>
          </Reveal>
        </dl>
      </div>
    </section>
  );
}
