import { ProjectsProps } from '@/types/projects'
import Image from 'next/image'
import React from 'react'

export default function ProjectCard({title, description, image, stacks } : ProjectsProps) {
  return (
    <div className='bg-neutral-900 border-2 border-neutral-700 p-1 rounded-lg'>
      <div className='w-full h-full bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-md overflow-hidden'>
        <Image src={image} alt={title} width={400} height={400} className='object-cover'/>
        <div className='p-4 space-y-2'>
          <h3 className='text-lg text-neutral-200'>{title}</h3>
          <p className='text-sm text-neutral-400'>{description}</p>
        </div>
      </div>
    </div>
  )
}
