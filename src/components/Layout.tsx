import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { BLACK_BG, WHITE_BG } from "../utils/constants";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [count] = useState(2);
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue(WHITE_BG, BLACK_BG);
  return (
    <HStack align='stretch' as='main' w='100vw' bg={bg} h='100dvh'>
      <Box w={"300px"} borderRight='1px solid gray'>
        <Heading>The Beginning of portfolio version {count}</Heading>
        <Button onClick={toggleColorMode}>Toggle {colorMode === "light" ? "Dark" : "Light"}</Button>
        <Box></Box>
      </Box>

      <Flex flexGrow={1}>
        <Outlet />
      </Flex>
    </HStack>
  );
};

export default Layout;
