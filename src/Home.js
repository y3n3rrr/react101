import React from 'react'
import { useAuth } from './hooks/AuthContext'
import Navbar from './Navbar';

export default function Home() {
    const auth = useAuth();

    return (
        <div>
            Hosgeldin, {auth.user?.username}
        </div>
    )
}
