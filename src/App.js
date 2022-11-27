import './App.css'
import { Route, Routes } from 'react-router-dom'

import Contact from '../layout/Contact'
import Home from '../layout/Home'
import Projects from '../layout/Projects'

function App() {
	return (
		<Routes className="text-5xl h-screen bg-red-500">
			Hello World!
			<Route path="/" element={<Home />}></Route>
			<Route path="/contact" element={<Contact />}></Route>
			<Route path="/projects" element={<Projects />}></Route>
		</Routes>
	)
}

export default App
