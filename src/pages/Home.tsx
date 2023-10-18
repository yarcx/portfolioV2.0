import { Box, Button, HStack, Heading, Image, Text, VStack, keyframes } from "@chakra-ui/react";
import PageInfoHeader from "../components/PageInfoHeader";
import useDisplayHooks from "../hooks/useDisplayHooks";
import { CONTACT_ME_LINK, easyLinks } from "../utils/constants";
import { Link } from "react-router-dom";
import { BsArrowBarRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const bannerImg = "./twitterBanner.jpeg";
const avatar = "./avatar.jpeg";

const animationKeyframes = keyframes`
  0% { transform: translateX(.8rem) }
  50% { transform: translateX(.4rem) }
  75% { transform: translateX(.1rem) }
  100% { transform: translateX(-0.2rem) }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

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
        my='1rem'
        className='scroll-parent'
        borderBottom='1px solid'
        borderColor={borderColor}
      >
        <Marquee>
          <HStack px={3} justifyContent='space-between' gap='1rem'>
            {easyLinks.map((item, index) => (
              <Button
                key={index}
                bg='none'
                color={grayText}
                leftIcon={item.icon}
                colorScheme='teal'
                variant='solid'
                _hover={{ bg: "none" }}
                py='1px'
                px='0'
                fontSize='sm'
              >
                <Text _hover={{ color: grayText }} transition='color .2s ease'>
                  {item.title}
                </Text>
              </Button>
            ))}
          </HStack>
        </Marquee>
        {/* <HStack
          px={3}
          ml='3rem'
          justifyContent='space-between'
          width='100%'
          overflow='auto'
          gap='5rem'
          className='scroll-element secondary'
        >
          {easyLinks.map((item, index) => (
            <Button
              key={index}
              bg='none'
              color={grayText}
              leftIcon={item.icon}
              colorScheme='teal'
              variant='solid'
              _hover={{ bg: "none" }}
              py='1px'
              px='0'
              fontSize='sm'
            >
              <Text _hover={{ color: grayText }} transition='color .2s ease'>
                {item.title}
              </Text>
            </Button>
          ))}
        </HStack> */}
      </HStack>

      <HStack
        borderBottom='1px solid'
        alignItems='stretch'
        borderColor={borderColor}
        pt='.5rem'
        pb='2rem'
        px='1rem'
      >
        <VStack width='60%' justifyContent='start' alignItems='center'>
          {/* <MdPersonPinCircle /> */}

          <Box minW='50px'>
            <Image
              boxSize={["50px", "60px"]}
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
          <Text fontWeight='medium' fontSize='sm' pt='0' mt='0'>
            About Me
          </Text>
          <Text fontWeight='normal' fontSize='sm'>
            Hello there! I'm Hassan Yaqub . A Software Engineer & Technical Writer Based in Nigeria.
            I'm Experienced in building pixel-perfect Frontend application and server side
            applications (Backend). I'm passionate about sharing my experience in my career, and
            also some technologies/concept that i believe can help someone out there. When i'm not
            working or learning something new , then i must be working out at the Gym, or playing
            video Games, or watching Anime or any movie with superhero in it.
          </Text>
        </VStack>
      </HStack>

      <HStack as='footer' justifyContent='end' mt='1rem' px='1rem' mb={["5rem", "", "", "", ""]}>
        <Link to='/resume'>
          <HStack
            as='div'
            align='center'
            transition='all 0.3s ease-in'
            _hover={{ textDecor: "underline" }}
          >
            <Text>Check out my resume</Text>
            <Box as={motion.div} transition='0.5s linear' animation={animation}>
              <BsArrowBarRight />
            </Box>
          </HStack>
        </Link>
      </HStack>
    </Box>
  );
};

export default Home;
