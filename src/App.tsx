import React from 'react'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Footer2 from './components/Footer2'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
      <Footer2 />
    </BrowserRouter>
  )
}

export default App
