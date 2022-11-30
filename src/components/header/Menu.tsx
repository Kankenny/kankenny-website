import React from 'react'

//Containers
import StyledLink from '../ui/StyledLink'

function Menu() {
	return (
		<div className="absolute top-0 right-0">
			<div className="flex justify-between mx-auto p-10 gap-5 md:gap-20">
				<StyledLink linkText="Projects" />
				<StyledLink linkText="Academics" />
				<StyledLink linkText="Hobbies" />
				<StyledLink linkText="Contact Me" />
			</div>
		</div>
	)
}

export default Menu
