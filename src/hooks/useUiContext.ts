import { useContext } from "react";
import { UiDisplayContext } from "../context/UiDisplayContext";

const useUiContext = () => {
  return useContext(UiDisplayContext);
};

export default useUiContext;
