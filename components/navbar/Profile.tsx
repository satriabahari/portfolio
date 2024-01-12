import Image from "next/image";
import React from "react";
import { BiFace } from "react-icons/bi";

export default function Profile() {
  return (
    <>
      <Image src="/profile_dark.png" width={32} height={32} alt="Profile" />
    </>
  );
}
