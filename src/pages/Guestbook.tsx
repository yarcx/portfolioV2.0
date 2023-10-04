import { Avatar, Box, Button, HStack, Text, useColorMode } from "@chakra-ui/react";
import PageInfoHeader from "../components/PageInfoHeader";
import useDisplayHooks from "../hooks/useDisplayHooks";
import { FaGithub } from "react-icons/fa";
import { LIGHT_MODE } from "../utils/constants";
import useUiContext from "../hooks/useUiContext";
import { Post_As_Guest_Modal } from "../context/UiDisplayContext";
import { useState } from "react";

const Guestbook = () => {
  const { openModal } = useUiContext();
  const { borderColor } = useDisplayHooks();
  const { colorMode } = useColorMode();

  const [msgs, setMsgs] = useState([
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis error minima",
  ]);

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
        <HStack my='1rem' align='self-start' justifyContent='space-between'>
          <Text fontSize={["lg", "", "xl", ""]} pt=''>
            Sign My Guestbook
          </Text>
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
            onClick={() =>
              openModal(Post_As_Guest_Modal, {
                title: "Display Settings",
                setMsgs,
              })
            }
          >
            Sign in with Github
          </Button>
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
        {msgs.map((msg, index) => (
          <Box
            key={index}
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
            <Box>
              <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
            </Box>
            <Box>
              <Text fontSize='md' fontWeight='semibold'>
                Prosper Otemuyiwa
              </Text>
              <Text fontSize='md' fontWeight='normal'>
                {msg}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Guestbook;
