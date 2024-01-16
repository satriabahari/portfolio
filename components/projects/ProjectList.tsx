import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/constant/projects";

export default function ProjectList() {
  return (
    <div className="grid w-full gap-x-8 gap-y-8 px-8 lg:grid-cols-3">
      {PROJECTS.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
