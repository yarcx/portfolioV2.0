import {
  Box,
  Flex,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";
import useDisplayHooks from "../../hooks/useDisplayHooks";
import { BsSearch } from "react-icons/bs";
import { articleList } from "../../utils/constants";

const Layout = () => {
  const { bgColor, borderColor, displayUiBg } = useDisplayHooks();
  return (
    <Box
      bg={bgColor}
      bgPosition={"center bottom center"}
      position='relative'
      bgRepeat='no-repeat'
      backdropBrightness='1'
    >
      <HStack
        align='stretch'
        as='main'
        w='100vw'
        px={["", "", "1rem", "3rem"]}
        maxWidth='1400px'
        mx='auto'
        h='100dvh'
      >
        <LeftSideBar />

        <Flex
          borderLeft={["", "", "1px solid", "1px solid"]}
          borderRight={["", "", "", "", "1px solid"]}
          borderColor={["", "", borderColor, borderColor, borderColor]}
          flexGrow={1}
          maxW={["100%", "100%", "100%", "650px", "650px"]}
          mx='auto'
        >
          <Outlet />
        </Flex>

        <Box w={"370px"} as='aside' display={["none", "none", "none", "none", "block"]} py='.6rem'>
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <BsSearch color='gray.300' />
            </InputLeftElement>
            <Input rounded='3xl' bg={displayUiBg} type='tel' placeholder='Search recent reads' />
          </InputGroup>
          <Box mt='2rem' bg={displayUiBg} rounded='lg' py='.5rem' px={".8rem"}>
            <Heading size='md' mb='1rem'>
              Recently read articles
            </Heading>

            {articleList.map((item, index) => (
              <Article
                key={index}
                author={item.author}
                title={item.title}
                firstParagraph={item.firstParagraph}
                linkUrl={item.linkUrl}
              />
            ))}
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default Layout;

const Article = ({
  author,
  title,
  firstParagraph,
  linkUrl,
}: {
  author: string;
  title: string;
  firstParagraph: string;
  linkUrl: string;
}) => {
  console.log("🚀 ~ file: Layout.tsx:74 ~ Article ~ item:", linkUrl);
  const { grayText } = useDisplayHooks();
  return (
    <Box my='1rem'>
      <Text color={grayText} fontWeight='light'>
        By {author}
      </Text>
      <Heading size='sm' my='1px'>
        {title}
      </Heading>
      <Text fontWeight='normal' isTruncated>
        {firstParagraph}
      </Text>
    </Box>
  );
};
