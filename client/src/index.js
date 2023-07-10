import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import Page6 from './components/Page6'
import Page7 from './components/Page7'

const root = ReactDOM.createRoot(document.getElementById('root'))

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{ path: '/case1', element: <Page1 /> },
	{ path: '/case2', element: <Page2 /> },
	{ path: '/case3', element: <Page3 /> },
	{ path: '/case4', element: <Page4 /> },
	{ path: '/case5', element: <Page5 /> },
	{ path: '/case6', element: <Page6 /> },
	{ path: '/case7', element: <Page7 /> }
])

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
