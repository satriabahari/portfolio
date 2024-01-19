import React from "react";
import Profile from "./Profile";
import Menu from "./Menu";
import { MENU_ITEMS } from "@/constant/menu";
import ThemeToggle from "./ThemeToggle";
import HamburgerToggle from "./HamburgerToggle";

export default function Navbar() {
  return (
    <header className="fixed z-10 lg:left-1/2 lg:top-4 lg:-translate-x-1/2">
      <div className=" flex w-screen items-center justify-between gap-x-24 border-b-2 border-neutral-400 bg-neutral-200 px-8 py-3 lg:w-fit lg:justify-center lg:rounded-full lg:border-2 dark:border-neutral-700 dark:bg-neutral-900">
        <Profile />
        <Menu list={MENU_ITEMS} />
        <div className="flex gap-x-4">
          <ThemeToggle />
          <HamburgerToggle />
        </div>
      </div>
    </header>
  );
}
