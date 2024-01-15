"use client";

import { useTheme } from "next-themes";
import Marquee from "react-fast-marquee";

export default function MarqueeElement({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  return (
    <Marquee
      gradient={true}
      gradientColor={theme === "light" ? "#f5f5f5" : "#09090b"}
      direction="left"
      speed={75}
    >
      {children}
    </Marquee>
  );
}
