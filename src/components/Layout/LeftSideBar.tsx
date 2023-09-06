import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Heading,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { LIGHT_MODE, PageLink } from "../../utils/constants";
import { ReactNode } from "react";
import useUiContext from "../../hooks/useUiContext";

interface LinkButtonProps {
  link: string;
  route: string;
  isActive: boolean;
  Icon: ReactNode;
}

export const SideBarButtons = () => {
  const { pathname } = useLocation();

  const {
    state: { uiColor },
    changeUiColor,
  } = useUiContext();
  return (
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
        _hover={{ bg: uiColor, opacity: "0.8" }}
        size='md'
        bg={uiColor}
        height='48px'
        width={["auto", "", "", "200px"]}
        color='white'
        rounded='3xl'
        mt='.5rem'
        onClick={() => changeUiColor("brand.100")}
      >
        Display Settings
      </Button>
    </VStack>
  );
};

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
  const {
    state: { uiColor },
  } = useUiContext();

  return (
    <>
      <Box
        as='aside'
        w={["", "", "170px", "250px"]}
        display={["none", "none", "block", "block"]}
        py='.6rem'
      >
        <Heading color={uiColor} pl={3} className='logoFonts' fontWeight={600}>
          <Link to='/'>Yarcx</Link>
        </Heading>
        <SideBarButtons />
      </Box>
    </>
  );
};

export default LeftSideBar;
