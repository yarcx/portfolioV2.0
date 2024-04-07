import { Box, Button, Input, Text, Textarea, VStack, useToast } from "@chakra-ui/react";
import PageInfoHeader from "../components/PageInfoHeader";
import useDisplayHooks from "../hooks/useDisplayHooks";
import useUiContext from "../hooks/useUiContext";
import { useForm, SubmitHandler } from "react-hook-form";
import CustomToastBar from "../components/CustomToastBar";
import supabase from "../utils/api";
import FooterLink from "../components/FooterLink";

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
        position: "bottom",
        render: () => <CustomToastBar title={"Message Submitted successfully."} />,
      });
      reset();
    } catch (error) {
      toast({
        status: "error",
        duration: 3000,
        isClosable: true,
        variant: "top-accent",
        position: "bottom",
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
            fontSize='md'
            disabled={isLoading}
            isLoading={isSubmitting}
          >
            Submit Message
          </Button>
        </VStack>
      </VStack>
      <Box pos='absolute' bottom={["5rem", "", "3rem", "2rem"]} w='full'>
        <FooterLink to=''>
          <Text>Back To Home</Text>
        </FooterLink>
      </Box>
    </Box>
  );
};

export default ContactMe;
