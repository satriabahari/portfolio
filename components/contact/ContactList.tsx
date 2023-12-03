import { SOCIAL_MEDIA } from "@/constant/socialMedia";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default function ContactList() {
  return (
    <div className="space-y-6">
      {SOCIAL_MEDIA.map((media, index) => (
        <div
          key={index}
          className="rounded-lg border border-neutral-600 bg-neutral-900 p-1"
        >
          <Link
            href={media.href}
            className={clsx(
              "flex w-full items-center space-x-2 rounded-md px-4 py-2",
              media.backgroundColor,
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
