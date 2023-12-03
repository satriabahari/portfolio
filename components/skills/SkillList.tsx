import React from "react";
import SkillCard from "./SkillCard";
import MarqueeElement from "./MarqueeElement";
import { STACKS } from "@/constant/stacks";

export default function SkillList() {
  const stacksInArray: Array<[string, JSX.Element]> = Object.entries(STACKS)
  // .sort(() => Math.random() - 0.5);
  return (
    <div className="mb-32 mt-8 flex w-full gap-x-8 overflow-x-hidden border-b-2 border-t-2 border-neutral-500 bg-neutral-950 py-5">
      <MarqueeElement>
        {stacksInArray.map(([name, icon], index) => (
          <SkillCard key={index} name={name} icon={icon} />
        ))}
      </MarqueeElement>
    </div>
  );
}
