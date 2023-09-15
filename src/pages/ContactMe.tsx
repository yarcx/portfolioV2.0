import { Box, Button, FormErrorMessage, Input, Textarea, VStack } from "@chakra-ui/react";
import PageInfoHeader from "../components/PageInfoHeader";
import useDisplayHooks from "../hooks/useDisplayHooks";
import useUiContext from "../hooks/useUiContext";
import { useForm, SubmitHandler } from "react-hook-form";
1;
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../db.config/firebase";
import { useEffect, useState } from "react";

type IMessageField = {
  name: string;
  email: string;
  message: string;
};

const ContactMe = () => {
  const { borderColor, displayUiBg } = useDisplayHooks();
  const [messages, setMessages] = useState<IMessageField[]>();
  const {
    state: { uiColor },
  } = useUiContext();

  const collectionRef = collection(db, "messages");

  useEffect(() => {
    const getTodo = async () => {
      try {
        const todo = await getDocs(collectionRef);
        console.log({ todo });
        const todoData = todo.docs.map((doc) => ({ ...doc.data() }));
        setMessages(todoData as IMessageField[]);
      } catch (err) {
        console.log(err);
      }
    };
    getTodo();
  }, []);

  console.log(messages);
  const {
    register,
    handleSubmit,
    formState: { isLoading, errors },
  } = useForm<IMessageField>();

  const onSubmit: SubmitHandler<IMessageField> = async (data) => {
    try {
      const res = await addDoc(collectionRef, data);
      console.log(res, "After submision");
    } catch (error) {
      console.log(error, "if error submision");
    }
  };

  console.log(errors, "errors");

  return (
    <Box as='main' w='full'>
      <PageInfoHeader />
      <VStack
        borderTop='.6px solid'
        borderColor={borderColor}
        justifyContent='center'
        alignItems='center'
        as='form'
        p='1rem'
        onSubmit={handleSubmit(onSubmit)}
      >
        <VStack align='start' w='full' mb='1rem'>
          <Input
            placeholder='Name'
            _active={{ borderColor: uiColor, outline: uiColor }}
            // _focus={{ borderColor: uiColor, outline: uiColor }}
            focusBorderColor={uiColor}
            bg={displayUiBg}
            type='text'
            size='md'
            errorBorderColor='red.600'
            {...register("name", { required: { value: true, message: "Name field is required" } })}
          />
          {errors["name"] && <FormErrorMessage>Name is required.</FormErrorMessage>}
        </VStack>
        <VStack align='start' w='full' mb='1rem'>
          <Input
            _active={{ borderColor: uiColor, outline: uiColor }}
            focusBorderColor={uiColor}
            placeholder='Email'
            bg={displayUiBg}
            type='email'
            size='md'
            {...register("email", {
              required: { value: true, message: "Email field is required" },
            })}
          />

          {errors["email"] && <FormErrorMessage>Name is required.</FormErrorMessage>}
        </VStack>
        <VStack align='start' w='full' mb='1rem'>
          <Textarea
            _active={{ borderColor: uiColor, outline: uiColor }}
            focusBorderColor={uiColor}
            placeholder='Message'
            bg={displayUiBg}
            minH={"220px"}
            {...register("message", {
              required: { value: true, message: "Messages field is required" },
            })}
          />

          {errors["message"] && <FormErrorMessage>Message is required.</FormErrorMessage>}
        </VStack>
        <VStack align='start' w='full' mb='1rem'>
          <Button
            type='submit'
            _hover={{ bg: uiColor, opacity: "0.8" }}
            color='white'
            bg={uiColor}
            size='lg'
            height='46px'
            rounded='3xl'
            px='1rem'
            disabled={isLoading}
            isLoading={isLoading}
          >
            Submit Message
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default ContactMe;
