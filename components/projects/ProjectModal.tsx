"use client";

import React, { useEffect } from "react";
import Modal from "../Modal";
import { ProjectsProps } from "@/types/projects";
import { FiArrowLeftCircle } from "react-icons/fi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { BsArrowUpRightSquare } from "react-icons/bs";
import Image from "next/image";

export default function ProjectModal({
  title,
  image,
  description,
  linkGithub,
  linkDemo,
  stacks,
  handleCloseModal,
}: any & { handleCloseModal: (isOpen: boolean) => void }) {
  return (
    <Modal>
      <div className="w-full bg-neutral-50 lg:w-[500px] dark:bg-neutral-900">
        <div className="mb-6 flex gap-x-2 text-neutral-900 dark:text-neutral-400">
          <button onClick={() => handleCloseModal(false)}>
            <FiArrowLeftCircle size={20} />
          </button>
          <p>Back</p>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
            {title}
          </h1>
          <p className="mb-4 w-full border-b border-dashed border-neutral-700 pb-6 pt-2 text-sm text-neutral-700 dark:border-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        </div>
        <div className="mb-8 flex gap-y-6 flex-col justify-between text-neutral-900 lg:flex-row dark:text-neutral-200">
          <div className="flex items-center">
            <h3 className="mr-2 text-sm">Tech Stack : </h3>
            <div className="flex gap-x-4">
              {stacks.map((stack: any, index: number) => (
                <div key={index} className="h-6 w-6">
                  {stack}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-x-2 text-neutral-600 dark:text-neutral-300">
            <div>
              <Link
                href={linkGithub}
                className="flex items-center gap-x-2 "
                target="_blank"
              >
                <FaGithub size={20} />
                <p className="text-sm font-medium">Source Code</p>
              </Link>
            </div>
            <span className="w-[1px] rounded-full border border-neutral-700 bg-neutral-700 dark:border-neutral-600"></span>
            <div>
              <Link
                href={linkDemo}
                className="flex items-center gap-x-2"
                target="_blank"
              >
                <BsArrowUpRightSquare size={20} />
                <p className="text-sm font-medium">Live Demo</p>
              </Link>
            </div>
          </div>
        </div>
        <Image src={image} width={500} height={300} alt={title} />
      </div>
    </Modal>
  );
}
