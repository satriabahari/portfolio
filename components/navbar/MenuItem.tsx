"use client";

import { selectedActiveSection } from "@/lib/features/menu/menuSlice";
import { useAppSelector } from "@/lib/hooks";
import { MenuItemProps } from "@/types/menu";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function MenuItem({ title, href }: MenuItemProps) {
  const isActive = useAppSelector(selectedActiveSection);

  return (
    <div>
      <Link
        href={href}
        className={twMerge(
          "text-xl text-neutral-500 hover:text-neutral-900 lg:text-base dark:text-neutral-400 dark:hover:text-neutral-100",
          isActive.toLowerCase() === title.toLowerCase()
            ? "lg:text-neutral-900 lg:dark:text-neutral-200 "
            : null,
        )}
      >
        {title}
      </Link>
    </div>
  );
}
