import React from 'react'

// Essentials
import Divider from '../components/ui/Divider'
import DividerOffSet from '../components/ui/DividerOffSet'
import ProjectsHighlight from '../components/highlight/ProjectsHighlight'

function Home() {
	return (
		<div className="bg-slate-200 relative">
			<Divider />
			<DividerOffSet />
			<ProjectsHighlight />
		</div>
	)
}

export default Home
