import { Hero } from "@/components/home/Hero/Hero";
import { ScrollGallery } from "@/components/home/ScrollGallery/ScrollGallery";
import { SectionIntro } from "@/components/home/SectionIntro/SectionIntro";
import { CardProjects } from "@/components/home/CardProjects/CardProjects";
import { Collaborators } from "@/components/home/Collaborators/Collaborators";
import { TestimonialQuote } from "@/components/home/TestimonialQuote/TestimonialQuote";
import { Awards } from "@/components/home/Awards/Awards";
import { WhatYouLearn } from "@/components/home/WhatYouLearn/WhatYouLearn";

const PHILOSOPHY_PARAGRAPHS = [
  "For the past sixteen years, AMIMUN has evolved into a leading platform where diplomacy, dialogue, and discipline meet to shape tomorrow’s global leaders. This milestone conference, themed “Sapientia Ad Actionem – From Wisdom to Action”, invites delegates to step into the roles of world leaders, tackle contemporary challenges, and craft inclusive, responsible, and impactful solutions inspired by the United Nations Sustainable Development Goals.",
  "Over three days, participants will debate, innovate policy, collaborate, and build consensus across fourteen dynamic committees. The event will also offer cultural exchange, networking opportunities, and a celebration of AMIMUN’s legacy.",
];

const FEATURED_PROJECTS_PARAGRAPHS = [
  "We are delighted to invite you to the 16th edition of the Amity International Model United Nations (AMIMUN 2027), scheduled from 15–17 January 2027 at Amity University, Noida (Sector-125), in hybrid (Online + Offline) mode.",
  "Registration is now open for Delegates (Offline: ₹2000, Online: ₹750, International: $15) and International Press (₹1700). Join us to turn wisdom into action.",
];

const HERO_PROJECT = [
  {
    slug: "delegate-registration",
    title: "Delegate Registration Form",
    year: "2027",
    imageUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop",
    externalUrl: "https://tinyurl.com/DelegateForm-amimun27",
  },
];

const SHOWCASE_PROJECTS = [
  {
    slug: "international-press",
    title: "International Press Form",
    year: "2027",
    imageUrl:
      "https://images.unsplash.com/photo-1575320181282-9afab399332c?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "346 / 520",
    externalUrl: "https://tinyurl.com/IPForm-amimun27",
  },
  {
    slug: "amity-university-noida",
    title: "Amity University, Noida",
    year: "Sector-125",
    imageUrl:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "450 / 300",
  },
  {
    slug: "theme-wisdom-to-action",
    title: "Sapientia Ad Actionem",
    year: "Theme",
    imageUrl:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "346 / 484",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Flagship Hero with Blue Overlay Wipe & Wordmark */}
      <Hero />

      {/* 2. Scroll-Driven Sticky Expanding Gallery */}
      <ScrollGallery />

      {/* 3. Secretary General's Message */}
      <TestimonialQuote />

      {/* 4. What You'll Learn */}
      <WhatYouLearn />

      {/* 5. Contact Us: Secretariat Contacts */}
      <Collaborators />

      {/* 8. Awards: Industry Recognition & Honors */}
      <Awards />
    </>
  );
}
