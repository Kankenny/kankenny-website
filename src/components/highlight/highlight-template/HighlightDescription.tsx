import React from 'react'

function HighlightDescription(props?) {
	return (
		<div className="max-w-sm text-center md:text-start">
			{props.children}
		</div>
	)
}

export default HighlightDescription
