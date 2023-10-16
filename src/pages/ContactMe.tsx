import { Box, Button, HStack, Input, Text, Textarea, VStack, useToast } from "@chakra-ui/react";
import PageInfoHeader from "../components/PageInfoHeader";
import useDisplayHooks from "../hooks/useDisplayHooks";
import useUiContext from "../hooks/useUiContext";
import { useForm, SubmitHandler } from "react-hook-form";
// import { db } from "../db.config/firebase";
import { useEffect } from "react";
import CustomToastBar from "../components/CustomToastBar";
// import {
//   DocumentData,
//   QueryDocumentSnapshot,
//   addDoc,
//   collection,
//   getDocs,
// } from "firebase/firestore/lite";
import { Link } from "react-router-dom";
import { BsArrowBarRight } from "react-icons/bs";
import supabase from "../utils/api";

type IMessageField = {
  name: string;
  email: string;
  message: string;
  createdAt?: number;
};

const ContactMe = () => {
  const { borderColor, displayUiBg } = useDisplayHooks();
  // const [, setMessages] = useState<IMessageField[]>();
  const {
    state: { uiColor },
  } = useUiContext();
  const toast = useToast();

  // const collectionRef = collection(db, "messages");

  const getTodo = async () => {
    // try {
    //   const todo = await getDocs(collectionRef);
    //   const todoData = todo.docs.map((doc: QueryDocumentSnapshot<DocumentData, DocumentData>) => ({
    //     ...doc.data(),
    //   }));
    //   setMessages(todoData as IMessageField[]);
    // } catch (err) {
    //   console.log(err);
    // }
    try {
      // const { data, error } = await supabase.getChannels();
      const response = await supabase.from("messages").select("*");
      console.log("check data", response);
      // if (error) console.log("error", error);
    } catch (error) {
      if (error) console.log("error inside catch", error);
    }
  };

  useEffect(() => {
    getTodo();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isLoading, errors, isSubmitting },
  } = useForm<IMessageField>();

  const onSubmit: SubmitHandler<IMessageField> = async (data) => {
    try {
      // await addDoc(collectionRef, { ...data, createdAt: new Date().getTime() });
      await supabase
        .from("messages")
        .insert({ ...data })
        .single();
      toast({
        status: "success",
        duration: 3000,
        isClosable: true,
        variant: "top-accent",
        position: "top",
        render: () => <CustomToastBar title={"Message Submitted successfully."} />,
      });
      reset();
    } catch (error) {
      toast({
        status: "error",
        duration: 3000,
        isClosable: true,
        variant: "top-accent",
        position: "top",
        render: () => <CustomToastBar title={"Something went wrong."} status='error' />,
      });
    }
  };

  return (
    <Box as='main' w='full' pos='relative'>
      <PageInfoHeader />
      <VStack
        borderTop='.6px solid'
        borderColor={borderColor}
        justifyContent='center'
        alignItems='center'
        as='form'
        px='.6rem'
        py='1rem'
        name='contactMe'
        onSubmit={handleSubmit(onSubmit)}
      >
        <VStack align='start' w='full' mb='1rem'>
          <Input
            placeholder='Full Name'
            _active={{ borderColor: uiColor, outline: uiColor }}
            focusBorderColor={uiColor}
            bg={displayUiBg}
            type='text'
            size='md'
            errorBorderColor='crimson'
            {...register("name", { required: { value: true, message: "Name field is required" } })}
          />
          {errors.name && <Text color='crimson'>{errors.name.message}</Text>}
        </VStack>
        <VStack align='start' w='full' mb='1rem'>
          <Input
            _active={{ borderColor: uiColor, outline: uiColor }}
            focusBorderColor={uiColor}
            placeholder='Email address'
            bg={displayUiBg}
            type='email'
            size='md'
            {...register("email", {
              required: { value: true, message: "Email field is required" },
            })}
          />

          {errors["email"] && <Text color='crimson'>{errors.email.message}</Text>}
        </VStack>
        <VStack align='start' w='full' mb='1rem'>
          <Textarea
            focusBorderColor={uiColor}
            placeholder='Your Message'
            bg={displayUiBg}
            minH={"220px"}
            {...register("message", {
              required: { value: true, message: "Messages field is required" },
            })}
            errorBorderColor='crimson'
          />

          {errors["message"] && <Text color='crimson'>{errors?.message?.message}</Text>}
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
            isLoading={isSubmitting}
          >
            Submit Message
          </Button>
        </VStack>
      </VStack>

      <HStack
        as='footer'
        pos='absolute'
        bottom={0}
        justifyContent='end'
        mt='1rem'
        px='1rem'
        mb={["5rem", "", "", "", ""]}
        w='100%'
      >
        <Link to='/'>
          <HStack
            as='div'
            align='center'
            transition='all 0.3s ease-in'
            _hover={{ textDecor: "underline" }}
          >
            <Text>Go back Home</Text>
            <BsArrowBarRight />
          </HStack>
        </Link>
      </HStack>
    </Box>
  );
};

export default ContactMe;
