import { SKILLS } from "@/constant/skills";
import React from "react";
import SkillCard from "./SkillCard";
import MarqueeElement from "./MarqueeElement";

export default function SkillList() {
  return (
    <div className="flex w-full overflow-x-hidden gap-x-8 bg-neutral-950 py-5 border-t-2 border-b-2 border-neutral-500 mb-60">
      <MarqueeElement>
        {SKILLS.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </MarqueeElement>
    </div>
  );
}
