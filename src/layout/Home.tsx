import React from 'react'

// Essentials
import ProjectsHighlight from '../components/highlight/ProjectsHighlight'
import AcademicsHighlight from '../components/highlight/AcademicsHighlight'
import HobbiesHighlight from '../components/highlight/HobbiesHighlight'
import ContactsHighlight from '../components/highlight/ContactsHighlight'
import SpringBanner from '../components/ui/banners/SpringBanner'
import SummerBanner from '../components/ui/banners/SummerBanner'
import FallBanner from '../components/ui/banners/FallBanner'
import WinterBanner from '../components/ui/banners/WinterBanner'

function Home() {
	return (
		<div className="bg-slate-200">
			<SpringBanner />
			<ProjectsHighlight />
			<SummerBanner />
			<AcademicsHighlight />
			<FallBanner />
			<HobbiesHighlight />
			<WinterBanner />
			<ContactsHighlight />
		</div>
	)
}

export default Home
