// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from "../db.config/firebase";

import { IUserInfo } from "./types";

export const signInWithGitHub = async (
  setUser?: React.Dispatch<React.SetStateAction<IUserInfo | null>>
) => {
  try {
    // const response = await signInWithPopup(auth, provider);
    // const { displayName, uid, photoURL } = response.user;
    if (setUser) {
      //   setUser({ displayName, uid, photoURL }) as IUserInfo;
    }
  } catch (error) {
    console.log("error", error);
  }
};
