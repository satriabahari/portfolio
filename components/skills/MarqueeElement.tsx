import Marquee from "react-fast-marquee";

export default function MarqueeElement({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Marquee
      gradient={true}
      gradientColor="#09090b"
      direction="left"
      speed={75}
    >
      {children}
    </Marquee>
  );
}
