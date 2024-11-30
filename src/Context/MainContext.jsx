import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Toaster } from "react-hot-toast";

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [loadding, setloadding] = useState(true);
  const [appointment, setAppointment] = useState([]);
  const handleAddApointment = (appointment) => {
    setAppointment((prev) => [...prev, appointment]);
  };
  const HandleGoogleSignIn = () => {
    setloadding(true);
    const googleProvider = new GoogleAuthProvider();

    return signInWithPopup(auth, googleProvider);
  };
  const [user, SetUser] = useState(null);
  const HandleLogIn = (email, password) => {
    if (password) return signInWithEmailAndPassword(auth, email, password);
  };
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regex.test(password)) {
      return "Password must be at least 6 characters long, include one uppercase letter, and one lowercase letter.";
    }
    return null;
  };
  const handleEmailSignIn = (email, password) => {
    setloadding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const EmailsignOut = () => {
    setloadding(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("Current user", currentUser);
        SetUser({
          name: currentUser.displayName,
          photo: currentUser.photoURL,
        });
        setloadding(false);
      } else {
        console.log("no user");
        SetUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);
  const items = {
    handleEmailSignIn,
    HandleLogIn,
    user,
    HandleGoogleSignIn,
    EmailsignOut,
    validatePassword,
    loadding,
    appointment,
    handleAddApointment,
    SetUser,
  };

  return (
    <MainContext.Provider value={items}>
      {children}
      <Toaster></Toaster>
    </MainContext.Provider>
  );
};

export default MainContextProvider;
