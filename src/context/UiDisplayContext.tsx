import { useDisclosure } from "@chakra-ui/react";
import { createContext, useReducer, ReactElement, useMemo, useCallback } from "react";
import {
  Change_Ui_Color,
  Close_Modal,
  Post_As_Guest_Modal,
  Settings_Modal,
  SignUp_Modal,
} from "../utils/constants";
import { IState } from "../utils/types";

const initialState: IState = {
  uiColor: localStorage.getItem("uiColor")
    ? (localStorage.getItem("uiColor") as string)
    : "brand.100",
  isModalOpen: false,
  modalType: "",
  modalProps: {},
};

interface IUiDisplayContext {
  changeUiColor: (color: string) => void;
  closeModal: () => void;
  openModal: (type: string, data?: unknown) => void;
  state: IState;
}

export const UiDisplayContext = createContext<IUiDisplayContext>({
  changeUiColor: () => {},
  closeModal: () => {},
  openModal: () => {},
  state: initialState,
});

const reducer = (state: IState, action: { type: string; payload: unknown }) => {
  switch (action.type) {
    case Change_Ui_Color:
      typeof action.payload == "string" &&
        localStorage.setItem("uiColor", action?.payload as string);
      return { ...state, uiColor: action.payload };
    case Settings_Modal:
      return {
        ...state,
        isModalOpen: true,
        modalType: Settings_Modal,
        modalProps: action.payload,
      };
    case Post_As_Guest_Modal:
      return {
        ...state,
        isModalOpen: true,
        modalType: Post_As_Guest_Modal,
        modalProps: action.payload,
      };
    case SignUp_Modal:
      return {
        ...state,
        isModalOpen: true,
        modalType: SignUp_Modal,
        modalProps: action.payload,
      };
    case Close_Modal:
      return {
        ...state,
        isModalOpen: false,
        modalType: "",
      };
    default:
      return state;
  }
};

const UiDisplayContextProvider = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer(reducer, initialState as never);
  const { onClose } = useDisclosure();

  const changeUiColor = (color: string) => {
    dispatch({ type: Change_Ui_Color, payload: color });
  };

  const openModal = (type: string, modalData?: unknown) => {
    dispatch({
      type: type,
      payload: modalData,
    });
  };

  const closeModal = useCallback(() => {
    dispatch({
      type: Close_Modal,
      payload: {},
    });
    onClose();
  }, []);

  const values = useMemo(
    () => ({
      state,
      changeUiColor,
      openModal,
      closeModal,
    }),
    [state, closeModal]
  );

  return <UiDisplayContext.Provider value={values}>{children}</UiDisplayContext.Provider>;
};

export default UiDisplayContextProvider;
