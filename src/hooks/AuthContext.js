import React, { useContext, useState } from 'react'
import {createContext} from 'react'

const AuthContext = createContext(null);

export const AuthProvider = ({children})  => {
   const [user, setUser] = useState()
   const [role, setRole] = useState()

  return (
    <AuthContext.Provider value={{user, setUser, role, setRole}}>
        {children}
    </AuthContext.Provider>
  )
}


export const useAuth = () =>{
    return useContext(AuthContext)
}

