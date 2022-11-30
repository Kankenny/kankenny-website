import React from 'react'

function StyledLink({ linkText }) {
	const activeLinkClasses = `text-sm font-bold md:text-xl md:font-thin bg-secondary rounded-full text-black group transition-all duration-200 ease-in-out cursor-pointer select-none`

	// const inactiveLinkClasses = `text-sm group transition-all duration-200 ease-in-out `

	return (
		<div className={activeLinkClasses}>
			<span
				className={`bg-left-bottom bg-gradient-to-r bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-black from-black to-black `}
			>
				{linkText}
			</span>
		</div>
	)
}

export default StyledLink
