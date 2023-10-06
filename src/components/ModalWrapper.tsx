import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import useUiContext from "../hooks/useUiContext";
import useDisplayHooks from "../hooks/useDisplayHooks";
import DisplaySettingsModal from "./DisplaySettingsModal";
import GuestBookModal from "./GuestBookModal";
import SignUpModal from "./SignUpModal";

const SelectedModal = {
  Settings_Modal: <DisplaySettingsModal />,
  Post_As_Guest_Modal: <GuestBookModal />,
  SignUp_Modal: <SignUpModal />,
};

const ModalWrapper = () => {
  const {
    state: { isModalOpen, modalType },
    closeModal,
  } = useUiContext();
  const { bgColor, borderColor } = useDisplayHooks();

  return (
    <Modal
      size={["sm", "md", "md", "lg"]}
      isOpen={isModalOpen}
      onClose={closeModal}
      isCentered={
        SelectedModal[modalType as keyof typeof SelectedModal] !==
        SelectedModal["Post_As_Guest_Modal"]
      }
    >
      <ModalOverlay bg={"transparent"} backdropFilter='blur(1px) hue-rotate(10deg)' />
      <ModalContent bg={bgColor} border='1px solid' borderColor={borderColor}>
        {SelectedModal[modalType as keyof typeof SelectedModal]}
      </ModalContent>
    </Modal>
  );
};

export default ModalWrapper;
