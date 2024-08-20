import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    

// create user
const createUser = ( email, password) => {
    setLoading(true);
     return createUserWithEmailAndPassword(auth, email, password)


};

// update user profile
const updateUserProfile = (name, image) => {
    return  updateProfile(auth.currentUser, {
           displayName: name,
            photoURL: image
         })
   };


// social providers
const goggleProvider = new GoogleAuthProvider();

// sign in 
const sigInUser = ( email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
};

// goggle login
const goggleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, goggleProvider)

}

m


// Logout 
const logout = () =>{
    setLoading(false);
    setUser(null)
    signOut(auth)
};

// observer
useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, user => {
        //   console.log(user);
          setUser(user);
          setLoading(false);
        });
        return () =>unsubscribe();
  },[]);

    const authInfo = {
       user,
       loading,
       createUser,
       sigInUser,
       goggleLogin,
       logout,
updateUserProfile ,

      
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;