export type Committee = {
  name: string;
  fullName: string;
  slug: string;
  logo: string;
};

export const ONLINE_COMMITTEES: Committee[] = [
  {
    name: "ECOSOC",
    fullName: "United Nations Economic and Social Council",
    slug: "ecosoc",
    logo: "/committees/ecosoc.png",
  },
  {
    name: "WHO",
    fullName: "World Health Organization",
    slug: "who",
    logo: "/committees/WHO.png",
  },
  {
    name: "UNODC",
    fullName: "United Nations Office on Drugs and Crime",
    slug: "unodc",
    logo: "/committees/unodc.png",
  },
];

export const OFFLINE_COMMITTEES: Committee[] = [
  {
    name: "UNCTC",
    fullName: "United Nations Counter-Terrorism Committee",
    slug: "unctc",
    logo: "/committees/unctc.svg",
  },
  {
    name: "UNOOSA",
    fullName: "United Nations Office for Outer Space Affairs",
    slug: "unoosa",
    logo: "/committees/unoosa.svg",
  },
  {
    name: "UNGA-SOCHUM",
    fullName: "United Nations General Assembly — Social, Humanitarian and Cultural Affairs",
    slug: "unga-sochum",
    logo: "/committees/unga-sochum.svg",
  },
  {
    name: "UNICEF",
    fullName: "United Nations Children's Fund",
    slug: "unicef",
    logo: "/committees/unicef.png",
  },
  {
    name: "UNHRC",
    fullName: "United Nations Human Rights Council",
    slug: "unhrc",
    logo: "/committees/unhrc.png",
  },
  {
    name: "Lok Sabha",
    fullName: "Lok Sabha — House of the People",
    slug: "lok-sabha",
    logo: "/committees/lok%20sabha.png",
  },
  {
    name: "UNGA-ECOFIN",
    fullName: "United Nations General Assembly — Economic and Financial Affairs",
    slug: "unga-ecofin",
    logo: "/committees/unga-ecofin.svg",
  },
  {
    name: "UNGA-DISEC",
    fullName: "United Nations General Assembly — Disarmament and International Security",
    slug: "unga-disec",
    logo: "/committees/unga-disec.png",
  },
  {
    name: "UNCSW",
    fullName: "United Nations Commission on the Status of Women",
    slug: "uncsw",
    logo: "/committees/uncsw.png",
  },
  {
    name: "AIPPM",
    fullName: "All India Political Parties Meet",
    slug: "aippm",
    logo: "/committees/aippm.svg",
  },
  {
    name: "IP",
    fullName: "International Press",
    slug: "ip",
    logo: "/committees/ip.png",
  },
];
