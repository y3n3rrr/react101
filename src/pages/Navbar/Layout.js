import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { useAuth } from '../../hooks/AuthContext';
import Sidebar from './Sidebar';

export default function Layout() {
  const auth = useAuth();

  return (
    <div className="container-fluid">
      {auth.user.roleId === 1 ? <Navbar /> : <Sidebar />}
      <Outlet />
    </div>
  )
}
