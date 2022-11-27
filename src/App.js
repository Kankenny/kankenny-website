import './App.css'
import { Route, Routes } from 'react-router-dom'

import Contact from '../layout/Contact'
import Home from '../layout/Home'
import Projects from '../layout/Projects'
import Error404 from '../layout/Error404'

function App() {
	return (
		<Routes className="text-5xl h-screen bg-red-500">
			Hello World!
			<Route path="/" element={<Home />}></Route>
			<Route path="/contact" element={<Contact />}></Route>
			<Route path="/projects" element={<Projects />}></Route>
			<Route path="*" element={<Error404 />}></Route>
		</Routes>
	)
}

export default App
