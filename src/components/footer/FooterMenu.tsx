import React from 'react'

// Essentials
import StyledLink from '../ui/StyledLink'

function FooterMenu() {
  return (
    <div className="flex flex-col gap-y-5 p-5 mx-auto md:mx-0">
        <StyledLink linkText="Projects"/>
        <StyledLink linkText="Academics"/>
        <StyledLink linkText="Hobbies"/>
    </div>
  )
}

export default FooterMenu