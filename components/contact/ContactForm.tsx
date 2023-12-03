import React from 'react'
import InputField from './InputField'

export default function ContactForm() {
  return (
    <div className='w-full'>
      <form action="" className='space-y-3'>
        <InputField name='Name'/>
        <InputField name='Email'/>
        <InputField name='Message' isTextArea/>
        <button className='p-1 border border-neutral-700 bg-neutral-900 rounded-full w-full'>
          <div className='py-2 px-8 bg-neutral-800 rounded-full'>Submit</div>
        </button>
      </form>
    </div>
  )
}
