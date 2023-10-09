import { Text, VStack, useColorMode } from "@chakra-ui/react";
import ReactLoading from "react-loading";
import { LIGHT_MODE } from "../utils/constants";

const LoadingComponent = ({ text = "Resume" }: { text?: string }) => {
  const { colorMode } = useColorMode();
  return (
    <VStack justify='center'>
      <ReactLoading type='bars' color={colorMode === LIGHT_MODE ? "black" : "white"} />
      <Text textAlign='center'>Loading {text}...</Text>
    </VStack>
  );
};

export default LoadingComponent;
