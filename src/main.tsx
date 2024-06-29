import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './components/Dashboard.tsx'
import WinesList from './components/WinesList.tsx'
import WineDetails from './components/WineDetails.tsx'
import { MessageProvider } from './context/MessageContext.tsx'
import WineForm from './components/WineForm.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <Navigate replace to={'/dashboard'} /> },
			{ path: '/dashboard', element: <Dashboard /> },
			{ path: '/wines', element: <WinesList /> },
			{ path: '/wines/:id', element: <WineDetails /> },
			{ path: '/wines/create', element: <WineForm /> },
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MessageProvider>
			<RouterProvider router={router} />
		</MessageProvider>
	</React.StrictMode>,
)
