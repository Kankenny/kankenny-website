import React from 'react'

// Essentials
import Highlight from './highlight-template/Highlight'
import Divider from '../ui/Divider'
import DividerOffSet from '../ui/DividerOffSet'

function HobbiesHighlight() {
	return (
		<div className="w-full relative">
			<Divider season="fall" />
			<DividerOffSet />
			<Highlight />
		</div>
	)
}

export default HobbiesHighlight
