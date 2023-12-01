import Image from "next/image";

export default function Profile() {
  return (
    <div className="bg-black rounded-full w-fit p-4">
      <Image src="/profile_dark.png" width={64} height={64} alt="Profile"/>
    </div>
  )
}
