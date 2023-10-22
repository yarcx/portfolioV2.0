import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { Link, Outlet, useLocation } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";
import useDisplayHooks from "../../hooks/useDisplayHooks";
import { BsSearch } from "react-icons/bs";
import { PageLink, articleList } from "../../utils/constants";
import useUiContext from "../../hooks/useUiContext";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Layout = () => {
  const { pathname } = useLocation();
  const { bgColor, borderColor, displayUiBg } = useDisplayHooks();
  const {
    state: { uiColor },
  } = useUiContext();
  const [recentReadSearch, setRecentReadSearch] = useState("");

  const handleSearchRecentReadOrGoogle = (searchString: string) => {
    setRecentReadSearch(searchString);
  };

  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    if (!articleList.some((art) => art.title.toLowerCase().includes(recentReadSearch))) {
      const formattedQuery = recentReadSearch.replace(/\s+/g, "+");
      const googleURL = `https://www.google.com/search?q=${formattedQuery}`;
      window.open(googleURL, "_blank");
    }
    setRecentReadSearch("");
  };

  return (
    <Box
      bg={bgColor}
      bgPosition={"center bottom center"}
      position='relative'
      bgRepeat='no-repeat'
      backdropBrightness='1'
      maxH='100vh'
    >
      <HStack
        align='stretch'
        as='main'
        w='100vw'
        px={["", "", "1rem", "3rem"]}
        maxWidth='1400px'
        mx='auto'
        minH='100vh'
        maxH='100vh'
        overflowY='auto'
        pos='relative'
      >
        <LeftSideBar />

        <Flex
          borderLeft={["", "", "1px solid", "1px solid"]}
          borderRight={["", "", "", "", "1px solid"]}
          borderColor={["", "", borderColor, borderColor, borderColor]}
          flexGrow={1}
          maxW={["100%", "100%", "100%", "650px", "650px"]}
          mx='auto'
          position='relative'
        >
          <Outlet />
          <HStack
            borderTop='.6px solid'
            borderColor={borderColor}
            pos='fixed'
            bottom='0'
            height='60px'
            width='100%'
            display={["flex", "flex", "none", "none"]}
            p={3}
            justifyContent='space-between'
            zIndex={10}
            bg={bgColor}
          >
            {PageLink.map(({ icon, route }) => {
              const isActiive = pathname === route;
              return (
                <Link key={route} to={route}>
                  <IconButton
                    bg={isActiive ? "gray.100" : ""}
                    aria-label='Navigation Button'
                    icon={icon}
                    isRound
                  />
                </Link>
              );
            })}
          </HStack>
        </Flex>

        <Box w={"370px"} as='aside' display={["none", "none", "none", "none", "block"]} py='.6rem'>
          <form onSubmit={handleSubmit(onSubmit)} id='recentReads'>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <BsSearch color='gray.300' />
              </InputLeftElement>
              <Input
                rounded='3xl'
                _active={{ borderColor: uiColor, outline: uiColor }}
                focusBorderColor={uiColor}
                bg={displayUiBg}
                type='text'
                onChange={(e) => handleSearchRecentReadOrGoogle(e.target.value.toLowerCase())}
                placeholder='Search recent reads or google'
              />
            </InputGroup>
          </form>

          <Box mt='2rem' bg={displayUiBg} rounded='lg' py='.5rem' h='90%' px={".8rem"}>
            <Heading size='md' mb='1rem'>
              Recently read articles or Google
            </Heading>

            {articleList
              .filter((article) => {
                return article.title.toLowerCase().includes(recentReadSearch);
              })
              .map((item, index) => (
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
  const { grayText } = useDisplayHooks();
  return (
    <Link target='_blank' to={linkUrl}>
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
    </Link>
  );
};
