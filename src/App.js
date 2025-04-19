import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { Profile } from './pages/Profile'
import { Shopping } from './pages/Shopping'
import Layout from './pages/Navbar/Layout'
import Signup from './pages/Signup/Signup'
import { AuthProvider } from './hooks/AuthContext'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { PrivateRoute, ProtectedRoute } from './hooks/PrivateRoute'
import Unauthorized from './components/unauthorized/Unauthorized'
import SecurityPage from './pages/Profile/SecurityPage'
import { Users } from './pages/Admin/Users'
import WebsiteTraffic from './pages/Navbar/WebsiteTraffic'
import MainDashboard from './pages/Navbar/MainDashboard'

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
                <Route path='maindashboard' element={<MainDashboard />} />
                <Route path='websitetraffic' element={<WebsiteTraffic />} />
                <Route path='profile' element={
                  <ProtectedRoute allowedRoles={[1]}>
                    <Profile />
                  </ProtectedRoute>
                } />

                <Route path='shopping' element={
                  <Shopping />
                } />

                <Route path='users' element={<Users />} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  )
}

export default App;
