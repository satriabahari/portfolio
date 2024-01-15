import { ProjectsProps } from "@/types/projects";
import Image from "next/image";
import React from "react";

export default function ProjectCard({
  title,
  description,
  image,
  stacks,
}: ProjectsProps) {
  return (
    <div className="rounded-lg border-2 border-neutral-500 bg-neutral-200 p-1 dark:border-neutral-700 dark:bg-neutral-900">
      <div
        className="h-full w-full overflow-hidden rounded-md bg-gradient-to-b from-neutral-500
      to-neutral-200 dark:from-neutral-800 dark:to-neutral-900"
      >
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="object-cover"
        />
        <div className="space-y-2 p-4">
          <h3 className="text-lg text-neutral-900 dark:text-neutral-200">{title}</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
          <div className="flex gap-x-4 pt-2">
            {stacks.map((stack, index) => (
              <div key={index} className="h-6 w-6">
                {/* {STACKS[stack]} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
