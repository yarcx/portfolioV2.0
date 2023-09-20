import { HStack, IconButton, Text, useColorMode, useDisclosure } from "@chakra-ui/react";
import { GiNightSky } from "react-icons/gi";
import { FaSun } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { DARK_MODE, HOME, LIGHT_MODE, PageLink } from "../utils/constants";
import { useLocation, useNavigate } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";
import useDisplayHooks from "../hooks/useDisplayHooks";

const PageInfoHeader = () => {
  const { colorMode, setColorMode } = useColorMode();
  const { bgColor } = useDisplayHooks();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const currentPage = PageLink.find((page) => page.route === pathname)?.link;

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <HStack
        as='header'
        justifyContent='space-between'
        p={3}
        pos='sticky'
        top='0'
        w='100%'
        bg={bgColor}
        zIndex={10}
        bgBlendMode='color-burn'
        opacity='.9'
      >
        <HStack as='div'>
          {currentPage !== HOME && (
            <IconButton
              aria-label='Go Back'
              background='none'
              _hover={{ opacity: ".9" }}
              isRound
              display={["none", "", "", "", "block"]}
              onClick={() => navigate(-1)}
              icon={<MdOutlineKeyboardBackspace />}
            />
          )}
          <IconButton
            aria-label='Go Back'
            background='none'
            _hover={{ opacity: ".9" }}
            isRound
            display={["block", "", "none", "none", "none"]}
            onClick={() => onOpen()}
            icon={<AiOutlineMenu />}
          />
          <Text>{currentPage || HOME}</Text>
        </HStack>

        {colorMode === LIGHT_MODE ? (
          <IconButton
            aria-label='Set Light Mode'
            onClick={() => setColorMode(DARK_MODE)}
            icon={<GiNightSky size={24} />}
            isRound
          />
        ) : (
          <IconButton
            aria-label='Set Dark Mode'
            isRound
            onClick={() => setColorMode(LIGHT_MODE)}
            icon={<FaSun size={24} />}
          />
        )}
      </HStack>
      <MobileSidebar isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default PageInfoHeader;
