import { useState } from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import Layout from './Layout'
import { AuthProvider } from './hooks/AuthContext'


function App() {
  return (
  <BrowserRouter>
    <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Layout /> }> 
              <Route path='home' element={<Home />} />
              <Route path='profile' element={<Profile />} />
            </Route>
        </Routes>
    </AuthProvider>
  </BrowserRouter>
  )
}

export default App;
