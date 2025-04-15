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
        <div class="row flex-nowrap">
          <Sidebar />            {/*Main layout*/}
          <main style={{ marginTop: 100 }} className="col-9 ">
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
