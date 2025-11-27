import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Login from './Pages/Login'
import MainPage from './Pages/MainPage'
import Profile from './Pages/Profile'

const App = () => {
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setAuth(true)
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        {auth && (
          <>
          <Route path='/main-page' element={<MainPage />} />
          <Route path='/profile' element={<Profile/>}/>
          </>
        )}
      </Routes>
    </Router>
  )
}

export default App
