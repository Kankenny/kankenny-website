import React from 'react'

// Essentials
import Banner from './Banner'
import Menu from './Menu'

function Header() {
	return (
		<div className="w-full relative">
			<Menu />
			<Banner />
		</div>
	)
}

export default Header
