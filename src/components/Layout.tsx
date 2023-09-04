import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { BLACK_BG, LIGHT_MODE, WHITE_BG } from "../utils/constants";
import { Outlet } from "react-router-dom";
import LeftSideBar from "./Layout/LeftSideBar";

const Layout = () => {
  const [count] = useState(2);
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue(WHITE_BG, BLACK_BG);
  return (
    <Box
      bg={bg}
      bgImage={colorMode === LIGHT_MODE ? "./gridbar1.svg" : ""}
      bgPosition={"center bottom center"}
      position='relative'
      bgRepeat='no-repeat'
      backdropBrightness='1'
    >
      {/* <Image src='./darkTailSample.jpg' alt='image bg' pos='absolute' /> */}
      <HStack
        align='stretch'
        as='main'
        w='100vw'
        px={["10px", "1rem", "3rem"]}
        maxWidth='1400px'
        mx='auto'
        h='100dvh'
      >
        <LeftSideBar />

        <Flex
          borderX='1px solid'
          borderColor={colorMode === "light" ? "light.100" : "dark.100"}
          flexGrow={1}
        >
          <Outlet />
        </Flex>

        <Box w={"300px"} display={{ base: "none", lg: "block" }} py='.6rem'>
          <Heading>The Beginning of portfolio version {count}</Heading>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
          <Box>hello</Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default Layout;
