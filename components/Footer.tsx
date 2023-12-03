import React from 'react'

export default function Footer() {
  return (
    <div className='flex gap-x-1 text-sm border-t-2 border-neutral-700 w-full justify-center items-center py-4'>
      <span>©</span>
      <span>{new Date().getFullYear()}</span>
      <span>by</span>
      <span>Satria Bahari.</span>
    </div>
  )
}
