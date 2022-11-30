import React from 'react'

// Essentials
import FooterMenu from './FooterMenu'
import ContactMe from './ContactMe'
import Newsletter from './Newsletter'

function Footer() {
	return <div className="w-full bg-gray-300 p-10 flex flex-col md:flex-row justify-between">
		<FooterMenu/>
		<ContactMe/>
		<Newsletter/>
	</div>
}

export default Footer
