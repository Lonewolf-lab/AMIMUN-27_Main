"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTilt } from "@/components/animations/useTilt";
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
  const portraitRef = useTilt<HTMLDivElement>(3);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const element = sectionRef.current;
      if (!element) return;
      element.querySelectorAll<HTMLElement>("[data-message-reveal]").forEach((target) => {
        gsap.fromTo(target, { opacity: 0, y: 22 }, {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: target, start: "top 94%", once: true }, clearProps: "transform,opacity",
        });
      });
      gsap.fromTo(element.querySelector(`.${styles.progressFill}`), { scaleX: 0 }, {
        scaleX: 1, ease: "none", scrollTrigger: { trigger: element, start: "top 25%", end: "bottom 80%", scrub: 0.5 },
      });
    });
    return () => media.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="welcome-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>A MESSAGE FROM THE SECRETARY-GENERAL</p>
          <h2 id="welcome-heading" className={styles.sectionHeading}>Welcome to<br />AMIMUN&apos;27.</h2>
          <div className={styles.progress} aria-hidden="true"><span className={styles.progressFill} /></div>
        </header>
        <div className={styles.layout}>
          <aside className={styles.portraitColumn} aria-label="Secretary-General">
            <div data-message-reveal>
              <div ref={portraitRef} className={styles.portraitTilt}>
                <div className={styles.photoWrap}>
                  <Image src="/landing-page/Saksham-sg.jpeg" alt="Saksham Shivashish — Secretary General, AMIMUN'27" fill sizes="(max-width: 767px) 80vw, 320px" className={styles.photo} />
                  <span className={styles.photoBadge}>AMIMUN&apos;27 / SECRETARIAT</span>
                </div>
              </div>
              <div className={styles.identity}>
                <span className={styles.name}>Saksham Shivashish</span>
                <span className={styles.designation}>Secretary-General</span>
                <span className={styles.identityRule} aria-hidden="true" />
                <p className={styles.motto}>Sapientia ad Actionem<br /><span>From wisdom to action.</span></p>
              </div>
            </div>
          </aside>
          <div className={styles.letter}>
            <blockquote data-message-reveal className={styles.openingQuote}><span className={styles.quoteMark} aria-hidden="true">“</span><p>{OPENING_QUOTE}</p></blockquote>
            {[...ALONGSIDE_PARAGRAPHS, ...BELOW_PARAGRAPHS].map((paragraph, index) => <p data-message-reveal key={index} className={`${styles.para} ${index === 0 ? styles.lead : ""}`}>{paragraph}</p>)}
            <div data-message-reveal className={styles.signoff}><span>Saksham Shivashish</span><small>Secretary-General, AMIMUN&apos;27</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}
