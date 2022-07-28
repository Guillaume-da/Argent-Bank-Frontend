import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import store from './store/store'

const GlobalStyle = createGlobalStyle`
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // Add some reset css rules
  * {
  
  ol, ul {
    list-style: none;
  }
  body {
    margin: 0;
    padding: 0;
  }
  .red {
    background: red;
    border: red;
    border-style: outset;
    border-width: 2px;
  }
}
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyle />
			<Router>
				<Routes>
					<Route path="/*" element={<App />} />
				</Routes>
			</Router>
		</Provider>
	</React.StrictMode>
)
