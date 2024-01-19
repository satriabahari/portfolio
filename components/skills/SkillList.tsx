import React from "react";
import SkillCard from "./SkillCard";
import MarqueeElement from "./MarqueeElement";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  SiCss3,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPrisma,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const iconSize = "100%";

const STACKS = [
  {
    title: "HTML",
    icon: <SiHtml5 size={iconSize} className="text-orange-500" />,
  },
  {
    title: "CSS",
    icon: <SiCss3 size={iconSize} className="text-blue-500" />,
  },
  {
    title: "Bootstrap",
    icon: <BsFillBootstrapFill size={iconSize} className="text-purple-500" />,
  },
  {
    title: "TailwindCSS",
    icon: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  },
  {
    title: "PHP",
    icon: <SiPhp size={iconSize} className="text-indigo-300" />,
  },
  {
    title: "JavaScript",
    icon: <SiJavascript size={iconSize} className="text-yellow-400" />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript size={iconSize} className="text-blue-500" />,
  },
  {
    title: "Node.js",
    icon: <SiNodedotjs size={iconSize} className="text-green-600" />,
  },
  {
    title: "Express.js",
    icon: <SiExpress size={iconSize} />,
  },
  {
    title: "React.js",
    icon: <SiReact size={iconSize} className="text-sky-500" />,
  },
  {
    title: "Vite",
    icon: <SiVite size={iconSize} className="text-purple-500" />,
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs size={iconSize} />,
  },
  {
    title: "Redux",
    icon: <SiRedux size={iconSize} className="text-violet-600" />,
  },
  {
    title: "Framer Motion",
    icon: <TbBrandFramerMotion size={iconSize} className="text-violet-500" />,
  },
  {
    title: "MySQL",
    icon: <SiMysql size={iconSize} />,
  },
  {
    title: "MongoDB",
    icon: <SiMongodb size={iconSize} className="text-green-500" />,
  },
  {
    title: "Prisma",
    icon: <SiPrisma size={iconSize} className="text-teal-500" />,
  },
  {
    title: "Github",
    icon: <SiGithub size={iconSize} />,
  },
];

export default function SkillList() {
  return (
    <div className="mb-32 mt-8 flex w-full gap-x-8 overflow-x-hidden border-b-2 border-t-2 border-neutral-400 bg-neutral-100 py-5 dark:border-neutral-700 dark:bg-neutral-950">
      <MarqueeElement>
        {STACKS.map((stack, index) => (
          <SkillCard key={index} {...stack} />
        ))}
      </MarqueeElement>
    </div>
  );
}
