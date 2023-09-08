import { Box, Button, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PageInfoHeader from "../components/PageInfoHeader";
import useDisplayHooks from "../hooks/useDisplayHooks";
import { CONTACT_ME_LINK } from "../utils/constants";
import { Link } from "react-router-dom";

const bannerImg = "./twitterBanner.jpeg";
const avatar = "./avatar.jpeg";

const Home = () => {
  const { borderColor, bgColor, grayText } = useDisplayHooks();
  return (
    <Box as='main' w='full'>
      <PageInfoHeader />
      <HStack
        borderTop='.6px solid'
        borderColor={borderColor}
        justifyContent='center'
        alignItems='center'
        as='section'
        h={["", "", "", "", "190px"]}
      >
        <Image
          width='100%'
          objectFit='fill'
          objectPosition='top'
          height='100%'
          src={bannerImg}
          cursor='pointer'
          alt='banner image'
        />
      </HStack>

      <HStack py={5} px={3} pos='relative' justifyContent='space-between' width='100%'>
        <Box>
          <Image
            boxSize={["100px", "100px", "110px", "120px", "134px"]}
            rounded='full'
            border='4px solid'
            borderColor={bgColor}
            pos='absolute'
            backgroundSize='contain'
            top={["-40px", "-40px", "-40px", "-50px", "-70px"]}
            overflow='hidden'
            src={avatar}
            alt='profile picture'
            objectFit='cover'
            cursor='pointer'
            _hover={{ opacity: 0.98 }}
          />
        </Box>

        <Button
          size={"sm"}
          border='1px solid'
          borderColor={borderColor}
          bg='transparent'
          rounded='full'
        >
          <Link to={CONTACT_ME_LINK}>Contact Me</Link>
        </Button>
      </HStack>
      <HStack px={3} pos='relative' justifyContent='space-between' width='100%'>
        <Box>
          <Heading size={["sm", "sm", "md", "md", "md"]}>Hassan M. Yakub</Heading>
          <Text fontSize='sm' color={grayText}>
            @Yakubuh56@gmail.com
          </Text>
        </Box>
      </HStack>

      <HStack px={3} pos='relative' justifyContent='space-between' width='100%'></HStack>
    </Box>
  );
};

export default Home;
