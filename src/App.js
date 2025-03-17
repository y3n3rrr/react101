import { useState } from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import Layout from './Layout'
import Signup from './Signup'
import { AuthProvider } from './hooks/AuthContext'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { PrivateRoute, ProtectedRoute } from './PrivateRoute'
import Unauthorized from './Unauthorized'

function App() {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId='332558980603-vj86b6v11eua2o48eo66qfrq98ojmkat.apps.googleusercontent.com'>
        <AuthProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/unauthorized' element={<Unauthorized />} />
            <Route element={<PrivateRoute />}>
              <Route path='/' element={<Layout />}>
                <Route path='home' element={<Home />} />
                <Route path='profile' element={
                  <ProtectedRoute allowedRoles={[1]}>
                    <Profile />
                  </ProtectedRoute>
                } />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  )
}

export default App;
