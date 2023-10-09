type IModalProps = {
  [key: string]: unknown;
};
export interface IState {
  uiColor: string;
  isModalOpen: boolean;
  modalType: string;
  modalProps: IModalProps;
}

export interface IUserInfo {
  displayName: string;
  uid: string;
  photoURL: string;
  provider?: string;
}
export interface IGuestbook extends IUserInfo {
  message: string;
  createdAt?: number;
}
