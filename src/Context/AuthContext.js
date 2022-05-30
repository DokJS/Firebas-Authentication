import React, { useState, useEffect, createContext, useContext } from 'react';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup, signOut,onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const signin = () => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth,provider)
    }

    const logout=()=> signOut(auth)

    useEffect(() => {
        const unsuscriber = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unsuscriber()
        }
    },[user])

    return (
        <AuthContext.Provider value={{user,signin,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthContextConsumer = () => useContext(AuthContext)