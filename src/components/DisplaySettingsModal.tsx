import { ModalFooter, ModalBody, Button, ModalHeader } from "@chakra-ui/react";
import useUiContext from "../hooks/useUiContext";

const DisplaySettingsModal = () => {
  const {
    state: { modalProps },
    closeSettingsModal,
  } = useUiContext();
  const title = modalProps?.title as string;

  return (
    <>
      <ModalHeader>{title || "Modal Title"}</ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis velit molestiae tempore
        libero. Voluptatum exercitationem sunt eum, ipsum facilis voluptatem consectetur alias
        distinctio excepturi rem maxime et ad earum numquam. Fugit amet distinctio quam aliquid,
        ipsum voluptas nobis suscipit doloribus delectus molestias. Sapiente repellendus corrupti
        nesciunt error officia at deserunt explicabo fugit, quasi libero id minima qui, pariatur
        porro sequi? Eveniet sed aliquam, id voluptates vitae odio excepturi quam maiores saepe
        tempore. Deleniti, laudantium saepe sed itaque deserunt sunt magnam error ab reprehenderit
        aliquam alias nam maiores, nemo sequi facere.
      </ModalBody>

      <ModalFooter>
        <Button mr={3} onClick={closeSettingsModal}>
          Close
        </Button>
        <Button variant='ghost'>Secondary Action</Button>
      </ModalFooter>
    </>
  );
};

export default DisplaySettingsModal;
