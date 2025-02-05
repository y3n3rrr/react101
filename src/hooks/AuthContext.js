import React, { useContext, useState } from 'react'
import {createContext} from 'react'

const AuthContext = createContext(null);

export const AuthProvider = ({children})  => {
   const [user, setUser] = useState()

  return (
    <AuthContext.Provider value={{user, setUser}}>
        {children}
    </AuthContext.Provider>
  )
}


export const useAuth = () =>{
    return useContext(AuthContext)
}

