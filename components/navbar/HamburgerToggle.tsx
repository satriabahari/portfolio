"use client";

import React, { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import MenuPop from "./MenuPop";

export default function HamburgerToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className="block rounded-full border border-neutral-400 bg-neutral-300 p-3 text-neutral-900 lg:hidden dark:border-neutral-500 dark:bg-neutral-800 dark:text-neutral-50"
      onClick={handleClick}
    >
      {isOpen ? (
        <>
          <RxCross1 />
          <MenuPop />
        </>
      ) : (
        <RxHamburgerMenu />
      )}
    </button>
  );
}
