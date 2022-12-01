import React from 'react'

// Essentials
import SneakPeek from './SneakPeek'
import HighlightOverview from './HighlightOverview'

function Highlight() {
	return (
		<div className="flex flex-col md:flex-row justify-center p-10 gap-y-10">
			<SneakPeek />
			<HighlightOverview />
		</div>
	)
}

export default Highlight
