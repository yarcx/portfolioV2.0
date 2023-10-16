import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "./utils/themes.ts";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import UiDisplayContextProvider from "./context/UiDisplayContext.tsx";
import ModalWrapper from "./components/ModalWrapper.tsx";
import AuthContextProvider from "./context/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <UiDisplayContextProvider>
          <ChakraProvider resetCSS theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
            <ModalWrapper />
          </ChakraProvider>
        </UiDisplayContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
