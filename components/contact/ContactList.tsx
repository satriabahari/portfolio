// import { SOCIAL_MEDIA } from "@/constant/socialMedia";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

import { SocialMediaProps } from "@/types/socialMedia";
import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsTiktok as TiktokIcon,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const iconSize = 20;

export const SOCIAL_MEDIA = [
  {
    title: "Gmail",
    href: "mailto:satriaabaharii@gmail.com",
    icon: <SiGmail size={iconSize} className="text-neutral-50" />,
    backgroundColor: "bg-gradient-to-b from-red-500 to-red-800",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/satriabaharii_/",
    icon: <InstagramIcon size={iconSize} className="text-neutral-50" />,
    backgroundColor:
      "bg-gradient-to-b from-purple-700 via-pink-500 to-orange-500",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/satria-bahari/",
    icon: <LinkedinIcon size={iconSize} className="text-neutral-50" />,
    backgroundColor: "bg-gradient-to-b from-sky-700 to-sky-950",
  },
  {
    title: "Tiktok",
    href: "https://www.tiktok.com/@satriaabaharii/",
    icon: <TiktokIcon size={iconSize} className="text-neutral-50" />,
    backgroundColor: "bg-gradient-to-b from-neutral-700 to-neutral-900",
  },
  {
    title: "Github",
    href: "https://github.com/satriabahari",
    icon: <GithubIcon size={iconSize} className="text-neutral-900" />,
    backgroundColor: "bg-gradient-to-b from-neutral-200 to-neutral-500",
    textColor: "text-neutral-900",
  },
];

export default function ContactList() {
  return (
    <div className="space-y-6">
      {SOCIAL_MEDIA.map((media, index) => (
        <div
          key={index}
          className="rounded-lg border-2 border-neutral-400 bg-neutral-200 p-1 dark:border-neutral-600 dark:bg-neutral-900 hover:scale-105 duration-300"
        >
          <Link
            target="_blank"
            href={media.href}
            className={twMerge(
              "flex w-full items-center space-x-2 rounded-md px-4 py-2",
              media.backgroundColor,
            )}
          >
            {media.icon}
            <h5 className={twMerge("text-neutral-50", media.textColor)}>
              {media.title}
            </h5>
          </Link>
        </div>
      ))}
    </div>
  );
}
