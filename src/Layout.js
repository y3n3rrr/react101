import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
<div className="container-fluid">
  <Navbar />
  <Outlet />
</div>
  )
}
