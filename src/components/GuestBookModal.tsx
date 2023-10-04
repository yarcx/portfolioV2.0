import {
  Button,
  HStack,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
  VStack,
  //   useColorMode,
} from "@chakra-ui/react";
import useUiContext from "../hooks/useUiContext";
import useDisplayHooks from "../hooks/useDisplayHooks";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { useForm } from "react-hook-form";
// import useUiContext from "../hooks/useUiContext";
// import useDisplayHooks from "../hooks/useDisplayHooks";

const GuestBookModal = () => {
  const { displayUiBg } = useDisplayHooks();
  const {
    state: { uiColor, modalProps },
    closeModal,
  } = useUiContext();

  const {
    register,
    handleSubmit,
    reset,
    // formState: { isLoading, errors, isSubmitting },
  } = useForm<{ message: "" }>();

  // const { colorMode } = useColorMode();

  const setMsgs = modalProps?.setMsgs as React.Dispatch<React.SetStateAction<string[]>>;

  const onSubmit = async ({ message }: { message: string }) => {
    setMsgs((prev: string[]) => [...prev, message]);
    reset();
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalHeader textAlign='center' fontSize='xl' fontWeight='extrabold'>
        Post Your Message
      </ModalHeader>
      <ModalBody>
        <VStack align='start' w='full' mb='1rem'>
          <Input
            _active={{ borderColor: uiColor, outline: uiColor }}
            focusBorderColor={uiColor}
            placeholder='Enter your message'
            bg={displayUiBg}
            type='message'
            size='md'
            {...register("message")}
          />
        </VStack>
      </ModalBody>
      <ModalFooter>
        <HStack justifyContent='center' align='center' w='full'>
          <Button
            color={"white"}
            size='md'
            // bg={colorMode === LIGHT_MODE ? "black" : "white"}
            py='.6rem'
            px='1rem'
            fontSize='lg'
            bg={uiColor}
            leftIcon={<HiOutlineChatBubbleLeftRight />}
            fontWeight='normal'
            _hover={{ opacity: ".9" }}
            type='submit'
          >
            Submit Message
          </Button>
        </HStack>
      </ModalFooter>
    </form>
  );
};

export default GuestBookModal;
