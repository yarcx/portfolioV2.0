import { Box, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsArrowBarRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { animation } from "../utils/constants";
import { ReactNode } from "react";

const FooterLink = ({ to = "resume", children }: { to: string; children: ReactNode }) => {
  return (
    <HStack as='footer' justifyContent='end' w='full' mt='1rem' px='1rem'>
      <Link to={`/${to}`}>
        <HStack
          as='div'
          align='center'
          transition='all 0.3s ease-in'
          _hover={{ textDecor: "underline" }}
        >
          {children}
          <Box as={motion.div} transition='0.5s linear' animation={animation}>
            <BsArrowBarRight />
          </Box>
        </HStack>
      </Link>
    </HStack>
  );
};

export default FooterLink;
