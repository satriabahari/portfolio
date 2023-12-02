import Image from "next/image";

type ProfileProps = {
  size: number;
  source: string;
};

export default function Profile({ size, source }: ProfileProps) {
  return (
    <div className="mb-8 rounded-full bg-neutral-950 overflow-hidden bg-cover">
      <Image src={source} width={size} height={size} alt="Profile"/>
    </div>
  );
}
