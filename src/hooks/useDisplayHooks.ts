import { useColorModeValue } from "@chakra-ui/react";
import { BLACK_BG, WHITE_BG } from "../utils/constants";

const useDisplayHooks = () => {
  const bgColor = useColorModeValue(WHITE_BG, BLACK_BG);
  const borderColor = useColorModeValue("light.100", "dark.100");
  return { bgColor, borderColor };
};

export default useDisplayHooks;
