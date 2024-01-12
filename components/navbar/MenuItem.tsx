"use client";

import { selectedActiveSection } from "@/lib/features/menu/menuSlice";
import { useAppSelector } from "@/lib/hooks";
import { MenuItemProps } from "@/types/menu";
import Link from "next/link";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

export default function MenuItem({ title, href }: MenuItemProps) {
  const isActive = useAppSelector(selectedActiveSection);

  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  return (
    <div>
      <Link
        href={href}
        className={twMerge(
          "text-neutral-400 hover:text-neutral-100",
          isActive.toLowerCase() === title.toLowerCase()
            ? "text-neutral-200 "
            : null,
        )}
      > 
        {title}
      </Link>
    </div>
  );
}
