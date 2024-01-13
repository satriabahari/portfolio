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
    icon: <SiGmail size={iconSize} className="text-red-500" />,
    backgroundColor: "bg-gradient-to-b from-neutral-200 to-neutral-400",
    textColor: "text-red-500",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/satriabaharii_/",
    icon: <InstagramIcon size={iconSize} />,
    backgroundColor:
      "bg-gradient-to-b from-purple-700 via-pink-500 to-orange-500",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/satria-bahari/",
    icon: <LinkedinIcon size={iconSize} />,
    backgroundColor: "bg-gradient-to-b from-sky-700 to-sky-950",
  },
  {
    title: "Tiktok",
    href: "https://www.tiktok.com/@satriaabaharii/",
    icon: <TiktokIcon size={iconSize} />,
    backgroundColor: "bg-gradient-to-b from-neutral-700 to-neutral-900",
  },
  {
    title: "Github",
    href: "https://github.com/satriabahari",
    icon: <GithubIcon size={iconSize} />,
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
          className="rounded-lg border border-neutral-600 bg-neutral-900 p-1"
        >
          <Link
            target="_blank"
            href={media.href}
            className={twMerge(
              "flex w-full items-center space-x-2 rounded-md px-4 py-2",
              media.backgroundColor,
              media.textColor,
            )}
          >
            {media.icon}
            <h5>{media.title}</h5>
          </Link>
        </div>
      ))}
    </div>
  );
}
