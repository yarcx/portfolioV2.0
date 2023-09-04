import {
  Box,
  Button,
  ButtonGroup,
  Drawer,
  HStack,
  Heading,
  Text,
  VStack,
  useColorMode,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { LIGHT_MODE, PageLink } from "../../utils/constants";
import { ReactNode, useState } from "react";

interface LinkButtonProps {
  link: string;
  route: string;
  isActive: boolean;
  Icon: ReactNode;
}

const LinkButton = ({ link, route, isActive, Icon }: LinkButtonProps) => {
  const { colorMode } = useColorMode();

  return (
    <Link to={route} key={link} style={{ width: "100%" }}>
      <ButtonGroup role='group' w='100%'>
        <Button
          textAlign='left'
          transition='all .3s ease'
          py='1rem'
          rounded='30px'
          bg='none'
          fontWeight={isActive ? "extrabold" : ""}
          _groupHover={{
            rounded: "30px",
            textAlign: "left",
            bg: colorMode === LIGHT_MODE ? "rgb(243 244 246 / 1)" : "rgb(240 240 240 / .1)",
            color: colorMode === LIGHT_MODE ? "black" : "white",
          }}
        >
          <HStack gap={2}>
            {Icon} <Text>{link}</Text>
          </HStack>
        </Button>
      </ButtonGroup>
    </Link>
  );
};

const LeftSideBar = () => {
  const { pathname } = useLocation();
  const [hc, setHc] = useState(false);
  console.log("🚀 ~ file: LeftSideBar.tsx:54 ~ LeftSideBar ~ hc:", hc);

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Box
        as='aside'
        w={["", "", "170px", "250px"]}
        display={["none", "none", "block", "block"]}
        py='.6rem'
      >
        <Heading
          color={!hc ? "red.200" : "brand.100"}
          pl={3}
          className='logoFonts'
          fontWeight={600}
        >
          <Link to='/'>Yarcx</Link>
        </Heading>
        <VStack align='flex-start' listStyleType='none' my='1rem' mx='0'>
          {PageLink.map(({ link, route, icon }) => {
            return (
              <LinkButton
                key={link}
                link={link}
                route={route}
                isActive={pathname === route}
                Icon={icon}
              />
            );
          })}

          {/* Display Settings */}
          <Button
            _hover={{ bg: !hc ? "red.200" : "brand.100", opacity: "0.8" }}
            size='md'
            bg={!hc ? "red.200" : "brand.100"}
            height='48px'
            width='200px'
            color='white'
            rounded='3xl'
            mt='.5rem'
            onClick={() => {
              setHc(!hc);
              onOpen();
            }}
          >
            Display Settings
          </Button>
        </VStack>
      </Box>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LeftSideBar;
