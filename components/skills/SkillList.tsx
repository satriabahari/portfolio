import React from "react";
import SkillCard from "./SkillCard";
import MarqueeElement from "./MarqueeElement";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  SiCss3,
  SiExpress,
  SiFramer,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const iconSize = "100%";

const STACKS = [
  {
    title: "PHP",
    icon: <SiPhp size={iconSize} className="text-blue-500" />,
  },
  {
    title: "JavaScript",
    icon: <SiJavascript size={iconSize} className="text-yellow-400" />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript size={iconSize} className="text-blue-400" />,
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs size={iconSize} />,
  },
  {
    title: "React.js",
    icon: <SiReact size={iconSize} className="text-sky-500" />,
  },
  {
    title: "TailwindCSS",
    icon: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  },
  {
    title: "Bootstrap",
    icon: <BsFillBootstrapFill size={iconSize} className="text-purple-500" />,
  },
  {
    title: "Vite",
    icon: <SiVite size={iconSize} className="text-purple-500" />,
  },
  {
    title: "PostgreSql",
    icon: <BiLogoPostgresql size={iconSize} className="text-blue-400" />,
  },
  {
    title: "React Native",
    icon: <SiReact size={iconSize} className="text-sky-600" />,
  },
  {
    title: "Framer Motion",
    icon: <SiFramer size={iconSize} />,
  },
  {
    title: "Express.js",
    icon: <SiExpress size={iconSize} />,
  },
  {
    title: "HTML",
    icon: <SiHtml5 size={iconSize} className="text-orange-500" />,
  },
  {
    title: "CSS",
    icon: <SiCss3 size={iconSize} className="text-blue-500" />,
  },
  {
    title: "Prisma",
    icon: <SiPrisma size={iconSize} className="text-teal-500" />,
  },
  {
    title: "Node JS",
    icon: <SiNodedotjs size={iconSize} className="text-green-600" />,
  },
  {
    title: "Github",
    icon: <SiGithub size={iconSize} />,
  },
];

export default function SkillList() {
  return (
    <div className="mb-32 mt-8 flex w-full gap-x-8 overflow-x-hidden border-b-2 border-t-2 border-neutral-500 bg-neutral-950 py-5">
      <MarqueeElement>
        {STACKS.map((stack, index) => (
          <SkillCard key={index} {...stack} />
        ))}
      </MarqueeElement>
    </div>
  );
}
