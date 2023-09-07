import { useColorModeValue } from "@chakra-ui/react";
import { BLACK_BG, WHITE_BG } from "../utils/constants";

const useDisplayHooks = () => {
  const bgColor = useColorModeValue(WHITE_BG, BLACK_BG);
  const borderColor = useColorModeValue("light.100", "dark.100");
  const displayUiBg = useColorModeValue("light.200", "dark.200");
  return { bgColor, borderColor, displayUiBg };
};

export default useDisplayHooks;
