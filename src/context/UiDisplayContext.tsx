import { createContext, useReducer, ReactElement } from "react";

export const Change_Ui_Color = "Change_Ui_Color";
const Settings_Modal = "Settings_Modal";
const Close_Modal = "Close_Modal";

export interface IState {
  uiColor: string;
  isModalOpen: boolean;
  modalType: string;
}

const initialValue: IState = {
  uiColor: "brand.100",
  isModalOpen: false,
  modalType: "",
};

export const UiDisplayContext = createContext<{
  state: IState;
  dispatch: React.ReducerWithoutAction<unknown>;
}>({ dispatch: () => {}, state: initialValue });

function reducer(state: IState, action: { type: string; payload: unknown }) {
  switch (action.type) {
    case Change_Ui_Color:
      return { ...state, uiColor: action.payload };
    case Settings_Modal:
      return {
        ...state,
        isModal: true,
        modalType: Settings_Modal,
      };
    case Close_Modal:
      return {
        ...state,
        isModal: false,
        modalType: "",
      };
    default:
      return { ...state };
  }
}

const UiDisplayContextProvider = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <UiDisplayContext.Provider value={{ state, dispatch }}>{children}</UiDisplayContext.Provider>
  );
};

export default UiDisplayContextProvider;
