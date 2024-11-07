import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import SearchTrucks from './components/SearchTrucks.jsx'
import Dashboard from './components/Dashboard.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />} >
      <Route path='' element={<Dashboard />} />
      <Route path='search-trucks' element={<SearchTrucks />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
