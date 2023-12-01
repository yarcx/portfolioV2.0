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
    200: "#16181C",
    300: "#71767b",
  },
  light: {
    100: "rgb(207, 217, 222)",
    200: "#F6F9F9",
    300: "#526471",
  },
  checkbox: {
    0: { 50: "#188CD8", 500: "#188CD8", 900: "#188CD8", gray: { 100: "#188CD8" } },
    1: { 50: "#FFD400", 500: "#FFD400", 900: "#FFD400", gray: { 100: "#FFD400" } },
    2: { 50: "#F9197F", 500: "#F9197F", 900: "#F9197F", gray: { 100: "#F9197F" } },
    3: { 50: "#7855FF", 500: "#7855FF", 900: "#7855FF", gray: { 100: "#7855FF" } },
    4: { 50: "#FF7900", 500: "#FF7900", 900: "#FF7900", gray: { 100: "#FF7900" } },
    5: { 50: "#00BA7C", 500: "#00BA7C", 900: "#00BA7C", gray: { 100: "#00BA7C" } },
  },
};

export const theme = extendTheme({ colors, config });
