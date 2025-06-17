import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/yanis_rhl/",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [

  {
    title: "SAE1.01 Raising awareness of computer hygiene and cybersecurity",
    description:
      'As a group, we had to create a video on our assigned topic: How to make an effective backup?',
    image: "/projects/project-1.png",
    link: "https://e-portfolio.uha.fr/user/yanis-rechal/sae-1-01",
  },
  {
    title: "SAE1.02 Introduction to computer networks",
    description:
      'We had to create a network model on Eve.ng and configure the hardware to comply with the instructions given.',
    image: "/projects/project-2.png",
    link: "https://e-portfolio.uha.fr/user/yanis-rechal/sae-1-02",
  },

  {
    title: "SAE1.03 Discover a transmission device",
    description:
      'This time we had to gather a wealth of information on the iut network in order to produce a heatmap of the flow in the school buildings.',
    image: "/projects/project-3.png",
    link: "https://e-portfolio.uha.fr/view/view.php?id=65701",
  },
  {
    title: "SAE 1.04 - Presenting Yourself on the Internet",
    description:
      'We had to create a website from HTML and CSS files about our passions to create a beautifully structured site.',
    image: "/projects/project-4.png",
    link: "https://e-portfolio.uha.fr/user/yanis-rechal/sae-du-premier-semestre",
  },
  {
    title: "SAE 1.05 :Data processing",
    description:
      'We had to create python programs to collect information on communications between PCs. The next step was to generate a script to delete the unwanted files.',
    image: "/projects/project-5.png",
    link: "https://e-portfolio.uha.fr/user/yanis-rechal/sae-1-05",
  },

] as const;


export const FOOTER_DATA = [
  {
    title: "Other Account ",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/sh5002p/",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://fr.linkedin.com/in/yanis-rechal-2b6a75295",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/yanis_rhl/",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
    ],
  },
  {
    title: "About ",
    data: [
      {
        name: "The R&T formation",
        icon: null,
        link: "https://www.iutcolmar.uha.fr/index.php/formations/diplomes/bachelor-universitaire-de-technologie-b-u-t-bac-3/b-u-t-reseaux-et-telecommunications/",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:yanisrechal1@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
