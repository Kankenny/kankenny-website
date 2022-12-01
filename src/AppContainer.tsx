import React from 'react'

function AppContainer({ children }) {
	return (
		<div className="h-screen bg-slate-200 flex flex-col justify-between">
			{children}
		</div>
	)
}

export default AppContainer
