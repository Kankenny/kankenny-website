import React from 'react'

// Essentials
import Input from '../ui/Input'

function Newsletter() {
  return (
    <div className="flex flex-col py-5 gap-5 text-center">
        <p>Subscribe to my Newsletter</p>
        <Input placeholder="johndoe@gmail.com"/>
    </div>
  )
}

export default Newsletter