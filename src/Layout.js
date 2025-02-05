import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
<div class="container-fluid">
  <Outlet />
</div>
  )
}
