"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect } from "react";
import { BiFace } from "react-icons/bi";

export default function Profile() {
  const { theme } = useTheme();
  return (
    <>
      {theme === "light" ? (
        <Image src="/profile_light.png" width={32} height={32} alt="Profile" />
      ) : (
        <Image src="/profile_dark.png" width={32} height={32} alt="Profile" />
      )}
    </>
  );
}
