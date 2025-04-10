import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { Profile } from './pages/Profile'
import Layout from './pages/Navbar/Layout'
import Signup from './pages/Signup/Signup'
import { AuthProvider } from './hooks/AuthContext'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { PrivateRoute, ProtectedRoute } from './hooks/PrivateRoute'
import Unauthorized from './components/unauthorized/Unauthorized'
import SecurityPage from './pages/Profile/SecurityPage'

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
