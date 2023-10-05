import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut, updateCurrentUser } from "firebase/auth";
import { app } from '../Firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext(null)
// Handles loginProvider operations of google and github
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  // handles loading on auth pages and stuff
  const [loading, setLoading] = useState(true)
  // Handles signup or creates a new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // Handles Login or logs in a already created account
  const existingUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  // Login with google
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider)
  }
  // Login with github
  const handleGithubLogin = () => {
    return signInWithPopup(auth, githubProvider)
  }

  // handleLogout
  const handleLogout = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    });
    return () => {
      unsubscribe()
    }
  }, [])
  const authInfo = { user, loading, createUser, existingUser, handleGoogleLogin, handleGithubLogin, handleLogout }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;