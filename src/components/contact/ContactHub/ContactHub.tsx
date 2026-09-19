import styles from "./ContactHub.module.css";

export function ContactHub() {
  return (
    <section className={styles.hubContainer} aria-label="Studio Contact Information">
      <h2 className={styles.heading}>Studio & Direct Contacts</h2>
      <p className={styles.subheading}>
        Prefer direct communication? Reach out to Haven&apos;s project directors
        via telephone, email, or visit our design studio.
      </p>

      <div className={styles.cardsGrid}>
        {/* Telephone */}
        <a href="tel:0483987479" className={styles.card}>
          <span className={styles.cardLabel}>Direct Phone</span>
          <h3 className={styles.cardTitle}>0483 987 479</h3>
          <p className={styles.cardDetail}>
            Monday to Friday, 8:00am – 5:30pm for client and tender inquiries.
          </p>
          <span className={styles.cardAction}>
            <span>Call Studio</span>
            <span aria-hidden="true">&rarr;</span>
          </span>
        </a>

        {/* Email */}
        <a href="mailto:info@havenconstructions.com.au" className={styles.card}>
          <span className={styles.cardLabel}>Electronic Mail</span>
          <h3 className={styles.cardTitle}>info@havenconstructions.com.au</h3>
          <p className={styles.cardDetail}>
            Send architectural drawings, tenders, or direct site queries.
          </p>
          <span className={styles.cardAction}>
            <span>Send Email</span>
            <span aria-hidden="true">&rarr;</span>
          </span>
        </a>

        {/* Studio Address */}
        <a
          href="https://maps.app.goo.gl/r73tryZTTbZZgP2M7"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}>
          <span className={styles.cardLabel}>Design Studio</span>
          <h3 className={styles.cardTitle}>West Footscray</h3>
          <p className={styles.cardDetail}>
            21/46 Graingers Rd, West Footscray VIC 3012, Australia
          </p>
          <span className={styles.cardAction}>
            <span>Open in Maps</span>
            <span aria-hidden="true">&rarr;</span>
          </span>
        </a>
      </div>
    </section>
  );
}
