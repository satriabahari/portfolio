import { SocialMediaProps } from "@/types/socialMedia";
import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsTiktok as TiktokIcon,
} from "react-icons/bs";

const iconSize = 20;

export const SOCIAL_MEDIA: SocialMediaProps[] = [
  {
    title: "Github",
    href: "https://github.com/satriabahari",
    icon: <GithubIcon size={iconSize} />,
    backgroundColor: "bg-neutral-800",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/satriabaharii_/",
    icon: <InstagramIcon size={iconSize} />,
    backgroundColor: "bg-fuchsia-500",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/satria-bahari/",
    icon: <LinkedinIcon size={iconSize} />,
    backgroundColor: "bg-blue-600",
  },
  {
    title: "Tiktok",
    href: "https://www.tiktok.com/@satriaabaharii/",
    icon: <TiktokIcon size={iconSize} />,
    backgroundColor: "bg-neutral-900",
  },
];
