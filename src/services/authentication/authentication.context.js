import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import {
  createUserRequest,
  firebaseAuth,
  loginRequest,
  logoutRequest,
} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (u) => {
      setIsLoading(true);
      if (u) {
        setUser(u);
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((userCredential) => {
        setIsLoading(false);
        setUser(userCredential.user);
      })
      .catch((e) => {
        setError(e.toString());
        setIsLoading(false);
      });
  };
  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Passwords do not match");
      return;
    }
    setIsLoading(true);
    createUserRequest(email, password)
      .then((userCredential) => {
        setIsLoading(false);
        setUser(userCredential.user);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };
  const onLogout = () => {
    logoutRequest();
    setUser(null);
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
