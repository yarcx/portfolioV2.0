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
  return (
    <Box as='aside' w={"300px"} display={{ base: "none", lg: "block" }} py='.6rem'>
      <Heading color='brand.100' pl={3} className='logoFonts' fontWeight={600}>
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
      </VStack>
    </Box>
  );
};

export default LeftSideBar;
