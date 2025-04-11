import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { useAuth } from '../../hooks/AuthContext';
import Sidebar from './Sidebar';
import { ToastContainer } from 'react-toastify';

export default function Layout() {
  const auth = useAuth();

  if (auth.user.roleId === 1) {
    return (
      <div className="container-fluid">
        <Sidebar />
        <div className="container-xl">
          <Outlet />
        </div>
        <ToastContainer />
      </div>
    )
  }


  return (
    <div className="container-fluid">
      <Navbar />
      <Outlet />
      <ToastContainer />
    </div>
  )
}
