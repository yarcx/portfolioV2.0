import { Box, Button, Input, Textarea, VStack } from "@chakra-ui/react";
import PageInfoHeader from "../components/PageInfoHeader";
import useDisplayHooks from "../hooks/useDisplayHooks";
import useUiContext from "../hooks/useUiContext";
import { useForm, SubmitHandler } from "react-hook-form";

type IMessageField = {
  name: string;
  email: string;
  message: string;
};

const ContactMe = () => {
  const { borderColor, displayUiBg } = useDisplayHooks();
  const {
    state: { uiColor },
  } = useUiContext();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<IMessageField>();

  const onSubmit: SubmitHandler<IMessageField> = (data) => console.log(data, "After submision");

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
            _focus={{ borderColor: uiColor, outline: uiColor }}
            bg={displayUiBg}
            type='text'
            size='md'
            {...register("name")}
          />
        </VStack>
        <VStack align='start' w='full' mb='1rem'>
          <Input
            _active={{ borderColor: uiColor, outline: uiColor }}
            _focus={{ borderColor: uiColor, outline: uiColor }}
            placeholder='Email'
            bg={displayUiBg}
            type='email'
            size='md'
            {...register("email")}
          />
        </VStack>
        <VStack align='start' w='full' mb='1rem'>
          <Textarea
            _active={{ borderColor: uiColor, outline: uiColor }}
            _focus={{ borderColor: uiColor, outline: uiColor }}
            placeholder='Message'
            bg={displayUiBg}
            minH={"190px"}
            {...register("message")}
          />
        </VStack>
        <VStack align='start' w='full' mb='1rem'>
          <Button
            type='submit'
            _hover={{ bg: uiColor, opacity: "0.8" }}
            color='white'
            bg={uiColor}
            size='lg'
          >
            Submit Message
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default ContactMe;
