import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/constant/projects";

export default function ProjectList() {
  return (
    <div className="grid w-full grid-cols-3 gap-x-8 gap-y-8 px-8">
      {PROJECTS.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
