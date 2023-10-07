type IModalProps = {
  [key: string]: unknown;
};
export interface IState {
  uiColor: string;
  isModalOpen: boolean;
  modalType: string;
  modalProps: IModalProps;
}

export interface IuserInfo {
  displayName: string;
  uid: string;
  photoURL: string;
}
export interface Iguestbook extends IuserInfo {
  message: string;
  createdAt?: number;
}
