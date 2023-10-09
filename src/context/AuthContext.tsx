import React, { createContext, useEffect, useState } from "react";
import { IUserInfo } from "../utils/types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth, githubProvider, googleProvider } from "../db.config/firebase";

type IInitialState = {
  user: IUserInfo | null;
  handleSetUser: (user: IUserInfo) => void;
  signInWithGitHub: (provider?: GithubAuthProvider | GoogleAuthProvider) => Promise<void>;
};

const initialState: IInitialState = {
  user: null,
  handleSetUser: (user: IUserInfo) => {
    user;
  },
  signInWithGitHub: async () => {},
};

export const AuthContext = createContext(initialState);

const AuthContextProvider = ({ children }: { children: React.ReactElement }) => {
  const [user, setUser] = useState<IUserInfo | null>(null);
  const handleSetUser = (user: IUserInfo) => setUser(user);

  const signInWithGitHub = async (
    provider: GithubAuthProvider | GoogleAuthProvider = githubProvider
  ) => {
    googleProvider;
    try {
      const response = await signInWithPopup(auth, provider);
      const { displayName, uid, photoURL } = response.user;
      handleSetUser({ displayName, uid, photoURL, provider: response?.providerId } as IUserInfo);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const { displayName, uid, photoURL } = authUser;
        handleSetUser({ displayName, uid, photoURL } as IUserInfo);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, handleSetUser, signInWithGitHub }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
