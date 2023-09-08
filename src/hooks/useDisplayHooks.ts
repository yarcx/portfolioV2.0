import { useColorModeValue } from "@chakra-ui/react";
import { BLACK_BG, WHITE_BG } from "../utils/constants";

const useDisplayHooks = () => {
  const bgColor = useColorModeValue(WHITE_BG, BLACK_BG);
  const borderColor = useColorModeValue("light.100", "dark.100");
  const displayUiBg = useColorModeValue("light.200", "dark.200");
  const grayText = useColorModeValue("light.300", "dark.300");
  return { bgColor, borderColor, displayUiBg, grayText };
};

export default useDisplayHooks;
