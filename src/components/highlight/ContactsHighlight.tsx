import React from 'react'

// Essentials
import Divider from '../ui/Divider'
import DividerOffSet from '../ui/DividerOffSet'
import Highlight from './highlight-template/Highlight'

function ContactsHighlight() {
	return (
		<div className="w-full relative">
			<Divider season="winter" />
			<DividerOffSet />
			<Highlight />
		</div>
	)
}

export default ContactsHighlight
