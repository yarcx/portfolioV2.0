import { Box, Image } from "@chakra-ui/react";
import PageInfoHeader from "../components/PageInfoHeader";

const bannerImg = "./twitterBanner.jpeg";
const Home = () => {
  return (
    <Box as='main' w='full'>
      <PageInfoHeader />
      <Image
        width='100%'
        objectFit='fill'
        objectPosition='top'
        height='200px'
        src={bannerImg}
        cursor='pointer'
        alt='banner image'
      />
    </Box>
  );
};

export default Home;
