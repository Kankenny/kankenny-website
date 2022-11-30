import React from 'react'
import SolidButton from '../ui/SolidButton'

function ContactMe() {
  return (
    <div className="flex flex-col py-5 gap-5 text-center">
        <p>Let's get in touch</p>
        <SolidButton buttonText='Contact Me' className='bg-red-500'/>
    </div>
  )
}

export default ContactMe