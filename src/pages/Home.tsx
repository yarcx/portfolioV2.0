import { Box, Button, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import PageInfoHeader from "../components/PageInfoHeader";
import useDisplayHooks from "../hooks/useDisplayHooks";
import { CONTACT_ME_LINK, easyLinks } from "../utils/constants";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import useUiContext from "../hooks/useUiContext";
import CustomBadge from "../components/CustomBadge";
import FooterLink from "../components/FooterLink";

const bannerImg = "./twitterBanner.jpeg";
const avatar = "./avatar.jpeg";

const Home = () => {
  const { borderColor, bgColor, grayText } = useDisplayHooks();
  const {
    state: { uiColor },
  } = useUiContext();
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
            className='profileImage'
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
          _hover={{ bg: uiColor, opacity: "0.8", color: "white" }}
          transition='all .2s linear'
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
        <Marquee
          pauseOnHover={true}
          pauseOnClick={true}
          speed={40}
          gradientWidth={30}
          gradientColor={bgColor}
          gradient={true}
        >
          <HStack px={3} justifyContent='space-between' gap='1rem'>
            {easyLinks.map((item, index) =>
              !item?.link.startsWith("#") ? (
                <Button
                  key={index}
                  bg='none'
                  color={grayText}
                  leftIcon={item.icon}
                  colorScheme='teal'
                  variant='solid'
                  py='1px'
                  px='0'
                  fontSize='sm'
                  _hover={{ color: uiColor }}
                  transition='all .2s linear'
                >
                  <a href={item?.link} target='_blank' referrerPolicy='no-referrer'>
                    <Text transition='color .2s ease-in'>{item.title}</Text>
                  </a>
                </Button>
              ) : (
                <Button
                  key={index}
                  bg='none'
                  color={grayText}
                  leftIcon={item.icon}
                  colorScheme='teal'
                  variant='solid'
                  _hover={{ color: uiColor }}
                  transition='color .2s linear'
                  py='1px'
                  px='0'
                  fontSize='sm'
                >
                  <Text transition='color .2s ease-in'>{item.title}</Text>
                </Button>
              )
            )}
          </HStack>
        </Marquee>
      </HStack>

      <VStack>
        <HStack alignItems='stretch' pt='.5rem' pb='2rem' px='1rem'>
          <VStack
            width='60%'
            display={["none", "", "", "flex"]}
            justifyContent='start'
            alignItems='center'
          >
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
              Hey there, I'm Hassan Yakub <CustomBadge text='Software Engineer' /> and{" "}
              <CustomBadge text='Technical Wordsmith' /> from Nigeria. I craft sleek{" "}
              <CustomBadge text='Frontend' /> masterpieces and robust <CustomBadge text='Backend' />
              , blending pixel-perfect precision with server-side wizardry. Beyond coding, I'm on a
              mission to share my career wisdom and tech-trend insights to empower others. When I'm
              not coding or diving into new tech frontiers, catch me breaking a sweat at the{" "}
              <CustomBadge text='Gym' />, conquering virtual worlds in video{" "}
              <CustomBadge text='Games' />, or indulging in epic superhero sagas on screen!
            </Text>
          </VStack>
        </HStack>
        <FooterLink to='resume'>
          <Text>Check out my Resume</Text>
        </FooterLink>
      </VStack>
    </Box>
  );
};

export default Home;
