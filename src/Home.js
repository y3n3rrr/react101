import React from 'react'
import { useAuth } from './hooks/AuthContext'

export default function Home() {
    const auth = useAuth();

    debugger
    return (
        <div>
            Hosgeldin, {auth.user?.username}
        </div>
    )
}
