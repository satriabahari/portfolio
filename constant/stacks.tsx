import { BiLogoPostgresql } from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  SiCss3,
  SiExpress,
  SiFramer,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

export type stackProps = {
  title: string;
  icon: JSX.Element;
};

const iconSize = "100%";

export const STACKS: stackProps[] = [
  // {
  //   title: "HTML",
  //   icon: <SiHtml5 size={iconSize} className="text-orange-500" />,
  // },
  // {
  //   title: "CSS",
  //   icon: <SiCss3 size={iconSize} className="text-blue-500" />,
  // },
  // {
  //   title: "Bootstrap",
  //   icon: <BsFillBootstrapFill size={iconSize} className="text-purple-500" />,
  // },
  // {
  //   title: "TailwindCSS",
  //   icon: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  // },
  // {
  //   title: "PHP",
  //   icon: <SiPhp size={iconSize} className="text-blue-500" />,
  // },
  // {
  //   title: "JavaScript",
  //   icon: <SiJavascript size={iconSize} className="text-yellow-400" />,
  // },
  // {
  //   title: "TypeScript",
  //   icon: <SiTypescript size={iconSize} className="text-blue-400" />,
  // },
  // {
  //   title: "Node JS",
  //   icon: <SiNodedotjs size={iconSize} className="text-green-600" />,
  // },
  // {
  //   title: "Express.js",
  //   icon: <SiExpress size={iconSize} />,
  // },
  // {
  //   title: "React.js",
  //   icon: <SiReact size={iconSize} className="text-sky-500" />,
  // },
  // {
  //   title: "Vite",
  //   icon: <SiVite size={iconSize} className="text-purple-500" />,
  // },
  // {
  //   title: "Next.js",
  //   icon: <SiNextdotjs size={iconSize} />,
  // },
  // {
  //   title: "Framer Motion",
  //   icon: <SiFramer size={iconSize} />,
  // },
  {
    title: "MySQL",
    icon: <SiMysql size={iconSize} className="text-blue-800"/>
  },
  {
    title: "PostgreSql",
    icon: <BiLogoPostgresql size={iconSize} className="text-blue-400" />,
  },
  {
    title: "Prisma",
    icon: <SiPrisma size={iconSize} className="text-teal-500" />,
  },
  {
    title: "Github",
    icon: <SiGithub size={iconSize} />,
  },
] as const;

// type stacksProps = {
//   [key: string]: JSX.Element;
// };

// const iconSize = "100%";

// export const STACKS: stacksProps = {
//   PHP: <SiPhp size={iconSize} className="text-blue-500" />,
//   JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
//   TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
//   "Next.js": <SiNextdotjs size={iconSize} />,
//   "React.js": <SiReact size={iconSize} className="text-sky-500" />,
//   TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
//   Bootstrap: <BsFillBootstrapFill size={iconSize} className="text-purple-500" />,
//   Vite: <SiVite size={iconSize} className="text-purple-500" />,
//   PostgreSql: <BiLogoPostgresql size={iconSize} className="text-blue-400" />,
//   "React Native": <SiReact size={iconSize} className="text-sky-600" />,
//   "Framer Motion": <SiFramer size={iconSize} />,
//   "Express.js": <SiExpress size={iconSize} />,
//   HTML: <SiHtml5 size={iconSize} className="text-orange-500" />,
//   CSS: <SiCss3 size={iconSize} className="text-blue-500" />,
//   Prisma: <SiPrisma size={iconSize} className="text-teal-500" />,
//   "Node JS": <SiNodedotjs size={iconSize} className="text-green-600" />,
//   Github: <SiGithub size={iconSize} />,
// };
