import React from "react";

export default function Footer() {
  return (
    <div className="flex w-full items-center justify-center gap-x-1 border-t-2 border-neutral-400 py-4 text-sm text-neutral-900 dark:border-neutral-700 dark:text-neutral-50">
      <span>©</span>
      <span>{new Date().getFullYear()}</span>
      <span>by</span>
      <span>Satria Bahari.</span>
    </div>
  );
}
