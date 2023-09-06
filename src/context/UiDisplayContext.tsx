import { useDisclosure } from "@chakra-ui/react";
import { createContext, useReducer, ReactElement, useMemo } from "react";

export const Change_Ui_Color = "Change_Ui_Color";
const Settings_Modal = "Settings_Modal";
const Close_Modal = "Close_Modal";

export interface IState {
  uiColor: string;
  isModalOpen: boolean;
  modalType: string;
}

const initialState: IState = {
  uiColor: "brand.100",
  isModalOpen: false,
  modalType: "",
};

interface IUiDisplayContext {
  changeUiColor: (color: string) => void;
  closeSettingsModal: () => void;
  openSettingsModal: () => void;
  state: {
    uiColor: string;
    isModalOpen: boolean;
    modalType: string;
  };
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
      return { ...state, uiColor: action.payload };
    case Settings_Modal:
      return {
        ...state,
        isModalOpen: true,
        modalType: Settings_Modal,
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

  const openSettingsModal = () => {
    dispatch({
      type: Settings_Modal,
      payload: {},
    });
  };

  const closeSettingsModal = () => {
    dispatch({
      type: Close_Modal,
      payload: {},
    });
    onClose();
  };

  const values = useMemo(
    () => ({
      state,
      changeUiColor,
      openSettingsModal,
      closeSettingsModal,
    }),
    [state]
  );

  return <UiDisplayContext.Provider value={values}>{children}</UiDisplayContext.Provider>;
};

export default UiDisplayContextProvider;
