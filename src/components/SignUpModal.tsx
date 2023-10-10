import { Button, HStack, ModalFooter, ModalHeader, useColorMode } from "@chakra-ui/react";
import { LIGHT_MODE } from "../utils/constants";
import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuthContext from "../hooks/useAuthContext";
import useUiContext from "../hooks/useUiContext";
import { githubProvider, googleProvider } from "../db.config/firebase";

const SignUpModal = () => {
  const { colorMode } = useColorMode();
  const { signInWithGitHub } = useAuthContext();
  const { closeModal } = useUiContext();

  return (
    <>
      <ModalHeader textAlign='center' fontSize='xl' fontWeight='extrabold'>
        Select a Sign up Socials
      </ModalHeader>
      <ModalFooter>
        <HStack
          justifyContent='center'
          alignItems='center'
          w='full'
          gap='1rem'
          flexWrap={"wrap-reverse"}
        >
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
              signInWithGitHub(googleProvider);
              closeModal();
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
              signInWithGitHub(githubProvider);
              closeModal();
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
