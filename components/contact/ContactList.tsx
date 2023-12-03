import { SOCIAL_MEDIA } from "@/constant/socialMedia";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default function ContactList() {
  return (
    <div>
      {SOCIAL_MEDIA.map((media, index) => (
        <Link
          href={media.href}
          key={index}
          className={clsx(
            "flex w-full items-center space-x-2 rounded-md px-4 py-2",
            media.backgroundColor,
          )}
        >
          {media.icon}
          <h5>{media.title}</h5>
        </Link>
      ))}
    </div>
  );
}
