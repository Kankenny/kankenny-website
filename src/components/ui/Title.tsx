import React from 'react'

function Title(props?) {
	return (
		<h1 className="text-3xl font-bold text-center md:text-start">
			{props.children}
		</h1>
	)
}

export default Title
