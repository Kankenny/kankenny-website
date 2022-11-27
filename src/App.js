import './App.css'
import { Route, Routes } from 'react-router-dom'

import Contact from './layout/Contact'
import Home from './layout/Home'
import Projects from './layout/Projects'
import Error404 from './layout/Error404'
import Header from './components/header/Header'

function App() {
	return (
		<div className="h-screen bg-red-500 text-5xl flex flex-col justify-between">
			<Header></Header>
			<Routes>
				Hello World!
				<Route path="/" element={<Home />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="/projects" element={<Projects />}></Route>
				<Route path="*" element={<Error404 />}></Route>
			</Routes>
		</div>
	)
}

export default App
