import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { useAuth } from '../../hooks/AuthContext';
import Sidebar from './Sidebar';
import { ToastContainer } from 'react-toastify';

export default function Layout() {
  const auth = useAuth();

  console.log('checkpoint1', auth);

  if (auth.user.roleId === 2) {
    return (
      <div className="container">
        <div className="row flex-nowrap">
          <Sidebar />
          <main style={{ marginTop: 100, marginLeft:-85 }} className="col-auto col-md-9 col-xl-10 px-sm-10 px-0">
            <Outlet />
          </main>
          <ToastContainer />
        </div>
      </div>
    )
  }


  return (
    <div className="container">
      <Navbar />
      <Outlet />
      <ToastContainer />
    </div>
  )
}
