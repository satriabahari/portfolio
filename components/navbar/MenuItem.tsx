"use client";

import { selectedActiveSection } from "@/lib/features/menu/menuSlice";
import { useAppSelector } from "@/lib/hooks";
import { MenuItemProps } from "@/types/menu";
import Link from "next/link";

export default function MenuItem({ title, href }: MenuItemProps) {
  const isActive = useAppSelector(selectedActiveSection);

  return (
    <div>
      <Link
        href={href}
        className={`text-neutral-400 hover:text-neutral-100 ${
          isActive.toLowerCase() === title.toLowerCase() ? "text-blue-500" : null
        }`}
      >
        {title}
      </Link>
    </div>
  );
}
