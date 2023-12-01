"use client";

import { useTheme } from "next-themes";
import React from "react";
import {
  MdDarkMode as DarkModeIcon,
  MdLightMode as LightModeIcon,
} from "react-icons/md";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const sizeIcon = 25;

  return (
    <button onClick={toggleTheme} className="dark:text-neutral-400 dark:hover:text-neutral-100">
      {theme === "light" ? (
        <DarkModeIcon size={sizeIcon} />
      ) : (
        <LightModeIcon size={sizeIcon}/>
      )}
    </button>
  );
}
