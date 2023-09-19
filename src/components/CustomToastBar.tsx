import { Box, Text, useToast } from "@chakra-ui/react";
import { MdCheckCircle, MdOutlineClose } from "react-icons/md";
import useUiContext from "../hooks/useUiContext";

const CustomToastBar = ({ title }: { title: string }) => {
  const {
    state: { uiColor },
  } = useUiContext();
  const { closeAll } = useToast();
  return (
    <Box
      color='white'
      display='flex'
      gap='.5rem'
      alignItems='center'
      rounded='md'
      p={3}
      bg={uiColor}
      position='relative'
    >
      <MdCheckCircle />
      <Text mr='2rem'>{title}</Text>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        bg='0'
        pos='absolute'
        top='2'
        p='0'
        right='2'
        cursor='pointer'
        onClick={() => closeAll()}
      >
        <MdOutlineClose height='12px' />
      </Box>
    </Box>
  );
};

export default CustomToastBar;
