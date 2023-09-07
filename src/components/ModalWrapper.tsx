import { Modal, ModalOverlay, ModalContent, ModalCloseButton } from "@chakra-ui/react";
import useUiContext from "../hooks/useUiContext";
import useDisplayHooks from "../hooks/useDisplayHooks";
import DisplaySettingsModal from "./DisplaySettingsModal";

const SelectedModal = {
  Settings_Modal: <DisplaySettingsModal />,
};

const ModalWrapper = () => {
  const {
    state: { isModalOpen, modalType },
    closeSettingsModal,
  } = useUiContext();
  const { bgColor, borderColor } = useDisplayHooks();

  return (
    <Modal isOpen={isModalOpen} onClose={closeSettingsModal} isCentered>
      <ModalOverlay bg={"transparent"} backdropFilter='blur(1px) hue-rotate(10deg)' />
      <ModalContent bg={bgColor} border='1px solid' borderColor={borderColor}>
        <ModalCloseButton />

        {SelectedModal[modalType as keyof typeof SelectedModal]}
      </ModalContent>
    </Modal>
  );
};

export default ModalWrapper;
