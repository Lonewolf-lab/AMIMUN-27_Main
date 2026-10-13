export interface WhyAmimunPillar {
  number: string;
  title: string;
  tag?: string;
  description: string;
}

export interface CoreValue {
  number: string;
  title: string;
  category: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  highlight: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const WHY_AMIMUN_DATA = {
  hero: {
    tag: "AMIMUN'27 • 16th Edition",
    title: "About AMIMUN",
    subtitle:
      "The Amity International Model United Nations (AMIMUN) Conference serves as a distinguished platform where diplomacy meets intellectual rigor. Through dynamic committees, AMIMUN fosters an environment that enhances critical thinking, public speaking, and leadership skills, empowering participants to address pressing global issues collaboratively. Building on the legacy of sixteen milestone editions, AMIMUN has established itself as a beacon in the Model UN circuit, attracting youth diplomats from across India and over 25+ nations worldwide.",
    quote:
      "AMIMUN is not just a conference; it is a crucible where future leaders are shaped, equipped to navigate the complexities of an interconnected world.",
    author: "Delegate, AMIMUN 2027",
  },

  stats: [
    {
      value: "16+",
      label: "Consecutive Editions",
      sublabel: "A trusted benchmark in Model UN circuits since 2011",
    },
    {
      value: "14",
      label: "Dynamic Committees",
      sublabel: "From UN General Assembly to specialized crisis simulations",
    },
    {
      value: "25+",
      label: "Countries Represented",
      sublabel: "Uniting delegates, embassies, and cultural perspectives",
    },
    {
      value: "50,000+",
      label: "Alumni Network",
      sublabel: "Now leading diplomacy, policy, law, and global enterprise",
    },
  ] as StatItem[],

  pillars: [
    {
      number: "01",
      title: "Absolute Commitment",
      tag: "Leadership & Diligence",
      description:
        "The Secretariat of the Amity International Model United Nations Conference is a dedicated team of people who have continuously exhibited their diligence and knowledge. Each individual is precisely chosen to ensure that the principles of AMIMUN are upheld and implemented with the utmost dedication. The secretariat maintains the highest hospitality standard while ensuring every committee's efficient operation. Thereby, we continue to be dedicated to the promise of excellence and assure a fulfilling experience.",
    },
    {
      number: "02",
      title: "International Platform",
      tag: "Global Synergy",
      description:
        "Amity University is proud to be an institute where individuals from diverse backgrounds interact and work together. AMIMUN, abiding by the same objective, has established an international platform for incorporating ideas, opinions, and perspectives. The participation of international delegates and previous collaborations with organizations such as the United Nations Information Center for India and Bhutan (UNIC), Amnesty International, and Doctors Without Borders contribute to efficiently imparting knowledge of global affairs, diplomacy, and international policy to students while also bringing authenticity to the experience.",
    },
    {
      number: "03",
      title: "Creativity & Innovation",
      tag: "Futuristic Debate",
      description:
        "Amity University works to boost creativity among students. We are advocates of students' overall growth through participation in various disciplines and activities. By engineering realistic multi-lateral simulations, delegates are challenged to conceptualize novel diplomatic solutions to existential global dilemmas.",
    },
    {
      number: "04",
      title: "Brush Up Ingenuity",
      tag: "Strategic Mindset",
      description:
        "AMIMUN has been successful in providing delegates with a platform where they can hone and refine their strategic abilities. The AMIMUN framework encourages this manner of critical thinking to synthesize workable, realistic solutions for urgent geopolitical issues.",
    },
    {
      number: "05",
      title: "Engaging & Paramount Motions",
      tag: "High-Calibre Oratory",
      description:
        "The AMIMUN fraternity offers the most intriguing motions to encourage the highest quality of debate. Deliberation on challenging global issues will sharpen the members with the learnings of the United Nations and assist them with understanding the current world request.",
    },
  ] as WhyAmimunPillar[],

  delegateExperience: [
    {
      title: "Rigorous Procedural Authenticity",
      description:
        "Experience simulated UN parliamentary procedure, substantive background guides formulated by seasoned Executive Board members, and authentic resolution drafting standards.",
    },
    {
      title: "Holistic Youth Leadership",
      description:
        "Beyond debate, build executive presence, rapid crisis response, public policy formulation, and the capacity to unite polarized factions under common ground.",
    },
    {
      title: "Global Networking & Mentorship",
      description:
        "Connect directly with renowned ambassadors, international diplomats, industry scholars, and thousands of ambitious future leaders across universities.",
    },
  ],

  timeline: [
    {
      year: "2011",
      title: "Inception & First Assembly",
      description:
        "Amity University launched the inaugural edition of AMIMUN, establishing an independent student platform dedicated to diplomacy and international relations.",
      highlight: "Inaugural Chapter",
    },
    {
      year: "2016",
      title: "UNIC & Global Accreditation",
      description:
        "Partnered with the United Nations Information Centre for India & Bhutan (UNIC), welcoming foreign delegates and embassies to the general assembly.",
      highlight: "UN Collaboration",
    },
    {
      year: "2020",
      title: "Pioneering Digital Diplomacy",
      description:
        "Successfully transitioned 14 simultaneous committees to online hybrid formats during global lockdowns, connecting delegates across 20+ countries.",
      highlight: "Global Hybrid Innovation",
    },
    {
      year: "2027",
      title: "The 16th Milestone Edition",
      description:
        "Celebrating 16 years of academic debating excellence under the theme 'Sapientia Ad Actionem – From Wisdom to Action'.",
      highlight: "Milestone Assembly",
    },
  ] as TimelineMilestone[],

  faqs: [
    {
      question: "What makes AMIMUN distinct from other Model UN conferences?",
      answer:
        "AMIMUN combines high-level procedural authenticity with international backing from bodies like UNIC, Amnesty India, and Doctors Without Borders. Hosted on Amity University's world-class campus, it is planned and executed entirely by an independent student secretariat with over 16 years of institutional heritage.",
      category: "Distinction",
    },
    {
      question: "Is prior Model UN experience required to participate?",
      answer:
        "No prior experience is necessary. Through our Beyond AMIMUN training sessions, comprehensive background guides, and experienced Executive Board mentorship, first-time delegates receive the guidance needed to debate effectively alongside veteran delegates.",
      category: "Participation",
    },
    {
      question: "What mode will AMIMUN 2027 be hosted in?",
      answer:
        "AMIMUN 2027 is conducted in a Hybrid format (Offline on campus at Amity University Noida Sector-125, alongside select Online international committees) from 15th–17th January 2027.",
      category: "Logistics",
    },
    {
      question: "How are resolutions and committee outcomes recognized?",
      answer:
        "Resolutions crafted by delegates are compiled into official conference whitepapers aligned with United Nations Sustainable Development Goals, and outstanding delegates receive prestigious Secretariat citations, trophies, and cash commendations.",
      category: "Accreditation",
    },
  ] as FAQItem[],

  university: {
    heading: "About Amity University",
    subheading: "Where Tradition Meets Modernity",
    visionTitle: "Our Vision & Mission",
    vision:
      "To strengthen society as a whole by delivering communal, collaborative instruction, leading the world in skill development, and living up to our commitment to being the institution where modernity and tradition coexist. Our mission is to provide education, address all learning levels in the constantly changing field of contemporary events, expand the frontiers of learning and research, and examine and enhance students' overall character. We not only create great experts but well-rounded individuals. Our students understand and respect human qualities, have pride in their heritage and culture, discern what is right, and imbibe attributes of courage, conviction, and action.",
  },

  values: [
    {
      number: "01",
      title: "Academic Excellence",
      category: "Education & Pedagogy",
      description:
        "Amity University aspires to the highest quality and excellence in teaching, learning, research, and scholarship across all disciplines.",
    },
    {
      number: "02",
      title: "Integrity & Ethics",
      category: "Moral Foundation",
      description:
        "Amity University is committed to academic liberty, transparency, and accountability, as well as the highest ethical values, transparency, and professionalism.",
    },
    {
      number: "03",
      title: "Diversity & Mutual Respect",
      category: "Inclusive Culture",
      description:
        "Amity University fosters a culture of safety, trust, and mutual respect and incorporates equality and diversity into its strategy by ensuring that strategic plans are fair and inclusive.",
    },
    {
      number: "04",
      title: "Expanding Horizons of Knowledge",
      category: "Research & Discovery",
      description:
        "Amity University is inspired by research and innovation and offers broad participation in scholarly activities when pursuing change, creativity, and quality.",
    },
    {
      number: "05",
      title: "Shared Governance",
      category: "Collaborative Leadership",
      description:
        "Amity University promotes shared decision-making through a process based on collaborative consultation, open information flow, diversified participation, and collective deliberation of all stakeholders.",
    },
    {
      number: "06",
      title: "Social Responsibility",
      category: "Community Impact",
      description:
        "Amity University promotes and maintains an inclusive atmosphere in which everyone can achieve their full potential and contribute to the betterment of society.",
    },
    {
      number: "07",
      title: "Environmental Responsibility",
      category: "Sustainability & Future",
      description:
        "Amity University is entirely aware of its environmental responsibilities and strives for the principle of sustainable development to ensure any adverse environmental impact of its activities.",
    },
    {
      number: "08",
      title: "Service",
      category: "Civic Dedication",
      description:
        "Amity University strives to address its constituents' diverse personal and professional development needs while also encouraging the habit of involvement, caring, and civic responsibility by emphasizing the connection among service, excellence, and professional growth.",
    },
  ] as CoreValue[],
};
