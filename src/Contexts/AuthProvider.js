import React from 'react';
import { createContext } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext=createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
  
    const providerLogin =(provider)=>{
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
       
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
     
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut =(provider)=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log("user inside state change",currentUser);
            setUser(currentUser)
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo={
        user, 
        providerLogin,
        logOut,
        createUser,
        signIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;