import React from 'react'

// Essentials
import Title from '../ui/Title'
import HighlightDescription from './HighlightDescription'

function HighlightOverview() {
	return (
		<div className="space-y-4 mx-auto md:mx-0">
			<Title>Some Title</Title>
			<HighlightDescription>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Voluptate ratione recusandae earum vitae velit tempora, sit
				at voluptatum itaque necessitatibus deserunt quidem a
				obcaecati eaque reprehenderit cum assumenda, porro omnis
				modi nihil veritatis quis saepe quaerat aperiam. Numquam rem
				molestiae sunt quidem placeat, tenetur ullam, deleniti
				voluptate maxime, assumenda laborum.
			</HighlightDescription>
		</div>
	)
}

export default HighlightOverview
