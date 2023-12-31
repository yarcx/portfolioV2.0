import { Box, Button, HStack, Text, useColorMode } from "@chakra-ui/react";
import PageInfoHeader from "../components/PageInfoHeader";
import useDisplayHooks from "../hooks/useDisplayHooks";
import { FaGithub, FaGoogle } from "react-icons/fa";
import {
  LIGHT_MODE,
  Post_As_Guest_Modal,
  SignUp_Modal,
  // guestCollectionRef,
  providers,
} from "../utils/constants";
import useUiContext from "../hooks/useUiContext";
import { useEffect, useState } from "react";
// import { auth } from "../db.config/firebase";
// import { signOut } from "firebase/auth";
// import { DocumentData, QueryDocumentSnapshot, getDocs } from "firebase/firestore/lite";
import GuestBookRow from "../components/GuestBookRow";
import { IGuestbook } from "../utils/types";
import useAuthContext from "../hooks/useAuthContext";
import LoadingComponent from "../components/LoadingComponent";
import supabase from "../utils/api";

const Guestbook = () => {
  const {
    openModal,
    state: { isModalOpen, uiColor },
  } = useUiContext();
  const { borderColor } = useDisplayHooks();
  const { colorMode } = useColorMode();

  const [msgs, setMsgs] = useState<IGuestbook[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user, signOut } = useAuthContext();

  const getGuestBooks = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("guestBook")
        .select("*")
        .order("created_at", { ascending: false });
      data && setMsgs([...data]);
      if (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // need to work on the unnecessary rerender on this page
  useEffect(() => {
    if (!isModalOpen) {
      getGuestBooks();
    }
  }, [isModalOpen]);

  const msgContent = msgs?.length ? (
    msgs?.map(({ message, displayName, photoURL }, index) => (
      <GuestBookRow message={message} displayName={displayName} photoURL={photoURL} key={index} />
    ))
  ) : (
    <Text mt='1rem' w='full' textAlign='center'>
      Sign in to leave a message. &#x1F604;
    </Text>
  );

  const loadingJsx = <LoadingComponent text='Guest Signatures' />;

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
        <HStack
          my='1rem'
          align={"center"}
          justifyContent={["center", "space-between", "space-between", "space-between"]}
          flexWrap='wrap'
        >
          <Text
            fontSize={["md", "", "lg", ""]}
            w='auto'
            textAlign={["center", "center", "left", "left"]}
          >
            Sign My Guestbook
          </Text>
          <HStack w='auto' justifyContent='space-between'>
            {user && (
              <Button
                _hover={{ bg: uiColor, opacity: ".9", color: "white" }}
                color={colorMode === LIGHT_MODE ? "white" : "black"}
                size='md'
                bg={colorMode === LIGHT_MODE ? "black" : "white"}
                py='.6rem'
                px='1rem'
                fontSize='md'
                fontWeight='normal'
                transition='all .2s linear'
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

            {user ? (
              <Button
                _hover={{ bg: uiColor, opacity: ".9", color: "white" }}
                color={colorMode === LIGHT_MODE ? "white" : "black"}
                size='md'
                bg={colorMode === LIGHT_MODE ? "black" : "white"}
                py='.6rem'
                px='1rem'
                fontSize='md'
                leftIcon={user?.provider === providers["github"] ? <FaGithub /> : <FaGoogle />}
                fontWeight='normal'
                onClick={() => {
                  signOut();
                }}
              >
                Sign out
              </Button>
            ) : (
              <Button
                color={colorMode === LIGHT_MODE ? "white" : "black"}
                _hover={{ bg: uiColor, opacity: ".9", color: "white" }}
                size='md'
                bg={colorMode === LIGHT_MODE ? "black" : "white"}
                py='.6rem'
                px='1rem'
                fontSize='md'
                // leftIcon={<FaGithub />}
                fontWeight='normal'
                onClick={() => {
                  openModal(SignUp_Modal);
                }}
              >
                Sign in to post
              </Button>
            )}
          </HStack>
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
