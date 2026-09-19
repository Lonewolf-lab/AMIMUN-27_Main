export interface Member {
  name: string;
  role: string;
  image?: string;
}

export interface GuidingLightCategory {
  id: string;
  label: string;
  members: Member[];
}

export const GUIDING_LIGHT_DATA: GuidingLightCategory[] = [
  {
    id: "patron-in-chief",
    label: "Patron-in-Chief",
    members: [
      {
        name: "Dr. Ashok K. Chauhan",
        role: "Founder President, Amity Education Group",
        image: "/our guiding light/dr-ashok-k-chauhan.jpg",
      },
    ],
  },
  {
    id: "chief-patron",
    label: "Chief Patron",
    members: [
      {
        name: "Dr. Atul Chauhan",
        role: "Chancellor, Amity University & President, RBEF",
        image: "/our guiding light/dr-atul-chauhan.jpg",
      },
      {
        name: "Prof. (Dr.) Balvinder Shukla",
        role: "Vice Chancellor, AUUP",
        image: "/our guiding light/dr-balvinder-shukla.jpg",
      },
    ],
  },
  {
    id: "patrons",
    label: "Patrons",
    members: [
      {
        name: "Mr. Amol Chauhan",
        role: "Executive Director – Strategy, AUUP",
        image: "/our guiding light/mr-amol-chauhan.jpg",
      },
      {
        name: "Mr. Abhay Chauhan",
        role: "Senior Vice President, RBEF",
        image: "/our guiding light/mr-abhay-chauhan.jpeg",
      },
    ],
  },
  {
    id: "co-patron",
    label: "Co-Patron",
    members: [
      {
        name: "Dr. Sanjeev Bansal",
        role: "Addl. Pro Vice-Chancellor, AUUP",
        image: "/our guiding light/dr-sanjeev-bansal.jpg",
      },
    ],
  },
  {
    id: "advisory-committee",
    label: "Advisory Committee",
    members: [
      {
        name: "Dr. S.K. Srivastava",
        role: "Sr. Director, Vice President AFDD & Advisor at FPO; Domain Head – Education AUUP",
        image: "/our guiding light/sk-srivastava.png",
      },
      {
        name: "Prof. (Dr.) Alpana Kakkar",
        role: "Dean Students' Support & Academic Affairs",
        image: "/our guiding light/dr-alpana-kakkar.jpg",
      },
      {
        name: "Dr. Nirupama Prakash",
        role: "Director, Amity Institute of Social Sciences",
        image: "/our guiding light/nirupama-prakash.png",
      },
      {
        name: "Dr. Nitasha Hasteer",
        role: "Dy. Director – Academics & Head, Department of Information Technology, ASET",
        image: "/our guiding light/dr-nitasha-hasteer.jpg",
      },
      {
        name: "Dr. Anil Sehrawat",
        role: "Dy. Director, Amity Institute of Corporate Communication",
        image: "/our guiding light/dr-anil-sehrawat.jpg",
      },
    ],
  },
  {
    id: "organising-committee",
    label: "Organising Committee",
    members: [
      {
        name: "Prof. (Dr.) Laxmi Ahuja",
        role: "Officiating Dean Students' Welfare, Chairperson",
        image: "/our guiding light/laxmi-ahuja.jpg",
      },
      {
        name: "Dr. Ruchi Tandon",
        role: "Professor, AICC, Co-Chairperson",
        image: "/our guiding light/ruchi-tandon.jpg",
      },
      {
        name: "Dr. Lakhwinder Kaur Dhillon",
        role: "Professor, ABS",
        image: "/our guiding light/lakhwinder-kaur-dhillon.png",
      },
      {
        name: "Prof. (Dr.) Garima Aggarwal",
        role: "Professor, ASET",
        image: "/our guiding light/garima-aggarwal.jpeg",
      },
      {
        name: "Dr. Chhaya Chordia",
        role: "Director General Administration (Hostel)",
        image: "/our guiding light/chhaya-chordia.jpeg",
      },
      {
        name: "Mr. Gaurav Gupta",
        role: "VP at Amity University",
        image: "/our guiding light/gaurav-gupta.png",
      },
      {
        name: "Dr. Anjani Kumar Bhatnagar",
        role: "Additional Director & Head – Campus Placement",
        image: "/our guiding light/anjani-kumar-bhatnagar.jpeg",
      },
      {
        name: "Dr. Archana Sharma",
        role: "Associate Professor, AIFS",
        image: "/our guiding light/archana-sharma.jpeg",
      },
      {
        name: "Dr. Rajbala Simon",
        role: "Associate Professor, AIIT",
        image: "/our guiding light/rajmala.jpg",
      },
      {
        name: "Dr. Neha Jain",
        role: "Assistant Professor, AIP",
        image: "/our guiding light/dr-neha-jain.jpg",
      },
      {
        name: "Dr. Sunishtha Dhaka",
        role: "Assistant Prof, ASB",
        image: "/our guiding light/sunishtha-dhaka.jpeg",
      },
      {
        name: "Dr. Kinshuki Srivastava",
        role: "Assistant Professor, AICC",
        image: "/our guiding light/kinshuki-srivastava.jpeg",
      },
      {
        name: "Dr. Shubhra Dixit",
        role: "Assistant Professor, Department of ECE",
        image: "/our guiding light/dr-shubhra-dixit.jpg",
      },
      {
        name: "Dr. Shreesh K. Pathak",
        role: "Assistant Professor, AIIS",
        image: "/our guiding light/shreesh-k-pathak.jpeg",
      },
    ],
  },
];
