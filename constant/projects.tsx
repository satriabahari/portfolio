import { ProjectsProps } from "@/types/projects";
import {
  SiJavascript,
  SiNextdotjs,
  SiPrisma,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const iconSize = "100%";

export const PROJECTS: ProjectsProps[] = [
  {
    id: 1,
    title: "Personal Website",
    description:
      "Personal website & portfolio, built from scratch using Next.js, Typescript, and Tailwind CSS",
    image: "/portfolio.png",
    link_demo: "https://satria.vercel.app/",
    link_github: "https://github.com/satriabahari/portfolio",
    stacks: [
      <SiTailwindcss key={1} size={iconSize} className="text-cyan-300" />,
      <SiTypescript key={2} size={iconSize} className="text-blue-500" />,
      <SiNextdotjs key={3} size={iconSize} />,
    ],
  },
  {
    id: 2,
    title: "The Astronesia school website",
    description:
      "The Astronesia school website, as a final project for a software engineering course, was created from scratch using Next.js, Javascript, Tailwind CSS, Prisma and Next Auth",
    image: "/astronesia.png",
    link_demo: "",
    link_github: "https://github.com/satriabahari/rpl",
    stacks: [
      <SiTailwindcss key={1} size={iconSize} className="text-cyan-300" />,
      <SiNextdotjs key={2} size={iconSize} />,
      <SiPrisma size={iconSize} key={3} className="text-teal-500" />,
    ],
  },
  {
    id: 3,
    title: "E-commerce",
    description:
      "E-commerce website, as the task of a YouTuber named Dea Afrizal",
    image: "/e_commerce.png",
    link_demo: "",
    link_github: "https://github.com/satriabahari/e-commerce",
    stacks: [
      <SiJavascript key={1} size={iconSize} className="text-yellow-400" />,
      <SiRedux key={2} size={iconSize} className="text-violet-600" />,
    ],
  },
];
