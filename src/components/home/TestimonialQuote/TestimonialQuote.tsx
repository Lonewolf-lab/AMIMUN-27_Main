"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./TestimonialQuote.module.css";

const OPENING_QUOTE =
  `"Dare to be free, dare to go as far as your thought leads, and dare to carry that out in your life." – Swami Vivekananda.`;

const ALONGSIDE_PARAGRAPHS = [
  `A thought, however powerful, remains only a thought until we choose to act upon it. The courage to question, the wisdom to understand, and the conviction to turn understanding into action are what create lasting impact. It is this journey from thought to purpose, and from purpose to action, that lies at the heart of this edition of AMIMUN.`,
  `It is in this spirit that I, Saksham Shivashish, Secretary-General of AMIMUN'27, warmly welcome you to the 16th edition of the Amity International Model United Nations. AMIMUN has always been more than a simulation of diplomacy. It is a space where young minds question, engage, collaborate, and discover the responsibility that comes with having a voice.`,
];

const BELOW_PARAGRAPHS = [
  `The aim of this edition, Sapientia ad Actionem, "From wisdom into Action," calls upon us to bridge the gap between knowing and doing. In a world where information is abundant and challenges are increasingly complex, wisdom lies not simply in understanding problems, but in having the courage and clarity to respond to them. True leadership emerges when knowledge is guided by empathy, conviction is balanced with reason, and ideas are translated into purposeful action.`,
  `At AMIMUN, we believe that meaningful dialogue begins with the willingness to listen, question, and understand. Every debate offers a chance to challenge perspectives, every disagreement invites us to see beyond our own convictions, and every resolution carries the possibility of turning ideas into impact. Through diplomacy, dialogue, and collaboration, we seek to nurture delegates who are not only articulate in thought, but purposeful in action, carrying forward the belief that meaningful change begins when wisdom finds the courage to act.`,
  `This edition stands upon the vision, guidance, and unwavering support of our Founder President, Dr. Ashok K. Chauhan Sir, Chancellor Atul Chauhan Sir, Vice Chancellor Prof. (Dr.) Balvinder Shukla Ma'am, Additional Pro-Vice Chancellor Sanjeev Bansal Sir, Chairperson Dr. Laxmi Ahuja Ma'am, and Co-Chairperson Dr. Ruchi Tandon Ma'am. I remain deeply grateful for their continued encouragement and support in shaping this platform.`,
  `As we embark on the 16th edition of AMIMUN, I invite you all to think fearlessly, listen thoughtfully, and act purposefully. May this conference inspire us to move beyond ideas, to turn wisdom into action, dialogue into understanding, and conviction into meaningful change.`,
  `Welcome to AMIMUN'27. Let us not only imagine the change we wish to see, but have the courage to act upon it.`,
];

export function TestimonialQuote() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.inner}>
        <h2 className={styles.sectionHeading}>Welcome to AMIMUN&apos;27</h2>

        {/* Top: image+name left, opening quote+first paras right */}
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.photoWrap}>
              <Image
                src="/landing-page/Saksham-sg.jpeg"
                alt="Saksham Shivashish — Secretary General, AMIMUN'27"
                fill
                sizes="(max-width: 768px) 100vw, 260px"
                className={styles.photo}
              />
            </div>
            <div className={styles.identity}>
              <span className={styles.name}>Saksham Shivashish</span>
              <span className={styles.designation}>
                Secretary General, AMIMUN&apos;27
              </span>
            </div>
          </div>

          <div className={styles.right}>
            <p className={styles.openingQuote}>{OPENING_QUOTE}</p>
            {ALONGSIDE_PARAGRAPHS.map((p, i) => (
              <p key={i} className={styles.para}>
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom: full-width continuation with staggered scroll reveals */}
        <div className={styles.bottom}>
          {BELOW_PARAGRAPHS.map((p, i) => (
            <div
              key={i}
              className={styles.paraItem}
              style={{ transitionDelay: `${0.3 + i * 0.12}s` }}
            >
              <p className={styles.para}>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
