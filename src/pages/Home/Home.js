import React from 'react'
import { useAuth } from '../../hooks/AuthContext'

export default function Home() {
    const auth = useAuth();

    return (
        <div>
            Hosgeldin, {auth.user?.name + " " + auth.user?.surname}
        </div>
    )
}
