import { Avatar, Box, Button, HStack, Text, useColorMode } from "@chakra-ui/react";
import PageInfoHeader from "../components/PageInfoHeader";
import useDisplayHooks from "../hooks/useDisplayHooks";
import { FaGithub } from "react-icons/fa";
import { LIGHT_MODE } from "../utils/constants";
import useUiContext from "../hooks/useUiContext";
import { Post_As_Guest_Modal } from "../context/UiDisplayContext";
import { useEffect, useState } from "react";
import { auth, db, provider } from "../db.config/firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import {
  DocumentData,
  QueryDocumentSnapshot,
  // addDoc,
  collection,
  getDocs,
} from "firebase/firestore/lite";

export interface IuserInfo {
  displayName: string;
  uid: string;
  photoURL: string;
}
export interface Iguestbook extends IuserInfo {
  message: string;
}
export const guestCollectionRef = collection(db, "guestbook");

const Guestbook = () => {
  const { openModal } = useUiContext();
  const { borderColor } = useDisplayHooks();
  const { colorMode } = useColorMode();
  const [user, setUser] = useState<IuserInfo | null>(null);
  const [msgs, setMsgs] = useState<Iguestbook[]>([]);

  const signInWithGitHub = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const { displayName, uid, photoURL } = response.user;
      setUser({ displayName, uid, photoURL } as IuserInfo);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getGuestBooks = async () => {
    const res = await getDocs(guestCollectionRef);
    const guestbook = res.docs.map((doc: QueryDocumentSnapshot<DocumentData, DocumentData>) => ({
      ...doc.data(),
    })) as Iguestbook[];
    setMsgs(guestbook);
    console.log(guestbook, "guestbook");
  };

  useEffect(() => {
    // Firebase event listener for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const { displayName, uid, photoURL } = authUser;
        setUser({ displayName, uid, photoURL } as IuserInfo);
      } else {
        setUser(null);
      }
    });

    getGuestBooks();

    return () => {
      // Clean up the listener when the component unmounts
      unsubscribe();
    };
  }, []);

  console.log(user, "console.log");
  return (
    <Box as='main' w='full'>
      <PageInfoHeader />
      <Box
        borderTop='.6px solid'
        borderColor={borderColor}
        justifyContent='center'
        alignItems='center'
        as='section'
        px='10px'
      >
        <HStack my='1rem' align={["center", "", "", "self-start"]} justifyContent='space-between'>
          <Text fontSize={["md", "", "xl", ""]} pt=''>
            Sign My Guestbook
          </Text>

          {user && (
            <Button
              color={colorMode === LIGHT_MODE ? "white" : "black"}
              size='md'
              bg={colorMode === LIGHT_MODE ? "black" : "white"}
              py='.6rem'
              px='1rem'
              fontSize='lg'
              fontWeight='normal'
              _hover={{ opacity: ".9" }}
              onClick={() => {
                openModal(Post_As_Guest_Modal, {
                  title: "Display Settings",
                  setMsgs,
                  user,
                });
              }}
            >
              Post a message
            </Button>
          )}

          <>
            {user ? (
              <Button
                color={colorMode === LIGHT_MODE ? "white" : "black"}
                size='md'
                bg={colorMode === LIGHT_MODE ? "black" : "white"}
                py='.6rem'
                px='1rem'
                fontSize='lg'
                leftIcon={<FaGithub />}
                fontWeight='normal'
                _hover={{ opacity: ".9" }}
                onClick={() => {
                  signOut(auth);
                }}
              >
                Sign out
              </Button>
            ) : (
              <Button
                color={colorMode === LIGHT_MODE ? "white" : "black"}
                size='md'
                bg={colorMode === LIGHT_MODE ? "black" : "white"}
                py='.6rem'
                px='1rem'
                fontSize='lg'
                leftIcon={<FaGithub />}
                fontWeight='normal'
                _hover={{ opacity: ".9" }}
                onClick={() => {
                  signInWithGitHub();
                }}
              >
                Sign in with Github
              </Button>
            )}
          </>
        </HStack>
      </Box>

      <Box
        borderTop='.6px solid'
        borderColor={borderColor}
        justifyContent='center'
        alignItems='center'
        as='section'
        px='10px'
        overflowY='auto'
        h={["", "", "", "", "80vh"]}
      >
        {msgs?.length
          ? msgs?.map(({ message, displayName, photoURL, uid }) => (
              <Box
                key={uid}
                mt='.5rem'
                display='flex'
                alignItems='self-start'
                justifyContent='start'
                border='.6px solid'
                rounded='lg'
                // borderTop='.6px solid'
                // borderBottom='.6px solid'
                borderColor={borderColor}
                px='1rem'
                py='.6rem'
                gap='1rem'
              >
                <Box display='flex' alignItems='center'>
                  <Avatar size='sm' name={displayName || "No Name"} src={photoURL || displayName} />
                </Box>
                <Box>
                  <Text fontSize='md' fontWeight='semibold'>
                    {displayName || "No Name"} .
                  </Text>
                  <Text fontSize='sm' fontWeight='normal'>
                    {message}
                  </Text>
                </Box>
              </Box>
            ))
          : null}
      </Box>
    </Box>
  );
};

export default Guestbook;
