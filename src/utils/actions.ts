// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from "../db.config/firebase";

import { IuserInfo } from "./types";

export const signInWithGitHub = async (
  setUser?: React.Dispatch<React.SetStateAction<IuserInfo | null>>
) => {
  try {
    // const response = await signInWithPopup(auth, provider);
    // const { displayName, uid, photoURL } = response.user;
    if (setUser) {
      //   setUser({ displayName, uid, photoURL }) as IuserInfo;
    }
  } catch (error) {
    console.log("error", error);
  }
};
