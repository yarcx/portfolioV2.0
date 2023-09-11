import { Box, Button, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import PageInfoHeader from "../components/PageInfoHeader";
import useDisplayHooks from "../hooks/useDisplayHooks";
import { CONTACT_ME_LINK } from "../utils/constants";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { RiPinDistanceFill, RiTwitterFill } from "react-icons/ri";

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

      <HStack
        px={3}
        pos='relative'
        justifyContent='space-between'
        width='100%'
        borderBottom='1px solid'
        borderColor={borderColor}
        my='1rem'
      >
        <Button
          bg='none'
          color={grayText}
          leftIcon={<MdLocationPin />}
          colorScheme='teal'
          variant='solid'
          _hover={{ bg: "none" }}
          py='1px'
          px='0'
        >
          Nigeria
        </Button>
        <Button
          bg='none'
          color={grayText}
          leftIcon={<RiTwitterFill />}
          colorScheme='teal'
          variant='solid'
          _hover={{ bg: "none" }}
          py='1px'
          px='0'
        >
          Twitter
        </Button>
      </HStack>

      <HStack border='1px solid' borderColor={borderColor} py='.4rem' px='1rem'>
        <VStack width='full' justifyContent='start' alignItems='center'>
          <RiPinDistanceFill />

          <Box>
            <Image
              boxSize={["50px"]}
              rounded='full'
              border='4px solid'
              borderColor={bgColor}
              backgroundSize='contain'
              overflow='hidden'
              src={avatar}
              alt='profile picture'
              objectFit='cover'
              cursor='pointer'
              _hover={{ opacity: 0.98 }}
            />
          </Box>
        </VStack>
        <VStack alignItems='start'>
          <Text fontWeight='bold' fontSize='sm'>
            About Me
          </Text>
          <Text fontWeight='normal' fontSize='md'>
            About Me Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius laboriosam
            consequuntur laborum deleniti fugiat quisquam, sunt, eum distinctio placeat, rem iure
            atque quibusdam earum nihil id harum vitae quis in? Magnam sapiente, distinctio itaque
            tempora impedit dignissimos ab cupiditate molestias ratione, eligendi delectus,
            doloribus quo aliquam ullam nostrum esse laboriosam cum quod corrupti asperiores ipsa
            dolores molestiae totam! Commodi, quam.
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Home;
