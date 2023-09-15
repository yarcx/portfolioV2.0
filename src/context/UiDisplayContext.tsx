import { useDisclosure } from "@chakra-ui/react";
import { createContext, useReducer, ReactElement, useMemo, useCallback } from "react";

export const Change_Ui_Color = "Change_Ui_Color";
const Settings_Modal = "Settings_Modal";
const Close_Modal = "Close_Modal";

type IModalProps = {
  [key: string]: unknown;
};
export interface IState {
  uiColor: string;
  isModalOpen: boolean;
  modalType: string;
  modalProps: IModalProps;
}

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
  closeSettingsModal: () => void;
  openSettingsModal: (data?: unknown) => void;
  state: IState;
}

export const UiDisplayContext = createContext<IUiDisplayContext>({
  changeUiColor: () => {},
  closeSettingsModal: () => {},
  openSettingsModal: () => {},
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

  const openSettingsModal = (modalData?: unknown) => {
    dispatch({
      type: Settings_Modal,
      payload: modalData,
    });
  };

  const closeSettingsModal = useCallback(() => {
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
      openSettingsModal,
      closeSettingsModal,
    }),
    [state, closeSettingsModal]
  );

  return <UiDisplayContext.Provider value={values}>{children}</UiDisplayContext.Provider>;
};

export default UiDisplayContextProvider;
