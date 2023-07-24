import React, { createContext, useEffect, useState } from 'react';
import { getAuth,updateProfile,GoogleAuthProvider ,signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, onAuthStateChanged } from "firebase/auth";
import app from '../firebase';

 

export const authContext = createContext()

const Authprovider = ({children}) => {


    const [user, setuser] = useState();
    console.log(user)
    const [loadeing, setloadeing] = useState(true);
    console.log(user)

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();


 

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginuser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutuser = () => {
       return signOut(auth)
    }

    const loginwithgoogle = () => {
        return signInWithPopup(auth, provider) 
    }

    const AddUserNameAndPhoto = (name, photoURL) => {
      return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photoURL
      })
    }

    useEffect(() => {
       const subscribe =  onAuthStateChanged(auth, (currentuser) => {
            if (currentuser) {
                setuser(currentuser)
                setloadeing(false)
            } 
            
        });
        return () => {
            subscribe()
        };
    }, []);

    const contextValue = {
        createUser,
        loginuser,
        logoutuser,
        loginwithgoogle,
        AddUserNameAndPhoto,
        user
    }

    
    

    return(
        <authContext.Provider value={contextValue}>
          {children}
        </authContext.Provider>

    )
 
};

export default Authprovider;