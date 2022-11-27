import './App.css'
import { Route, Routes } from 'react-router-dom'

// Routes
import Contact from './layout/Contact'
import Home from './layout/Home'
import Projects from './layout/Projects'
import Error404 from './layout/Error404'

// Essentials
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
	return (
		<div className="h-screen bg-red-500 text-5xl flex flex-col justify-between">
			<Header />
			<Routes>
				Hello World!
				<Route path="/" element={<Home />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="/projects" element={<Projects />}></Route>
				<Route path="*" element={<Error404 />}></Route>
			</Routes>
			<Footer />
		</div>
	)
}

export default App
