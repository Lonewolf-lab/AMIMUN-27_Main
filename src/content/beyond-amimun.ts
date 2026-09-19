export interface BeyondAmimunSection {
  tag: string;
  title: string;
  subtitle: string;
  overview: string;
  studentBodyText: string;
  clubIntro: string;
}

export interface BeyondPillar {
  number: string;
  title: string;
  tag: string;
  description: string;
}

export const BEYOND_AMIMUN_DATA = {
  hero: {
    tag: "Student Body & Initiatives",
    title: "Beyond AMIMUN",
    subtitle:
      "The Amity International Model United Nations Club is a student-centric body that provides a dynamic forum to engage with a transforming world, combining visionary adaptability with diplomatic excellence.",
    studentBodyText:
      "AMIMUN is Amity University's only conference conceptualized, planned, and implemented by an independent student body. We have made it our responsibility to walk every delegate through the preparation process, ensuring complete mastery of their agendas.",
    clubStatement:
      "We are the MUN Club of Amity University, a group of motivated and sincere students interested in the art of Diplomacy and the world of International Relations. Led by seasoned MUNers, we strive to bring out the best in each member and promote the fundamental values of the United Nations.",
  },

  initiatives: [
    {
      number: "01",
      tag: "Skill Development",
      title: "Training Sessions",
      description:
        "We train rigorously to continuously grow through our experiences, bettering our discussions and broadening our perspectives. We endeavor to encourage each member of this club to spare no effort and encapsulate the fundamental values of the United Nations. We at the AMIMUN club continue to strive towards perfection and are proud to be at the forefront of this mission.",
    },
    {
      number: "02",
      tag: "Academic Excellence",
      title: "Webinar Series",
      description:
        "At AMIMUN Club, we are determined to build leadership, communication, debating, interpersonal, organizational, and teamwork abilities among delegates. The webinar series was conducted by experienced MUNers and debaters, helping students understand international diplomatic stances, adapt cognitive learning for social, political, and economic issues, and grasp the importance of intellectual competence.",
    },
    {
      number: "03",
      tag: "Distinguished Legacy",
      title: "Speakers & Guests",
      description:
        "The novel theme at every edition of AMIMUN demonstrates that we have always been a platform that gives a voice to those who want to make a difference in the world, no matter where they come from, bringing globally celebrated diplomats and thought leaders to our forum.",
    },
    {
      number: "04",
      tag: "International Footprint",
      title: "Global Reach",
      description:
        "AMIMUN has a history of adhering to themes that have depicted the then-global conditions and established a precedent for future editions. We have successfully carved out a niche in the international Model UN circuit and are proud to claim that we are one of the country's most prominent International MUN Conferences.",
    },
    {
      number: "05",
      tag: "Global Fellowship",
      title: "Cultural Exchange",
      description:
        "At AMIMUN clubs and conferences, students interact with people worldwide. Delegates from different ethnicities socialize with each other, exposing their intellect to unique Cultures, Traditions, and Languages while fostering lifelong friendships with peers from around the globe.",
    },
    {
      number: "06",
      tag: "Institutional Trust",
      title: "Prestigious Collaborations",
      description:
        "In previous editions of AMIMUN conferences, we had the honour of securing prestigious collaborations with the United Nations Information Centre (UNIC) and other international and national organizations such as Amnesty India, Doctors Without Borders, and HeForShe.",
    },
  ] as BeyondPillar[],

  collaborations: [
    {
      name: "United Nations Information Centre (UNIC)",
      desc: "Promoting UN mandates, global awareness, and authentic diplomatic standards.",
    },
    {
      name: "Amnesty International India",
      desc: "Championing human rights discourse, ethical responsibility, and international law.",
    },
    {
      name: "Doctors Without Borders (MSF)",
      desc: "Highlighting global humanitarian aid, medical crisis response, and neutrality.",
    },
    {
      name: "HeForShe (UN Women)",
      desc: "Advancing gender equality, systemic empowerment, and inclusive institutional leadership.",
    },
  ],
};
