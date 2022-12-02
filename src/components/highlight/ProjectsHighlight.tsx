import React from 'react'
import Divider from '../ui/Divider'
import DividerOffSet from '../ui/DividerOffSet'

// Essentials
import Highlight from './highlight-template/Highlight'

function ProjectsHighlight() {
	return (
		<div className="relative">
			<Divider season="spring" />
			<DividerOffSet />
			<Highlight />
		</div>
	)
}

export default ProjectsHighlight
