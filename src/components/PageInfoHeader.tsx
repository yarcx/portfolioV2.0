import {
  Button,
  HStack,
  IconButton,
  Text,
  Tooltip,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { GiNightSky } from "react-icons/gi";
import { FaSun } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { DARK_MODE, HOME, LIGHT_MODE, PageLink, RESUME } from "../utils/constants";
import { useLocation, useNavigate } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";
import useDisplayHooks from "../hooks/useDisplayHooks";
import useUiContext from "../hooks/useUiContext";

const PageInfoHeader = () => {
  const { colorMode, setColorMode } = useColorMode();
  const { bgColor } = useDisplayHooks();
  const { pathname } = useLocation();
  const {
    state: { uiColor },
  } = useUiContext();
  const navigate = useNavigate();
  const currentPage = PageLink.find((page) => page.route === pathname)?.link;

  const { isOpen, onClose, onOpen } = useDisclosure();

  const pdfDownloadLink =
    "https://drive.google.com/file/d/121bz89M5namem-jx9GYxUnzLRKHi0o03/view?usp=sharing";

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

        {currentPage === RESUME && (
          <Button
            fontSize={"md"}
            fontWeight='normal'
            _hover={{ bg: uiColor, opacity: "", color: "white" }}
            transition='all .2s linear'
          >
            <a href={pdfDownloadLink} download='Hassan Resume'>
              Download Resume
            </a>
          </Button>
        )}

        <Tooltip
          label={colorMode === LIGHT_MODE ? "Turn on Dark Mode" : "Turn on Light Mode"}
          hasArrow
          arrowSize={10}
          borderRadius={5}
          closeOnClick={true}
        >
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
        </Tooltip>
      </HStack>
      <MobileSidebar isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default PageInfoHeader;
