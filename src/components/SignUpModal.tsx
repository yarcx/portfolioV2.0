import { Button, HStack, ModalFooter, ModalHeader, useColorMode } from "@chakra-ui/react";
import { LIGHT_MODE } from "../utils/constants";
import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuthContext from "../hooks/useAuthContext";
import useUiContext from "../hooks/useUiContext";
// import { githubProvider } from "../db.config/firebase";

const SignUpModal = () => {
  const { colorMode } = useColorMode();
  const { signInWithGitHub } = useAuthContext();
  const {
    closeModal,
    state: { uiColor },
  } = useUiContext();

  return (
    <>
      <ModalHeader textAlign='center' fontSize='xl' fontWeight='extrabold'>
        Select a Social to Sign up with.
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
            _hover={{ bg: uiColor, opacity: ".9", color: "white", borderColor: uiColor }}
            bg={colorMode !== LIGHT_MODE ? "black" : "white"}
            colorScheme='google'
            variant='outline'
            py='.6rem'
            px='1rem'
            fontSize='md'
            leftIcon={<FaGoogle />}
            fontWeight='normal'
            onClick={() => {
              // alert("This is coming soon!!!");
              signInWithGitHub("google");
              closeModal();
            }}
          >
            Sign in with Google
          </Button>

          <Button
            color={colorMode === LIGHT_MODE ? "white" : "black"}
            _hover={{ bg: uiColor, opacity: ".9", color: "white", border: "none" }}
            size='md'
            bg={colorMode === LIGHT_MODE ? "black" : "white"}
            py='.6rem'
            px='1rem'
            fontSize='md'
            leftIcon={<FaGithub />}
            fontWeight='normal'
            onClick={() => {
              signInWithGitHub("github");
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
