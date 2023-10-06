import { Button, HStack, ModalFooter, ModalHeader, useColorMode } from "@chakra-ui/react";
import { LIGHT_MODE } from "../utils/constants";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { signInWithGitHub } from "../utils/actions";

const SignUpModal = () => {
  const { colorMode } = useColorMode();

  //  const signInWithGitHub = async () => {
  //    try {
  //      const response = await signInWithPopup(auth, provider);
  //      const { displayName, uid, photoURL } = response.user;
  //      setUser({ displayName, uid, photoURL } as IuserInfo);
  //    } catch (error) {
  //      console.log("error", error);
  //    }
  //  };

  return (
    <>
      <ModalHeader textAlign='center' fontSize='xl' fontWeight='extrabold'>
        Select a Sign up Socials
      </ModalHeader>
      <ModalFooter>
        <HStack justifyContent='space-between' align='center' w='full'>
          <Button
            color={colorMode !== LIGHT_MODE ? "white" : "black"}
            size='md'
            bg={colorMode !== LIGHT_MODE ? "black" : "white"}
            colorScheme='google'
            variant='outline'
            py='.6rem'
            px='1rem'
            fontSize='lg'
            leftIcon={<FaGoogle />}
            fontWeight='normal'
            _hover={{ opacity: ".9" }}
            onClick={() => {
              alert("This is a work in progress");
            }}
          >
            Sign in with Google
          </Button>

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
        </HStack>
      </ModalFooter>
    </>
  );
};

export default SignUpModal;
