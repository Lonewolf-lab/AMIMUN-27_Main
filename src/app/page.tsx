import { HomeMotion } from "@/components/animations/HomeMotion";
import { Hero } from "@/components/home/Hero/Hero";
import { CommitteeMarquee } from "@/components/home/CommitteeMarquee/CommitteeMarquee";
import { ScrollGallery } from "@/components/home/ScrollGallery/ScrollGallery";
import { NumbersBento } from "@/components/home/NumbersBento/NumbersBento";
import { TestimonialQuote } from "@/components/home/TestimonialQuote/TestimonialQuote";
import { WhatYouLearn } from "@/components/home/WhatYouLearn/WhatYouLearn";
import { CommitteeDeck } from "@/components/home/CommitteeDeck/CommitteeDeck";
import { Registration } from "@/components/home/Registration/Registration";
import { Awards } from "@/components/home/Awards/Awards";
import { Collaborators } from "@/components/home/Collaborators/Collaborators";
import { FinalCTA } from "@/components/home/FinalCTA/FinalCTA";
import { Emblem } from "@/components/home/Emblem/Emblem";
import { Moments } from "@/components/home/Moments/Moments";
import { Partners } from "@/components/home/Partners/Partners";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <HomeMotion className={styles.home}>
      {/* Scroll progress bar (CSS scroll timeline) */}
      <div className="scroll-progress" aria-hidden="true" />

      {/* Wordmark hero with WebGL globe */}
      <Hero />

      {/* Committee logo ribbon */}
      <CommitteeMarquee />

      {/* Scroll-driven gallery + countdown */}
      <ScrollGallery />

      {/* Edition / committees / days / mode bento */}
      <NumbersBento />

      {/* Interactive photographic conference experience */}
      <Emblem />

      {/* Secretary General's message */}
      <TestimonialQuote />

      {/* Parallax photo collage */}
      <Moments />

      {/* What you'll learn */}
      <WhatYouLearn />

      {/* 3D committee coverflow */}
      <CommitteeDeck />

      {/* Fee tiers + form links */}
      <Registration />

      {/* 3D partner logo plane */}
      <Partners />

      {/* Event details */}
      <Awards />

      {/* Secretariat contacts */}
      <Collaborators />

      {/* Closing CTA with 3D logo orbit */}
      <FinalCTA />
    </HomeMotion>
  );
}
