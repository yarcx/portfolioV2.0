import { Box, useColorModeValue } from "@chakra-ui/react";
import { BLACK_BG, WHITE_BG } from "../utils/constants";

const Contact = () => {
  const bg = useColorModeValue(BLACK_BG, WHITE_BG);

  return (
    <Box h='100vh' bg={bg}>
      Contact us page
    </Box>
  );
};

export default Contact;
