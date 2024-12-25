import React from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
const ContactUs = () => {
  return (
    <div className='my-10'>
       <div className="text-3xl flex justify-center font-bold text-amber-900 relative mb-10">
        Contact Us
        <span className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-[4%] h-1 bg-amber-900 rounded-md -my-2"></span>
      </div>
   <div className='w-8/12 mx-auto'>
      <div className='flex mb-6 space-x-6'>
        <Input type="text" placeholder="Text"  className='p-5 border-2 border-amber-900'/>
        <Input type="email" placeholder="Email" className='p-5 border-2 border-amber-900' />
      </div>
       <div className='flex mb-6'>
        <Input type="text" placeholder="Phone number" className='p-5 border-2 border-amber-900' />
      </div>
       <div className='flex'>
       <Textarea placeholder="Type your message here."  className='p-5 border-2 border-amber-900'/>
      </div>
      </div>


    </div>
  )
}

export default ContactUs
