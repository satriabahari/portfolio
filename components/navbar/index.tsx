import React from "react";
import Profile from "./Profile";
import Menu from "./Menu";
import { MENU_ITEMS } from "@/constant/menu";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
      <div className="flex w-fit items-center justify-center gap-x-24 rounded-full border-2 border-neutral-400 bg-neutral-200 px-8 py-3 dark:border-neutral-700 dark:bg-neutral-900">
        <Profile />
        <Menu list={MENU_ITEMS} />
        <ThemeToggle />
      </div>
    </header>
  );
}
