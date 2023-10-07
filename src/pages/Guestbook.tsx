import { Box, Button, HStack, Text, useColorMode } from "@chakra-ui/react";
import PageInfoHeader from "../components/PageInfoHeader";
import useDisplayHooks from "../hooks/useDisplayHooks";
import { FaGithub } from "react-icons/fa";
import { LIGHT_MODE, Post_As_Guest_Modal, guestCollectionRef } from "../utils/constants";
import useUiContext from "../hooks/useUiContext";
import { useEffect, useState } from "react";
import { auth, provider } from "../db.config/firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { DocumentData, QueryDocumentSnapshot, getDocs } from "firebase/firestore/lite";
import GuestBookRow from "../components/GuestBookRow";
import { Iguestbook, IuserInfo } from "../utils/types";

const Guestbook = () => {
  const {
    openModal,
    state: { isModalOpen },
  } = useUiContext();
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
    const guestbook = res.docs
      .map((doc: QueryDocumentSnapshot<DocumentData, DocumentData>) => ({
        ...doc.data(),
      }))
      .sort((a, b) => b?.createdAt - a?.createdAt) as Iguestbook[];
    setMsgs(guestbook);
  };

  useEffect(() => {
    getGuestBooks();
  }, [isModalOpen]);

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

    return () => {
      // Clean up the listener when the component unmounts
      unsubscribe();
    };
  }, []);

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
          ? msgs?.map(({ message, displayName, photoURL }, index) => (
              <GuestBookRow
                message={message}
                displayName={displayName}
                photoURL={photoURL}
                key={index}
              />
            ))
          : null}
      </Box>
    </Box>
  );
};

export default Guestbook;
