"use client";

import { useTheme } from "next-themes";
import React from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button
      className="text-green-500 text-xl dark:text-red-500"
      onClick={toggleTheme}
    >
      Click Me!
    </button>
  );
}
