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

    // "brand.100", "#FFD400", "#F9197F", "#7855FF", "#FF7900", "#00BA7C"
  },
  dark: {
    100: "rgb(47, 51, 54)",
    200: "#16181C",
    300: "#71767b",
  },
  light: {
    100: "rgb(207, 217, 222)",
    200: "#F6F9F9",
    300: "#526471",
  },
};

export const theme = extendTheme({
  colors,
  config,
});
