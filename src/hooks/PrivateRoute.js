import React from 'react'
import { useAuth } from './AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoute = () => {
    const auth = useAuth()

    if (!Boolean(auth.user)) {
        return <Navigate to="/login" />
    }
    return <Outlet />
}

export const ProtectedRoute = ({ allowedRoles = [], children }) => {
    const auth = useAuth()

    if (allowedRoles.includes(auth.user.roleId)) {
        return children
    }
    return <Navigate to="/unauthorized" />
}

