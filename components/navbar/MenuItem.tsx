import { MenuItemProps } from "@/types/menu";
import Link from "next/link";
import React from "react";

export default function MenuItem({ title, href }: MenuItemProps) {
  return (
    <div>
      <Link href={href} className="text-neutral-400 hover:text-neutral-100">
        {title}
      </Link>
    </div>
  );
}
