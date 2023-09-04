// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const colors = {
  brand: {
    100: "#188CD8",
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  dark: {
    100: "rgb(47, 51, 54)",
  },
  light: {
    100: "rgb(207, 217, 222)",
  },
};

export const theme = extendTheme({ colors, config });
