import { Box, Stack } from "@chakra-ui/react";
import PageInfoHeader from "../components/PageInfoHeader";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import { useState } from "react";
import useDisplayHooks from "../hooks/useDisplayHooks";
import { resume } from "../utils/constants";
import { PDFViewer } from "../components/PDFViewer";

type PDFFile = string | File | null;

const Resume = () => {
  const [file] = useState<PDFFile>(resume);
  const { borderColor } = useDisplayHooks();

  return (
    <Box as='main' w='full'>
      <PageInfoHeader />
      <Stack
        justifyContent='center'
        width='full'
        overflowX='scroll'
        borderTop='.6px solid'
        borderColor={borderColor}
        alignItems='center'
        as='section'
        pb={["5rem", "", "", "0"]}
      >
        <PDFViewer file={file as string} />
      </Stack>
    </Box>
  );
};

export default Resume;
