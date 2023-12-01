import React from "react";
import Profile from "./Profile";
import Menu from "./Menu";
import { MENU_ITEMS } from "@/constant/menu";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="fixed left-1/2 top-4 -translate-x-1/2">
      <div className="flex w-fit items-center justify-center gap-x-24 rounded-full border border-neutral-400 bg-neutral-900 px-8 py-3">
        <Profile />
        <Menu list={MENU_ITEMS} />
        <ThemeToggle />
      </div>
    </header>
  );
}
