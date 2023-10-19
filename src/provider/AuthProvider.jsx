/** @format */

import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const updateUserInfo = (name, photo) => {
    return updateProfile(user, {
      displayName: { name },
      photoURL: { photo },
    });
  };
  const logOut = () => {
    localStorage.removeItem('access_token')
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
      console.log(currenUser);
      
      const loggedUser = {email: currenUser.email};
      fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(loggedUser)
      })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('access_token', data.token)
      })

      setLoading(false);
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    logOut,
    updateUserInfo,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
