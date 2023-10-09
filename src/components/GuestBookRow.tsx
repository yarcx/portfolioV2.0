import { Avatar, Box, Text } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import useDisplayHooks from "../hooks/useDisplayHooks";

const GuestBookRow = ({
  message,
  displayName,
  photoURL,
}: {
  message: string;
  displayName: string;
  photoURL: string;
}) => {
  const { borderColor } = useDisplayHooks();
  return (
    <Box
      mt='.5rem'
      display='flex'
      alignItems='self-start'
      justifyContent='start'
      border='.6px solid'
      rounded='lg'
      // borderTop='.6px solid'
      // borderBottom='.6px solid'
      borderColor={borderColor}
      px='1rem'
      py='.6rem'
      gap='1rem'
    >
      <Box display='flex' alignItems='center'>
        <Avatar
          size='sm'
          name={displayName}
          icon={<AiOutlineUser fontSize='1.5rem' src={photoURL} />}
          src={photoURL}
        />
      </Box>
      <Box>
        <Text fontSize='md' fontWeight='semibold'>
          {displayName || "No Name"} .
        </Text>
        <Text fontSize='sm' fontWeight='normal'>
          {message}
        </Text>
      </Box>
    </Box>
  );
};

export default GuestBookRow;
