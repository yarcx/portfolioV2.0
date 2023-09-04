import { Box, Flex, HStack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BLACK_BG, LIGHT_MODE, WHITE_BG } from "../utils/constants";
import { Outlet } from "react-router-dom";
import LeftSideBar from "./Layout/LeftSideBar";

const Layout = () => {
  const { colorMode } = useColorMode();
  const bg = useColorModeValue(WHITE_BG, BLACK_BG);
  const borderColor2 = useColorModeValue("light.100", "dark.100");
  const borderColor = colorMode === LIGHT_MODE ? "light.100" : "dark.100";
  console.log("🚀 ~ file: Layout.tsx:10 ~ Layout ~ borderColor2:", borderColor2, borderColor);
  return (
    <Box
      bg={bg}
      bgPosition={"center bottom center"}
      position='relative'
      bgRepeat='no-repeat'
      backdropBrightness='1'
    >
      <HStack
        align='stretch'
        as='main'
        w='100vw'
        px={["", "", "1rem", "3rem"]}
        maxWidth='1400px'
        mx='auto'
        h='100dvh'
      >
        <LeftSideBar />

        <Flex
          borderLeft={["", "", "1px solid", "1px solid"]}
          borderRight={["", "", "", "", "1px solid"]}
          borderColor={["", "", "", borderColor2, borderColor2]}
          flexGrow={1}
        >
          <Outlet />
        </Flex>

        <Box w={"370px"} as='aside' display={["none", "none", "none", "none", "block"]} py='.6rem'>
          <Box>Search box Section</Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default Layout;
