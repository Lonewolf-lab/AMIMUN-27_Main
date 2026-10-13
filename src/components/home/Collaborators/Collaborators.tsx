import { Reveal } from "@/components/animations/Reveal";
import styles from "./Collaborators.module.css";

const CONTACT_MEMBERS = [
  {
    name: "Saksham Shivasish",
    role: "Secretary General",
    edition: "AMIMUN 2027",
    phone: "+91 62055 21629",
    rawPhone: "+916205521629",
  },
  {
    name: "Kshitij Singh",
    role: "Director General",
    edition: "AMIMUN 2027",
    phone: "+91 73940 62221",
    rawPhone: "+917394062221",
  },
  {
    name: "Ishaan Mathur",
    role: "Deputy Director General",
    edition: "AMIMUN 2027",
    phone: "+91 98112 26687",
    rawPhone: "+919811226687",
  },
  {
    name: "Advika Yadav",
    role: "Charge D’ Affaires",
    edition: "AMIMUN 2027",
    phone: "+91 75228 77444",
    rawPhone: "+917522877444",
  },
  {
    name: "Zara Hussain",
    role: "Chef de Cabinet",
    edition: "AMIMUN 2027",
    phone: "+91 88513 20305",
    rawPhone: "+918851320305",
  },
  {
    name: "Krish Singhani",
    role: "USG Delegate Affairs",
    edition: "AMIMUN 2027",
    phone: "+91 85276 31976",
    rawPhone: "+918527631976",
  },
];

export function Collaborators() {
  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-heading">
      <div className={styles.container}>
        <Reveal className={styles.header}>
          <p className={styles.eyebrow}>MEET THE SECRETARIAT</p>
          <h2 id="contact-heading" className={styles.mainTitle}>Questions?<br />Let&apos;s talk.</h2>
          <p className={styles.description}>For registrations, committee allotments, or logistics, reach out to the team behind AMIMUN&apos;27.</p>
          <span className={styles.headerRule} aria-hidden="true" />
          <p className={styles.note}>Select a contact to call directly.</p>
        </Reveal>
        <ul className={styles.contacts} aria-label="Secretariat contacts">
          {CONTACT_MEMBERS.map((member) => (
            <Reveal as="li" key={member.rawPhone} className={styles.contactItem}>
              <a href={`tel:${member.rawPhone}`} className={styles.contactCard} aria-label={`Call ${member.name}, ${member.role}, ${member.phone}`}>
                <span className={styles.initials} aria-hidden="true">{member.name.split(" ").map(word => word[0]).slice(0, 2).join("")}</span>
                <div className={styles.identity}>
                  <p className={styles.memberRole}>{member.role}</p>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <span className={styles.phoneNumber}>{member.phone}</span>
                </div>
                <span className={styles.arrow} aria-hidden="true">↗</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
