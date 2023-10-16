import React, { createContext, useEffect, useState } from "react";
import { IUserInfo } from "../utils/types";
import supabase from "../utils/api";

type IInitialState = {
  user: IUserInfo | null;
  handleSetUser: (user: IUserInfo) => void;
  signInWithGitHub: (provider?: unknown) => Promise<void>;
  signOut: () => Promise<void>;
  // signInWithGitHub: (provider?: GithubAuthProvider | GoogleAuthProvider) => Promise<void>;
};

const initialState: IInitialState = {
  user: null,
  handleSetUser: (user: IUserInfo) => {
    user;
  },
  signInWithGitHub: async () => {},
  signOut: async () => {},
};

export const AuthContext = createContext(initialState);

const AuthContextProvider = ({ children }: { children: React.ReactElement }) => {
  const [user, setUser] = useState<IUserInfo | null>(null);
  const handleSetUser = (user: IUserInfo) => setUser(user);

  const signInWithGitHub = async (
    // provider: GithubAuthProvider | GoogleAuthProvider = githubProvider
    provider: unknown = "github"
  ) => {
    try {
      // const response = await signInWithPopup(auth, provider);
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
      });
      //  if (!error) {
      //    const { user_name, avatar_url } = data?.user?.identities?.[0]?.identity_data ?? {};
      //    const user = {
      //      displayName: user_name,
      //      uid: data?.user?.identities?.[0].user_id,
      //      photoURL: avatar_url,
      //    };
      //    handleSetUser(user as IUserInfo);
      //  } else {
      //    setUser(null);
      //    console.error(error);
      //  }

      console.log(data, error, "after signup", provider);
      // const { displayName, uid, photoURL } = response.user;
      // handleSetUser({ displayName, uid, photoURL, provider: response?.providerId } as IUserInfo);
    } catch (error) {
      console.log("error", error);
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const getUser = async () => {
    try {
      const { data, error } = await supabase.auth.getUser();
      if (!error) {
        const { user_name, avatar_url } = data?.user?.identities?.[0]?.identity_data ?? {};
        const user = {
          displayName: user_name,
          uid: data?.user?.identities?.[0].user_id,
          photoURL: avatar_url,
        };
        handleSetUser(user as IUserInfo);
      } else {
        setUser(null);
        console.error(error);
      }
    } catch (error) {
      setUser(null);
      console.error(error, "from catch");
    }
  };

  useEffect(() => {
    function checkUser() {
      getUser();
    }

    checkUser();

    return () => checkUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, handleSetUser, signInWithGitHub, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
