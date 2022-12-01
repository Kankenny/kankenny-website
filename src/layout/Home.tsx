import React from 'react'

// Essentials
import Divider from '../components/ui/Divider'
import DividerOffSet from '../components/ui/DividerOffSet'
import Highlight from '../components/highlight/Highlight'

function Home() {
	return (
		<div className="bg-red-500 relative">
			<Divider />
			<DividerOffSet />
			<Highlight/>
		</div>
	)
}

export default Home
