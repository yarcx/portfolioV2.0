import { Box, Button, HStack, Text, useColorMode } from "@chakra-ui/react";
import PageInfoHeader from "../components/PageInfoHeader";
import useDisplayHooks from "../hooks/useDisplayHooks";
import { FaGithub, FaGoogle } from "react-icons/fa";
import {
  LIGHT_MODE,
  Post_As_Guest_Modal,
  SignUp_Modal,
  guestCollectionRef,
  providers,
} from "../utils/constants";
import useUiContext from "../hooks/useUiContext";
import { useEffect, useState } from "react";
import { auth } from "../db.config/firebase";
import { signOut } from "firebase/auth";
import { DocumentData, QueryDocumentSnapshot, getDocs } from "firebase/firestore/lite";
import GuestBookRow from "../components/GuestBookRow";
import { IGuestbook } from "../utils/types";
import useAuthContext from "../hooks/useAuthContext";
import LoadingComponent from "../components/LoadingComponent";

const Guestbook = () => {
  const {
    openModal,
    state: { isModalOpen },
  } = useUiContext();
  const { borderColor } = useDisplayHooks();
  const { colorMode } = useColorMode();

  const [msgs, setMsgs] = useState<IGuestbook[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();

  const getGuestBooks = async () => {
    try {
      setIsLoading(true);
      const res = await getDocs(guestCollectionRef);
      const guestbook = res.docs
        .map((doc: QueryDocumentSnapshot<DocumentData, DocumentData>) => ({
          ...doc.data(),
        }))
        .sort((a, b) => b?.createdAt - a?.createdAt) as IGuestbook[];
      setMsgs(guestbook);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  // need to work on the unnecessary rerender on this page
  useEffect(() => {
    getGuestBooks();
  }, [isModalOpen]);

  const msgContent = msgs?.length
    ? msgs?.map(({ message, displayName, photoURL }, index) => (
        <GuestBookRow message={message} displayName={displayName} photoURL={photoURL} key={index} />
      ))
    : null;

  const loadingJsx = <LoadingComponent text='Messages' />;

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
                leftIcon={user?.provider === providers["github.com"] ? <FaGithub /> : <FaGoogle />}
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
                // leftIcon={<FaGithub />}
                fontWeight='normal'
                _hover={{ opacity: ".9" }}
                onClick={() => {
                  openModal(SignUp_Modal);
                }}
              >
                Sign in to post
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
        {isLoading ? loadingJsx : msgContent}
      </Box>
    </Box>
  );
};

export default Guestbook;
