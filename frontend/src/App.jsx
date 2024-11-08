import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchTrucks from './components/SearchTrucks.jsx'
import Dashboard from './components/Dashboard.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import Home from './components/Home.jsx'
import Random from './components/Random.jsx'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Home />} />

      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />

      <Route path='/' element={<Random />} >
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/search-trucks' element={<SearchTrucks />} />
      </Route>

    </Routes>
    </BrowserRouter>
  )
}