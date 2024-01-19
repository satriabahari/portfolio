"use client";

import { ProjectsProps } from "@/types/projects";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({
  title,
  description,
  image,
  link_demo,
  link_github,
  stacks,
}: ProjectsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="group rounded-lg border-2 border-neutral-400 bg-neutral-100 p-1 transition duration-300 hover:scale-105 dark:border-neutral-700 dark:bg-neutral-900">
        <div
          className="h-full w-full overflow-hidden rounded-md bg-gradient-to-b from-neutral-300
      to-neutral-100 dark:from-neutral-800 dark:to-neutral-900"
        >
          <div className="relative" onClick={() => handleOpenModal()}>
            <Image
              src={image}
              alt={title}
              width={400}
              height={400}
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center space-x-2 bg-neutral-900 opacity-0 duration-300 group-hover:bg-opacity-90 group-hover:opacity-100">
              <p className="text-medium text-sm text-neutral-300">
                View Project
              </p>
              <FaArrowRight size={13} className="text-neutral-50"/>
            </div>
          </div>
          <div className="space-y-2 p-4">
            <h3 className="text-lg text-neutral-900 transition duration-300 group-hover:text-cyan-600 dark:text-neutral-200 dark:group-hover:text-cyan-400">
              {title}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {description.length > 85
                ? description.substring(0, 85) + "..."
                : description}
            </p>
            <div className="flex gap-x-4 pt-2">
              {stacks.map((stack, index) => (
                <div key={index} className="h-6 w-6">
                  {stack}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isOpen ? (
        <ProjectModal
          handleCloseModal={handleCloseModal}
          title={title}
          description={description}
          image={image}
          linkDemo={link_demo}
          linkGithub={link_github}
          stacks={stacks}
        />
      ) : null}
    </>
  );
}
