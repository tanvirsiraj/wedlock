import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const Context = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const createUser = (email, password, name, imgUrl) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password).then((res) =>
      updateProfile(res.user, { name: name, imgUrl: imgUrl })
    );
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const profileUpdate = (name, imgUrl) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imgUrl,
    });
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("current user", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    services,
    user,
    loading,
    createUser,
    signInUser,
    logOut,
    signInWithGoogle,
    profileUpdate,
  };
  return <Context.Provider value={authInfo}>{children}</Context.Provider>;
};

AuthContext.propTypes = {
  children: PropTypes.node,
};

export default AuthContext;
