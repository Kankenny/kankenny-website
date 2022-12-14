import React from 'react'

// Essentials
import Highlight from './highlight-template/Highlight'
import Divider from '../ui/Divider'
import DividerOffSet from '../ui/DividerOffSet'

function AcademicsHighlight() {
	return (
		<div className="w-full relative">
			<Divider season="summer" />
			<DividerOffSet />
			<Highlight />
		</div>
	)
}

export default AcademicsHighlight
