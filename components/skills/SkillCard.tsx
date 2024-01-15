import { stackProps } from "@/constant/stacks";
import { twMerge } from "tailwind-merge";

export default function SkillCard({ icon, title }: stackProps) {
  return (
    <div className="px-4">
      <div
        className={
          "flex w-full space-x-2 rounded-full bg-neutral-300 px-4 py-2 dark:bg-neutral-800"
        }
      >
        <div className="h-6 w-6">{icon}</div>
        <div className="whitespace-nowrap">{title}</div>
      </div>
    </div>
  );
}
