import {
  Button,
  HStack,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
  VStack,
  useToast,
  //   useColorMode,
} from "@chakra-ui/react";
import useUiContext from "../hooks/useUiContext";
import useDisplayHooks from "../hooks/useDisplayHooks";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import { addDoc } from "firebase/firestore/lite";
import { Iguestbook, IuserInfo, guestCollectionRef } from "../pages/Guestbook";
import CustomToastBar from "./CustomToastBar";
// import useUiContext from "../hooks/useUiContext";
// import useDisplayHooks from "../hooks/useDisplayHooks";

const GuestBookModal = () => {
  const { displayUiBg } = useDisplayHooks();
  const {
    state: {
      uiColor,
      modalProps: { user },
    },
    closeModal,
  } = useUiContext();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    // formState: { isLoading, errors, isSubmitting },
  } = useForm<{ message: "" }>();

  // const { colorMode } = useColorMode();

  //   const setMsgs = modalProps?.setMsgs as React.Dispatch<React.SetStateAction<string[]>>;

  const onSubmit = async ({ message }: { message: string }) => {
    const data: Iguestbook = { message, ...(user as IuserInfo) };
    try {
      await addDoc(guestCollectionRef, data);
      toast({
        status: "success",
        duration: 3000,
        isClosable: true,
        variant: "top-accent",
        position: "top",
        render: () => <CustomToastBar title={"Message Submitted"} />,
      });
      reset();
      closeModal();
    } catch (error) {
      toast({
        status: "error",
        duration: 3000,
        isClosable: true,
        variant: "top-accent",
        position: "top",
        render: () => <CustomToastBar title={"Something went wrong"} />,
      });
    }
    // setMsgs((prev: string[]) => [...prev, message]);
    // reset();
    // closeModal();

    console.log({ message, user: user });
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
