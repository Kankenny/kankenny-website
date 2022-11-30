import React from 'react'

function AppContainer({ children }) {
	return (
		<div className="h-screen bg-red-500 text-5xl flex flex-col justify-between">
			{children}
		</div>
	)
}

export default AppContainer
