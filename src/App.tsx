import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Routes
import Contact from './layout/Contact'
import Home from './layout/Home'
import Projects from './layout/Projects'
import Error404 from './layout/Error404'

// Essentials
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

// Containers
import AppContainer from './AppContainer'

function App() {
	return (
		<AppContainer>
			<Header />
			<Routes>
				Hello World! Still in development
				<Route path="/" element={<Home />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="/projects" element={<Projects />}></Route>
				<Route path="*" element={<Error404 />}></Route>
			</Routes>
			<Footer />
		</AppContainer>
	)
}

export default App
