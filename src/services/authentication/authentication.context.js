import { createContext, useState } from "react";
import { Children } from "react/cjs/react.production.min";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    console.log(email);
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
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
