import { Box, Button, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import PageInfoHeader from "../components/PageInfoHeader";
import useDisplayHooks from "../hooks/useDisplayHooks";
import { CONTACT_ME_LINK } from "../utils/constants";
import { Link } from "react-router-dom";
import { MdLocationPin, MdPersonPinCircle } from "react-icons/md";
import { BsGithub, BsInstagram, BsLinkedin, BsTelephone, BsTwitter } from "react-icons/bs";

const bannerImg = "./twitterBanner.jpeg";
const avatar = "./avatar.jpeg";

const easyLinks = [
  {
    title: "Abuja Nigeria",
    icon: <MdLocationPin />,
  },
  {
    title: "Instagram",
    icon: <BsInstagram />,
  },
  {
    title: "Github",
    icon: <BsGithub />,
  },
  {
    title: "LinkedIn",
    icon: <BsLinkedin />,
  },
  {
    title: "Twitter",
    icon: <BsTwitter />,
  },
  {
    title: "09033872114",
    icon: <BsTelephone />,
  },
];

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

      <HStack
        borderBottom='1px solid'
        alignItems='stretch'
        borderColor={borderColor}
        py='.4rem'
        px='1rem'
      >
        <VStack width='full' justifyContent='start' alignItems='center' border='1px solid'>
          <MdPersonPinCircle />

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
          <Text fontWeight='normal' fontSize='sm'>
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
