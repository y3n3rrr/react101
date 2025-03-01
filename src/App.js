import { useState } from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import Layout from './Layout'
import { AuthProvider } from './hooks/AuthContext'
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
  <BrowserRouter>
  <GoogleOAuthProvider clientId='332558980603-vj86b6v11eua2o48eo66qfrq98ojmkat.apps.googleusercontent.com'>
    <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Layout /> }> 
              <Route path='home' element={<Home />} />
              <Route path='profile' element={<Profile />} />
            </Route>
        </Routes>
    </AuthProvider>
    </GoogleOAuthProvider>
  </BrowserRouter>
  )
}

export default App;
