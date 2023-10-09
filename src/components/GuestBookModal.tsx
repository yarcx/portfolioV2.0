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
import CustomToastBar from "./CustomToastBar";
import { useState } from "react";
import { guestCollectionRef } from "../utils/constants";
import { IGuestbook, IUserInfo } from "../utils/types";

const GuestBookModal = () => {
  const [submittingPost, setSubmittingPost] = useState(false);
  const { displayUiBg } = useDisplayHooks();
  const {
    state: {
      uiColor,
      modalProps: { user },
    },
    closeModal,
  } = useUiContext();
  const toast = useToast();

  const { register, handleSubmit, reset } = useForm<{ message: "" }>();

  const onSubmit = async ({ message }: { message: string }) => {
    setSubmittingPost(true);
    const data: IGuestbook = { message, createdAt: new Date().getTime(), ...(user as IUserInfo) };
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
        render: () => <CustomToastBar status='error' title={"Something went wrong"} />,
      });
    } finally {
      setSubmittingPost(false);
    }
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
            isLoading={submittingPost}
            disabled={submittingPost}
          >
            Submit Message
          </Button>
        </HStack>
      </ModalFooter>
    </form>
  );
};

export default GuestBookModal;
