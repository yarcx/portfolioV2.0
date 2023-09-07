import { Box, Flex, HStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";
import useDisplayHooks from "../../hooks/useDisplayHooks";

const Layout = () => {
  const { bgColor, borderColor } = useDisplayHooks();
  return (
    <Box
      bg={bgColor}
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
          borderColor={["", "", borderColor, borderColor, borderColor]}
          flexGrow={1}
          maxW='650px'
          mx='auto'
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
