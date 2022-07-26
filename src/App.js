import { React } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import { Route, Routes, useLocation } from 'react-router-dom'
import styled from 'styled-components'

function App() {
	const location = useLocation()
	return (
		<DivLabel className="App">
			<Header />
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<SignIn />} />
				<Route path="/profile" element={<Profile />} />
				{/* <Route path="*" element={<Error />} /> */}
			</Routes> 
			<Footer />
		</DivLabel>
	)
}

const DivLabel = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
`

export default App
